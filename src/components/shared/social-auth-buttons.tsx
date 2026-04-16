'use client';

import { useLanguage } from '@/lib/i18n/context';

type SocialAuthButtonsProps = {
  mode: 'sign-in' | 'sign-up';
};

function AppleIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <path d="M16.365 1.43c0 1.14-.426 2.21-1.15 3.04-.78.89-2.06 1.58-3.14 1.48-.13-1.07.4-2.2 1.12-3.01.8-.9 2.16-1.54 3.17-1.51.07 0 .13 0 .19.01.01.03.01.05.01.05ZM20.62 17.25c-.57 1.32-.84 1.9-1.56 2.98-1 1.52-2.42 3.42-4.17 3.44-1.55.01-1.95-1.01-4.06-.99-2.11.01-2.54 1.01-4.09.99-1.75-.02-3.09-1.72-4.1-3.24-2.83-4.35-3.13-9.45-1.39-12.14 1.24-1.9 3.19-3.01 5.01-3.04 1.69-.03 3.27 1.05 4.31 1.05 1.04 0 2.96-1.3 4.99-1.11.85.03 3.23.34 4.76 2.57-.12.08-2.84 1.67-2.81 4.97.03 3.94 3.47 5.25 3.51 5.28Z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
      <path
        fill="#FBBC05"
        d="M21.35 11.1h-9.18v2.98h5.28c-.23 1.45-1.7 4.25-5.28 4.25-3.18 0-5.77-2.63-5.77-5.87s2.59-5.87 5.77-5.87c1.82 0 3.04.77 3.74 1.43l2.55-2.46C17.6 4.17 15.4 3.02 12.17 3.02 6.91 3.02 2.63 7.3 2.63 12.5S6.91 21.98 12.17 21.98c5.5 0 9.18-3.86 9.18-9.3 0-.62-.07-1.09-.01-1.58Z"
      />
      <path
        fill="#EA4335"
        d="M3.85 7.59l3.17 2.32C7.84 8.1 9.84 6.79 12.17 6.79c1.82 0 3.04.77 3.74 1.43l2.55-2.46C17.6 4.17 15.4 3.02 12.17 3.02c-2.98 0-5.51 1.56-8.32 4.57Z"
      />
      <path
        fill="#4285F4"
        d="M12.17 21.98c3.15 0 5.8-1.04 7.73-2.82l-3.57-2.93c-.95.66-2.22 1.15-4.16 1.15-3.57 0-5.04-2.79-5.28-4.25L3.63 15.5c1.62 3.2 4.95 6.48 8.54 6.48Z"
      />
      <path
        fill="#34A853"
        d="M21.35 11.1h-9.18v2.98h5.28c-.16 1.02-.8 2.45-2.16 3.52l3.57 2.93c2.06-1.91 3.24-4.76 3.24-7.46 0-.62-.07-1.09-.01-1.58Z"
      />
    </svg>
  );
}

export function SocialAuthButtons({ mode }: SocialAuthButtonsProps) {
  const { t } = useLanguage();
  const displayTitle =
    mode === 'sign-in'
      ? t.or_continue_with_sign_in
      : t.or_continue_with_sign_up;

  return (
    <>
      <div className="flex items-center justify-center gap-3 pt-1">
        <span className="text-sm text-black/70">{displayTitle}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-white text-lg font-medium text-ink transition hover:bg-black/4 active:scale-95"
          aria-label={`${t.continue_with_apple} - ${t.social_apple}`}
        >
          <AppleIcon />
          {t.social_apple}
        </button>

        <button
          type="button"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-black/15 bg-white text-lg font-medium text-ink transition hover:bg-black/4 active:scale-95"
          aria-label={`${t.continue_with_google} - ${t.social_google}`}
        >
          <GoogleIcon />
          {t.social_google}
        </button>
      </div>
    </>
  );
}
