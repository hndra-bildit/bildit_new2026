import { homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import Image from 'next/image'

/** Figma two-column block (4729:27443): scheduling + integrations. */
export function StorefrontSchedulingIntegrations({ className }: { className?: string }) {
  return (
    <section className={cn('bg-white pb-16 pt-8 md:pb-24 md:pt-12', className)}>
      <div className="mx-auto flex max-w-[1512px] flex-col gap-10 px-3 sm:px-4 lg:flex-row lg:gap-10 lg:px-[116px]">
        <article className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm">
          <div className="relative isolate min-h-[260px] flex-1 overflow-hidden bg-gradient-to-br from-[rgba(237,30,121,0.07)] via-white to-white px-6 py-8 md:min-h-[320px] md:px-8 md:py-10">
            <div className="pointer-events-none absolute inset-0">
              <Image
                src="/images/storefront/scheduling-card.jpg"
                alt=""
                fill
                className="object-cover object-center opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(250deg, rgba(237,30,121,0.07) 0%, rgba(255,72,152,0.07) 45%, rgba(166,0,73,0.07) 100%)'
                }}
              />
            </div>
          </div>
          <div className="border-t border-black/[0.06] px-8 py-8 md:px-10">
            <h3 className={cn(homeSectionTitleClassName, 'text-2xl md:text-2xl')}>Sophisticated scheduling</h3>
            <p className="mt-3 font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-neutral-600">
              Products, promotions, and content released on schedule across mobile and web.
            </p>
          </div>
        </article>

        <article className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm">
          <div className="relative min-h-[260px] flex-1 overflow-hidden bg-gradient-to-br from-[#f0e8f8] to-[#e8f0f8] md:min-h-[320px]">
            <Image
              src="/images/storefront/integrations-card.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="border-t border-black/[0.06] px-8 py-8 md:px-10">
            <h3 className={cn(homeSectionTitleClassName, 'text-2xl md:text-2xl')}>Best-in-class integrations</h3>
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
