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
      { id: 'Mcdonalds', name: "McDonald's", sub: 'Fast Food' },
      { id: 'Tech', name: 'Tech Haven', sub: 'Electronics' },
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

export default function StoresMarketplace() {
  const router = useRouter();

  return (
    <main className="h-dvh w-full overflow-hidden bg-surface-soft text-ink">
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm pb-24 pt-6 overflow-y-auto">
        <header className="px-5 flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/dashboard')}
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">Marketplace</h1>
          <div className="h-11 w-11" />
        </header>

        <div className="space-y-8">
          {storeCategories.map((category) => (
            <div key={category.id}>
              <h3 className="px-5 text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex gap-4 px-5 overflow-x-auto scrollbar-hide">
                {category.stores.map((store) => (
                  <button
                    key={store.id}
                    // Al hacer clic, Jennifer va al detalle de la tienda
                    onClick={() => router.push(`/stores/${store.id}`)}
                    className="shrink-0 w-28 flex flex-col items-center group"
                  >
                    <div className="h-28 w-28 rounded-3xl bg-white border border-black/5 shadow-sm mb-3 flex items-center justify-center">
                      {/* Color por defecto para el logo */}
                      <div
                        className={`h-12 w-12 rounded-full ${store.id === 'mcdonalds' ? 'bg-[#DB0007]' : 'bg-black/5'}`}
                      />
                    </div>
                    <p className="font-bold text-sm">{store.name}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
