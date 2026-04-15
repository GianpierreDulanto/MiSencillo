'use client';

import { useState } from 'react';
import Image from 'next/image';
import MyCodeOverlay from '@/components/mycode';

function ScanOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [showMyCode, setShowMyCode] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm px-4 py-6">
        <div className="mx-auto flex h-full max-w-sm flex-col justify-between">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close scanner"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              ×
            </button>
            <span className="text-sm font-semibold text-white">Scan QR</span>
            <div className="h-11 w-11" />
          </div>

          <div className="relative mx-auto w-full rounded-[40px] border border-white/10 bg-[#111827]/90 p-5 shadow-2xl">
            <div className="rounded-[32px] border border-white/20 bg-black/80 p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-[#0e111a]">
                <Image
                  src="/images/qr_sd.png"
                  alt="QR Scanner"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-4 rounded-[24px] border border-brand-lime/80" />
                <div className="absolute inset-8 rounded-[20px] border border-white/10" />
                <div className="absolute inset-12 rounded-[16px] border border-white/10" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white"
            >
              <Image
                src="/images/image-galery.png"
                alt="Gallery"
                width={24}
                height={24}
                className="h-6 w-6 invert"
              />
            </button>

            <button
              type="button"
              onClick={() => setShowMyCode(true)}
              className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-brand-lime px-6 text-base font-semibold text-ink"
            >
              <Image
                src="/images/qr-code.png"
                alt="My Code"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              My Code
            </button>

            <button
              type="button"
              className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white"
            >
              <Image
                src="/images/storm.png"
                alt="Gallery"
                width={24}
                height={24}
                className="h-6 w-6 invert"
              />
            </button>
          </div>
        </div>
      </div>
      <MyCodeOverlay open={showMyCode} onClose={() => setShowMyCode(false)} />
    </>
  );
}

export default ScanOverlay;
