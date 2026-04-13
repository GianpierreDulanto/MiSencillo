import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PwaRegister } from '@/components/shared/pwa-register';

export const metadata: Metadata = {
  title: 'MiSencillo',
  description: 'Authentication screens for MiSencillo',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MiSencillo',
  },
};

export const viewport: Viewport = {
  themeColor: '#5a45fe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}