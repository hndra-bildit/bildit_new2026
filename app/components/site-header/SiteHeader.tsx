'use client'

import { useEffect, useRef, useState } from 'react'
import { BilditLogo } from '@/app/components/site-header/BilditLogo'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import {
  SITE_MEGA_CAPABILITIES_ITEMS,
  SITE_MEGA_INSIGHTS_ITEMS,
  SITE_MEGA_PARTNER_ITEMS,
  SITE_MEGA_SOLUTION_ITEMS,
  type SiteMegaLinkItem
} from '@/app/lib/site-mega-nav-data'
import { VISUAL_EDITING_PROMO_IMAGE } from '@/app/lib/visual-editing-promo-image'
import { cn } from '@/utils/cn'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

type MegaKey = 'capabilities' | 'solutions' | 'partners' | 'insights'

const MEGA_CLOSE_MS = 220

/** Relative luminance 0–1; `null` if transparent / unparseable. */
function luminanceFromCssColor(color: string): number | null {
  if (!color || color === 'transparent') return null
  const m = color.match(/rgba?\(\s*([^)]+)\s*\)/)
  if (!m) return null
  const parts = m[1].split(',').map((s) => parseFloat(s.trim()))
  if (parts.length < 3) return null
  const r = parts[0]
  const g = parts[1]
  const b = parts[2]
  const a = parts.length >= 4 ? parts[3] : 1
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b) || a < 0.04) return null
  const lin = (c: number) => {
    const x = c / 255
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)
  }
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
}

function effectiveBackgroundLuminance(start: Element): number | null {
  let el: Element | null = start
  while (el && el !== document.documentElement) {
    const bg = getComputedStyle(el).backgroundColor
    const lum = luminanceFromCssColor(bg)
    if (lum !== null) return lum
    el = el.parentElement
  }
  const bodyBg = getComputedStyle(document.body).backgroundColor
  return luminanceFromCssColor(bodyBg)
}

/**
 * `true` → light page surface behind the nav (use dark pill + light ink in `header-scheme-light`).
 */
function isLightContentBehindHeader(headerRoot: HTMLElement): boolean {
  const pill = headerRoot.querySelector<HTMLElement>('[data-header-pill]')
  const rect = pill?.getBoundingClientRect() ?? headerRoot.getBoundingClientRect()
  const x = Math.min(Math.max(window.innerWidth / 2, 8), window.innerWidth - 8)
  const y = Math.min(rect.bottom + 16, window.innerHeight - 4)

  const stack = document.elementsFromPoint(x, y)
  for (const node of stack) {
    if (!(node instanceof Element)) continue
    if (headerRoot.contains(node)) continue

    const marked = node.closest<HTMLElement>('[data-header-surface]')
    if (marked) {
      return marked.dataset.headerSurface === 'light'
    }

    const lum = effectiveBackgroundLuminance(node)
    if (lum !== null) {
      return lum > 0.55
    }
  }

  return true
}

type MegaFeaturedCardProps = { onNavigate?: () => void }

/** Intrinsic size of `public/images/girl-designer-live-editing.jpg` — keeps layout uncropped. */
const PROMO_IMAGE_ASPECT = '430 / 415' as const

function MegaEarlyAccessPromo({ onNavigate, className }: { onNavigate?: () => void; className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 rounded-xl border px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4',
        className
      )}
      style={{
        borderColor: 'var(--header-mega-divider)',
        backgroundColor: 'var(--header-mega-row-hover)'
      }}
    >
      <p className="min-w-0 flex-1 text-sm leading-snug text-[var(--header-mega-text)]">
        We&apos;re opening up 10 early access spots for teams who are tired of fighting their CMS and want to help shape
        what comes next.
      </p>
      <Link
        href="/early-access-program/"
        className="font-[family-name:var(--font-inter)] inline-flex shrink-0 items-center justify-center self-start rounded-full px-4 py-2.5 text-sm font-semibold no-underline decoration-transparent transition-opacity hover:opacity-90 hover:no-underline focus-visible:no-underline sm:self-auto"
        style={{
          backgroundColor: 'var(--header-cta-bg)',
          color: 'var(--header-cta-fg)'
        }}
        onClick={onNavigate}
      >
        Join Now
      </Link>
    </div>
  )
}

