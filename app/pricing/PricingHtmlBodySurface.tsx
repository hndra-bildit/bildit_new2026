'use client'

import { useLayoutEffect } from 'react'

/** Matches pricing sections (`#f5f7fa`) so the strip behind the fixed mega menu isn’t default white. */
const PRICING_SURFACE = '#f5f7fa'

export function PricingHtmlBodySurface({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prevHtml = html.style.backgroundColor
    const prevBody = body.style.backgroundColor
    html.style.backgroundColor = PRICING_SURFACE
    body.style.backgroundColor = PRICING_SURFACE
    return () => {
      html.style.backgroundColor = prevHtml
      body.style.backgroundColor = prevBody
    }
  }, [])

  return <>{children}</>
}
