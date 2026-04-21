import { cn } from '@/utils/cn'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    quote:
      '"We went from waiting two weeks for a banner update to pushing it live ourselves in under five minutes. That\'s not an exaggeration."',
    initials: 'JL',
    name: 'Jamie Liu',
    role: 'Head of eCommerce, Stylez'
  },
  {
    quote:
      '"BILDIT gave our marketing team true independence. Campaigns that used to require engineering are now fully self-service."',
    initials: 'MR',
    name: 'Marcus Reid',
    role: 'VP Marketing, Lux Retail'
  },
  {
    quote:
      '"The A/B testing alone paid for the platform in month one. We found a 34% lift in checkout conversion — it\'s now our default homepage."',
    initials: 'SK',
    name: 'Sarah Kim',
    role: 'Director of Growth, FashionCo'
  }
] as const

const CARD_GRADIENT = 'linear-gradient(250deg, rgba(10,1,26,0.75) 0%, rgba(29,3,58,0.75) 41%, rgba(40,1,118,0.75) 99%)'

/** Figma Section - TESTIMONIALS (4729:27910). */
export function StorefrontTestimonials({ className }: { className?: string }) {
  return (
    <section
      className={cn('relative overflow-hidden px-3 py-12 sm:px-6 md:px-[118px] md:py-[50px]', className)}
      aria-labelledby="storefront-testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 top-0 size-[600px] max-h-[400px] -translate-x-1/2 rounded-full opacity-15 blur-[36px]"
          style={{
            background: 'radial-gradient(circle, rgba(237,30,121,0.45) 0%, rgba(237,30,121,0) 70%)'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl px-6 py-14 sm:px-10 sm:py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl" aria-hidden>
          <Image
            src="/images/storefront/testimonials-bg.png"
            alt=""
            fill
            className="object-cover object-center opacity-90"
            sizes="1280px"
          />
        </div>

        <div className="relative z-[1] flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.08em] text-[#a07dc0]">
              What teams say
            </p>
            <h2
              id="storefront-testimonials-heading"
              className="font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight text-[#f0e6ff] md:text-[48px] md:leading-[48px]"
            >
              Built for speed.
              <br />
              Loved by teams.
            </h2>
          </div>

          <ul className="grid gap-5 md:grid-cols-3 md:gap-5">
            {TESTIMONIALS.map((t) => (
              <li
                key={t.name}
                className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] p-8 md:p-8"
                style={{ backgroundImage: CARD_GRADIENT }}
              >
                <p className="text-base text-[#c850f0]" aria-hidden>
                  ★★★★★
                </p>
                <p className="flex-1 font-[family-name:var(--font-uncut-sans)] text-base leading-[26.4px] text-white/75">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white/80"
                    style={{
                      background: 'linear-gradient(135deg, rgba(237,30,121,0.35) 0%, rgba(59,30,237,0.25) 100%)'
                    }}
                    aria-hidden
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-uncut-sans)] text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="font-[family-name:var(--font-uncut-sans)] text-[13px] text-white/35">{t.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
