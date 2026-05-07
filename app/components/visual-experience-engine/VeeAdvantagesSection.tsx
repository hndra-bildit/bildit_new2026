'use client'

import { useEffect, useRef, useState } from 'react'
import { BilditPurpleGlowOrb } from '@/app/components/marketing/BilditMarketingGlows'
import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import {
  veeAdvantagesAdvancedScheduling,
  veeAdvantagesEditableBanner,
  veeAdvantagesFastRuntimeLaptop
} from '@/app/lib/vee-advantages-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

const REASONS = [
  {
    title: 'Visual Editor with Live Preview',
    subtitle: 'Build it. See it. Ship it.',
    bullets: [
      'True visual inline editing of React content',
      'See changes exactly as they’ll render',
      'No lengthy rebuild cycles for content revisions',
      'Works with your existing architecture and CMS'
    ]
  },
  {
    title: 'Advanced Scheduling',
    subtitle: 'Take Control & Launch',
    bullets: [
      'Set start/end dates without deployments',
      'Plan and schedule drops, promos, and content',
      'Marketing is empowered'
    ]
  },
  {
    title: 'Fast Runtime Rendering',
    subtitle: 'Speed isn’t Optional',
    preambleBullets: ['(SSR.. ask the nerds)'],
    intro: 'Milliseconds matter. BILDIT speeds up your existing site.',
    bullets: [
      'Render experiences fast across channels',
      'Speed is Conversion',
      'Built for modern e-commerce frameworks'
    ]
  }
] as const

const PANEL_IMAGES: readonly { src: string; width: number; height: number; alt: string }[] = [
  {
    src: veeAdvantagesEditableBanner,
    width: 736,
    height: 440,
    alt: 'Simplified content management in the BILDIT visual editor with live preview'
  },
  {
    src: veeAdvantagesAdvancedScheduling,
    width: 760,
    height: 460,
    alt: 'Schedule content with date range and web slots, no deployments'
  },
  {
    src: veeAdvantagesFastRuntimeLaptop,
    width: 2040,
    height: 1330,
    alt: 'Core Web Vitals-style performance cards: LCP, CLS, and FID on a purple background'
  }
] as const

