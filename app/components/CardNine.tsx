'use client'

import { cn } from '../../utils/cn'
import { ArrowUpRight } from 'lucide-react'
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
}

/**
 * Blog / insights card — matches storefront & home marketing cards (bordered tile, Uncut Sans, neutral palette).
 */
const CardNine: React.FC<Props> = ({ item }) => {
  const categoryLabel = item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()

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
