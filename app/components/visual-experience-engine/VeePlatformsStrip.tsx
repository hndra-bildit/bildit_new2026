import { homeSectionEyebrowClassName } from '@/app/components/home/home-section-typography'
import {
  veePlatformMagento,
  veePlatformSalesforce,
  veePlatformSap,
  veePlatformShopify
} from '@/app/lib/vee-platforms-strip-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

/** Width/height match each SVG viewBox for correct aspect ratio in Next/Image. */
const ROW = [
  { src: veePlatformSalesforce, alt: 'Salesforce', w: 34, h: 27 },
  { src: veePlatformShopify, alt: 'Shopify Plus', w: 258, h: 53 },
  { src: veePlatformSap, alt: 'SAP', w: 199, h: 98 },
  { src: veePlatformMagento, alt: 'Magento', w: 245, h: 82 }
] as const

export function VeePlatformsStrip() {
  return (
    <section className="border-y border-black/5 bg-white/80 py-10 md:py-11">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 md:px-8">
        <p className={cn(homeSectionEyebrowClassName, 'text-center text-[#595959]')}>
          Integrated with the top eCommerce Platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 md:gap-14">
          {ROW.map(({ src, alt, w, h }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              width={w}
              height={h}
              className="h-8 w-auto max-w-[200px] object-contain object-center md:max-w-none"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
