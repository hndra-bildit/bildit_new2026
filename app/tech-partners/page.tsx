import { HomeIntegrations } from '@/app/components/home/HomeIntegrations'
import { SiteHeroTopSpacer } from '@/app/components/site-header/SiteHeroTopSpacer'
import { TechPartnersSections } from '@/app/components/tech-partners/TechPartnersSections'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Solutions integrators, partner network, and platform integrations that extend BILDIT for modern commerce teams.'
}

export default function TechPartnersPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-neutral-900">
      <main className="w-full bg-white">
        <SiteHeroTopSpacer />
        <SlotPlaceholder slotId="tech-partners-content">
          <TechPartnersSections />
          <HomeIntegrations />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
