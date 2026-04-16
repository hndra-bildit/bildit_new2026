'use client'

import { HeroFloatingLines } from '@/app/components/home/HeroFloatingLines'
import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

/**
 * Figma: hero (node 4728:27037). Background matches React Bits “floating lines”
 * studio preset (speed 0.2, bend 15 / 2; no parallax / mouse).
 * Site header is fixed globally (LayoutChrome). Home: sm+ hero inset calc((1rem + 20px) * 0.42); nav pill is a further 40px in on left/right and 20px below the hero top (see SiteHeader isHome).
 * Mobile: full-bleed; nav uses px-6 / 20px top inside the hero.
 * Background: React Bits FloatingLines (WebGL) matching Background Studio export.
 */
export function HomeHero({ className }: { className?: string }) {
  return (
    <section
      id="home-hero"
      data-header-surface="dark"
      className={cn(
        'relative m-0 flex min-h-svh w-full flex-col rounded-none pt-[calc(70px+20px+0.75rem)] sm:m-[calc((1rem+20px)*0.42)] sm:min-h-[calc(100svh-(1rem+20px)*0.84)] sm:w-auto sm:rounded-[51px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]',
        className
      )}
    >
      <HeroFloatingLines />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-14 px-4 py-16 text-center sm:px-10 sm:py-20 md:gap-[60px]">
        <div className="flex max-w-[896px] flex-col gap-5 md:gap-5">
          <h1 className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[72px]">
            <span className="block">Ship high performance</span>
            <span className="mt-1 flex flex-wrap items-center justify-center gap-2.5 py-1 md:gap-2.5">
              <span className="text-white">experiences.</span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage:
                    'linear-gradient(235.74deg, #e1beff 6.65%, #ffceff 47.31%, #ff80f4 60.52%, #ff00e1 100%)'
                }}
              >
                Faster
              </span>
            </span>
          </h1>
          <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-light leading-relaxed text-white/85 sm:text-xl md:text-2xl md:leading-[39px]">
            Break free from deployment bottlenecks.
          </p>
        </div>
        <Link
          href="/pricing/"
          className="font-[family-name:var(--font-uncut-sans)] inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c850f0] to-[#e84590] px-[19px] py-2.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Start Building
          <ArrowRight className="size-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
