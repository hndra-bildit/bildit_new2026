// HomeProblemSolution:v2 legacy=false
// @template v2
import React from 'react'
import { homeSectionEyebrowClassName, homeSectionTitleClassName } from '@/app/components/Components'
import { BilditLogo } from '@/app/components/Components'
import { cn } from '@/app/components/Components'
import { X } from 'lucide-react'

const PROBLEM_POINTS = [
  'Dev tickets. Release cycles. Missed windows.',
  'Death by delay.',
  'Slow sites kill momentum.',
  'Slow teams lose revenue.'
]
const PUSH_OUT_ITEMS = ['Campaigns', 'Personalized experiences', 'Conversion experiments', 'Brand upgrades']
const IMMEDIATE_POINTS = ['No engineering bottleneck.', 'No performance regression.', 'No deployments.']

/** Accent gradient for “Immediately. No trade-offs.” — same stops as pill border/tint. */
const solutionAccentGradient = {
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundImage: 'linear-gradient(170deg, rgb(237, 30, 121) 0%, rgb(200, 80, 240) 50%, rgb(59, 30, 237) 100%)'
}

/**
 * Figma “Problem / Solution” (5119:16641): two-column narrative — broken workflow vs BILDIT.
 */
export function HomeProblemSolution({ className }) {
  /**
   * @group General
   * @type Boolean
   */
  const liRoundedCorners = true
  /**
   * @group General
   * @type RichText
   */
  const liSpanText = '\u2713'
  /**
   * @group General
   * @type Boolean
   */
  const spanRoundedCorners = true
  /**
   * @group div
   * @type Boolean
   */
  const sectionDivRoundedCornersToggle = true
  /**
   * @group div
   * @type RichText
   */
  const divH2Text = "It's 2026. Why are marketers still waiting for developers?"
  /**
   * @group div
   * @type RichText
   */
  const divPText = 'This is broken.'
  /**
   * @group div
   * @type Boolean
   */
  const roundedCorners = true
  /**
   * @group div
   * @type RichText
   */
  const span = 'BILDIT'
  return (
    <section className={cn('home-scheme-light relative w-full overflow-hidden bg-white text-neutral-900', className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className={`absolute left-[10%] top-[20%] size-[400px] bg-[rgba(255,68,102,0.05)] blur-[100px] md:left-[150px] ${sectionDivRoundedCornersToggle ? 'rounded-full' : ''}`}
          data-bildit-var-name="sectionDivRoundedCornersToggle"
          data-bildit-var-type="Boolean"
        />
        <div className="absolute right-[5%] top-[60px] h-[649px] w-[min(584px,90vw)] md:right-[170px]">
          <div
            className={`absolute left-[-40%] top-[149px] size-[500px] bg-[rgba(200,80,240,0.08)] blur-[120px] md:left-[-184px] ${sectionDivRoundedCornersToggle ? 'rounded-full' : ''}`}
            data-bildit-var-name="sectionDivRoundedCornersToggle"
            data-bildit-var-type="Boolean"
          />
          <div
            className={`absolute right-0 top-8 size-[400px] bg-[rgba(232,69,144,0.06)] blur-[100px] ${sectionDivRoundedCornersToggle ? 'rounded-full' : ''}`}
            data-bildit-var-name="sectionDivRoundedCornersToggle"
            data-bildit-var-type="Boolean"
          />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1512px] grid-cols-1 gap-12 px-6 py-16 sm:px-10 md:gap-14 md:py-20 min-[1000px]:grid-cols-2 min-[1000px]:gap-x-8 min-[1000px]:gap-y-12 min-[1000px]:px-8 lg:gap-10 lg:px-[116px] lg:py-24">
        {/* Problem — Figma 5119:16646: pink top rule, label → headline → body → X-mark list */}
        <div className="flex min-w-0 flex-col border-t-[5px] border-solid border-[#ed1e79] pt-5">
          <div className="flex flex-col gap-8 md:gap-[30px]">
            <div className="flex items-center gap-2.5">
              <span
                className={`size-3 shrink-0 bg-[#ff4466] ${roundedCorners ? 'rounded-full' : ''}`}
                aria-hidden
                data-bildit-var-name="roundedCorners"
                data-bildit-var-type="Boolean"
              />
              <p
                className={cn(homeSectionEyebrowClassName, 'text-[#ff4466]')}
                data-bildit-var-name="divPText"
                data-bildit-var-type="RichText"
              >
                {divPText}
              </p>
            </div>
            <h2
              className={cn(homeSectionTitleClassName, 'max-w-full text-[#171717]')}
              data-bildit-var-name="divH2Text"
              data-bildit-var-type="RichText"
            >
              {divH2Text}
            </h2>
            <p
              className="font-[family-name:var(--font-uncut-sans)] text-[17px] font-normal leading-7 text-[#171717] md:text-xl md:leading-[28px]"
              data-bildit-var-name="divPText"
              data-bildit-var-type="RichText"
            >
              {divPText}
              <br />
              {divPText}
            </p>
            <ul
              className="flex flex-col gap-2.5"
              data-bildit-var-name="spanRoundedCorners"
              data-bildit-var-type="Boolean"
            >
              {PROBLEM_POINTS.map((line) => (
                <li key={line} className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex size-9 shrink-0 items-center justify-center border border-solid border-[#ff4466] text-[#ff4466] ${spanRoundedCorners ? 'rounded-full' : ''}`}
                    aria-hidden
                    data-bildit-var-name="spanRoundedCorners"
                    data-bildit-var-type="Boolean"
                  >
                    <X className="size-4" strokeWidth={2.25} />
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
        <div className="flex min-w-0 flex-col border-t-4 border-solid border-[#171717] pt-5 lg:justify-center">
          <div className="flex flex-col gap-8 md:gap-[30px]">
            <p
              className={cn(homeSectionEyebrowClassName, 'text-[#171717]')}
              data-bildit-var-name="divPText"
              data-bildit-var-type="RichText"
            >
              {divPText}
            </p>
            <div className="[--header-logo-bild:#0d0118] [--header-logo-it:#ed1e79]">
              <span className="sr-only" data-bildit-var-name="span" data-bildit-var-type="RichText">
                {span}
              </span>
              <BilditLogo className="h-10 w-auto sm:h-11 md:h-[48px] md:w-auto" />
            </div>
            <p
              className="font-[family-name:var(--font-uncut-sans)] text-[17px] font-normal leading-7 text-[#171717] md:text-xl md:leading-[28px]"
              data-bildit-var-name="divPText"
              data-bildit-var-type="RichText"
            >
              {divPText}
            </p>

            <div
              className={`flex flex-col gap-2.5 ${sectionDivRoundedCornersToggle ? 'rounded-3xl' : ''}`}
              data-bildit-var-name="sectionDivRoundedCornersToggle"
              data-bildit-var-type="Boolean"
            >
              <p
                className="font-[family-name:var(--font-uncut-sans)] text-base font-bold text-[#171717]"
                data-bildit-var-name="divPText"
                data-bildit-var-type="RichText"
              >
                {divPText}
              </p>
              <ul
                className="flex flex-wrap gap-2 font-[family-name:var(--font-uncut-sans)] text-base font-medium leading-7"
                data-bildit-var-name="liRoundedCorners"
                data-bildit-var-type="Boolean"
              >
                {PUSH_OUT_ITEMS.map((item) => (
                  <li
                    key={item}
                    className={`inline-flex -[40px] border border-solid border-black/[0.08] bg-white px-[15px] py-1.5 text-[#171717] ${liRoundedCorners ? 'rounded' : ''}`}
                    data-bildit-var-name="liRoundedCorners"
                    data-bildit-var-type="Boolean"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p
                className="inline-block max-w-full font-[family-name:var(--font-uncut-sans)] text-base font-bold leading-8 md:text-lg"
                style={solutionAccentGradient}
                data-bildit-var-name="divPText"
                data-bildit-var-type="RichText"
              >
                {divPText}
              </p>
              <ul className="flex flex-col gap-4">
                {IMMEDIATE_POINTS.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex size-6 shrink-0 items-center justify-center text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)] ${spanRoundedCorners ? 'rounded-full' : ''}`}
                      aria-hidden
                      data-bildit-var-name="spanRoundedCorners"
                      data-bildit-var-type="Boolean"
                    >
                      {liSpanText}
                    </span>
                    <span className="font-[family-name:var(--font-uncut-sans)] text-base leading-6 text-[#171717]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="inline-block font-[family-name:var(--font-uncut-sans)] text-lg font-bold leading-7 text-[#171717] md:text-xl"
              data-bildit-var-name="divPText"
              data-bildit-var-type="RichText"
            >
              {divPText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeProblemSolution
