'use client'

import type { ReactNode } from 'react'
import Header from '@/app/components/Header'
import { PageSectionReveal } from '@/app/components/PageSectionReveal'
import { FloatingSiteModeToggle } from '@/app/components/site-header/FloatingSiteModeToggle'
import { isLandingPagePath } from '@/app/lib/landing-pages'
import { usePathname } from 'next/navigation'

export function LayoutChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || '/'
  const normalizedPath = pathname.replace(/\/$/, '') || '/'
  const isLandingPage = isLandingPagePath(normalizedPath)
  const showSiteModeToggle =
    normalizedPath === '/solutions-for-marketers' || normalizedPath === '/solutions-for-engineering'
  /** Fixed header clears via page content padding (home/marketers heroes, engineering `main`). */
  const usesHomeHeroLayout =
    normalizedPath === '/' ||
    normalizedPath === '/pricing' ||
    normalizedPath === '/solutions-for-marketers' ||
    normalizedPath === '/solutions-for-engineering' ||
    normalizedPath === '/visual-experience-engine' ||
    normalizedPath === '/visual-experience-layer-visual-editor-beautiful-content-scheduling' ||
    normalizedPath === '/mobile-app-storefront' ||
    normalizedPath === '/tech-partners' ||
    normalizedPath === '/integration-partners' ||
    normalizedPath === '/early-access-program' ||
    normalizedPath === '/blog' ||
    normalizedPath === '/webinars'

  return (
    <>
      {isLandingPage ? null : <Header />}
      <div className={usesHomeHeroLayout || isLandingPage ? undefined : 'pt-[calc(5.5rem+10px)] sm:pt-[5.5rem]'}>
        <PageSectionReveal key={normalizedPath}>{children}</PageSectionReveal>
      </div>
      {isLandingPage || !showSiteModeToggle ? null : <FloatingSiteModeToggle />}
    </>
  )
}
