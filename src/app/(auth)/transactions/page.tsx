'use client';

import { useState } from 'react';
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import TransactionItem from '@/components/shared/transactionItem';

type TranslationKeys = {
  today: string;
  yesterday: string;
  subscriptions_transaction: string;
  transfer_from: string;
  money_in_receive: string;
  transfer_to: string;
  transfer_type: string;
  shopping_type: string;
  income_type: string;
  transport_type: string;
  gaming_type: string;
  transactions_title: string;
  search: string;
  filter: string;
  date_range: string;
  last_7_days: string;
  this_month: string;
  select_date: string;
  price_range: string;
  transaction_categories: string;
  all: string;
  subscription_category: string;
  money_in: string;
  transfer: string;
  shopping_category: string;
  income: string;
  transport: string;
  gaming: string;
  close: string;
};

type Transaction = {
  id: number;
  name: string;
  when: string;
  amount: string;
  type: string;
  icon: string;
  iconBg: string;
};

function getTransactions(t: TranslationKeys): Transaction[] {
  return [
    {
      id: 1,
      name: 'Figma',
      when: `${t.today}, 12:30 PM`,
      amount: '-$250.00',
      type: t.subscriptions_transaction,
      icon: 'fi',
      iconBg: 'bg-black/5',
    },
    {
      id: 2,
      name: `${t.transfer_from} Alex`,
      when: `${t.yesterday}, 08:00 AM`,
      amount: '+$580.00',
      type: t.money_in_receive,
      icon: 'arrow-down',
      iconBg: 'bg-brand-lime/50',
    },
    {
      id: 3,
      name: 'Medium',
      when: 'May 10, 06:00 PM',
      amount: '-$99.00',
      type: t.subscriptions_transaction,
      icon: 'dot',
      iconBg: 'bg-warning-100',
    },
    {
      id: 4,
      name: 'Netflix',
      when: 'May 09, 09:15 PM',
      amount: '-$18.99',
      type: t.subscriptions_transaction,
      icon: 'dot',
      iconBg: 'bg-warning-100',
    },
    {
      id: 5,
      name: `${t.transfer_to} Maria`,
      when: 'May 09, 03:20 PM',
      amount: '-$320.00',
      type: t.transfer_type,
      icon: 'arrow-down',
      iconBg: 'bg-brand-lime/50',
    },
    {
      id: 6,
      name: 'Amazon',
      when: 'May 08, 11:10 AM',
      amount: '-$75.50',
      type: t.shopping_type,
      icon: 'dot',
      iconBg: 'bg-black/5',
    },
    {
      id: 7,
      name: 'Salary',
      when: 'May 08, 08:00 AM',
      amount: '+$1,850.00',
      type: t.income_type,
      icon: 'arrow-down',
      iconBg: 'bg-brand-lime/50',
    },
    {
      id: 8,
      name: 'Spotify',
      when: 'May 07, 10:45 PM',
      amount: '-$9.99',
      type: t.subscriptions_transaction,
      icon: 'dot',
      iconBg: 'bg-warning-100',
    },
    {
      id: 9,
      name: `${t.transfer_from} Daniel`,
      when: 'May 07, 04:00 PM',
      amount: '+$120.00',
      type: t.money_in_receive,
      icon: 'arrow-down',
      iconBg: 'bg-brand-lime/50',
    },
    {
      id: 10,
      name: 'Uber',
      when: 'May 06, 09:30 PM',
      amount: '-$14.80',
      type: t.transport_type,
      icon: 'dot',
      iconBg: 'bg-black/5',
    },
    {
      id: 11,
      name: 'Apple Music',
      when: 'May 06, 07:00 PM',
      amount: '-$10.99',
      type: t.subscriptions_transaction,
      icon: 'dot',
      iconBg: 'bg-warning-100',
    },
    {
      id: 12,
      name: `${t.transfer_from} Sofia`,
      when: 'May 05, 02:00 PM',
      amount: '+$60.00',
      type: t.money_in_receive,
      icon: 'arrow-down',
      iconBg: 'bg-brand-lime/50',
    },
    {
      id: 13,
      name: 'Steam',
      when: 'May 05, 12:40 PM',
      amount: '-$45.00',
      type: t.gaming_type,
      icon: 'dot',
      iconBg: 'bg-black/5',
    },
    {
      id: 14,
      name: 'Adobe',
      when: 'May 04, 06:10 PM',
      amount: '-$22.00',
      type: t.subscriptions_transaction,
      icon: 'fi',
      iconBg: 'bg-black/5',
    },
    {
      id: 15,
      name: `${t.transfer_from} Juan`,
      when: 'May 04, 09:00 AM',
      amount: '+$200.00',
      type: t.money_in_receive,
      icon: 'arrow-down',
      iconBg: 'bg-brand-lime/50',
    },
  ];
}

export default function TransactionsPage() {
  const { t } = useLanguage();
  const transactions = getTransactions(t);
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
        <header className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-surface shadow-sm active:scale-95 transition"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <h1 className="text-lg font-semibold">{t.transactions_title}</h1>

          <button type="button" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </header>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-surface p-3">
          <Search className="h-4 w-4 text-black/40" />
          <input
            type="text"
            placeholder={t.search}
            className="w-full bg-transparent outline-none"
          />
        </div>

        {showFilters && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/25"
              onClick={() => setShowFilters(false)}
            />

            <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 rounded-t-[2rem] bg-surface p-5 shadow-2xl">
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-black/15" />

              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <h2 className="text-lg font-semibold">{t.filter}</h2>

                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="text-black/40"
                >
                  ✕
                </button>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-sm font-medium text-black/50">
                  {t.date_range}
                </p>
                <div className="space-y-2">
                  {[t.last_7_days, t.this_month, t.select_date].map((range) => (
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

              <div className="mt-5">
                <p className="mb-3 text-sm font-medium text-black/50">
                  {t.price_range}
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

              <div className="mt-5">
                <p className="mb-3 text-sm font-medium text-black/50">
                  {t.transaction_categories}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    t.all,
                    t.subscription_category,
                    t.money_in,
                    t.transfer,
                    t.shopping_category,
                    t.income,
                    t.transport,
                    t.gaming,
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
                {t.close}
              </button>
            </div>
          </>
        )}

        <div className="mt-4 flex-1 space-y-3 overflow-y-auto pb-6">
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
