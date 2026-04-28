'use client'

import { cn } from '@/utils/cn'
import { Eye, PenLine, Rocket } from 'lucide-react'
import Image from 'next/image'

/**
 * Build → Preview → Publish workflow steps (shared by home and solutions pages).
 * Panel art lives in `public/images/home-workflow/`.
 */
export const WORKFLOW_BUILD_PREVIEW_PUBLISH_STEPS = [
  {
    id: 'build',
    title: 'Build visually',
    description: 'Templates with real brand control. Type. Color. Layout. Precision.',
    Icon: PenLine,
    panelSrc: '/images/home-workflow/panel-build.png',
    panelAlt: 'BILDIT live editor: build storefront content visually',
    panelWidth: 2007,
    panelHeight: 1288
  },
  {
    id: 'preview',
    title: 'Preview instantly',
    description: 'See exactly what users see. Before it goes live. No surprises.',
    Icon: Eye,
    panelSrc: '/images/home-workflow/panel-preview.png',
    panelAlt: 'Storefront preview across desktop, tablet, and mobile',
    panelWidth: 2000,
    panelHeight: 1284
  },
  {
    id: 'publish',
    title: 'Publish immediately',
    description: 'No deploy cycle. No coordination overhead. No waiting.',
    Icon: Rocket,
    panelSrc: '/images/home-workflow/panel-publish.png',
    panelAlt: 'Publish changes to the live site without a dev ticket',
    panelWidth: 1840,
    panelHeight: 1145
  }
] as const

type WorkflowStepTabListProps = {
  active: number
  onActiveChange: (index: number) => void
  className?: string
  tabIdPrefix?: string
}

export function WorkflowStepTabList({
  active,
  onActiveChange,
  className,
  tabIdPrefix = 'workflow'
}: WorkflowStepTabListProps) {
  return (
    <div
      className={cn('flex w-full max-w-full shrink-0 flex-col gap-6 md:w-[300px]', className)}
      role="tablist"
      aria-label="Workflow steps"
    >
      {WORKFLOW_BUILD_PREVIEW_PUBLISH_STEPS.map((s, index) => {
        const selected = index === active
        const Icon = s.Icon
        return (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`${tabIdPrefix}-tab-${s.id}`}
            aria-selected={selected}
            aria-controls={`${tabIdPrefix}-panel-${s.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onActiveChange(index)}
            className={cn(
              'relative w-full rounded-2xl border border-[rgba(200,80,240,0.15)] p-2.5 text-left backdrop-blur-[10px] transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-[#c850f0] focus-visible:ring-offset-2',
              selected ? 'bg-[#f3f0ff] shadow-[0px_0px_20px_rgba(200,80,240,0.12)]' : 'bg-white/70 hover:bg-white',
              s.id === 'preview' || s.id === 'publish' ? 'min-h-[122px]' : ''
            )}
          >
            <div className="flex flex-col gap-2.5 pr-10">
              <div className="flex items-center gap-2.5">
                <span className="flex rounded-xl p-2.5 text-[#431782]">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="font-[family-name:var(--font-uncut-sans)] text-lg font-semibold leading-7 text-[#171717]">
                  {s.title}
                </span>
              </div>
              <p className="font-[family-name:var(--font-uncut-sans)] text-base font-normal leading-6 text-[#737373]">
                {s.description}
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-[9px] top-[9px] flex w-11 items-center justify-center font-[family-name:var(--font-uncut-sans)] text-5xl font-bold leading-[48px] text-[rgba(23,23,23,0.15)]"
              aria-hidden
            >
              {index + 1}
            </span>
          </button>
        )
      })}
    </div>
  )
}

type WorkflowStepPanelProps = {
  active: number
  className?: string
  tabIdPrefix?: string
}

export function WorkflowStepPanel({ active, className, tabIdPrefix = 'workflow' }: WorkflowStepPanelProps) {
  const step = WORKFLOW_BUILD_PREVIEW_PUBLISH_STEPS[active]

  return (
    <div
      className={cn('min-w-0 flex-1', className)}
      role="tabpanel"
      id={`${tabIdPrefix}-panel-${step.id}`}
      aria-labelledby={`${tabIdPrefix}-tab-${step.id}`}
    >
      <Image
        src={step.panelSrc}
        alt={step.panelAlt}
        width={step.panelWidth}
        height={step.panelHeight}
        className="h-auto w-full object-contain object-top"
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) min(640px, calc(100vw - 7rem)), min(924px, 55vw)"
        priority={active === 0}
      />
    </div>
  )
}
