import { CareerContactForm } from '@/app/components/career/CareerContactForm'
import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function BilditCareer() {
  return (
    <>
      <SlotPlaceholder slotId="career-title" />
      <SlotPlaceholder slotId="career-detail" />
      <section className="bg-white text-neutral-900">
        <div className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 md:py-16">
          <h2 className="font-[family-name:var(--font-uncut-sans)] text-2xl font-bold tracking-tight text-neutral-950 md:text-[1.75rem]">
            Contact us
          </h2>
          <p className="font-[family-name:var(--font-uncut-sans)] mt-3 text-[15px] leading-relaxed text-neutral-600 md:text-base">
            Send us your resume and we&apos;ll follow up.
          </p>
          <CareerContactForm className="mt-8 w-full" />
        </div>
      </section>
    </>
  )
}
