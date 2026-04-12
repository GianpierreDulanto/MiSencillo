"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CloseLinkButton } from '../../../components/shared/close-link-button';

const DOCUMENTS = [
  { id: 'passport', label: 'Passport' },
  { id: 'national-id', label: 'National ID' },
  { id: 'driver-license', label: 'Driver License' },
];

export default function UploadIdentityProofPage() {
  const router = useRouter();
  const [selected, setSelected] = useState('national-id');

  return (
    <main className="box-border min-h-dvh bg-[#f5f5f5] px-5 pb-10 pt-6 text-ink">
      <section className="mx-auto flex min-h-dvh w-full max-w-sm flex-col">
        <div className="mb-8 flex items-center justify-start">
          <CloseLinkButton href="/residence-country" />
        </div>

        <div className="space-y-3">
          <h1 className="text-[42px] font-semibold leading-[1.05] tracking-tight">Upload a proof of your identity</h1>
          <p className="text-base text-black/55">
            Take a picture of yourself and your photo ID, so we can make sure you are really you.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {DOCUMENTS.map((item) => {
            const active = selected === item.id;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`flex h-14 w-full items-center justify-between rounded-xl border px-4 text-left ${
                  active
                    ? 'border-transparent bg-brand-violet text-white'
                    : 'border-black/10 bg-white text-black/85'
                }`}
              >
                <span className="text-base font-medium">{item.label}</span>
                <span className={`h-5 w-5 rounded-full border ${active ? 'border-white/40 bg-white/20' : 'border-black/20'}`} />
              </button>
            );
          })}
        </div>

        <div className="mt-74">
          <button
            type="button"
            onClick={() => router.replace('/capture-id')}
            className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-brand-lime text-lg font-semibold"
          >
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}
