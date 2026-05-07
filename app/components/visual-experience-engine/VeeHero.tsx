import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import { VEE_HERO_BG, VEE_HERO_LIVE_EDITOR_IMAGE, VEE_HERO_VIDEO } from '@/app/lib/vee-hero-image'

/**
 * Full-frame Visual Experience Engine video hero.
 */
export function VeeHero() {
  return (
    <section
      id="visual-experience-engine-hero"
      data-header-surface="dark"
      className="relative m-0 flex min-h-svh w-full flex-col overflow-hidden rounded-none sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[#fafafa] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${VEE_HERO_BG}')` }}
      />
      <video
        className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
        src={VEE_HERO_VIDEO}
        poster={VEE_HERO_LIVE_EDITOR_IMAGE}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.52)_34%,rgba(0,0,0,0.16)_67%,rgba(0,0,0,0.05)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_32%,rgba(0,0,0,0.18)_100%)]"
      />

      {/* Half-height header inset spacer for this hero only. */}
      <div className="shrink-0 [height:calc(var(--site-hero-inset-top)*0.5)]" aria-hidden />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden px-4 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-7 sm:px-10 sm:py-12 lg:px-[90px] lg:py-20">
        <div className="flex min-h-full w-full flex-1 items-center">
          <div className="flex w-full max-w-[680px] flex-col items-start gap-8 text-left">
            <div className="flex w-full flex-col items-start gap-4">
              <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase leading-4 tracking-[0.28em] text-white/60">
                Visual Experience Engine
              </p>
              <h1 className="max-w-[620px] text-balance font-[family-name:var(--font-uncut-sans)] text-5xl font-bold leading-[1.1] tracking-[0] text-white md:text-6xl md:leading-[1.08] lg:text-[72px] lg:leading-[80.64px]">
                Build elevated content visually
              </h1>
            </div>
            <p className="max-w-[610px] font-[family-name:var(--font-uncut-sans)] text-lg font-light leading-[1.6] text-[#f0e6ff] md:text-2xl md:leading-[1.58]">
              Take control over digital marketing campaigns across web, mobile apps, email, and push notifications
              without waiting on deployments.
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <GradientCtaButton href={BILDIT_SIGNUP_URL} variant="figma-long" className="md:h-12 md:px-6">
                Try the Visual Editor now
              </GradientCtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
