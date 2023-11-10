import React, { useState } from 'react';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async () => {
    setProducts([]);
    const url = 'http://localhost:3333';
    try {
      setLoading(true);
      const response = await fetch(`${url}/api?keyword=${keyword}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data); // Atualiza o estado com os produtos retornados
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 text-center">Amazon Scraper</h1>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
        {loading && <p>Loading products info</p>}
        {products.length === 0 && !loading
          ? <p className='bg-red-400 text-white p-2 mt-10 mx-full px-auto text-center rounded shadow-md'>No products to show, type a keyword and search for new ones</p>
          : products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </div>
  );
}

export default App;