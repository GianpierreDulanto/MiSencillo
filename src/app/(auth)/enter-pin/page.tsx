'use client';

import { Suspense } from 'react';
import { EnterPinContent } from './enter-pin-content';

export default function EnterPinPage() {
  return (
    <Suspense fallback={null}>
      <EnterPinContent />
    </Suspense>
  );
}
