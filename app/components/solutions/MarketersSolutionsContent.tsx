import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { MarketersSolutionsCtaForm } from '@/app/components/solutions/MarketersSolutionsCtaForm'
import { SolutionsDemoVideo } from '@/app/components/solutions/SolutionsDemoVideo'
import { VeeLiveEditorMockup } from '@/app/components/visual-experience-engine/VeeLiveEditorMockup'
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'
import { MARKETERS_SOLUTIONS_HERO_BG } from '@/app/lib/marketers-solutions-hero-bg'
import { Check } from 'lucide-react'
import Image from 'next/image'

const BENEFIT_CARDS = [
  {
    src: 'https://www.figma.com/api/mcp/asset/05cbc611-c827-4b2f-a000-4648e217737d',
    title: 'Carousel',
    body: 'Global CDN delivery. Edge-cached APIs. Always fast, always on.'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/cab3c2e2-df0a-4e16-b961-d03d0325f6d5',
    title: 'Count Down Timers',
    body: 'From draft to live in seconds. No deploy cycles, ever.'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/92214568-fcc3-4eda-b6f5-f654d2ea0857',
    title: 'Instagram Style Stories',
    body: 'Templates lock your design system. Everything stays on-brand.'
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/228f3055-8b20-46d2-97d9-f52c9d77c248',
    title: 'Animations',
    body: 'A/B testing, personalization, and analytics — all in one place.'
  }
] as const

const PLATFORM_LOGOS = [
  {
    src: 'https://www.figma.com/api/mcp/asset/c294dfae-be53-45a9-8cd5-c844a910fc69',
    alt: 'Salesforce',
    width: 40,
    height: 32
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/93db64c6-025a-4078-8232-6c349c5cb0ce',
    alt: 'Shopify Plus',
    width: 126,
    height: 32
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/08909bc1-4666-4f57-84b1-d064be0316d3',
    alt: 'SAP',
    width: 71,
    height: 32
  },
  {
    src: 'https://www.figma.com/api/mcp/asset/d84997b8-6d72-48a2-9b5d-ce3f415258a5',
    alt: 'Adobe Commerce',
    width: 114,
    height: 32
  }
] as const

const MARKETERS_DEMO_VIDEO_SRC =
  'https://storage.googleapis.com/compilepoc-2d379.appspot.com/bildit-website-staging%2FMensImage1%2FCMA-ChangeBanner_Reorder.mp4'

const MARKETERS_VIDEO_FRAME_CLASS =
  'relative h-[280px] w-full overflow-hidden rounded-2xl border border-black/10 bg-[#171717] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.08)] md:h-[438px]'

const MAIN_LIST = [
  'Visual Experience Engine',
  'Instant publishing infrastructure',
  'Performance guardrails built-in',
  'Sophisticated template system',
  'Live preview that actually works'
] as const

const BONUS_LIST = [
  'Elevated template starter pack',
  'White-glove onboarding',
  'Direct access to our engineering team'
] as const

