'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';

export default function ApprovalPage() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <main className="box-border min-h-dvh bg-brand-violet px-5 pb-8 pt-10 text-white">
      <section className="mx-auto flex min-h-dvh w-full max-w-sm flex-col items-center">
        <div className="mt-20 grid h-60 w-60 place-items-center rounded-full bg-white/10">
          <div className="grid h-40 w-40 place-items-center rounded-full bg-white/10">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-brand-lime">
              <Image
                src="/svg/iconmonstr-check-mark-1.svg"
                alt="Face ID Icon"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>

        <h1 className="pt-20 text-4xl font-semibold tracking-tight">
          {t.youre_approved}
        </h1>
        <p className="mb-10 mt-4 text-m ffffff">{t.ready_to_start}</p>

        <div className="mt-auto mb-25 w-full rounded-3xl text-center text-ink shadow-2xl">
          <button
            type="button"
            onClick={() => router.replace('/dashboard')}
            className="inline-flex h-18 w-full items-center justify-center rounded-xl bg-brand-lime text-xl font-semibold"
          >
            {t.done}
          </button>
        </div>
      </section>
    </main>
  );
}
