'use client';

import Link from 'next/link';
import { ChevronLeft, MoreHorizontal } from 'lucide-react';

export function InsightsHeader() {
  return (
    <div className="mb-[18px] flex items-center justify-between">
      {/* --- BOTÓN BACK (Conectado al Dashboard) --- */}
      <Link
        href="/dashboard"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-ink shadow-sm transition-transform hover:bg-surface-soft active:scale-95"
        aria-label="Volver al Dashboard"
      >
        {/* ChevronLeft es la versión profesional de tu '‹' */}
        <ChevronLeft className="h-5 w-5" />
      </Link>

      {/* --- TÍTULO --- */}
      <span className="text-[17px] font-semibold text-ink">Insights</span>

      {/* --- BOTÓN MENÚ --- */}
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-ink shadow-sm transition-transform hover:bg-surface-soft active:scale-95"
        aria-label="Opciones"
      >
        {/* MoreHorizontal es la versión profesional de tu '···' */}
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  );
}
