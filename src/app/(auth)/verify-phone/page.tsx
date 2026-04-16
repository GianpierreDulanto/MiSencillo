'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CloseLinkButton } from '../../../components/shared/close-link-button';
import { NumericKeypad } from '../../../components/shared/numeric-keypad';
import { useLanguage } from '@/lib/i18n/context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

const PHONE_LENGTH_MIN = 7;
const PHONE_LENGTH_MAX = 12;

const COUNTRY_CODES = [
  { value: '+1', label: '+1 US' },
  { value: '+34', label: '+34 ES' },
  { value: '+51', label: '+51 PE' },
  { value: '+52', label: '+52 MX' },
  { value: '+57', label: '+57 CO' },
];

export default function VerifyPhonePage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [countryCode, setCountryCode] = useState('+1');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const appendDigit = (digit: string) => {
    setPhone((current) =>
      current.length < PHONE_LENGTH_MAX ? `${current}${digit}` : current
    );
    setError('');
  };

  const removeLastDigit = () => {
    setPhone((current) => current.slice(0, -1));
    setError('');
  };

  const handleSendCode = () => {
    if (phone.length < PHONE_LENGTH_MIN) {
      setError(t.invalid_email); // Generic validation error
      return;
    }

    router.replace('/verify-code');
  };

  return (
    <main className="box-border min-h-dvh bg-white px-5 pb-96 pt-6 text-ink">
      <div className="mx-auto flex w-full max-w-sm flex-col">
        <div className="mb-8 flex items-center justify-start">
          <CloseLinkButton href="/sign-up" />
        </div>

        <section className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            {t.verify_your_phone}
          </h1>
          <p className="text-lg text-black/55">{t.we_send_code}</p>
        </section>

        <section className="mt-8 space-y-3">
          <label className="text-sm font-medium text-black/60">
            {t.phone_number}
          </label>
          <div className="grid grid-cols-[118px_1fr] gap-3">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="h-14 border-black/10 bg-[#f5f5f5]">
                <SelectValue placeholder={t.country_code} />
              </SelectTrigger>
              <SelectContent>
                {COUNTRY_CODES.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex h-14 items-center rounded-xl border border-black/10 bg-[#f5f5f5] px-4 text-lg tracking-[0.08em]">
              {phone || '___________'}
            </div>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <p className="text-sm text-black/45">
            {t.selected_number} {countryCode} {phone || '...'}
          </p>
        </section>

        <div className="fixed bottom-20 left-1/2 z-20 w-full max-w-sm -translate-x-1/2 px-5">
          <button
            type="button"
            onClick={handleSendCode}
            className="inline-flex h-16 w-full items-center justify-center rounded-2xl bg-brand-lime text-xl font-semibold transition active:scale-[0.99]"
          >
            {t.continue}
          </button>

          <NumericKeypad
            fixedToBottom={false}
            className="mt-4 grid grid-cols-3 gap-3"
            onDigit={appendDigit}
            onBackspace={removeLastDigit}
          />
        </div>
      </div>
    </main>
  );
}
