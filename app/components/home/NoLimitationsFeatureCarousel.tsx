import { homeNoLimitationsCardImages } from '@/app/lib/home-no-limitations-assets'
import { NO_LIMITATIONS_FEATURE_CARDS, type NoLimitationsFeatureCard } from '@/app/lib/no-limitations-feature-cards'
import { cn } from '@/utils/cn'
import Image from 'next/image'

const scrollPaddingClassName =
  'scroll-pl-6 scroll-pr-6 sm:scroll-pl-8 sm:scroll-pr-8 md:scroll-pl-10 md:scroll-pr-10 lg:scroll-pl-[116px] lg:scroll-pr-[116px]'

const trackPaddingClassName = 'pl-6 pr-6 sm:pl-8 sm:pr-8 md:pl-10 md:pr-10 lg:pl-[116px] lg:pr-[116px]'

type NoLimitationsFeatureCarouselProps = {
  className?: string
  /** Defaults to `home` page carousel art. Pass e.g. `marketersSolutionsNoLimitationsCardImages` for /solutions-for-marketers. */
  cardImages?: readonly { src: string }[]
  /** Per-card title overrides (e.g. solutions-for-marketers copy tweaks). */
  cardTitleOverrides?: Partial<Record<NoLimitationsFeatureCard['id'], string>>
}

export function NoLimitationsFeatureCarousel({
  className,
  cardImages = homeNoLimitationsCardImages,
  cardTitleOverrides
}: NoLimitationsFeatureCarouselProps) {
  return (
    <div
      className={cn(
        'w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain pb-4',
        '[-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15 [&::-webkit-scrollbar-track]:bg-transparent',
        scrollPaddingClassName,
        className
      )}
      role="region"
      aria-label="BILDIT storefront capabilities"
    >
      <div className={cn('flex w-max gap-5', trackPaddingClassName)}>
        {NO_LIMITATIONS_FEATURE_CARDS.map((card, index) => {
          const art = cardImages[index] ?? homeNoLimitationsCardImages[index]
          if (!art) {
            return null
          }
          return (
            <article
              key={card.id}
              className={cn(
                'flex w-[min(397px,calc(100vw-3rem))] shrink-0 snap-start flex-col gap-3.5 overflow-hidden rounded-2xl border border-black/10 bg-white',
                'sm:w-[min(397px,calc(100vw-4rem))] md:w-[397px]'
              )}
            >
              <div className="relative w-full overflow-hidden rounded-t-2xl bg-neutral-100 sm:rounded-t-3xl">
                <div className="relative aspect-[402/260] w-full">
                  <Image
                    src={art.src}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) min(100vw - 3rem, 397px), 397px"
                    className="object-cover object-center"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 px-2.5 pb-4">
                <h3 className="font-[family-name:var(--font-uncut-sans)] text-[18px] font-semibold leading-6 text-neutral-900">
                  {cardTitleOverrides?.[card.id] ?? card.title}
                </h3>
                <p className="font-[family-name:var(--font-uncut-sans)] text-sm leading-6 text-[#595959]">
                  {card.description}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
