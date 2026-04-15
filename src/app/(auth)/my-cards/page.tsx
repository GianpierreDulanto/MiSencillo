'use client';

import Link from 'next/link';
import { Plus, ChevronLeft } from 'lucide-react';
import { CreditCard, type CardData } from '@/components/ui/credit-card';
import { BottomNav } from '@/components/shared/bottom-nav';

const MY_CARDS_DATA: CardData[] = [
  {
    id: 1,
    number: '5643 7890 3281 7865',
    name: 'Jennifer Lopez',
    expiry: '03/28',
    network: 'VISA',
    variant: 'lime',
    href: '/my-cards/1', // <--- Apunta al ID 1
  },
  {
    id: 2,
    number: '5643 7890 3281 7865',
    name: 'Jennifer Lopez',
    expiry: '03/28',
    network: 'VISA',
    variant: 'violet',
    href: '/my-cards/2', // <--- Apunta al ID 2
  },
];

export default function CardsPage() {
  return (
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink">
      <section className="internal-scroll-y mx-auto flex h-full w-full max-w-sm flex-col px-5 pb-24 pt-6">
        <header className="mb-2 flex shrink-0 items-center justify-between">
          <Link
            href="/dashboard"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-surface shadow-sm transition-transform active:scale-95"
            aria-label="Volver"
          >
            <ChevronLeft className="h-5 w-5 text-ink" />
          </Link>

          <h1 className="text-lg font-semibold text-ink">My Cards</h1>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-lime shadow-sm transition-transform hover:opacity-90 active:scale-95"
            aria-label="Agregar tarjeta"
          >
            <Plus className="h-5 w-5 text-ink" />
          </button>
        </header>

        {/* ESTE ES EL CAMBIO CLAVE: flex-1 y justify-center empujan las tarjetas al medio verticalmente */}
        <div className="flex flex-1 flex-col justify-center gap-6">
          {MY_CARDS_DATA.map((card) => (
            <CreditCard key={card.id} card={card} />
          ))}
        </div>
      </section>

      <BottomNav />
    </main>
  );
}
