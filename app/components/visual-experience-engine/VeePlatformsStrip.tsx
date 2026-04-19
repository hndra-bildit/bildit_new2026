import {
  veePlatformMagento,
  veePlatformSalesforce,
  veePlatformSap,
  veePlatformShopify
} from '@/app/lib/vee-platforms-strip-assets'
import Image from 'next/image'

const ROW = [
  { src: veePlatformSalesforce, alt: 'Salesforce', w: 40, h: 32 },
  { src: veePlatformShopify, alt: 'Shopify Plus', w: 126, h: 32 },
  { src: veePlatformSap, alt: 'SAP', w: 71, h: 32 },
  { src: veePlatformMagento, alt: 'Magento', w: 114, h: 32 }
] as const

export function VeePlatformsStrip() {
  return (
    <section className="border-y border-black/5 bg-white/80 py-10 md:py-11">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-4 md:px-8">
        <p className="text-center font-uncut-sans text-sm font-semibold uppercase tracking-[0.7px] text-[#595959]">
          Integrated with the top eCommerce Platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 md:gap-14">
          {ROW.map(({ src, alt, w, h }) => (
            <Image key={alt} src={src} alt={alt} width={w} height={h} className="object-contain" />
          ))}
        </div>
      </div>
    </section>
  )
}
