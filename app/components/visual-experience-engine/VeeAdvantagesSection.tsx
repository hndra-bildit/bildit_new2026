'use client'

import { useState } from 'react'
import { BilditPurpleGlowOrb } from '@/app/components/marketing/BilditMarketingGlows'
import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import {
  veeAdvantagesAdvancedScheduling,
  veeAdvantagesFastRuntimeLaptop,
  veeAdvantagesLaptopScreen
} from '@/app/lib/vee-advantages-assets'
import Image from 'next/image'

const REASONS = [
  {
    title: 'Visual Editor with Live Preview',
    subtitle: 'Build it. See it. Ship it.',
    bullets: [
      'True visual editing',
      'Manage updates as content, not code',
      'See changes exactly as they’ll render',
      'No lengthy rebuild cycles for minor content revisions',
      'Works with your existing architecture and CMS'
    ]
  },
  {
    title: 'Advanced Scheduling',
    subtitle: 'Take Control & Launch',
    bullets: [
      'Set start/end dates without deployments',
      'Plan and schedule drops, promos, and content',
      'Manage promotions as content, not code',
      'Empower marketing partners'
    ]
  },
  {
    title: 'Fast Runtime Rendering (SSR)',
    subtitle: 'Speed Isn’t an Option',
    intro: 'Milliseconds matter. BILDIT speeds up your existing site.',
    bullets: [
      'Render experiences fast across channels',
      'No bloated payloads',
      'Built for modern e-commerce frameworks'
    ]
  }
] as const

const PANEL_IMAGES: readonly { src: string; width: number; height: number; alt: string }[] = [
  {
    src: veeAdvantagesLaptopScreen,
    width: 1200,
    height: 780,
    alt: 'BILDIT visual editor with live preview on a storefront'
  },
  {
    src: veeAdvantagesAdvancedScheduling,
    width: 794,
    height: 794,
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
  const panel = PANEL_IMAGES[active]

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <BilditPurpleGlowOrb className="right-[10%] top-24" />
      <div className="relative mx-auto grid max-w-[1260px] gap-12 px-4 md:grid-cols-2 md:gap-8 md:px-8 lg:px-[116px]">
        <div className="flex max-w-[401px] flex-col gap-0">
          {REASONS.map((reason, i) => {
            const isActive = active === i
            return (
              <button
                key={reason.title}
                type="button"
                onClick={() => setActive(i)}
                className={`border-b border-[#f5f7fa] py-5 text-left transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <h3 className="font-uncut-sans text-xl font-bold leading-tight text-[#171717] md:text-[28px] md:leading-[44px]">
                  {reason.title}
                </h3>
                <p className="mt-1 font-uncut-sans text-lg text-[#171717]">{reason.subtitle}</p>
                {isActive && (
                  <div className="mt-5 space-y-3">
                    {'intro' in reason && reason.intro ? (
                      <p className="font-uncut-sans text-lg text-[#171717]">{reason.intro}</p>
                    ) : null}
                    <ul className="list-disc space-y-2 pl-5 font-uncut-sans text-base text-[#595959]">
                      {reason.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <GradientCtaButton
                      href="/pricing/"
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
          <div className="relative w-full max-w-[640px] overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            <div className="relative w-full">
              <Image
                key={panel.src}
                src={panel.src}
                alt={panel.alt}
                width={panel.width}
                height={panel.height}
                className={
                  active === 0 ? 'h-auto w-full object-cover object-top' : 'h-auto w-full object-contain object-center'
                }
                sizes="(max-width: 768px) 100vw, 640px"
                priority={active === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
