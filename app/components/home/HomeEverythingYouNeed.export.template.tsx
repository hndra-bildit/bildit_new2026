// @template v2

'use client'

import { type ElementRef, useEffect, useRef, useState } from 'react'
import { homeSectionSubtitleOnDarkClassName, homeSectionTitleOnDarkClassName } from '@/cmsDependencies'
import { cn } from '@/cmsDependencies'
import Image from 'next/image'

const PRIMARY_ITEMS = [
  'Visual Experience Engine',
  'Instant publishing infrastructure',
  'Performance guardrails built-in',
  'Sophisticated template system',
  'Live preview that actually works'
] as const
const BONUS_ITEMS = [
  'Elevated template starter pack',
  'White-glove onboarding',
  'Direct access to our engineering team'
] as const

/** Full-bleed parallax layer behind the section (`public/images/Insta Stories.gif`). */
const SECTION_BACKGROUND_SRC = '/images/Insta%20Stories.gif'

/** Extra height for light “shoulders” that mimic adjacent blocks’ rounding. */
const CAP_HEIGHT_PX = 60

/** Subtle parallax: background shifts with scroll as the section crosses the viewport. */
const PARALLAX_RATE = 0.1
const PARALLAX_MAX_PX = 56
function useParallaxY(enabled: boolean) {
  const sectionRef = useRef<ElementRef<'section'>>(null)
  const [y, setY] = useState(0)
  const raf = useRef<number>(0)
  useEffect(() => {
    if (!enabled) {
      setY(0)
      return
    }
    const tick = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const sectionMidY = rect.top + rect.height / 2
      const viewportMidY = window.innerHeight / 2
      // Positive when section center is below viewport center → image drifts down slightly.
      const offset = (sectionMidY - viewportMidY) * PARALLAX_RATE
      const clamped = Math.max(-PARALLAX_MAX_PX, Math.min(PARALLAX_MAX_PX, offset))
      setY(clamped)
    }
    const onScroll = () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('scroll', onScroll, {
      passive: true
    })
    window.addEventListener('resize', onScroll, {
      passive: true
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [enabled])
  return {
    sectionRef,
    parallaxY: y
  }
}
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/**
 * “Everything you need”: full-bleed parallax background, dark feature frame, nested checklist card.
 * Parallax image runs behind the full section with no color overlay; shoulder caps match page surface (`bg-white`).
 */
export function HomeEverythingYouNeed({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion()
  const { sectionRef, parallaxY } = useParallaxY(!reducedMotion)
  return (
    <section ref={sectionRef} className={cn('home-scheme-light relative w-full overflow-hidden bg-white', className)}>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -top-[10%] left-0 right-0 h-[120%] will-change-transform"
          style={{
            transform: `translateY(${parallaxY}px)`
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF background */}
          <img
            src={SECTION_BACKGROUND_SRC}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />
        </div>
      </div>

      <div
        aria-hidden
        className={`relative z-[1] w-full -none bg-white sm: -[51px] ${sectionDivRoundedCornersToggle ? 'rounded-b' : ''}`}
        style={{
          height: CAP_HEIGHT_PX
        }}
      />

      <div className={cn('relative z-[1] -mt-px w-full overflow-hidden shadow-[0px_24px_80px_rgba(13,1,24,0.12)]')}>
        <div
          className={`pointer-events-none absolute bottom-0 left-1/2 z-0 size-[min(600px,90vw)] -translate-x-1/2 translate-y-1/4 bg-[rgba(200,80,240,0.07)] blur-[140px] ${sectionDivRoundedCornersToggle ? 'rounded-full' : ''}`}
          aria-hidden
        />

        <div className="relative z-[1] px-0 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-[116px] lg:py-24">
          <div
            className={`relative mx-auto flex min-h-0 w-full max-w-[1280px] flex-col items-center overflow-hidden px-5 py-10 sm: -[24px] sm:p-8 md:p-12 lg:min-h-[720px] lg:px-[116px] lg:py-16 ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
          >
            <div
              className={`absolute inset-0 overflow-hidden sm: -[24px] ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
            >
              <Image
                src={divImageSrcValue}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, min(1280px, 100vw)"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d0118]/25 via-transparent to-[#0d0118]/35" />
            </div>

            <div className="relative z-[1] flex w-full max-w-[768px] flex-col gap-6 text-center">
              <h2 className={cn('text-center', homeSectionTitleOnDarkClassName, 'text-[#f0e6ff]')}>{divH2Text}</h2>
              <p className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-none text-center text-lg leading-[29.25px]')}>
                {divPText}
              </p>
            </div>

            <div
              className={cn(
                'relative z-[1] mt-10 w-full max-w-[829px] rounded-2xl border border-black/[0.08]',
                'bg-white p-8 md:p-10'
              )}
            >
              <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
                <ul className="flex flex-1 flex-col gap-4">
                  {PRIMARY_ITEMS.map((label) => (
                    <li
                      key={label}
                      className="flex items-start gap-3 text-left font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#171717]"
                    >
                      <span className="relative mt-0.5 size-5 shrink-0">
                        <Image src={spanImageSrcValue} alt="" width={20} height={20} className="size-5" />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-1 flex-col gap-3 border-t border-black/[0.03] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="font-[family-name:var(--font-uncut-sans)] text-base font-light text-[#c850f0]">
                    {divPText}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {BONUS_ITEMS.map((label) => (
                      <li
                        key={label}
                        className="flex items-start gap-3 text-left font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#171717]"
                      >
                        <span className="relative mt-0.5 size-5 shrink-0">
                          <Image src={spanImageSrcValue} alt="" width={20} height={20} className="size-5" />
                        </span>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="font-[family-name:var(--font-uncut-sans)] mt-10 text-center text-lg font-bold leading-7 text-[#0d0118]">
                {divPText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className={`relative z-[1] -mt-px w-full -none bg-white sm: -[51px] ${sectionDivRoundedCornersToggle ? 'rounded-t' : ''}`}
        style={{
          height: CAP_HEIGHT_PX
        }}
      />
    </section>
  )
}
