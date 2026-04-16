'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';

export default function EnableFaceIdPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <main className="box-border min-h-dvh bg-brand-violet px-5 pb-8 pt-10 text-white">
      <section className="mx-auto flex min-h-dvh w-full max-w-sm flex-col items-center">
        <div className="mt-20 grid h-60 w-60 place-items-center rounded-full bg-white/10">
          <div className="grid h-40 w-40 place-items-center rounded-full bg-white/10">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-brand-lime">
              <Image
                src="/svg/face-scan-svgrepo-com.svg"
                alt="Face ID Icon"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>

        <div className="mt-auto mb-25 w-full rounded-3xl bg-white p-6 text-center text-ink shadow-2xl">
          <h1 className="pt-10 text-4xl font-semibold tracking-tight">
            {t.enable_face_id}
          </h1>
          <p className="mb-10 mt-4 text-base text-black/55">
            {t.face_id_description}
          </p>

          <div className="mt-8 space-y-3">
            <button
              type="button"
              onClick={() => router.replace('/selfie-scan')}
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-brand-lime text-lg font-semibold"
            >
              {t.enable_face_id}
            </button>

            <button
              type="button"
              onClick={() => router.replace('/enter-pin?mode=signup')}
              className="inline-flex h-14 w-full items-center justify-center rounded-xl border border-black/10 bg-[#f5f5f5] text-base font-semibold text-black/75"
            >
              {t.skip}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
