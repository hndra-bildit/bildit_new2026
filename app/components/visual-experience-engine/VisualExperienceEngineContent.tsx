import { VeeAdvantagesSection } from '@/app/components/visual-experience-engine/VeeAdvantagesSection'
import { VeeEarlyAccessSection } from '@/app/components/visual-experience-engine/VeeEarlyAccessSection'
import { VeeFaqSection } from '@/app/components/visual-experience-engine/VeeFaqSection'
import { VeeHero } from '@/app/components/visual-experience-engine/VeeHero'
import { VeeHowItWorksSection } from '@/app/components/visual-experience-engine/VeeHowItWorksSection'
import { VeeIntegrationsStrip } from '@/app/components/visual-experience-engine/VeeIntegrationsStrip'
import { VeePlatformsStrip } from '@/app/components/visual-experience-engine/VeePlatformsStrip'

export function VisualExperienceEngineContent() {
  return (
    <main className="bg-white text-neutral-900">
      <VeeHero />
      <VeeHowItWorksSection />
      <VeeIntegrationsStrip />
      <VeeAdvantagesSection />
      <VeeEarlyAccessSection />
      <VeeFaqSection />
      <VeePlatformsStrip />
    </main>
  )
}
