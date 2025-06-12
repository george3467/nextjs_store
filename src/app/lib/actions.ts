'use server';

import { sql } from './data';
import { redirect } from 'next/navigation';

// Handles creation of a new order
export async function createOrder(formData: FormData) {
  const name = formData.get('name')?.toString();
  const address = formData.get('address')?.toString();
  const productId = formData.get('productId')?.toString();

  // Ensure all required fields are present
  if (!name || !address || !productId) {
    throw new Error('Missing form data');
  }
  // Insert new order into the database
  await sql`
    INSERT INTO orders (productId, name, address)
    VALUES (${productId}, ${name}, ${address});
  `;
  // Redirect to confirmation page
  redirect('/confirmation');
}

// Handles fulfillment of an order:
export async function fillOrder(formData: FormData) {
  const orderId = formData.get('orderId')?.toString();
  const productId = formData.get('productId')?.toString();

  // Ensure all required fields are present
  if (!orderId || !productId) {
    throw new Error('Missing order or product ID');
  }
  // Reduce inventory by 1, but only if inventory > 0
  await sql`
    UPDATE products
    SET inventory = inventory - 1
    WHERE id = ${productId} AND inventory > 0;
  `;
  // Remove the order after it's been fulfilled
  await sql`
    DELETE FROM orders WHERE id = ${orderId};
  `;
  // Redirect back to dashboard
  redirect('/dashboard');
}

// Handles updates of product inventory and price
export async function updateProduct(formData: FormData) {
  const id = formData.get('id')?.toString();
  const inventoryStr = formData.get('inventory')?.toString();
  const priceStr = formData.get('price')?.toString();

  // Validate required fields
  if (!id || inventoryStr === undefined || priceStr === undefined) {
    throw new Error('Missing form data');
  }
  // Convert string values to appropriate number types
  const inventory = parseInt(inventoryStr, 10);
  const price = parseFloat(priceStr);

  // Update product details in the database
  await sql`
    UPDATE products
    SET inventory = ${inventory}, price = ${price}
    WHERE id = ${id};
  `;
  // Redirect to inventory dashboard
  redirect('/dashboard/inventory');
}

