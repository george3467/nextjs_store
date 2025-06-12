import { sql } from '@/app/lib/data'

async function query_func() {
	const data = await sql`
    SELECT * FROM orders
    `;
  console.log('Query result:', data);
	return data;
}

export async function GET() {
  try {
  	return Response.json(await query_func());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}


