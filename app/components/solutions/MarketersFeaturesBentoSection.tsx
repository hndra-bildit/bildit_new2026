import { NoLimitationsFeatureCarousel } from '@/app/components/home/NoLimitationsFeatureCarousel'
import {
  homeSectionEyebrowClassName,
  homeSectionSubtitleClassName,
  homeSectionTitleClassName
} from '@/app/components/home/home-section-typography'
import { MARKETERS_BENTO_INTEGRATION_CELLS } from '@/app/lib/marketers-features-bento-integrations'
import { marketersSolutionsNoLimitationsCardImages } from '@/app/lib/marketers-solutions-no-limitations-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

const sectionPaddingX = 'px-6 sm:px-8 md:px-10 lg:px-[116px]'

/**
 * Marketers-only “Section - FEATURES BENTO” from Figma 4978:15763: No Limitations carousel (art: 5082:32108),
 * “Built to Sell.” block, and integrations wide panel (4978:15883).
 */
export function MarketersFeaturesBentoSection({ className }: { className?: string }) {
  return (
    <section className={cn('home-scheme-light relative w-full overflow-x-hidden bg-white text-neutral-900', className)}>
      <div className="relative flex flex-col gap-12 py-16 md:gap-14 md:py-20 lg:py-24">
        <header
          className={cn('mx-auto flex w-full max-w-[768px] flex-col items-center gap-4 text-center', sectionPaddingX)}
        >
          <p className={cn(homeSectionEyebrowClassName, 'text-neutral-900')}>Visual Experience Engine</p>
          <h2 className={cn('text-balance', homeSectionTitleClassName)}>No Limitations.</h2>
          <p className={cn(homeSectionSubtitleClassName, 'text-balance text-center')}>
            Never compromise: get every tool your storefront needs; designed to move as fast as your ideas.
          </p>
        </header>

        <NoLimitationsFeatureCarousel
          cardImages={marketersSolutionsNoLimitationsCardImages}
          cardTitleOverrides={{ 'cross-channel': 'Cross Channel Content' }}
        />

        <div
          className={cn('mx-auto flex w-full max-w-[1048px] flex-col items-center gap-4 text-center', sectionPaddingX)}
        >
          <p className={cn(homeSectionEyebrowClassName, 'text-neutral-900')}>For Ecommerce</p>
          <h2 className={cn('text-balance', homeSectionTitleClassName)}>Built to Sell.</h2>
        </div>

        <div className={cn('mx-auto w-full max-w-[1048px]', sectionPaddingX)}>
          <div className="overflow-hidden rounded-[20px] border border-black/[0.08] bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* flex-1 only in row layout; on mobile flex-1 can squeeze this panel’s height in WebKit */}
              <div className="flex w-full min-w-0 flex-none items-center justify-center bg-[#f5f7fa] px-4 py-8 sm:px-6 sm:py-10 lg:flex-1">
                <div className="grid w-full max-w-[599px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {MARKETERS_BENTO_INTEGRATION_CELLS.map((cell) => (
                    <div
                      key={cell.label}
                      className="flex h-[84px] flex-col items-center justify-between rounded-[14px] border border-black/[0.08] bg-white px-3 py-[15px]"
                    >
                      <div className={cn('relative flex shrink-0 items-center justify-center', cell.logoClassName)}>
                        <Image src={cell.src} alt="" fill sizes="64px" className="object-contain object-center" />
                      </div>
                      <p className="font-[family-name:var(--font-uncut-sans)] text-center text-xs font-bold text-[#737373]">
                        {cell.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-col justify-center border-t border-black/[0.08] bg-white px-8 py-10 lg:w-[320px] lg:max-w-[320px] lg:shrink-0 lg:border-l lg:border-t-0 lg:px-10">
                <h3 className="font-[family-name:var(--font-uncut-sans)] text-xl font-bold leading-snug text-[#171717]">
                  Best-in-class integrations
                </h3>
                <p className="mt-3 font-[family-name:var(--font-uncut-sans)] text-[15px] leading-6 text-[#595959]">
                  Connect to the platforms you already use — Salesforce, Shopify Plus, SAP, Stripe, and more. One
                  integration, full control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
