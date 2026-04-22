'use client'

import { type LeadSource, VeeLayerLeadForm } from '@/app/components/visual-experience-layer-landing/VeeLayerLeadForm'
import { cn } from '@/utils/cn'

const gradientSubmitClassName =
  'border-0 normal-case tracking-normal text-base [background-image:var(--bildit-gradient-cta-short)] hover:opacity-95 hover:bg-[#ed1e79] disabled:opacity-60'

type MarketingCtaFormSource = Extract<
  LeadSource,
  'marketers-solutions' | 'tech-partners' | 'home' | 'mobile-app-storefront'
>

type MarketersSolutionsCtaFormProps = {
  source: MarketingCtaFormSource
  submitLabel?: string
  className?: string
}

export function MarketersSolutionsCtaForm({
  source,
  submitLabel = 'Book a Demo',
  className
}: MarketersSolutionsCtaFormProps) {
  return (
    <VeeLayerLeadForm
      source={source}
      submitLabel={submitLabel}
      variant="marketing"
      showCompany={false}
      className={cn('mt-4 w-full max-w-2xl', className)}
      submitButtonClassName={gradientSubmitClassName}
      helperText={"No cost. No risk. We don't win unless you ship."}
    />
  )
}
