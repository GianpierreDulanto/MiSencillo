import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const transactions = [
  {
    id: 1,
    name: 'Figma',
    when: 'Today, 12:30 PM',
    amount: '-$250.00',
    type: 'Subscriptions',
    status: 'Completed',
    description: 'Monthly design subscription payment',
    method: '7865',
    fee: '$0.05',
    numberId: '#8907654',
  },
  {
    id: 2,
    name: 'Receive from Alex',
    when: 'Yesterday, 08:00 AM',
    amount: '+$580.00',
    type: 'Money In',
    status: 'Completed',
    description: 'Payment received from Alex',
    method: '4452',
    fee: '$0.00',
    numberId: '#7788123',
  },
  {
    id: 3,
    name: 'Medium',
    when: 'May 10, 06:00 PM',
    amount: '-$99.00',
    type: 'Subscriptions',
    status: 'Completed',
    description: 'Monthly Medium subscription',
    method: '7865',
    fee: '$0.02',
    numberId: '#6723411',
  },
  {
    id: 4,
    name: 'Netflix',
    when: 'May 09, 09:15 PM',
    amount: '-$18.99',
    type: 'Subscriptions',
    status: 'Completed',
    description: 'Netflix monthly plan',
    method: '7865',
    fee: '$0.01',
    numberId: '#6723412',
  },
  {
    id: 5,
    name: 'Transfer to Maria',
    when: 'May 09, 03:20 PM',
    amount: '-$320.00',
    type: 'Transfer',
    status: 'Completed',
    description: 'Transfer sent to Maria',
    method: '3321',
    fee: '$0.10',
    numberId: '#6723413',
  },
  {
    id: 6,
    name: 'Amazon',
    when: 'May 08, 11:10 AM',
    amount: '-$75.50',
    type: 'Shopping',
    status: 'Completed',
    description: 'Amazon purchase',
    method: '7865',
    fee: '$0.03',
    numberId: '#6723414',
  },
  {
    id: 7,
    name: 'Salary',
    when: 'May 08, 08:00 AM',
    amount: '+$1,850.00',
    type: 'Income',
    status: 'Completed',
    description: 'Monthly salary deposit',
    method: 'Bank',
    fee: '$0.00',
    numberId: '#6723415',
  },
  {
    id: 8,
    name: 'Spotify',
    when: 'May 07, 10:45 PM',
    amount: '-$9.99',
    type: 'Subscriptions',
    status: 'Completed',
    description: 'Spotify premium plan',
    method: '7865',
    fee: '$0.01',
    numberId: '#6723416',
  },
  {
    id: 9,
    name: 'Receive from Daniel',
    when: 'May 07, 04:00 PM',
    amount: '+$120.00',
    type: 'Money In',
    status: 'Completed',
    description: 'Payment received from Daniel',
    method: 'Bank',
    fee: '$0.00',
    numberId: '#6723417',
  },
  {
    id: 10,
    name: 'Uber',
    when: 'May 06, 09:30 PM',
    amount: '-$14.80',
    type: 'Transport',
    status: 'Completed',
    description: 'Ride payment',
    method: '7865',
    fee: '$0.01',
    numberId: '#6723418',
  },
  {
    id: 11,
    name: 'Apple Music',
    when: 'May 06, 07:00 PM',
    amount: '-$10.99',
    type: 'Subscriptions',
    status: 'Completed',
    description: 'Apple Music subscription',
    method: '7865',
    fee: '$0.01',
    numberId: '#6723419',
  },
  {
    id: 12,
    name: 'Receive from Sofia',
    when: 'May 05, 02:00 PM',
    amount: '+$60.00',
    type: 'Money In',
    status: 'Completed',
    description: 'Payment received from Sofia',
    method: 'Bank',
    fee: '$0.00',
    numberId: '#6723420',
  },
  {
    id: 13,
    name: 'Steam',
    when: 'May 05, 12:40 PM',
    amount: '-$45.00',
    type: 'Gaming',
    status: 'Completed',
    description: 'Game purchase on Steam',
    method: '7865',
    fee: '$0.02',
    numberId: '#6723421',
  },
  {
    id: 14,
    name: 'Adobe',
    when: 'May 04, 06:10 PM',
    amount: '-$22.00',
    type: 'Subscriptions',
    status: 'Completed',
    description: 'Adobe Creative Cloud plan',
    method: '7865',
    fee: '$0.02',
    numberId: '#6723422',
  },
  {
    id: 15,
    name: 'Receive from Juan',
    when: 'May 04, 09:00 AM',
    amount: '+$200.00',
    type: 'Money In',
    status: 'Completed',
    description: 'Payment received from Juan',
    method: 'Bank',
    fee: '$0.00',
    numberId: '#6723423',
  },
];

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TransactionDetailPage({ params }: PageProps) {
  const { id } = await params;

  const transaction = transactions.find((tx) => tx.id === Number(id));

  if (!transaction) {
    return <main className="min-h-screen p-5">Transaction not found</main>;
  }

  return (
    <main className="min-h-screen bg-surface-soft">
      <section className="mx-auto max-w-sm px-5 pt-6">
        {/* Header */}
        <Link
          href="/transactions"
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-surface shadow-sm active:scale-95 transition"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        {/* Icon */}
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

        {/* Card */}
        <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-semibold">Transaction Details</h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">Number ID</span>
              <span>{transaction.numberId}</span>
            </div>

            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">Fee</span>
              <span>{transaction.fee}</span>
            </div>

            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">Method</span>
              <span>💳 {transaction.method}</span>
            </div>

            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-black/40">Status</span>
              <span className="text-emerald-500">● {transaction.status}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-black/40">Date time</span>
              <span>{transaction.when}</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 w-full rounded-2xl bg-brand-lime py-4 font-semibold">
          Share
        </button>
      </section>
    </main>
  );
}
