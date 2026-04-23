import { SocialProofQuoteCard } from '@/app/components/social-proof/SocialProofQuoteCard'
import { SOCIAL_PROOF_TESTIMONIALS } from '@/app/lib/social-proof-testimonials'
import { cn } from '@/utils/cn'

type StorefrontTestimonialsQuotesProps = {
  className?: string
  id?: string
}

/**
 * Static grid of all customer quotes for the mobile app storefront — no carousel or arrows.
 * Uses the same cards as `HomeWorkflowSocialStrip` via `SocialProofQuoteCard`.
 */
export function StorefrontTestimonialsQuotes({ className, id }: StorefrontTestimonialsQuotesProps) {
  return (
    <div className={cn('w-full', className)} id={id} aria-labelledby={id ? `${id}-label` : undefined}>
      <span id={id ? `${id}-label` : undefined} className="sr-only">
        What customers say about BILDIT
      </span>
      <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-3 md:gap-5">
        {SOCIAL_PROOF_TESTIMONIALS.map((item) => (
          <li key={`${item.name}-${item.company}`} className="min-w-0">
            <SocialProofQuoteCard item={item} variant="dark" prominent />
          </li>
        ))}
      </ul>
    </div>
  )
}
