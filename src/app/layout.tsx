import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Your Brand — Storefront',
  description: 'Minimal, modern ecommerce for your clothing brand',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <header className="border-b sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
          <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">Your Brand</Link>
            <nav className="flex items-center gap-5 text-sm">
              <Link href="/" className="hover:underline">Shop</Link>
              <a href="#about" className="hover:underline">About</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-16">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-600 dark:text-zinc-300 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
            <p>Built with Next.js • Fast, accessible, and SEO-friendly.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
