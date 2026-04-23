import {
  homeSectionEyebrowClassName,
  homeSectionSubtitleClassName,
  homeSectionTitleClassName
} from '@/app/components/home/home-section-typography'
import { SiteHeroTopSpacer } from '@/app/components/site-header/SiteHeroTopSpacer'
import { PRICING_PAGE_SURFACE_CLASS } from '@/app/lib/pricing-home-insets'
import { cn } from '@/utils/cn'

const HERO_ID = 'pricing-page-hero'

/**
 * Page header aligned with `/blog/` (Insights) — centered section typography on the pricing page surface.
 */
export function PricingPageHero() {
  const headingId = `${HERO_ID}-heading`

  return (
    <section
      id={HERO_ID}
      data-header-surface="light"
      className={cn('relative overflow-hidden', PRICING_PAGE_SURFACE_CLASS)}
      aria-labelledby={headingId}
    >
      <SiteHeroTopSpacer />
      <div className="relative mx-auto flex max-w-[1280px] flex-col px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-[116px] lg:py-24">
        <header className="flex flex-col items-center gap-4 text-center md:gap-5">
          <p className={cn(homeSectionEyebrowClassName, 'text-neutral-600')}>Plans</p>
          <h1 id={headingId} className={cn('text-balance', homeSectionTitleClassName)}>
            Pricing
          </h1>
          <p className={cn(homeSectionSubtitleClassName, 'mx-auto text-balance text-center')}>
            Compare tiers and features, then choose the plan that fits your team.
          </p>
        </header>
      </div>
    </section>
  )
}
