
// Disable Next.js caching for this route so data is always fresh
export const revalidate = 0;

import { fetchProducts } from '@/app/lib/data';
import Link from 'next/link';
import DashboardTabs from '@/app/ui/dashboardTabs';

export default async function Inventory() {

  // Fetch all product data from the database
  const products = await fetchProducts();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <DashboardTabs />

      {/* List all products */}
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-50 border border-gray-300 shadow-md p-4 rounded-md flex gap-x-4 relative"
        >
          {/* Product image */}
          <img
            src={product.image_url}
            alt={product.name}
            className="w-24 h-24 object-contain rounded-md"
          />

          {/* Product info: name, inventory, price */}
          <div className="flex flex-col flex-1">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <div className="flex gap-6 mt-2 text-gray-700">
              <p><strong>Inventory:</strong> {product.inventory}</p>
              <p><strong>Price:</strong> ${product.price}</p>
            </div>

            {/* Edit button linking to the edit form */}
            <Link
              href={`/dashboard/inventory/editProduct/${product.id}`}
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}