export function MarketersSolutionsContent() {
  return (
    <main className="bg-white text-neutral-900">
      <section
        id="marketers-solutions-hero"
        data-header-surface="light"
        className="relative m-0 flex h-svh max-h-svh w-full flex-col overflow-hidden rounded-none pt-[calc(70px+30px+0.75rem)] sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[#fafafa]" aria-hidden />
        <Image
          src={MARKETERS_SOLUTIONS_HERO_BG}
          alt=""
          fill
          priority
          className="pointer-events-none object-cover object-center"
          sizes="(max-width: 1536px) 100vw, 1512px"
        />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center gap-14 overflow-y-auto px-4 py-16 text-center sm:px-10 sm:py-20 md:gap-[60px]">
          <div className="flex max-w-[1238px] flex-col items-center gap-8 md:gap-8">
            <h1 className="font-uncut-sans text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#171717] md:text-6xl md:leading-[1.08] lg:text-[72px] lg:leading-[78px]">
              <span className="block">Never be held back</span>
              <span className="block">by your headless platform again...</span>
              <span
                className="mt-1 block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(170deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)'
                }}
              >
                Launch campaigns faster
              </span>
            </h1>
            <p className="max-w-[480px] font-uncut-sans text-lg text-black md:text-xl md:leading-[31px]">
              Ever missed a trend? Fixed it for you!
            </p>
            <GradientCtaButton href={BILDIT_SIGNUP_URL}>Start a Free Trial</GradientCtaButton>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 py-16 md:px-8 md:py-[100px]">
        <div className="w-full max-w-[780px]">
          <SolutionsDemoVideo src={MARKETERS_DEMO_VIDEO_SRC} frameClassName={MARKETERS_VIDEO_FRAME_CLASS} />
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 px-4 py-16 md:gap-[50px] md:px-[116px] md:py-[100px]">
        <div className="flex max-w-[1280px] flex-col items-center gap-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#171717]">Omnichannel</p>
          <h2 className="font-uncut-sans text-3xl font-bold leading-tight tracking-[-0.02em] text-[#171717] md:text-5xl md:leading-[58px]">
            Publish Advanced Content 7X Faster..
            <br />
            without Involving IT
          </h2>
          <p className="text-lg text-[#595959]">on Web and Mobile App</p>
        </div>
        <div className="grid w-full max-w-[1290px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFIT_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-[402/260] w-full overflow-hidden">
                <Image
                  src={card.src}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-3.5 px-2.5 pb-2.5 pt-3.5">
                <h3 className="text-xl font-semibold text-[#171717]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#595959] md:text-base">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
        <GradientCtaButton href="/pricing/">Get the Templates</GradientCtaButton>
      </section>

      <section className="relative overflow-hidden bg-[#0d0118] px-4 py-16 text-white md:px-[232px] md:py-[100px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute -right-[60px] -top-20 size-[500px] rounded-full opacity-30 blur-[36px]"
            style={{
              background: 'radial-gradient(circle, rgba(237,30,121,0.35) 0%, transparent 70%)'
            }}
          />
          <div
            className="absolute bottom-[-60px] left-10 size-[400px] rounded-full opacity-25 blur-[36px]"
            style={{
              background: 'radial-gradient(circle, rgba(59,30,237,0.4) 0%, transparent 70%)'
            }}
          />
        </div>
        <div className="relative mx-auto flex max-w-[1048px] flex-col items-center gap-5">
          <h2 className="text-center font-uncut-sans text-3xl font-bold leading-tight tracking-[-0.02em] text-[#f0e6ff] md:text-5xl md:leading-[58px]">
            <span className="text-[#f0e6ff]">Fast: Builds, Loads, Launches.</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(172deg, rgb(237, 30, 121) 54.93%, rgb(59, 30, 237) 94.96%)'
              }}
            >
              Zero Friction
            </span>
            <span className="text-[#f0e6ff]">.</span>
          </h2>
          <p className="text-center text-[17px] text-[#a07dc0]">
            What teams see after switching to BILDIT Visual Experience Engine.
          </p>
          <div className="mt-8 grid w-full grid-cols-1 gap-8 border-white/10 pt-4 md:grid-cols-3 md:gap-2 md:pt-[52px]">
            {[
              {
                stat: '7×',
                label: 'Faster publishing',
                desc: 'From idea to live experience in minutes, not days.'
              },
              {
                stat: '0',
                label: 'Dev tickets per campaign',
                desc: 'Marketing teams operate fully independently.'
              },
              {
                stat: '+33%',
                label: 'Faster page loads',
                desc: 'Personalized, scheduled content that loads so fast.'
              }
            ].map((col, i) => (
              <div
                key={col.label}
                className={`flex flex-col items-center px-6 text-center ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}
              >
                <p className="font-uncut-sans text-6xl font-bold leading-[64px] text-white md:text-[96px]">
                  {col.stat}
                </p>
                <p className="mt-4 text-lg font-semibold text-white">{col.label}</p>
                <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-white/90">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-[116px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="flex max-w-[300px] flex-col gap-6 lg:shrink-0">
            <div className="text-center lg:text-left">
              <h2 className="font-uncut-sans text-3xl font-bold text-[#171717] md:text-5xl md:leading-[48px]">
                Your Content is Visual. Build Visually.
              </h2>
              <p className="mt-3 text-lg text-[#595959]">Build. Preview. Publish.... Fast</p>
            </div>
            {[
              {
                n: '1',
                t: 'Build visually',
                d: 'Templates with real brand control. Type. Color. Layout. Precision.'
              },
              {
                n: '2',
                t: 'Preview instantly',
                d: 'See exactly what users see. Before it goes live. No surprises.'
              },
              {
                n: '3',
                t: 'Publish immediately',
                d: 'No deploy cycle. No coordination overhead. No waiting.'
              }
            ].map((step) => (
              <div key={step.n} className="rounded-xl border border-black/10 bg-neutral-50/80 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold text-[#171717]">{step.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#595959]">{step.d}</p>
                  </div>
                  <span className="font-uncut-sans text-3xl font-bold tabular-nums text-neutral-300">{step.n}</span>
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-amber-600">★★★★★ 4.8 out of 5</p>
              <p className="mt-3 text-sm leading-relaxed text-[#595959]">
                With BILDIT, our CMS has transformed workflows for users by eliminating deployment hurdles and enhancing
                coordination, saving time. What a game changer!
              </p>
            </div>
          </div>
          <div className="relative flex-1 min-w-0 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-[#f8f4ff] to-white shadow-inner">
            <div className="min-w-0 overflow-x-auto overflow-y-visible pb-4 pt-2 pl-2">
              <VeeLiveEditorMockup />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-center gap-3">
          <p className="text-center text-[22px] font-semibold text-[#595959]">
            Idea → Live experience. Hours. Not weeks.
          </p>
          <GradientCtaButton href="/pricing/" variant="figma-long" className="py-2 text-base font-bold">
            Try Visual Editor
          </GradientCtaButton>
        </div>
      </section>

      <section className="relative flex flex-col items-center overflow-hidden px-4 py-16 md:px-[116px] md:py-20">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF background */}
          <img src="/images/Insta%20Stories.gif" alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div
          className="pointer-events-none absolute left-1/2 top-[20%] z-[1] size-[600px] -translate-x-1/2 rounded-full bg-[rgba(200,80,240,0.06)] blur-[140px]"
          aria-hidden
        />
        <div className="relative z-[2] w-full max-w-[1280px] rounded-3xl bg-white px-6 py-12 shadow-[0px_0px_150px_0px_rgba(232,69,144,0.08),0px_0px_80px_0px_rgba(200,80,240,0.15)] md:px-12 md:py-16">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="font-uncut-sans text-3xl font-bold leading-tight text-[#171717] md:text-5xl md:leading-[58px]">
              Everything you need. Nothing holding you back.
            </h2>
            <p className="mt-6 text-lg text-[#595959]">You get:</p>
          </div>
          <div className="mx-auto mt-10 max-w-[970px] rounded-2xl border border-black/10 bg-[#0d0118] p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-2">
              <ul className="flex flex-col gap-4">
                {MAIN_LIST.map((item) => (
                  <li key={item} className="flex gap-3 text-[#f0e6ff]">
                    <Check className="mt-0.5 size-5 shrink-0 text-[#c850f0]" aria-hidden />
                    <span className="text-base leading-6">{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.07em] text-[#c850f0]">Bonus:</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {BONUS_LIST.map((item) => (
                    <li key={item} className="flex gap-3 text-[#f0e6ff]">
                      <Check className="mt-0.5 size-5 shrink-0 text-[#e84590]" aria-hidden />
                      <span className="text-base leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 text-center text-lg font-semibold leading-relaxed text-white">
              Build beautiful content at the speed of marketing.
              <br />
              <br />
              Download our Figma templates to see the kind of content that you can build.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <GradientCtaButton href="/pricing/">Get the Templates</GradientCtaButton>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-[116px] md:py-[100px]">
        <div className="mx-auto max-w-[1048px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#171717]">Visual Experience Engine</p>
          <h2 className="mt-3 font-uncut-sans text-4xl font-bold text-[#171717] md:text-[59px] md:leading-[1.1]">
            No Limitations.
          </h2>
          <p className="mx-auto mt-6 max-w-[440px] text-lg text-[#595959]">
            Never compromise: get every tool your storefront needs; designed to move as fast as your ideas.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1048px] gap-6 md:grid-cols-2">
          {[
            {
              title: 'Omnichannel sync',
              body: 'Keep web and app experiences aligned with real-time content updates across surfaces.'
            },
            {
              title: 'SEO-friendly content',
              body: 'Content that Google, ChatGPT and others can read, so you get picked up in search.'
            },
            {
              title: 'Enterprise integrations',
              body: 'Connect commerce, payments, and analytics stacks without custom glue code for every launch.'
            },
            {
              title: 'Governance at scale',
              body: 'Templates, roles, and approvals so marketing moves fast without breaking brand or performance.'
            }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-black/10 bg-neutral-50 p-8 text-left">
              <h3 className="text-xl font-semibold text-[#171717]">{c.title}</h3>
              <p className="mt-3 text-[#595959]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-[406px] md:py-[100px]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -left-20 -top-24 size-[580px] rounded-full opacity-20 blur-[36px]"
            style={{ background: 'radial-gradient(circle, rgba(200,80,240,0.45) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -right-16 size-[480px] rounded-full opacity-20 blur-[36px]"
            style={{ background: 'radial-gradient(circle, rgba(237,30,121,0.4) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative mx-auto flex max-w-[700px] flex-col items-center gap-5 px-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em]">Get started</p>
          <h2 className="text-center font-uncut-sans text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-[72px] md:leading-[72px]">
            <span className="block text-[#171717]">Ready to build</span>
            <span className="bg-gradient-to-r from-[#e84590] to-[#c850f0] bg-clip-text text-transparent">
              content fast?
            </span>
          </h2>
          <p className="text-center text-lg text-[#595959]">
            We work with a limited number of teams each month. Secure your spot today.
          </p>
          <MarketersSolutionsCtaForm />
        </div>
      </section>

      <section className="border-y border-black/5 bg-white px-4 py-10 md:px-[116px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.07em] text-[#595959]">
            Integrated with the top eCommerce Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            {PLATFORM_LOGOS.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
