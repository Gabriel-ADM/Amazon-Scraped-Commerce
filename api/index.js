
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const cheerio = require('cheerio');

// Initializing the node API
const app = express();
const port = 3331
const axiosInstance = axios.create();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Base endpoint that tells if everything is okay
app.get("/", async (req, res) => {
    return res.status(200).send("Server sucessfully running!");
});

// Get Amazon items info by searching with a keyword
app.get("/api", async (req, res) => {
    try {
        const searchKey = req.query.keyword;
        const amazonUrl = `https://www.amazon.com.br/s?k=${searchKey}`;

        const response = await scrapAmazonSearch(amazonUrl);

        return res.status(200).send(response);
    } catch (err) {
        console.log(err);
        return res.status(400).send(`Something went wrong.\n Error:${err}`);
    }
})

// Running the api server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})

// Scraping items function
async function scrapAmazonSearch(url) {
    try {
        const pageRes = await axiosInstance.get(url);
        const $ = cheerio.load(pageRes.data);

        // Get quantity of pages of a product
        const pageNumber = $('.s-pagination-container').find('.s-pagination-item').last().prev().text();

        const products = [];
        for (let page = 1; page <= parseInt(pageNumber); page++) {
            // Scrap product data from each page retrieved
            let pageRes = await axiosInstance.get(`${url}&page=${page}`);
            const $ = cheerio.load(pageRes.data);

            const table = $('.s-result-list');
            table.find('.s-result-item').each((index, product) => {
                const name = $(product).find('.a-text-normal').find('.a-text-normal').text();
                const image = $(product).find('.s-image').attr('src');
                const link = 'https://www.amazon.com' + $(product).find('.a-link-normal').attr('href');
                const price = $(product).find('.a-offscreen').text();
                const rating = $(product).find('.a-icon-alt').text();
                const totalRatings = $(product).find('.a-section').find('.a-link-normal').find('.a-size-base').text();

                // After getting the data from the currently tags, pushing them into a response array
                if (name !== '' && name !== undefined) {
                    products.push({
                        name: name,
                        image: image,
                        link: link,
                        rating: rating === '' ? 'not rated' : rating,
                        totalRatings: rating === '' ? 0 : totalRatings,
                        price: price,
                        page: page
                    });
                }
            })

        }
        return products;
    } catch (err) {
        console.log(err);
        // throw err;
    }
}
