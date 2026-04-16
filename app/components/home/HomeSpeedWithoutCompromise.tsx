import { cn } from '@/utils/cn'
import Image from 'next/image'

type SpeedCard = {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  iconSrc?: string
}

const CARDS: readonly SpeedCard[] = [
  {
    id: 'eliminate-deploys',
    imageSrc: '/home-speed/card-eliminate-deploys.png',
    imageAlt: 'Developer shipping storefront updates from a multi-monitor workspace',
    title: 'Eliminate deploys',
    description: 'Push out experiences immediately.'
  },
  {
    id: 'sophisticated',
    imageSrc: '/home-speed/card-sophisticated.png',
    imageAlt: 'Premium mobile storefront experience on a smartphone',
    title: 'Sophisticated by default',
    description: 'Precision design. Premium feel. Always on-brand.',
    iconSrc: '/home-speed/icon-sophisticated.svg'
  },
  {
    id: 'performance',
    imageSrc: '/home-speed/card-performance.png',
    imageAlt: 'Core Web Vitals and performance metrics visualization',
    title: 'Performance protected',
    description: 'Core web vitals stay fast. Always.',
    iconSrc: '/home-speed/icon-performance.svg'
  },
  {
    id: 'marketers',
    imageSrc: '/home-speed/card-marketers.png',
    imageAlt: 'Marketer managing storefront content in a visual editor',
    title: 'Control returned to marketers',
    description: 'No developer tickets. No bottlenecks. No dependency.',
    iconSrc: '/home-speed/icon-marketers.svg'
  }
] as const
const ICON_GRADIENT = 'linear-gradient(135deg, rgba(200, 80, 240, 0.2) 0%, rgba(232, 69, 144, 0.2) 100%)'

/**
 * Figma “Speed without compromise.” (4728:27038): headline, subhead, four feature cards with optional marketing icons.
 */
export function HomeSpeedWithoutCompromise({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'home-scheme-light relative w-full overflow-hidden rounded-b-[64px] bg-white text-neutral-900',
        className
      )}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[100px] h-[603.5px] w-[min(1512px,100%)] -translate-x-1/2"
        aria-hidden
      >
        <div className="absolute left-[25%] top-[201px] size-[400px] rounded-full bg-[rgba(124,58,237,0.15)] blur-[100px]" />
        <div className="absolute left-[49%] top-0.5 size-[400px] rounded-full bg-[rgba(232,69,144,0.08)] blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1512px] flex-col items-center gap-12 px-3 py-16 sm:px-4 md:gap-16 md:py-20 lg:py-24">
        <header className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <h2 className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl md:leading-[48px]">
            Speed without compromise.
          </h2>
          <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold leading-7 text-[#595959] md:text-xl md:leading-7">
            Independence for Marketing and IT.
          </p>
        </header>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-[34px]">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className="flex min-w-0 flex-col gap-3.5 overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-[402/260] w-full overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-3.5 px-2.5 pb-2.5">
                {card.iconSrc ? (
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl px-3"
                    style={{ backgroundImage: ICON_GRADIENT }}
                  >
                    <Image src={card.iconSrc} alt="" width={24} height={24} className="size-6" />
                  </div>
                ) : null}
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
