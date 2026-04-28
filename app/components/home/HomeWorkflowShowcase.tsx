'use client'

import { useState } from 'react'
import { HomeWorkflowSocialStrip } from '@/app/components/home/HomeWorkflowSocialStrip'
import { homeSectionSubtitleClassName, homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { WorkflowStepPanel, WorkflowStepTabList } from '@/app/components/workflow/WorkflowBuildPreviewPublish'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import { cn } from '@/utils/cn'

type HomeWorkflowShowcaseProps = {
  className?: string
  /** When false, omits the customer-quote carousel (e.g. marketers page shows it in testimonials). @default true */
  showSocialStrip?: boolean
}

export function HomeWorkflowShowcase({ className, showSocialStrip = true }: HomeWorkflowShowcaseProps) {
  const [active, setActive] = useState(0)

  return (
    <section className={cn('home-scheme-light relative overflow-hidden bg-white', className)}>
      <div className="relative mx-auto flex max-w-[1286px] flex-col gap-10 px-6 py-16 md:gap-[50px] md:px-10 md:py-20 lg:px-[116px] lg:py-24">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className={cn('text-balance', homeSectionTitleClassName)}>Your content is visual. Build visually.</h2>
          <p className={cn(homeSectionSubtitleClassName, 'text-center')}>Build. Preview. Publish.... Fast</p>
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
            <p className={cn(homeSectionSubtitleClassName, 'max-w-[250px]')} id="home-workflow-cta-heading">
              Idea → Live experience. Hours. Not weeks.
            </p>
            <div aria-describedby="home-workflow-cta-heading">
              <GradientCtaButton href={BILDIT_SIGNUP_URL} variant="figma-long">
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
