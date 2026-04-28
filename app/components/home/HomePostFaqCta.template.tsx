// HomePostFaqCta:v1.0 legacy=false
// @template v2
import React from 'react'
import {
  homeSectionSubtitleOnDarkClassName,
  homeSectionTitleOnDarkClassName
} from './home-section-typography'
import { cn } from '../../../utils/cn'
import { ArrowRight, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const NEGATION_LINES = ['Not your deploy cycle.', 'Not your dev queue.', 'Not your release calendar.']
const VALUE_PILLARS = ['Fast', 'Controlled', 'Sophisticated']
const checkChipClassName =
  'mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)]'

/**
 * Figma: Section (node 4726:15551) — CTA band below FAQ.
 */
export function HomePostFaqCta({ className }) {
  /**
   * @group General
   * @type Boolean
   */
  const roundedCorners = true
  /**
   * @group General
   * @type RichText
   */
  const span = '\u2713'
  /**
   * @group div
   * @type Boolean
   */
  const divImageRoundedCornersToggle = true
  /**
   * @group div
   * @type String
   */
  const divImageSrcValue = '/images/home-post-faq-cta/container-bg.png'
  /**
   * @group div
   * @type String
   */
  const divLinkHrefValue = 'https://signup.bildit.co/signup'
  /**
   * @group div
   * @type Boolean
   */
  const divLinkRoundedCornersToggle = true
  /**
   * @group div
   * @type RichText
   */
  const divLinkText = 'Start Building'
  /**
   * @group div
   * @type RichText
   */
  const divPText = 'Preview everything. Publish instantly. Never wait again.'
  /**
   * @group div
   * @type RichText
   */
  const h2SpanText = 'Your website should move at'
  /**
   * @group div
   * @type Boolean
   */
  const sectionDivRoundedCornersToggle = true
  return (
    <section className={cn('w-full', className)} aria-labelledby="home-post-faq-cta-heading">
      <div
        className={`relative w-full overflow-hidden px-6 py-16 sm: sm:px-10 md:px-16 md:py-20 lg:px-[116px] lg:py-[100px] ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
        data-bildit-var-name="sectionDivRoundedCornersToggle"
        data-bildit-var-type="Boolean"
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 sm: ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
          data-bildit-var-name="sectionDivRoundedCornersToggle"
          data-bildit-var-type="Boolean"
        >
          <div
            className={`absolute inset-0 bg-black sm: ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
            data-bildit-var-name="sectionDivRoundedCornersToggle"
            data-bildit-var-type="Boolean"
          />
          <div
            className={`absolute inset-0 sm: ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
            data-bildit-var-name="sectionDivRoundedCornersToggle"
            data-bildit-var-type="Boolean"
          >
            <div
              className={`relative size-full sm: ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
              data-bildit-var-name="sectionDivRoundedCornersToggle"
              data-bildit-var-type="Boolean"
            >
              <Image
                src={divImageSrcValue}
                alt=""
                fill
                sizes="100vw"
                className={`object-cover opacity-[0.35] sm: ${divImageRoundedCornersToggle ? 'rounded-none' : ''}`}
                priority={false}
                data-bildit-var-name="divImageSrcValue"
                data-bildit-var-type="String"
              />
            </div>
          </div>
          <div
            className={`absolute inset-0 sm: ${sectionDivRoundedCornersToggle ? 'rounded-none' : ''}`}
            style={{
              backgroundImage: 'linear-gradient(114.47deg, rgba(0, 0, 0, 0.45) 0.54%, rgba(0, 0, 0, 0.157) 100%)'
            }}
            data-bildit-var-name="sectionDivRoundedCornersToggle"
            data-bildit-var-type="Boolean"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 text-center md:gap-10">
          <div className="flex flex-col items-center gap-3 md:gap-4">
            <h2
              id="home-post-faq-cta-heading"
              className={cn(homeSectionTitleOnDarkClassName, 'text-balance text-center text-[#f0e6ff]')}
            >
              <span className="block" data-bildit-var-name="h2SpanText" data-bildit-var-type="RichText">
                {h2SpanText}
              </span>
              <span className="block" data-bildit-var-name="h2SpanText" data-bildit-var-type="RichText">
                {h2SpanText}
              </span>
            </h2>
            <p
              className={cn(
                homeSectionSubtitleOnDarkClassName,
                'max-w-[640px] text-balance text-center text-base leading-[1.65] text-[#d6c1ea] md:max-w-[700px] md:text-[17px] md:leading-7'
              )}
              data-bildit-var-name="divPText"
              data-bildit-var-type="RichText"
            >
              {divPText}
            </p>
          </div>

          <ul
            className="flex w-full max-w-2xl flex-col items-stretch justify-center gap-2.5 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-2"
            aria-label="What slows you down today"
            data-bildit-var-name="roundedCorners"
            data-bildit-var-type="Boolean"
          >
            {NEGATION_LINES.map((line) => (
              <li key={line} className="flex items-center justify-center gap-2.5">
                <span
                  className={`inline-flex size-6 shrink-0 items-center justify-center border border-white/20 text-white/80 ${roundedCorners ? 'rounded-full' : ''}`}
                  aria-hidden
                  data-bildit-var-name="roundedCorners"
                  data-bildit-var-type="Boolean"
                >
                  <X className="size-3.5" strokeWidth={2.25} />
                </span>
                <span className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-none text-base leading-7')}>{line}</span>
              </li>
            ))}
          </ul>

          <ul
            className="flex w-full max-w-md flex-col items-stretch gap-2.5 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-2"
            aria-label="What BILDIT delivers"
            data-bildit-var-name="span"
            data-bildit-var-type="RichText"
          >
            {VALUE_PILLARS.map((label) => (
              <li key={label} className="flex items-center justify-center gap-2.5">
                <span
                  className={checkChipClassName}
                  aria-hidden
                  data-bildit-var-name="span"
                  data-bildit-var-type="RichText"
                >
                  {span}
                </span>
                <span
                  className={cn(
                    homeSectionSubtitleOnDarkClassName,
                    'max-w-none text-base font-normal leading-7 text-[#f0e6ff]'
                  )}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <p
            className={cn(
              homeSectionSubtitleOnDarkClassName,
              'max-w-[520px] text-balance text-center text-lg leading-7 text-[#f0e6ff] md:text-[18px] md:leading-[29.25px]'
            )}
            data-bildit-var-name="divPText"
            data-bildit-var-type="RichText"
          >
            {divPText}
          </p>

          <Link
            href={divLinkHrefValue}
            className={`font-[family-name:var(--font-uncut-sans)] inline-flex h-11 items-center justify-center gap-2.5 bg-gradient-to-r from-[#c850f0] to-[#e84590] px-[19px] py-2.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${divLinkRoundedCornersToggle ? 'rounded-full' : ''}`}
            data-bildit-var-name="divLinkHrefValue"
            data-bildit-var-type="String"
          >
            {divLinkText}
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default HomePostFaqCta
