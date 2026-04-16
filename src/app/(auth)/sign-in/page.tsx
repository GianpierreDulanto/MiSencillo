'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SocialAuthButtons } from '../../../components/shared/social-auth-buttons';
import { LanguageSelector } from '@/components/shared/language-selector';
import { useLanguage } from '@/lib/i18n/context';

export default function SignInPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { email?: string; password?: string } = {};

    if (!validateEmail(email)) {
      nextErrors.email = t.invalid_email;
    }

    if (password.length < 8) {
      nextErrors.password = t.password_min_length;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      router.replace('/enter-pin');
    }
  };

  return (
    <main className="box-border min-h-dvh w-full bg-white px-5 py-10 text-ink">
      {/* Language Selector - Top Right */}
      <div className="mb-6 flex justify-end">
        <LanguageSelector />
      </div>

      <section className="mx-auto flex w-full max-w-sm flex-col justify-center">
        <div className="space-y-8">
          <div>
            <Image
              src="/images/billetera-digital-3d-icon-png-download-10969247.webp"
              alt="MiSencillo logo"
              width={64}
              height={64}
              className="mb-3"
              priority
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight">
              {t.welcome_back}
            </h1>
            <p className="mt-3 text-xl text-black/60">{t.sign_in_account}</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-black/60">
                {t.your_email}
              </span>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@mail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 h-14 w-full rounded-xl border border-black/10 bg-[#f5f5f5] px-5 text-base outline-none transition placeholder:text-black/45 focus:border-brand-violet focus:bg-white focus:ring-4 focus:ring-brand-violet/15"
                />
              </div>
              {errors.email ? (
                <p className="text-sm text-red-600">{errors.email}</p>
              ) : null}
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-black/60">
                {t.password}
              </span>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-2 h-14 w-full rounded-xl border border-black/10 bg-[#f5f5f5] px-5 pr-14 text-base outline-none transition placeholder:text-black/45 focus:border-brand-violet focus:bg-white focus:ring-4 focus:ring-brand-violet/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black/35 transition hover:text-black/60"
                  aria-label={showPassword ? t.hide_password : t.show_password}
                >
                  {showPassword ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )}
                </button>
              </div>
              {errors.password ? (
                <p className="text-sm text-red-600">{errors.password}</p>
              ) : null}
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-lime text-lg font-semibold transition active:scale-95"
            >
              {t.sign_in}
            </button>

            <div className="flex items-center justify-between gap-3 text-sm">
              <Link
                href="/recover-email"
                className="font-medium text-brand-violet transition hover:opacity-75"
              >
                {t.forgot_password}
              </Link>
              <Link
                href="/sign-up"
                className="font-medium text-brand-violet transition hover:opacity-75"
              >
                {t.no_account}
              </Link>
            </div>
          </form>

          <SocialAuthButtons mode="sign-in" />
        </div>
      </section>
    </main>
  );
}
