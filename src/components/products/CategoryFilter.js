"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function CategoryFilter({ categories, initialProducts }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState(initialProducts);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setProducts(initialProducts);
    } else {
      setProducts(initialProducts?.filter(product => product?.category === category));
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => handleFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}