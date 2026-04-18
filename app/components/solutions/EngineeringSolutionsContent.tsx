import Link from 'next/link'
import { GradientCtaButton } from '@/app/components/solutions/SolutionsLocalHeader'

export function EngineeringSolutionsContent() {
  return (
    <main className="bg-[#0d0118] text-white">
      <section className="px-4 py-20 md:px-[116px] md:py-28">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a07dc0]">For engineering teams</p>
          <h1 className="mt-6 font-uncut-sans text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-6xl md:leading-[1.05]">
            Ship content infrastructure
            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(172deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)'
              }}
            >
              without becoming the bottleneck
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-[560px] text-lg leading-relaxed text-[#c4b5dc]">
            API-first, React-native, and built for performance at scale. Pair this page with the marketers view:
            the toggle above switches audiences — wire your CMS hero slot here when the engineering frame is ready
            in Figma.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <GradientCtaButton href="/pricing/">Talk to solutions</GradientCtaButton>
            <Link
              href="/it/"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              IT &amp; security overview
            </Link>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 px-4 py-16 md:px-[116px]">
        <div className="mx-auto grid max-w-[1048px] gap-6 md:grid-cols-3">
          {[
            {
              title: 'Typed APIs & webhooks',
              body: 'Integrate with your CI/CD, observability stack, and commerce backends without one-off scripts.'
            },
            {
              title: 'Edge delivery by default',
              body: 'Personalized experiences stay fast with caching rules that marketing can’t accidentally break.'
            },
            {
              title: 'Governance built in',
              body: 'Environments, approvals, and audit trails so engineers keep control while teams move quickly.'
            }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-xl font-semibold text-white">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#c4b5dc]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
