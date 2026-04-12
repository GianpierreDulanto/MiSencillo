type NumericKeypadProps = {
  keys?: readonly string[];
  onDigit: (digit: string) => void;
  onBackspace: () => void;
  onStar?: () => void;
  fixedToBottom?: boolean;
  bottomClassName?: string;
  className?: string;
};

const DEFAULT_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', 'backspace'] as const;

export function NumericKeypad({
  keys = DEFAULT_KEYS,
  onDigit,
  onBackspace,
  onStar,
  fixedToBottom = true,
  bottomClassName = 'bottom-6',
  className,
}: NumericKeypadProps) {
  const resolvedClassName = className
    ? className
    : fixedToBottom
      ? `fixed left-1/2 z-20 box-border grid w-full max-w-sm -translate-x-1/2 grid-cols-3 gap-3 px-5 ${bottomClassName}`
      : 'mt-6 grid grid-cols-3 gap-3 pb-8';

  return (
    <section className={resolvedClassName}>
      {keys.map((key, index) => {
        if (key === 'backspace') {
          return (
            <button
              type="button"
              key={`backspace-${index}`}
              onClick={onBackspace}
              className="flex h-16 items-center justify-center rounded-2xl bg-[#fafafa] text-2xl font-medium text-black/70 transition active:scale-95"
              aria-label="Delete last digit"
            >
              ⌫
            </button>
          );
        }

        if (key === '*') {
          return (
            <button
              type="button"
              key={`star-${index}`}
              onClick={onStar}
              className="flex h-16 items-center justify-center rounded-2xl bg-[#fafafa] text-3xl font-medium text-black/75 transition active:scale-95"
              aria-label="Star"
            >
              *
            </button>
          );
        }

        return (
          <button
            type="button"
            key={`${key}-${index}`}
            onClick={() => onDigit(key)}
            className="flex h-16 items-center justify-center rounded-2xl bg-[#fafafa] text-3xl font-medium text-black transition active:scale-95"
            aria-label={`Digit ${key}`}
          >
            {key}
          </button>
        );
      })}
    </section>
  );
}
