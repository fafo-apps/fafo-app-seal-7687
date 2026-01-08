import { getAllProducts } from '@/app/db/repositories/ProductsRepository';
import ProductCard from '@/app/components/ProductCard';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Everyday essentials for your brand</h1>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-lg">Premium fabrics. Modern fits. Designed for movement and made to last.</p>
              <div className="mt-6 flex gap-3">
                <a href="#catalog" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-100 transition-colors">Shop Now</a>
                <a href="#about" className="rounded-full border px-6 py-3 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Learn More</a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=60" alt="Hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">Featured Products</h2>
          <a href="/" className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section id="about" className="bg-zinc-50 dark:bg-zinc-900/50 border-t">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quality First</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">We source premium materials and partner with ethical factories to deliver standout pieces.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Designed to Move</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">Modern, flattering fits made for everyday life—work, weekend, and everything between.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Fast, Free Exchanges</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">We make returns simple so you can shop confidently and love what you wear.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
