'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

type StoreTranslations = {
  restaurants: string;
  fast_food: string;
  tech_haven: string;
  electronics: string;
  supermarkets: string;
  fresh_mart: string;
  groceries: string;
  daily_shop: string;
  essentials: string;
  eco_market: string;
  organic: string;
  quick_buy: string;
  express_shop: string;
  fashion_style: string;
  velvet_co: string;
  clothing: string;
  trendly: string;
  accessories: string;
  sneaker_head: string;
  shoes: string;
  glamour: string;
  beauty: string;
  marketplace: string;
};

type Store = {
  id: string | number;
  name: string;
  sub: string;
};

type StoreCategory = {
  id: string;
  title: string;
  stores: Store[];
};

const storeCategories = (t: StoreTranslations): StoreCategory[] => [
  {
    id: 'cat1',
    title: t.restaurants,
    stores: [
      { id: 'mcdonalds', name: "McDonald's", sub: t.fast_food },
      { id: 'tech', name: t.tech_haven, sub: t.electronics },
    ],
  },
  {
    id: 'cat2',
    title: t.supermarkets,
    stores: [
      { id: 5, name: t.fresh_mart, sub: t.groceries },
      { id: 6, name: t.daily_shop, sub: t.essentials },
      { id: 7, name: t.eco_market, sub: t.organic },
      { id: 8, name: t.quick_buy, sub: t.express_shop },
    ],
  },
  {
    id: 'cat3',
    title: t.fashion_style,
    stores: [
      { id: 9, name: t.velvet_co, sub: t.clothing },
      { id: 10, name: t.trendly, sub: t.accessories },
      { id: 11, name: t.sneaker_head, sub: t.shoes },
      { id: 12, name: t.glamour, sub: t.beauty },
    ],
  },
];

export default function StoresMarketplace() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <main className="h-dvh w-full overflow-hidden bg-surface-soft text-ink">
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm overflow-y-auto pb-24 pt-6">
        <header className="mb-8 flex items-center justify-between px-5">
          <button
            onClick={() => router.push('/dashboard')}
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <h1 className="text-lg font-semibold">{t.marketplace}</h1>

          <div className="h-11 w-11" />
        </header>

        <div className="space-y-8">
          {storeCategories(t).map((category) => (
            <div key={category.id}>
              <h3 className="mb-4 px-5 text-xl font-bold">{category.title}</h3>

              <div className="scrollbar-hide flex gap-4 overflow-x-auto px-5">
                {category.stores.map((store) => (
                  <button
                    key={store.id}
                    onClick={() => router.push(`/stores/${store.id}`)}
                    className="group flex w-28 shrink-0 flex-col items-center"
                  >
                    <div className="mb-3 flex h-28 w-28 items-center justify-center rounded-3xl border border-black/5 bg-white shadow-sm">
                      <div
                        className={`h-12 w-12 rounded-full ${
                          store.id === 'mcdonalds'
                            ? 'bg-[#DB0007]'
                            : 'bg-black/5'
                        }`}
                      />
                    </div>

                    <p className="text-sm font-bold">{store.name}</p>
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
