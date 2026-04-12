import Link from 'next/link';

type CloseLinkButtonProps = {
  href: string;
  ariaLabel?: string;
  className?: string;
};

export function CloseLinkButton({ href, ariaLabel = 'Close', className }: CloseLinkButtonProps) {
  const baseClass = "grid h-11 w-11 place-items-center rounded-full bg-black/4 text-2xl font-medium text-black/60";
  const finalClass = className ? `${baseClass} ${className}` : baseClass;
  
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={finalClass}
    >
      ×
    </Link>
  );
}
