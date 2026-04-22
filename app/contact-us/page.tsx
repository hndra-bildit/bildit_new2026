import { VeeLayerLeadForm } from '@/app/components/visual-experience-layer-landing/VeeLayerLeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Get in touch with the BILDIT team. Send a message and we will follow up shortly.'
}

export default function ContactUsPage() {
  return (
    <main className="min-h-[60vh] bg-white text-neutral-900">
      <div className="mx-auto max-w-[520px] px-4 py-12 sm:px-6 md:py-16">
        <h1 className="font-[family-name:var(--font-uncut-sans)] text-2xl font-bold tracking-tight text-neutral-950 md:text-[1.75rem]">
          Contact us
        </h1>
        <p className="font-[family-name:var(--font-uncut-sans)] mt-3 text-[15px] leading-relaxed text-neutral-600 md:text-base">
          Tell us how we can help. We will respond as soon as we can.
        </p>
        <VeeLayerLeadForm source="contact-us" submitLabel="Send message" variant="marketing" className="mt-8 w-full" />
      </div>
    </main>
  )
}
