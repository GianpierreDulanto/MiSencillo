'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CloseLinkButton } from '../../../components/shared/close-link-button';
import { NumericKeypad } from '../../../components/shared/numeric-keypad';
import { PinDigitBoxes } from '../../../components/shared/pin-digit-boxes';
import { useLanguage } from '@/lib/i18n/context';

const CODE_LENGTH = 4;

export default function VerifyCodePage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const appendDigit = (digit: string) => {
    setCode((current) =>
      current.length < CODE_LENGTH ? `${current}${digit}` : current
    );
    setError('');
  };

  const removeLastDigit = () => {
    setCode((current) => current.slice(0, -1));
    setError('');
  };

  const handleDone = () => {
    if (code.length !== CODE_LENGTH) {
      setError(t.enter_4digit_code);
      return;
    }

    router.replace('/residence-country');
  };

  return (
    <main className="box-border min-h-dvh bg-white px-5 pb-96 pt-6 text-ink">
      <div className="mx-auto flex w-full max-w-sm flex-col">
        <div className="mb-8 flex items-center justify-start">
          <CloseLinkButton href="/verify-phone" />
        </div>

        <section className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            {t.verify_code}
          </h1>
          <p className="text-lg text-black/55">{t.enter_4digit_code}</p>
        </section>

        <section className="mt-8">
          <PinDigitBoxes value={code} length={CODE_LENGTH} />

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
        </section>

        <div className="fixed bottom-20 left-1/2 z-20 w-full max-w-sm -translate-x-1/2 px-5">
          <button
            type="button"
            onClick={handleDone}
            className="inline-flex h-16 w-full items-center justify-center rounded-2xl bg-brand-lime text-xl font-semibold transition active:scale-[0.99]"
          >
            {t.done}
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
