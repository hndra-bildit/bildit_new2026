import {
  homeSectionSubtitleOnDarkClassName,
  homeSectionTitleOnDarkClassName
} from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import { ArrowRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const NEGATION_LINES = ['Not your deploy cycle.', 'Not your dev queue.', 'Not your release calendar.'] as const

const VALUE_PILLARS = ['Fast', 'Controlled', 'Sophisticated'] as const

const checkChipClassName =
  'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)]'

/**
 * Figma: Section (node 4726:15551) — CTA band below FAQ.
 */
export function HomePostFaqCta({ className }: { className?: string }) {
  return (
    <section className={cn('w-full', className)} aria-labelledby="home-post-faq-cta-heading">
      <div className="relative w-full overflow-hidden rounded-none px-6 py-16 sm:rounded-3xl sm:px-10 md:px-16 md:py-20 lg:px-[116px] lg:py-[100px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-none sm:rounded-3xl">
          <div className="absolute inset-0 rounded-none bg-black sm:rounded-3xl" />
          <div className="absolute inset-0 rounded-none sm:rounded-3xl">
            <div className="relative size-full rounded-none sm:rounded-3xl">
              <Image
                src="/images/home-post-faq-cta/container-bg.png"
                alt=""
                fill
                sizes="100vw"
                className="rounded-none object-cover opacity-[0.35] sm:rounded-3xl"
                priority={false}
              />
            </div>
          </div>
          <div
            className="absolute inset-0 rounded-none sm:rounded-3xl"
            style={{
              backgroundImage: 'linear-gradient(114.47deg, rgba(0, 0, 0, 0.45) 0.54%, rgba(0, 0, 0, 0.157) 100%)'
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 text-center md:gap-10">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <h2
              id="home-post-faq-cta-heading"
              className={cn(homeSectionTitleOnDarkClassName, 'text-balance text-center text-[#f0e6ff]')}
            >
              <span className="block">Your website should move at</span>
              <span className="block">the speed of your ideas.</span>
            </h2>
            <p
              className={cn(
                homeSectionSubtitleOnDarkClassName,
                'max-w-[640px] text-balance text-center text-base leading-[1.65] text-[#d6c1ea] md:max-w-[700px] md:text-[17px] md:leading-7'
              )}
            >
              Preview everything. Push out instantly. Never wait again.
            </p>
          </div>

          <ul
            className="flex w-full max-w-2xl flex-col items-stretch justify-center gap-2.5 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-2"
            aria-label="What slows you down today"
          >
            {NEGATION_LINES.map((line) => (
              <li key={line} className="flex items-center justify-center gap-2.5">
                <span
                  className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/80"
                  aria-hidden
                >
                  <X className="size-3.5" strokeWidth={2.25} />
                </span>
                <span className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-none text-base leading-7')}>{line}</span>
              </li>
            ))}
          </ul>

          <ul
            className="flex w-full max-w-md flex-col items-stretch gap-2.5 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-2"
            aria-label="What BILDIT delivers"
          >
            {VALUE_PILLARS.map((label) => (
              <li key={label} className="flex items-center justify-center gap-2.5">
                <span className={checkChipClassName} aria-hidden>
                  ✓
                </span>
                <span
                  className={cn(
                    homeSectionSubtitleOnDarkClassName,
                    'max-w-none text-base font-normal leading-7 text-[#f0e6ff]'
                  )}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <p
            className={cn(
              homeSectionSubtitleOnDarkClassName,
              'max-w-[520px] text-balance text-center text-lg leading-7 text-[#f0e6ff] md:text-[18px] md:leading-[29.25px]'
            )}
          >
            This is how you build the elegant web.
          </p>

          <Link
            href="/pricing/"
            className="font-[family-name:var(--font-uncut-sans)] inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c850f0] to-[#e84590] px-[19px] py-2.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Building
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
