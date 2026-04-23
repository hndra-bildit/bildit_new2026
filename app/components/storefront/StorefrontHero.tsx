'use client'

import { homeSectionEyebrowClassName } from '@/app/components/home/home-section-typography'
import { SiteHeroTopSpacer } from '@/app/components/site-header/SiteHeroTopSpacer'
import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Figma: Section - HERO inner Hero (4729:28527). Global site header is LayoutChrome — no duplicate nav.
 * Layout matches `VeeHero`: centered copy on small screens, left-aligned from md; phone art in grid column (not over text).
 */
export function StorefrontHero({ className }: { className?: string }) {
  return (
    <section
      id="storefront-hero"
      data-header-surface="dark"
      className={cn(
        'relative m-0 flex h-svh max-h-svh w-full flex-col overflow-hidden rounded-none text-left sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden sm:rounded-[29px]">
        <Image
          src="/mobile-app-storefront/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 sm:rounded-[29px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 hidden bg-black/40 max-md:block sm:rounded-[29px]"
          aria-hidden
        />
      </div>
      <SiteHeroTopSpacer />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="mx-auto flex w-full max-w-[1280px] min-h-0 max-md:min-h-min flex-1 flex-col justify-center px-4 sm:px-10 max-md:justify-start max-md:pb-10 max-md:pt-[min(22svh,6.25rem)] md:justify-center md:py-16 lg:px-8 lg:py-20">
          <div className="grid w-full min-w-0 grid-cols-1 items-center gap-14 md:grid-cols-2 md:items-center md:gap-8 lg:gap-10 xl:gap-14">
            <div className="order-1 flex min-w-0 flex-col items-center gap-6 text-center md:items-start md:gap-8 md:pr-4 md:text-left lg:pr-6">
              <p className={cn(homeSectionEyebrowClassName, 'w-full text-[#f0e6ff] md:text-left')}>Storefront</p>
              <h1 className="mx-auto w-fit max-w-full pb-[3px] text-center font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.05] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_2px_14px_rgba(0,0,0,0.22)] sm:text-5xl md:mx-0 md:text-left md:text-6xl lg:text-[72px] lg:leading-[72px]">
                Your mobile app storefront
              </h1>
              <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-light leading-relaxed text-[#f0e6ff] [text-shadow:0_1px_2px_rgba(0,0,0,0.3),0_2px_12px_rgba(0,0,0,0.18)] sm:text-xl md:text-[20px] md:leading-[31px]">
                Stop waiting on developers. Launch campaigns, update banners, and ship experiences — instantly.
              </p>
              <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start sm:gap-5">
                <Link
                  href="/pricing/"
                  className="font-[family-name:var(--font-uncut-sans)] inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c850f0] to-[#e84590] px-[22px] py-2.5 text-base font-semibold text-white shadow-[0px_10px_24px_0px_rgba(232,69,139,0.18)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  href="/mobile-app-storefront/#storefront-cta"
                  className="font-[family-name:var(--font-uncut-sans)] inline-flex h-11 items-center justify-center rounded-full border-[1.5px] border-[#595959] bg-white px-[22px] text-base font-semibold text-[#595959] transition-colors hover:border-neutral-700 hover:text-neutral-800"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="order-2 flex w-full min-w-0 justify-end pointer-events-none" aria-hidden>
              <div className="relative h-[min(38vh,360px)] w-full max-w-[260px] sm:h-[min(45vh,400px)] sm:max-w-[300px] md:h-[min(70vh,686px)] md:max-w-[min(40vw,384px)]">
                <Image
                  src="/mobile-app-storefront/hero-overlay.svg"
                  alt=""
                  fill
                  className="object-contain object-right object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
