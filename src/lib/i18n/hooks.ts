'use client';

import { useCallback } from 'react';
import { useLanguage } from './context';
import { Language } from './translations';

/**
 * Hook para sincronizar el cambio de idioma con la API y localStorage
 * Esto asegura que la preferencia persista en todas las páginas
 */
export function useLanguageSync() {
  const { language, setLanguage: setLanguageContext } = useLanguage();

  const setLanguage = useCallback(
    async (newLanguage: Language) => {
      // 1. Actualizar contexto inmediatamente
      setLanguageContext(newLanguage);

      // 2. Guardar en localStorage (ya se hace en el contexto)
      // 3. Sincronizar con la API para cookies del servidor
      try {
        await fetch('/api/language', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ language: newLanguage }),
        });
      } catch (error) {
        console.warn('Error syncing language with server:', error);
        // El idioma ya está guardado en localStorage, así que no es crítico
      }
    },
    [setLanguageContext]
  );

  return { language, setLanguage };
}
