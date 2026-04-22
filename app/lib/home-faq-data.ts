/**
 * FAQ copy and structured data aligned with https://bildit.co
 * (FAQPage mainEntity matches production JSON-LD.)
 */
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'

export const HOME_FAQ_SUBTITLE = 'Answers to your common questions about the Visual Experience Engine.'

export type HomeFaqEntry = {
  /** schema.org Question.name — includes "Q: " prefix like production */
  name: string
  /** schema.org Answer.text — plain string including "A: " prefix */
  text: string
}

export const HOME_FAQ_ENTRIES: readonly HomeFaqEntry[] = [
  {
    name: 'Q: What is the Visual Experience Engine? ',
    text: 'A: BILDIT is the AI-powered digital experience platform that frees marketers and developers from slow, painful CMS workflows — delivering instant, elegant, personalized content across web and mobile. Built for Next.js and React Native, it lets marketing teams launch, manage, and update content instantly.'
  },
  {
    name: 'Q: Who is the Visual Experience Engine for? ',
    text: 'A: Teams that need to ship content experiences fast: eCommerce brands and retailers running Next.js sites or React Native mobile apps. If your marketers are bottlenecked by dev cycles, BILDIT removes that dependency.'
  },
  {
    name: 'Q: How does BILDIT work with Next.js? ',
    text: 'A: BILDIT provides an NPM SDK with an API that supports SSR, SSG, and ISR. You can schedule content, live preview scheduled changes, and publish instantly without redeploys. Developers wire it once; marketers ship updates anytime.'
  },
  {
    name: 'Q: Does the Visual Experience Engine support React Native mobile apps?',
    text: 'A: Yes. BILDIT powers components, content, dynamic screens, in-app promotions, and segmentation in React Native—no app store resubmission required. Preview changes on device before pushing live.'
  },
  {
    name: 'Q: Do marketers really not need developers?',
    text: 'A: Not exactly. Dev creates the initial components and templates; after that marketers own the workflow - creating content using templates by filling in fields, scheduling, localizing, and publishing updates without code or deployments.'
  },
  {
    name: 'Q: Can I schedule content and preview before publishing?',
    text: 'A: Yes. Use draft, preview on web and device, schedule, and instant publish. Previews work even with SSR and app environments so you can QA confidently.'
  },
  {
    name: 'Q: What about performance?',
    text: 'A: The Visual Experience Engine is designed for high-performance Next.js and React Native: edge-cached APIs, CDN-backed media, partial hydration-friendly schemas, and incremental updates so you keep Core Web Vitals and Lighthouse metrics tight.'
  },
  {
    name: 'Q: What integrations are available?',
    text: 'A: Common implementations use Vercel, Salesforce Commerce Cloud, Netlify, commercetools, Google Cloud Platform, and AWS hosted React applications. Any React or React Native application is a candidate to use the Visual Experience Engine.'
  },
  {
    name: 'Q: How do we migrate from our current CMS?',
    text: 'A: Often we migrate HTML or React content directly from your scheduled campaigns and import them into the Visual Experience Engine scheduler and component library. Then each template is rebuilt in the BILDIT Code Library and any media is migrated from your DAM or hosting solution to BILDIT storage.'
  },
  {
    name: 'Q: Is BILDIT secure and compliant?',
    text: 'A: BILDIT follows SOC 2-aligned controls, role-based access, SSO/SAML options, and audit logs. Data is encrypted in transit and at rest. Contact us for the latest security overview.'
  },
  {
    name: 'Q: Where is BILDIT hosted?',
    text: 'A: Cloud-hosted with global edge caching/CDN for low latency across regions. Bring-your-own Vercel/infra is supported for front-end deploys. We also support Google Cloud Platform and AWS.'
  },
  {
    name: 'Q: Who owns our data and content?',
    text: 'A: You do. All content, media, and analytics remain yours. We provide backups for portability.'
  },
  {
    name: 'Q: How fast can we go live?',
    text: 'A: Typical teams ship their first content in a few days, and full production within 3-4 weeks. Because marketers control updates, ongoing velocity increases immediately.'
  },
  {
    name: 'Q: What support do we get?',
    text: 'A: Access to documentation, onboarding guides, and responsive support. Paid plans include priority SLAs and solution engineering. We provide email, Slack, and phone support as well as a dedicated executive sponsor for enterprises.'
  },
  {
    name: 'Q: Does BILDIT handle localization and multi-brand?',
    text: 'A: Yes. The Visual Experience Engine supports a localization file used with i18n for each locale.'
  },
  {
    name: 'Q: Can we personalize content?',
    text: 'A: Yes. Use built-in customer groups or we can integrate with your experiment/personalization tools.'
  },
  {
    name: 'Q: How do we measure success?',
    text: 'A: Track content published, templates used, preview-to-publish rate, time-to-launch, and business engagement metrics like CVR and CTR.'
  },
  {
    name: "Q: What's your roadmap focus?",
    text: "A: We're doubling down on personalization—with a ton of targeting options and AI to generate content that is approved by people."
  },
  {
    name: 'Q: How do we get started? ',
    text: 'A: Create your workspace and deploy the Free Trial at https://signup.bildit.co/signup. Developers create Code Library templates, integrate the Next.js SDK into your Next.js web site, and marketers publish content to slots provided.'
  }
] as const

const SIGNUP_URL = BILDIT_SIGNUP_URL

export function homeFaqPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQ_ENTRIES.map((entry) => ({
      '@type': 'Question',
      name: entry.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.text
      }
    }))
  }
}

/** Last FAQ answer: same text as schema, with a clickable signup URL in the UI. */
export function homeFaqGetStartedAnswerParts() {
  const entry = HOME_FAQ_ENTRIES[HOME_FAQ_ENTRIES.length - 1]
  const prefix = 'A: Create your workspace and deploy the Free Trial at '
  const suffix =
    '. Developers create Code Library templates, integrate the Next.js SDK into your Next.js web site, and marketers publish content to slots provided.'
  return { prefix, signupUrl: SIGNUP_URL, suffix, fullText: entry.text }
}
