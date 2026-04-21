import { PricingPageFaqSection, PricingPlanComparisonSection } from '@/app/components/pricing'
import { PricingPageContent } from '@/app/pricing/PricingPageContent'
import { cn } from '@/utils/cn'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | BILDIT',
  description: 'Compare BILDIT plans, explore features, and talk to sales about the right fit for your team.'
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] text-neutral-900">
      <section
        data-header-surface="light"
        className={cn(
          'relative m-0 flex h-svh max-h-svh w-full flex-col overflow-hidden rounded-none bg-white',
          'pt-[calc(70px+30px+0.75rem)]',
          'sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]'
        )}
      >
        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-stretch gap-8 overflow-y-auto px-4 pb-12 pt-2 text-center sm:px-10 sm:pb-16 sm:pt-4 md:gap-10">
          <SlotPlaceholder slotId="pricing-title" />
          <SlotPlaceholder slotId="pricing-content">
            <PricingPageContent />
          </SlotPlaceholder>
        </div>
      </section>

      <PricingPlanComparisonSection />
      <PricingPageFaqSection />
    </div>
  )
}
