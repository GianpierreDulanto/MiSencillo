'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Settings } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

type Notification = {
  id: number;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  time: string;
  highlight?: boolean;
};

const notifications: Notification[] = [
  {
    id: 1,
    icon: '💳',
    iconBg: 'bg-surface-soft',
    title: 'Spend online and in-store',
    description:
      'Shop online, setup subscriptions and spend with your digital card details.',
    time: '20h ago',
    highlight: false,
  },
  {
    id: 2,
    icon: '✈️',
    iconBg: 'bg-brand-lime/60',
    title: 'Travel with your card',
    description:
      'Get travel helps and tips for making the best out of your money abroad.',
    time: 'May 12, 08:00 AM',
    highlight: true,
  },
  {
    id: 3,
    icon: '↗',
    iconBg: 'bg-brand-lime/60',
    title: 'Successfully transfer to Safix',
    description:
      'Amet consequat aliquet suspendisse congue nisl. Morbi eleifend id tortor quis.',
    time: 'May 12, 07:45 AM',
    highlight: true,
  },
  {
    id: 4,
    icon: '🛡️',
    iconBg: 'bg-brand-lime/60',
    title: 'A safer way to pay',
    description:
      'Amet consequat aliquet suspendisse congue nisl. Morbi eleifend id tortor quis.',
    time: 'May 8, 07:15 PM',
    highlight: true,
  },
  {
    id: 5,
    icon: '⬇',
    iconBg: 'bg-surface-soft',
    title: 'Auto deposit',
    description:
      'Amet consequat aliquet suspendisse congue nisl. Morbi eleifend id tortor quis.',
    time: 'May 8, 06:40 PM',
    highlight: false,
  },
];

function NotificationItem({ item }: { item: Notification }) {
  return (
    <article
      className={`flex gap-4 rounded-2xl px-4 py-4 ${item.highlight ? 'bg-brand-lime/20' : 'bg-surface'}`}
    >
      <div
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-xl ${item.iconBg}`}
      >
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-snug text-ink">
          {item.title}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-black/50">
          {item.description}
        </p>
        <p className="mt-2 text-xs text-black/40">{item.time}</p>
      </div>
    </article>
  );
}

export default function NotificationsPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'notifications' | 'messages'>(
    'notifications'
  );

  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink">
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm px-5 pb-10 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.replace('/dashboard')}
            aria-label="Go back"
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">{t.notifications}</h1>
          <Link
            href="/notification-settings"
            aria-label="Notification settings"
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink"
          >
            <Settings className="h-5 w-5" />
          </Link>
        </header>

        {/* Tabs */}
        <div className="mt-6 flex rounded-2xl bg-surface p-1">
          <button
            type="button"
            onClick={() => setActiveTab('notifications')}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition ${
              activeTab === 'notifications'
                ? 'bg-surface-soft text-ink shadow-sm'
                : 'text-black/40'
            }`}
          >
            Notifications
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('messages')}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition ${
              activeTab === 'messages'
                ? 'bg-surface-soft text-ink shadow-sm'
                : 'text-black/40'
            }`}
          >
            Messages
          </button>
        </div>

        {/* Notification List */}
        {activeTab === 'notifications' && (
          <div className="mt-4 space-y-2">
            {notifications.map((item) => (
              <NotificationItem key={item.id} item={item} />
            ))}
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="mt-10 flex flex-col items-center justify-center gap-3 py-10 text-center text-black/40">
            <span className="text-4xl">✉️</span>
            <p className="text-base font-medium">No messages yet</p>
          </div>
        )}
      </section>
    </main>
  );
}
