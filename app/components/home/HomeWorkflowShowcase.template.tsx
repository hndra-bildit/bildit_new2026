// HomeWorkflowShowcase:v3 legacy=false
// @template v2

'use client'

import React, { useState } from 'react'
import { HomeWorkflowSocialStrip } from '@/app/components/Components'
import { homeSectionSubtitleClassName, homeSectionTitleClassName } from '@/app/components/Components'
import { GradientCtaButton } from '@/app/components/Components'
import { WorkflowStepPanel, WorkflowStepTabList } from '@/app/components/Components'
import { cn } from '@/app/components/Components'

type HomeWorkflowShowcaseProps = {
  className?: string
  /** When false, omits the customer-quote carousel (e.g. marketers page shows it in testimonials). @default true */
  showSocialStrip?: boolean
}
export function HomeWorkflowShowcase({ className, showSocialStrip = true }) {
  /**
   * @group div
   * @type RichText
   */
  const divP = 'Build. Preview. Publish.... Fast'
  /**
   * @group div
   * @type RichText
   */
  const h2 = 'Your content is visual. Build visually.'
  const [active, setActive] = useState(0)
  return (
    <section className={cn('home-scheme-light relative overflow-hidden bg-white', className)}>
      <div className="relative mx-auto flex max-w-[1286px] flex-col gap-10 px-6 py-16 md:gap-[50px] md:px-10 md:py-20 lg:px-[116px] lg:py-24">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2
            className={cn('text-balance', homeSectionTitleClassName)}
            data-bildit-var-name="h2"
            data-bildit-var-type="RichText"
          >
            {h2}
          </h2>
          <p
            className={cn(homeSectionSubtitleClassName, 'text-center')}
            data-bildit-var-name="divP"
            data-bildit-var-type="RichText"
          >
            {divP}
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-8 lg:gap-[60px]">
          <WorkflowStepTabList active={active} onActiveChange={setActive} />
          <WorkflowStepPanel active={active} />
        </div>

        <div
          className={cn(
            'flex w-full flex-col gap-6 md:max-w-none md:gap-8 lg:gap-[60px]',
            showSocialStrip ? 'md:flex-row md:items-center' : 'md:items-center'
          )}
          data-name="Main Frame"
        >
          <div
            className={cn(
              'flex w-full shrink-0 flex-col gap-2.5',
              showSocialStrip ? 'items-start md:w-[300px]' : 'items-center text-center'
            )}
          >
            <p
              className={cn(homeSectionSubtitleClassName, 'max-w-[250px]')}
              id="home-workflow-cta-heading"
              data-bildit-var-name="divP"
              data-bildit-var-type="RichText"
            >
              {divP}
            </p>
            <div aria-describedby="home-workflow-cta-heading">
              <GradientCtaButton href="/pricing/" variant="figma-long">
                Try Visual Editor
              </GradientCtaButton>
            </div>
          </div>

          {showSocialStrip ? <HomeWorkflowSocialStrip className="w-full min-w-0" id="home-workflow-social" /> : null}
        </div>
      </div>
    </section>
  )
}

/** Legacy export name for CMS bundles; same as `HomeWorkflowShowcase`. */
export const HomeWorkflowShowcaseWithSteps = HomeWorkflowShowcase
export default HomeWorkflowShowcase
