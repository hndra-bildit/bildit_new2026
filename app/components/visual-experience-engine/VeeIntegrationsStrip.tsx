import {
  veeLogoAci,
  veeLogoAfterpay,
  veeLogoApplePay,
  veeLogoBazaarvoice,
  veeLogoMagento,
  veeLogoNetlify,
  veeLogoSalesforce,
  veeLogoSap,
  veeLogoShopify,
  veeLogoSyte,
  veeLogoVercel
} from '@/app/lib/vee-integrations-strip-assets'
import Image from 'next/image'

const LOGOS = [
  { src: veeLogoSalesforce, alt: 'Salesforce', w: 43, h: 34 },
  { src: veeLogoShopify, alt: 'Shopify', w: 86, h: 22 },
  { src: veeLogoSap, alt: 'SAP', w: 43, h: 19 },
  { src: veeLogoMagento, alt: 'Magento', w: 82, h: 22 },
  { src: veeLogoApplePay, alt: 'Apple Pay', w: 45, h: 18 },
  { src: veeLogoAfterpay, alt: 'Afterpay', w: 76, h: 15 },
  { src: veeLogoNetlify, alt: 'Netlify', w: 61, h: 25 },
  { src: veeLogoVercel, alt: 'Vercel', w: 72, h: 15 },
  { src: veeLogoAci, alt: 'ACI Worldwide', w: 89, h: 14 },
  { src: veeLogoSyte, alt: 'Syte', w: 58, h: 16 },
  { src: veeLogoBazaarvoice, alt: 'Bazaarvoice', w: 35, h: 28 }
] as const

export function VeeIntegrationsStrip() {
  return (
    <section className="border-y border-white/10 bg-[#0d0118] px-4 py-16 md:px-[232px] md:py-[81px]">
      <div className="mx-auto flex max-w-[1048px] flex-col items-center gap-8">
        <div className="flex flex-col gap-2.5 text-center">
          <h2 className="font-uncut-sans text-xl font-bold text-[#f0e6ff] md:text-2xl">
            The Visual Experience Engine provides SDK &amp; API integrations
          </h2>
          <p className="font-uncut-sans text-xs font-semibold uppercase tracking-[0.48px] text-[#d6c1ea]">
            with top eCommerce platforms
          </p>
        </div>
        <div className="w-full overflow-x-auto overflow-y-hidden opacity-95">
          <div className="mx-auto flex w-max max-w-none flex-nowrap items-center justify-center gap-x-6 sm:gap-x-8">
            {LOGOS.map(({ src, alt, w, h }) => (
              <span key={alt} className="inline-flex shrink-0">
                <Image src={src} alt={alt} width={w} height={h} className="h-8 w-auto max-w-none object-contain" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
