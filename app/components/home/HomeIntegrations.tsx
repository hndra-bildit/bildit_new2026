import { homeSectionSubtitleClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import Image from 'next/image'

const LOGOS = [
  { src: '/images/home-integrations/salesforce.png', alt: 'Salesforce', width: 40, height: 32 },
  { src: '/images/home-integrations/shopify-plus.png', alt: 'Shopify Plus', width: 126, height: 32 },
  { src: '/images/home-integrations/sap.png', alt: 'SAP', width: 71, height: 32 },
  { src: '/images/home-integrations/adobe-commerce.png', alt: 'Adobe Commerce', width: 114, height: 32 }
] as const

const DEFAULT_LIGHT_COPY = 'Integrated with the top eCommerce platforms.'

const DEFAULT_DARK_TITLE = 'Works with common commerce and cloud stacks'
const DEFAULT_DARK_DESCRIPTION =
  'Shopify, Salesforce, SAP, Adobe Commerce, Vercel, and more—connect the services you already run.'

export type HomeIntegrationsProps = {
  /**
   * `light` — white strip (default homepage).
   * `dark` — black strip with light text; use on engineering / dark pages to match the same logo set.
   */
  variant?: 'light' | 'dark'
  /** `light`: single line above logos. `dark`: kicker / heading. Defaults per variant. */
  title?: string
  /** `dark` only: subcopy under the title. */
  description?: string
  className?: string
}

/**
 * Logo strip matching BILDIT Website 2025 — “Integrated with the top eCommerce Platforms”.
 * Logos in `public/images/home-integrations/`; dark variant uses a black field so it sits with other night sections.
 */
export function HomeIntegrations({ variant = 'light', title, description, className }: HomeIntegrationsProps) {
  const isDark = variant === 'dark'
  const lightCopy = title ?? DEFAULT_LIGHT_COPY
  const darkTitle = title ?? DEFAULT_DARK_TITLE
  const darkDescription = description ?? DEFAULT_DARK_DESCRIPTION

  return (
    <section
      className={cn(
        isDark ? 'border-y border-white/10 bg-[#07020f] text-white' : 'border-y border-black/[0.05] bg-white',
        className
      )}
      aria-label="eCommerce platform integrations"
    >
      <div className="mx-auto flex max-w-[1260px] flex-col items-center gap-6 px-6 py-10 md:gap-6 md:py-11">
        {isDark ? (
          <div className="flex max-w-[640px] flex-col items-center gap-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-[#a07dc0]">{darkTitle}</p>
            <p className="text-sm leading-relaxed text-[#c4b5dc] md:text-[15px]">{darkDescription}</p>
          </div>
        ) : (
          <p className={cn(homeSectionSubtitleClassName, 'max-w-none text-center')}>{lightCopy}</p>
        )}
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {LOGOS.map((logo) => (
            <li
              key={logo.src}
              className={cn('flex h-8 items-center justify-center', isDark ? 'opacity-95' : 'opacity-70')}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto max-w-[140px] object-contain object-center md:max-w-none"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
