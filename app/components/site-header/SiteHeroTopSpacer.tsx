/**
 * Flow spacer matching `--site-hero-inset-top` (globals.css). Use instead of `padding-top` on full-bleed
 * heroes so `absolute inset-0` / WebGL layers don’t cover the fixed site header.
 */
export function SiteHeroTopSpacer() {
  return <div className="shrink-0 [height:var(--site-hero-inset-top)]" aria-hidden />
}
