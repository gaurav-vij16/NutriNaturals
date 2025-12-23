"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../../Data/Products";

export default function ProductUi() {
  const [activeFilter, setActiveFilter] = useState<string>("Hot Selling");

  const filters = [
    { label: "Best Sellers", tag: "Hot Selling" },
    { label: "Protein Rich", tag: "Protein" },
    { label: "Diabetic Friendly", tag: "Diabetic" },
    { label: "Others", tag: "Other" },
  ];

  const filteredProducts = products.filter(
    (product) => product.Tags === activeFilter
  );

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-12 text-center">
          Talk of the Town
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.tag}
              onClick={() => setActiveFilter(filter.tag)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform ${
                activeFilter === filter.tag
                  ? "bg-green-800 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-black hover:bg-green-100 hover:scale-105"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="text-black col-span-full text-center text-lg">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
