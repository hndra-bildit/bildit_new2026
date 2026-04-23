import type { CSSProperties } from 'react'
import { HomeWorkflowShowcase } from '@/app/components/home/HomeWorkflowShowcase'
import {
  InstaStoriesShoulderCapsBottom,
  InstaStoriesShoulderCapsTop
} from '@/app/components/home/InstaStoriesSectionShoulderCaps'
import { SiteHeroTopSpacer } from '@/app/components/site-header/SiteHeroTopSpacer'
import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { MarketersFeaturesBentoSection } from '@/app/components/solutions/MarketersFeaturesBentoSection'
import { MarketersReactContentBenefitsSection } from '@/app/components/solutions/MarketersReactContentBenefitsSection'
import { MarketersSolutionsCtaForm } from '@/app/components/solutions/MarketersSolutionsCtaForm'
import { MarketersSolutionsTestimonialsSection } from '@/app/components/solutions/MarketersSolutionsTestimonialsSection'
import { SolutionsDemoVideo } from '@/app/components/solutions/SolutionsDemoVideo'
import { VeeAdvantagesSection } from '@/app/components/visual-experience-engine/VeeAdvantagesSection'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import { MARKETERS_SOLUTIONS_HERO_BG } from '@/app/lib/marketers-solutions-hero-bg'
import {
  marketingHeroHeadlineGradientClassName,
  marketingHeroHeadlineGradientStyle
} from '@/app/lib/marketing-hero-headline-gradient'
import {
  homeSectionEyebrowClassName,
  homeSectionSubtitleClassName,
  homeSectionSubtitleOnDarkClassName,
  homeSectionTitleClassName,
  homeSectionTitleOnDarkClassName
} from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import { Check } from 'lucide-react'
import Image from 'next/image'

/** Marketers hero accent line — original pink → indigo clip (first two lines use shared marketing gradient). */
const MARKETERS_HERO_ACCENT_LINE_STYLE: CSSProperties = {
  color: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage: 'linear-gradient(170deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)',
  /** Drop parent `h1` translucent shadow so the gradient stays vivid. */
  textShadow: 'none'
}

const PLATFORM_LOGOS = [
  {
    src: 'https://www.figma.com/api/mcp/asset/c294dfae-be53-45a9-8cd5-c844a910fc69',
    alt: 'Salesforce',
    width: 40,
    height: 32
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/93db64c6-025a-4078-8232-6c349c5cb0ce',
    alt: 'Shopify Plus',
    width: 126,
    height: 32
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/08909bc1-4666-4f57-84b1-d064be0316d3',
    alt: 'SAP',
    width: 71,
    height: 32
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/d84997b8-6d72-48a2-9b5d-ce3f415258a5',
    alt: 'Adobe Commerce',
    width: 114,
    height: 32
  }
] as const

const MARKETERS_DEMO_VIDEO_SRC =
  'https://storage.googleapis.com/compilepoc-2d379.appspot.com/bildit-website-staging%2FMensImage1%2FCMA-ChangeBanner_Reorder.mp4'

const MARKETERS_VIDEO_FRAME_CLASS =
  'relative h-[280px] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#171717] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.08)] md:h-[438px]'

const MAIN_LIST = [
  'Visual Experience Engine',
  'Instant publishing infrastructure',
  'Performance guardrails built-in',
  'Sophisticated template system',
  'Live preview that actually works'
] as const

const BONUS_LIST = [
  'Elevated template starter pack',
  'White-glove onboarding',
  'Direct access to our engineering team'
] as const

