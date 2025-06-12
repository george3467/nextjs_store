import Link from 'next/link';
import { updateProduct } from '@/app/lib/actions';
import { fetchProductById } from '@/app/lib/data';
import SubmitButton from '@/app/ui/submitButton';

export default async function EditProduct({ params }: any) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 bg-gray-50 border border-gray-300 shadow-md rounded-md mt-10">

      {/* Product header with image and name */}
      <div className="text-center">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-40 h-40 mx-auto object-contain mb-4"
        />
        <h1 className="text-2xl font-bold">{product.name}</h1>
      </div>

      {/* Form for updating inventory and price */}
      <form action={updateProduct} className="space-y-4">
        <input type="hidden" name="id" value={product.id} />

        {/* Inventory input */} 
        <div>
          <p className="text-sm text-gray-600 mb-1">Current Inventory: {product.inventory}</p>
          <input
            type="number"
            name="inventory"
            min="0"
            required
            placeholder="New inventory"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Price input */}
        <div>
          <p className="text-sm text-gray-600 mb-1">Current Price: ${product.price}</p>
          <input
            type="number"
            step="0.01"
            name="price"
            min="0"
            required
            placeholder="New price"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Action buttons: Back and Submit */}
        <div className="flex justify-between pt-4">
          <Link
            href="/dashboard/inventory"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          >
            Back
          </Link>
          <SubmitButton
            label="Save Changes"
            pendingLabel="Saving..."
            variant="success"
          />
        </div>
      </form>
    </div>
  );
}