"use client";

import { ShoppingBag, Landmark, Utensils, MonitorPlay } from "lucide-react";

// Creamos una lista de datos. En el futuro, esto vendrá de tu API o de tu archivo insights-data.ts
const CATEGORIES_DATA = [
  {
    id: "shopping",
    name: "Shopping",
    txCount: "50 transactions",
    amount: "$1,456.00",
    icon: <ShoppingBag className="h-5 w-5" />,
    // Usamos colores genéricos de Tailwind combinados con opacidad para los fondos de los íconos
    iconBg: "bg-orange-100 text-orange-600", 
  },
  {
    id: "banking",
    name: "Banking",
    txCount: "10 transactions",
    amount: "$1,234.00",
    icon: <Landmark className="h-5 w-5" />,
    iconBg: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "food",
    name: "Food & Drink",
    txCount: "24 transactions",
    amount: "$450.00",
    icon: <Utensils className="h-5 w-5" />,
    iconBg: "bg-green-100 text-green-600",
  },
  {
    id: "subscriptions",
    name: "Subscriptions",
    txCount: "4 transactions",
    amount: "$65.00",
    icon: <MonitorPlay className="h-5 w-5" />,
    iconBg: "bg-blue-100 text-blue-600",
  },
];

export function InsightsCategories() {
  return (
    <div className="w-full pb-8">
      <h3 className="mb-4 text-[17px] font-bold text-ink">
        Categories
      </h3>

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
                <p className="m-0 text-sm font-semibold text-ink">
                  {cat.name}
                </p>
                <p className="m-0 mt-0.5 text-xs text-ink/50">
                  {cat.txCount}
                </p>
              </div>
            </div>

            {/* Monto */}
            <span className="text-sm font-semibold text-ink">
              {cat.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}