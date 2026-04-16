'use client';

import { useLanguage } from '@/lib/i18n/context';

export default function ExchangePage() {
  const { t } = useLanguage();

  return (
    <main className="h-dvh w-full bg-white">
      <div className="flex h-full items-center justify-center">
        <p>{t.exchange_page}</p>
      </div>
    </main>
  );
}
