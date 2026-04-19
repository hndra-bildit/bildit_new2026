'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FaqItem = { q: string; a: string }

const FAQ: FaqItem[] = [
  {
    q: 'What is BILDIT?',
    a: 'BILDIT is the AI-powered digital experience platform that frees marketers and developers from slow, painful content management workflows — delivering instant, elegant, personalized content across web and mobile. Built for Next.js and React Native, it lets marketing teams launch, manage, and update content instantly.'
  },
  {
    q: 'Who is BILDIT for?',
    a: 'Teams that need to ship content experiences fast: Next.js sites or React Native mobile apps, eCommerce brands, and retailers running full production. If your marketers are bottlenecked by dev cycles, BILDIT removes that dependency.'
  },
  {
    q: 'How does BILDIT work with Next.js?',
    a: 'BILDIT provides an NPM SDK with an API that supports SSR, SSG, and ISR. Developers wire it once; marketers ship updates anytime. You can schedule content, live preview scheduled changes, and publish instantly without redeploys.'
  },
  {
    q: 'Does BILDIT support React Native mobile apps?',
    a: 'Yes. BILDIT powers components, content, dynamic screens, in‑app promotions, and segmentation in React Native—no app store resubmission required. Preview changes on device before pushing live.'
  },
  {
    q: 'Do marketers really not need developers?',
    a: 'Not exactly. Dev creates the initial components and templates; after that marketers own the workflow—creating content using templates by filling in fields, scheduling, localizing, and publishing updates without code or deployments.'
  },
  {
    q: 'Can I schedule content and preview before publishing?',
    a: 'Yes. Use draft, preview on web and device, schedule, and instant publish. Previews work even with SSR and app environments so you can QA confidently.'
  },
  {
    q: 'What about performance?',
    a: 'BILDIT is designed for high-performance Next.js and React Native: edge-cached APIs, CDN-backed media, partial hydration-friendly schemas, and incremental updates so you keep Core Web Vitals and Lighthouse metrics tight.'
  },
  {
    q: 'What integrations are available?',
    a: 'Common implementations use Vercel, Salesforce Commerce Cloud, Netlify, commercetools, Google Cloud Platform, and AWS hosted React applications. Any React or React Native application is a candidate to use BILDIT.'
  },
  {
    q: 'How do we migrate from our current platform?',
    a: 'Often we migrate HTML or React content directly from your scheduled campaigns and import them into the BILDIT Visual Experience Engine scheduler and component library. Templates are rebuilt in the BILDIT Code Library and media is migrated from your DAM or hosting solution to BILDIT storage.'
  },
  {
    q: 'Is BILDIT secure and compliant?',
    a: 'BILDIT follows SOC 2-aligned controls, role-based access, SSO/SAML options, and audit logs. Data is encrypted in transit and at rest. Contact us for the latest security overview.'
  },
  {
    q: 'Where is BILDIT hosted?',
    a: 'Cloud-hosted with global edge caching/CDN for low latency across regions. Bring-your-own Vercel/infra is supported for front-end deploys. We also support Google Cloud Platform and AWS.'
  },
  {
    q: 'Who owns our data and content?',
    a: 'You do. All content, media, and analytics remain yours. We provide backups for portability.'
  },
  {
    q: 'How fast can we go live?',
    a: 'Typical teams ship their first content in a few days, and full production within 3–4 weeks. Because marketers control updates, ongoing velocity increases immediately.'
  },
  {
    q: 'What support do we get?',
    a: 'Access to documentation, onboarding guides, and responsive support. Paid plans include priority SLAs and solution engineering. We provide email, Slack, and phone support as well as a dedicated executive sponsor for enterprises.'
  },
  {
    q: 'Does BILDIT handle localization and multi-brand?',
    a: 'Yes. BILDIT supports a localization file used with i18n for each locale.'
  },
  {
    q: 'Can we personalize content?',
    a: 'Yes. Use built-in customer groups or we can integrate with your experiment/personalization tools.'
  },
  {
    q: 'How do we measure success?',
    a: 'Track content published, templates used, preview-to-publish rate, time-to-launch, and business engagement metrics like CVR and CTR.'
  },
  {
    q: "What's your roadmap focus?",
    a: "We're doubling down on personalization—with a ton of targeting options and AI to generate content that is approved by people."
  },
  {
    q: 'How do we get started?',
    a: 'Create your workspace and deploy the Free Trial at signup.bildit.co/signup. Developers create Code Library templates, integrate the Next.js SDK into your Next.js web site, and marketers publish content to slots provided.'
  }
]

export function VeeFaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[992px] px-4 md:px-8">
        <h2 className="text-center font-uncut-sans text-2xl font-bold text-[#171717] md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-lg border border-[#ccc4d6] bg-white transition-shadow"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-uncut-sans text-lg font-semibold text-[#323232]">{item.q}</span>
                  <ChevronDown
                    className={`size-6 shrink-0 text-[#a07dc0] transition-transform duration-200 ${
                      isOpen ? '-rotate-180' : ''
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-[#eee8f5] px-6 pb-5 pt-1">
                    <p className="font-uncut-sans text-base leading-relaxed text-[#a07dc0]">{item.a}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
