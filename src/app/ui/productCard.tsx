'use client';

import { Product } from '@/app/lib/definitions';
import Link from 'next/link';

// ProductCard component receives a `product` object as a prop
export default function ProductCard({ product }: { product: Product }) {
  return (

    // Entire card is a clickable link to the product's description page
    <Link
      href={`/description/${product.id}`}
      className="block transition-transform hover:scale-[1.02]"
    >
      <div className="flex flex-col justify-between rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-sm hover:border-blue-500 hover:shadow-md transition-colors duration-200">
        {/* Product image */}
        <img
          src={product.image_url}
          alt={product.name}
          className="mb-4 h-40 w-full object-contain rounded-md bg-white"
        />

        <hr className="my-2 border-gray-200" />

        {/* Product name and price */}
        <div className="mt-auto flex justify-between items-center pt-2">
          <h2 className="text-sm font-medium text-gray-700">{product.name}</h2>
          <p className="text-sm font-semibold text-gray-900">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
