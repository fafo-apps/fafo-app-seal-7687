import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/db/repositories/ProductsRepository';

export function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100);
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-800">
        {product.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image_url} alt={product.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        )}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium">{product.name}</h3>
        </div>
        <div className="text-sm font-semibold">{formatPrice(product.price_cents, product.currency)}</div>
      </div>
    </Link>
  );
}
