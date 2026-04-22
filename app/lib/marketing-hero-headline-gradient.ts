import type { CSSProperties } from 'react'

/** Marketing hero headline clip — charcoal → bright purple (insights, webinars, tech partners, Vee, etc.). */
export const marketingHeroHeadlineGradientClassName = 'bg-clip-text text-transparent'

export const marketingHeroHeadlineGradientStyle: CSSProperties = {
  color: 'transparent',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(118deg, #1f1f1f 0%, #2a2430 38%, #5a4878 72%, #a080f0 100%)'
}

/** Subtitle / eyebrow on light marketing heroes. */
export const marketingHeroMutedTextClassName = 'text-[#141414]'

/**
 * Base layer behind the hero image — keep insights, webinars, and tech partners identical.
 */
export const marketingHeroBackdropBgClassName = 'bg-white'

/**
 * Layout + type scale for gradient titles (`w-fit` so the sweep reads on short words).
 * `text-shadow` matches `StorefrontHero` h1.
 */
export const marketingHeroTitleLayoutClassName =
  'mx-auto w-fit max-w-full pb-[3px] text-center font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.1] tracking-[-0.03em] [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_2px_14px_rgba(0,0,0,0.22)] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.12]'

/** Section headings on marketing pages (e.g. tech partners bands) — same gradient + shadow, smaller type. */
export const marketingHeroSectionTitleLayoutClassName =
  'mx-auto w-fit max-w-full pb-[3px] text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold tracking-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.35),0_2px_14px_rgba(0,0,0,0.22)] md:text-5xl md:leading-[1.15]'
