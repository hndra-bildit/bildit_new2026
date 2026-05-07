import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import {
  marketingHeroHeadlineGradientClassName,
  marketingHeroHeadlineGradientStyle,
  marketingHeroMutedTextClassName,
  marketingHeroTitleLayoutClassName
} from '@/app/lib/marketing-hero-headline-gradient'
import { VEE_HERO_BG, VEE_HERO_LIVE_EDITOR_IMAGE } from '@/app/lib/vee-hero-image'
import { cn } from '@/utils/cn'
import Image from 'next/image'

/**
 * Pink line-art field from `bg-pink.svg` + `#fafafa` base (`full` cover image + rounded shell).
 * Right visual: Figma 4995:19614 (Live Editor mockup with text-editing popover).
 */
export function VeeHero() {
  return (
    <section
      id="visual-experience-engine-hero"
      data-header-surface="light"
      className="relative m-0 flex min-h-svh w-full flex-col overflow-hidden rounded-none sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]"
    >
      {/* Full-section bleed — CSS background so the SVG reliably covers the whole hero (Next/Image + SVG can letterbox). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[#fafafa] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${VEE_HERO_BG}')` }}
      />

      {/* Half-height header inset spacer for this hero only. */}
      <div className="shrink-0 [height:calc(var(--site-hero-inset-top)*0.5)]" aria-hidden />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex min-h-full w-full flex-1 flex-col justify-center px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-7 sm:px-10 sm:py-12 md:py-16 lg:px-8 lg:py-20">
          <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 md:grid-cols-2 md:items-center md:gap-8 lg:gap-10 xl:gap-14">
            <div className="order-2 flex min-w-0 flex-col items-center gap-6 text-center md:order-1 md:items-start md:gap-8 md:pr-4 md:text-left lg:pr-6">
              <div className="flex w-full max-w-full flex-col items-center gap-3 md:items-start md:gap-4">
                <p
                  className={cn(
                    'font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.28em]',
                    marketingHeroMutedTextClassName
                  )}
                >
                  Visual Experience Engine
                </p>
                <h1
                  className={cn(
                    marketingHeroTitleLayoutClassName,
                    marketingHeroHeadlineGradientClassName,
                    'md:mx-0 md:text-left'
                  )}
                  style={marketingHeroHeadlineGradientStyle}
                >
                  Build elevated content visually
                </h1>
              </div>
              <p
                className={cn(
                  'font-[family-name:var(--font-uncut-sans)] text-lg font-light leading-[1.45] md:text-2xl md:leading-[1.58]',
                  marketingHeroMutedTextClassName
                )}
              >
                Take control over digital marketing campaigns across web, mobile apps, email, and push notifications
                without waiting on deployments.
              </p>
              <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start sm:gap-5">
                <GradientCtaButton href={BILDIT_SIGNUP_URL} variant="figma-long" className="md:h-12 md:px-6">
                  Try the Visual Editor now
                </GradientCtaButton>
              </div>
            </div>
            <div className="order-1 flex w-full min-w-0 justify-center md:order-2 md:justify-end">
              <div className="relative w-full max-w-[min(100%,600px)] md:max-w-none">
                <div className="relative aspect-[1000/766] w-full">
                  <Image
                    src={VEE_HERO_LIVE_EDITOR_IMAGE}
                    alt="BILDIT Live Editor with a promotional banner, drag-and-drop slots, and an inline text formatting popover"
                    fill
                    priority
                    unoptimized
                    className="object-contain [filter:drop-shadow(0_12px_40px_rgba(0,0,0,0.12))] md:object-right"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
