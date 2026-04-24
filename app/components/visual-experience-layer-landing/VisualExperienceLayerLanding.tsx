'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { BilditLogo } from '@/app/components/site-header/BilditLogo'
import { VeeIntegrationsStrip } from '@/app/components/visual-experience-engine/VeeIntegrationsStrip'
import { BilditMarketingModal } from '@/app/components/visual-experience-layer-landing/BilditMarketingModal'
import { VeeLayerLeadForm } from '@/app/components/visual-experience-layer-landing/VeeLayerLeadForm'
import { veeAdvantagesLaptopScreen } from '@/app/lib/vee-advantages-assets'
import { veeHeroPrimaryArt } from '@/app/lib/vee-hero-assets'
import { cn } from '@/utils/cn'
import { Check } from 'lucide-react'
import Image from 'next/image'

const HERO_BG = '#2d004d'
const GRADIENT_TYPING_PHRASE = 'TO BOTH WEB AND APP'
const TYPING_MS = 100

const HERO_CHECKS = ['Carousels', 'Animated Heroes', 'Instagram Style Stories', 'Countdown Timers'] as const

const TEMPLATE_PREVIEW_IMAGES = [
  { src: '/images/home-workflow/panel-build.png', alt: 'Deals and promotional carousel template preview' },
  { src: '/images/home-workflow/panel-preview.png', alt: 'Fashion carousel template preview' },
  { src: '/images/home-workflow/panel-publish.png', alt: 'Instagram-style stories template preview' }
] as const

function TemplatesModalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width={48} height={48} viewBox="0 0 48 48" aria-hidden>
      <polygon points="24,3 43,13.5 43,34.5 24,45 5,34.5 5,13.5" fill="#5b2ab3" />
      <path d="M24 12L31 32H26.5L25.2 28H22.8L21.5 32H17L24 12ZM24 18.5L22.3 24H25.7L24 18.5Z" fill="white" />
    </svg>
  )
}

function EarlyAccessMark({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#ed1e79] shadow-sm', className)}
      aria-hidden
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="5" rx="1" fill="white" />
        <rect x="4" y="11.5" width="20" height="5" rx="1" fill="white" />
        <rect x="4" y="19" width="20" height="5" rx="1" fill="white" />
      </svg>
    </div>
  )
}

function useTypingAnimation(text: string) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    setTyped('')
    const intervalRef: { current: number | undefined } = { current: undefined }
    const delayId = window.setTimeout(() => {
      let i = 0
      intervalRef.current = window.setInterval(() => {
        i += 1
        setTyped(text.slice(0, i))
        if (i >= text.length && intervalRef.current) {
          window.clearInterval(intervalRef.current)
          intervalRef.current = undefined
        }
      }, TYPING_MS)
    }, 500)
    return () => {
      window.clearTimeout(delayId)
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [text])

  return typed
}

function CmsTileSection({
  kicker,
  title,
  body,
  bullets,
  imageOnRight = true
}: {
  kicker: string
  title: string
  body: string
  bullets: readonly string[]
  imageOnRight?: boolean
}) {
  const visual = (
    <div className="relative min-h-[220px] overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/5 md:min-h-[320px]">
      <Image
        src={veeAdvantagesLaptopScreen}
        alt=""
        width={1200}
        height={780}
        className="h-full w-full object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )

  const copy = (
    <div className="flex flex-col gap-4">
      <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-bold uppercase tracking-[0.12em] text-[#ed1e79]">
        {kicker}
      </p>
      <h2 className="font-[family-name:var(--font-gt-walsheim)] text-3xl font-extrabold leading-tight text-[#171717] md:text-4xl md:leading-[1.1]">
        {title}
      </h2>
      <p className="font-[family-name:var(--font-uncut-sans)] text-lg leading-relaxed text-[#595959]">{body}</p>
      <ul className="mt-2 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 font-[family-name:var(--font-uncut-sans)] text-base text-[#171717]">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)]">
              <Check className="size-3.5 stroke-[3]" aria-hidden />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className="border-t border-black/5 bg-white px-4 py-14 md:px-8 md:py-20 lg:px-[116px]">
      <div className="mx-auto grid max-w-[1260px] items-center gap-10 md:grid-cols-2 md:gap-14">
        {imageOnRight ? (
          <>
            {copy}
            {visual}
          </>
        ) : (
          <>
            {visual}
            {copy}
          </>
        )}
      </div>
    </section>
  )
}

