import logo from './logo.svg';
import './App.css';
// import ProductInput from './components/ProductInput';
import Product from './components/Product';
import { useState } from 'react';


function App() {
  const [products, setProducts] = useState([{
    "name": "Jogo Pula Macaco, Estrela",
    "image": "https://m.media-amazon.com/images/I/517hsQ81yrL._AC_UL320_.jpg",
    "link": "https://www.amazon.com/Brinquedos-Estrela-1201607000031-Macaco-Multicores/dp/B077P99RTC/ref=sr_1_1?keywords=macaco&qid=1699572798&sr=8-1",
    "rating": "4,8 de 5 estrelas",
    "totalRatings": "5.605De: ",
    "price": "R$ 47,90R$ 69,99",
    "page": 1
  }]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const handleSearch = async (keyword) => {
    const url = 'http://localhost:3331';
    try {
      setLoading(true);
      const response = await fetch(`${url}/api?keyword=${keyword}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setProducts(products);
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Amazon Scraper</h1>
      <div className="flex">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border p-2 flex-1 mr-2"
          placeholder="Enter search keyword"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
          Search Product
        </button>
      </div>
      <Product
        product={products[0]}
        keyword='f'
      />
    </div>
  );
}

export default App;
