'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  Info,
  CreditCard,
  FileText,
  Lock,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

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

export default function NotificationSettingsPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink">
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm px-5 pb-10 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.replace('/settings')}
            aria-label="Go back"
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">{t.notifications}</h1>
          <div className="h-11 w-11" />
        </header>

        {/* Title + subtitle */}
        <div className="mt-8 space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t.set_notifications}
          </h2>
          <p className="text-base text-black/50">{t.notification_ways}</p>
        </div>

        {/* Options */}
        <ul className="mt-8 space-y-2">
          <SettingsItem
            icon={<Info className="h-5 w-5" />}
            label={t.info_updates_title}
            href="/notification-settings/info-updates"
          />
          <SettingsItem
            icon={<CreditCard className="h-5 w-5" />}
            label={t.financial_activity_title}
            href="/notification-settings/financial-activity"
          />
          <SettingsItem
            icon={<FileText className="h-5 w-5" />}
            label={t.non_financial_activity_title}
            href="/notification-settings/non-financial-activity"
          />
          <SettingsItem
            icon={<Lock className="h-5 w-5" />}
            label={t.security_settings_title}
            href="/notification-settings/security"
          />
        </ul>
      </section>
    </main>
  );
}
