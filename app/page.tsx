import { Demo } from '@/app/components/Demo'
import { HomeDesignedForEcommerce } from '@/app/components/home/HomeDesignedForEcommerce'
import { HomeEarlyAccess } from '@/app/components/home/HomeEarlyAccess'
import { HomeEverythingYouNeed } from '@/app/components/home/HomeEverythingYouNeed'
import { HomeFaq } from '@/app/components/home/HomeFaq'
import { HomeHero } from '@/app/components/home/HomeHero'
import { HomeIntegrations } from '@/app/components/home/HomeIntegrations'
import { HomePostFaqCta } from '@/app/components/home/HomePostFaqCta'
import { HomeProblemSolution } from '@/app/components/home/HomeProblemSolution'
import { HomeSpeedWithoutCompromise } from '@/app/components/home/HomeSpeedWithoutCompromise'
import { HomeWorkflowShowcase } from '@/app/components/home/HomeWorkflowShowcase'
import { StorefrontLeadCta } from '@/app/components/storefront/StorefrontLeadCta'
import { homeFaqPageJsonLd } from '@/app/lib/home-faq-data'
import { SlotPlaceholder, StylePlaceholder } from '@bildit-platform/nextjs'

const homeFaqStructuredData = homeFaqPageJsonLd()

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip text-neutral-900">
      <StylePlaceholder slotId="home-styles" target="head" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqStructuredData)
        }}
      />
      <SlotPlaceholder slotId="home-hero">
        <HomeHero />
      </SlotPlaceholder>
      <main className="w-full bg-white">
        <SlotPlaceholder slotId="home-slot-1">
          <HomeDesignedForEcommerce />
        </SlotPlaceholder>
        <div className="mx-auto max-w-[1512px] px-3 pt-10 sm:px-4">
          <SlotPlaceholder slotId="home-slot-2">
            <HomeWorkflowShowcase />
          </SlotPlaceholder>
        </div>
        <SlotPlaceholder slotId="home-slot-3">
          <HomeEverythingYouNeed />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="home-slot-4">
          <HomeSpeedWithoutCompromise />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="home-demo">
          <Demo />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="home-slot-5">
          <HomeEarlyAccess />
        </SlotPlaceholder>
        <SlotPlaceholder slotId="home-slot-6">
          <HomeProblemSolution />
        </SlotPlaceholder>
        <div className="mx-auto max-w-[1512px] px-3 pb-10 sm:px-4 sm:pb-12">
          <SlotPlaceholder slotId="home-faq">
            <HomeFaq />
          </SlotPlaceholder>
        </div>
        <div className="w-full px-0 pb-16 sm:px-4">
          <SlotPlaceholder slotId="home-post-faq-cta">
            <HomePostFaqCta />
          </SlotPlaceholder>
        </div>
        <div className="w-full bg-white">
          <SlotPlaceholder slotId="home-storefront-lead-cta">
            <StorefrontLeadCta leadSource="home" />
          </SlotPlaceholder>
        </div>
        <SlotPlaceholder slotId="home-integrations">
          <HomeIntegrations />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