export function MarketersSolutionsContent() {
  return (
    <main className="bg-white text-neutral-900">
      <section
        id="marketers-solutions-hero"
        data-header-surface="light"
        className="relative m-0 flex min-h-svh w-full flex-col overflow-hidden rounded-none sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:min-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#fafafa]" aria-hidden />
          <Image
            src={MARKETERS_SOLUTIONS_HERO_BG}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1536px) 100vw, 1512px"
          />
        </div>
        <SiteHeroTopSpacer />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="flex w-full flex-1 flex-col items-center justify-center gap-14 px-4 py-16 text-center sm:px-10 sm:py-20 md:gap-[60px]">
            <div className="flex max-w-[1238px] flex-col items-center gap-8 md:gap-8">
              <h1 className="mx-auto w-fit max-w-full pb-[3px] text-center font-uncut-sans text-4xl font-bold leading-[1.05] tracking-[-0.04em] [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_2px_14px_rgba(0,0,0,0.22)] md:text-6xl md:leading-[1.08] lg:text-[72px] lg:leading-[78px]">
                <span
                  className={cn('block', marketingHeroHeadlineGradientClassName)}
                  style={marketingHeroHeadlineGradientStyle}
                >
                  Never be held back
                </span>
                <span
                  className={cn('block', marketingHeroHeadlineGradientClassName)}
                  style={marketingHeroHeadlineGradientStyle}
                >
                  by your headless platform again...
                </span>
                <span
                  className={cn(
                    'mt-1 block pb-[3px] leading-[1.12] lg:leading-[1.14]',
                    marketingHeroHeadlineGradientClassName
                  )}
                  style={MARKETERS_HERO_ACCENT_LINE_STYLE}
                >
                  Launch campaigns faster
                </span>
              </h1>
              <p className="max-w-[480px] font-uncut-sans text-lg text-black md:text-xl md:leading-[31px]">
                Ever missed a trend? Fixed it for you!
              </p>
              <GradientCtaButton href={BILDIT_SIGNUP_URL}>Start a Free Trial</GradientCtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 py-16 md:px-8 md:py-[100px]">
        <div className="w-full max-w-[780px]">
          <SolutionsDemoVideo
            playWhenVisible
            src={MARKETERS_DEMO_VIDEO_SRC}
            frameClassName={MARKETERS_VIDEO_FRAME_CLASS}
          />
        </div>
      </section>

      <MarketersReactContentBenefitsSection />

      <section className="relative overflow-hidden bg-[#0d0118] px-4 py-16 text-white md:px-[232px] md:py-[100px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute -right-[60px] -top-20 size-[500px] rounded-full opacity-30 blur-[36px]"
            style={{
              background: 'radial-gradient(circle, rgba(237,30,121,0.35) 0%, transparent 70%)'
            }}
          />
          <div
            className="absolute bottom-[-60px] left-10 size-[400px] rounded-full opacity-25 blur-[36px]"
            style={{
              background: 'radial-gradient(circle, rgba(59,30,237,0.4) 0%, transparent 70%)'
            }}
          />
        </div>
        <div className="relative mx-auto flex max-w-[1048px] flex-col items-center gap-5">
          <h2 className={cn(homeSectionTitleOnDarkClassName, 'text-center')}>
            <span className="text-[#f0e6ff]">Fast: Builds, Loads, Launches.</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(172deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)'
              }}
            >
              Zero Friction
            </span>
            <span className="text-[#f0e6ff]">.</span>
          </h2>
          <p className={cn(homeSectionSubtitleOnDarkClassName, 'text-center text-[#a07dc0]')}>
            What teams see after switching to BILDIT Visual Experience Engine.
          </p>
          <div className="mt-8 grid w-full grid-cols-1 gap-8 border-white/10 pt-4 md:grid-cols-3 md:gap-2 md:pt-[52px]">
            {[
              {
                stat: '7×',
                label: 'Faster publishing',
                desc: 'From idea to live experience in minutes, not days.'
              },
              {
                stat: '0',
                label: 'Dev tickets per campaign',
                desc: 'Marketing teams operate fully independently.'
              },
              {
                stat: '+33%',
                label: 'Faster page loads',
                desc: 'Personalized, scheduled content that loads so fast.'
              }
            ].map((col, i) => (
              <div
                key={col.label}
                className={`flex flex-col items-center px-6 text-center ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}
              >
                <p className="font-uncut-sans text-6xl font-bold leading-[64px] text-white md:text-[96px]">
                  {col.stat}
                </p>
                <p className="mt-4 text-lg font-semibold text-white">{col.label}</p>
                <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-white/90">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeWorkflowShowcase showSocialStrip={false} />

      <VeeAdvantagesSection />

      <section className="relative w-full overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF background */}
          <img src="/images/insta-stories.gif" alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <InstaStoriesShoulderCapsTop />
        <div className="relative z-10 w-full overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-[20%] z-0 size-[min(600px,90vw)] -translate-x-1/2 rounded-full bg-[rgba(200,80,240,0.06)] blur-[140px]"
            aria-hidden
          />
          <div className="relative z-[1] flex flex-col items-center px-4 pb-16 pt-10 md:px-[116px] md:pb-20 md:pt-12">
            <div className="w-full max-w-[1280px] rounded-3xl bg-white px-6 py-12 shadow-[0px_0px_150px_0px_rgba(232,69,144,0.08),0px_0px_80px_0px_rgba(200,80,240,0.15)] md:px-12 md:py-16">
              <div className="mx-auto max-w-[768px] text-center">
                <h2 className={cn(homeSectionTitleClassName, 'text-center')}>
                  Everything you need. Nothing holding you back.
                </h2>
                <p className={cn(homeSectionSubtitleClassName, 'mt-6 text-center')}>You get:</p>
              </div>
              <div className="mx-auto mt-10 max-w-[970px] rounded-2xl border border-black/10 bg-[#0d0118] p-8 md:p-10">
                <div className="grid gap-10 md:grid-cols-2">
                  <ul className="flex flex-col gap-4">
                    {MAIN_LIST.map((item) => (
                      <li key={item} className="flex gap-3 text-[#f0e6ff]">
                        <Check className="mt-0.5 size-5 shrink-0 text-[#c850f0]" aria-hidden />
                        <span className="text-base leading-6">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.07em] text-[#171717]">Bonus:</p>
                    <ul className="mt-4 flex flex-col gap-3">
                      {BONUS_LIST.map((item) => (
                        <li key={item} className="flex gap-3 text-[#f0e6ff]">
                          <Check className="mt-0.5 size-5 shrink-0 text-[#e84590]" aria-hidden />
                          <span className="text-base leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-10 text-center text-lg font-normal leading-relaxed text-white">
                  Build beautiful content at the speed of marketing.
                  <br />
                  <br />
                  Download our Figma templates to see the kind of content that you can build.
                </p>
              </div>
              <div className="mt-10 flex justify-center">
                <GradientCtaButton href="/pricing/">Get the Templates</GradientCtaButton>
              </div>
            </div>
          </div>
        </div>
        <InstaStoriesShoulderCapsBottom className="-mt-px" />
      </section>

      <MarketersFeaturesBentoSection />

      <MarketersSolutionsTestimonialsSection />

      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-[116px] md:py-[100px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -left-20 -top-24 size-[580px] rounded-full opacity-20 blur-[36px]"
            style={{ background: 'radial-gradient(circle, rgba(200,80,240,0.45) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -right-16 size-[480px] rounded-full opacity-20 blur-[36px]"
            style={{ background: 'radial-gradient(circle, rgba(237,30,121,0.4) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-5 md:px-0">
          <p className={cn(homeSectionEyebrowClassName, 'text-neutral-900')}>Get started</p>
          <h2 className="text-center font-uncut-sans text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-[72px] md:leading-[72px]">
            <span className="block text-[#171717]">Ready to build</span>
            <span className="bg-gradient-to-r from-[#e84590] to-[#c850f0] bg-clip-text text-transparent">
              content fast?
            </span>
          </h2>
          <p className={cn(homeSectionSubtitleClassName, 'text-center')}>
            We work with a limited number of teams each month. Secure your spot today.
          </p>
          <MarketersSolutionsCtaForm source="marketers-solutions" />
        </div>
      </section>

      <section className="border-y border-black/5 bg-white px-4 py-10 md:px-[116px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6">
          <p className={cn(homeSectionEyebrowClassName, 'text-center text-[#595959]')}>
            Integrated with the top eCommerce Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            {PLATFORM_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
