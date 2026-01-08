import { DB_SCHEMA, getPool } from '@/app/db/pool';

export type Product = {
  id: number;
  name: string;
  slug: string;
  price_cents: number;
  currency: string;
  image_url: string | null;
  description: string | null;
  created_at: string | Date;
};

export async function getAllProducts(): Promise<Product[]> {
  const pool = getPool();
  const { rows } = await pool.query<Product>(`SELECT id, name, slug, price_cents, currency, image_url, description, created_at FROM ${DB_SCHEMA}.products ORDER BY created_at DESC`);
  return rows;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const pool = getPool();
  const { rows } = await pool.query<Product>(`SELECT id, name, slug, price_cents, currency, image_url, description, created_at FROM ${DB_SCHEMA}.products WHERE slug = $1 LIMIT 1`, [slug]);
  return rows[0] || null;
}

export async function createProduct(p: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
  const pool = getPool();
  const { rows } = await pool.query<Product>(
    `INSERT INTO ${DB_SCHEMA}.products(name, slug, price_cents, currency, image_url, description)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING id, name, slug, price_cents, currency, image_url, description, created_at`,
    [p.name, p.slug, p.price_cents, p.currency, p.image_url, p.description]
  );
  return rows[0];
}
