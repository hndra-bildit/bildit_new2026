import { homeSectionEyebrowClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import Image from 'next/image'

const LOGOS = [
  { src: '/images/logo-exports/gray/salesforce.svg', alt: 'Salesforce', width: 34, height: 27 },
  { src: '/images/logo-exports/gray/shopify-plus.svg', alt: 'Shopify Plus', width: 258, height: 53 },
  { src: '/images/logo-exports/gray/sap-hybris.svg', alt: 'SAP', width: 199, height: 98 },
  { src: '/images/logo-exports/gray/adobe.svg', alt: 'Adobe Commerce', width: 22, height: 19 }
] as const

/** Platform strip; gray SVGs match HomeIntegrations (`logo-exports/gray`). */
export function StorefrontPlatformStrip({ className }: { className?: string }) {
  return (
    <section
      className={cn('border-y border-black/[0.05] bg-white/80', className)}
      aria-label="eCommerce platform integrations"
    >
      <div className="mx-auto flex max-w-[1260px] flex-col items-center gap-6 px-6 py-10 md:gap-6 md:py-11">
        <p className={cn(homeSectionEyebrowClassName, 'text-center text-neutral-600')}>
          Integrated with the top eCommerce Platforms
        </p>
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
