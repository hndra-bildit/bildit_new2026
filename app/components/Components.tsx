/**
 * Barrel registered as `@bildit-platform` dependency `@components` in
 * `utils/cmsDependencies.tsx`. BILD `from-tsx` / CMS templates may import from
 * `@/app/components/Components` (or the CMS’s `@components` mapping)—never append
 * copied component code into `cmsDependencies.tsx`.
 */
export { cn } from '@/utils/cn'
export { homeHeroHeadlineGradientClassName, homeHeroHeadlineGradientStyle } from '@/app/lib/home-hero-headline-gradient'
export { HeroFloatingLines } from './home/HeroFloatingLines'
export { SiteHeroTopSpacer } from '@/app/components/site-header/SiteHeroTopSpacer'
