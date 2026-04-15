'use client';

import Link from 'next/link';
import { ChevronLeft, CreditCard } from 'lucide-react';

export default function AddCardPage() {
  return (
    <main className="h-dvh bg-surface-soft text-ink">
      <section className="mx-auto flex h-full w-full max-w-sm flex-col px-5 pt-6">
        {/* HEADER */}
        <header className="flex items-center justify-between">
          <Link
            href="/my-cards"
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-surface shadow-sm active:scale-95 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>

          <h1 className="text-lg font-semibold">Add new card</h1>

          <div className="h-11 w-11" />
        </header>

        {/* FORM */}
        <div className="mt-6 flex flex-1 flex-col">
          <p className="text-sm text-black/50">
            We accept Visa, Mastercard, and Maestro
          </p>

          {/* INPUTS */}
          <div className="mt-6 space-y-4">
            {/* Card holder */}
            <div>
              <p className="mb-2 text-sm text-black/50">Card holder</p>
              <input
                placeholder="John Doe"
                className="w-full rounded-2xl bg-surface p-4 outline-none"
              />
            </div>

            {/* Card number */}
            <div>
              <p className="mb-2 text-sm text-black/50">Card number</p>
              <div className="flex items-center gap-3 rounded-2xl bg-surface p-4">
                <CreditCard className="h-4 w-4 text-black/40" />
                <input
                  placeholder="0000 0000 0000"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Expiry + CVV */}
            <div className="flex gap-3">
              <div className="w-1/2">
                <p className="mb-2 text-sm text-black/50">Expiry date</p>
                <input
                  placeholder="MM/YY"
                  className="w-full rounded-2xl bg-surface p-4 outline-none"
                />
              </div>

              <div className="w-1/2">
                <p className="mb-2 text-sm text-black/50">CVV</p>
                <input
                  placeholder="123"
                  className="w-full rounded-2xl bg-surface p-4 outline-none"
                />
              </div>
            </div>
          </div>

          {/* BOTÓN ABAJO */}
          <div className="mt-auto pb-6">
            <button className="w-full rounded-2xl bg-brand-lime py-4 font-semibold active:scale-95 transition">
              Add New Card
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
