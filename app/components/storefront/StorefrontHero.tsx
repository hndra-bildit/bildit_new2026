'use client'

import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Figma: Section - HERO inner Hero (4729:28527). Global site header is LayoutChrome — no duplicate nav.
 */
export function StorefrontHero({ className }: { className?: string }) {
  return (
    <section
      id="storefront-hero"
      data-header-surface="dark"
      className={cn(
        'relative m-0 flex h-svh max-h-svh w-full flex-col overflow-hidden rounded-none pt-[calc(70px+30px+0.75rem)] sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]',
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden sm:rounded-[29px]">
        <Image
          src="/images/storefront/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute right-0 top-[8%] hidden h-[min(70vh,686px)] w-[min(40vw,384px)] sm:block"
          aria-hidden
        >
          <div className="relative h-full w-full">
            <Image src="/images/storefront/hero-overlay.svg" alt="" fill className="object-contain object-right-top" />
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 sm:rounded-[29px]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-14 px-4 py-16 text-center sm:px-10 sm:py-20 md:gap-[60px]">
        <div className="flex max-w-[896px] flex-col gap-5 md:gap-5">
          <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.08em] text-[#f0e6ff]">
            Storefront
          </p>
          <h1 className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.05] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_2px_14px_rgba(0,0,0,0.22)] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[72px]">
            Your mobile store
          </h1>
          <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-light leading-relaxed text-[#f0e6ff] [text-shadow:0_1px_2px_rgba(0,0,0,0.3),0_2px_12px_rgba(0,0,0,0.18)] sm:text-xl md:text-[20px] md:leading-[31px]">
            Stop waiting on developers. Launch campaigns, update banners, and ship experiences — instantly.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
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
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
