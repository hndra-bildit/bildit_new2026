import { StripePricingTableEmbed } from '@/app/components/pricing'
import { PRICING_PAGE_SURFACE_CLASS } from '@/app/lib/pricing-home-insets'
import { cn } from '@/utils/cn'

export function PricingPageContent() {
  return (
    <div
      className={cn(
        'mx-auto flex min-h-0 w-full flex-1 flex-col items-stretch justify-center py-2 md:py-6',
        PRICING_PAGE_SURFACE_CLASS
      )}
    >
      <div className="pricing-stripe-embed-frame flex min-h-0 min-w-0 w-full items-stretch justify-center max-sm:min-h-0">
        <StripePricingTableEmbed />
      </div>
    </div>
  )
}
