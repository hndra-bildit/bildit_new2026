'use client'

import { useLayoutEffect } from 'react'
import { PRICING_PAGE_SURFACE } from '@/app/lib/pricing-home-insets'

export function PricingHtmlBodySurface({ children }: { children: React.ReactNode }) {
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
