'use client';

import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/i18n/context';
import { useLanguageSync } from '@/lib/i18n/hooks';
import { Language } from '@/lib/i18n/translations';

export function LanguageSelector() {
  const { language, t } = useLanguage();
  const { setLanguage } = useLanguageSync();

  return (
    <div className="w-32">
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as Language)}
      >
        <SelectTrigger className="h-10 border-black/10 bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="es">{t.spanish}</SelectItem>
          <SelectItem value="en">{t.english}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
