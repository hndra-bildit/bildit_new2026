import {
  StorefrontEverythingYouNeed,
  StorefrontHero,
  StorefrontIntroBand,
  StorefrontLeadCta,
  StorefrontPlatformStrip,
  StorefrontSchedulingIntegrations,
  StorefrontTestimonials,
  StorefrontTransforming
} from '@/app/components/storefront'
import { SlotPlaceholder, StylePlaceholder } from '@bildit-platform/nextjs'

export default function MobileAppStorefrontPage() {
  return (
    <div className="min-h-screen overflow-x-clip text-neutral-900">
      <StylePlaceholder slotId="storefront-styles" target="head" />
      <SlotPlaceholder slotId="storefront-hero">
        <StorefrontHero />
      </SlotPlaceholder>
      <main className="w-full bg-white">
        <SlotPlaceholder slotId="storefront-slot-1">
          <StorefrontEverythingYouNeed />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="storefront-slot-2">
          <StorefrontIntroBand />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="storefront-slot-3">
          <StorefrontSchedulingIntegrations />
        </SlotPlaceholder>
        <div className="mx-auto max-w-[1512px] px-0 sm:px-4">
          <SlotPlaceholder slotId="storefront-slot-4">
            <StorefrontTransforming />
          </SlotPlaceholder>
        </div>
        <SlotPlaceholder slotId="storefront-slot-5">
          <StorefrontTestimonials />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="storefront-slot-6">
          <StorefrontLeadCta />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="storefront-integrations">
          <StorefrontPlatformStrip />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
