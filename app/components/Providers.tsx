'use client'
import React, { Suspense } from 'react'
import { BilditProvider } from '@bildit-platform/nextjs'
import type { BannerType } from '@bildit-platform/nextjs'
import Image from 'next/image'
import Link from 'next/link'

interface ProvidersProps {
  children: React.ReactNode;
  banners: BannerType[];
}

const Providers: React.FC<ProvidersProps> = ({ children, banners }) => {
  return (
    <Suspense>
      <BilditProvider
        banners={banners}
        extraDependenciesConfig={{
          Link: { module: Link },
          Image: { module: Image }
        }}
      >
        {children}
      </BilditProvider>
    </Suspense>
  );
};

export default Providers;