'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';

type CloseLinkButtonProps = {
  href: string;
  ariaLabel?: string;
  className?: string;
};

export function CloseLinkButton({
  href,
  ariaLabel,
  className,
}: CloseLinkButtonProps) {
  const { t } = useLanguage();
  const finalAriaLabel = ariaLabel || t.close;

  const baseClass =
    'grid h-11 w-11 place-items-center rounded-full bg-black/4 text-2xl font-medium text-black/60';
  const finalClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <Link href={href} aria-label={finalAriaLabel} className={finalClass}>
      ×
    </Link>
  );
}
