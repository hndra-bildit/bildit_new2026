'use client'

import type { ReactNode } from 'react'
import Header from '@/app/components/Header'
import { FloatingSiteModeToggle } from '@/app/components/site-header/FloatingSiteModeToggle'
import { usePathname } from 'next/navigation'

export function LayoutChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/'
  const normalizedPath = pathname.replace(/\/$/, '') || '/'
  /** Fixed header clears via page content padding (home/marketers heroes, engineering `main`). */
  const usesHomeHeroLayout =
    normalizedPath === '/' ||
    normalizedPath === '/solutions-for-marketers' ||
    normalizedPath === '/solutions-for-engineering' ||
    normalizedPath === '/visual-experience-engine'

  return (
    <>
      <Header />
      <div className={usesHomeHeroLayout ? undefined : 'pt-[calc(5.5rem+10px)] sm:pt-[5.5rem]'}>{children}</div>
      <FloatingSiteModeToggle />
    </>
  )
}
