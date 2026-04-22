import { HomeWorkflowSocialStrip } from '@/app/components/home/HomeWorkflowSocialStrip'
import { cn } from '@/utils/cn'
import Image from 'next/image'

/** Figma Section - TESTIMONIALS (4729:27910). Quotes from `SOCIAL_PROOF_TESTIMONIALS` via `HomeWorkflowSocialStrip`. */
export function StorefrontTestimonials({ className }: { className?: string }) {
  return (
    <section
      className={cn('relative overflow-hidden px-[5vw] py-12 md:py-[50px]', className)}
      aria-labelledby="storefront-testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 top-0 size-[600px] max-h-[400px] -translate-x-1/2 rounded-full opacity-15 blur-[36px]"
          style={{
            background: 'radial-gradient(circle, rgba(237,30,121,0.45) 0%, rgba(237,30,121,0) 70%)'
          }}
        />
      </div>

      <div className="relative mx-auto w-full overflow-hidden rounded-3xl px-4 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
          <Image
            src="/mobile-app-storefront/testimonials-bg.png"
            alt=""
            fill
            className="object-cover object-center opacity-90"
            sizes="90vw"
          />
        </div>

        <div className="relative z-[1] flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.08em] text-[#a07dc0]">
              What teams say
            </p>
            <h2
              id="storefront-testimonials-heading"
              className="font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight text-[#f0e6ff] md:text-[48px] md:leading-[48px]"
            >
              Built for speed.
              <br />
              Loved by teams.
            </h2>
          </div>

          <HomeWorkflowSocialStrip variant="dark" prominent className="w-full" id="storefront-testimonials-quotes" />
        </div>
      </div>
    </section>
  )
}
