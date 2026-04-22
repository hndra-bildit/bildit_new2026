import {
  homeSectionSubtitleOnDarkClassName,
  homeSectionTitleOnDarkClassName
} from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import { ArrowRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
                src="/home-post-faq-cta/container-bg.png"
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

        <div className="relative z-10 flex flex-col items-center gap-8 text-center md:gap-10">
          <h2
            id="home-post-faq-cta-heading"
            className={cn(homeSectionTitleOnDarkClassName, 'max-w-[900px] text-center text-[#f0e6ff]')}
          >
            <span className="block">Your website should move at</span>
            <span className="block">the speed of your ideas.</span>
          </h2>

          <div
            className={cn(
              homeSectionSubtitleOnDarkClassName,
              'flex max-w-none flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg md:gap-x-8 md:text-[18px] md:leading-7'
            )}
          >
            <div className="flex items-center gap-2.5 px-2.5 py-2.5">
              <X className="size-6 shrink-0" strokeWidth={2.25} aria-hidden />
              <p className="leading-7">Not your deploy cycle.</p>
            </div>
            <div className="flex items-center gap-2.5 px-2.5 py-2.5">
              <X className="size-6 shrink-0" strokeWidth={2.25} aria-hidden />
              <p className="leading-7">Not your dev queue.</p>
            </div>
            <div className="flex items-center gap-2.5 px-2.5 py-2.5">
              <X className="size-6 shrink-0" strokeWidth={2.25} aria-hidden />
              <p className="leading-7">Not your release calendar.</p>
            </div>
          </div>

          <p
            className={cn(
              homeSectionSubtitleOnDarkClassName,
              'max-w-none text-center text-base tracking-[0.2em] text-white sm:text-lg md:text-xl md:tracking-[3px]'
            )}
          >
            Fast • Controlled • Sophisticated
          </p>

          <p className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-none text-center sm:text-lg md:text-[18px]')}>
            This is how you build the elegant web.
          </p>

          <Link
            href="/pricing/"
            className="font-[family-name:var(--font-uncut-sans)] inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c850f0] to-[#e84590] px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Building
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>

          <p
            className={cn(
              homeSectionSubtitleOnDarkClassName,
              'max-w-xl text-sm leading-5 text-[#f0e6ff] sm:text-sm md:text-[14px] md:leading-5'
            )}
          >
            Preview everything. Push out instantly. Never wait again.
          </p>
        </div>
      </div>
    </section>
  )
}
