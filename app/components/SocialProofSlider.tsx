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
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [slidesPerView, setSlidesPerView] = useState(3)

  const slides = [...SOCIAL_PROOF_TESTIMONIALS, ...SOCIAL_PROOF_TESTIMONIALS]

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
              className="bg-neutral-900 p-2.5 text-white shadow-md transition hover:bg-neutral-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-6" aria-hidden />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="bg-neutral-900 p-2.5 text-white shadow-md transition hover:bg-neutral-800"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-6" aria-hidden />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            onInit={(swiper: SwiperType) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }
            }}
            slidesPerView={slidesPerView}
            spaceBetween={24}
            className="w-full !pb-2"
            breakpoints={{
              0: { spaceBetween: 16 },
              768: { spaceBetween: 24 },
              1280: { spaceBetween: 30 }
            }}
          >
            {slides.map((item, i) => (
              <SwiperSlide key={`${item.name}-${i}`} className="py-2">
                <CardThree item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
