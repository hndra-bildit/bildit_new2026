import { HomeWorkflowShowcase } from '@/app/components/home/HomeWorkflowShowcase'
import { VeeAdvantagesSection } from '@/app/components/visual-experience-engine/VeeAdvantagesSection'
import { VeeEarlyAccessSection } from '@/app/components/visual-experience-engine/VeeEarlyAccessSection'
import { VeeFaqSection } from '@/app/components/visual-experience-engine/VeeFaqSection'
import { VeeHero } from '@/app/components/visual-experience-engine/VeeHero'
import { VeeIntegrationsStrip } from '@/app/components/visual-experience-engine/VeeIntegrationsStrip'
import { VeePlatformsStrip } from '@/app/components/visual-experience-engine/VeePlatformsStrip'

export function VisualExperienceEngineContent() {
  return (
    <div className="min-h-screen overflow-x-clip text-neutral-900">
      <VeeHero />
      <main className="w-full bg-white">
        <HomeWorkflowShowcase />
        <VeeIntegrationsStrip />
        <VeeAdvantagesSection />
        <VeeEarlyAccessSection />
        <VeeFaqSection />
        <VeePlatformsStrip />
      </main>
    </div>
  )
}
