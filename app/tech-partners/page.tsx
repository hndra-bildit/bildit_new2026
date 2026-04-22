import { HomeIntegrations } from '@/app/components/home/HomeIntegrations'
import { TechPartnersHero } from '@/app/components/tech-partners/TechPartnersHero'
import { TechPartnersSections } from '@/app/components/tech-partners/TechPartnersSections'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Solutions integrators, partner network, and platform integrations that extend BILDIT for modern commerce teams.'
}

export default function TechPartnersPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#fafafa] text-neutral-900">
      <SlotPlaceholder slotId="tech-partners-title">
        <TechPartnersHero />
      </SlotPlaceholder>
      <main className="w-full bg-white">
        <SlotPlaceholder slotId="tech-partners-content">
          <TechPartnersSections />
          <HomeIntegrations />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
