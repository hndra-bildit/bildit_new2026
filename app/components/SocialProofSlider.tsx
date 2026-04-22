'use client'

import { useEffect, useRef, useState } from 'react'
import CardThree from '@/app/components/CardThree'
import { SOCIAL_PROOF_TESTIMONIALS } from '@/app/lib/social-proof-testimonials'
import { cn } from '@/utils/cn'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper/types'

/** Pricing-style “What Our Customers Say” carousel (bildit.co/pricing). */
export default function SocialProofSlider({ className }: { className?: string }) {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  const slides = SOCIAL_PROOF_TESTIMONIALS

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowWidth == null) return
    if (windowWidth < 768) {
      setSlidesPerView(1)
    } else if (windowWidth < 1280) {
      setSlidesPerView(2)
    } else {
      setSlidesPerView(3)
    }
  }, [windowWidth])

  useEffect(() => {
    const s = swiperRef.current
    if (!s) return
    s.update()
    setPrevDisabled(s.isBeginning)
    setNextDisabled(s.isEnd)
  }, [slidesPerView])

  const syncNav = (swiper: SwiperType) => {
    setPrevDisabled(swiper.isBeginning)
    setNextDisabled(swiper.isEnd)
  }

  return (
    <section
      className={cn('bg-neutral-50 px-4 py-14 sm:px-6 md:py-20 lg:py-24', className)}
      aria-labelledby="social-proof-slider-heading"
    >
      <div className="container mx-auto max-w-[1280px]">
        <h2
          id="social-proof-slider-heading"
          className="mb-10 text-center font-gt-walsheim text-3xl font-extrabold leading-tight text-neutral-900 md:mb-14 md:text-4xl lg:text-5xl"
        >
          What Our Customers Say
        </h2>

        <div className="relative">
          <div className="mb-6 flex justify-center gap-3 md:absolute md:right-0 md:top-0 md:mb-0 md:-translate-y-full md:pb-4 lg:pb-6">
            <button
              ref={prevRef}
              type="button"
              disabled={prevDisabled}
              className="bg-neutral-900 p-2.5 text-white shadow-md transition hover:bg-neutral-800 disabled:pointer-events-none disabled:opacity-35"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-6" aria-hidden />
            </button>
            <button
              ref={nextRef}
              type="button"
              disabled={nextDisabled}
              className="bg-neutral-900 p-2.5 text-white shadow-md transition hover:bg-neutral-800 disabled:pointer-events-none disabled:opacity-35"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-6" aria-hidden />
            </button>
          </div>

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
            slidesPerView={slidesPerView}
            spaceBetween={24}
            className="w-full !pb-2"
            breakpoints={{
              0: { spaceBetween: 16 },
              768: { spaceBetween: 24 },
              1280: { spaceBetween: 30 }
            }}
          >
            {slides.map((item) => (
              <SwiperSlide key={`${item.name}-${item.company}`} className="py-2">
                <CardThree item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
