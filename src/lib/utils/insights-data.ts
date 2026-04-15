export type TabKey = 'weekly' | 'monthly' | 'yearly';

type TabItem = {
  labels: string[];
  values: number[];
  highlightIndex: number;
  referenceValue: number;
};

export const tabData: Record<TabKey, TabItem> = {
  weekly: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [320, 480, 260, 590, 720, 980, 415],
    highlightIndex: 5,
    referenceValue: 600,
  },
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [1200, 980, 1450, 1800, 1100, 760],
    highlightIndex: 3,
    referenceValue: 980,
  },
  yearly: {
    labels: ['2021', '2022', '2023', '2024', '2025', '2026'],
    values: [24000, 28500, 31000, 34500, 37200, 41000],
    highlightIndex: 5,
    referenceValue: 30000,
  },
};

export function fmt(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}
