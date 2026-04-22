import { VisualExperienceLayerLanding } from '@/app/components/visual-experience-layer-landing/VisualExperienceLayerLanding'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Publish advanced content without involving IT. Build beautiful content at the speed of marketing with BILDIT Visual Experience Layer, live previews, and scheduling.'
}

export default function VisualExperienceLayerMarketingPage() {
  return <VisualExperienceLayerLanding />
}
