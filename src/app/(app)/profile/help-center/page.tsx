'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';
import {
  Search,
  ChevronLeft,
  MessageCircle,
  Mail,
  ChevronRight,
  CreditCard,
  ShieldCheck,
  User,
  Zap,
} from 'lucide-react';

export default function HelpCenterPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'account', label: t.account, icon: <User className="w-5 h-5" /> },
    {
      id: 'payments',
      label: t.payments,
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      id: 'security',
      label: t.security,
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    { id: 'features', label: t.features, icon: <Zap className="w-5 h-5" /> },
  ];

  const faqs = [
    { question: t.how_change_pin, category: 'security' },
    { question: t.why_transfer_pending, category: 'payments' },
    { question: t.how_invite_friends, category: 'features' },
    { question: t.can_use_multiple_devices, category: 'account' },
  ];

  return (
    <main className="min-h-screen bg-surface-soft flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-sm px-5 pt-6 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="grid h-11 w-11 place-items-center rounded-full bg-black/5 text-ink transition active:scale-95"
          aria-label={t.go_back}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">{t.help_center}</h1>
        <div className="h-11 w-11" />
      </header>

      <section className="w-full max-w-sm px-5 pb-10">
        {/* Welcome Text */}
        <div className="mt-8 mb-6">
          <h2 className="text-2xl font-bold text-ink leading-tight">
            {t.hi_jennifer_help}
            <br />
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 w-5 h-5" />
          <input
            type="text"
            placeholder={t.search_topics}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white border-none shadow-sm text-sm focus:ring-2 focus:ring-brand-violet/20 transition-all outline-none"
          />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="flex flex-col items-start gap-3 p-4 bg-white rounded-2xl border border-black/5 hover:bg-brand-violet/5 transition-colors text-left group"
            >
              <div className="p-2 bg-surface-soft rounded-xl text-brand-violet group-hover:bg-white transition-colors">
                {cat.icon}
              </div>
              <span className="text-sm font-bold text-ink">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Top Questions */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4 px-1">
            {t.top_questions}
          </h3>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl transition active:bg-surface border border-black/5"
              >
                <span className="text-sm font-medium text-ink">
                  {faq.question}
                </span>
                <ChevronRight className="w-4 h-4 text-black/20" />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="bg-brand-violet rounded-3xl p-6 text-white shadow-xl shadow-brand-violet/20">
          <h4 className="font-bold mb-1">{t.still_need_help}</h4>
          <p className="text-white/70 text-sm mb-6">{t.support_team_24_7}</p>

          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-brand-lime" />
              <span className="text-sm font-bold">{t.live_chat}</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5 text-brand-lime" />
              <span className="text-sm font-bold">{t.send_email}</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
