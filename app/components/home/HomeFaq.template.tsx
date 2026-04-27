// HomeFaq:v2 legacy=false
// @template v2

'use client'

import React, { useState } from 'react'
import { PRICING_FAQ_SALES_URL } from '@/app/components/Components'
import { HOME_FAQ_ENTRIES, homeFaqGetStartedAnswerParts } from '@/app/components/Components'
import { cn } from '@/app/components/Components'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

function FaqAnswer({ index }) {
  if (index === HOME_FAQ_ENTRIES.length - 1) {
    const { prefix, signupUrl, suffix } = homeFaqGetStartedAnswerParts()
    return (
      <p className="font-[family-name:var(--font-inter)] px-5 pb-4 text-sm leading-relaxed text-neutral-600 md:px-6 md:text-base">
        {prefix}
        <Link
          href={signupUrl}
          className="font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-900"
          rel="noopener noreferrer"
        >
          {signupUrl}
        </Link>
        {suffix}
      </p>
    )
  }
  const text = HOME_FAQ_ENTRIES[index].text
  return (
    <p className="font-[family-name:var(--font-inter)] px-5 pb-4 text-sm leading-relaxed text-neutral-600 md:px-6 md:text-base">
      {text}
    </p>
  )
}
export function HomeFaq({ className }) {
  /**
   * @group General
   * @type Boolean
   */
  const ulLiRoundedCornersToggle = true
  /**
   * @group div
   * @type RichText
   */
  const divH2Text = 'Questions,'
  /**
   * @group div
   * @type RichText
   */
  const divP = 'FAQ'
  /**
   * @group div
   * @type RichText
   */
  const link = 'Talk to Sales'
  /**
   * @group div
   * @type Boolean
   */
  const roundedCorners = true
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className={cn('home-scheme-light bg-white py-16 md:py-20 lg:py-24', className)}>
      <div className="mx-auto flex max-w-[1260px] flex-col gap-12 px-6 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex max-w-[360px] flex-col gap-4">
          <p
            className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-neutral-900"
            data-bildit-var-name="divP"
            data-bildit-var-type="RichText"
          >
            {divP}
          </p>
          <h2
            className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl md:leading-[3rem]"
            data-bildit-var-name="divH2Text"
            data-bildit-var-type="RichText"
          >
            {divH2Text}
            <br />
            {divH2Text}
          </h2>
          <p
            className="font-[family-name:var(--font-inter)] pb-1 text-[15px] leading-6 text-[#595959]"
            data-bildit-var-name="divP"
            data-bildit-var-type="RichText"
          >
            {divP}
            <br className="hidden sm:block" /> {divP}
          </p>
          <Link
            href={PRICING_FAQ_SALES_URL}
            className={`inline-flex w-fit items-center bg-neutral-900 px-7 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90 ${roundedCorners ? 'rounded-full' : ''}`}
            rel="noopener noreferrer"
            data-bildit-var-name="roundedCorners"
            data-bildit-var-type="Boolean"
          >
            {link}
          </Link>
        </div>

        <ul
          className="min-w-0 flex-1 space-y-3"
          data-bildit-var-name="ulLiRoundedCornersToggle"
          data-bildit-var-type="Boolean"
        >
          {HOME_FAQ_ENTRIES.map((item, i) => {
            const isOpen = open === i
            return (
              <li
                key={item.name}
                className={`overflow-hidden border border-neutral-200 bg-white shadow-sm ${ulLiRoundedCornersToggle ? 'rounded-2xl' : ''}`}
                data-bildit-var-name="ulLiRoundedCornersToggle"
                data-bildit-var-type="Boolean"
              >
                <button
                  type="button"
                  className="font-[family-name:var(--font-inter)] flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-neutral-900 md:px-6 md:text-lg"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.name.trimEnd()}
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-neutral-500 transition-transform duration-300',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <FaqAnswer index={i} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default HomeFaq
