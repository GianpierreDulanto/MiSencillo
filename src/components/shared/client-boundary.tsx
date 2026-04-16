'use client';

import React from 'react';

export function ClientBoundary({ children }: { children: React.ReactNode }) {
  if (typeof window === 'undefined') {
    return null;
  }

  return <>{children}</>;
}
