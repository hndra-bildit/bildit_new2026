'use client'

import Script from 'next/script'

const SCRIPT_SRC = 'https://js.stripe.com/v3/pricing-table.js'

/** Default pricing table from Stripe Dashboard; override with NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID if needed. */
const DEFAULT_PRICING_TABLE_ID = 'prctbl_1TDWRrC1Of7xK8MSBvbOL8tT'

export function StripePricingTableEmbed() {
  const pricingTableId = process.env.NEXT_PUBLIC_STRIPE_PRICING_TABLE_ID ?? DEFAULT_PRICING_TABLE_ID
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  if (!publishableKey) {
    return (
      <div className="rounded-2xl border border-dashed border-black/10 bg-neutral-50 px-6 py-16 text-center">
        <p className="font-[family-name:var(--font-inter)] text-sm leading-relaxed text-neutral-600 md:text-base">
          Set{' '}
          <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to
          your Stripe publishable key to show the pricing table.
        </p>
      </div>
    )
  }

  return (
    <div className="stripe-pricing-table stripe-pricing-table-host w-full">
      <Script src={SCRIPT_SRC} strategy="lazyOnload" />
      <stripe-pricing-table pricing-table-id={pricingTableId} publishable-key={publishableKey} />
    </div>
  )
}
