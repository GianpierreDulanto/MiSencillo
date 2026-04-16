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

        // ✅ Limpiar caché para rutas de autenticación cuando el app se carga
        const cacheNames = await caches.keys();
        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName);
          const keys = await cache.keys();

          // Eliminar del caché rutas de autenticación
          const authRoutes = [
            '/sign-in',
            '/sign-up',
            '/enter-pin',
            '/verify-phone',
            '/verify-code',
            '/create-pin',
          ];
          for (const request of keys) {
            const url = new URL(request.url);
            if (authRoutes.some((route) => url.pathname.startsWith(route))) {
              await cache.delete(request);
              console.log('Cleared cache for:', url.pathname);
            }
          }
        }

        // ✅ Actualizar cada hora
        intervalId = setInterval(
          () => {
            registration.update().catch((error) => {
              console.error('Service worker update failed:', error);
            });
          },
          60 * 60 * 1000
        );

        // ✅ Forzar descarga de SW actualizado cuando hay cambios importantes
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                console.log(
                  'New service worker ready, will activate on next reload'
                );
              }
            });
          }
        });
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
