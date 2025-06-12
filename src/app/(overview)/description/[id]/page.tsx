import { fetchProductById } from '@/app/lib/data';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';


export default async function Description({ params }: any) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-300 bg-gray-50 rounded-lg shadow-md">
      {/* Back to Home Button */}
      <div className="mb-4">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:underline font-medium"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-50 p-4 rounded-md">
          <img
            src={product.image_url}
            alt={product.name}
            className="max-h-80 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mb-2">${product.price}</p>
            <p className="text-gray-700 mb-4">
              {product.description || 'No description available.'}
            </p>
            <p className="text-sm text-black-500 mb-6">
              Number in Stock:{' '}
              <span className="font-medium">{product.inventory}</span>
            </p>
          </div>

          {/* Order Button or Out of Stock Message */}
          {product.inventory > 0 ? (
            <Link
              href={`/order/${product.id}`}
              className="inline-block w-full md:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Order Now
            </Link>
          ) : (
            <div className="text-center">
              <p className="font-semibold mb-2" style={{ color: '#dc2626' }}>
                The product is out of stock. Sorry!
              </p>
              <button
                disabled
                className="inline-block w-full md:w-auto bg-gray-300 text-gray-500 font-semibold py-2 px-6 rounded-md cursor-not-allowed"
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}