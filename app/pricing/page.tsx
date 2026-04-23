import { PricingPageFaqSection, PricingPageHero, PricingPlanComparisonSection } from '@/app/components/pricing'
import { PRICING_HOME_HEADER_INSET_CLASS, PRICING_PAGE_SURFACE_CLASS } from '@/app/lib/pricing-home-insets'
import { PricingPageContent } from '@/app/pricing/PricingPageContent'
import { cn } from '@/utils/cn'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Compare BILDIT plans, explore features, and talk to sales about the right fit for your team.'
}

export default function PricingPage() {
  return (
    <div className={cn('min-h-screen text-neutral-900', PRICING_PAGE_SURFACE_CLASS)}>
      <SlotPlaceholder slotId="pricing-title">
        <PricingPageHero />
      </SlotPlaceholder>

      <section
        data-header-surface="light"
        className={cn(
          'relative m-0 flex min-h-0 w-full flex-col overflow-hidden',
          PRICING_PAGE_SURFACE_CLASS,
          PRICING_HOME_HEADER_INSET_CLASS
        )}
      >
        <div className="relative z-10 mx-auto flex w-full min-h-0 max-w-[1260px] flex-1 flex-col overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col items-stretch overflow-x-hidden pb-8 pt-0 text-center sm:pb-12">
            <div className="flex min-h-0 min-w-0 flex-1 flex-col">
              <SlotPlaceholder slotId="pricing-content">
                <PricingPageContent />
              </SlotPlaceholder>
            </div>
          </div>
        </div>
      </section>

      <PricingPlanComparisonSection />
      <PricingPageFaqSection />
    </div>
  )
}