export function VisualExperienceLayerLanding() {
  const [templatesOpen, setTemplatesOpen] = useState(false)
  const [earlyOpen, setEarlyOpen] = useState(false)
  const typedGradient = useTypingAnimation(GRADIENT_TYPING_PHRASE)

  return (
    <div className="min-h-screen overflow-x-clip text-neutral-900">
      <section data-header-surface="dark" className="relative w-full" style={{ backgroundColor: HERO_BG }}>
        <div
          className="pointer-events-none absolute left-[10%] top-1/4 size-[min(420px,70vw)] rounded-full opacity-30 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(237,30,121,0.35) 0%, transparent 70%)'
          }}
          aria-hidden
        />

        <div className="relative z-[1] px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32 lg:px-[60px]">
          <div
            className="mb-10 md:absolute md:left-[60px] md:top-8 md:mb-0 lg:left-[60px]"
            style={
              {
                ['--header-logo-bild' as string]: '#ffffff',
                ['--header-logo-it' as string]: '#ed1e79'
              } as CSSProperties
            }
          >
            <BilditLogo className="h-[26px] w-[118px] md:h-[30px] md:w-[134px]" />
          </div>

          <div className="mx-auto flex max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="flex max-w-[720px] flex-col gap-8 lg:max-w-[50%]">
              <h1 className="pt-4 font-[family-name:var(--font-gt-walsheim)] text-[1.6rem] font-extrabold uppercase leading-tight tracking-[-0.02em] text-white md:text-[2.35rem] md:leading-[1.05] lg:text-[3.2rem] lg:leading-[1] xl:text-[3.7rem]">
                PUBLISH ADVANCED CONTENT WITHOUT INVOLVING IT
                <span className="bg-gradient-to-br from-[#ff6bb3] to-[#6b4fff] bg-clip-text text-transparent">
                  {' '}
                  {typedGradient}
                </span>
                <span className="ml-1 inline-block animate-pulse font-normal text-[#ed1e79]">|</span>
              </h1>

              <p className="max-w-[640px] font-[family-name:var(--font-uncut-sans)] text-lg font-light leading-snug text-white md:text-[1.35rem] md:leading-relaxed lg:text-[1.7rem] [text-shadow:0_2px_15px_rgba(0,0,0,0.8)]">
                Build beautiful content at the speed of marketing. Independence from IT! Download our Figma templates to
                see the kind of content that you can build.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="button"
                  className="rounded-full bg-[#ed1e79] px-8 py-3 font-[family-name:var(--font-uncut-sans)] text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#d01a6b] md:px-12 md:py-3.5 md:text-xl lg:text-2xl"
                  onClick={() => setTemplatesOpen(true)}
                >
                  Get our templates
                </button>
                <button
                  type="button"
                  className="text-left font-[family-name:var(--font-uncut-sans)] text-base font-semibold text-white/90 underline decoration-[#ed1e79] decoration-2 underline-offset-4 transition hover:text-white sm:px-2"
                  onClick={() => setEarlyOpen(true)}
                >
                  Interested in our Early Access Program?
                </button>
              </div>

              <ul className="flex flex-col flex-wrap gap-4 sm:flex-row sm:gap-6">
                {HERO_CHECKS.map((label) => (
                  <li key={label} className="flex items-center gap-3">
                    <Check className="size-6 shrink-0 text-[#ed1e79]" strokeWidth={2.5} aria-hidden />
                    <span className="whitespace-nowrap font-[family-name:var(--font-uncut-sans)] text-base text-white md:text-lg [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-1 justify-center lg:max-w-[50%] lg:justify-end lg:pt-12">
              <div className="relative w-full max-w-[520px]">
                <Image
                  src={veeHeroPrimaryArt}
                  alt="Visual editor and scheduling preview"
                  width={800}
                  height={600}
                  className="h-auto w-full rounded-lg object-contain shadow-[0_6px_30px_rgba(0,0,0,0.3)]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="w-full bg-white">
        <section className="border-b border-black/5 px-4 py-14 text-center md:px-8 md:py-20 lg:px-[116px]">
          <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-bold uppercase tracking-[0.2em] text-[#737373]">
            Visual Experience Engine overview
          </p>
          <h2 className="mx-auto mt-4 max-w-[920px] font-[family-name:var(--font-gt-walsheim)] text-3xl font-extrabold leading-tight text-[#171717] md:text-[44px] md:leading-[1.1]">
            Create unified cross-channel content experiences that drive revenue
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] font-[family-name:var(--font-uncut-sans)] text-lg text-[#595959] md:text-xl">
            Launch more, launch faster. With the Visual Experience Engine, you can line up your next campaign in hours,
            not weeks.
          </p>
          <ul className="mx-auto mt-10 flex max-w-[900px] flex-col flex-wrap justify-center gap-4 sm:flex-row sm:gap-8 md:gap-12">
            {(
              [
                'Complete control over campaigns',
                'Advanced mobile app capabilities',
                'Easy cross-channel content management'
              ] as const
            ).map((label) => (
              <li
                key={label}
                className="flex items-center justify-center gap-2 font-[family-name:var(--font-uncut-sans)] text-sm font-semibold text-[#171717] md:text-base"
              >
                <span className="text-[#ed1e79]">✓</span>
                {label}
              </li>
            ))}
          </ul>
        </section>

        <CmsTileSection
          kicker="Easy cross-channel content management"
          title="Build and manage content for web and mobile app. In a single CMS."
          body="Create sophisticated and beautiful content with real-time preview across all channels. Preview actual content embedded in your website or mobile app for any schedule and any page."
          bullets={[
            'Streamlined template editing for advanced content without code',
            'Rapidly update your published content with multi-user access and modular editing',
            'Create advanced content like carousels, Instagram-style stories, video players, grid layouts, animations and more'
          ]}
          imageOnRight
        />

        <CmsTileSection
          kicker="Complete control over cross-channel campaigns"
          title="Launch what you want, when you want. Without waiting on other teams."
          body="Build, schedule, launch, and update revenue-driving campaigns across multiple channels."
          bullets={[
            'Rapidly launched on-brand, consistent campaigns with code-as-content snippets and simple-to-use advanced templating',
            'Manage multiple campaigns and schedule them in advance for seamless rollout',
            'Build sophisticated cross-channel campaigns and optimize them with AI-driven snippets'
          ]}
          imageOnRight={false}
        />

        <CmsTileSection
          kicker="Advanced mobile app capabilities"
          title="Get back control over your mobile app. Get higher conversions with personalization."
          body="Build, schedule, launch, and update revenue-driving campaigns tailored to how shoppers use your app."
          bullets={[
            'Create unique experiences by managing product and category display on web and mobile',
            'Add custom links to display banners on specific product or search result pages',
            'Set up conditional product display with e-commerce platform integrations'
          ]}
          imageOnRight
        />

        <VeeIntegrationsStrip />
      </main>

      <BilditMarketingModal
        open={templatesOpen}
        onOpenChange={setTemplatesOpen}
        labelledBy="vee-modal-templates-title"
        describedBy="vee-modal-templates-desc"
      >
        <div className="flex items-start gap-3 pr-8">
          <TemplatesModalIcon className="shrink-0" />
          <h2
            id="vee-modal-templates-title"
            className="font-[family-name:var(--font-gt-walsheim)] text-xl font-bold text-black md:text-2xl"
          >
            Download Templates
          </h2>
        </div>
        <p
          id="vee-modal-templates-desc"
          className="mt-5 font-[family-name:var(--font-uncut-sans)] text-base leading-relaxed text-[#666]"
        >
          Fill out the form below to get access to our Figma Templates. Carousels, Product Recommendations, Instagram
          Style Stories, Video Players, and more. Use these to build a design system for use with the BILDIT Visual
          Experience Layer. We won&apos;t spam you. :)
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          {TEMPLATE_PREVIEW_IMAGES.map(({ src, alt }) => (
            <div
              key={src}
              className="overflow-hidden rounded border border-[#e0e0e0] shadow-sm transition hover:shadow-md"
            >
              <Image src={src} alt={alt} width={100} height={100} className="size-20 object-cover md:size-[88px]" />
            </div>
          ))}
        </div>
        <VeeLayerLeadForm source="figma-templates" submitLabel="Request template access" className="mt-6" />
      </BilditMarketingModal>

      <BilditMarketingModal
        open={earlyOpen}
        onOpenChange={setEarlyOpen}
        labelledBy="vee-modal-early-title"
        describedBy="vee-modal-early-desc"
      >
        <div className="flex items-start gap-3 pr-8">
          <EarlyAccessMark />
          <h2
            id="vee-modal-early-title"
            className="font-[family-name:var(--font-gt-walsheim)] text-xl font-bold text-black md:text-2xl"
          >
            Interested in our Early Access Program?
          </h2>
        </div>
        <p
          id="vee-modal-early-desc"
          className="mt-5 font-[family-name:var(--font-uncut-sans)] text-base leading-relaxed text-[#666]"
        >
          If you&apos;re excited about creating and personalizing amazing content with a visual editor and live
          previews, <span className="font-semibold text-[#171717]">WE WANT YOU</span>. We are looking for 10 eCommerce
          brands who want to use our product for free for 6 months with our training and implementation. What do we get?
          We get your feedback, we add your ideas to our roadmap, and our investors love it!
        </p>
        <ul className="mt-6 space-y-3">
          {(
            ['Free Implementation', 'Free Training', 'Free 180 Day Trial', 'First 10 Approved Customers Only'] as const
          ).map((label) => (
            <li
              key={label}
              className="flex items-center gap-3 font-[family-name:var(--font-uncut-sans)] text-base text-[#171717]"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)]">
                ✓
              </span>
              {label}
            </li>
          ))}
        </ul>
        <VeeLayerLeadForm
          source="early-access"
          submitLabel="About our Early Access Program"
          className="mt-6"
          submitButtonClassName="border-2 border-[#1a0a2e]"
        />
      </BilditMarketingModal>
    </div>
  )
}
