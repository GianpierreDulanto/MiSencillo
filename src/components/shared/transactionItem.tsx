import { MoveDown } from 'lucide-react';

function TxIcon({ icon }: { icon: string }) {
  if (icon === 'fi') {
    return <span className="text-2xl font-semibold text-ink">fi</span>;
  }

  if (icon === 'arrow-down') {
    return <MoveDown className="h-6 w-6 text-ink" />;
  }

  return <span className="h-3 w-3 rounded-full bg-black/70" />;
}

type TransactionItemProps = {
  name: string;
  when: string;
  amount: string;
  type: string;
  icon: string;
  iconBg: string;
};

export default function TransactionItem({
  name,
  when,
  amount,
  type,
  icon,
  iconBg,
}: TransactionItemProps) {
  return (
    <article className="flex items-center justify-between rounded-3xl border border-black/10 bg-surface p-3.5">
      <div className="flex items-center gap-3">
        <div
          className={`grid h-14 w-14 place-items-center rounded-full ${iconBg}`}
        >
          <TxIcon icon={icon} />
        </div>

        <div>
          <p className="text-lg font-semibold leading-tight">{name}</p>
          <p className="mt-1 text-sm text-black/50">{when}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold leading-tight">{amount}</p>
        <p className="mt-1 text-sm text-black/50">{type}</p>
      </div>
    </article>
  );
}
