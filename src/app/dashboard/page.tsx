import { Bell, CircleUserRound, Eye, Menu, MoveDown, MoveUp, ScanLine, WalletCards } from 'lucide-react';

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
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-brand-lime px-4 text-lg font-semibold"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-surface text-ink">{icon}</span>
      {label}
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
        <div className={`grid h-14 w-14 place-items-center rounded-full ${iconBg}`}>
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
    <li className={`flex flex-col items-center gap-2 ${active ? 'text-ink' : 'text-black/35'}`}>
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </li>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-dvh bg-surface-soft text-ink">
      <section className="mx-auto w-full max-w-sm px-5 pb-24 pt-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-full bg-black/10" />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Hi, Jennifer</h1>
              <p className="text-sm text-black/50">Good Morning!</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="relative grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-surface"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-error-500" />
          </button>
        </header>

        <div className="mt-8 flex items-center gap-2 text-black/45">
          <p className="text-xl font-medium">Total Balance</p>
          <Eye className="h-4 w-4" />
        </div>

        <p className="mt-3 text-5xl font-semibold leading-none tracking-tight">$12,765.00</p>

        <div className="mt-8 flex items-center gap-3">
          <ActionButton icon={<MoveUp className="h-5 w-5" />} label="Transfer" />
          <ActionButton icon={<MoveDown className="h-5 w-5" />} label="Receive" />
          <button
            type="button"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-[5px] border-brand-lime bg-surface"
            aria-label="More"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-linear-to-br from-brand-violet to-brand-violet/80 p-5 text-surface shadow-lg">
          <h2 className="max-w-[16ch] text-2xl font-semibold leading-tight">Invite a friend and both earn cashback</h2>
          <button type="button" className="mt-4 text-xl font-semibold text-brand-lime">
            Invite friends →
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h3 className="text-4xl font-semibold">Transactions</h3>
          <button type="button" className="text-xl font-medium text-brand-violet">
            See All
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {transactions.map((tx) => (
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

      <nav className="fixed bottom-0 left-1/2 w-full max-w-sm -translate-x-1/2 border-t border-black/10 bg-surface-soft px-6 py-3">
        <ul className="flex items-end justify-between">
          <BottomNavItem
            active
            label="Home"
            icon={
              <div className="grid h-8 w-8 place-items-center rounded-lg border-2 border-black/75">
                <span className="text-sm font-semibold">⌂</span>
              </div>
            }
          />
          <BottomNavItem
            label="Insights"
            icon={
              <div className="grid h-8 w-8 place-items-center rounded-lg border-2 border-black/25">
                <span className="text-sm font-semibold">◫</span>
              </div>
            }
          />
          <li className="-mt-2">
            <button
              type="button"
              aria-label="Scan"
              className="grid h-14 w-14 place-items-center rounded-full bg-brand-lime text-ink shadow-[0_8px_20px_rgba(0,0,0,0.16)]"
            >
              <ScanLine className="h-6 w-6" />
            </button>
          </li>
          <BottomNavItem label="My Cards" icon={<WalletCards className="h-8 w-8" />} />
          <BottomNavItem label="Profile" icon={<CircleUserRound className="h-8 w-8" />} />
        </ul>
      </nav>
    </main>
  );
}
