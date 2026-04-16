'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import ProductDetailOverlay from '../product-detail-overlay';
import TransferSuccessPage from '@/components/transfer-success'; // Importamos tu componente de éxito

export default function McDonaldsStore() {
  const router = useRouter();
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [productOverlay, setProductOverlay] = useState({
    isOpen: false,
    name: '',
    price: '',
  });

  const handleAddToCart = () => {
    setProductOverlay({ ...productOverlay, isOpen: false });
    // Simulamos un pequeño retraso de procesamiento antes de mostrar el éxito
    setTimeout(() => {
      setShowSuccess(true);
    }, 300);
  };

  // Si la compra fue exitosa, mostramos tu pantalla de éxito
  if (showSuccess) {
    return <TransferSuccessPage onComplete={() => router.push('/dashboard')} />;
  }

  return (
    <main className="h-dvh w-full overflow-hidden bg-surface-soft relative">
      <section className="internal-scroll-y mx-auto h-full w-full max-w-sm pb-24 pt-6 overflow-y-auto">
        <header className="px-5 flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/stores')}
            className="grid h-11 w-11 place-items-center rounded-full bg-black/5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">McDonald&apos;s</h1>
          <div className="h-11 w-11" />
        </header>

        {/* Contenido de la tienda */}
        <div className="px-5 mb-8">
          <div className="rounded-[2rem] bg-[#DB0007] p-6 text-white shadow-xl">
            <h2 className="text-2xl font-bold">{t.big_mac_day}</h2>
            <p className="opacity-90">{t.your_discount_active}</p>
          </div>
        </div>

        <div className="px-5">
          <h3 className="text-xl font-bold mb-4">{t.burgers}</h3>
          <button
            onClick={() =>
              setProductOverlay({
                isOpen: true,
                name: t.big_mac,
                price: '$5.99',
              })
            }
            className="w-full flex items-center gap-4 p-4 bg-white rounded-3xl border border-black/5 shadow-sm"
          >
            <div className="h-16 w-16 bg-surface-soft rounded-2xl shrink-0" />
            <div className="text-left">
              <p className="font-bold">{t.big_mac}</p>
              <p className="text-sm text-black/50">$5.99</p>
            </div>
          </button>
        </div>
      </section>

      {/* Overlay del Producto con la acción de compra conectada */}
      <ProductDetailOverlay
        isOpen={productOverlay.isOpen}
        onClose={() => setProductOverlay({ ...productOverlay, isOpen: false })}
        productName={productOverlay.name}
        productPrice={productOverlay.price}
        onConfirm={handleAddToCart} // Nueva prop para conectar la acción
      />
    </main>
  );
}
