// HomeIntegrations:v1.0 legacy=false
// @template v2
import React from 'react'
import { homeSectionSubtitleClassName } from '@/app/components/Components'
import { cn } from '@/app/components/Components'
import Image from 'next/image'

/**
 * @group LOGOS (item0)
 * @type String
 */
const firstSource = '/images/home-integrations/salesforce.png'
/**
 * @group LOGOS (item0)
 * @type RichText
 */
const firstAlt = 'Salesforce'
/**
 * @group LOGOS (item0)
 * @type Number
 */
const firstWidth = 40
/**
 * @group LOGOS (item0)
 * @type Number
 */
const firstHeight = 32
/**
 * @group LOGOS (item1)
 * @type String
 */
const secondSource = '/images/home-integrations/shopify-plus.png'
/**
 * @group LOGOS (item1)
 * @type RichText
 */
const secondAlt = 'Shopify Plus'
/**
 * @group LOGOS (item1)
 * @type Number
 */
const secondWidth = 126
/**
 * @group LOGOS (item1)
 * @type Number
 */
const secondHeight = 32
/**
 * @group LOGOS (item2)
 * @type String
 */
const thirdSource = '/images/home-integrations/sap.png'
/**
 * @group LOGOS (item2)
 * @type RichText
 */
const thirdAlt = 'SAP'
/**
 * @group LOGOS (item2)
 * @type Number
 */
const thirdWidth = 71
/**
 * @group LOGOS (item2)
 * @type Number
 */
const thirdHeight = 32
/**
 * @group LOGOS (item3)
 * @type String
 */
const fourthSource = '/images/home-integrations/adobe-commerce.png'
/**
 * @group LOGOS (item3)
 * @type RichText
 */
const fourthAlt = 'Adobe Commerce'
/**
 * @group LOGOS (item3)
 * @type Number
 */
const fourthWidth = 114
/**
 * @group LOGOS (item3)
 * @type Number
 */
const fourthHeight = 32
const LOGOS = [
  {
    src: firstSource,
    alt: firstAlt,
    width: firstWidth,
    height: firstHeight
  },
  {
    src: secondSource,
    alt: secondAlt,
    width: secondWidth,
    height: secondHeight
  },
  {
    src: thirdSource,
    alt: thirdAlt,
    width: thirdWidth,
    height: thirdHeight
  },
  {
    src: fourthSource,
    alt: fourthAlt,
    width: fourthWidth,
    height: fourthHeight
  }
]
const DEFAULT_LIGHT_COPY = 'Integrated with the top eCommerce platforms.'
const DEFAULT_DARK_TITLE = 'Works with common commerce and cloud stacks'
const DEFAULT_DARK_DESCRIPTION =
  'Shopify, Salesforce, SAP, Adobe Commerce, Vercel, and more—connect the services you already run.'
/**
 * Logo strip matching BILDIT Website 2025 — “Integrated with the top eCommerce Platforms”.
 * Logos in `public/images/home-integrations/`; dark variant uses a black field so it sits with other night sections.
 */
export function HomeIntegrations({ variant = 'light', title, description, className }) {
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
export default HomeIntegrations
