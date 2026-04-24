import { homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { MOBILE_APP_STOREFRONT_IMAGES } from '@/app/lib/storefront-remote-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

/** Figma two-column block (4729:27443): scheduling + integrations. */
export function StorefrontSchedulingIntegrations({ className }: { className?: string }) {
  return (
    <section className={cn('bg-white pb-16 pt-8 md:pb-24 md:pt-12', className)}>
      <div className="mx-auto flex max-w-[1512px] flex-col gap-10 px-3 sm:px-4 min-[1000px]:flex-row min-[1000px]:gap-10 min-[1000px]:px-[116px]">
        <article
          id="storefront-feature-scheduling"
          className="scroll-mt-24 flex w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm min-[1000px]:flex-1"
        >
          {/* Explicit height + shrink-0: flex-1 + min-h + fill images can collapse to 0 in WebKit column flex */}
          <div className="relative h-[260px] shrink-0 overflow-hidden bg-[#f5f7fa] md:h-[320px]">
            <Image
              src={MOBILE_APP_STOREFRONT_IMAGES.promotionalScheduling}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 999px) 100vw, 50vw"
            />
          </div>
          <div className="border-t border-black/[0.06] px-8 py-8 md:px-10">
            <h3 className={cn(homeSectionTitleClassName, 'text-2xl md:text-2xl')}>Sophisticated Scheduling</h3>
            <p className="mt-3 font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-neutral-600">
              Products, promotions, and content released on schedule across mobile and web.
            </p>
          </div>
        </article>

        <article
          id="storefront-feature-integrations"
          className="scroll-mt-24 flex w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm min-[1000px]:flex-1"
        >
          <div className="relative h-[260px] shrink-0 overflow-hidden bg-[#f5f7fa] md:h-[320px]">
            <Image
              src={MOBILE_APP_STOREFRONT_IMAGES.integrations}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 999px) 100vw, 50vw"
            />
          </div>
          <div className="border-t border-black/[0.06] px-8 py-8 md:px-10">
            <h3 className={cn(homeSectionTitleClassName, 'text-2xl md:text-2xl')}>Best-in-Class Integrations</h3>
            <p className="mt-3 font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-neutral-600">
              Connect to the platforms you already use — Salesforce, Shopify Plus, SAP, Stripe, and more. One
              integration, full control.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
