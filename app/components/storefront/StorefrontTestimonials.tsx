import { StorefrontTestimonialsQuotes } from './StorefrontTestimonialsQuotes'
import {
  homeSectionEyebrowClassName,
  homeSectionTitleOnDarkClassName
} from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import Image from 'next/image'

/** Figma Section - TESTIMONIALS (4729:27910). Quotes from `SOCIAL_PROOF_TESTIMONIALS` — static grid, no carousel. */
export function StorefrontTestimonials({ className }: { className?: string }) {
  return (
    <section
      className={cn('relative overflow-hidden px-[5vw] py-12 md:py-[50px]', className)}
      aria-labelledby="storefront-testimonials-heading"
    >
      <div className="relative mx-auto w-full overflow-hidden rounded-3xl px-4 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
          <Image
            src="/images/mobile-app-storefront/testimonials-bg.png"
            alt=""
            fill
            className="object-cover object-center opacity-90"
            sizes="90vw"
          />
        </div>

        <div className="relative z-[1] flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className={cn(homeSectionEyebrowClassName, 'text-[#a07dc0]')}>What teams say</p>
            <h2 id="storefront-testimonials-heading" className={cn(homeSectionTitleOnDarkClassName, 'text-[#f0e6ff]')}>
              Built for speed.
              <br />
              Loved by teams.
            </h2>
          </div>

          <StorefrontTestimonialsQuotes className="w-full" id="storefront-testimonials-quotes" />
        </div>
      </div>
    </section>
  )
}
