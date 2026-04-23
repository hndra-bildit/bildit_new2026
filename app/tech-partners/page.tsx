import { HomeIntegrations } from '@/app/components/home/HomeIntegrations'
import { SiteHeroTopSpacer } from '@/app/components/site-header/SiteHeroTopSpacer'
import { TechPartnersSections } from '@/app/components/tech-partners/TechPartnersSections'
import { PRICING_PAGE_SURFACE_CLASS } from '@/app/lib/pricing-home-insets'
import { cn } from '@/utils/cn'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Solutions integrators, partner network, and platform integrations that extend BILDIT for modern commerce teams.'
}

export default function TechPartnersPage() {
  return (
    <div className={cn('min-h-screen overflow-x-clip text-neutral-900', PRICING_PAGE_SURFACE_CLASS)}>
      <main className={cn('w-full', PRICING_PAGE_SURFACE_CLASS)}>
        <SiteHeroTopSpacer />
        <SlotPlaceholder slotId="tech-partners-content">
          <TechPartnersSections />
          <HomeIntegrations className={PRICING_PAGE_SURFACE_CLASS} />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
