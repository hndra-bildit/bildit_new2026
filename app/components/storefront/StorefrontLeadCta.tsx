'use client'

import { MarketersSolutionsCtaForm } from '@/app/components/solutions/MarketersSolutionsCtaForm'
import { cn } from '@/utils/cn'

type StorefrontLeadCtaProps = {
  className?: string
  /** Distinct lead source for analytics (home vs mobile-app-storefront). */
  leadSource?: 'home' | 'mobile-app-storefront'
}

/**
 * Figma Section - CTA (4729:27959). Headline + shared marketing lead form
 * (same fields and submit behavior as marketers / tech-partners CTAs).
 */
export function StorefrontLeadCta({ className, leadSource = 'mobile-app-storefront' }: StorefrontLeadCtaProps) {
  return (
    <section
      id="storefront-cta"
      className={cn('relative overflow-hidden px-3 py-16 sm:px-4 md:py-24', className)}
      aria-labelledby="storefront-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -left-20 -top-24 size-[580px] rounded-full opacity-20 blur-[36px]"
          style={{
            background: 'radial-gradient(circle, rgba(200,80,240,0.45) 0%, rgba(200,80,240,0) 70%)'
          }}
        />
        <div
          className="absolute -bottom-20 -right-16 size-[480px] rounded-full opacity-15 blur-[36px]"
          style={{
            background: 'radial-gradient(circle, rgba(237,30,121,0.4) 0%, rgba(237,30,121,0) 70%)'
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[700px] flex-col items-center gap-10 px-2 text-center md:gap-12">
        <div className="flex flex-col gap-5">
          <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.08em] text-neutral-900">
            Get started
          </p>
          <h2
            id="storefront-cta-heading"
            className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl md:leading-[72px]"
          >
            <span className="block">Ready to launch</span>
            <span
              className="block bg-gradient-to-r from-[#e84590] to-[#c850f0] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              your storefront?
            </span>
          </h2>
          <p className="font-[family-name:var(--font-uncut-sans)] text-lg text-[#595959]">
            We work with a limited number of teams each month. Secure your spot today.
          </p>
        </div>

        <MarketersSolutionsCtaForm
          source={leadSource}
          submitLabel="Start Free Trial"
          className="mt-0 w-full max-w-[480px]"
        />
      </div>
    </section>
  )
}
