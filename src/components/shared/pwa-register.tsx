'use client';

import { useEffect } from 'react';

export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (!('serviceWorker' in navigator)) return;

    let intervalId: ReturnType<typeof setInterval> | undefined;

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none',
        });

        console.log('Service worker registered:', registration.scope);

        intervalId = setInterval(
          () => {
            registration.update().catch((error) => {
              console.error('Service worker update failed:', error);
            });
          },
          60 * 60 * 1000
        ); // cada hora
      } catch (error) {
        console.error('Service worker registration failed:', error);
      }
    };

    if (
      document.readyState === 'interactive' ||
      document.readyState === 'complete'
    ) {
      registerServiceWorker();
    } else {
      window.addEventListener('load', registerServiceWorker, { once: true });
    }

    return () => {
      window.removeEventListener('load', registerServiceWorker);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return null;
}
