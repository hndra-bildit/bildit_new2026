import { BuildPeopleProductsHeading } from '@/app/components/BuildPeopleProductsHeading'
import Image from 'next/image'
import Link from 'next/link'

const colAbout = [
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'Careers', href: '/career/' },
  { label: 'Partners', href: '/tech-partners/' },
  { label: 'Pricing', href: '/pricing/' }
]

const colProduct = [
  { label: 'Reference App', href: '/mobile-app-storefront/' },
  { label: 'Native Checkout', href: '/mobile-app-storefront/' },
  { label: 'App Clip SDK', href: '/mobile-app-storefront/' },
  { label: 'Visual Experience Engine', href: '/visual-experience-engine/' },
  { label: 'Mobile Checkout', href: '/mobile-app-storefront/' },
  { label: 'Integrations', href: '/integration-partners/' },
  { label: 'React Native Storefront', href: '/mobile-app-storefront/' }
]

const colInsights = [
  { label: 'Blog', href: '/blog/' },
  { label: 'Webinars', href: '/our-story/' }
]

const colLearn = [
  { label: 'Documentation', href: 'https://docs.bildit.co' },
  { label: 'Developers', href: '/solutions-for-engineering/' },
  { label: 'For IT', href: '/solutions-for-engineering/' },
  { label: 'For Agencies', href: '/integration-partners/' }
]

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1260px] px-6 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-16">
            <div>
              <Link href="/" className="inline-block" aria-label="BILDIT home">
                <Image
                  src="/images/others/bildit-logo.svg"
                  alt=""
                  width={118}
                  height={26}
                  className="h-[26px] w-auto"
                />
              </Link>
              <ul className="font-[family-name:var(--font-inter)] mt-8 space-y-2 text-sm text-neutral-700">
                <li>
                  <a href="mailto:hello@bildit.co" className="hover:text-neutral-900">
                    hello@bildit.co
                  </a>
                </li>
                <li>
                  <a href="tel:+18882458277" className="hover:text-neutral-900">
                    (888) 245-8277
                  </a>
                </li>
                <li className="text-neutral-600">534 River Crossing Dr #103, Fort Mill, SC 29715</li>
              </ul>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/bilditon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100"
                  aria-label="BILDIT on Instagram"
                >
                  <Image src="/images/footer/fe-instagram.svg" alt="" width={24} height={24} />
                </a>
                <a
                  href="https://www.facebook.com/BILDITco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100"
                  aria-label="BILDIT on Facebook"
                >
                  <Image src="/images/footer/fa-brands-facebook-square.svg" alt="" width={24} height={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/bilditon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100"
                  aria-label="BILDIT on LinkedIn"
                >
                  <Image src="/images/footer/akar-icons-linkedin-box-fill.svg" alt="" width={24} height={24} />
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <ul className="font-[family-name:var(--font-inter)] space-y-2 text-sm">
                  {colAbout.map((item) => (
                    <li key={item.href + item.label}>
                      <Link href={item.href} className="text-neutral-700 hover:text-neutral-900">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="font-[family-name:var(--font-inter)] space-y-2 text-sm">
                  {colProduct.map((item) => (
                    <li key={item.href + item.label}>
                      <Link href={item.href} className="text-neutral-700 hover:text-neutral-900">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wide text-neutral-900">
                  Insights
                </p>
                <ul className="font-[family-name:var(--font-inter)] mt-3 space-y-2 text-sm">
                  {colInsights.map((item) => (
                    <li key={item.href + item.label}>
                      <Link href={item.href} className="text-neutral-700 hover:text-neutral-900">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="font-[family-name:var(--font-inter)] mt-6 space-y-2 text-sm">
                  {colLearn.map((item) => (
                    <li key={item.href + item.label}>
                      <Link href={item.href} className="text-neutral-700 hover:text-neutral-900">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-white pt-[20px]">
        <div className="mx-auto max-w-[1260px] px-6 pb-12 md:pb-16">
          <BuildPeopleProductsHeading />
          <div className="font-[family-name:var(--font-inter)] mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
            <p>Copyright 2026 BILDIT, INC. All Rights Reserved</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/enterprise-license/" className="hover:text-neutral-800">
                Enterprise License
              </Link>
              <Link href="/privacy-policy/" className="hover:text-neutral-800">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
