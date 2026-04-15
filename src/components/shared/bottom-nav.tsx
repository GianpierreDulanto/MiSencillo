'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScanLine, WalletCards, CircleUserRound } from 'lucide-react';

// 1. Unificamos tu diseño visual con el Link de Next.js
function NavItem({
  href,
  icon,
  label,
  isActive,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`flex flex-col items-center gap-2 transition-colors ${
          isActive ? 'text-ink' : 'text-black/35 hover:text-ink/70'
        }`}
      >
        {icon}
        <span className="text-sm font-semibold">{label}</span>
      </Link>
    </li>
  );
}

// 2. Componente Principal
export function BottomNav() {
  // Obtenemos la ruta actual para saber qué botón encender
  const pathname = usePathname();

  return (
    // Conservamos tus clases exactas, añadiendo z-50 para que siempre esté por encima del contenido
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 border-t border-black/10 bg-surface-soft px-6 py-3">
      <ul className="flex items-end justify-between">
        {/* HOME */}
        <NavItem
          href="/dashboard"
          isActive={pathname === '/dashboard'}
          label="Home"
          icon={
            <div
              className={`grid h-8 w-8 place-items-center rounded-lg border-2 transition-colors ${
                pathname === '/dashboard'
                  ? 'border-black/75'
                  : 'border-black/25'
              }`}
            >
              <span className="text-sm font-semibold">⌂</span>
            </div>
          }
        />

        {/* INSIGHTS */}
        <NavItem
          href="/insights"
          isActive={pathname === '/insights'}
          label="Insights"
          icon={
            <div
              className={`grid h-8 w-8 place-items-center rounded-lg border-2 transition-colors ${
                pathname === '/insights' ? 'border-black/75' : 'border-black/25'
              }`}
            >
              <span className="text-sm font-semibold">◫</span>
            </div>
          }
        />

        {/* BOTÓN CENTRAL (SCAN) - Exactamente con tu sombra y token de color */}
        <li className="-mt-2">
          <button
            type="button"
            // onClick={() => setScanOpen(true)} // Descomenta esto cuando manejes el estado global del Scan
            aria-label="Scan"
            className="grid h-14 w-14 place-items-center rounded-full bg-brand-lime text-ink shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-transform active:scale-95"
          >
            <ScanLine className="h-6 w-6" />
          </button>
        </li>

        {/* MY CARDS */}
        <NavItem
          href="/my-cards" // Ajusta esta ruta si es diferente en tu proyecto
          isActive={pathname === '/my-cards'}
          label="My Cards"
          icon={<WalletCards className="h-8 w-8" />}
        />

        {/* PROFILE */}
        <NavItem
          href="/profile"
          isActive={pathname === '/profile'}
          label="Profile"
          icon={<CircleUserRound className="h-8 w-8" />}
        />
      </ul>
    </nav>
  );
}
