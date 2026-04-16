'use client';

import {
  Bell,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Globe,
  Link2,
  ScrollText,
  SunMoon,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="mb-2 mt-6 px-1 text-sm font-medium text-black/45">{label}</p>
  );
}

function SettingsItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between rounded-2xl bg-surface px-4 py-4 transition active:bg-black/5"
      >
        <div className="flex items-center gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface-soft text-black/50">
            {icon}
          </span>
          <span className="text-base font-medium text-ink">{label}</span>
        </div>
        <ChevronRight className="h-5 w-5 text-black/30" />
      </Link>
    </li>
  );
}

export default function SettingsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink">
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm px-5 pb-10 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.replace('/profile')}
            aria-label="Go back"
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {t.settings}
          <h1 className="text-lg font-semibold">Settings</h1>
          <div className="h-11 w-11" />
        </header>

        {/* Accounts Section */}
        <SectionLabel label={t.accounts} />
        <ul className="space-y-2">
          <SettingsItem
            icon={<CircleUserRound className="h-5 w-5" />}
            label={t.personal_details}
            href="/personal-details"
          />
          <SettingsItem
            icon={<Link2 className="h-5 w-5" />}
            label={t.linked_accounts}
            href="/linked-accounts"
          />
        </ul>

        {/* General Section */}
        <SectionLabel label={t.general} />
        <ul className="space-y-2">
          <SettingsItem
            icon={<Globe className="h-5 w-5" />}
            label={t.languages}
            href="/languages"
          />
          <SettingsItem
            icon={<Bell className="h-5 w-5" />}
            label={t.notifications}
            href="/notifications"
          />
          <SettingsItem
            icon={<SunMoon className="h-5 w-5" />}
            label={t.appearance}
            href="/appearance"
          />
          <SettingsItem
            icon={<ScrollText className="h-5 w-5" />}
            label={t.agreements}
            href="/agreements"
          />
        </ul>

        {/* Version */}
        <p className="mt-12 text-center text-sm text-black/35">
          {t.version} 1.1.0
        </p>
      </section>
    </main>
  );
}
