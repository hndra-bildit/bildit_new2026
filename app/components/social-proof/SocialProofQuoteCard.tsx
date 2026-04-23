import type { SocialProofTestimonial } from '@/app/lib/social-proof-testimonials'
import { cn } from '@/utils/cn'

function initialsFromDisplayName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  const first = parts[0][0] ?? ''
  const last = parts[parts.length - 1][0] ?? ''
  return (first + last).toUpperCase()
}

export type SocialProofQuoteCardProps = {
  item: SocialProofTestimonial
  /** @default 'light' */
  variant?: 'light' | 'dark'
  /** Larger quote + avatar row (marketers / storefront). @default false */
  prominent?: boolean
}

/** Shared quote tile for workflow strip, marketers section, storefront grid, etc. */
export function SocialProofQuoteCard({ item, variant = 'light', prominent = false }: SocialProofQuoteCardProps) {
  const isDark = variant === 'dark'

  return (
    <article
      className={cn(
        'flex h-full flex-col justify-between rounded-2xl',
        prominent ? 'min-h-[10rem] p-4 md:min-h-[11rem] md:p-5' : 'min-h-[7.5rem] p-2.5',
        isDark
          ? 'border border-white/[0.08] bg-white/[0.04] backdrop-blur-[10px]'
          : 'border border-[rgba(200,80,240,0.15)] bg-[#fafafa] backdrop-blur-[10px]'
      )}
    >
      <p
        className={cn(
          'font-[family-name:var(--font-uncut-sans)]',
          prominent
            ? cn(
                'text-sm leading-snug md:text-base md:leading-relaxed',
                isDark ? 'text-white/[0.82]' : 'text-[#171717]'
              )
            : cn('text-[15px] leading-snug', isDark ? 'text-white/[0.75]' : 'text-[#171717]')
        )}
      >
        {item.content}
      </p>
      {prominent ? (
        <footer className="mt-4 flex items-center gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-uncut-sans)] text-sm font-bold text-white"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgb(237, 30, 121) 0%, rgb(59, 30, 237) 100%)'
            }}
            aria-hidden
          >
            {initialsFromDisplayName(item.name)}
          </div>
          <div className="min-w-0">
            <p
              className={cn(
                'font-[family-name:var(--font-uncut-sans)] text-sm font-semibold md:text-base',
                isDark ? 'text-white' : 'text-[#171717]'
              )}
            >
              {item.name}
            </p>
            <p
              className={cn(
                'mt-1 font-[family-name:var(--font-uncut-sans)] text-sm md:text-[15px]',
                isDark ? 'text-white/50' : 'text-[#737373]'
              )}
            >
              {item.company}
            </p>
          </div>
        </footer>
      ) : (
        <div className="mt-2.5">
          <p
            className={cn(
              'font-[family-name:var(--font-uncut-sans)] text-[15px] font-semibold',
              isDark ? 'text-white' : 'text-[#171717]'
            )}
          >
            {item.name}
          </p>
          <p
            className={cn(
              'mt-0.5 font-[family-name:var(--font-uncut-sans)] text-[15px]',
              isDark ? 'text-white/45' : 'text-[#737373]'
            )}
          >
            {item.company}
          </p>
        </div>
      )}
    </article>
  )
}
