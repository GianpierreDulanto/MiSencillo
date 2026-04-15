"use client";

import { useState } from "react";
import { InsightsHeader } from "../../../components/insights/insights-header";
import { InsightsTabs } from "../../../components/insights/insights-tabs";
import { InsightsChart } from "../../../components/insights/insights-charts";
import { InsightsCategories } from "../../../components/insights/insights-categories";
import { BottomNav } from "../../../components/shared/bottom-nav";

import { TabKey, tabData } from "@/lib/utils/insights-data";

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("monthly");
  const [activeIndex, setActiveIndex] = useState(
    tabData.monthly.highlightIndex
  );

  return (
    // 1. Estructura idéntica al Dashboard: Alto total de la pantalla, sin scroll global, fondo suave usando tu token.
    <main className="h-dvh overflow-hidden bg-surface-soft text-ink">
      

      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm px-5 pb-24 pt-6">
        
        <InsightsHeader />

        {/* Añadí márgenes top (mt-6, mt-8) para separar los componentes limpiamente */}
        <div className="mt-6">
          <InsightsTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setActiveIndex={setActiveIndex}
          />
        </div>

        <div className="mt-6">
          <InsightsChart
            activeTab={activeTab}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        <div className="mt-8">
          <InsightsCategories />
        </div>

      </section>

      {/* 3. El menú inferior se renderiza fuera del contenedor de scroll para que quede fijo */}
      <BottomNav />
    </main>
  );
}