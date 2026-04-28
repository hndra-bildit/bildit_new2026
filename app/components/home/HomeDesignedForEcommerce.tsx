'use client'

import { useEffect, useRef, useState } from 'react'
import { homeSectionSubtitleClassName, homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'

type HomeDesignedStat = {
  value: string
  valueClassName: string
  title: string
  lines: readonly [string, string]
}

const STATS: readonly HomeDesignedStat[] = [
  {
    value: '7×',
    valueClassName: 'font-bold',
    title: 'Faster publishing',
    lines: ['From idea to live experience in minutes,', 'not days.']
  },
  {
    value: '0',
    valueClassName: 'font-bold',
    title: 'Dev tickets per campaign',
    lines: ['Marketing teams operate fully', 'independently.']
  },
  {
    value: '+33%',
    valueClassName: 'font-semibold',
    title: 'Faster page loads',
    lines: ['Personalized, scheduled content', 'that loads so fast.']
  }
]

const VALUE_CLASS =
  'font-[family-name:var(--font-inter)] text-6xl leading-[64px] text-neutral-900 md:text-7xl lg:text-[96px]'

/** Big metric numerals for gradient sweeps — no `text-*`; color from `.home-stat-metric-wrap`. */
const VALUE_CLASS_METRIC = 'font-[family-name:var(--font-inter)] text-6xl leading-[64px] md:text-7xl lg:text-[96px]'

/**
 * Purple→pink text sweep length — must match `.home-stat-metric-fill` in globals.css.
 * Chains 7× → 0 → +33% one after another.
 */
const METRIC_GRADIENT_DURATION_MS = 1150

/**
 * Start when the stats block is meaningfully on screen. The strict “fully contained”
 * check fails on mobile when the grid is taller than the viewport.
 */
function shouldStartStatsAnimations(entry: IntersectionObserverEntry): boolean {
  if (!entry.isIntersecting) return false
  if (entry.intersectionRatio >= 0.28) return true

  const rect = entry.boundingClientRect
  const vh = window.innerHeight
  const vw = window.innerWidth
  const ε = 8
  const visibleH = Math.max(0, Math.min(vh, rect.bottom) - Math.max(0, rect.top))
  const visibleW = Math.max(0, Math.min(vw, rect.right) - Math.max(0, rect.left))
  if (visibleH < 80 || visibleW < 80) return false
  if (rect.height <= vh + ε) {
    return rect.top >= -ε && rect.left >= -ε && rect.bottom <= vh + ε && rect.right <= vw + ε
  }
  return visibleH >= Math.min(rect.height * 0.33, vh * 0.4)
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

function StatSevenGradient({ active, className }: { active: boolean; className?: string }) {
  return (
    <p
      className={cn(
        VALUE_CLASS_METRIC,
        'home-stat-metric-wrap font-bold tabular-nums',
        active && 'home-stat-metric-fill',
        className
      )}
      aria-label="7× faster publishing"
    >
      7×
    </p>
  )
}

function StatPlusThirtyThree({ active, className }: { active: boolean; className?: string }) {
  return (
    <p
      className={cn(
        VALUE_CLASS_METRIC,
        'home-stat-metric-wrap font-semibold tabular-nums',
        active && 'home-stat-metric-fill',
        className
      )}
      aria-label="+33% faster page loads"
    >
      +33%
    </p>
  )
}

function StatZero({ active, className }: { active: boolean; className?: string }) {
  return (
    <p
      className={cn(
        VALUE_CLASS_METRIC,
        'home-stat-metric-wrap font-bold tabular-nums',
        active && 'home-stat-metric-fill',
        className
      )}
    >
      0
    </p>
  )
}

/** Figma: “Designed for Modern eCommerce” stats (node 4726:15216). */
export function HomeDesignedForEcommerce({ className }: { className?: string }) {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsFullyVisible, setStatsFullyVisible] = useState(false)
  const [zeroActive, setZeroActive] = useState(false)
  const [plusThirtyThreeActive, setPlusThirtyThreeActive] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = statsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (shouldStartStatsAnimations(entry)) {
          setStatsFullyVisible(true)
          observer.disconnect()
        }
      },
      { threshold: [0, 0.1, 0.2, 0.28, 0.35, 0.5, 0.65, 0.8, 0.95, 1] }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!statsFullyVisible) return
    if (reducedMotion) {
      setZeroActive(true)
      setPlusThirtyThreeActive(true)
      return
    }
    const idZero = window.setTimeout(() => setZeroActive(true), METRIC_GRADIENT_DURATION_MS)
    const idPlus = window.setTimeout(() => setPlusThirtyThreeActive(true), METRIC_GRADIENT_DURATION_MS * 2)
    return () => {
      clearTimeout(idZero)
      clearTimeout(idPlus)
    }
  }, [statsFullyVisible, reducedMotion])

  return (
    <section className={cn('home-scheme-light relative w-full overflow-hidden bg-white text-neutral-900', className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[8%] top-[18%] size-[380px] rounded-full bg-[rgba(232,69,144,0.06)] blur-[100px] md:left-[12%]" />
        <div className="absolute right-[5%] top-[35%] size-[420px] rounded-full bg-[rgba(200,80,240,0.055)] blur-[110px] md:right-[8%]" />
        <div className="absolute bottom-[12%] left-1/2 size-[400px] -translate-x-1/2 rounded-full bg-[rgba(255,68,102,0.045)] blur-[100px]" />
      </div>
      <div className="relative mx-auto w-full max-w-[1286px] px-6 py-16 md:px-10 md:py-20 lg:px-[116px] lg:py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className={cn('max-w-[855px] text-center', homeSectionTitleClassName)}>Designed for modern eCommerce.</h2>
          <p className={cn(homeSectionSubtitleClassName, 'mx-auto text-center')}>
            What teams see after switching to the BILDIT Visual Experience Engine:
          </p>
        </div>

        <div ref={statsRef} className="mt-12 pt-2 md:mt-14 md:pt-[52px]">
          <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:gap-x-0.5">
            {STATS.map((stat, index) => (
              <div
                key={stat.title}
                className={cn(
                  'flex flex-col items-center px-4 text-center md:px-10',
                  index > 0 && 'md:border-l md:border-black/[0.07]'
                )}
              >
                {stat.title === 'Faster publishing' ? (
                  <StatSevenGradient active={statsFullyVisible} />
                ) : stat.value === '0' ? (
                  <StatZero active={zeroActive} />
                ) : stat.title === 'Faster page loads' ? (
                  <StatPlusThirtyThree active={plusThirtyThreeActive} />
                ) : (
                  <p className={cn(VALUE_CLASS, stat.valueClassName)}>{stat.value}</p>
                )}
                <p className="font-[family-name:var(--font-uncut-sans)] mt-2 text-lg font-semibold text-[#595959] md:mt-3">
                  {stat.title}
                </p>
                <p className="font-[family-name:var(--font-uncut-sans)] mt-1.5 text-sm leading-[21px] text-[#595959]">
                  {stat.lines[0]}
                  <br />
                  {stat.lines[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
