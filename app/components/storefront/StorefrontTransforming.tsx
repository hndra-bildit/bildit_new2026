import { MOBILE_APP_STOREFRONT_IMAGES } from '@/app/lib/storefront-remote-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

const scrollPaddingClassName =
  'scroll-pl-6 scroll-pr-6 sm:scroll-pl-8 sm:scroll-pr-8 md:scroll-pl-10 md:scroll-pr-10 lg:scroll-pl-[116px] lg:scroll-pr-[116px]'

const trackPaddingClassName = 'pl-6 pr-6 sm:pl-8 sm:pr-8 md:pl-10 md:pr-10 lg:pl-[116px] lg:pr-[116px]'

const CARDS = [
  {
    id: 'storefront-feature-native-checkout',
    title: 'Native Checkout',
    body: 'Frictionless checkout across Apple Pay, Google Pay, and more. All from within your app.',
    bg: MOBILE_APP_STOREFRONT_IMAGES.nativeCheckout
  },
  {
    id: 'storefront-feature-banners',
    title: 'Banner Integrations',
    body: 'Push campaigns to every surface — homepage, category, and mobile — from a single edit.',
    bg: MOBILE_APP_STOREFRONT_IMAGES.banners
  },
  {
    id: 'storefront-feature-customise',
    title: 'Customise Your Storefront',
    body: 'Drag, drop, publish. Your brand, your layout — no design or engineering help needed.',
    bg: MOBILE_APP_STOREFRONT_IMAGES.storefront
  },
  {
    id: 'storefront-feature-app-clips',
    title: 'App Clips',
    body: 'Let shoppers experience your app instantly — no install needed. Powered by BILDIT.',
    bg: MOBILE_APP_STOREFRONT_IMAGES.appClips
  }
] as const

/** Figma Section - TRANSFORMING (4729:27706). */
export function StorefrontTransforming({ className }: { className?: string }) {
  return (
    <section
      className={cn('rounded-t-[48px] rounded-b-none bg-white py-14 md:py-[50px]', className)}
      aria-labelledby="storefront-transforming-heading"
    >
      <h2
        id="storefront-transforming-heading"
        className="mx-auto max-w-[1100px] px-6 text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight text-neutral-900 sm:px-8 md:px-10 md:text-[48px] lg:px-[116px]"
      >
        Offer Better Native Mobile Experiences
      </h2>

      <div
        className={cn(
          'mt-10 w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain pb-4 md:mt-12',
          '[-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/15 [&::-webkit-scrollbar-track]:bg-transparent',
          scrollPaddingClassName
        )}
        role="region"
        aria-label="Storefront feature highlights"
      >
        <div className={cn('flex w-max gap-4 sm:gap-5', trackPaddingClassName)}>
          {CARDS.map((card, index) => (
            <article
              key={card.id}
              id={card.id}
              className={cn(
                'flex w-[min(300px,calc(100vw-3rem))] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-black/10 bg-white',
                'sm:w-[min(320px,calc(100vw-4rem))] md:w-[min(360px,calc(100vw-5rem))] lg:w-[360px]'
              )}
            >
              <div className="relative w-full overflow-hidden rounded-t-2xl bg-[#f5f7fa] sm:rounded-t-3xl">
                <div className="relative aspect-[402/220] w-full">
                  <Image
                    src={card.bg}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) min(100vw - 3rem, 300px), (max-width: 1024px) 360px, 360px"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-t border-black/[0.06] px-3.5 py-3.5 sm:px-4 sm:py-4">
                <h3 className="font-[family-name:var(--font-uncut-sans)] text-[17px] font-semibold leading-6 text-neutral-900">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-uncut-sans)] text-sm leading-6 text-[#595959]">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
