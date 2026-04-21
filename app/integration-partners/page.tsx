import { IntegrationPartnersLeadForm } from '@/app/components/integration-partners/IntegrationPartnersLeadForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integration Partners | BILDIT',
  description:
    'Apply to become a BILDIT integration partner. Agencies and consultancies: co-sell, implement, and support teams on the Visual Experience Engine.'
}

export default function IntegrationPartnersPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <section className="relative overflow-hidden bg-[#0d0118]">
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% -20%, rgba(200, 80, 240, 0.35) 0%, transparent 55%)'
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0118]/55 via-[#0d0118]/25 to-[#0d0118]/85"
          aria-hidden
        />

        <div className="relative z-[1] mx-auto max-w-[960px] px-4 pb-14 pt-10 text-center sm:px-6 md:pb-20 md:pt-14">
          <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.28em] text-[#d6c1ea]">
            Partner with BILDIT
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight tracking-tight text-[#f0e6ff] md:text-5xl md:leading-[1.1]">
            Become an integration partner
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] font-[family-name:var(--font-uncut-sans)] text-lg font-medium text-[#e8d4ff] md:text-xl">
            We work with agencies and engineering partners who implement modern stacks for brands. Share a few details
            and we&apos;ll follow up to discuss co-selling, implementation, and enablement.
          </p>
        </div>
      </section>

      <section className="border-b border-black/[0.06] bg-[#fafafa] py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6">
          <div className="font-[family-name:var(--font-uncut-sans)] space-y-5 text-base leading-[1.75] text-[#333] md:text-[17px] md:leading-[1.7]">
            <p>
              BILDIT partners help retailers and brands ship visual experiences without CMS bottlenecks. If your team
              delivers React web or mobile apps and you want a structured way to implement content tooling, scheduling,
              and visual workflows, we&apos;d like to hear from you.
            </p>
            <p>
              Partnerships can include technical onboarding, joint customer engagements, and ongoing support from our
              team. Submit the form and we&apos;ll schedule a conversation to align on fit, motion, and next steps.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-4 py-14 md:px-6 md:py-20"
        aria-labelledby="integration-partners-apply-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200, 80, 240, 0.18) 0%, transparent 55%)'
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-[560px] flex-col gap-8">
          <h2
            id="integration-partners-apply-heading"
            className="text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
          >
            Apply
          </h2>
          <div className="rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-8">
            <IntegrationPartnersLeadForm />
          </div>
        </div>
      </section>
    </div>
  )
}
