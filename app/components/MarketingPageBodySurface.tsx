'use client'

import { PRICING_PAGE_SURFACE } from '@/app/lib/pricing-home-insets'
import { useLayoutEffect } from 'react'

/**
 * Sets html/body to the same light gray as `/pricing` (`PRICING_PAGE_SURFACE`) for blog, webinars, and tech-partners
 * so overscroll matches the page shell.
 */
export function MarketingPageBodySurface({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prevHtml = html.style.backgroundColor
    const prevBody = body.style.backgroundColor
    html.style.backgroundColor = PRICING_PAGE_SURFACE
    body.style.backgroundColor = PRICING_PAGE_SURFACE
    return () => {
      html.style.backgroundColor = prevHtml
      body.style.backgroundColor = prevBody
    }
  }, [])

  return <>{children}</>
}
