"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CloseLinkButton } from '../../../components/shared/close-link-button';
import { NumericKeypad } from '../../../components/shared/numeric-keypad';
import { PinDigitBoxes } from '../../../components/shared/pin-digit-boxes';

const PIN_LENGTH = 4;

export default function CreatePinPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const appendDigit = (digit: string) => {
    setPin((current) => (current.length < PIN_LENGTH ? `${current}${digit}` : current));
    setError('');
  };

  const removeLastDigit = () => {
    setPin((current) => current.slice(0, -1));
    setError('');
  };

  const handleContinue = () => {
    if (pin.length !== PIN_LENGTH) {
      setError('Create a 4-digit PIN.');
      return;
    }

    router.replace('/aproval');
  };

  return (
    <main className="box-border min-h-dvh bg-white px-5 pb-96 pt-6 text-ink">
      <div className="mx-auto flex w-full max-w-sm flex-col">
        <div className="mb-8 flex items-center justify-start">
          <CloseLinkButton href="/verify-code" />
        </div>

        <section className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Create your PIN</h1>
          <p className="text-lg text-black/55">Set a 4-digit PIN for your account.</p>
        </section>

        <section className="mt-8">
          <PinDigitBoxes value={pin} length={PIN_LENGTH} />

          {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
        </section>

        <div className="fixed bottom-20 left-1/2 z-20 w-full max-w-sm -translate-x-1/2 px-5">
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex h-16 w-full items-center justify-center rounded-2xl bg-brand-lime text-xl font-semibold transition active:scale-[0.99]"
          >
            Done
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
