import { BuildPeopleProductsHeading } from '@/app/components/BuildPeopleProductsHeading'
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
import { homeFaqPageJsonLd } from '@/app/lib/home-faq-data'

const homeFaqStructuredData = homeFaqPageJsonLd()

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeFaqStructuredData)
        }}
      />
      <HomeHero />
      <main className="w-full bg-white">
        <HomeDesignedForEcommerce />
        <div className="mx-auto max-w-[1512px] px-3 pt-10 sm:px-4">
          <HomeWorkflowShowcase />
        </div>
        <HomeEverythingYouNeed />
        <HomeSpeedWithoutCompromise />
        <Demo />
        <HomeEarlyAccess />
        <HomeProblemSolution />
        <div className="mx-auto max-w-[1512px] px-3 pb-10 sm:px-4 sm:pb-12">
          <div className="mx-auto max-w-[1260px] px-6 pt-10 sm:pt-12 pb-6 md:pb-8">
            <BuildPeopleProductsHeading />
          </div>
          <HomeFaq />
        </div>
        <div className="w-full px-3 pb-16 sm:px-4">
          <HomePostFaqCta />
        </div>
        <HomeIntegrations />
      </main>
    </div>
  )
}
