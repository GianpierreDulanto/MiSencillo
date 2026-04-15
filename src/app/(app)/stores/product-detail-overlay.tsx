'use client';

import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

interface ProductDetailOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // Agrega esto
  productName: string;
  productPrice: string;
}

export default function ProductDetailOverlay({
  isOpen,
  onClose,
  onConfirm,
  productName,
  productPrice,
}: ProductDetailOverlayProps) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 flex justify-center items-end animate-fade-in">
      {/* Tap area to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container - Slides up */}
      <div className="relative w-full max-w-sm bg-surface-soft rounded-t-[2rem] p-6 shadow-2xl animate-slide-up internal-scroll-y max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-white rounded-full text-ink transition active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Placeholder */}
        <div className="w-full flex justify-center mt-12 mb-8">
          <div className="h-48 w-48 rounded-[2rem] bg-white border border-black/5 shadow-sm flex items-center justify-center">
            {/* Placeholder for product logo/image */}
            <div className="h-20 w-20 rounded-2xl bg-black/5" />
          </div>
        </div>

        {/* Product Details */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-ink leading-tight">
            {productName}
          </h2>
          <p className="mt-2 text-xl font-bold text-ink/70">{productPrice}</p>
          <p className="mt-6 text-sm text-ink/60 leading-relaxed max-w-[28ch] mx-auto">
            Enjoy Jennifer classic taste. 100% pure beef, cooked just for you.
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-4 bg-white rounded-2xl shadow-sm text-ink transition active:scale-95 hover:bg-surface"
          >
            <Minus className="w-6 h-6" />
          </button>

          <span className="text-5xl font-extrabold text-ink min-w-[1.2ch] text-center">
            {quantity}
          </span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-4 bg-white rounded-2xl shadow-sm text-ink transition active:scale-95 hover:bg-surface"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onConfirm} // Conecta el clic aquí
          className="w-full py-5 bg-brand-violet text-surface rounded-full text-lg font-bold shadow-xl shadow-brand-violet/20"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
