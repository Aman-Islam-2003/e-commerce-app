import { fetchProductById } from '@/app/lib/fetchProducts';
import Image from 'next/image';

export default async function ProductDetailPage({ params }) {
  const product = await fetchProductById(params?.id);
  console.log("paramss", params)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
        <p className="text-gray-600 mt-2">The requested product could not be loaded.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="relative h-96 w-full">
            <Image 
              src={product?.image} 
              alt={product?.title} 
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product?.title}
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gray-600 text-sm">
                ({product?.rating?.count} reviews)
              </span>
            </div>
          </div>

          <p className="text-gray-700 text-lg">
            {product?.description || 'No description available.'}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Price:</span>
              <span className="font-bold text-xl text-gray-900">
                ${product?.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Category:</span>
              <span className="text-gray-800 capitalize">
                {product?.category || 'uncategorized'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Availability:</span>
              <span className="text-green-600 font-medium">In Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
