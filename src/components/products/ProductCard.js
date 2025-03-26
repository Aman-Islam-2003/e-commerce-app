"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../cart/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <Link href={`/product/${product?.id}`} className="mb-4 group">
        <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-50">
          <Image
            src={product?.image}
            alt={product?.title}
            fill
            className="object-contain group-hover:opacity-90 transition-opacity"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="flex-grow flex flex-col justify-between mb-4">
        <div>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 leading-tight">
            {product?.title}
          </h3>
        </div>
        <p className="text-lg font-bold text-gray-900 mt-2">${product?.price}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto w-full bg-blue-600 text-white font-medium py-2 rounded-lg transition-colors duration-200 hover:bg-blue-600 active:bg-blue-700 flex items-center justify-center gap-2 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}