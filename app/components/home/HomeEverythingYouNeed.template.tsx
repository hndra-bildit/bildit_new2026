// HomeEverythingYouNeed:v2 legacy=false
// @template v2

'use client'

import React, { type ElementRef, useEffect, useRef, useState } from 'react'
import { InstaStoriesShoulderCapsBottom, InstaStoriesShoulderCapsTop } from '@/app/components/Components'
import { homeSectionTitleClassName } from '@/app/components/Components'
import { cn } from '@/app/components/Components'

const PRIMARY_ITEMS = [
  'Visual Experience Engine',
  'Instant publishing infrastructure',
  'Performance guardrails built-in',
  'Sophisticated template system',
  'Live preview that actually works'
]
const BONUS_ITEMS = [
  'Elevated template starter pack',
  'White-glove onboarding',
  'Direct access to our engineering team'
]

/** Full-bleed parallax layer behind the section (hosted MP4). */
const SECTION_BACKGROUND_VIDEO_SRC =
  'https://storage.googleapis.com/compilepoc-2d379.appspot.com/bildit-website-staging%2FInsta_Stories.mp4'

/** Subtle parallax: background shifts with scroll as the section crosses the viewport. */
const PARALLAX_RATE = 0.1
const PARALLAX_MAX_PX = 56
function useParallaxY(enabled) {
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
function usePrefersReducedMotion() {
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
 * “Everything you need”: parallax video background, 50px white shoulder connectors (inner 50px radii) above/below
 * the parallax, white checklist card. Video sits z-0; transparent center of each connector shows the media;
 * flanks are `bg-white` like adjacent sections.
 */
export function HomeEverythingYouNeed({ className }) {
  /**
   * @group General
   * @type Boolean
   */
  const roundedCorners = true
  /**
   * @group General
   * @type RichText
   */
  const span = '\u2713'
  /**
   * @group div
   * @type RichText
   */
  const divH2Text = 'Everything you need. Nothing holding you back.'
  /**
   * @group div
   * @type RichText
   */
  const divPText = 'Bonus:'
  /**
   * @group div
   * @type Boolean
   */
  const sectionDivRoundedCornersToggle = true
  const reducedMotion = usePrefersReducedMotion()
  const { sectionRef, parallaxY } = useParallaxY(!reducedMotion)
  const backgroundVideoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = backgroundVideoRef.current
    if (!video) return
    if (reducedMotion) {
      video.pause()
    } else {
      void video.play().catch(() => {})
    }
  }, [reducedMotion])
  return (
    <section ref={sectionRef} className={cn('home-scheme-light relative w-full overflow-hidden bg-white', className)}>
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div
          className="absolute -top-[10%] left-0 right-0 h-[120%] will-change-transform"
          style={{
            transform: `translateY(${parallaxY}px)`
          }}
        >
          <video
            ref={backgroundVideoRef}
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={SECTION_BACKGROUND_VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
          />
        </div>
      </div>

      <InstaStoriesShoulderCapsTop />

      <div className={cn('relative z-10 w-full overflow-hidden shadow-[0px_24px_80px_rgba(13,1,24,0.12)]')}>
        <div className="relative w-full">
          <div
            className={`pointer-events-none absolute bottom-0 left-1/2 z-0 size-[min(600px,90vw)] -translate-x-1/2 translate-y-1/4 bg-[rgba(200,80,240,0.07)] blur-[140px] ${sectionDivRoundedCornersToggle ? 'rounded-full' : ''}`}
            aria-hidden
            data-bildit-var-name="sectionDivRoundedCornersToggle"
            data-bildit-var-type="Boolean"
          />

          <div className="relative z-[1] px-0 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-[116px] lg:py-24">
            <div
              className={`relative mx-auto flex min-h-0 w-full max-w-[1280px] flex-col items-center overflow-hidden px-5 py-10 sm: sm:p-8 md:p-12 lg:min-h-[720px] lg:px-[116px] lg:py-16 ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
              data-bildit-var-name="sectionDivRoundedCornersToggle"
              data-bildit-var-type="Boolean"
            >
              <div
                className={cn(
                  'relative z-[1] w-full max-w-[829px] rounded-2xl border border-black/[0.08]',
                  'bg-white p-8 md:p-10'
                )}
              >
                <div className="mx-auto max-w-[768px] text-center">
                  <h2
                    className={cn('text-balance', homeSectionTitleClassName)}
                    data-bildit-var-name="divH2Text"
                    data-bildit-var-type="RichText"
                  >
                    {divH2Text}
                  </h2>
                </div>

                <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-10">
                  <ul className="flex flex-1 flex-col gap-4">
                    {PRIMARY_ITEMS.map((label) => (
                      <li
                        key={label}
                        className="flex items-start gap-3 text-left font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#171717]"
                      >
                        <span
                          className={`mt-0.5 flex size-6 shrink-0 items-center justify-center text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)] ${roundedCorners ? 'rounded-full' : ''}`}
                          aria-hidden
                          data-bildit-var-name="roundedCorners"
                          data-bildit-var-type="Boolean"
                        >
                          {span}
                        </span>
                        {label}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-1 flex-col gap-3 border-t border-black/[0.03] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <p
                      className="font-[family-name:var(--font-uncut-sans)] text-base font-light text-[#171717]"
                      data-bildit-var-name="divPText"
                      data-bildit-var-type="RichText"
                    >
                      {divPText}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {BONUS_ITEMS.map((label) => (
                        <li
                          key={label}
                          className="flex items-start gap-3 text-left font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#171717]"
                        >
                          <span
                            className={`mt-0.5 flex size-6 shrink-0 items-center justify-center text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)] ${roundedCorners ? 'rounded-full' : ''}`}
                            aria-hidden
                            data-bildit-var-name="roundedCorners"
                            data-bildit-var-type="Boolean"
                          >
                            {span}
                          </span>
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p
                  className="font-[family-name:var(--font-uncut-sans)] mt-10 text-center text-lg font-normal leading-7 text-[#0d0118]"
                  data-bildit-var-name="divPText"
                  data-bildit-var-type="RichText"
                >
                  {divPText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InstaStoriesShoulderCapsBottom className="-mt-px" />
    </section>
  )
}
export default HomeEverythingYouNeed
