import { homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import { CalendarHeart, CreditCard, LayoutTemplate, Paintbrush } from 'lucide-react'
import Image from 'next/image'

const FEATURES = [
  {
    title: 'Simplified Content Management',
    body: 'Simplify your content management for greater efficiency.',
    icon: LayoutTemplate,
    highlight: true
  },
  {
    title: 'Easy to Use Elegant Templates',
    body: 'Sleek and user-friendly design to use by everybody.',
    icon: Paintbrush,
    highlight: false
  },
  {
    title: 'Real Control of Promotion Scheduling',
    body: 'Effortlessly manage and schedule promotions with our CMS.',
    icon: CalendarHeart,
    highlight: false
  },
  {
    title: 'Intuitive Native Checkout',
    body: 'A seamless and user-friendly payment process designed for mobile apps.',
    icon: CreditCard,
    highlight: false
  }
] as const

/** Figma Section_2_1 (5143:16928). */
export function StorefrontEverythingYouNeed({ className }: { className?: string }) {
  return (
    <section
      className={cn('relative overflow-hidden bg-white py-16 md:py-24', className)}
      aria-labelledby="storefront-everything-heading"
    >
      <div
        className="pointer-events-none absolute left-[20%] top-[28%] size-[400px] rounded-full bg-[rgba(124,58,237,0.15)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[15%] top-[8%] size-[400px] rounded-full bg-[rgba(232,69,144,0.08)] blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1512px] px-3 sm:px-4">
        <h2
          id="storefront-everything-heading"
          className={cn(
            homeSectionTitleClassName,
            'px-4 text-center text-[40px] leading-tight md:text-[48px] md:leading-[48px]'
          )}
        >
          Everything Your Team Needs.
        </h2>

        <div className="mt-12 flex flex-col items-stretch gap-12 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-6 xl:px-12">
          <div className="mx-auto flex w-full max-w-[356px] shrink-0 flex-col gap-4">
            {FEATURES.map(({ title, body, icon: Icon, highlight }) => (
              <div
                key={title}
                className={cn(
                  'flex flex-col gap-1.5 rounded-2xl border p-2.5 md:p-2.5',
                  highlight ? 'border-transparent bg-[#f7ebf2] backdrop-blur-[10px]' : 'border-black/10 bg-white'
                )}
              >
                <div className="flex items-center gap-0">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg text-[#7c3aed]">
                    <Icon className="size-6 stroke-[1.5]" aria-hidden />
                  </span>
                  <p className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold leading-6 text-neutral-900">
                    {title}
                  </p>
                </div>
                <p
                  className={cn(
                    'pl-2.5 font-[family-name:var(--font-uncut-sans)] text-base leading-6',
                    highlight ? 'text-neutral-900' : 'text-neutral-500'
                  )}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[726px] flex-1">
            <div className="relative aspect-[726/440] w-full">
              <div className="absolute inset-x-[4%] top-[8%] overflow-hidden rounded-lg shadow-[0px_19px_39px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/storefront/everything-laptop-screen.png"
                  alt="BILDIT banners dashboard on laptop"
                  width={1440}
                  height={800}
                  className="h-auto w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
              <div className="absolute -bottom-1 right-0 w-[min(22%,168px)] drop-shadow-[0_4px_14px_rgba(88,89,92,0.35)] sm:right-[2%] sm:w-[min(22%,152px)]">
                <Image
                  src="/images/storefront/everything-phone.svg"
                  alt="Mobile storefront preview on phone"
                  width={152}
                  height={309}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
