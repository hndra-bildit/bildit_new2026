import { EarlyAccessProgramApply } from '@/app/components/early-access-program/EarlyAccessProgramApply'
import { StorefrontPlatformStrip } from '@/app/components/storefront/StorefrontPlatformStrip'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Early Access Program - Visual Experience Engine - Live Editor - Beautiful Content - Scheduling',
  description:
    'Limited early access spots for teams who want the Visual Experience Engine: 6 months free, free implementation, and free training.'
}

const BENEFITS = [{ label: '6 Months Free' }, { label: 'Free Implementation' }, { label: 'Free Training' }] as const

const SPOTS_TOTAL = 10
const SPOTS_TAKEN = 0

export default function EarlyAccessProgramPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <section className="relative overflow-hidden bg-[#0d0118]">
        <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden>
          <Image
            src="/home-early-access/line-waves.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0118]/55 via-[#0d0118]/25 to-[#0d0118]/75"
          aria-hidden
        />

        <div className="relative z-[1] mx-auto flex max-w-[960px] flex-col items-center px-4 pb-14 pt-10 text-center sm:px-6 md:pb-20 md:pt-14">
          <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.28em] text-[#d6c1ea]">
            Early access program
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight tracking-tight text-[#f0e6ff] md:text-5xl md:leading-[1.1]">
            Early Access Program
          </h1>

          <div className="mt-10 grid w-full max-w-[720px] gap-3 sm:grid-cols-3 sm:gap-4">
            {BENEFITS.map(({ label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-4 font-[family-name:var(--font-uncut-sans)] text-base font-semibold text-[#f0e6ff] shadow-[0_0_0_1px_rgba(200,80,240,0.12)] backdrop-blur-sm md:py-5"
              >
                {label}
              </div>
            ))}
          </div>

          <p className="mt-8 font-[family-name:var(--font-uncut-sans)] text-lg font-medium text-[#e8d4ff] md:text-xl">
            {SPOTS_TAKEN} out of {SPOTS_TOTAL} Taken
          </p>
        </div>
      </section>

      <section className="border-b border-black/[0.06] bg-[#fafafa] py-12 md:py-16">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6">
          <div className="font-[family-name:var(--font-uncut-sans)] space-y-5 text-base leading-[1.75] text-[#333] md:text-[17px] md:leading-[1.7]">
            <p>
              We&apos;re opening up <strong className="font-semibold text-neutral-900">10 early access spots</strong>{' '}
              for teams who are tired of fighting their CMS and want to help shape what comes next. This isn&apos;t a
              beta you quietly suffer through—it&apos;s early access to the Visual Experience Engine we&apos;re actively
              building, refining, and pushing forward with real teams in real production environments.
            </p>
            <p>
              Early access partners get <strong className="font-semibold text-neutral-900">6 months free</strong>,{' '}
              <strong className="font-semibold text-neutral-900">free implementation</strong>, and{' '}
              <strong className="font-semibold text-neutral-900">free training</strong>. No gotchas. No
              &quot;starter&quot; limitations. You get the full platform, hands-on support from our team, and a direct
              line into how BILDIT evolves. The goal is speed, experimentation, and proving what&apos;s possible when
              visual teams aren&apos;t blocked by IT.
            </p>
            <p>
              In return, we&apos;re asking for honest feedback. What&apos;s friction today? What should be faster? What
              should never require a developer again? Your input directly influences our roadmap, prioritization, and
              product decisions. If you want to move faster than your CMS, shape the future of visual commerce, and help
              build something better than what the market has settled for—this is your seat at the table.
            </p>
            <p>
              This program is intentionally limited to 10 companies between{' '}
              <strong className="font-semibold text-neutral-900">$20M–$250M</strong> in revenue running a React website
              or React Native mobile app. If that&apos;s you—and you&apos;re ready to move faster, ship visually, and
              stop waiting on your CMS or dev queue—apply now. We&apos;ll review every application personally and select
              teams who want to build with us, not just use another tool. If you&apos;re serious about shaping what
              modern visual commerce should look like, this is how you get in.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden px-4 py-14 md:px-6 md:py-20"
        aria-labelledby="early-access-apply-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200, 80, 240, 0.18) 0%, transparent 55%)'
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-[720px] flex-col items-center gap-8 text-center">
          <h2
            id="early-access-apply-heading"
            className="font-[family-name:var(--font-uncut-sans)] text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
          >
            Apply
          </h2>
          <EarlyAccessProgramApply />
        </div>
      </section>

      <StorefrontPlatformStrip />
    </div>
  )
}
