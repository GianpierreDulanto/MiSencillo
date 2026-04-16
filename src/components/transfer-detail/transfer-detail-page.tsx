'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, Shield, Calendar } from 'lucide-react';
import { NumericKeypad } from '@/components/shared/numeric-keypad';
import { useLanguage } from '@/lib/i18n/context';
import { useCurrency } from '@/lib/i18n/currency-context';
import { formatCurrency } from '@/lib/i18n/currencies';

function TransferDetailPage({
  contact,
  onBack,
  onSuccess,
}: {
  contact: {
    id: number;
    name: string;
    card: string;
    bank: string;
    avatar: string;
  };
  onBack: () => void;
  onSuccess: () => void;
}) {
  const { t } = useLanguage();
  const { currency } = useCurrency();
  const [amount, setAmount] = useState('0');
  const [note, setNote] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDigit = (digit: string) => {
    setAmount((prev) => {
      if (prev === '0') {
        return digit;
      }
      if (prev.length < 10) {
        return prev + digit;
      }
      return prev;
    });
  };

  const handleBackspace = () => {
    setAmount((prev) => {
      if (prev.length === 1) {
        return '0';
      }
      return prev.slice(0, -1);
    });
  };

  const displayAmount = () => {
    const num = parseInt(amount, 10);
    return formatCurrency(num / 100, currency);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-brand-violet to-brand-violet/90">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 text-white">
        <button
          type="button"
          onClick={onBack}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <p className="text-xl font-semibold">{t.transfer_money}</p>
        <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-lime">
          <Shield className="h-6 w-6 text-violet-600" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex max-w-sm flex-col overflow-hidden">
        {/* Main Card */}
        <div className="flex-1 rounded-b-[40px] bg-white px-5 pb-8 pt-8">
          {/* Amount Section */}
          <div className="mb-8">
            <p className="text-center text-sm text-black/50">
              {t.enter_amount}
            </p>
            <div className="mt-4 text-center">
              <p className="text-6xl font-bold text-ink">{displayAmount()}</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="mb-8 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-brand-lime to-brand-violet shrink-0">
                <Image
                  src={contact.avatar}
                  alt={contact.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-ink">
                  {contact.name}
                </p>
                <p className="text-xs text-black/50">{contact.card}</p>
              </div>
            </div>
          </div>

          {/* Note Input */}
          <div className="mb-8 flex items-center rounded-2xl border border-black/10 bg-black/5 px-4 py-3">
            <input
              type="text"
              placeholder={t.add_note}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="flex-1 bg-transparent text-base text-ink placeholder-black/50 outline-none"
            />
            <Calendar className="h-5 w-5 text-black/30" />
          </div>

          {/* Numeric Keypad - Not Fixed */}
          <NumericKeypad
            onDigit={handleDigit}
            onBackspace={handleBackspace}
            fixedToBottom={false}
            className="mt-8 grid grid-cols-3 gap-3 pb-8"
          />

          {/* Send Button */}
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            className="mt-8 w-full rounded-2xl bg-brand-lime py-4 text-lg font-semibold text-ink transition active:scale-95"
          >
            {t.send_money}
          </button>

          {/* Confirmation Modal */}
          {showConfirm && (
            <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm px-4 py-6">
              <div className="w-full max-w-sm rounded-[32px] bg-white p-6 shadow-2xl">
                <p className="mb-4 text-center text-xl font-semibold text-ink">
                  {t.confirm_transfer}
                </p>

                <div className="mb-6 rounded-2xl bg-black/5 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-black/60">{t.amount}</span>
                    <span className="text-lg font-semibold text-ink">
                      {displayAmount()}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-black/60">{t.recipient}</span>
                    <span className="text-lg font-semibold text-ink">
                      {contact.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/60">{t.note}</span>
                    <span className="text-sm text-black/50">
                      {note || t.none}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 rounded-2xl border border-black/10 bg-white py-3 text-base font-semibold text-ink transition hover:bg-black/5"
                  >
                    {t.cancel}
                  </button>
                  <button
                    type="button"
                    onClick={onSuccess}
                    className="flex-1 rounded-2xl bg-brand-lime py-3 text-base font-semibold text-ink transition active:scale-95"
                  >
                    {t.confirm}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransferDetailPage;
