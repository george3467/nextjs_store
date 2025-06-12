
// Disable Next.js caching for this route so data is always fresh
export const revalidate = 0;

import { fetchOrderByProductId } from '@/app/lib/data';
import { fillOrder } from '@/app/lib/actions';
import SubmitButton from '@/app/ui/submitButton';
import DashboardTabs from '@/app/ui/dashboardTabs';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions"; 
import { redirect } from "next/navigation";


export default async function Dashboard() {

  // Get the current user's session for sign-in
  const session = await getServerSession(authOptions);

  // If not authenticated, redirect to the sign-in page
  if (!session) {
    redirect("/signin");
  }

  // Fetch all pending orders (joined with product data)
  const orders = await fetchOrderByProductId();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">

      {/* Tab navigation (e.g., Pending Orders / Inventory) */}
      <DashboardTabs />

      {/* Render a form for each order, allowing the admin to mark it as filled */}
      {orders.map((order) => (
        <form
          key={order.id}
          action={fillOrder}
          className="bg-gray-50 border border-gray-300 shadow-md p-4 rounded-md flex gap-x-4 relative"
        >
          {/* Hidden fields needed for server action */}
          <input type="hidden" name="orderId" value={order.id} />
          <input type="hidden" name="productId" value={order.productid} />

          {/* Product image */}
          <img
            src={order.product_image_url}
            alt={order.product_name}
            className="w-24 h-24 object-contain rounded-md"
          />
          {/* Order details */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">{order.product_name}</h2>
            <p><strong>Customer:</strong> {order.customer_name}</p>
            <p><strong>Address:</strong> {order.customer_address}</p>
          </div>

          <div className="absolute bottom-4 right-4">
            <SubmitButton
              label="Fill Order"
              pendingLabel="Completing..."
              variant="success"
            />
          </div>
        </form>
      ))}
    </div>
  );
}