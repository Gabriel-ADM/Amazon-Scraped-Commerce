import React from "react";

const Product = ({ product }) => {
    return (
        <div className="max-w-xs mx-auto overflow-hidden bg-white shadow-lg rounded-lg">
            <img
                className="w-full h-auto"
                src={product.image}
                alt={product.name}
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">{product.rating}</p>
                <p className="text-gray-600">{product.totalRatings}</p>
                <p className="text-gray-800 font-bold">{product.price}</p>
                <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-blue-500"
                >
                    View the product
                </a>
            </div>
        </div>
    );
}; export default Product;