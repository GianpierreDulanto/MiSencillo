'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';
import {
  ChevronLeft,
  IdCard,
  Settings,
  ShieldCheck,
  HelpCircle,
  LogOut,
  ScanLine,
  WalletCards,
  CircleUserRound,
} from 'lucide-react';

function BottomNavItem({
  icon,
  label,
  active = false,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`flex flex-col items-center gap-2 ${active ? 'text-ink' : 'text-black/35'}`}
      >
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </Link>
    </li>
  );
}

function MenuItem({
  icon,
  label,
  href,
  danger = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  danger?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-4 rounded-2xl bg-surface px-4 py-4 transition active:bg-black/5"
      >
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface-soft ${danger ? 'text-error-500' : 'text-black/50'}`}
        >
          {icon}
        </span>
        <span
          className={`text-base font-medium ${danger ? 'text-error-500' : 'text-ink'}`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink flex justify-center">
      <section className="internal-scroll-y h-full max-w-sm px-5 pb-24 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.replace('/dashboard')}
            aria-label={t.go_back}
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">{t.profile_title}</h1>
          <div className="h-11 w-11" />
        </header>

        {/* Avatar + Name */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="relative h-20 w-20 overflow-hidden rounded-full bg-black/10">
            <Image
              src="/images/usuario.png"
              alt="Jennifer Lopez"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl font-semibold">{t.jennifer_lopez}</p>
          <p className="text-sm text-black/50">{t.personal_account}</p>
        </div>

        {/* Invite Banner */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-brand-violet p-5 text-surface">
          <p className="text-lg font-semibold leading-snug">
            {t.invite_friend_cashback}
          </p>
        </div>

        {/* Menu Items */}

        <ul className="mt-6 space-y-2">
          <MenuItem
            icon={<IdCard className="h-5 w-5" />}
            label={t.member_id}
            href="/profile/member-id"
          />
          <MenuItem
            icon={<Settings className="h-5 w-5" />}
            label={t.settings}
            href="/settings"
          />
          <MenuItem
            icon={<ShieldCheck className="h-5 w-5" />}
            label={t.privacy_security}
            href="/profile/privacy-security"
          />
          <MenuItem
            icon={<HelpCircle className="h-5 w-5" />}
            label={t.help_center}
            href="/profile/help-center"
          />
          <MenuItem
            icon={<LogOut className="h-5 w-5" />}
            label={t.log_out}
            href="/sign-in"
            danger
          />
        </ul>
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-sm border-t border-black/10 bg-surface-soft px-6 py-3">
        <ul className="flex items-end justify-between">
          <BottomNavItem
            label={t.home}
            href="/dashboard"
            icon={
              <div className="grid h-8 w-8 place-items-center rounded-lg border-2 border-black/25">
                <span className="text-sm font-semibold">⌂</span>
              </div>
            }
          />
          <BottomNavItem
            label={t.insights}
            href="/insights"
            icon={
              <div className="grid h-8 w-8 place-items-center rounded-lg border-2 border-black/25">
                <span className="text-sm font-semibold">◫</span>
              </div>
            }
          />
          <li className="-mt-2">
            <Link
              href="/scan"
              aria-label={t.scan_button}
              className="grid h-14 w-14 place-items-center rounded-full bg-brand-lime text-ink shadow-[0_8px_20px_rgba(0,0,0,0.16)]"
            >
              <ScanLine className="h-6 w-6" />
            </Link>
          </li>
          <BottomNavItem
            label={t.my_cards}
            href="/my-cards"
            icon={<WalletCards className="h-8 w-8" />}
          />
          <BottomNavItem
            active
            label={t.profile_title}
            href="/profile"
            icon={<CircleUserRound className="h-8 w-8" />}
          />
        </ul>
      </nav>
    </main>
  );
}
