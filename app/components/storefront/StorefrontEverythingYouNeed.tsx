'use client'

import { homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { MOBILE_APP_STOREFRONT_IMAGES } from '@/app/lib/storefront-remote-assets'
import { cn } from '@/utils/cn'
import { CalendarHeart, CreditCard, LayoutTemplate, Paintbrush } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const FEATURES = [
  {
    title: 'Simplified Content Management',
    body: 'Simplify your content management for greater efficiency.',
    icon: LayoutTemplate,
    updatesPreview: true,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.storefront,
    previewAlt: 'BILDIT live editor — simplified content management for your storefront'
  },
  {
    title: 'Easy to Use for Everyone',
    body: 'Sleek and user-friendly design to use by everybody.',
    icon: Paintbrush,
    /** Selecting this card does not switch the laptop preview image. */
    updatesPreview: false,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.banners,
    previewAlt: 'Elegant templates and banners in the BILDIT storefront'
  },
  {
    title: 'Real Control of Promotion Scheduling',
    body: 'Effortlessly manage and schedule promotions with the Visual Experience Engine.',
    icon: CalendarHeart,
    updatesPreview: true,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.sophisticatedScheduling,
    previewAlt: 'Banner scheduling and promotion controls in BILDIT'
  },
  {
    title: 'Intuitive Native Checkout',
    body: 'A seamless and user-friendly payment process designed for mobile apps.',
    icon: CreditCard,
    updatesPreview: true,
    previewSrc: MOBILE_APP_STOREFRONT_IMAGES.nativeCheckoutFeature5231,
    previewAlt: 'BILDIT native checkout — one-tap and review flows on mobile'
  }
] as const

/** Figma Section_2_1 (5143:16928). */
export function StorefrontEverythingYouNeed({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [previewIndex, setPreviewIndex] = useState(0)
  const preview = FEATURES[previewIndex]!

  return (
    <section
      className={cn('relative overflow-hidden bg-white py-16 md:py-24', className)}
      aria-labelledby="storefront-everything-heading"
    >
      <div
        className="pointer-events-none absolute left-[20%] top-[28%] size-[400px] rounded-full bg-[rgba(124,58,237,0.15)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[15%] top-[8%] size-[400px] rounded-full bg-[rgba(232,69,144,0.08)] blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1512px] px-3 sm:px-4">
        <h2
          id="storefront-everything-heading"
          className={cn(
            homeSectionTitleClassName,
            'px-4 text-center text-[40px] leading-tight md:text-[48px] md:leading-[48px]',
            'min-[1000px]:whitespace-nowrap'
          )}
        >
          Everything Your Team Needs.
        </h2>

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
                    'flex w-full flex-col gap-1.5 rounded-2xl border p-2.5 text-left transition-colors md:p-2.5',
                    'hover:border-[#7c3aed]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]',
                    isActive
                      ? 'border-transparent bg-[#f7ebf2] backdrop-blur-[10px]'
                      : 'border-black/10 bg-white'
                  )}
                >
                  <div className="flex items-center gap-0">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg text-[#7c3aed]">
                      <Icon className="size-6 stroke-[1.5]" aria-hidden />
                    </span>
                    <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold leading-6 text-neutral-900">
                      {title}
                    </p>
                  </div>
                  <p
                    className={cn(
                      'pl-2.5 font-[family-name:var(--font-uncut-sans)] text-base leading-6',
                      isActive ? 'text-neutral-900' : 'text-neutral-500'
                    )}
                  >
                    {body}
                  </p>
                </button>
              )
            })}
          </div>

          <div className="relative mx-auto w-full max-w-[726px] flex-1">
            <div className="relative aspect-[726/440] w-full">
              <div className="absolute inset-x-[4%] top-[8%] overflow-hidden rounded-lg shadow-[0px_19px_39px_rgba(0,0,0,0.1)]">
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
              <div className="absolute -bottom-1 right-0 w-[min(22%,168px)] drop-shadow-[0_4px_14px_rgba(88,89,92,0.35)] sm:right-[2%] sm:w-[min(22%,152px)]">
                <div className="relative">
                  <Image
                    src="/mobile-app-storefront/everything-phone.svg"
                    alt="Mobile storefront preview on phone"
                    width={152}
                    height={309}
                    className="h-auto w-full"
                  />
                  {/* Screen insets from `everything-phone.svg` Vector_4, viewBox 0 0 152.103 309.615 */}
                  <div
                    className="pointer-events-none absolute z-[1] overflow-hidden rounded-[0.2rem] sm:rounded-sm md:rounded-md"
                    style={{
                      top: '2.08%',
                      left: '5.06%',
                      width: '89.9%',
                      height: '95.7%'
                    }}
                    aria-hidden
                  >
                    <Image
                      src={MOBILE_APP_STOREFRONT_IMAGES.mobileAppEcommerce}
                      alt=""
                      width={274}
                      height={593}
                      className="h-full w-full object-cover object-top"
                      sizes="(max-width: 999px) 20vw, 160px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
