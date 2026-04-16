'use client'

import { useEffect, useRef, useState } from 'react'
import { BilditLogo } from '@/app/components/site-header/BilditLogo'
import { VISUAL_EDITING_PROMO_IMAGE } from '@/app/lib/visual-editing-promo-image'
import { cn } from '@/utils/cn'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

type MegaKey = 'capabilities' | 'solutions' | 'partners'

type MegaLinkItem = {
  href: string
  title: string
  description: string
}

const CAPABILITIES_ITEMS: MegaLinkItem[] = [
  {
    href: '/commerce-suite/',
    title: 'Visual Experience Engine',
    description: 'Build Templates in React and let the marketing team edit them visually.'
  },
  {
    href: '/storefront/',
    title: 'Mobile App Storefront',
    description:
      'Optimized React Native Mobile App Storefront: fast and modern UI/UX built-in, high conversion with one click checkout'
  }
]

const SOLUTION_ITEMS: MegaLinkItem[] = [
  {
    href: '/brands/',
    title: 'Marketing Team',
    description: 'Update your site without engineering tickets. Schedule and Preview Content in Realtime.'
  },
  {
    href: '/it/',
    title: 'Engineering Team',
    description: 'Build advanced templates in React and React Native. Push out template updates without a deployment.'
  }
]

const PARTNER_ITEMS: MegaLinkItem[] = [
  {
    href: '/tech-partners/',
    title: 'Tech Partners',
    description: 'Explore integrations and technology partners that extend the BILDIT platform.'
  },
  {
    href: '/integration-partners/',
    title: 'Become a Partner',
    description: 'Join our partner program and build solutions on top of BILDIT.'
  },
  {
    href: '/our-story/',
    title: 'Webinars',
    description: 'Watch sessions on commerce, content, and getting the most from the platform.'
  }
]

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

/** Intrinsic size of `public/images/Girl Designer Live Editing.png` — keeps layout uncropped. */
const PROMO_IMAGE_ASPECT = '430 / 415' as const

function MegaFeaturedCard({ onNavigate }: MegaFeaturedCardProps) {
  return (
    <Link
      href="/cms/"
      className="relative block w-full overflow-hidden rounded-[18px] no-underline"
      style={{
        aspectRatio: PROMO_IMAGE_ASPECT,
        backgroundColor: 'var(--header-mega-bg)'
      }}
      onClick={onNavigate}
      aria-label="Visual editing and live preview"
    >
      <Image
        src={VISUAL_EDITING_PROMO_IMAGE}
        alt=""
        width={430}
        height={415}
        sizes="(min-width: 1024px) 320px, 100vw"
        className="absolute inset-0 m-auto h-full w-full object-contain object-center"
      />
    </Link>
  )
}

