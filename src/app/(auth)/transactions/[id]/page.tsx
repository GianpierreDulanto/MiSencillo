'use client';

import { use } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import type { Translations } from '@/lib/i18n/translations';

type Transaction = {
  id: number;
  name: string;
  when: string;
  amount: string;
  type: string;
  status: string;
  description: string;
  method: string;
  fee: string;
  numberId: string;
};

type TranslationKeys = Pick<
  Translations,
  | 'today_1230_pm'
  | 'yesterday_0800_am'
  | 'may_10_600_pm'
  | 'receive_from_alex'
  | 'subscriptions_type'
  | 'money_in_type'
  | 'medium'
>;

function getTransactions(t: TranslationKeys): Transaction[] {
  return [
    {
      id: 1,
      name: 'Figma',
      when: t.today_1230_pm,
      amount: '-$250.00',
      type: t.subscriptions_type,
      status: 'Completed',
      description: 'Monthly design subscription payment',
      method: '7865',
      fee: '$0.05',
      numberId: '#8907654',
    },
    {
      id: 2,
      name: t.receive_from_alex,
      when: t.yesterday_0800_am,
      amount: '+$580.00',
      type: t.money_in_type,
      status: 'Completed',
      description: 'Payment received from Alex',
      method: '4452',
      fee: '$0.00',
      numberId: '#7788123',
    },
    {
      id: 3,
      name: t.medium,
      when: t.may_10_600_pm,
      amount: '-$99.00',
      type: t.subscriptions_type,
      status: 'Completed',
      description: 'Monthly Medium subscription',
      method: '7865',
      fee: '$0.02',
      numberId: '#6723411',
    },
  ];
}

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function TransactionDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const { t } = useLanguage();
  const transactions = getTransactions(t as TranslationKeys);

  const transaction = transactions.find((tx) => tx.id === Number(id));

  if (!transaction) {
    return <main className="min-h-screen p-5">{t.transaction_not_found}</main>;
  }

  return (
    <main className="min-h-screen bg-surface-soft">
      <section className="mx-auto max-w-sm px-5 pt-6">
        <Link
          href="/transactions"
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-surface shadow-sm active:scale-95 transition"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div className="flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-violet/10">
            <span className="text-3xl font-bold">F</span>
          </div>

          <h2 className="mt-4 text-lg font-medium text-black/50">
            {transaction.name}
          </h2>
          <p className="mt-1 text-4xl font-bold">{transaction.amount}</p>
          <span className="mt-2 rounded-full bg-white px-3 py-1 text-xs text-black/50">
            {transaction.type}
          </span>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-semibold">{t.transaction_details}</h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">{t.transaction_number_id}</span>
              <span>{transaction.numberId}</span>
            </div>
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">{t.transaction_fee}</span>
              <span>{transaction.fee}</span>
            </div>
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">{t.transaction_method}</span>
              <span>💳 {transaction.method}</span>
            </div>
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">{t.transaction_status}</span>
              <span className="text-emerald-500">● {transaction.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/40">{t.transaction_date_time}</span>
              <span>{transaction.when}</span>
            </div>
          </div>
        </div>

        <button className="mt-8 w-full rounded-2xl bg-brand-lime py-4 font-semibold">
          {t.share}
        </button>
      </section>
    </main>
  );
}
