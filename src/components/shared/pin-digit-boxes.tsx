type PinDigitBoxesProps = {
  value: string;
  length?: number;
  className?: string;
};

export function PinDigitBoxes({
  value,
  length = 4,
  className = 'grid grid-cols-4 gap-3',
}: PinDigitBoxesProps) {
  return (
    <div className={className}>
      {Array.from({ length }).map((_, index) => {
        const digit = value[index];
        const isActive = index === value.length;

        return (
          <div
            key={index}
            className={`flex h-16 items-center justify-center rounded-2xl border bg-[#fafafa] text-3xl font-semibold ${
              isActive ? 'border-black/50 bg-white' : 'border-transparent'
            }`}
          >
            {digit ?? (isActive ? '|' : '')}
          </div>
        );
      })}
    </div>
  );
}
