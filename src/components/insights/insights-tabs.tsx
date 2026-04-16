'use client';

import { TabKey, tabData } from '@/lib/utils/insights-data';
import { useLanguage } from '@/lib/i18n/context';

export function InsightsTabs({
  activeTab,
  setActiveTab,
  setActiveIndex,
}: {
  activeTab: TabKey;
  setActiveTab: (t: TabKey) => void;
  setActiveIndex: (i: number) => void;
}) {
  const { t } = useLanguage();

  function changeTab(tab: TabKey) {
    setActiveTab(tab);
    setActiveIndex(tabData[tab].highlightIndex);
  }

  const tabLabels: Record<TabKey, string> = {
    weekly: t.weekly,
    monthly: t.monthly,
    yearly: t.yearly,
  };

  return (
    <div
      style={{
        display: 'flex',
        background: 'white',
        borderRadius: 999,
        padding: 4,
        marginBottom: 18,
      }}
    >
      {(['weekly', 'monthly', 'yearly'] as TabKey[]).map((tab) => (
        <button
          key={tab}
          onClick={() => changeTab(tab)}
          style={{
            flex: 1,
            padding: '7px 0',
            border: 'none',
            borderRadius: 999,
            fontSize: 13,
            cursor: 'pointer',
            background: activeTab === tab ? '#f0f0f5' : 'transparent',
            color: '#1a1a1a',
            fontWeight: activeTab === tab ? 600 : 400,
            transition: 'background 0.2s',
          }}
        >
          {tabLabels[tab].charAt(0).toUpperCase() + tabLabels[tab].slice(1)}
        </button>
      ))}
    </div>
  );
}
