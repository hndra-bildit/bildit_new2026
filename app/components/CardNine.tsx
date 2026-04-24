'use client'

import { cn } from '../../utils/cn'
import { ArrowUpRight, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export interface CardNineItemType {
  id: string
  src: string
  alt: string
  category: string
  updatedAt: string
  title: string
  content: string
  href: string
  author: string
  data: Array<{ title: string; content: string }>
  createdAt: string
}

interface Props {
  item: CardNineItemType
  /** @deprecated Layout is uniform; value ignored. */
  cardType?: string | 'small' | 'big'
  /**
   * `reel` — vertical 9:16 “short” frame with play affordance (blog + webinars listings).
   * `insight` — default square-thumbnail card.
   */
  variant?: 'insight' | 'reel'
}

/**
 * Blog / insights card — matches storefront & home marketing cards (bordered tile, Uncut Sans, neutral palette).
 * Use `variant="reel"` on listing pages for a TikTok-style vertical preview.
 */
const CardNine: React.FC<Props> = ({ item, variant = 'insight' }) => {
  const categoryLabel = item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()

  if (variant === 'reel') {
    return (
      <article className="mx-auto flex h-full w-full max-w-[280px] flex-col">
        <Link href={item.href} className="group block text-inherit no-underline">
          <div
            className={cn(
              'relative w-full overflow-hidden rounded-[1.25rem] bg-neutral-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)]',
              'ring-1 ring-black/10',
              'transition-transform duration-300 ease-out will-change-transform',
              'group-hover:scale-[1.02] group-active:scale-[0.99]'
            )}
          >
            <div className="relative aspect-[9/16] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 45vw, 220px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-[1] flex -translate-x-1/2 -translate-y-1/2"
                aria-hidden
              >
                <span
                  className={cn(
                    'flex size-[52px] items-center justify-center rounded-full',
                    'bg-white/20 shadow-lg backdrop-blur-sm',
                    'ring-1 ring-white/30 transition-transform duration-300',
                    'group-hover:scale-110 group-hover:bg-white/30'
                  )}
                >
                  <Play className="ml-0.5 size-6 fill-white text-white" aria-hidden />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-[1] space-y-1.5 p-3.5 text-left text-white sm:p-4">
                <p className="font-[family-name:var(--font-uncut-sans)] text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-xs">
                  {categoryLabel}
                  <span className="font-medium normal-case tracking-normal text-white/60"> · {item.updatedAt}</span>
                </p>
                <h3 className="font-[family-name:var(--font-uncut-sans)] text-[15px] font-bold leading-snug line-clamp-3 drop-shadow sm:text-base">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-uncut-sans)] line-clamp-2 text-xs leading-relaxed text-white/90 sm:text-[13px]">
                  {item.content}
                </p>
                <span className="font-[family-name:var(--font-uncut-sans)] inline-flex items-center gap-1 pt-0.5 text-xs font-semibold text-white">
                  Read more
                  <ArrowUpRight className="size-3 shrink-0 opacity-90" aria-hidden />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white',
        'sm:rounded-3xl'
      )}
    >
      <Link href={item.href} className="group block shrink-0 text-inherit no-underline">
        <div className="relative w-full overflow-hidden rounded-t-2xl bg-[#f5f7fa] sm:rounded-t-3xl">
          <div className="relative aspect-square w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
            />
          </div>
        </div>
      </Link>
      <div className="flex min-h-0 flex-1 flex-col gap-2 border-t border-black/[0.06] px-3.5 py-3.5 sm:px-4 sm:py-4">
        <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-medium uppercase tracking-[0.14em] text-[#595959]">
          {categoryLabel}
          <span className="font-normal normal-case tracking-normal text-neutral-400"> · {item.updatedAt}</span>
        </p>
        <h3 className="font-[family-name:var(--font-uncut-sans)] text-[17px] font-semibold leading-snug text-neutral-900 line-clamp-2">
          <Link href={item.href} className="text-inherit no-underline hover:text-neutral-700">
            {item.title}
          </Link>
        </h3>
        <p className="font-[family-name:var(--font-uncut-sans)] text-sm leading-6 text-[#595959] line-clamp-3">
          {item.content}
        </p>
        <Link
          href={item.href}
          className="font-[family-name:var(--font-uncut-sans)] mt-auto inline-flex items-center gap-1 pt-1 text-sm font-semibold text-neutral-900 no-underline transition-colors hover:text-[#c850f0]"
        >
          Read more
          <ArrowUpRight className="size-3.5 shrink-0 opacity-80" aria-hidden />
        </Link>
      </div>
    </article>
  )
}

export default CardNine
