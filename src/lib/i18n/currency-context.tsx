'use client';

import React, { createContext, useContext, useState } from 'react';
import { Currency, CURRENCIES } from './currencies';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

const CURRENCY_KEY = 'misencillo-currency';
const DEFAULT_CURRENCY: Currency = 'USD';

function getStoredCurrency(): Currency {
  if (typeof window === 'undefined') {
    return DEFAULT_CURRENCY;
  }

  try {
    const stored = localStorage.getItem(CURRENCY_KEY);
    if (stored && stored in CURRENCIES) {
      return stored as Currency;
    }
  } catch (error) {
    console.warn('Error reading currency from localStorage:', error);
  }

  return DEFAULT_CURRENCY;
}

const FALLBACK_CONTEXT: CurrencyContextType = {
  currency: DEFAULT_CURRENCY,
  setCurrency: () => {},
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() =>
    getStoredCurrency()
  );

  // Listen for storage changes (sync across tabs)
  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === CURRENCY_KEY && event.newValue) {
        if (event.newValue in CURRENCIES) {
          setCurrencyState(event.newValue as Currency);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    try {
      localStorage.setItem(CURRENCY_KEY, newCurrency);
      // Dispatch event for same-tab synchronization
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: CURRENCY_KEY,
          newValue: newCurrency,
          oldValue: currency,
        })
      );
    } catch (error) {
      console.warn('Error saving currency to localStorage:', error);
    }
  };

  const value: CurrencyContextType = {
    currency,
    setCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);

  if (context === undefined) {
    if (typeof window === 'undefined') {
      return FALLBACK_CONTEXT;
    }

    console.warn(
      'useCurrency called outside of CurrencyProvider, using defaults'
    );
    return FALLBACK_CONTEXT;
  }

  return context;
}
