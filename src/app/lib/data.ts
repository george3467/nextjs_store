'use server'

import { Product } from './definitions';
import postgres from 'postgres';

// Initialize connection to the PostgreSQL database
export const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Fetches all products from the database.
export async function fetchProducts() {
  try {
    const data = await sql<Product[]>`
        SELECT id, name, price, inventory, image_url
        FROM products
        ORDER BY id ASC
        `;
    return data;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

// Fetches a single product by its id
export async function fetchProductById(id: string){
  try {
    const data = await sql<Product[]>`
      SELECT id, name, description, inventory, price, image_url
      FROM products
      WHERE id = ${id};
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}

// Fetches all orders joined with their corresponding product details.
export async function fetchOrderByProductId() {
  try {
    const orders = await sql`
      SELECT 
        orders.id,
        orders.productId,
        orders.name AS customer_name,
        orders.address AS customer_address,
        products.name AS product_name,
        products.image_url AS product_image_url
      FROM orders
      JOIN products ON products.id = orders.productId;
    `;
    return orders;
    
  } catch (error) {
    console.error('Error fetching orders with product info:', error);
    throw error;
  }
}
