'use client';

import { ShoppingBag, Landmark, Utensils, MonitorPlay } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import { useCurrency } from '@/lib/i18n/currency-context';
import { formatCurrency } from '@/lib/i18n/currencies';

// Creamos una lista de datos. En el futuro, esto vendrá de tu API o de tu archivo insights-data.ts
const CATEGORIES_DATA_BASE = [
  {
    id: 'shopping',
    nameKey: 'shopping',
    amount: 1456,
    icon: <ShoppingBag className="h-5 w-5" />,
    iconBg: 'bg-orange-100 text-orange-600',
  },
  {
    id: 'banking',
    nameKey: 'banking',
    amount: 1234,
    icon: <Landmark className="h-5 w-5" />,
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 'food',
    nameKey: 'food_drink',
    amount: 450,
    icon: <Utensils className="h-5 w-5" />,
    iconBg: 'bg-green-100 text-green-600',
  },
  {
    id: 'subscriptions',
    nameKey: 'subscriptions',
    amount: 65,
    icon: <MonitorPlay className="h-5 w-5" />,
    iconBg: 'bg-blue-100 text-blue-600',
  },
];

export function InsightsCategories() {
  const { t } = useLanguage();
  const { currency } = useCurrency();

  const CATEGORIES_DATA = CATEGORIES_DATA_BASE.map((cat) => ({
    ...cat,
    name: t[cat.nameKey as keyof typeof t] as string,
    txCount: `50 ${t.transactions}`,
    displayAmount: formatCurrency(cat.amount, currency),
  }));
  return (
    <div className="w-full pb-8">
      <h3 className="mb-4 text-[17px] font-bold text-ink">{t.categories}</h3>

      <div className="flex flex-col gap-3">
        {/* Usamos .map() para no repetir el diseño de la tarjeta múltiples veces */}
        {CATEGORIES_DATA.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3.5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              {/* Contenedor circular del ícono */}
              <div
                className={`grid h-[42px] w-[42px] place-items-center rounded-full ${cat.iconBg}`}
              >
                {cat.icon}
              </div>

              {/* Textos */}
              <div>
                <p className="m-0 text-sm font-semibold text-ink">{cat.name}</p>
                <p className="m-0 mt-0.5 text-xs text-ink/50">{cat.txCount}</p>
              </div>
            </div>

            {/* Monto */}
            <span className="text-sm font-semibold text-ink">
              {cat.displayAmount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
