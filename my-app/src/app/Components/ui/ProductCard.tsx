"use client";

import { Product } from "../../Data/Products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56">
        <img
          src={product.image.src}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Discount badge */}
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-5 py-1 rounded-full shadow-lg z-10">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-lg text-green-800 mb-1">{product.name}</h3>
          <p className="text-black text-sm mb-3">{product.description}</p>
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="font-bold text-green-900 text-lg">₹{product.price}</span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="bg-green-800 text-white font-semibold py-2 px-4 rounded-xl w-full hover:bg-green-900 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
