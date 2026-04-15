'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.replace('/get-started');
    }, 6000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [router]);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-brand-violet">
      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-1 shadow-xl">
        <Image
          src="/images/billetera-digital-3d-icon-png-download-10969247.webp"
          alt="Logo de carga"
          width={160}
          height={160}
          className="h-auto w-auto object-contain"
          priority
        />
      </div>
    </main>
  );
}
