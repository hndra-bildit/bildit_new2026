// HomeHero:v4 legacy=false
// @template v2

'use client'

import React from 'react'
import { HeroFloatingLines } from '@/app/components/Components'
import { SiteHeroTopSpacer } from '@/app/components/Components'
import { homeHeroHeadlineGradientClassName, homeHeroHeadlineGradientStyle } from '@/app/components/Components'
import { cn } from '@/app/components/Components'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

/**
 * Figma: hero (node 4728:27037). Background: `lines-background.webp` with rounded shell on sm+.
 * Site header is fixed globally (LayoutChrome). Home: sm+ hero inset calc((1rem + 20px) * 0.42) with top/left/right −10px; nav pill is a further 30px in on left/right and 10px below the hero top (see SiteHeader isHome).
 * Mobile: full-bleed; nav uses px-3 / 20px top inset (matches SiteHeader isHome pt).
 */
export function HomeHero({ className }) {
  /**
   * @group div
   * @type String
   */
  const href = '/pricing/'
  /**
   * @group div
   * @type RichText
   */
  const link1 = 'Start Building'
  /**
   * @group div
   * @type RichText
   */
  const p1 = 'Break free from deployment bottlenecks.'
  /**
   * @group div
   * @type Boolean
   */
  const roundedCorners = true
  /**
   * @group div
   * @type RichText
   */
  const span = 'Ship high performance'
  /**
   * @group div
   * @type RichText
   */
  const span1 = 'Faster'
  /**
   * @group div
   * @type RichText
   */
  const span1Span = 'experiences.'
  return (
    <section
      id="home-hero"
      data-header-surface="dark"
      className={cn(
        'relative m-0 flex h-svh max-h-svh w-full flex-col overflow-hidden rounded-none sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]',
        className
      )}
    >
      <HeroFloatingLines />
      <SiteHeroTopSpacer />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-14 px-4 py-16 text-center sm:px-10 sm:py-20 md:gap-[60px]">
          <div className="flex max-w-[896px] flex-col gap-5 md:gap-5">
            <h1 className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.05] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_2px_14px_rgba(0,0,0,0.22)] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[72px]">
              <span className="block" data-bildit-var-name="span" data-bildit-var-type="RichText">
                {span}
              </span>
              <span className="mt-1 flex flex-wrap items-center justify-center gap-2.5 py-1 md:gap-2.5">
                <span className="text-white" data-bildit-var-name="span1Span" data-bildit-var-type="RichText">
                  {span1Span}
                </span>
                <span
                  className={cn(homeHeroHeadlineGradientClassName, '[text-shadow:none]')}
                  style={homeHeroHeadlineGradientStyle}
                  data-bildit-var-name="span1"
                  data-bildit-var-type="RichText"
                >
                  {span1}
                </span>
              </span>
            </h1>
            <p
              className="font-[family-name:var(--font-uncut-sans)] text-lg font-light leading-relaxed text-white/85 sm:text-xl md:text-2xl md:leading-[39px]"
              data-bildit-var-name="p1"
              data-bildit-var-type="RichText"
            >
              {p1}
            </p>
          </div>
          <Link
            href={href}
            className={`font-[family-name:var(--font-uncut-sans)] inline-flex h-11 items-center justify-center gap-2.5 bg-gradient-to-r from-[#c850f0] to-[#e84590] px-[19px] py-2.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${roundedCorners ? 'rounded-full' : ''}`}
            data-bildit-var-name="href"
            data-bildit-var-type="String"
          >
            {link1}
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default HomeHero
