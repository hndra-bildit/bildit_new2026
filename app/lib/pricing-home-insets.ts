/** Hex for `/pricing` page + `PricingHtmlBodySurface` (keeps body overscroll the same as sections). */
export const PRICING_PAGE_SURFACE = '#f5f7fa'

/**
 * Single page background for `/pricing` — matches `PricingHtmlBodySurface` (html/body) and every section
 * so the top, middle, and bottom read as one surface (avoids white vs gray bands or seams under `min-h-screen`).
 */
export const PRICING_PAGE_SURFACE_CLASS = 'bg-[#f5f7fa]'

/**
 * Horizontal insets for `/pricing` content — matches `SiteHeader` when `isHomeLayout` (floating nav),
 * so pricing UI lines up with the top menu.
 */
export const PRICING_HOME_HEADER_INSET_CLASS =
  'pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:pl-[max(calc((1rem+20px)*0.42+30px),env(safe-area-inset-left,0px))] sm:pr-[max(calc((1rem+20px)*0.42+30px),env(safe-area-inset-right,0px))]'
