"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, MoreHorizontal, Snowflake, Lock, Settings, ChevronRight } from "lucide-react";
import { CreditCard, type CardData } from "@/components/ui/credit-card";

// Base de datos simulada (En un proyecto real, esto vendría de tu API)
const CARDS_DB: CardData[] = [
  { id: 1, number: "5643 7890 3281 7865", name: "Jennifer Lopez", expiry: "03/28", network: "VISA", variant: "lime", href: "/my-cards/1" },
  { id: 2, number: "5643 7890 3281 7865", name: "Jennifer Lopez", expiry: "03/28", network: "VISA", variant: "violet", href: "/my-cards/2" },
];

// Sub-componente para las filas del menú (Regla #4: No repetir código HTML)
function ActionRow({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <button className="flex w-full items-center justify-between border-b border-black/5 py-4 transition-opacity last:border-0 active:opacity-70">
      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-violet text-white">
          {icon}
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-ink">{title}</p>
          <p className="mt-0.5 text-xs text-ink/50">{subtitle}</p>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-ink/30" />
    </button>
  );
}

export default function CardDetailPage() {
  // 1. Extraemos el ID de la URL (ej. si estás en /my-cards/2, cardId será 2)
  const params = useParams();
  const cardId = Number(params.id);

  // 2. Buscamos la tarjeta específica en nuestra "base de datos"
  const card = CARDS_DB.find((c) => c.id === cardId);

  // Si el usuario escribe una URL de una tarjeta que no existe, mostramos esto:
  if (!card) {
    return (
      <div className="flex h-dvh items-center justify-center bg-surface-soft">
        <p>Tarjeta no encontrada</p>
      </div>
    );
  }

  return (
    <main className="min-h-dvh bg-surface-soft text-ink pb-10">
      <div className="mx-auto max-w-sm px-5 pt-6">
        
        {/* --- Header --- */}
        <header className="mb-8 flex items-center justify-between">
          <Link
            href="/my-cards"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-surface shadow-sm transition-transform active:scale-95"
          >
            <ChevronLeft className="h-5 w-5 text-ink" />
          </Link>
          <h1 className="text-lg font-semibold text-ink">Personal</h1>
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-surface shadow-sm transition-transform active:scale-95">
            <MoreHorizontal className="h-5 w-5 text-ink" />
          </button>
        </header>

        {/* --- Balance --- */}
        <div className="mb-6">
          <p className="mb-1 text-sm text-ink/60">Total Balance</p>
          <h2 className="text-[32px] font-bold leading-none tracking-tight">
            $12,765.00
          </h2>
        </div>

        {/* --- Tarjeta (Reutilizando el componente maestro) --- */}
        {/* Usamos pointer-events-none para que la tarjeta no sea "clickeable" estando ya en el detalle */}
        <div className="mb-8 pointer-events-none">
          <CreditCard card={card} />
        </div>

        {/* --- Opciones de la tarjeta --- */}
        <div className="rounded-[20px] bg-surface px-4 py-2 shadow-sm">
          <ActionRow 
            icon={<Snowflake className="h-5 w-5" />} 
            title="Freeze card" 
            subtitle="Block card temporarily" 
          />
          <ActionRow 
            icon={<Lock className="h-5 w-5" />} 
            title="PIN & Security" 
            subtitle="Unblock PIN or CVV and more" 
          />
          <ActionRow 
            icon={<Settings className="h-5 w-5" />} 
            title="Settings" 
            subtitle="Remove or rename card & more" 
          />
        </div>

      </div>
    </main>
  );
}