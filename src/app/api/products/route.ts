import { NextResponse } from 'next/server';
import { createProduct, getAllProducts } from '@/app/db/repositories/ProductsRepository';

export async function GET() {
  try {
    const products = await getAllProducts();
    return NextResponse.json({ products });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const created = await createProduct(body);
    return NextResponse.json({ product: created }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
