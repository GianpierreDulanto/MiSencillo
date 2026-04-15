'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CloseLinkButton } from '../../../components/shared/close-link-button';
import { SocialAuthButtons } from '../../../components/shared/social-auth-buttons';

export default function SignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
  }>({});

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: { fullName?: string; email?: string; password?: string } =
      {};

    if (fullName.trim().length < 2) {
      nextErrors.fullName = 'Enter your full name.';
    }

    if (!validateEmail(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      router.replace('/verify-phone');
    }
  };

  return (
    <main className="box-border min-h-dvh w-full bg-white px-5 py-10 text-ink">
      <section className="mx-auto flex w-full max-w-sm flex-col justify-center">
        <div className="space-y-8">
          <div className="flex items-center justify-start">
            <CloseLinkButton href="/sign-in" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight">
              Create account
            </h1>
            <p className="mt-3 text-xl text-black/60">Start using MiSencillo</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-black/60">
                Full name
              </span>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="mt-2 h-14 w-full rounded-xl border border-black/10 bg-[#f5f5f5] px-5 text-base outline-none transition placeholder:text-black/45 focus:border-brand-violet focus:bg-white focus:ring-4 focus:ring-brand-violet/15"
              />
              {errors.fullName ? (
                <p className="text-sm text-red-600">{errors.fullName}</p>
              ) : null}
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-black/60">Email</span>
              <input
                type="email"
                name="email"
                placeholder="johndoe@mail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 h-14 w-full rounded-xl border border-black/10 bg-[#f5f5f5] px-5 text-base outline-none transition placeholder:text-black/45 focus:border-brand-violet focus:bg-white focus:ring-4 focus:ring-brand-violet/15"
              />
              {errors.email ? (
                <p className="text-sm text-red-600">{errors.email}</p>
              ) : null}
            </label>

            <label className="block space-y-2">
              <span className="text-sm font-medium text-black/60">
                Password
              </span>
              <input
                type="password"
                name="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 h-14 w-full rounded-xl border border-black/10 bg-[#f5f5f5] px-5 text-base outline-none transition placeholder:text-black/45 focus:border-brand-violet focus:bg-white focus:ring-4 focus:ring-brand-violet/15"
              />
              {errors.password ? (
                <p className="text-sm text-red-600">{errors.password}</p>
              ) : null}
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-xl bg-brand-lime text-lg font-semibold transition active:scale-95"
            >
              Create account
            </button>
          </form>

          <SocialAuthButtons mode="sign-up" />
        </div>
      </section>
    </main>
  );
}
