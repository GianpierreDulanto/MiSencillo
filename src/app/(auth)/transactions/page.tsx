'use client';
import { useState } from 'react';

import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import TransactionItem from '@/components/shared/transactionItem';

const transactions = [
  {
    id: 1,
    name: 'Figma',
    when: 'Today, 12:30 PM',
    amount: '-$250.00',
    type: 'Subscriptions',
    icon: 'fi',
    iconBg: 'bg-black/5',
  },
  {
    id: 2,
    name: 'Receive from Alex',
    when: 'Yesterday, 08:00 AM',
    amount: '+$580.00',
    type: 'Money In',
    icon: 'arrow-down',
    iconBg: 'bg-brand-lime/50',
  },
  {
    id: 3,
    name: 'Medium',
    when: 'May 10, 06:00 PM',
    amount: '-$99.00',
    type: 'Subscriptions',
    icon: 'dot',
    iconBg: 'bg-warning-100',
  },
  {
    id: 4,
    name: 'Netflix',
    when: 'May 09, 09:15 PM',
    amount: '-$18.99',
    type: 'Subscriptions',
    icon: 'dot',
    iconBg: 'bg-warning-100',
  },
  {
    id: 5,
    name: 'Transfer to Maria',
    when: 'May 09, 03:20 PM',
    amount: '-$320.00',
    type: 'Transfer',
    icon: 'arrow-down',
    iconBg: 'bg-brand-lime/50',
  },
  {
    id: 6,
    name: 'Amazon',
    when: 'May 08, 11:10 AM',
    amount: '-$75.50',
    type: 'Shopping',
    icon: 'dot',
    iconBg: 'bg-black/5',
  },
  {
    id: 7,
    name: 'Salary',
    when: 'May 08, 08:00 AM',
    amount: '+$1,850.00',
    type: 'Income',
    icon: 'arrow-down',
    iconBg: 'bg-brand-lime/50',
  },
  {
    id: 8,
    name: 'Spotify',
    when: 'May 07, 10:45 PM',
    amount: '-$9.99',
    type: 'Subscriptions',
    icon: 'dot',
    iconBg: 'bg-warning-100',
  },
  {
    id: 9,
    name: 'Receive from Daniel',
    when: 'May 07, 04:00 PM',
    amount: '+$120.00',
    type: 'Money In',
    icon: 'arrow-down',
    iconBg: 'bg-brand-lime/50',
  },
  {
    id: 10,
    name: 'Uber',
    when: 'May 06, 09:30 PM',
    amount: '-$14.80',
    type: 'Transport',
    icon: 'dot',
    iconBg: 'bg-black/5',
  },
  {
    id: 11,
    name: 'Apple Music',
    when: 'May 06, 07:00 PM',
    amount: '-$10.99',
    type: 'Subscriptions',
    icon: 'dot',
    iconBg: 'bg-warning-100',
  },
  {
    id: 12,
    name: 'Receive from Sofia',
    when: 'May 05, 02:00 PM',
    amount: '+$60.00',
    type: 'Money In',
    icon: 'arrow-down',
    iconBg: 'bg-brand-lime/50',
  },
  {
    id: 13,
    name: 'Steam',
    when: 'May 05, 12:40 PM',
    amount: '-$45.00',
    type: 'Gaming',
    icon: 'dot',
    iconBg: 'bg-black/5',
  },
  {
    id: 14,
    name: 'Adobe',
    when: 'May 04, 06:10 PM',
    amount: '-$22.00',
    type: 'Subscriptions',
    icon: 'fi',
    iconBg: 'bg-black/5',
  },
  {
    id: 15,
    name: 'Receive from Juan',
    when: 'May 04, 09:00 AM',
    amount: '+$200.00',
    type: 'Money In',
    icon: 'arrow-down',
    iconBg: 'bg-brand-lime/50',
  },
];

export default function TransactionsPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredTransactions = transactions.filter((tx) => {
    const amount = Number(tx.amount.replace(/[+$,-]/g, '').replace(',', ''));

    const matchesCategory =
      selectedCategory === 'All' || tx.type === selectedCategory;

    const matchesMin = !minPrice || amount >= Number(minPrice);

    const matchesMax = !maxPrice || amount <= Number(maxPrice);

    return matchesCategory && matchesMin && matchesMax;
  });

  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink">
      <section className="mx-auto flex h-full w-full max-w-sm flex-col px-5 pt-6">
        {/* CABECERA FIJA */}
        <header className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-surface shadow-sm active:scale-95 transition"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <h1 className="text-lg font-semibold">Transactions</h1>

          <button type="button" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </header>

        {/* SEARCH FIJO */}
        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-surface p-3">
          <Search className="h-4 w-4 text-black/40" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none"
          />
        </div>

        {showFilters && (
          <>
            {/* fondo oscuro */}
            <div
              className="fixed inset-0 z-40 bg-black/25"
              onClick={() => setShowFilters(false)}
            />

            {/* panel */}
            <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 rounded-t-[2rem] bg-surface p-5 shadow-2xl">
              {/* indicador */}
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-black/15" />

              {/* header */}
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <h2 className="text-lg font-semibold">Filter</h2>

                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="text-black/40"
                >
                  ✕
                </button>
              </div>

              {/* Date Range */}
              {/* Date Range */}
              <div className="mt-5">
                <p className="mb-3 text-sm font-medium text-black/50">
                  Date Range
                </p>

                <div className="space-y-2">
                  {['Last 7 days', 'This Month', 'Select Date'].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() =>
                        setSelectedDateRange(
                          selectedDateRange === range ? '' : range
                        )
                      }
                      className={`w-full rounded-2xl border p-3 text-left transition-colors ${
                        selectedDateRange === range
                          ? 'border-brand-violet text-brand-violet bg-brand-violet/5'
                          : 'border-black/10'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mt-5">
                <p className="mb-3 text-sm font-medium text-black/50">
                  Price Range
                </p>

                <div className="flex gap-2">
                  <input
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="$50.00"
                    className="w-1/2 rounded-2xl border border-black/10 p-3 outline-none"
                  />

                  <input
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="To"
                    className="w-1/2 rounded-2xl border border-black/10 p-3 outline-none"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mt-5">
                <p className="mb-3 text-sm font-medium text-black/50">
                  Categories
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'All',
                    'Subscriptions',
                    'Money In',
                    'Transfer',
                    'Shopping',
                    'Income',
                    'Transport',
                    'Gaming',
                  ].map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(
                          selectedCategory === category ? 'All' : category
                        )
                      }
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-brand-violet text-white'
                          : 'border border-black/10 bg-surface-soft'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="mt-6 w-full rounded-2xl bg-brand-lime p-4 font-semibold"
              >
                Done
              </button>
            </div>
          </>
        )}

        {/* SOLO ESTA PARTE SCROLLEA */}
        <div className="mt-4 flex-1 overflow-y-auto space-y-3 pb-6">
          {filteredTransactions.map((tx) => (
            <Link key={tx.id} href={`/transactions/${tx.id}`} className="block">
              <TransactionItem
                name={tx.name}
                when={tx.when}
                amount={tx.amount}
                type={tx.type}
                icon={tx.icon}
                iconBg={tx.iconBg}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
