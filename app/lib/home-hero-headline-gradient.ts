import type { CSSProperties } from 'react'

/** Matches `HomeHero` accent word — reuse for gradient headline text on light backgrounds. */
export const homeHeroHeadlineGradientClassName = 'bg-clip-text text-transparent'

export const homeHeroHeadlineGradientStyle: CSSProperties = {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage:
    'linear-gradient(235.74deg, #e1beff 6.65%, #ffceff 47.31%, #ff80f4 60.52%, #ff00e1 100%)'
}