export function VeeAdvantagesSection() {
  const [active, setActive] = useState(0)
  const [displayedActive, setDisplayedActive] = useState(0)
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const scrollTrackRef = useRef<HTMLDivElement | null>(null)
  const panel = PANEL_IMAGES[displayedActive]

  useEffect(() => {
    if (active === displayedActive) {
      return
    }

    setTransitionPhase('out')

    const swapTimeout = window.setTimeout(() => {
      setDisplayedActive(active)
      setTransitionPhase('in')
    }, 140)

    const settleTimeout = window.setTimeout(() => {
      setTransitionPhase('idle')
    }, 440)

    return () => {
      window.clearTimeout(swapTimeout)
      window.clearTimeout(settleTimeout)
    }
  }, [active, displayedActive])

  useEffect(() => {
    const track = scrollTrackRef.current
    let animationFrame = 0

    if (!track) {
      return
    }

    const updateActiveReasonFromScroll = () => {
      animationFrame = 0

      const rect = track.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const stickyOffset = Math.min(Math.max(viewportHeight * 0.1, 72), 104)
      const scrollableDistance = Math.max(rect.height - viewportHeight + stickyOffset, 1)

      if (rect.top > stickyOffset || rect.bottom < viewportHeight * 0.45) {
        return
      }

      const progress = Math.min(Math.max((stickyOffset - rect.top) / scrollableDistance, 0), 1)
      const nextActive = Math.min(Math.floor(progress * REASONS.length), REASONS.length - 1)

      setActive((current) => (current === nextActive ? current : nextActive))
    }

    const scheduleScrollUpdate = () => {
      if (animationFrame) {
        return
      }

      animationFrame = window.requestAnimationFrame(updateActiveReasonFromScroll)
    }

    scheduleScrollUpdate()
    window.addEventListener('scroll', scheduleScrollUpdate, { passive: true })
    window.addEventListener('resize', scheduleScrollUpdate)

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      window.removeEventListener('scroll', scheduleScrollUpdate)
      window.removeEventListener('resize', scheduleScrollUpdate)
    }
  }, [])

  const handleReasonSelect = (index: number) => {
    setActive(index)

    const track = scrollTrackRef.current

    if (!track) {
      return
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const stickyOffset = Math.min(Math.max(viewportHeight * 0.1, 72), 104)
    const scrollableDistance = Math.max(track.offsetHeight - viewportHeight + stickyOffset, 1)
    const progress = REASONS.length <= 1 ? 0 : index / (REASONS.length - 1)
    const trackTop = track.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: trackTop - stickyOffset + scrollableDistance * progress,
      behavior: 'smooth'
    })
  }

  return (
    <section data-section-reveal-ignore className="relative bg-white">
      <BilditPurpleGlowOrb className="right-[10%] top-24" />
      <div
        ref={scrollTrackRef}
        className="relative overflow-x-clip py-16 md:min-h-[clamp(1060px,185vh,1540px)] md:py-0"
      >
        <div className="relative mx-auto grid max-w-[1260px] gap-12 px-4 md:sticky md:top-[clamp(72px,10vh,104px)] md:grid-cols-2 md:gap-8 md:px-8 md:py-20 lg:px-[116px]">
          <div className="flex max-w-[401px] flex-col gap-0">
            {REASONS.map((reason, i) => {
              const isActive = active === i
              const isDisplayed = displayedActive === i
              return (
                <button
                  key={reason.title}
                  type="button"
                  onClick={() => handleReasonSelect(i)}
                  className={`border-b border-[#f5f7fa] py-5 text-left transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <h3 className="font-uncut-sans text-xl font-bold leading-tight text-[#171717] md:text-[28px] md:leading-[44px]">
                    {reason.title}
                  </h3>
                  <p className="mt-1 font-uncut-sans text-lg text-[#171717]">{reason.subtitle}</p>
                  {isDisplayed && (
                    <div
                      className={cn(
                        'mt-5 space-y-3 transition-all duration-300 ease-out',
                        transitionPhase === 'out' && 'translate-y-1 opacity-0 blur-[2px]',
                        transitionPhase === 'in' && 'translate-y-0 opacity-100 blur-0'
                      )}
                    >
                      {'preambleBullets' in reason && reason.preambleBullets?.length ? (
                        <ul className="list-disc space-y-2 pl-5 font-uncut-sans text-base text-[#595959]">
                          {reason.preambleBullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                      {'intro' in reason && reason.intro ? (
                        <p className="font-uncut-sans text-lg text-[#171717]">{reason.intro}</p>
                      ) : null}
                      <ul className="list-disc space-y-2 pl-5 font-uncut-sans text-base text-[#595959]">
                        {reason.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <GradientCtaButton
                        href={BILDIT_SIGNUP_URL}
                        variant="figma-long"
                        className="mt-4 h-10 px-5 text-sm md:h-10 md:text-base"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Start Building
                      </GradientCtaButton>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[420px]">
            <div
              className={cn(
                'relative w-full max-w-[640px] overflow-hidden rounded-xl transition-all duration-300 ease-out',
                transitionPhase === 'out' && 'translate-y-2 opacity-0 blur-sm',
                transitionPhase === 'in' && 'translate-y-0 opacity-100 blur-0',
                displayedActive === 2 && 'shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5'
              )}
            >
              <div className="relative w-full">
                <Image
                  key={panel.src}
                  src={panel.src}
                  alt={panel.alt}
                  width={panel.width}
                  height={panel.height}
                  className={cn(
                    'block h-auto w-full',
                    displayedActive === 0 ? 'object-cover object-top' : 'object-contain object-center'
                  )}
                  sizes="(max-width: 768px) 100vw, 640px"
                  priority={displayedActive === 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
