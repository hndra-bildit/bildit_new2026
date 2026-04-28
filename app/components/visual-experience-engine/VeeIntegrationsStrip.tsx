import { homeSectionEyebrowClassName } from '@/app/components/home/home-section-typography'
import {
  veeLogoAci,
  veeLogoAfterpay,
  veeLogoApplePay,
  veeLogoBazaarvoice,
  veeLogoMagento,
  veeLogoNetlify,
  veeLogoSalesforce,
  veeLogoSap,
  veeLogoShopifyPlus,
  veeLogoSyte,
  veeLogoVercel
} from '@/app/lib/vee-integrations-strip-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

/** Width/height match each SVG viewBox so Next/Image aspect ratio matches the asset (avoids stretch with wide/wrong ratios). */
const LOGOS = [
  { src: veeLogoVercel, alt: 'Vercel', w: 25, h: 21 },
  { src: veeLogoShopifyPlus, alt: 'Shopify Plus', w: 258, h: 53 },
  { src: veeLogoSalesforce, alt: 'Salesforce', w: 34, h: 27 },
  { src: veeLogoNetlify, alt: 'Netlify', w: 512, h: 209 },
  { src: veeLogoSap, alt: 'SAP', w: 44, h: 20 },
  { src: veeLogoMagento, alt: 'Magento', w: 245, h: 82 },
  { src: veeLogoApplePay, alt: 'Apple Pay', w: 49, h: 20 },
  { src: veeLogoAfterpay, alt: 'Afterpay', w: 242, h: 45 },
  /** Tighter viewBox ink — slightly shorter image height to match visual cap-height of neighbors at h-8. */
  {
    src: veeLogoAci,
    alt: 'ACI Worldwide',
    w: 244,
    h: 28,
    imageClassName: 'h-[22px] w-auto object-contain object-center'
  },
  { src: veeLogoSyte, alt: 'Syte', w: 229, h: 63, imageClassName: 'h-[22px] w-auto object-contain object-center' },
  { src: veeLogoBazaarvoice, alt: 'Bazaarvoice', w: 153, h: 124 }
] as const

export function VeeIntegrationsStrip() {
  return (
    <section className="border-y border-white/10 bg-[#0d0118] px-6 py-16 md:px-10 md:py-20 lg:px-[116px] lg:py-24">
      <div className="mx-auto flex max-w-[1048px] flex-col items-center gap-8">
        <div className="flex flex-col gap-2.5 text-center">
          <h2 className="font-uncut-sans text-xl font-bold text-[#f0e6ff] md:text-2xl">
            The Visual Experience Engine provides SDK &amp; API integrations
          </h2>
          <p className={cn(homeSectionEyebrowClassName, 'text-[#d6c1ea]')}>with top eCommerce platforms</p>
        </div>
        <ul className="flex w-full list-none flex-wrap items-center justify-center gap-x-6 gap-y-6 opacity-95 sm:gap-x-8 sm:gap-y-6 md:gap-x-10 md:gap-y-6">
          {LOGOS.map((entry) => {
            const { src, alt, w, h } = entry
            const imageClassName = 'imageClassName' in entry ? entry.imageClassName : undefined
            return (
              <li key={alt} className="flex h-8 shrink-0 items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  width={w}
                  height={h}
                  className={imageClassName ?? 'h-8 w-auto object-contain object-center'}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
