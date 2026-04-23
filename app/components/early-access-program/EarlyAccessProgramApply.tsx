'use client'

import { VeeLayerLeadForm } from '@/app/components/visual-experience-layer-landing/VeeLayerLeadForm'
import { cn } from '@/utils/cn'

export function EarlyAccessProgramApply({ className }: { className?: string }) {
  return (
    <div className={cn('w-full max-w-[420px]', className)}>
      <VeeLayerLeadForm source="early-access-program" submitLabel="Apply for Early Access" />
    </div>
  )
}
