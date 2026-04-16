'use client'

import type { ReactNode } from 'react'
import Header from '@/app/components/Header'
import { FloatingSiteModeToggle } from '@/app/components/site-header/FloatingSiteModeToggle'
import { usePathname } from 'next/navigation'

export function LayoutChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/'
  const isHome = pathname.replace(/\/$/, '') === ''

  return (
    <>
      <Header />
      <div className={isHome ? undefined : 'pt-[5.5rem]'}>{children}</div>
      <FloatingSiteModeToggle />
    </>
  )
}
