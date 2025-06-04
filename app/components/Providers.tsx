'use client'
import React, { Suspense } from 'react'
import { BilditProvider } from '@bildit-platform/nextjs'
import type { BannerType } from '@bildit-platform/nextjs'

interface ProvidersProps {
  children: React.ReactNode;
  banners: BannerType[];
}

const Providers: React.FC<ProvidersProps> = ({ children, banners }) => {
  return (
    <Suspense>
      <BilditProvider
        banners={banners}
      >
        {children}
      </BilditProvider>
    </Suspense>
  );
};

export default Providers;