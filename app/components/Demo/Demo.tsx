'use client'

import React from 'react'
import EditableBanner from './EditableBanner'
import { BILDIT_FREE_TRIAL_URL } from './bannerWebTemplates'
import { homeSectionSubtitleClassName, homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'

const Demo: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className={cn('mb-8 hidden text-center md:block', homeSectionTitleClassName)}>Try out live preview.</h2>
        <p className={cn(homeSectionSubtitleClassName, 'mx-auto mb-10 text-center')}>
          Click any text to edit. Change colors, styling, and content. Watch it update instantly.
        </p>
        <EditableBanner />
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={BILDIT_FREE_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-uncut-sans)] inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c850f0] to-[#e84590] px-[19px] py-2.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Download Templates
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </a>
          <p className={cn(homeSectionSubtitleClassName, 'max-w-lg text-center text-sm md:text-[15px]')}>
            Start a free trial—signup includes free templates so you can build with real layouts right away.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Demo
