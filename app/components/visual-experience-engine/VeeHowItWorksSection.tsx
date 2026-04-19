import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { VeeLiveEditorMockup } from '@/app/components/visual-experience-engine/VeeLiveEditorMockup'
import { imgBadgeContainer, imgBadgeContainer1, imgFrame, imgStars } from '@/app/lib/vee-live-editor-assets'
import { cn } from '@/utils/cn'
import Image from 'next/image'

type HowItWorksStep = {
  step: string
  title: string
  body: string
  iconSrc: string
  highlight?: boolean
  iconJustify: 'start' | 'center'
  bodyExtraPadding: boolean
}

const STEPS: HowItWorksStep[] = [
  {
    step: '1',
    title: 'Build visually',
    body: 'Templates with real brand control. Type. Color. Layout. Precision.',
    iconSrc: imgBadgeContainer,
    highlight: true,
    iconJustify: 'start',
    bodyExtraPadding: false
  },
  {
    step: '2',
    title: 'Preview instantly',
    body: 'See exactly what users see. Before it goes live. No surprises.',
    iconSrc: imgFrame,
    iconJustify: 'start',
    bodyExtraPadding: true
  },
  {
    step: '3',
    title: 'Publish immediately',
    body: 'No deploy cycle. No coordination overhead. No waiting.',
    iconSrc: imgBadgeContainer1,
    iconJustify: 'center',
    bodyExtraPadding: true
  }
]

function HowItWorksStepCard({ step, title, body, iconSrc, highlight, iconJustify, bodyExtraPadding }: HowItWorksStep) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-[color:var(--bildit-vee-card-border)] p-2.5 backdrop-blur-[10px]',
        highlight ? 'bg-[#f3f0ff]' : 'h-auto min-h-[122px]'
      )}
    >
      <div className={cn('flex flex-col gap-2.5', bodyExtraPadding && 'pr-8')}>
        <div className="flex w-full items-center gap-2.5">
          <div
            className={cn(
              'flex flex-col rounded-xl p-2.5',
              iconJustify === 'start' ? 'items-start' : 'items-center justify-center'
            )}
          >
            <Image src={iconSrc} alt="" width={24} height={24} className="size-6" />
          </div>
          <p className="font-uncut-sans text-lg font-semibold text-[#171717]">{title}</p>
        </div>
        <p className="font-uncut-sans text-base leading-6 text-[#737373]">{body}</p>
      </div>
      <p className="pointer-events-none absolute right-2 top-2 font-uncut-sans text-5xl font-bold text-[rgba(23,23,23,0.15)]">
        {step}
      </p>
    </div>
  )
}

export function VeeHowItWorksSection() {
  return (
    <section className="bg-white py-16 md:py-[100px]">
      <div className="mx-auto flex max-w-[1512px] flex-col gap-10 px-4 md:gap-12 md:px-[116px]">
        <div className="flex flex-col gap-2.5 text-center md:gap-2.5">
          <h2 className="font-uncut-sans text-3xl font-bold tracking-[-0.025em] text-[#171717] md:text-[48px] md:leading-[48px] md:tracking-[-1.2px]">
            Your Content is Visual. Build Visually.
          </h2>
          <p className="font-uncut-sans text-lg font-semibold text-[#595959] md:text-xl">
            Build. Preview. Publish.... Fast
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:gap-8 xl:gap-[60px]">
          <div className="flex w-full max-w-[300px] flex-col gap-10 lg:shrink-0">
            <div className="flex flex-col gap-6">
              {STEPS.map((s) => (
                <HowItWorksStepCard key={s.step} {...s} />
              ))}
            </div>

            <div className="rounded-2xl border border-[color:var(--bildit-vee-card-border)] bg-[#fafafa] p-2.5 backdrop-blur-[10px]">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-end gap-2.5">
                  <Image src={imgStars} alt="" width={88} height={16} className="h-4 w-[88px]" />
                  <p className="font-uncut-sans text-xs font-semibold text-[#737373]">4.8 out of 5</p>
                </div>
                <p className="font-uncut-sans text-xs leading-snug text-[#171717]">
                  With BILDIT, our CMS has transformed workflows for users by eliminating deployment hurdles and
                  enhancing coordination, saving time. What a game changer!
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1 overflow-x-auto overflow-y-visible pb-4">
            <VeeLiveEditorMockup />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2.5 pt-2">
          <p className="text-center font-uncut-sans text-lg font-semibold text-[#595959] md:text-[22px] md:leading-7">
            Idea → Live experience. Hours. Not weeks.
          </p>
          <GradientCtaButton href="/pricing/" variant="figma-long">
            Try Visual Editor
          </GradientCtaButton>
        </div>
      </div>
    </section>
  )
}
