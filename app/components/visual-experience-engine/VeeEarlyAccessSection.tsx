import { BilditDualMarketingGlows } from '@/app/components/marketing/BilditMarketingGlows'
import { veeEarlyAccessRocket } from '@/app/lib/vee-early-access-assets'
import Image from 'next/image'
import Link from 'next/link'

const BENEFITS = [
  'Free Implementation',
  'Free Training',
  'Free 180 Day Trial',
  'First 10 Approved Customers Only'
] as const

export function VeeEarlyAccessSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-[100px]">
      <BilditDualMarketingGlows />

      <div className="relative z-[1] mx-auto max-w-[938px] px-4 md:px-6">
        <div className="rounded-3xl border border-black/10 bg-white/70 px-6 py-10 shadow-[0px_0px_40px_0px_rgba(200,80,240,0.15),0px_0px_80px_0px_rgba(232,69,144,0.08)] backdrop-blur-sm md:px-10 md:py-14">
          <div className="flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl [background-image:var(--bildit-gradient-soft-icon-tile)]">
              <Image src={veeEarlyAccessRocket} alt="" width={32} height={32} className="size-8" />
            </div>
          </div>

          <h2 className="mt-8 text-center font-uncut-sans text-3xl font-bold leading-tight text-[#171717] md:text-4xl">
            Interested in our Early Access Program?
          </h2>

          <p className="mx-auto mt-4 max-w-[638px] text-center text-lg leading-relaxed text-[#595959]">
            If you&apos;re excited about creating and personalizing amazing content with a visual editor and live
            previews, <span className="font-semibold text-[#171717]">WE WANT YOU</span>. We are looking for 10 eCommerce
            brands who want to use our product for free for 6 months with our training and implementation.
          </p>

          <p className="mx-auto mt-6 max-w-[594px] text-center font-uncut-sans text-base text-[#595959]">
            What do we get? We get your feedback, we add your ideas to our roadmap, and our investors love it!
          </p>

          <ul className="mx-auto mt-8 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2">
            {BENEFITS.map((label) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-black/[0.03] bg-white/90 py-3.5 pl-5 pr-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)]">
                  ✓
                </span>
                <span className="font-uncut-sans text-base font-medium text-[#171717]">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <Link
              href="/pricing/"
              className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[#737373] bg-white px-8 font-uncut-sans text-base font-medium text-[#171717] transition-colors hover:bg-neutral-50"
            >
              Apply for Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
