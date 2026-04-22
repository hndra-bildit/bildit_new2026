import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import Image from 'next/image'

/** Figma BILDIT-Website-2025 `5028:18302` — Section “4 BENEFITS” (REACT CONTENT). */
const REACT_BENEFIT_ICONS = [
  {
    src: 'https://www.figma.com/api/mcp/asset/e5fb39f6-a462-4e14-963e-9262448ffc8d',
    title: 'Server Side Rendering',
    body: 'Fully server side rendered\ncontent without a deployment.'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/a6dc5f3a-8a15-4bf4-bdf9-6fc6dab622fd',
    title: 'Scheduled Components',
    body: 'Even React components can be scheduled. Schedule any\npiece of UI or content.'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/91c50491-551f-4248-8382-56e62ad49448',
    title: 'Content without Deploy',
    body: 'New templates and types without a deployment. Yes, code changes without a deploy!'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/e12bd41b-2f81-4fa8-a941-c384d32ab5f5',
    title: 'Live Preview React',
    body: 'Built in live preview for any\nscheduled change. See React\nchanges live in real time.'
  }
] as const

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
            className="font-uncut-sans text-2xl font-bold leading-tight tracking-[-0.02em] text-[#f0e6ff] md:text-5xl md:leading-[58px]"
          >
            <span className="block">Build the React Content your</span>
            <span className="block">Customer Demands..</span>
          </h2>
          <p className="text-lg text-white">on Web and Mobile App</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REACT_BENEFIT_ICONS.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[234px] flex-col overflow-hidden rounded-[20px] border border-black/[0.08] bg-white p-7"
            >
              <div className="relative size-[52px] shrink-0">
                <Image src={card.src} alt="" fill className="object-contain" sizes="52px" />
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-[#171717]">{card.title}</h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-[22.4px] text-[#595959] md:text-sm">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <GradientCtaButton href="/pricing/">Get the Templates</GradientCtaButton>
      </div>
    </section>
  )
}
