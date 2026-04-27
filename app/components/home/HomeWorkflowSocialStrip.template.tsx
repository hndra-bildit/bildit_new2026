// HomeWorkflowSocialStrip:v1.0 legacy=true
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SocialProofQuoteCard } from "@/app/components/Components";
import { SOCIAL_PROOF_TESTIMONIALS } from "@/app/components/Components";
import { cn } from "@/app/components/Components";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
type HomeWorkflowSocialStripProps = {
  className?: string;
  id?: string;
  /** Light cards on white (home workflow); dark matches marketers testimonials `#0d0118` section. @default 'light' */
  variant?: 'light' | 'dark';
  /** Larger quote copy for a standalone testimonials section (e.g. marketers). @default false */
  prominent?: boolean;
};

/** Figma 5283:16990 "Review Row" style strip — text-only quotes, no star ratings. */
export function HomeWorkflowSocialStrip({
  className,
  id,
  variant = 'light',
  prominent = false
}) {
  // group { 1. span }
  const span = $(span:RichText='What customers say about BILDIT'); // endgroup
  const isDark = variant === 'dark';
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [w, setW] = useState<number | null>(null);
  const [perView, setPerView] = useState(1.15);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  useEffect(() => {
    const onR = () => setW(window.innerWidth);
    onR();
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  useEffect(() => {
    if (w == null) return;
    if (w < 640) setPerView(1.08);else setPerView(2);
  }, [w]);
  useEffect(() => {
    const s = swiperRef.current;
    if (!s) return;
    s.update();
    setPrevDisabled(s.isBeginning);
    setNextDisabled(s.isEnd);
  }, [perView]);
  const syncNav = swiper => {
    setPrevDisabled(swiper.isBeginning);
    setNextDisabled(swiper.isEnd);
  };
  const navBtnClass = disabled => cn('shrink-0 rounded-lg p-2 shadow-sm transition', isDark ? 'border border-white/15 bg-white/5 text-white hover:bg-white/10' : 'border border-[rgba(200,80,240,0.2)] bg-white text-[#171717] hover:bg-[#fafafa]', disabled && 'pointer-events-none opacity-35');
  return <div className={cn('relative min-w-0 flex-1 pt-2 md:pt-0', className)} id={id} aria-labelledby={id ? `${id}-label` : undefined}>
      <span id={id ? `${id}-label` : undefined} className="sr-only" data-bildit-var-name="span" data-bildit-var-type="RichText">
        {span}
      </span>

      <div className="mb-2 flex justify-end gap-2 md:absolute md:right-0 md:top-0 md:mb-0 md:translate-y-0 md:pb-0">
        <div className="flex gap-2">
          <button ref={prevRef} type="button" disabled={prevDisabled} className={navBtnClass(prevDisabled)} aria-label="Previous customer quote">
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button ref={nextRef} type="button" disabled={nextDisabled} className={navBtnClass(nextDisabled)} aria-label="Next customer quote">
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      <div className="relative -mx-1 px-1 md:static md:mx-0 md:px-0 md:pt-12">
        <Swiper modules={[Navigation]} navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current
      }} onBeforeInit={swiper => {
        if (typeof swiper.params.navigation === 'object' && swiper.params.navigation) {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }
      }} onSwiper={swiper => {
        swiperRef.current = swiper;
        swiper.navigation.init();
        swiper.navigation.update();
        syncNav(swiper);
      }} onSlideChange={syncNav} onBreakpoint={syncNav} slidesPerView={perView} spaceBetween={16} className="w-full" breakpoints={{
        0: {
          spaceBetween: 16
        },
        768: {
          spaceBetween: 20
        }
      }}>
          {SOCIAL_PROOF_TESTIMONIALS.map(item => <SwiperSlide key={`${item.name}-${item.company}`} className="h-auto py-0.5">
              <SocialProofQuoteCard item={item} variant={variant} prominent={prominent} />
            </SwiperSlide>)}
        </Swiper>
      </div>
    </div>;
}
export default HomeWorkflowSocialStrip;