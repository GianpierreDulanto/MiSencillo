export type Currency = 'USD' | 'PEN' | 'COP' | 'MXN' | 'EUR';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  name: string;
  exchangeRate: number; // relative to USD
}

export const CURRENCIES: Record<Currency, CurrencyConfig> = {
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    exchangeRate: 1,
  },
  PEN: {
    code: 'PEN',
    symbol: 'S/',
    name: 'Peruvian Sol',
    exchangeRate: 3.7,
  },
  COP: {
    code: 'COP',
    symbol: '$',
    name: 'Colombian Peso',
    exchangeRate: 4100,
  },
  MXN: {
    code: 'MXN',
    symbol: '$',
    name: 'Mexican Peso',
    exchangeRate: 17,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    exchangeRate: 0.92,
  },
};

export function formatCurrency(
  amount: number,
  currency: Currency = 'USD',
  locale: string = 'en-US'
): string {
  const config = CURRENCIES[currency];
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function getCurrencySymbol(currency: Currency = 'USD'): string {
  return CURRENCIES[currency].symbol;
}
