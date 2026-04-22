'use client'

import { useEffect, useRef, useState } from 'react'
import { SOCIAL_PROOF_TESTIMONIALS } from '@/app/lib/social-proof-testimonials'
import { cn } from '@/utils/cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper/types'

function initialsFromDisplayName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  const first = parts[0][0] ?? ''
  const last = parts[parts.length - 1][0] ?? ''
  return (first + last).toUpperCase()
}

type HomeWorkflowSocialStripProps = {
  className?: string
  id?: string
  /** Light cards on white (home workflow); dark matches marketers testimonials `#0d0118` section. @default 'light' */
  variant?: 'light' | 'dark'
  /** Larger quote copy for a standalone testimonials section (e.g. marketers). @default false */
  prominent?: boolean
}

/** Figma 5283:16990 "Review Row" style strip — text-only quotes, no star ratings. */
export function HomeWorkflowSocialStrip({
  className,
  id,
  variant = 'light',
  prominent = false
}: HomeWorkflowSocialStripProps) {
  const isDark = variant === 'dark'
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)
  const [w, setW] = useState<number | null>(null)
  const [perView, setPerView] = useState(1.15)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  useEffect(() => {
    const onR = () => setW(window.innerWidth)
    onR()
    window.addEventListener('resize', onR)
    return () => window.removeEventListener('resize', onR)
  }, [])

  useEffect(() => {
    if (w == null) return
    if (w < 640) setPerView(1.08)
    else setPerView(2)
  }, [w])

  useEffect(() => {
    const s = swiperRef.current
    if (!s) return
    s.update()
    setPrevDisabled(s.isBeginning)
    setNextDisabled(s.isEnd)
  }, [perView])

  const syncNav = (swiper: SwiperType) => {
    setPrevDisabled(swiper.isBeginning)
    setNextDisabled(swiper.isEnd)
  }

  const navBtnClass = (disabled: boolean) =>
    cn(
      'shrink-0 rounded-lg p-2 shadow-sm transition',
      isDark
        ? 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
        : 'border border-[rgba(200,80,240,0.2)] bg-white text-[#171717] hover:bg-[#fafafa]',
      disabled && 'pointer-events-none opacity-35'
    )

  return (
    <div
      className={cn('relative min-w-0 flex-1 pt-2 md:pt-0', className)}
      id={id}
      aria-labelledby={id ? `${id}-label` : undefined}
    >
      <span id={id ? `${id}-label` : undefined} className="sr-only">
        What customers say about BILDIT
      </span>

      <div className="mb-2 flex justify-end gap-2 md:absolute md:right-0 md:top-0 md:mb-0 md:translate-y-0 md:pb-0">
        <div className="flex gap-2">
          <button
            ref={prevRef}
            type="button"
            disabled={prevDisabled}
            className={navBtnClass(prevDisabled)}
            aria-label="Previous customer quote"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            ref={nextRef}
            type="button"
            disabled={nextDisabled}
            className={navBtnClass(nextDisabled)}
            aria-label="Next customer quote"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <div className="relative -mx-1 px-1 md:static md:mx-0 md:px-0 md:pt-12">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === 'object' && swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            swiper.navigation.init()
            swiper.navigation.update()
            syncNav(swiper)
          }}
          onSlideChange={syncNav}
          onBreakpoint={syncNav}
          slidesPerView={perView}
          spaceBetween={16}
          className="w-full"
          breakpoints={{
            0: { spaceBetween: 16 },
            768: { spaceBetween: 20 }
          }}
        >
          {SOCIAL_PROOF_TESTIMONIALS.map((item) => (
            <SwiperSlide key={`${item.name}-${item.company}`} className="h-auto py-0.5">
              <article
                className={cn(
                  'flex h-full flex-col justify-between rounded-2xl',
                  prominent ? 'min-h-[10rem] p-4 md:min-h-[11rem] md:p-5' : 'min-h-[7.5rem] p-2.5',
                  isDark
                    ? 'border border-white/[0.08] bg-white/[0.04] backdrop-blur-[10px]'
                    : 'border border-[rgba(200,80,240,0.15)] bg-[#fafafa] backdrop-blur-[10px]'
                )}
              >
                <p
                  className={cn(
                    'font-[family-name:var(--font-uncut-sans)]',
                    prominent
                      ? cn(
                          'text-sm leading-snug md:text-base md:leading-relaxed',
                          isDark ? 'text-white/[0.82]' : 'text-[#171717]'
                        )
                      : cn('text-[15px] leading-[18px]', isDark ? 'text-white/[0.75]' : 'text-[#171717]')
                  )}
                >
                  {item.content}
                </p>
                {prominent ? (
                  <footer className="mt-4 flex items-center gap-3">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-uncut-sans)] text-sm font-bold text-white"
                      style={{
                        backgroundImage: 'linear-gradient(135deg, rgb(237, 30, 121) 0%, rgb(59, 30, 237) 100%)'
                      }}
                      aria-hidden
                    >
                      {initialsFromDisplayName(item.name)}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={cn(
                          'font-[family-name:var(--font-uncut-sans)] text-sm font-semibold md:text-base',
                          isDark ? 'text-white' : 'text-[#171717]'
                        )}
                      >
                        {item.name}
                      </p>
                      <p
                        className={cn(
                          'mt-1 font-[family-name:var(--font-uncut-sans)] text-sm md:text-[15px]',
                          isDark ? 'text-white/50' : 'text-[#737373]'
                        )}
                      >
                        {item.company}
                      </p>
                    </div>
                  </footer>
                ) : (
                  <div className="mt-2.5">
                    <p
                      className={cn(
                        'font-[family-name:var(--font-uncut-sans)] text-[15px] font-semibold',
                        isDark ? 'text-white' : 'text-[#171717]'
                      )}
                    >
                      {item.name}
                    </p>
                    <p
                      className={cn(
                        'mt-0.5 font-[family-name:var(--font-uncut-sans)] text-[15px]',
                        isDark ? 'text-white/45' : 'text-[#737373]'
                      )}
                    >
                      {item.company}
                    </p>
                  </div>
                )}
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={cn(
            'pointer-events-none absolute inset-y-0 right-0 z-[1] w-24 bg-gradient-to-r from-transparent md:w-40',
            isDark ? 'to-[#0d0118]' : 'to-white'
          )}
          aria-hidden
        />
      </div>
    </div>
  )
}
