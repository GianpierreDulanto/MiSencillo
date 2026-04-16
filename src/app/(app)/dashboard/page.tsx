'use client';

import ScanOverlay from '@/components/scan';
import TransferOverlay from '@/components/transfer';
import TransferDetailPage from '@/components/transfer-detail';
import TransferSuccessPage from '@/components/transfer-success';
import { useLanguage } from '@/lib/i18n/context';
import { Translations } from '@/lib/i18n/translations';
import {
  Bell,
  CircleUserRound,
  Eye,
  Menu,
  MoveDown,
  MoveUp,
  ScanLine,
  WalletCards,
  ShoppingCart, // <-- Nuevo ícono importado
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  card: string;
  bank: string;
  avatar: string;
}

const getTransactions = (t: Translations) => [
  {
    id: 1,
    name: t.figma,
    when: t.today_1230_pm,
    amount: '-$250.00',
    type: t.subscriptions_type,
    icon: 'fi',
    iconBg: 'bg-black/5',
  },
  {
    id: 2,
    name: t.receive_from_alex,
    when: t.yesterday_0800_am,
    amount: '+$580.00',
    type: t.money_in_type,
    icon: 'arrow-down',
    iconBg: 'bg-brand-lime/50',
  },
  {
    id: 3,
    name: t.medium,
    when: t.may_10_600_pm,
    amount: '-$99.00',
    type: t.subscriptions_type,
    icon: 'dot',
    iconBg: 'bg-warning-100',
  },
];

function TxIcon({ icon }: { icon: string }) {
  if (icon === 'fi') {
    return <span className="text-2xl font-semibold text-ink">fi</span>;
  }

  if (icon === 'arrow-down') {
    return <MoveDown className="h-6 w-6 text-ink" />;
  }

  return <span className="h-3 w-3 rounded-full bg-black/70" />;
}

function ActionButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-brand-lime px-3 text-base font-semibold min-w-0"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface text-ink">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </button>
  );
}

function TransactionItem({
  name,
  when,
  amount,
  type,
  icon,
  iconBg,
}: {
  name: string;
  when: string;
  amount: string;
  type: string;
  icon: string;
  iconBg: string;
}) {
  return (
    <article className="flex items-center justify-between rounded-3xl border border-black/10 bg-surface p-3.5">
      <div className="flex items-center gap-3">
        <div
          className={`grid h-14 w-14 place-items-center rounded-full ${iconBg}`}
        >
          <TxIcon icon={icon} />
        </div>
        <div>
          <p className="text-lg font-semibold leading-tight">{name}</p>
          <p className="mt-1 text-sm text-black/50">{when}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold leading-tight">{amount}</p>
        <p className="mt-1 text-sm text-black/50">{type}</p>
      </div>
    </article>
  );
}

function BottomNavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <li
      className={`flex flex-col items-center gap-2 ${active ? 'text-ink' : 'text-black/35'}`}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </li>
  );
}

