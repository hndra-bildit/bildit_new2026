/**
 * Central place to define "landing pages" where we intentionally remove
 * global chrome (header/nav + mode toggle) to keep focus on conversion.
 *
 * Add new LP routes here as they are created.
 */
const LANDING_PAGE_PATHS = new Set<string>([
  '/visual-experience-layer-visual-editor-beautiful-content-scheduling'
])

export function isLandingPagePath(pathname: string): boolean {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return LANDING_PAGE_PATHS.has(normalized)
}

