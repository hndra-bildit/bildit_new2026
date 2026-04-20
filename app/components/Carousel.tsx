'use client'

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

export type CarouselApi = NonNullable<UseEmblaCarouselType[1]>

type CarouselProps = React.ComponentProps<'div'> & {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextValue = {
  carouselRef: UseEmblaCarouselType[0]
  api: CarouselApi | undefined
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation: 'horizontal' | 'vertical'
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const ctx = React.useContext(CarouselContext)
  if (!ctx) {
    throw new Error('useCarousel must be used within <Carousel>')
  }
  return ctx
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y'
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((instance: CarouselApi) => {
      setCanScrollPrev(instance.canScrollPrev())
      setCanScrollNext(instance.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    React.useEffect(() => {
      if (!api) return
      setApi?.(api)
      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)
      return () => {
        api.off('reInit', onSelect)
        api.off('select', onSelect)
      }
    }, [api, onSelect, setApi])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation
        }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '' : 'flex-col',
          className
        )}
        style={style}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? '' : 'min-h-0',
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, children, ...props }, ref) => {
  const { scrollPrev, canScrollPrev, orientation } = useCarousel()

  return (
    <button
      ref={ref}
      type="button"
      disabled={!canScrollPrev}
      className={cn(className)}
      aria-label="Previous slide"
      onClick={scrollPrev}
      data-carousel-prev={orientation}
      {...props}
    >
      {children ?? <ChevronLeft className="size-4" aria-hidden />}
    </button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, children, ...props }, ref) => {
  const { scrollNext, canScrollNext, orientation } = useCarousel()

  return (
    <button
      ref={ref}
      type="button"
      disabled={!canScrollNext}
      className={cn(className)}
      aria-label="Next slide"
      onClick={scrollNext}
      data-carousel-next={orientation}
      {...props}
    >
      {children ?? <ChevronRight className="size-4" aria-hidden />}
    </button>
  )
})
CarouselNext.displayName = 'CarouselNext'

type CarouselDotsProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: 'horizontal' | 'vertical'
}

function CarouselDots({ className, orientation = 'horizontal', ...props }: CarouselDotsProps) {
  const { api } = useCarousel()
  const [selected, setSelected] = React.useState(0)
  const [snapCount, setSnapCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const sync = () => {
      setSnapCount(api.scrollSnapList().length)
      setSelected(api.selectedScrollSnap())
    }
    sync()
    api.on('reInit', sync)
    api.on('select', sync)
    return () => {
      api.off('reInit', sync)
      api.off('select', sync)
    }
  }, [api])

  if (!api || snapCount <= 1) return null

  return (
    <div
      role="tablist"
      className={cn(
        'flex justify-center gap-2',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
      {...props}
    >
      {Array.from({ length: snapCount }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === selected}
          className={cn(
            'size-2 rounded-full transition-colors',
            i === selected ? 'bg-neutral-100' : 'bg-neutral-100/40 hover:bg-neutral-100/70'
          )}
          onClick={() => api.scrollTo(i)}
        />
      ))}
    </div>
  )
}

export { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious, useCarousel }