function MegaLinkList({ items }: { items: MegaLinkItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex gap-2.5 rounded-xl px-2.5 py-2 no-underline transition-colors duration-200"
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

type MobileAccordionKey = 'capabilities' | 'solutions' | 'partners'

export function SiteHeader() {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const isHome = pathname.replace(/\/$/, '') === ''
  const isEngineering = pathname.replace(/\/$/, '') === '/it'
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
      router.push('/')
    } else {
      router.push('/it/')
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
        'pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center',
        isHome
          ? 'px-3 pt-[10px] sm:px-[calc((1rem+20px)*0.42+40px)] sm:pt-[calc((1rem+20px)*0.42+20px)]'
          : 'px-2 pt-[calc(0.5rem+10px)] sm:px-[calc(1rem+20px)] sm:pt-[calc(1rem+20px)]'
      )}
    >
      <div className="pointer-events-auto relative w-full max-w-[1260px]" onMouseLeave={scheduleClose}>
        <div
          data-header-pill
          className="flex h-[70px] items-center justify-between gap-1 rounded-[45px] pl-1.5 pr-1.5 sm:gap-2 sm:pl-6 sm:pr-4 lg:pl-10"
          style={{
            backgroundColor: 'var(--header-pill-bg)',
            boxShadow: 'var(--header-pill-shadow)'
          }}
        >
          <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-3 lg:flex-initial lg:gap-0">
            <button
              type="button"
              className="site-header-mobile-trigger flex size-10 shrink-0 items-center justify-center rounded-full transition-colors lg:hidden"
              aria-expanded={mobileNavOpen}
              aria-controls="site-mobile-nav"
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
            <Link
              href="/"
              className="flex min-w-0 shrink-0 items-center py-2 no-underline hover:no-underline focus-visible:no-underline"
              aria-label="BILDIT home"
            >
              <BilditLogo className="max-lg:h-[24px] max-lg:w-[107px]" />
            </Link>
          </div>

          <nav className="font-[family-name:var(--font-inter)] hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div className="flex items-center gap-6 xl:gap-8">
              <button
                type="button"
                className={cn(
                  'relative py-3 text-base no-underline transition-colors duration-200',
                  megaOpen && megaFocus === 'capabilities'
                    ? 'text-[var(--header-nav-hover)]'
                    : 'text-[var(--header-nav)] hover:text-[var(--header-nav-hover)]'
                )}
                aria-expanded={megaOpen && megaFocus === 'capabilities'}
                onMouseEnter={() => openMega('capabilities')}
                onFocus={() => openMega('capabilities')}
              >
                Capabilities
              </button>
              <button
                type="button"
                className={cn(
                  'relative py-3 text-base no-underline transition-colors duration-200',
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
                  'relative py-3 text-base no-underline transition-colors duration-200',
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
              <Link
                href="/blog/"
                className="py-3 text-base text-[var(--header-nav)] no-underline decoration-transparent transition-colors duration-200 hover:text-[var(--header-nav-hover)] hover:no-underline focus-visible:no-underline"
                onMouseEnter={scheduleClose}
              >
                Insights
              </Link>
              <Link
                href="/pricing/"
                className="py-3 text-base text-[var(--header-nav)] no-underline decoration-transparent transition-colors duration-200 hover:text-[var(--header-nav-hover)] hover:no-underline focus-visible:no-underline"
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
              aria-label={isEngineering ? 'Switch to marketing site' : 'Switch to engineering site'}
              onClick={toggleEngineering}
              className="relative hidden h-[22px] w-10 shrink-0 rounded-[11px] transition-colors duration-300 lg:inline-flex"
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
              href="/pricing/"
              className="font-[family-name:var(--font-inter)] inline-flex shrink-0 rounded-full px-4 py-2 text-xs font-semibold leading-tight no-underline decoration-transparent transition-opacity hover:opacity-90 hover:no-underline focus-visible:no-underline min-[420px]:text-sm sm:px-6 sm:py-2.5 sm:text-base"
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
            'absolute left-0 right-0 top-full hidden pt-3 transition-[opacity,transform] duration-300 ease-out lg:block',
            megaOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          )}
          onMouseEnter={clearClose}
        >
          <div
            data-mega-nav-panel
            className="font-[family-name:var(--font-inter)] flex min-h-0 min-w-0 max-h-[min(80vh,520px)] w-full flex-col gap-8 overflow-y-auto rounded-[24px] px-5 py-7 sm:px-6 lg:flex-row lg:gap-10"
          >
            <div className="min-w-0 flex-1 space-y-3">
              <p className="text-xs font-normal uppercase tracking-wide" style={{ color: 'var(--header-mega-label)' }}>
                {megaFocus === 'capabilities' ? 'Capabilities' : megaFocus === 'solutions' ? 'Solutions' : 'Partners'}
              </p>
              <MegaLinkList
                items={
                  megaFocus === 'capabilities'
                    ? CAPABILITIES_ITEMS
                    : megaFocus === 'solutions'
                      ? SOLUTION_ITEMS
                      : PARTNER_ITEMS
                }
              />
            </div>

            {megaFocus !== 'partners' && (
              <div className="w-full min-w-0 shrink-0 self-start lg:max-w-[320px]">
                <MegaFeaturedCard />
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
          'pointer-events-auto fixed inset-0 z-[60] flex flex-col lg:hidden',
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
            'relative flex flex-col rounded-t-[24px] transition-transform duration-300 ease-out',
            isHome
              ? 'mt-[calc(70px+10px+12px)] min-h-[calc(100dvh-70px-10px-12px)] sm:mt-[calc(70px+(1rem+20px)*0.42+20px+12px)] sm:min-h-[calc(100dvh-70px-(1rem+20px)*0.42-20px-12px)]'
              : 'mt-[calc(70px+0.5rem+10px+12px)] min-h-[calc(100dvh-70px-0.5rem-10px-12px)] sm:mt-[calc(70px+1rem+20px+12px)] sm:min-h-[calc(100dvh-70px-1rem-20px-12px)]',
            mobileNavOpen ? 'translate-y-0' : 'translate-y-4'
          )}
        >
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 sm:px-6">
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
                    Capabilities
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
                  <ul className="space-y-1 pb-4">
                    {CAPABILITIES_ITEMS.map((item) => (
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
                  <ul className="space-y-1 pb-4">
                    {SOLUTION_ITEMS.map((item) => (
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
                    {PARTNER_ITEMS.map((item) => (
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
                href="/blog/"
                className={cn(mobileSimpleLinkClass, 'border-b')}
                style={{ borderColor: 'var(--header-mega-divider)' }}
                onClick={() => setMobileNavOpen(false)}
              >
                <span
                  className="mt-2 h-5 w-0.5 shrink-0 self-start rounded-[10px]"
                  style={{ backgroundColor: 'var(--header-accent-line)' }}
                />
                <span className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold text-[var(--header-mega-text)] transition-colors duration-200 group-hover:text-[var(--header-mega-text-hover)]">
                  Insights
                </span>
              </Link>
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
