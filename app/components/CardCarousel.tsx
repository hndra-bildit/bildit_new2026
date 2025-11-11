'use client'

import React, { useCallback, useEffect, useState } from 'react'
import CardThree from './CardThree'
import cn from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ItemList: Array<{ name: string; company: string; content: string }> = [
  {
    name: '1Toni Montgomery',
    company: 'Belk',
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
    company: 'Belk',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: '4Toni Montgomery',
    company: 'Belk',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: '5Toni Montgomery',
    company: 'Belk',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: '56Toni Montgomery',
    company: 'Belk',
    content:
      "And I think the biggest win about it is for the most part, I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. ... We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  }

  //   { name: "Sarah Connor", company: "TechCorp", text: "The flexibility and ease of use are top-notch..." },
]
export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {ItemList.map((item, i) => (
            <CardThree item={item} key={i} />
          ))}
        </div>
      </div>
      <button
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full',
          !canScrollPrev && 'opacity-50 cursor-not-allowed'
        )}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full',
          !canScrollNext && 'opacity-50 cursor-not-allowed'
        )}
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
