'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Fingerprint,
  Eye,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

export default function PrivacySecurityPage() {
  const router = useRouter();

  // State for interactive toggles
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Security items configuration
  const securityItems = [
    {
      id: 'password',
      title: 'Change Password',
      description: 'Update your login password',
      icon: <Lock className="w-5 h-5" />,
      action: () => console.log('Navigate to password change'),
    },
    {
      id: 'devices',
      title: 'Trusted Devices',
      description: 'Manage devices with access',
      icon: <Smartphone className="w-5 h-5" />,
      action: () => console.log('Navigate to devices'),
    },
  ];

  return (
    <main className="min-h-screen bg-surface flex flex-col items-center p-6 sm:p-8">
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-between mb-8">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-surface-soft rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="text-ink w-6 h-6" />
        </button>
        <h1 className="text-ink font-bold text-xl text-center flex-1">
          Privacy & Security
        </h1>
        <div className="w-10" />
      </div>

      <div className="w-full max-w-md space-y-6">
        {/* Security Status Card */}
        <div className="bg-brand-violet rounded-3xl p-6 text-white shadow-lg shadow-brand-violet/20 flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-2xl">
            <ShieldCheck className="w-8 h-8 text-brand-lime" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Account Protected</h2>
            <p className="text-white/80 text-sm">
              Your security settings are up to date, Jennifer.
            </p>
          </div>
        </div>

        {/* Biometrics Section */}
        <section className="space-y-3">
          <h3 className="text-ink/40 font-bold text-xs uppercase tracking-widest px-2">
            Access Control
          </h3>
          <div className="bg-white rounded-3xl p-2 border border-surface-soft shadow-sm">
            <div className="flex items-center justify-between p-4 border-b border-surface-soft/50">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-surface rounded-xl">
                  <Fingerprint className="text-brand-violet w-5 h-5" />
                </div>
                <div>
                  <p className="text-ink font-bold text-sm">Biometric Login</p>
                  <p className="text-ink/50 text-xs">
                    Use Face ID or Fingerprint
                  </p>
                </div>
              </div>
              <button
                onClick={() => setBiometricsEnabled(!biometricsEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${biometricsEnabled ? 'bg-brand-lime' : 'bg-surface-soft'}`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${biometricsEnabled ? 'left-7' : 'left-1'}`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-surface rounded-xl">
                  <ShieldCheck className="text-brand-violet w-5 h-5" />
                </div>
                <div>
                  <p className="text-ink font-bold text-sm">Two-Factor Auth</p>
                  <p className="text-ink/50 text-xs">Extra layer of security</p>
                </div>
              </div>
              <button
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${twoFactorEnabled ? 'bg-brand-lime' : 'bg-surface-soft'}`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${twoFactorEnabled ? 'left-7' : 'left-1'}`}
                />
              </button>
            </div>
          </div>
        </section>

        {/* General Security Section */}
        <section className="space-y-3">
          <h3 className="text-ink/40 font-bold text-xs uppercase tracking-widest px-2">
            Privacy Settings
          </h3>
          <div className="bg-white rounded-3xl p-2 border border-surface-soft shadow-sm">
            {securityItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between p-4 hover:bg-surface rounded-2xl transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-surface rounded-xl group-hover:bg-white transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-ink font-bold text-sm">{item.title}</p>
                    <p className="text-ink/50 text-xs">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-ink/20" />
              </button>
            ))}
          </div>
        </section>

        {/* Data Usage Section */}
        <div className="bg-surface-soft rounded-3xl p-6 border border-brand-violet/10">
          <div className="flex items-center gap-3 mb-2">
            <Eye className="w-5 h-5 text-brand-violet" />
            <h4 className="font-bold text-ink text-sm">Data Transparency</h4>
          </div>
          <p className="text-ink/60 text-xs leading-relaxed">
            MiSencillo uses end-to-end encryption. Your financial data is never
            shared with third parties without your explicit consent.
          </p>
          <button className="text-brand-violet text-xs font-bold mt-4 underline decoration-2 underline-offset-4">
            Read Full Privacy Policy
          </button>
        </div>
      </div>
    </main>
  );
}
