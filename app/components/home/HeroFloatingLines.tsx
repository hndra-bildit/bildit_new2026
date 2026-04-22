'use client'

/**
 * Full-bleed neon lines art (`public/images/lines-background.webp`) with a slow pan + pulse
 * so the hero reads as alive / “loading” without WebGL.
 */
export function HeroFloatingLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-none bg-[#120818] sm:rounded-[29px]"
      aria-hidden
    >
      <div className="hero-lines-bg-loading absolute inset-0" />
    </div>
  )
}
