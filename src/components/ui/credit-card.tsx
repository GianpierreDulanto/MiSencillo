'use client';

import { useRouter } from 'next/navigation';

export type CardVariant = 'lime' | 'violet';

export interface CardData {
  id: number;
  number: string;
  name: string;
  expiry: string;
  network: string;
  variant: CardVariant;
  href: string;
}

// 1. CHIP MEJORADO (Vectorial realista, no se pixela)
function ChipIcon() {
  return (
    <svg
      width="38"
      height="28"
      viewBox="0 0 36 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="26" rx="4" fill="#E8C66A" />
      <path
        d="M0 9H11C12.1046 9 13 9.89543 13 11V15C13 16.1046 12.1046 17 11 17H0"
        stroke="#CFA948"
        strokeWidth="1.5"
      />
      <path
        d="M36 9H25C23.8954 9 23 9.89543 23 11V15C23 16.1046 23.8954 17 25 17H36"
        stroke="#CFA948"
        strokeWidth="1.5"
      />
      <path d="M18 0V26" stroke="#CFA948" strokeWidth="1.5" />
    </svg>
  );
}

function ContactlessIcon({ variant }: { variant: CardVariant }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={variant === 'lime' ? 'text-ink' : 'text-white'}
    >
      <path d="M5 12.5c1.5-2 4-3 7-3s5.5 1 7 3" />
      <path d="M8 16.5c1-1.3 2.5-2 4-2s3 .7 4 2" />
      <circle cx="12" cy="19.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DecorativeRings({ variant }: { variant: CardVariant }) {
  const color = variant === 'lime' ? '#b8d400' : '#ffffff';
  return (
    <svg
      className="pointer-events-none absolute right-[-10px] top-[-20px] select-none"
      style={{ opacity: variant === 'lime' ? 0.25 : 0.12 }}
      width="160"
      height="200"
      viewBox="0 0 160 200"
    >
      <circle
        cx="120"
        cy="100"
        r="85"
        stroke={color}
        strokeWidth="30"
        fill="none"
      />
      <circle
        cx="120"
        cy="100"
        r="50"
        stroke={color}
        strokeWidth="18"
        fill="none"
      />
    </svg>
  );
}

export function CreditCard({ card }: { card: CardData }) {
  const router = useRouter();
  const isLime = card.variant === 'lime';

  return (
    <button
      onClick={() => router.push(card.href)}
      // aspect-[1.586] fuerza a la tarjeta a tener la proporción real de una VISA/Mastercard
      className={`relative w-full flex flex-col justify-between overflow-hidden rounded-[20px] p-6 text-left shadow-lg transition-transform active:scale-[0.98] aspect-[1.586] ${
        isLime ? 'bg-brand-lime' : 'bg-brand-violet'
      }`}
    >
      <DecorativeRings variant={card.variant} />

      {/* Top: Chip y Contactless */}
      <div className="relative z-10 flex w-full items-center gap-3">
        <ChipIcon />
        <ContactlessIcon variant={card.variant} />
      </div>

      {/* Bottom: Textos de la tarjeta */}
      <div className="relative z-10 mt-auto w-full">
        <p
          className={`mb-4 font-mono text-lg font-bold tracking-[0.2em] ${
            isLime ? 'text-ink' : 'text-white'
          }`}
        >
          {card.number}
        </p>

        <div className="flex items-end justify-between">
          <div>
            <p
              className={`text-sm font-semibold uppercase tracking-wider ${isLime ? 'text-ink' : 'text-white'}`}
            >
              {card.name}
            </p>
            <p
              className={`mt-0.5 text-xs font-medium ${isLime ? 'text-ink/70' : 'text-white/70'}`}
            >
              EXP {card.expiry}
            </p>
          </div>
          <span
            className={`text-3xl font-black italic ${isLime ? 'text-ink' : 'text-white'}`}
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-1px' }}
          >
            {card.network}
          </span>
        </div>
      </div>
    </button>
  );
}
