'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

// Data structure organized by categories
const storeCategories = [
  {
    id: 'cat1',
    title: 'Restaurants',
    stores: [
      { id: 1, name: 'Burger Lab', sub: 'Fast Food' },
      { id: 2, name: 'Green Bowl', sub: 'Healthy' },
      { id: 3, name: 'Pizza Hut', sub: 'Italian' },
      { id: 4, name: 'Sushi Bar', sub: 'Japanese' },
    ],
  },
  {
    id: 'cat2',
    title: 'Supermarkets',
    stores: [
      { id: 5, name: 'Fresh Mart', sub: 'Groceries' },
      { id: 6, name: 'Daily Shop', sub: 'Essentials' },
      { id: 7, name: 'Eco Market', sub: 'Organic' },
      { id: 8, name: 'Quick Buy', sub: 'Express' },
    ],
  },
  {
    id: 'cat3',
    title: 'Fashion & Style',
    stores: [
      { id: 9, name: 'Velvet Co', sub: 'Clothing' },
      { id: 10, name: 'Trendly', sub: 'Accessories' },
      { id: 11, name: 'Sneaker Head', sub: 'Shoes' },
      { id: 12, name: 'Glamour', sub: 'Beauty' },
    ],
  },
];

export default function StoresPage() {
  const router = useRouter();

  return (
    // 1. FIX VERTICAL SCROLL: main is locked (h-dvh overflow-hidden)
    <main className="h-dvh w-full overflow-hidden bg-surface-soft text-ink">
      {/* 2. FIX VERTICAL SCROLL: section handles the scroll (internal-scroll-y h-full overflow-y-auto) */}
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm pb-24 pt-6 overflow-y-auto">
        {/* Header */}
        <header className="px-5 flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink active:scale-95 transition-transform"
            aria-label="Go back"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">Stores</h1>
          <div className="h-11 w-11" />
        </header>

        {/* Banner */}
        <div className="px-5 mb-8">
          <div className="overflow-hidden rounded-[2rem] bg-brand-violet p-6 text-surface shadow-xl shadow-brand-violet/20">
            <h2 className="text-2xl font-semibold leading-tight">
              Hi Jennifer,
            </h2>
            <p className="mt-1 text-lg text-white/80">
              We have 10% discount for you.
            </p>
          </div>
        </div>

        {/* Categories Loop */}
        <div className="space-y-8">
          {storeCategories.map((category) => (
            <div key={category.id} className="flex flex-col">
              {/* Category Title */}
              <div className="px-5 flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold tracking-tight">
                  {category.title}
                </h3>
                <button className="text-sm font-semibold text-brand-violet">
                  See All
                </button>
              </div>

              {/* 3. FIX HORIZONTAL SCROLL: overflow-x-auto, touch-pan-x, snap-x */}
              <div className="flex w-full overflow-x-auto gap-4 px-5 pb-4 scrollbar-hide touch-pan-x snap-x snap-mandatory">
                {category.stores.map((store) => (
                  <button
                    key={store.id}
                    // shrink-0 prevents the cards from squishing, snap-start aligns them properly
                    className="shrink-0 snap-start flex flex-col items-center w-28 group active:scale-95 transition-transform"
                  >
                    {/* Logo Placeholder (Square as requested) */}
                    <div className="h-28 w-28 rounded-3xl bg-white border border-black/5 shadow-sm mb-3 flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <div className="h-12 w-12 rounded-2xl bg-black/5" />
                    </div>

                    {/* Store Info */}
                    <p className="font-bold text-sm text-ink truncate w-full text-center">
                      {store.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-black/40 text-center mt-0.5 truncate w-full">
                      {store.sub}
                    </p>
                  </button>
                ))}
                {/* Extra spacer at the end so the last item doesn't stick to the screen edge */}
                <div className="shrink-0 w-1" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