export default function DashboardPage() {
  const { t } = useLanguage();
  const [scanOpen, setScanOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setTransferOpen(false);
  };

  const handleTransferSuccess = () => {
    setShowSuccess(true);
  };

  const handleSuccessComplete = () => {
    setShowSuccess(false);
    setSelectedContact(null);
  };

  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink flex justify-center">
      <section className="internal-scroll-y h-full max-w-sm px-5 pb-24 pt-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-full bg-black/10" />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                {t.greeting_name}
              </h1>
              <p className="text-sm text-black/50">{t.good_morning}</p>
            </div>
          </div>

          <button
            type="button"
            aria-label={t.notifications}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-surface"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-error-500" />
          </button>
        </header>

        <div className="mt-8 flex items-center gap-2 text-black/45">
          <p className="text-xl font-medium">{t.total_balance}</p>
          <Eye className="h-4 w-4" />
        </div>

        <p className="mt-3 text-5xl font-semibold leading-none tracking-tight">
          $12,765.00
        </p>

        {/* Primary Action Row */}
        <div className="mt-8 flex items-center gap-2">
          <ActionButton
            icon={<MoveUp className="h-5 w-5" />}
            label={t.transfer_button}
            onClick={() => setTransferOpen(true)}
          />
          <ActionButton
            icon={<MoveDown className="h-5 w-5" />}
            label={t.receive_button}
          />
          <button
            type="button"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-[5px] border-brand-lime bg-surface"
            aria-label={t.more}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* NEW Important Purchase Button */}
        <Link
          href="/stores"
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-brand-violet py-4 text-lg font-bold text-surface shadow-xl shadow-brand-violet/20 transition-transform active:scale-95"
        >
          <ShoppingCart className="h-6 w-6" />
          {t.make_purchase}
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl bg-linear-to-br from-brand-violet to-brand-violet/80 p-5 text-surface shadow-lg">
          <h2 className="max-w-[16ch] text-2xl font-semibold leading-tight">
            {t.invite_friend_cashback}
          </h2>
          <button
            type="button"
            className="mt-4 text-xl font-semibold text-brand-lime"
          >
            {t.invite_friends}
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h3 className="text-4xl font-semibold">{t.recent_transactions}</h3>
          <Link
            href="/transactions"
            className="text-xl font-medium text-brand-violet"
          >
            {t.see_all}
          </Link>
        </div>

        <div className="mt-4 space-y-3">
          {getTransactions(t).map((tx) => (
            <TransactionItem
              key={tx.id}
              name={tx.name}
              when={tx.when}
              amount={tx.amount}
              type={tx.type}
              icon={tx.icon}
              iconBg={tx.iconBg}
            />
          ))}
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-sm border-t border-black/10 bg-surface-soft px-6 py-3">
        <ul className="flex items-end justify-between">
          <BottomNavItem
            active
            label={t.home}
            icon={
              <div className="grid h-8 w-8 place-items-center rounded-lg border-2 border-black/75">
                <span className="text-sm font-semibold">⌂</span>
              </div>
            }
          />
          <li>
            <Link
              href="/insights"
              className="flex flex-col items-center gap-2 text-black/35 transition-colors hover:text-ink"
            >
              <div className="grid h-8 w-8 place-items-center rounded-lg border-2 border-black/25">
                <span className="text-sm font-semibold">◫</span>
              </div>
              <span className="text-sm font-semibold">{t.insights}</span>
            </Link>
          </li>
          <li className="-mt-2">
            <button
              type="button"
              onClick={() => setScanOpen(true)}
              aria-label={t.scan_button}
              className="grid h-14 w-14 place-items-center rounded-full bg-brand-lime text-ink shadow-[0_8px_20px_rgba(0,0,0,0.16)]"
            >
              <ScanLine className="h-6 w-6" />
            </button>
          </li>
          <li>
            <Link
              href="/my-cards"
              className="flex flex-col items-center gap-2 text-black/35 transition-colors hover:text-ink"
            >
              <WalletCards className="h-8 w-8" />
              <span className="text-sm font-semibold">{t.my_cards}</span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex flex-col items-center gap-2 text-black/35"
            >
              <CircleUserRound className="h-8 w-8" />
              <span className="text-sm font-semibold">{t.profile}</span>
            </Link>
          </li>
        </ul>
      </nav>

      <ScanOverlay open={scanOpen} onClose={() => setScanOpen(false)} />
      <TransferOverlay
        open={transferOpen}
        onClose={() => setTransferOpen(false)}
        onSelectContact={handleSelectContact}
      />
      {selectedContact && !showSuccess && (
        <TransferDetailPage
          contact={selectedContact}
          onBack={() => setSelectedContact(null)}
          onSuccess={handleTransferSuccess}
        />
      )}
      {showSuccess && (
        <TransferSuccessPage onComplete={handleSuccessComplete} />
      )}
    </main>
  );
}
