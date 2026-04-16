'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BilditLogo } from '@/app/components/site-header/BilditLogo'
import { VISUAL_EDITING_PROMO_IMAGE } from '@/app/lib/visual-editing-promo-image'
import { cn } from '@/utils/cn'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

type MegaKey = 'platform' | 'solutions'

const MEGA_CLOSE_MS = 220

function MegaFeaturedCard() {
  return (
    <Link
      href="/cms/"
      className="relative flex min-h-[200px] flex-1 flex-col justify-between overflow-hidden rounded-[18px] p-6 text-left md:min-h-0"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13,1,24,0.5) 0%, rgba(67,23,130,0.55) 100%), url(${VISUAL_EDITING_PROMO_IMAGE})`
        }}
      />
      <div className="relative z-[1]">
        <p className="font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-wide text-white">
          Learn More
        </p>
      </div>
      <div className="relative z-[1] space-y-1.5">
        <p className="font-[family-name:var(--font-inter)] text-lg font-bold text-white md:text-[22px]">
          Visual Editing &amp; Live Preview
        </p>
        <p className="font-[family-name:var(--font-inter)] text-sm text-white/90 md:text-base">
          Our visual editor empowers you to create content your way. Preview live and schedule with confidence.
        </p>
      </div>
    </Link>
  )
}

export type SiteHeaderVariant = 'fixed' | 'inHero'

type SiteHeaderProps = {
  /** `inHero`: sits at top of home hero; mega menu is laid out inside the hero card. */
  variant?: SiteHeaderVariant
}

export function SiteHeader({ variant = 'fixed' }: SiteHeaderProps) {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const isEngineering = pathname.replace(/\/$/, '') === '/it'

  const [megaOpen, setMegaOpen] = useState(false)
  const [megaFocus, setMegaFocus] = useState<MegaKey>('platform')
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navWrapRef = useRef<HTMLDivElement>(null)
  const platformRef = useRef<HTMLButtonElement>(null)
  const solutionsRef = useRef<HTMLButtonElement>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })

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

  const updateIndicator = useCallback(() => {
    const wrap = navWrapRef.current
    const btn = megaFocus === 'platform' ? platformRef.current : solutionsRef.current
    if (!wrap || !btn) {
      setIndicator((s) => ({ ...s, visible: false }))
      return
    }
    const wr = wrap.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    setIndicator({
      left: br.left - wr.left,
      width: br.width,
      visible: megaOpen
    })
  }, [megaFocus, megaOpen])

  useLayoutEffect(() => {
    updateIndicator()
  }, [updateIndicator, megaOpen, megaFocus])

  useEffect(() => {
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [updateIndicator])

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('home-hero')
      if (!hero) {
        document.body.classList.add('header-scheme-light')
        return
      }
      const { bottom } = hero.getBoundingClientRect()
      const useLight = bottom < 96
      document.body.classList.toggle('header-scheme-light', useLight)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
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

  const isInHero = variant === 'inHero'

  return (
    <header
      className={cn(
        'pointer-events-none z-50 flex justify-center px-4 pt-4',
        isInHero ? 'relative w-full shrink-0' : 'fixed inset-x-0 top-0'
      )}
      onMouseLeave={scheduleClose}
    >
      <div className="pointer-events-auto relative w-full max-w-[1260px]">
        <div
          className="flex h-[70px] items-center justify-between gap-3 rounded-[45px] pl-6 pr-3 sm:pl-10 sm:pr-4"
          style={{
            backgroundColor: 'var(--header-pill-bg)',
            boxShadow: 'var(--header-pill-shadow)'
          }}
        >
          <Link href="/" className="flex shrink-0 items-center py-2" aria-label="BILDIT home">
            <BilditLogo />
          </Link>

          <nav className="font-[family-name:var(--font-inter)] hidden items-center gap-1 md:flex" aria-label="Primary">
            <div ref={navWrapRef} className="relative flex items-center gap-6 lg:gap-8">
              <span
                className={cn(
                  'pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-[var(--color-cms-purple)] transition-[transform,width,opacity] duration-300 ease-out',
                  indicator.visible ? 'opacity-100' : 'opacity-0'
                )}
                style={{
                  width: indicator.width,
                  transform: `translateX(${indicator.left}px)`
                }}
                aria-hidden
              />
              <button
                ref={platformRef}
                type="button"
                className={cn(
                  'relative py-3 text-base transition-colors duration-200',
                  megaOpen && megaFocus === 'platform'
                    ? 'text-[var(--header-nav-hover)]'
                    : 'text-[var(--header-nav)] hover:text-[var(--header-nav-hover)]'
                )}
                aria-expanded={megaOpen && megaFocus === 'platform'}
                onMouseEnter={() => openMega('platform')}
                onFocus={() => openMega('platform')}
              >
                Platform
              </button>
              <button
                ref={solutionsRef}
                type="button"
                className={cn(
                  'relative py-3 text-base transition-colors duration-200',
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
              <Link
                href="/tech-partners/"
                className="py-3 text-base text-[var(--header-nav)] transition-colors duration-200 hover:text-[var(--header-nav-hover)]"
                onMouseEnter={scheduleClose}
              >
                Partners
              </Link>
              <Link
                href="/pricing/"
                className="py-3 text-base text-[var(--header-nav)] transition-colors duration-200 hover:text-[var(--header-nav-hover)]"
                onMouseEnter={scheduleClose}
              >
                Pricing
              </Link>
              <Link
                href="/blog/"
                className="py-3 text-base text-[var(--header-nav)] transition-colors duration-200 hover:text-[var(--header-nav-hover)]"
                onMouseEnter={scheduleClose}
              >
                Insights
              </Link>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              role="switch"
              aria-checked={isEngineering}
              aria-label={isEngineering ? 'Switch to marketing site' : 'Switch to engineering site'}
              onClick={toggleEngineering}
              className="relative h-[26px] w-[50px] shrink-0 rounded-[13px] transition-colors duration-300"
              style={{ backgroundColor: 'var(--header-toggle-track)' }}
            >
              <span
                className={cn(
                  'absolute top-px flex size-6 items-center justify-center rounded-full bg-white shadow transition-[left,transform] duration-300 ease-out',
                  isEngineering ? 'left-[26px]' : 'left-px'
                )}
              >
                {isEngineering ? (
                  <Moon className="size-3.5 text-violet-700" aria-hidden />
                ) : (
                  <Sun className="size-3.5 text-amber-500" aria-hidden />
                )}
              </span>
            </button>
            <Link
              href="/pricing/"
              className="font-[family-name:var(--font-inter)] hidden rounded-full px-5 py-2.5 text-base font-semibold transition-opacity hover:opacity-90 sm:inline-flex"
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
            'absolute left-0 right-0 top-[calc(100%+12px)] overflow-hidden transition-[opacity,transform] duration-300 ease-out',
            megaOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          )}
          onMouseEnter={clearClose}
        >
          <div
            className="font-[family-name:var(--font-inter)] mx-auto flex max-h-[min(80vh,520px)] w-full flex-col gap-8 overflow-y-auto rounded-[24px] px-5 py-7 shadow-xl sm:px-6 lg:flex-row lg:gap-10"
            style={{
              backgroundColor: 'var(--header-mega-bg)',
              boxShadow: 'var(--header-mega-shadow)'
            }}
          >
            <div className="grid min-w-0 flex-1 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="min-w-0 space-y-3">
                <p
                  className="text-xs font-normal uppercase tracking-wide"
                  style={{ color: 'var(--header-mega-label)' }}
                >
                  Platform
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/commerce-suite/"
                      className="flex gap-2.5 rounded-xl px-2.5 py-2 transition-colors duration-200 hover:bg-black/[0.04]"
                    >
                      <span
                        className="mt-0.5 w-0.5 shrink-0 rounded-[10px]"
                        style={{ backgroundColor: 'var(--header-accent-line)' }}
                      />
                      <div>
                        <p
                          className="font-[family-name:var(--font-uncut-sans)] text-base font-medium"
                          style={{ color: 'var(--header-mega-text)' }}
                        >
                          Visual Experience Engine
                        </p>
                        <p className="text-xs leading-snug" style={{ color: 'var(--header-mega-muted)' }}>
                          Easy and fast content creations, for Marketer and/or IT
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/storefront/"
                      className="flex gap-2.5 rounded-xl px-2.5 py-2 transition-colors duration-200 hover:bg-black/[0.04]"
                    >
                      <span
                        className="mt-0.5 w-0.5 shrink-0 rounded-[10px]"
                        style={{ backgroundColor: 'var(--header-accent-line)' }}
                      />
                      <div>
                        <p
                          className="font-[family-name:var(--font-uncut-sans)] text-base font-medium"
                          style={{ color: 'var(--header-mega-text)' }}
                        >
                          Mobile App Storefront
                        </p>
                        <p className="text-xs leading-snug" style={{ color: 'var(--header-mega-muted)' }}>
                          Optimize, fast and modern UI/UX built-in, high conversion with one click checkout
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="min-w-0 space-y-3">
                <p
                  className="text-xs font-normal uppercase tracking-wide"
                  style={{ color: 'var(--header-mega-label)' }}
                >
                  Solutions
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/brands/"
                      className="flex gap-2.5 rounded-xl px-2.5 py-2 transition-colors duration-200 hover:bg-black/[0.04]"
                    >
                      <span className="mt-0.5 w-0.5 shrink-0 rounded-[10px] bg-[var(--color-cms-purple)]" />
                      <div>
                        <p
                          className="font-[family-name:var(--font-uncut-sans)] text-base font-medium"
                          style={{ color: 'var(--header-mega-text)' }}
                        >
                          Marketers Team
                        </p>
                        <p className="text-xs leading-snug" style={{ color: 'var(--header-mega-muted)' }}>
                          Update Site without engineering tickets. Schedule and Preview Content in Realtime
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/it/"
                      className="flex gap-2.5 rounded-xl px-2.5 py-2 transition-colors duration-200 hover:bg-black/[0.04]"
                    >
                      <span className="mt-0.5 w-0.5 shrink-0 rounded-[10px] bg-[var(--color-cms-purple)]" />
                      <div>
                        <p
                          className="font-[family-name:var(--font-uncut-sans)] text-base font-medium"
                          style={{ color: 'var(--header-mega-text)' }}
                        >
                          Engineering Team
                        </p>
                        <p className="text-xs leading-snug" style={{ color: 'var(--header-mega-muted)' }}>
                          Build advanced templates in React and React Native. Push out template updates without a
                          deployment
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="min-w-0 space-y-3 lg:max-w-[140px]">
                <p
                  className="text-xs font-normal uppercase tracking-wide"
                  style={{ color: 'var(--header-mega-label)' }}
                >
                  Others
                </p>
                <ul
                  className="font-[family-name:var(--font-uncut-sans)] space-y-3 text-base font-medium"
                  style={{ color: 'var(--header-mega-text)' }}
                >
                  <li>
                    <Link href="/tech-partners/" className="transition-opacity hover:opacity-80">
                      Tech Partners
                    </Link>
                  </li>
                  <li>
                    <Link href="/integration-partners/" className="underline decoration-solid underline-offset-2">
                      Become a Partner
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing/" className="transition-opacity hover:opacity-80">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/" className="transition-opacity hover:opacity-80">
                      Insight
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-story/" className="transition-opacity hover:opacity-80">
                      Webinars
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="min-h-[220px] w-full min-w-0 shrink-0 lg:max-w-[320px]">
              <MegaFeaturedCard />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
