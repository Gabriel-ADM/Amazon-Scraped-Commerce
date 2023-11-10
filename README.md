# Amazon Scraper APP

This API allows you to scrape Amazon search results for a given keyword. It utilizes Express.js for the server, Axios for making HTTP requests, Cheerio for web scraping, and CORS for cross-origin resource sharing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Scraping Function](#scraping-function)
- [Running the Server](#running-the-server)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/amazon-scraper-api.git
   ```

2. Install dependencies:

   ```bash
   cd amazon-scraper-api
   cd api
   npm install
   ```

## Usage

To use the API, follow the steps below:

1. Start the server:

   ```bash
   cd api
   node index.js
   ```

2. Access the API at `http://localhost:3331`.

## Endpoints

### 1. Check Server Status

- **URL:** `/`
- **Method:** `GET`
- **Description:** Check if the server is running successfully.

### 2. Get Amazon Item Info

- **URL:** `/api`
- **Method:** `GET`
- **Parameters:**
  - `keyword`: The search keyword for Amazon products.
- **Description:** Scrapes Amazon search results for the specified keyword.

## Scraping Function

The scraping function (`scrapAmazonSearch`) is responsible for fetching Amazon search results, parsing the HTML using Cheerio, and extracting relevant product information. The function supports pagination to retrieve results from multiple pages.

## Running the Server

Start the server using the following command:

```bash
cd api
node index.js
```

The server will be accessible at `http://localhost:3333`.

## Running the Frontend Application

Then you need to run the frontend application to use the API

1. Start the server:

   ```bash
   cd app
   npm i
   npm start
   ```

2. Access the webpage at `http://localhost:3000`. And go searching keywords

## License

This project is licensed under the [MIT License](LICENSE).