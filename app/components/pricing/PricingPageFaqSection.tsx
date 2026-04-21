'use client'

import { useState } from 'react'
import { PRICING_FAQ_ENTRIES, PRICING_FAQ_SALES_URL } from '@/app/components/pricing/pricing-faq-data'
import { cn } from '@/utils/cn'
import { ChevronDown, ChevronUp } from 'lucide-react'
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
            Talk to sales
          </Link>
        </div>

        <div className="min-w-0 flex-1">
          {PRICING_FAQ_ENTRIES.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="border-b border-black/8">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-[family-name:var(--font-inter)] text-base font-semibold text-neutral-900">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      'flex size-9 shrink-0 items-center justify-center rounded-xl',
                      isOpen
                        ? 'bg-gradient-to-br from-[rgba(200,80,240,0.2)] to-[rgba(232,69,144,0.2)]'
                        : 'bg-[#f5f7fa]'
                    )}
                    aria-hidden
                  >
                    {isOpen ? (
                      <ChevronUp className="size-3.5 text-[#c850f0]" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="size-3.5 text-[#595959]" strokeWidth={2.5} />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="font-[family-name:var(--font-inter)] pb-5 pr-2 text-[15px] leading-[1.65] text-[#595959]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
