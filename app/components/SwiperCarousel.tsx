'use client'

import React, { useRef, useEffect, useState } from 'react'
import CardThree from './CardThree'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper/types'

const ItemList: Array<{ name: string; company: string; content: string }> = [
  {
    name: '1Toni Montgomery',
    company: 'Company',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: '2Erik Cruz Casco',
    company: 'El Palacio de Hierro',
    content:
      "It's a great CMS to make quick changes ... We can make a change immediately. And it's reflected immediately. … my team or I could change something without an IT team or developer, we basically publish it and it's done."
  },
  {
    name: '3Toni Montgomery',
    company: 'Company',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: '4Toni Montgomery',
    company: 'Company',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: '5Toni Montgomery',
    company: 'Company',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: '56Toni Montgomery',
    company: 'Company',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  }
]

export default function SwiperCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [slidePerView, setSlidePerView] = useState(3)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowWidth != null && windowWidth < 768) {
      setSlidePerView(1)
    } else if (windowWidth != null && windowWidth < 1280) {
      setSlidePerView(2)
    } else if (windowWidth != null) {
      setSlidePerView(3)
    }
  }, [windowWidth])
  return (
    <div className="relative">
      <div className="flex justify-center space-x-6">
        <button
          ref={prevRef}
          className="lg:absolute top-[-60px] right-[80px] z-10 transform lg:-translate-y-1/2 bg-black p-2 text-white  shadow-custom cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="lg:absolute top-[-60px] right-[20px] z-10 transform lg:-translate-y-1/2 bg-black p-2 text-white shadow-custom cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        loop={true}
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
        slidesPerView={slidePerView}
        spaceBetween={30}
        className="w-full py-10"
      >
        {ItemList.map((item, i) => (
          <SwiperSlide key={i} className="my-5">
            <CardThree item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
