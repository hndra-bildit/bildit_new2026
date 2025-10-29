'use client'

import React, { Suspense } from 'react'
import type { Banner } from '@/services/bildit.d'
import cmsDependencies from '@/utils/cmsDependencies'
import { BilditProvider } from '@bildit-platform/nextjs'

interface ProvidersProps {
  children: React.ReactNode
  banners: Banner[]
}

const Providers: React.FC<ProvidersProps> = ({ children, banners }) => {
  return (
    <Suspense>
      <BilditProvider banners={banners} extraDependenciesConfig={cmsDependencies}>
        {children}
      </BilditProvider>
    </Suspense>
  )
}

export default Providers
