"use client";

import { useRouter } from 'next/navigation';
import { CloseLinkButton } from '../../../components/shared/close-link-button';

export default function CaptureIdPage() {
  const router = useRouter();

  return (
    <main className="box-border min-h-dvh overflow-hidden bg-[radial-gradient(circle_at_top,#22314c_0%,#0f1724_55%,#090d14_100%)] px-5 py-6 text-white">
      <section className="mx-auto flex h-full min-h-0 w-full max-w-sm flex-col">
        <div className="mb-8 flex items-center justify-start">
          <CloseLinkButton href="/upload-identity-proof" className="!text-white !font-bold" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">National ID</h1>
          <p className="text-base text-white/70">Take a photo of the front of your ID</p>
        </div>

        <div className="mt-40 flex flex-1 items-center justify-center">
          <div className="h-55 w-full max-w-92.5 rounded-[40px] border border-white/30 bg-transparent" />
        </div>

        <div className="mt-50 flex items-center justify-center gap-10 pb-12">
          <button
            type="button"
            onClick={() => router.replace('/enable-face-id')}
            className="grid h-20 w-20 place-items-center rounded-full border-[6px] border-white bg-brand-lime shadow-[0_0_0_2px_rgba(255,255,255,0.25)]"
            aria-label="Capture document"
          >
            <span className="h-9 w-9 rounded-full bg-brand-lime" />
          </button>

          <button
            type="button"
            className="text-4xl text-white"
            aria-label="Flash"
          >
            ⚡
          </button>
        </div>
      </section>
    </main>
  );
}
