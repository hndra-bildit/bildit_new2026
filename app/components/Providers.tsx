'use client'

import type { ReactNode } from 'react'
import cmsDependencies from '@/cmsDependencies'
import type { Banner } from '@/services/bildit.d'
import { BilditProvider } from '@bildit-platform/nextjs'

type ProvidersProps = { children: ReactNode; banners: Banner[] }

export default function Providers({ children, banners }: ProvidersProps) {
  return (
    /* prettier-ignore */
    <BilditProvider
      extraDependenciesConfig={cmsDependencies}
      {...{ banners }}
    >
      {children}
    </BilditProvider>
  )
}
