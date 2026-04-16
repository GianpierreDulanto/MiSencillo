'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/i18n/context';
import { useLanguageSync } from '@/lib/i18n/hooks';
import { Language } from '@/lib/i18n/translations';

export default function LanguagePage() {
  const router = useRouter();
  const { language, t } = useLanguage();
  const { setLanguage } = useLanguageSync();

  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink">
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm px-5 pb-10 pt-6">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.replace('/settings')}
            aria-label="Go back"
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">{t.languages}</h1>
          <div className="h-11 w-11" />
        </header>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-sm text-black/60">{t.select_language}</p>

          <div className="space-y-2">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-black/60">
                {t.language}
              </span>
              <Select
                value={language}
                onValueChange={(value) => setLanguage(value as Language)}
              >
                <SelectTrigger className="h-14">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">{t.spanish}</SelectItem>
                  <SelectItem value="en">{t.english}</SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>

          {/* Language Info Cards */}
          <div className="mt-8 space-y-3">
            <div className="rounded-2xl bg-white p-4">
              <h3 className="font-medium text-ink">{t.spanish}</h3>
              <p className="mt-1 text-sm text-black/60">Español - Perú</p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <h3 className="font-medium text-ink">{t.english}</h3>
              <p className="mt-1 text-sm text-black/60">
                English - United States
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
