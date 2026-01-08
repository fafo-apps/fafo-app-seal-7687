import { getProductBySlug } from '@/app/db/repositories/ProductsRepository';

export const dynamic = 'force-dynamic';

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100);
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 grid md:grid-cols-2 gap-10">
      <div className="rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {product.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image_url} alt={product.name} className="w-full h-auto object-cover" />
        )}
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-xl font-medium">{formatPrice(product.price_cents, product.currency)}</p>
        </div>
        {product.description && <p className="text-zinc-600 dark:text-zinc-300 leading-7">{product.description}</p>}
        <button className="w-full md:w-auto rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 transition-colors">Add to Cart</button>
        <p className="text-xs text-zinc-500">Free shipping on orders over $75. 30-day returns.</p>
      </div>
    </div>
  );
}
