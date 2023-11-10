import React from "react";

const Product = ({ product }) => {
  
  // Filter the number from the ratings because the scrapping return some string trash
  const formatRating = (ratingText) => {
    toString(ratingText);
    return ratingText.match(/^\d+/) ? ratingText.match(/^\d+/)[0] : 0;
  }

  // Sometimes prices come with aditional info, so this function filter the important data
  const formatPrice = priceText =>{
    toString(priceText);
    priceText =  priceText.split('$' || 'R$');
    return priceText[0] + priceText[1];
  }

  return (
    <div className="max-w-xs mx-auto h-100 overflow-hidden bg-white shadow-lg rounded-lg">
      <img
        className="w-full h-60 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-1">{product.rating}</p>
        <p className="text-gray-600 mb-1">{formatRating(product.totalRatings)} ratings</p>
        <p className="text-gray-800 font-bold mb-2">${formatPrice(product.price)}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-500 hover:underline mb-0"
        >
          View Product
        </a>
      </div>
    </div>
  );
};

export default Product;
