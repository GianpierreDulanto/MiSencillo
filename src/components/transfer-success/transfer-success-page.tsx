"use client";

import { useEffect, useState } from 'react';

function TransferSuccessPage({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-brand-violet to-brand-violet/90">
      {/* Animated Checkmark */}
      <div className="relative mb-12 flex items-center justify-center">
        {/* Outer ring animation */}
        <div
          className={`absolute h-32 w-32 rounded-full border-4 border-brand-lime/40 transition-all duration-700 ${
            isAnimating ? 'scale-100 opacity-0' : 'scale-100 opacity-0'
          }`}
        />

        {/* Middle ring */}
        <div className="absolute h-28 w-28 rounded-full border-2 border-brand-lime/20" />

        {/* Inner circle with checkmark */}
        <div className="relative h-24 w-24 flex items-center justify-center rounded-full bg-brand-lime">
          <svg
            className={`h-12 w-12 text-violet-600 transition-all duration-700 ${
              isAnimating ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <h1 className="text-center text-5xl font-bold text-white mb-4">All Done!</h1>
      <p className="max-w-xs text-center text-lg text-white/80">
        You have successfully transferred your money.
      </p>
    </div>
  );
}

export default TransferSuccessPage;
