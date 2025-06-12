
import { fetchProductById } from '@/app/lib/data';
import { createOrder } from '@/app/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from '@/app/ui/submitButton';

export default async function Order({ params }: any) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 border border-gray-300 bg-gray-50 shadow-md rounded-lg">
      <h3 className="text-xl font-bold mb-6 text-center">Please enter your name and address to order this product</h3>

      {/* Product Details */}
      <div className="mb-6 text-center">
        <Image
          src={product.image_url}
          alt={product.name}
          width={200}
          height={150}
          className="mx-auto rounded-md object-contain"
        />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-2">${product.price}</p>
      </div>

      {/* Order Form */}
      <form action={createOrder} className="space-y-4">
        <input type="hidden" name="productId" value={product.id} />
        <div>
          
          {/* Name Field */}
          <label htmlFor="name" className="block font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm"
          />
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block font-medium">
            Your Address
          </label>
          <textarea
            name="address"
            required
            rows={3}
            className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm"
          />
        </div>

        {/* Buttons: Back + Submit */}
        <div className="flex justify-between pt-4">
          <Link
            href={`/description/${product.id}`}
            className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Back
          </Link>
          <SubmitButton
            label="Submit Order"
            pendingLabel="Submitting..."
            variant="primary"
          />
        </div>
      </form>
    </div>
  );
}