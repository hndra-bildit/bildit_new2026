import { STOREFRONT_REMOTE } from '@/app/lib/storefront-remote-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

const CARDS = [
  {
    title: 'Native Checkout',
    body: 'Frictionless checkout across Apple Pay, Google Pay, and more. All from within your app.',
    bg: STOREFRONT_REMOTE.transformingNativeBg,
    tint: 'from-fuchsia-500/35 to-violet-900/35'
  },
  {
    title: 'Banner Integrations',
    body: 'Push campaigns to every surface — homepage, category, and mobile — from a single edit.',
    bg: STOREFRONT_REMOTE.transformingBannerBg,
    tint: 'from-pink-400/30 to-indigo-900/30'
  },
  {
    title: 'Customise Your Storefront',
    body: 'Drag, drop, publish. Your brand, your layout — no design or engineering help needed.',
    bg: STOREFRONT_REMOTE.transformingStorefrontBg,
    tint: 'from-purple-400/25 to-slate-900/30'
  },
  {
    title: 'App Clips',
    body: 'Let shoppers experience your app instantly — no install needed. Powered by BILDIT.',
    bg: STOREFRONT_REMOTE.transformingAppClipBg,
    tint: 'from-cyan-500/20 to-violet-900/35'
  }
] as const

/** Figma Section - TRANSFORMING (4729:27706). */
export function StorefrontTransforming({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'rounded-t-[48px] rounded-b-none bg-white px-3 py-14 sm:px-4 md:px-[116px] md:py-[50px]',
        className
      )}
      aria-labelledby="storefront-transforming-heading"
    >
      <h2
        id="storefront-transforming-heading"
        className="mx-auto max-w-[1100px] text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight text-neutral-900 md:text-[48px]"
      >
        Offer Better Native Mobile Experiences
      </h2>

      <div className="mx-auto mt-12 grid max-w-[1280px] gap-8 md:mt-14 lg:grid-cols-2 lg:gap-10">
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col overflow-hidden rounded-[20px] border border-black/[0.08] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          >
            <div className="relative h-[280px] w-full overflow-hidden bg-[#f5f7fa]">
              <Image
                src={card.bg}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 618px"
              />
              <div
                className={cn('pointer-events-none absolute inset-0 bg-gradient-to-br mix-blend-multiply', card.tint)}
                aria-hidden
              />
            </div>
            <div className="flex flex-col gap-2 border-t border-black/[0.06] px-8 py-7 md:px-8">
              <h3 className="font-[family-name:var(--font-uncut-sans)] text-xl font-bold text-neutral-900">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-neutral-600">
                {card.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
