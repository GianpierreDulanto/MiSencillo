'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/context';

const recentPayed = [
  {
    id: 1,
    name: 'Rayford Chenail',
    card: '**** 3261',
    bank: 'VISA',
    avatar: '/images/usuario.png',
  },
  {
    id: 2,
    name: 'Krishna Barbe',
    card: '**** 4532',
    bank: 'CHASE',
    avatar: '/images/usuario.png',
  },
];

const allContacts = [
  {
    id: 3,
    name: 'Cyndy Lillibridge',
    card: '**** 0988',
    bank: 'MASTERCARD',
    avatar: '/images/usuario.png',
  },
  {
    id: 4,
    name: 'Willard Purnell',
    card: '**** XXXX',
    bank: 'HSBC',
    avatar: '/images/usuario.png',
  },
];

function ContactCard({
  name,
  card,
  avatar,
  onSelect,
}: {
  name: string;
  card: string;
  avatar: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 transition hover:bg-black/5"
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-brand-lime to-brand-violet shrink-0">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>
      <div className="text-left">
        <p className="text-base font-semibold text-ink">{name}</p>
        <p className="text-xs text-black/50">{card}</p>
      </div>
    </button>
  );
}

function TransferOverlay({
  open,
  onClose,
  onSelectContact,
}: {
  open: boolean;
  onClose: () => void;
  onSelectContact: (contact: (typeof recentPayed)[0]) => void;
}) {
  const { t } = useLanguage();
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  if (!open) {
    return null;
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const diff = currentY - startY;
    if (diff > 100) {
      onClose();
    }
    setStartY(0);
    setCurrentY(0);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="absolute bottom-0 left-1/2 w-full max-w-sm -translate-x-1/2 rounded-t-[32px] bg-white transition-all duration-300"
        style={{
          maxHeight: '70vh',
        }}
      >
        {/* Drag Handle */}
        <div className="flex justify-center px-5 py-3">
          <div className="h-1 w-12 rounded-full bg-black/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/10 px-5 pb-4">
          <div>
            <p className="text-xl font-semibold text-ink">
              {t.choose_recipients}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close_transfer}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-black/5 text-ink transition hover:bg-black/10"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[60vh] overflow-y-auto px-5 py-5">
          {/* Search Bar */}
          <div className="mb-6 flex items-center gap-3 rounded-2xl bg-black/5 px-4 py-3">
            <span className="text-lg text-black/40">🔍</span>
            <input
              type="text"
              placeholder={t.search_contact}
              className="w-full bg-transparent text-base text-ink placeholder-black/50 outline-none"
            />
          </div>

          {/* Recent Payed Section */}
          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold text-ink">
              {t.recent_payed}
            </h3>
            <div className="space-y-3">
              {recentPayed.map((contact) => (
                <ContactCard
                  key={contact.id}
                  name={contact.name}
                  card={contact.card}
                  avatar={contact.avatar}
                  onSelect={() => onSelectContact(contact)}
                />
              ))}
            </div>
          </div>

          {/* All Contact Section */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-ink">
              {t.all_contact}
            </h3>
            <div className="space-y-3 pb-8">
              {allContacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  name={contact.name}
                  card={contact.card}
                  avatar={contact.avatar}
                  onSelect={() => onSelectContact(contact)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferOverlay;
