import { StripePricingTableEmbed } from '@/app/components/pricing'

export function PricingPageContent() {
  return (
    <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col items-center justify-center py-2 md:py-4">
      <div className="pricing-stripe-embed-frame flex min-h-0 min-w-0 w-[80%] max-w-full items-center justify-center max-sm:h-auto max-sm:min-h-0 sm:h-[80%]">
        <StripePricingTableEmbed />
      </div>
    </div>
  )
}
