"use client";

import { tabData, fmt, TabKey } from "@/lib/utils/insights-data";

export function InsightsChart({
  activeTab,
  activeIndex,
  setActiveIndex,
}: {
  activeTab: TabKey;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const data = tabData[activeTab];
  const max = Math.max(...data.values);
  const total = fmt(data.values.reduce((a, b) => a + b, 0));
  const selected = fmt(data.values[activeIndex]);

  const CHART_H = 110;
  const LABEL_H = 16;
  const BAR_AREA_H = CHART_H - LABEL_H;

  return (
    <div className="mb-[18px] rounded-3xl bg-brand-violet p-4 pt-[18px] shadow-sm">
      
      {/* --- Top Section --- */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="mb-1 text-xs text-white/75">
            Total Spending
          </p>
          <h2 className="m-0 text-2xl font-bold text-white">
            {total}
          </h2>
        </div>

        <div className="text-right">
          <p className="mb-0.5 text-[11px] text-white/60">
            Selected
          </p>
          <p className="m-0 text-[13px] font-semibold text-brand-lime">
            {selected}
          </p>
        </div>
      </div>

      {/* --- Chart Section --- */}
      <div className="relative" style={{ height: CHART_H }}>
        
        {/* Bars */}
        <div className="relative z-10 flex h-full items-end justify-between gap-1.5">
          {data.labels.map((label, i) => {
            const hPct = Math.max((data.values[i] / max) * 100, 8);
            const isActive = i === activeIndex;

            return (
              <button
                key={label}
                onClick={() => setActiveIndex(i)}
                className="flex h-full flex-1 cursor-pointer flex-col items-center justify-end border-none bg-transparent p-0"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-md transition-all duration-300 ${
                    isActive ? "bg-brand-lime" : "bg-white/30 hover:bg-white/40"
                  }`}
                  style={{
                    height: `${hPct}%`,
                    maxHeight: BAR_AREA_H,
                  }}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "repeating-linear-gradient(135deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 3px, transparent 3px, transparent 9px)",
                      }}
                    />
                  )}
                </div>

                <span
                  className={`mt-1.5 text-[11px] ${
                    isActive
                      ? "font-semibold text-white"
                      : "font-normal text-white/70"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}