import { HomeIntegrations } from '@/app/components/home/HomeIntegrations'
import { EngineeringSdkCodePanel } from '@/app/components/solutions/EngineeringSdkCodePanel'
import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { SolutionsDemoVideo } from '@/app/components/solutions/SolutionsDemoVideo'
import { VeeLayerLeadForm } from '@/app/components/visual-experience-layer-landing/VeeLayerLeadForm'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import { Code2, Gauge, GitBranch, Layers, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const DEV_CARDS = [
  {
    icon: Code2,
    title: 'React & React Native SDKs',
    body: 'Strongly typed components and slots—ship templates your team can trust in production.'
  },
  {
    icon: GitBranch,
    title: 'Preview & promote safely',
    body: 'Environment-aware previews, scheduled publishes, and rollbacks without redeploying the app.'
  },
  {
    icon: Layers,
    title: 'Composable templates',
    body: 'Nest layouts, share primitives, and enforce design system guardrails in code.'
  },
  {
    icon: Gauge,
    title: 'Edge-ready delivery',
    body: 'Cache-friendly content APIs built for SSR, ISR, and high-traffic storefront peaks.'
  }
] as const

const MAIN_LIST = [
  'Visual Experience Engine & Code Library',
  'Server-side rendering and static generation friendly APIs',
  'Webhooks and automation hooks for your pipeline',
  'Role-based access and audit-friendly change history',
  'Observability hooks aligned with your stack'
] as const

const BONUS_LIST = [
  'Reference implementations and starter templates',
  'Solution engineering office hours',
  'Shared Slack channel for integration questions'
] as const

const ENGINEERING_DEMO_VIDEO_SRC =
  'https://storage.googleapis.com/compilepoc-2d379.appspot.com/bildit-website-staging%2FPromotionalCountdownTimer.mp4'

export function EngineeringSolutionsContent() {
  return (
    <main className="min-w-0 max-w-full overflow-x-hidden bg-[#07020f] pt-24 text-white md:pt-28">
      <section className="relative px-[calc(1rem-10px)] pb-10 pt-[calc(1rem-10px)] md:px-[calc(2rem-10px)] md:pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute -right-24 -top-32 size-[420px] rounded-full opacity-40 blur-[48px]"
            style={{ background: 'radial-gradient(circle, rgba(237,30,121,0.35) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-24 left-0 size-[360px] rounded-full opacity-35 blur-[40px]"
            style={{ background: 'radial-gradient(circle, rgba(59,30,237,0.45) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative mx-auto flex max-w-[1470px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[18px] border border-white/10 bg-[#0d0118] px-6 py-12 text-center sm:gap-6 sm:py-16 md:gap-7 md:rounded-[27px] md:px-[116px] md:py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a07dc0]">For engineering teams</p>
          <h1 className="max-w-[1100px] font-uncut-sans text-3xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl md:leading-[1.06] lg:text-[56px] lg:leading-[62px]">
            <span className="text-[#f0e6ff]">Stop being the bottleneck for every</span>
            <br />
            <span className="text-[#f0e6ff]">merchandising experiment.</span>
            <br />
            <span
              className="mt-1.5 inline-block bg-clip-text font-uncut-sans text-lg font-bold leading-snug tracking-[-0.02em] text-transparent sm:mt-2 sm:text-xl md:mt-2.5 md:text-2xl md:leading-snug lg:mt-3 lg:text-3xl lg:leading-tight"
              style={{
                backgroundImage: 'linear-gradient(170deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)'
              }}
            >
              Ship templates. Keep governance. Move faster.
            </span>
          </h1>
          <p className="max-w-[560px] text-lg leading-relaxed text-[#c4b5dc]">
            Give marketing a visual editor on top of your React and React Native code—without sacrificing types,
            reviews, or release discipline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GradientCtaButton href="/pricing/">Get a Free Developer Sandbox</GradientCtaButton>
            <Link
              href="/visual-experience-engine/"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Book a Tech Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 py-12 md:px-8 md:py-16">
        <div className="w-full max-w-[780px]">
          <SolutionsDemoVideo playWhenVisible src={ENGINEERING_DEMO_VIDEO_SRC} />
        </div>
      </section>

      <section className="px-4 py-16 md:px-[116px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#a07dc0]">Developer experience</p>
          <h2 className="max-w-[900px] font-uncut-sans text-3xl font-bold leading-tight text-[#f0e6ff] md:text-5xl md:leading-[58px]">
            Everything you need to integrate once—then get out of the way.
          </h2>
          <p className="max-w-[520px] text-lg text-[#c4b5dc]">
            Built for teams shipping on Next.js, custom React web, and React Native.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1290px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DEV_CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-white/10">
                <Icon className="size-6 text-[#e8a4ff]" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4b5dc]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d0118] px-4 py-16 md:px-[232px] md:py-[100px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -right-16 -top-24 size-[480px] rounded-full opacity-25 blur-[40px]"
            style={{ background: 'radial-gradient(circle, rgba(237,30,121,0.4) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 left-10 size-[380px] rounded-full opacity-20 blur-[36px]"
            style={{ background: 'radial-gradient(circle, rgba(59,30,237,0.45) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative mx-auto flex max-w-[1048px] flex-col items-center gap-5">
          <h2 className="text-center font-uncut-sans text-3xl font-bold leading-tight text-[#f0e6ff] md:text-5xl md:leading-[58px]">
            <span className="text-[#f0e6ff]">Reliable builds.</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(172deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)'
              }}
            >
              Predictable releases
            </span>
            <span className="text-[#f0e6ff]">.</span>
          </h2>
          <p className="text-center text-[17px] text-[#a07dc0]">
            What platform teams regain when marketing edits stop requiring hotfixes.
          </p>
          <div className="mt-8 grid w-full grid-cols-1 gap-10 border-white/10 pt-4 sm:gap-12 md:grid-cols-3 md:gap-10 md:pt-[52px] lg:gap-14">
            {[
              {
                stat: '−70%',
                label: 'Ad-hoc deploys',
                desc: 'Template and content changes decouple from your weekly release train.'
              },
              {
                stat: '100%',
                label: 'Typed contracts',
                desc: 'Slots and fields are validated in CI—no mystery props at runtime.'
              },
              {
                stat: '24/7',
                label: 'Operational clarity',
                desc: 'Know who published what, when, and roll back without code changes.'
              }
            ].map((col, i) => (
              <div
                key={col.label}
                className={`flex flex-col items-center px-4 text-center sm:px-6 md:px-5 lg:px-8 ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}
              >
                <p className="font-uncut-sans text-4xl font-bold tabular-nums leading-none tracking-tight text-white md:text-5xl md:leading-none lg:text-[56px] lg:leading-[1.08]">
                  {col.stat}
                </p>
                <p className="mt-6 text-base font-semibold leading-snug text-white md:mt-7 md:text-lg md:leading-snug">
                  {col.label}
                </p>
                <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/85 md:mt-5">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07020f] px-4 py-16 md:px-[116px] md:py-[100px]">
        <div className="mx-auto flex min-w-0 max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex max-w-[340px] flex-col gap-6 lg:shrink-0">
            <div>
              <h2 className="font-uncut-sans text-3xl font-bold text-[#f0e6ff] md:text-4xl md:leading-[48px]">
                Your roadmap stays yours.
              </h2>
              <p className="mt-3 text-lg text-[#c4b5dc]">Integrate. Lock in patterns. Let campaigns run.</p>
            </div>
            {[
              {
                n: '1',
                t: 'Model templates in code',
                d: 'Define slots, validations, and guardrails where they belong—in your repository.'
              },
              {
                n: '2',
                t: 'Wire the SDK',
                d: 'SSR-friendly data loading with clear cache semantics for Next.js and mobile.'
              },
              {
                n: '3',
                t: 'Hand off to Marketing',
                d: 'Marketing works visually inside your components; you keep merge and review control.'
              }
            ].map((step) => (
              <div key={step.n} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold text-white">{step.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#c4b5dc]">{step.d}</p>
                  </div>
                  <span className="font-uncut-sans text-3xl font-bold tabular-nums text-white/25">{step.n}</span>
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-white/10 bg-[#12081f] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">
                <ShieldCheck className="size-4 shrink-0" aria-hidden />
                Security-conscious by default
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#c4b5dc]">
                SSO, environment separation, and least-privilege roles so engineers stay confident when opening the
                visual layer to business teams.
              </p>
            </div>
          </div>
          <div className="relative min-h-[340px] min-w-0 flex-1 lg:min-h-[520px]">
            <EngineeringSdkCodePanel />
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-[1280px] flex-col items-center gap-3">
          <p className="text-center text-lg font-semibold text-[#c4b5dc]">Fewer interrupts. More deep work.</p>
          <GradientCtaButton href="/pricing/" variant="figma-long">
            Talk to Solutions Engineering
          </GradientCtaButton>
        </div>
      </section>

      <section className="relative overflow-x-hidden px-4 py-16 md:px-[116px] md:py-20">
        <div
          className="pointer-events-none absolute left-1/2 top-[15%] aspect-square w-[min(100%,560px)] -translate-x-1/2 rounded-full bg-[rgba(200,80,240,0.07)] blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-[1280px] rounded-3xl border border-white/10 bg-[#0d0118] px-6 py-12 shadow-[0px_0px_120px_0px_rgba(200,80,240,0.12)] md:px-12 md:py-16">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="font-uncut-sans text-3xl font-bold leading-tight text-[#f0e6ff] md:text-5xl md:leading-[58px]">
              Everything your platform team expects.
            </h2>
            <p className="mt-6 text-lg text-[#c4b5dc]">You get:</p>
          </div>
          <div className="mx-auto mt-10 max-w-[970px] rounded-2xl border border-white/10 bg-[#07020f] p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <ul className="flex flex-col gap-4">
                {MAIN_LIST.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#f0e6ff]">
                    <span
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)]"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-base leading-6">{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.07em] text-[#e84590]">Also included:</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {BONUS_LIST.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#f0e6ff]">
                      <span
                        className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)]"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className="text-base leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 text-center text-lg font-normal leading-relaxed text-white">
              Keep your stack. Add a visual layer your colleagues actually enjoy.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <GradientCtaButton href={BILDIT_SIGNUP_URL}>Start a trial</GradientCtaButton>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0d0118] px-4 py-16 md:px-[116px] md:py-[100px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -left-20 -top-24 size-[520px] rounded-full opacity-20 blur-[40px]"
            style={{ background: 'radial-gradient(circle, rgba(200,80,240,0.5) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-16 -right-12 size-[440px] rounded-full opacity-18 blur-[36px]"
            style={{ background: 'radial-gradient(circle, rgba(237,30,121,0.4) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-5 md:px-0">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#a07dc0]">Get started</p>
          <h2 className="text-center font-uncut-sans text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-[64px] md:leading-[1.08]">
            <span className="block text-[#f0e6ff]">Ready to pair</span>
            <span className="bg-gradient-to-r from-[#e84590] to-[#c850f0] bg-clip-text text-transparent">
              with your stack?
            </span>
          </h2>
          <p className="text-center text-lg text-[#c4b5dc]">
            We onboard a focused set of product and platform teams each month.
          </p>
          <VeeLayerLeadForm
            source="engineering-solutions"
            submitLabel="Request access"
            variant="dark"
            className="mt-4 w-full max-w-2xl"
            submitButtonClassName="normal-case tracking-normal text-base [background-image:var(--bildit-gradient-cta-short)] hover:opacity-95 hover:bg-[#ed1e79] border-0"
            helperText="We'll follow up with architecture-fit details."
          />
        </div>
      </section>

      <HomeIntegrations variant="dark" />
    </main>
  )
}
