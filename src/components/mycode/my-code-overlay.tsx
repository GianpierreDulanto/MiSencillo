'use client';

import Image from 'next/image';

function MyCodeOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl">
      <div className="relative mx-auto flex h-full max-w-sm flex-col justify-center px-4 py-6">
        <div className="rounded-[32px] bg-white/95 p-5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold text-ink">My QR Code</p>
              <p className="mt-1 text-sm text-black/50">
                Show and scan this QR code to start transactions
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close my code"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-black/5 text-ink transition hover:bg-black/10"
            >
              ×
            </button>
          </div>

          <div className="mt-6 rounded-[32px] border border-black/10 bg-surface p-6 shadow-sm">
            <div className="rounded-[28px] bg-white p-4 shadow-inner">
              <Image
                src="/images/qr_mine.png"
                alt="My QR Code"
                width={320}
                height={320}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-2xl bg-brand-lime py-4 text-base font-semibold text-ink"
            >
              Share Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCodeOverlay;
