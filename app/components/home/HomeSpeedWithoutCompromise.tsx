import { homeSectionSubtitleClassName, homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import Image from 'next/image'

type SpeedCard = {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

/** 804×520 WebP (2× Figma 402×260); generated from PNGs exported from the file. */
const CARDS: readonly SpeedCard[] = [
  {
    id: 'eliminate-deploys',
    imageSrc: '/home-speed/card-eliminate-deploys.webp',
    imageAlt: 'Developer shipping storefront updates from a multi-monitor workspace',
    title: 'Eliminate deploys',
    description: 'Push out experiences immediately.'
  },
  {
    id: 'sophisticated',
    imageSrc: '/home-speed/card-sophisticated.webp',
    imageAlt: 'Premium mobile storefront experience on a smartphone',
    title: 'Sophisticated by default',
    description: 'Precision design. Premium feel. Always on-brand.'
  },
  {
    id: 'performance',
    imageSrc: '/home-speed/card-performance.webp',
    imageAlt: 'Core Web Vitals and performance metrics visualization',
    title: 'Performance protected',
    description: 'Core web vitals stay fast. Always.'
  },
  {
    id: 'marketers',
    imageSrc: '/home-speed/card-marketers.webp',
    imageAlt: 'Marketer managing storefront content in a visual editor',
    title: 'Control returned to marketers',
    description: 'No developer tickets. No bottlenecks. No dependency.'
  }
] as const

/**
 * Figma “Speed without compromise” row (4728:27045): four article cards — image, title, subtext.
 */
export function HomeSpeedWithoutCompromise({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'home-scheme-light relative w-full overflow-hidden rounded-b-[64px] bg-white text-neutral-900',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-[72px] flex justify-center px-6 sm:px-8" aria-hidden>
        <div className="relative h-[280px] w-full max-w-[min(560px,calc(100%-2rem))]">
          <div className="absolute left-[18%] top-[52%] size-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(124,58,237,0.14)] blur-[72px]" />
          <div className="absolute left-[58%] top-[38%] size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(232,69,144,0.085)] blur-[72px]" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1512px] flex-col items-center gap-12 px-3 py-16 sm:px-4 md:gap-16 md:py-20 lg:py-24">
        <header className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <h2 className={cn('text-center', homeSectionTitleClassName)}>Speed without compromise.</h2>
          <p className={cn(homeSectionSubtitleClassName, 'text-center')}>Independence for marketing and IT.</p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-[34px]">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className="flex min-w-0 flex-col gap-3.5 overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-[402/260] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-center"
                  fetchPriority="low"
                />
              </div>
              <div className="flex flex-col gap-3.5 px-2.5 pb-2.5">
                <h3 className="font-[family-name:var(--font-uncut-sans)] text-[18px] font-semibold leading-6 text-neutral-900">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-uncut-sans)] text-sm leading-6 text-[#595959]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
