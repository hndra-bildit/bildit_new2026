import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { ArrowRight, Calendar, Cloud, Zap } from 'lucide-react'

/** Figma BILDIT-Website-2025 `5028:18302` — Section “4 BENEFITS” (REACT CONTENT). */
const REACT_BENEFIT_ICONS = [
  {
    title: 'Server Side Rendering',
    body: 'Fully server side rendered\ncontent without a deployment.',
    icon: 'cloud' as const
  },
  {
    title: 'Scheduled Components',
    body: 'Even React components can be scheduled. Schedule any\npiece of UI or content.',
    icon: 'calendar' as const
  },
  {
    title: 'Content without Deploy',
    body: 'New templates and types without a deployment. Yes, code changes without a deploy!',
    icon: 'arrow' as const
  },
  {
    title: 'Live Preview React',
    body: 'Built in live preview for any\nscheduled change. See React\nchanges live in real time.',
    icon: 'lightning' as const
  }
] as const

const BENEFIT_ICON = {
  cloud: Cloud,
  calendar: Calendar,
  arrow: ArrowRight,
  lightning: Zap
} as const

const iconClassName = 'size-[52px] text-black'
const iconStroke = 1.75

export function MarketersReactContentBenefitsSection() {
  return (
    <section
      className="bg-black px-4 py-16 text-white md:px-[116px] md:py-[100px]"
      aria-labelledby="marketers-react-content-heading"
    >
      <div className="mx-auto flex max-w-[1290px] flex-col items-center gap-12 md:gap-[50px]">
        <div className="flex w-full max-w-[1076px] flex-col items-center gap-5 text-center md:gap-[30px]">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#f5f7fa]">React content</p>
          <h2
            id="marketers-react-content-heading"
            className="marketers-react-content-heading-gradient font-uncut-sans text-2xl font-bold leading-tight tracking-[-0.02em] md:text-5xl md:leading-[58px]"
          >
            <span className="block">Build the React Content your</span>
            <span className="block">Customer Demands..</span>
          </h2>
          <p className="text-lg text-white">on Web and Mobile App</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REACT_BENEFIT_ICONS.map((card) => {
            const Icon = BENEFIT_ICON[card.icon]
            return (
              <article
                key={card.title}
                className="flex min-h-[234px] flex-col overflow-hidden rounded-[20px] border border-black/[0.08] bg-white p-7"
              >
                <div className="shrink-0 text-black">
                  <Icon className={iconClassName} strokeWidth={iconStroke} aria-hidden />
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-[#171717]">{card.title}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-[22.4px] text-[#595959] md:text-sm">
                  {card.body}
                </p>
              </article>
            )
          })}
        </div>

        <GradientCtaButton href="/pricing/">Get the Templates</GradientCtaButton>
      </div>
    </section>
  )
}
