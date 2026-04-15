'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Copy, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function MemberIdPage() {
  const router = useRouter();

  // Mock ID (In a real scenario, this would come from your backend or global state)
  const memberId = 'MS-8247-A765';

  const handleCopy = () => {
    navigator.clipboard.writeText(memberId);
    // You could add a 'sonner' toast notification here, e.g., toast.success("ID copied!")
  };

  return (
    <main className="min-h-screen bg-surface flex flex-col items-center p-6 sm:p-8">
      {/* Header with consistent navigation */}
      <div className="w-full max-w-md flex items-center justify-between mb-8">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-surface-soft rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="text-ink w-6 h-6" />
        </button>
        <h1 className="text-ink font-bold text-xl text-center flex-1">
          My Identity
        </h1>
        <div className="w-10" /> {/* Spacer to keep the title centered */}
      </div>

      {/* Member Card */}
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col items-center p-8 border border-surface-soft">
        {/* User Avatar */}
        <div className="relative w-24 h-24 mb-6 rounded-full bg-brand-violet/10 flex items-center justify-center border-2 border-brand-violet">
          <Image
            src="/images/usuario.png"
            alt="User Avatar"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>

        <h2 className="text-ink font-bold text-2xl mb-1 text-center">
          Jennifer Lopez
        </h2>
        <p className="text-ink/60 text-sm mb-8 text-center uppercase tracking-widest font-medium">
          Premium Member
        </p>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-2xl border-2 border-surface-soft mb-8">
          <Image
            src="/images/qr_mine.png"
            alt="Member QR Code"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* ID Section */}
        <div className="w-full bg-surface-soft rounded-2xl p-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-ink/40 font-bold uppercase tracking-wider">
              Member ID
            </span>
            <span className="text-ink font-mono font-bold text-lg">
              {memberId}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="p-3 bg-white rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all text-brand-violet"
            aria-label="Copy Member ID"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Secondary Actions */}
      <div className="w-full max-w-md mt-8 grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 py-4 bg-brand-violet text-white rounded-2xl font-bold shadow-lg shadow-brand-violet/20 hover:opacity-90 transition-opacity">
          <Share2 className="w-5 h-5" />
          Share
        </button>
        <button className="flex items-center justify-center gap-2 py-4 bg-brand-lime text-ink rounded-2xl font-bold shadow-lg shadow-brand-lime/20 hover:opacity-90 transition-opacity">
          Download
        </button>
      </div>
    </main>
  );
}
