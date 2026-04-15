'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CloseLinkButton } from '../../../components/shared/close-link-button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

const COUNTRIES = [
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
];

export default function ResidenceCountryPage() {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState('SG');

  return (
    <main className="box-border min-h-dvh bg-[#f5f5f5] px-5 pb-10 pt-6 text-ink">
      <section className="mx-auto flex min-h-dvh w-full max-w-sm flex-col">
        <div className="mb-8 flex items-center justify-start">
          <CloseLinkButton href="/verify-code" />
        </div>

        <div className="space-y-3">
          <h1 className="text-[42px] font-semibold leading-[1.05] tracking-tight">
            Your country of primary residence
          </h1>
          <p className="text-base text-black/55">
            The terms and services which apply to you will depend on your
            country of residence.
          </p>
        </div>

        <div className="mt-10 space-y-2">
          <label className="text-m font-medium text-black/60">Country</label>
          <Select value={countryCode} onValueChange={setCountryCode}>
            <SelectTrigger className="border-black/10">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.flag} {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <p className="mt-85 mb-5 text-center text-sm text-black/45">
          By registering, you accept our Terms of Use and Privacy Policy.
        </p>

        <button
          type="button"
          onClick={() => router.replace('/upload-identity-proof')}
          className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-brand-lime text-lg font-semibold"
        >
          Continue
        </button>
      </section>
    </main>
  );
}