function MegaFeaturedCard({ onNavigate }: MegaFeaturedCardProps) {
  return (
    <Link
      href="/visual-experience-engine/"
      className="relative block w-full overflow-hidden rounded-[18px] no-underline"
      style={{
        aspectRatio: PROMO_IMAGE_ASPECT,
        backgroundColor: 'var(--header-mega-bg)'
      }}
      onClick={onNavigate}
      aria-label="Visual Experience Engine"
    >
      <Image
        src={VISUAL_EDITING_PROMO_IMAGE}
        alt=""
        fill
        sizes="(min-width: 1024px) 320px, 100vw"
        className="object-contain object-center"
      />
    </Link>
  )
}

function MegaLinkList({ items, onNavigate }: { items: SiteMegaLinkItem[]; onNavigate?: () => void }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex gap-2.5 rounded-xl px-2.5 py-2 no-underline transition-colors duration-200"
            onClick={onNavigate}
          >
            <span
              className="mt-0.5 w-0.5 shrink-0 rounded-[10px]"
              style={{ backgroundColor: 'var(--header-accent-line)' }}
            />
            <div>
              <p className="font-[family-name:var(--font-uncut-sans)] text-base font-medium text-[var(--header-mega-text)] transition-colors duration-200 group-hover:text-[var(--header-mega-text-hover)]">
                {item.title}
              </p>
              <p className="text-xs leading-snug text-[var(--header-mega-muted)] transition-colors duration-200 group-hover:text-[var(--header-mega-muted-hover)]">
                {item.description}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

type MobileAccordionKey = 'capabilities' | 'solutions' | 'partners' | 'insights'

export function SiteHeader() {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const normalizedPath = pathname.replace(/\/$/, '') || '/'
  /** Inset + top padding aligned with `HomeHero` / solutions marketing hero (floating lines). */
  const isHomeLayout =
    normalizedPath === '/' ||
    normalizedPath === '/pricing' ||
    normalizedPath === '/solutions-for-marketers' ||
    normalizedPath === '/solutions-for-engineering' ||
    normalizedPath === '/visual-experience-engine' ||
    normalizedPath === '/visual-experience-layer-visual-editor-beautiful-content-scheduling' ||
    normalizedPath === '/mobile-app-storefront' ||
    normalizedPath === '/tech-partners' ||
    normalizedPath === '/early-access-program' ||
    normalizedPath === '/blog' ||
    normalizedPath === '/webinars'
  const isEngineering = normalizedPath === '/it' || normalizedPath === '/solutions-for-engineering'
  const [megaOpen, setMegaOpen] = useState(false)
  const [megaFocus, setMegaFocus] = useState<MegaKey>('capabilities')
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<MobileAccordionKey | null>(null)

  const headerRef = useRef<HTMLElement>(null)

  const clearClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const scheduleClose = () => {
    clearClose()
    closeTimer.current = setTimeout(() => setMegaOpen(false), MEGA_CLOSE_MS)
  }

  const openMega = (key: MegaKey) => {
    clearClose()
    setMegaFocus(key)
    setMegaOpen(true)
  }

  useEffect(() => {
    setMobileNavOpen(false)
    setMobileAccordion(null)
  }, [pathname])

  useEffect(() => {
    if (!mobileNavOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [mobileNavOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileNavOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    let raf = 0
    const applyScheme = () => {
      const root = headerRef.current
      if (!root) return
      const useLight = isLightContentBehindHeader(root)
      document.body.classList.toggle('header-scheme-light', useLight)
    }
    const schedule = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(applyScheme)
    }

    applyScheme()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.body.classList.remove('header-scheme-light')
    }
  }, [pathname])

  const toggleEngineering = () => {
    if (isEngineering) {
      router.push('/solutions-for-marketers/')
    } else {
      router.push('/solutions-for-engineering/')
    }
  }

  const toggleMobileAccordion = (key: MobileAccordionKey) => {
    setMobileAccordion((current) => (current === key ? null : key))
  }

  const mobileSimpleLinkClass = 'group flex gap-2.5 rounded-xl px-2.5 py-3 no-underline transition-colors duration-200'

  return (
    <header
      ref={headerRef}
      data-site-header
      className={cn(
        'pointer-events-none fixed inset-x-0 top-0 z-50 flex w-full min-w-0 max-w-full justify-center overflow-x-clip',
        isHomeLayout
          ? 'pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] pt-[20px] max-[430px]:pl-[max(1.5rem,env(safe-area-inset-left,0px))] max-[430px]:pr-[max(1.5rem,env(safe-area-inset-right,0px))] sm:pl-[max(calc((1rem+20px)*0.42+30px),env(safe-area-inset-left,0px))] sm:pr-[max(calc((1rem+20px)*0.42+30px),env(safe-area-inset-right,0px))] sm:pt-[calc((1rem+20px)*0.42+10px)]'
          : 'pl-[max(0.5rem,env(safe-area-inset-left,0px))] pr-[max(0.5rem,env(safe-area-inset-right,0px))] pt-[calc(0.5rem+20px)] max-[430px]:pl-[max(1.25rem,env(safe-area-inset-left,0px))] max-[430px]:pr-[max(1.25rem,env(safe-area-inset-right,0px))] sm:pl-[max(calc(1rem+20px),env(safe-area-inset-left,0px))] sm:pr-[max(calc(1rem+20px),env(safe-area-inset-right,0px))] sm:pt-[calc(1rem+20px)]'
      )}
    >
      <div className="pointer-events-auto relative w-full min-w-0 max-w-[1260px]" onMouseLeave={scheduleClose}>
        <div
          data-header-pill
          className="flex h-[70px] min-w-0 max-w-full items-center gap-1 rounded-[45px] px-3 max-[999px]:justify-between min-[400px]:px-3.5 sm:gap-2 sm:px-6 lg:px-10"
          style={{
            backgroundColor: 'var(--header-pill-bg)',
            boxShadow: 'var(--header-pill-shadow)'
          }}
        >
          <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-3 lg:flex-initial lg:gap-0">
            <button
              type="button"
              className="site-header-mobile-trigger site-header--hide-wide hidden size-10 shrink-0 items-center justify-center rounded-full transition-colors max-lg:inline-flex"
              aria-expanded={mobileNavOpen}
              aria-controls="site-mobile-nav"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
            <Link
              href="/"
              className="flex min-w-0 shrink items-center py-2 no-underline hover:no-underline focus-visible:no-underline max-lg:min-w-0"
              aria-label="BILDIT home"
            >
              <BilditLogo className="site-header--logo-compact max-lg:shrink" />
            </Link>
          </div>

          <nav
            className="site-header--nav-desktop font-[family-name:var(--font-inter)] hidden min-w-0 items-center justify-center gap-1 lg:flex"
            aria-label="Primary"
          >
            <div className="flex min-w-0 items-center gap-5 lg:gap-8 xl:gap-12 2xl:gap-16">
              <button
                type="button"
                className={cn(
                  'relative shrink-0 py-3 text-sm no-underline transition-colors duration-200 xl:text-base',
                  megaOpen && megaFocus === 'capabilities'
                    ? 'text-[var(--header-nav-hover)]'
                    : 'text-[var(--header-nav)] hover:text-[var(--header-nav-hover)]'
                )}
                aria-expanded={megaOpen && megaFocus === 'capabilities'}
                onMouseEnter={() => openMega('capabilities')}
                onFocus={() => openMega('capabilities')}
              >
                Platform
              </button>
              <button
                type="button"
                className={cn(
                  'relative shrink-0 py-3 text-sm no-underline transition-colors duration-200 xl:text-base',
                  megaOpen && megaFocus === 'solutions'
                    ? 'text-[var(--header-nav-hover)]'
                    : 'text-[var(--header-nav)] hover:text-[var(--header-nav-hover)]'
                )}
                aria-expanded={megaOpen && megaFocus === 'solutions'}
                onMouseEnter={() => openMega('solutions')}
                onFocus={() => openMega('solutions')}
              >
                Solutions
              </button>
              <button
                type="button"
                className={cn(
                  'relative shrink-0 py-3 text-sm no-underline transition-colors duration-200 xl:text-base',
                  megaOpen && megaFocus === 'partners'
                    ? 'text-[var(--header-nav-hover)]'
                    : 'text-[var(--header-nav)] hover:text-[var(--header-nav-hover)]'
                )}
                aria-expanded={megaOpen && megaFocus === 'partners'}
                onMouseEnter={() => openMega('partners')}
                onFocus={() => openMega('partners')}
              >
                Partners
              </button>
              <button
                type="button"
                className={cn(
                  'relative shrink-0 py-3 text-sm no-underline transition-colors duration-200 xl:text-base',
                  megaOpen && megaFocus === 'insights'
                    ? 'text-[var(--header-nav-hover)]'
                    : 'text-[var(--header-nav)] hover:text-[var(--header-nav-hover)]'
                )}
                aria-expanded={megaOpen && megaFocus === 'insights'}
                onMouseEnter={() => openMega('insights')}
                onFocus={() => openMega('insights')}
              >
                Insights
              </button>
              <Link
                href="/pricing/"
                className="shrink-0 py-3 text-sm text-[var(--header-nav)] no-underline decoration-transparent transition-colors duration-200 hover:text-[var(--header-nav-hover)] hover:no-underline focus-visible:no-underline xl:text-base"
                onMouseEnter={scheduleClose}
              >
                Pricing
              </Link>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-[3px] sm:gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={isEngineering}
              aria-label={isEngineering ? 'Switch to solutions for marketers' : 'Switch to solutions for engineering'}
              onClick={toggleEngineering}
              className="site-header--engineering relative hidden h-[22px] w-10 shrink-0 rounded-[11px] transition-colors duration-300 lg:inline-flex"
              style={{ backgroundColor: 'var(--header-toggle-track)' }}
            >
              <span
                className={cn(
                  'absolute top-px flex size-5 items-center justify-center rounded-full bg-white shadow transition-[left,transform] duration-300 ease-out',
                  isEngineering ? 'left-[19px]' : 'left-px'
                )}
              >
                {isEngineering ? (
                  <Moon className="size-3 text-violet-700" aria-hidden />
                ) : (
                  <Sun className="size-3 text-amber-500" aria-hidden />
                )}
              </span>
            </button>
            <Link
              href={BILDIT_SIGNUP_URL}
              className="font-[family-name:var(--font-inter)] inline-flex shrink-0 items-center justify-center rounded-full px-[15px] py-2.5 text-[10px] font-semibold leading-tight no-underline decoration-transparent transition-opacity hover:opacity-90 hover:no-underline focus-visible:no-underline min-[400px]:px-4 min-[400px]:py-3 min-[400px]:text-xs min-[420px]:text-sm sm:px-6 sm:py-2.5 sm:text-base lg:px-4 lg:text-sm xl:px-6 xl:text-base"
              style={{
                backgroundColor: 'var(--header-cta-bg)',
                color: 'var(--header-cta-fg)'
              }}
            >
              Start Free Trial
            </Link>
          </div>
        </div>

        <div
          className={cn(
            'site-header--mega-host absolute left-0 right-0 top-full hidden pt-3 transition-[opacity,transform] duration-300 ease-out lg:block',
            megaOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          )}
          onMouseEnter={clearClose}
        >
          <div
            data-mega-nav-panel
            className="site-header--mega-inner font-[family-name:var(--font-inter)] flex min-h-0 min-w-0 max-h-[min(80vh,520px)] w-full flex-col gap-8 overflow-y-auto rounded-[24px] px-5 py-7 sm:px-6 lg:flex-row lg:gap-10"
          >
            <div className="min-w-0 flex-1 space-y-3">
              <p className="text-xs font-normal uppercase tracking-wide" style={{ color: 'var(--header-mega-label)' }}>
                {megaFocus === 'capabilities'
                  ? 'Platform'
                  : megaFocus === 'solutions'
                    ? 'Solutions'
                    : megaFocus === 'partners'
                      ? 'Partners'
                      : 'Insights'}
              </p>
              <MegaLinkList
                items={
                  megaFocus === 'capabilities'
                    ? SITE_MEGA_CAPABILITIES_ITEMS
                    : megaFocus === 'solutions'
                      ? SITE_MEGA_SOLUTION_ITEMS
                      : megaFocus === 'partners'
                        ? SITE_MEGA_PARTNER_ITEMS
                        : SITE_MEGA_INSIGHTS_ITEMS
                }
                onNavigate={() => {
                  clearClose()
                  setMegaOpen(false)
                }}
              />
              {(megaFocus === 'capabilities' || megaFocus === 'solutions') && (
                <MegaEarlyAccessPromo
                  onNavigate={() => {
                    clearClose()
                    setMegaOpen(false)
                  }}
                />
              )}
            </div>

            {megaFocus !== 'partners' && megaFocus !== 'insights' && (
              <div className="site-header--mega-featured w-full min-w-0 shrink-0 self-start lg:max-w-[320px]">
                <MegaFeaturedCard
                  onNavigate={() => {
                    clearClose()
                    setMegaOpen(false)
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        id="site-mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          'site-header--mobile-sheet pointer-events-auto fixed inset-0 z-[60] hidden max-lg:flex max-lg:flex-col',
          mobileNavOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        )}
      >
        <button
          type="button"
          tabIndex={mobileNavOpen ? 0 : -1}
          className="absolute inset-0 bg-black/40 transition-opacity"
          aria-label="Close menu"
          onClick={() => setMobileNavOpen(false)}
        />
        <div
          data-mega-nav-panel
          className={cn(
            'relative flex w-full min-w-0 max-w-full flex-col rounded-t-[24px] transition-transform duration-300 ease-out',
            'max-[430px]:mx-auto max-[430px]:w-[calc(100%-2.5rem)]',
            isHomeLayout
              ? 'mt-[calc(70px+20px+12px)] min-h-[calc(100dvh-70px-20px-12px)] sm:mt-[calc(70px+(1rem+20px)*0.42+10px+12px)] sm:min-h-[calc(100dvh-70px-(1rem+20px)*0.42-10px-12px)]'
              : 'mt-[calc(70px+0.5rem+20px+12px)] min-h-[calc(100dvh-70px-0.5rem-20px-12px)] sm:mt-[calc(70px+1rem+20px+12px)] sm:min-h-[calc(100dvh-70px-1rem-20px-12px)]',
            mobileNavOpen ? 'translate-y-0' : 'translate-y-4'
          )}
        >
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 max-[430px]:px-5 sm:px-6">
            <div className="font-[family-name:var(--font-inter)] space-y-1">
              <div className="border-b" style={{ borderColor: 'var(--header-mega-divider)' }}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-4 text-left"
                  aria-expanded={mobileAccordion === 'capabilities'}
                  onClick={() => toggleMobileAccordion('capabilities')}
                >
                  <span
                    className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold"
                    style={{ color: 'var(--header-mega-text)' }}
                  >
                    Platform
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 transition-transform duration-200',
                      mobileAccordion === 'capabilities' && '-rotate-180'
                    )}
                    aria-hidden
                    style={{ color: 'var(--header-mega-muted)' }}
                  />
                </button>
                {mobileAccordion === 'capabilities' && (
                  <>
                    <ul className="space-y-1">
                      {SITE_MEGA_CAPABILITIES_ITEMS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={mobileSimpleLinkClass}
                            onClick={() => setMobileNavOpen(false)}
                          >
                            <span
                              className="mt-1.5 h-8 w-0.5 shrink-0 self-start rounded-[10px]"
                              style={{ backgroundColor: 'var(--header-accent-line)' }}
                            />
                            <div className="min-w-0">
                              <p className="font-[family-name:var(--font-uncut-sans)] text-base font-medium text-[var(--header-mega-text)] transition-colors duration-200 group-hover:text-[var(--header-mega-text-hover)]">
                                {item.title}
                              </p>
                              <p className="text-sm leading-snug text-[var(--header-mega-muted)] transition-colors duration-200 group-hover:text-[var(--header-mega-muted-hover)]">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <MegaEarlyAccessPromo className="mt-3 pb-4" onNavigate={() => setMobileNavOpen(false)} />
                  </>
                )}
              </div>

              <div className="border-b" style={{ borderColor: 'var(--header-mega-divider)' }}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-4 text-left"
                  aria-expanded={mobileAccordion === 'solutions'}
                  onClick={() => toggleMobileAccordion('solutions')}
                >
                  <span
                    className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold"
                    style={{ color: 'var(--header-mega-text)' }}
                  >
                    Solutions
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 transition-transform duration-200',
                      mobileAccordion === 'solutions' && '-rotate-180'
                    )}
                    aria-hidden
                    style={{ color: 'var(--header-mega-muted)' }}
                  />
                </button>
                {mobileAccordion === 'solutions' && (
                  <>
                    <ul className="space-y-1">
                      {SITE_MEGA_SOLUTION_ITEMS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={mobileSimpleLinkClass}
                            onClick={() => setMobileNavOpen(false)}
                          >
                            <span
                              className="mt-1.5 h-8 w-0.5 shrink-0 self-start rounded-[10px]"
                              style={{ backgroundColor: 'var(--header-accent-line)' }}
                            />
                            <div className="min-w-0">
                              <p className="font-[family-name:var(--font-uncut-sans)] text-base font-medium text-[var(--header-mega-text)] transition-colors duration-200 group-hover:text-[var(--header-mega-text-hover)]">
                                {item.title}
                              </p>
                              <p className="text-sm leading-snug text-[var(--header-mega-muted)] transition-colors duration-200 group-hover:text-[var(--header-mega-muted-hover)]">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <MegaEarlyAccessPromo className="mt-3 pb-4" onNavigate={() => setMobileNavOpen(false)} />
                  </>
                )}
              </div>

              <div className="border-b" style={{ borderColor: 'var(--header-mega-divider)' }}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-4 text-left"
                  aria-expanded={mobileAccordion === 'partners'}
                  onClick={() => toggleMobileAccordion('partners')}
                >
                  <span
                    className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold"
                    style={{ color: 'var(--header-mega-text)' }}
                  >
                    Partners
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 transition-transform duration-200',
                      mobileAccordion === 'partners' && '-rotate-180'
                    )}
                    aria-hidden
                    style={{ color: 'var(--header-mega-muted)' }}
                  />
                </button>
                {mobileAccordion === 'partners' && (
                  <ul className="space-y-1 pb-4">
                    {SITE_MEGA_PARTNER_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={mobileSimpleLinkClass}
                          onClick={() => setMobileNavOpen(false)}
                        >
                          <span
                            className="mt-1.5 h-8 w-0.5 shrink-0 self-start rounded-[10px]"
                            style={{ backgroundColor: 'var(--header-accent-line)' }}
                          />
                          <div className="min-w-0">
                            <p className="font-[family-name:var(--font-uncut-sans)] text-base font-medium text-[var(--header-mega-text)] transition-colors duration-200 group-hover:text-[var(--header-mega-text-hover)]">
                              {item.title}
                            </p>
                            <p className="text-sm leading-snug text-[var(--header-mega-muted)] transition-colors duration-200 group-hover:text-[var(--header-mega-muted-hover)]">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-b" style={{ borderColor: 'var(--header-mega-divider)' }}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-4 text-left"
                  aria-expanded={mobileAccordion === 'insights'}
                  onClick={() => toggleMobileAccordion('insights')}
                >
                  <span
                    className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold"
                    style={{ color: 'var(--header-mega-text)' }}
                  >
                    Insights
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 transition-transform duration-200',
                      mobileAccordion === 'insights' && '-rotate-180'
                    )}
                    aria-hidden
                    style={{ color: 'var(--header-mega-muted)' }}
                  />
                </button>
                {mobileAccordion === 'insights' && (
                  <ul className="space-y-1 pb-4">
                    {SITE_MEGA_INSIGHTS_ITEMS.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={mobileSimpleLinkClass}
                          onClick={() => setMobileNavOpen(false)}
                        >
                          <span
                            className="mt-1.5 h-8 w-0.5 shrink-0 self-start rounded-[10px]"
                            style={{ backgroundColor: 'var(--header-accent-line)' }}
                          />
                          <div className="min-w-0">
                            <p className="font-[family-name:var(--font-uncut-sans)] text-base font-medium text-[var(--header-mega-text)] transition-colors duration-200 group-hover:text-[var(--header-mega-text-hover)]">
                              {item.title}
                            </p>
                            <p className="text-sm leading-snug text-[var(--header-mega-muted)] transition-colors duration-200 group-hover:text-[var(--header-mega-muted-hover)]">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                href="/pricing/"
                className={cn(mobileSimpleLinkClass, 'border-b')}
                style={{ borderColor: 'var(--header-mega-divider)' }}
                onClick={() => setMobileNavOpen(false)}
              >
                <span
                  className="mt-2 h-5 w-0.5 shrink-0 self-start rounded-[10px]"
                  style={{ backgroundColor: 'var(--header-accent-line)' }}
                />
                <span className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold text-[var(--header-mega-text)] transition-colors duration-200 group-hover:text-[var(--header-mega-text-hover)]">
                  Pricing
                </span>
              </Link>
            </div>

            <div className="mt-6 w-full shrink-0">
              <MegaFeaturedCard onNavigate={() => setMobileNavOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
