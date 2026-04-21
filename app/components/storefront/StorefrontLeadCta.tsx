'use client'

import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

/** Figma Section - CTA (4729:27959). Primary CTA links to self-service signup. */
export function StorefrontLeadCta({ className }: { className?: string }) {
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

        <form className="flex w-full max-w-[480px] flex-col gap-5" noValidate onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="sr-only" htmlFor="storefront-cta-name">
              Full name
            </label>
            <input
              id="storefront-cta-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Full name"
              className="rounded-xl border-[1.5px] border-[#d3d6db] bg-white px-[18px] py-3.5 font-[family-name:var(--font-uncut-sans)] text-base text-neutral-900 placeholder:text-[#757575]"
            />
            <label className="sr-only" htmlFor="storefront-cta-email">
              Work email
            </label>
            <input
              id="storefront-cta-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Work email"
              className="rounded-xl border-[1.5px] border-[#d3d6db] bg-white px-[18px] py-3.5 font-[family-name:var(--font-uncut-sans)] text-base text-neutral-900 placeholder:text-[#757575]"
            />
          </div>
          <Link
            href={BILDIT_SIGNUP_URL}
            className="font-[family-name:var(--font-uncut-sans)] flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c850f0] to-[#e84590] py-3 text-base font-semibold text-white no-underline transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            Start Free Trial
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>
          <p className="text-center font-[family-name:var(--font-uncut-sans)] text-[13px] text-[#aaa]">
            No cost. No risk. We don&apos;t win unless you ship.
          </p>
        </form>
      </div>
    </section>
  )
}
