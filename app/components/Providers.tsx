'use client'

import React, { Suspense } from 'react'
import type { Banner } from '@/services/bildit.d'
import { BilditProvider } from '@bildit-platform/nextjs'

interface ProvidersProps {
  children: React.ReactNode
  banners: Banner[]
}

/** Loaded async so the root layout client chunk stays small (avoids ChunkLoadError timeouts in dev). */
const cmsDependenciesModulePromise = import('@/cmsDependencies')

function BilditProvidersWithDeps({ children, banners }: ProvidersProps) {
  const mod = React.use(cmsDependenciesModulePromise)
  return (
    <BilditProvider banners={banners} extraDependenciesConfig={mod.default}>
      {children}
    </BilditProvider>
  )
}

const Providers: React.FC<ProvidersProps> = ({ children, banners }) => {
  return (
    <Suspense fallback={children}>
      <BilditProvidersWithDeps banners={banners}>{children}</BilditProvidersWithDeps>
    </Suspense>
  )
}

export default Providers
