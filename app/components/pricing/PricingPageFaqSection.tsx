'use client'

import { useState } from 'react'
import { PRICING_FAQ_ENTRIES, PRICING_FAQ_SALES_URL } from '@/app/components/pricing/pricing-faq-data'
import { cn } from '@/utils/cn'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function PricingPageFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24" data-node-id="4486:18530">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-12 lg:flex-row lg:gap-20 lg:items-start">
        <div className="flex max-w-[360px] flex-col gap-4">
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-neutral-900">
            FAQ
          </p>
          <h2 className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl md:leading-[3rem]">
            Questions,
            <br />
            answered.
          </h2>
          <p className="font-[family-name:var(--font-inter)] pb-1 text-[15px] leading-6 text-[#595959]">
            Can&apos;t find what you&apos;re looking for? Our team is
            <br className="hidden sm:block" /> happy to help.
          </p>
          <Link
            href={PRICING_FAQ_SALES_URL}
            className="inline-flex w-fit items-center rounded-full bg-neutral-900 px-7 py-3 text-[15px] font-medium text-white transition-opacity hover:opacity-90"
            rel="noopener noreferrer"
          >
            Talk to Sales
          </Link>
        </div>

        <ul className="min-w-0 flex-1 space-y-3">
          {PRICING_FAQ_ENTRIES.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <li
                key={item.question}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  className="font-[family-name:var(--font-inter)] flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-neutral-900 md:px-6 md:text-lg"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}
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
                    <p className="font-[family-name:var(--font-inter)] px-5 pb-4 text-sm leading-relaxed text-neutral-600 md:px-6 md:text-base">
                      {item.answer}
                    </p>
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
