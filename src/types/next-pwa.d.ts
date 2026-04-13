declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  type WithPWA = (config: NextConfig) => NextConfig;

  interface PWAOptions {
    dest: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
  }

  export default function withPWAInit(options: PWAOptions): WithPWA;
}