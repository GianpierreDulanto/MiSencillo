'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type Slide = {
  title: string;
  description: string;
  imageSrc: string;
};

const SLIDES: Slide[] = [
  {
    title: 'The Modern Way\nYour Money',
    description: 'Spend, save, and grow their money all together in one place.',
    imageSrc: '/images/billetera-digital-3d-icon-png-download-10969247.webp',
  },
  {
    title: 'Move Fast, Pay Easy',
    description: 'Send and receive payments in seconds with total control.',
    imageSrc: '/images/billetera-digital-3d-icon-png-download-10969247.webp',
  },
  {
    title: 'Smart Insights, Daily',
    description: 'Track every movement and make better decisions every day.',
    imageSrc: '/images/billetera-digital-3d-icon-png-download-10969247.webp',
  },
];

const SWIPE_THRESHOLD = 45;

export default function GetStartedPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeData = useMemo(() => SLIDES[activeSlide], [activeSlide]);

  const goToNext = () => {
    setActiveSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  const goToPrev = () => {
    setActiveSlide((prev) => Math.max(prev - 1, 0));
  };

  const onTouchStart = (clientX: number) => {
    setTouchStartX(clientX);
  };

  const onTouchEnd = (clientX: number) => {
    if (touchStartX === null) {
      return;
    }

    const deltaX = clientX - touchStartX;

    if (deltaX <= -SWIPE_THRESHOLD) {
      goToNext();
    }

    if (deltaX >= SWIPE_THRESHOLD) {
      goToPrev();
    }

    setTouchStartX(null);
  };

  return (
    <main className="relative box-border min-h-screen overflow-hidden bg-[#f5f5f5] px-5 pb-7 pt-6 text-[#1d1d1f]">
      <div className="mx-auto w-full max-w-sm">
        <div className="mb-8 flex justify-start">
          <Link
            href="/sign-in"
            className="rounded-full border border-black/10 bg-[#f5f5f5] px-5 py-2 text-lg font-medium"
          >
            Skip
          </Link>
        </div>

        <section
          className="mb-10"
          onTouchStart={(event) =>
            onTouchStart(event.changedTouches[0].clientX)
          }
          onTouchEnd={(event) => onTouchEnd(event.changedTouches[0].clientX)}
          onMouseDown={(event) => onTouchStart(event.clientX)}
          onMouseUp={(event) => onTouchEnd(event.clientX)}
        >
          <div className="relative flex h-70 items-center justify-center ">
            <div className="absolute h-70 w-70 rounded-full bg-black/4" />

            <div className="relative w-full rounded-[26px] border border-black bg-white/90 p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
              <p className="mb-3 text-sm text-black/60">Total Balance</p>
              <p className="mb-5 text-5xl font-semibold leading-none tracking-tight">
                $12,765.00
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex h-12 items-center gap-2 rounded-full bg-[#d2f801] px-5 text-sm font-semibold"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-lg leading-none">
                    ↑
                  </span>
                  Transfer
                </button>

                <button
                  type="button"
                  className="flex h-12 items-center gap-2 rounded-full bg-[#d2f801] px-5 text-sm font-semibold"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-lg leading-none">
                    ↓
                  </span>
                  Receive
                </button>

                <button
                  type="button"
                  className="grid h-12 w-12 place-items-center rounded-full bg-[#d2f801] text-2xl font-medium"
                  aria-label="More actions"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-lg leading-none">
                    ≡
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[30px] bg-white px-7 pb-7 pt-10 text-center shadow-[0_12px_36px_rgba(0,0,0,0.05)]">
          <h1 className="mb-4 mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.03em] whitespace-pre-line">
            {activeData.title}
          </h1>

          <p className="mx-auto mb-10 max-w-70 text-m leading-relaxed text-black/70">
            {activeData.description}
          </p>

          <div className="mb-8 flex items-center justify-center gap-3">
            {SLIDES.map((_, index) => (
              <span
                key={index}
                aria-hidden="true"
                className={`h-3 w-3 rounded-full border transition ${
                  index === activeSlide
                    ? 'border-[#5a45fe] bg-[#5a45fe]'
                    : 'border-black/45 bg-transparent'
                }`}
              />
            ))}
          </div>

          <Link
            href="/sign-in"
            className="mt-5 inline-flex h-16 w-full items-center justify-center rounded-2xl bg-[#d2f801] text-xl font-semibold"
          >
            Get Started
          </Link>
        </section>
      </div>
    </main>
  );
}
