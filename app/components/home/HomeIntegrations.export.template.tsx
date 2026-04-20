// @template v2
import { homeSectionSubtitleClassName } from '@/cmsDependencies'
import { cn } from '@/cmsDependencies'
import Image from 'next/image'

const LOGOS = [
  {
    src: '/home-integrations/salesforce.png',
    alt: 'Salesforce',
    width: 40,
    height: 32
  },
  {
    src: '/home-integrations/shopify-plus.png',
    alt: 'Shopify Plus',
    width: 126,
    height: 32
  },
  {
    src: '/home-integrations/sap.png',
    alt: 'SAP',
    width: 71,
    height: 32
  },
  {
    src: '/home-integrations/adobe-commerce.png',
    alt: 'Adobe Commerce',
    width: 114,
    height: 32
  }
] as const

/**
 * Logo strip matching BILDIT Website 2025 — “Integrated with the top eCommerce Platforms”.
 */
export function HomeIntegrations() {
  return (
    <section className="border-y border-black/[0.05] bg-white" aria-label="eCommerce platform integrations">
      <div className="mx-auto flex max-w-[1260px] flex-col items-center gap-6 px-6 py-10 md:gap-6 md:py-11">
        <p className={cn(homeSectionSubtitleClassName, 'max-w-none text-center')}>{divPText}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {LOGOS.map((logo) => (
            <li key={logo.src} className="flex h-8 items-center justify-center opacity-70">
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
