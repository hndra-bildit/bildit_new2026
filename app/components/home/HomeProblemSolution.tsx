import type { CSSProperties } from 'react'
import { homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { BilditLogo } from '@/app/components/site-header/BilditLogo'
import { cn } from '@/utils/cn'
import { Check } from 'lucide-react'

const PROBLEM_POINTS = [
  'Dev tickets. Release cycles. Missed windows.',
  'Death by delay.',
  'Slow sites kill momentum.',
  'Slow teams lose revenue.'
] as const

const PUSH_OUT_ITEMS = ['Campaigns', 'Personalized experiences', 'Conversion experiments', 'Brand upgrades'] as const

const IMMEDIATE_POINTS = ['No engineering bottleneck.', 'No performance regression.', 'No deployments.'] as const

/** Accent gradient for “Immediately. No trade-offs.” — same stops as pill border/tint. */
const solutionAccentGradient: CSSProperties = {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage: 'linear-gradient(170deg, rgb(237, 30, 121) 0%, rgb(200, 80, 240) 50%, rgb(59, 30, 237) 100%)'
}

/**
 * Figma “Problem / Solution” (5119:16641): two-column narrative — broken workflow vs BILDIT.
 */
export function HomeProblemSolution({ className }: { className?: string }) {
  return (
    <section className={cn('home-scheme-light relative w-full overflow-hidden bg-white text-neutral-900', className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[10%] top-[20%] size-[400px] rounded-full bg-[rgba(255,68,102,0.05)] blur-[100px] md:left-[150px]" />
        <div className="absolute right-[5%] top-[60px] h-[649px] w-[min(584px,90vw)] md:right-[170px]">
          <div className="absolute left-[-40%] top-[149px] size-[500px] rounded-full bg-[rgba(200,80,240,0.08)] blur-[120px] md:left-[-184px]" />
          <div className="absolute right-0 top-8 size-[400px] rounded-full bg-[rgba(232,69,144,0.06)] blur-[100px]" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1512px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 md:gap-14 md:py-20 min-[1000px]:grid-cols-2 min-[1000px]:gap-x-8 min-[1000px]:gap-y-12 min-[1000px]:px-8 lg:gap-10 lg:px-12 lg:py-[100px] xl:px-[216px]">
        {/* Problem — Figma 5119:16646: pink top rule, label → headline → body → numbered list */}
        <div className="flex min-w-0 flex-col border-t-[5px] border-solid border-[#ed1e79] pt-5">
          <div className="flex flex-col gap-8 md:gap-[30px]">
            <div className="flex items-center gap-2.5">
              <span className="size-3 shrink-0 rounded-full bg-[#ff4466]" aria-hidden />
              <p className="font-[family-name:var(--font-uncut-sans)] text-xl font-semibold uppercase leading-[32.5px] text-[#ff4466]">
                This is broken.
              </p>
            </div>
            <h2 className={cn(homeSectionTitleClassName, 'max-w-full text-[#171717]')}>
              It&apos;s 2026. Why are marketers still waiting for developers?
            </h2>
            <p className="font-[family-name:var(--font-uncut-sans)] text-[17px] font-normal leading-7 text-[#171717] md:text-xl md:leading-[28px]">
              We&apos;re generating AI video in seconds.
              <br />
              But marketers still wait days to update a headline.
            </p>
            <ul className="flex flex-col gap-2.5">
              {PROBLEM_POINTS.map((line, i) => (
                <li key={line} className="flex items-center gap-2.5">
                  <span
                    className="inline-flex min-w-[2.25rem] shrink-0 items-center justify-center rounded-full border border-solid border-[#ff4466] px-2.5 py-1 font-[family-name:var(--font-uncut-sans)] text-xs leading-6 text-[#ff4466]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-neutral-500">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solution — Figma 5119:16665: purple top rule */}
        <div className="flex min-w-0 flex-col border-t-4 border-solid border-[#bc95ff] pt-5 lg:justify-center">
          <div className="flex flex-col gap-8 md:gap-[30px]">
            <p className="font-[family-name:var(--font-uncut-sans)] text-xl font-semibold uppercase leading-[32.5px] text-[#171717]">
              The Solution
            </p>
            <div className="[--header-logo-bild:#0d0118] [--header-logo-it:#ed1e79]">
              <span className="sr-only">BILDIT</span>
              <BilditLogo className="h-10 w-auto sm:h-11 md:h-[48px] md:w-auto" />
            </div>
            <p className="font-[family-name:var(--font-uncut-sans)] text-[17px] font-normal leading-[32.5px] text-[#171717] md:text-xl">
              Break free from deployments. Your site into a Visual Experience Engine.
            </p>

            <div className="flex flex-col gap-2.5 rounded-3xl">
              <p className="font-[family-name:var(--font-uncut-sans)] text-base font-bold uppercase tracking-[0.05em] text-[#171717]">
                Push out Instantly
              </p>
              <ul className="flex flex-wrap gap-2 font-[family-name:var(--font-uncut-sans)] text-base font-medium leading-7">
                {PUSH_OUT_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="inline-flex rounded-[40px] border border-solid border-[rgb(200,80,240)]/45 bg-[rgba(237,30,121,0.06)] px-[15px] py-1.5 text-[#8a2166]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p
                className="inline-block max-w-full font-[family-name:var(--font-uncut-sans)] text-base font-bold uppercase leading-8 md:text-lg"
                style={solutionAccentGradient}
              >
                Immediately. No trade-offs.
              </p>
              <ul className="flex flex-col gap-4">
                {IMMEDIATE_POINTS.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-6 shrink-0 text-[#ed1e79]" strokeWidth={2.25} aria-hidden />
                    <span className="font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#171717]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="inline-block font-[family-name:var(--font-uncut-sans)] text-lg font-bold uppercase leading-7 text-[#171717] md:text-xl">
              Just control.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
