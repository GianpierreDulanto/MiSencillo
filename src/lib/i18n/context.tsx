'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Translations, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LANGUAGE_KEY = 'misencillo-language';
const DEFAULT_LANGUAGE: Language = 'es';

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  try {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      return stored;
    }
  } catch (error) {
    console.warn('Error reading language from localStorage:', error);
  }

  return DEFAULT_LANGUAGE;
}

// Fallback value for when context is not available
const FALLBACK_CONTEXT: LanguageContextType = {
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: translations[DEFAULT_LANGUAGE],
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    setLanguageState(getStoredLanguage());
  }, []);

  // Listen for storage changes (sync across tabs)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === LANGUAGE_KEY && event.newValue) {
        if (event.newValue === 'es' || event.newValue === 'en') {
          setLanguageState(event.newValue as Language);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    try {
      localStorage.setItem(LANGUAGE_KEY, newLanguage);
      // Dispatch event for same-tab synchronization
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: LANGUAGE_KEY,
          newValue: newLanguage,
          oldValue: language,
        })
      );
    } catch (error) {
      console.warn('Error saving language to localStorage:', error);
    }
  };

  // Provide default context immediately during hydration
  // This prevents "context not found" errors
  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  // If context is undefined, we're likely in a SSR or pre-rendering context
  // Return default values instead of throwing error
  if (context === undefined) {
    // During SSR/pre-rendering on server, return default
    if (typeof window === 'undefined') {
      return FALLBACK_CONTEXT;
    }

    // This should rarely happen on client, but provide fallback anyway
    console.warn(
      'useLanguage called outside of LanguageProvider, using defaults'
    );
    return FALLBACK_CONTEXT;
  }

  return context;
}
