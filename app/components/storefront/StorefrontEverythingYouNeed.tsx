'use client'

import { useState } from 'react'
import {
  homeSectionEyebrowClassName,
  homeSectionSubtitleClassName,
  homeSectionTitleClassName
} from '@/app/components/home/home-section-typography'
import { MOBILE_APP_STOREFRONT_IMAGES } from '@/app/lib/storefront-remote-assets'
import { cn } from '@/utils/cn'
import { CalendarHeart, CreditCard, LayoutTemplate, Paintbrush } from 'lucide-react'
import Image from 'next/image'

const FEATURES = [
  {
    title: 'Simplified Content Management',
    body: 'Simplify your content management for greater efficiency.',
    icon: LayoutTemplate,
    updatesPreview: true,
    centerPreviewVertically: false,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.simplifiedContentManagement,
    previewAlt: 'BILDIT live editor — simplified content management for your storefront'
  },
  {
    title: 'Easy to Use for Everyone',
    body: 'Sleek and user-friendly design to use by everybody.',
    icon: Paintbrush,
    /** Selecting this card does not switch the laptop preview image. */
    updatesPreview: false,
    centerPreviewVertically: false,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.banners,
    previewAlt: 'Elegant templates and banners in the BILDIT storefront'
  },
  {
    title: 'Real Control of Promotion Scheduling',
    body: 'Effortlessly manage and schedule promotions with the Visual Experience Engine.',
    icon: CalendarHeart,
    updatesPreview: true,
    centerPreviewVertically: false,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.promotionalScheduling,
    previewAlt: 'Banner scheduling and promotion controls in BILDIT'
  },
  {
    title: 'Intuitive Native Checkout',
    body: 'A seamless and user-friendly payment process designed for mobile apps.',
    icon: CreditCard,
    updatesPreview: true,
    centerPreviewVertically: true,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.nativeCheckoutFeature5231,
    previewAlt: 'BILDIT native checkout — one-tap and review flows on mobile'
  }
] as const

/** Mobile card stack order: “Easy to Use for Everyone” last; desktop uses source order. */
const MOBILE_CARD_ORDER_CLASS: readonly string[] = [
  'order-1 min-[1000px]:order-none',
  'order-4 min-[1000px]:order-none',
  'order-2 min-[1000px]:order-none',
  'order-3 min-[1000px]:order-none'
]

/** Figma Section_2_1 (5143:16928). */
export function StorefrontEverythingYouNeed({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previewIndex, setPreviewIndex] = useState(0)
  const preview = FEATURES[previewIndex]!

  return (
    <section
      className={cn('home-scheme-light relative overflow-hidden bg-white', className)}
      aria-labelledby="storefront-everything-heading"
      aria-describedby="storefront-everything-subtitle"
    >
      <div className="relative mx-auto max-w-[1512px] px-6 py-16 md:px-10 md:py-20 lg:px-[116px] lg:py-24">
        <div className="text-center">
          <p className={cn(homeSectionEyebrowClassName, 'mb-2 text-[#a07dc0] md:mb-3')}>MOBILE APP</p>
          <h2
            id="storefront-everything-heading"
            className={cn(
              homeSectionTitleClassName,
              'px-4 text-[40px] leading-tight md:text-[48px] md:leading-[48px]',
              'min-[1000px]:whitespace-nowrap'
            )}
          >
            Everything your team needs
          </h2>
          <p
            id="storefront-everything-subtitle"
            className={cn(homeSectionSubtitleClassName, 'mx-auto mt-3 px-4 md:mt-4')}
          >
            For a super fast, highly converting Mobile App
          </p>
        </div>

        <div className="mt-12 flex flex-col items-stretch gap-12 min-[1000px]:mt-16 min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:justify-between min-[1000px]:gap-6 min-[1000px]:px-6 xl:gap-8 xl:px-12">
          <div className="relative z-10 mx-auto flex w-full max-w-[356px] shrink-0 flex-col gap-4">
            {FEATURES.map(({ title, body, icon: Icon }, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index)
                    if (FEATURES[index]!.updatesPreview) {
                      setPreviewIndex(index)
                    }
                  }}
                  className={cn(
                    'flex w-full flex-col gap-2.5 rounded-2xl border border-[rgba(200,80,240,0.15)] p-2.5 text-left backdrop-blur-[10px] transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-[#c850f0] focus-visible:ring-offset-2',
                    MOBILE_CARD_ORDER_CLASS[index],
                    isActive ? 'bg-[#f3f0ff] shadow-[0px_0px_20px_rgba(200,80,240,0.12)]' : 'bg-white/70 hover:bg-white'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex shrink-0 rounded-xl p-2.5 text-[#431782]">
                      <Icon className="size-6 stroke-[1.75]" aria-hidden />
                    </span>
                    <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold leading-7 text-[#171717]">
                      {title}
                    </p>
                  </div>
                  <p className="pl-2.5 font-[family-name:var(--font-uncut-sans)] text-base font-normal leading-6 text-[#737373]">
                    {body}
                  </p>
                </button>
              )
            })}
          </div>

          <div className="relative mx-auto w-full max-w-[726px] flex-1">
            <div className="relative aspect-[726/440] w-full">
              <div
                className={cn(
                  'absolute inset-x-[4%] overflow-hidden rounded-lg',
                  preview.centerPreviewVertically ? 'top-1/2 -translate-y-1/2' : 'top-[8%]'
                )}
              >
                <Image
                  key={preview.previewSrc}
                  src={preview.previewSrc}
                  alt={preview.previewAlt}
                  width={1440}
                  height={800}
                  className="h-auto w-full object-cover object-top"
                  sizes="(max-width: 999px) 100vw, 720px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
