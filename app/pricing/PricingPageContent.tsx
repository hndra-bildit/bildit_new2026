import { StripePricingTableEmbed } from '@/app/components/pricing'

export function PricingPageContent() {
  return (
    <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col items-center justify-center py-2 md:py-4">
      <div className="pricing-stripe-embed-frame flex h-[80%] w-[80%] min-h-0 min-w-0 max-w-full items-center justify-center">
        <StripePricingTableEmbed />
      </div>
    </div>
  )
}
