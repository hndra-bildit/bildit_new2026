import { BuildPeopleProductsHeading } from '@/app/components/BuildPeopleProductsHeading'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'

const colAbout = [
  { label: 'About Us', href: '/our-story/' },
  { label: 'Contact Us', href: '/our-story/' },
  { label: 'Meet the Team', href: '/meet-the-team/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Careers', href: '/career/' },
  { label: 'Partners', href: '/tech-partners/' },
  { label: 'ROI Calculator', href: '/pricing/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Case Study', href: '/comparison/' }
]

const colProduct = [
  { label: 'Reference App', href: '/storefront/' },
  { label: 'Native Checkout', href: '/commerce-suite/' },
  { label: 'App Clip SDK', href: '/commerce-suite/' },
  { label: 'Visual Experience Engine', href: '/cms/' },
  { label: 'Mobile Checkout Index', href: '/commerce-suite/' },
  { label: 'Integrations', href: '/integration-partners/' },
  { label: 'React Native SDKs', href: '/it/' },
  { label: 'Demo', href: '/storefront/' },
  { label: 'KPIs and Metrics', href: '/comparison/' }
]

const colLearn = [
  { label: 'How It Works', href: '/commerce-suite/' },
  { label: 'Features', href: '/cms/' },
  { label: 'Documentation', href: '/it/' },
  { label: 'Developers', href: '/it/' },
  { label: 'Webinars', href: '/our-story/' },
  { label: 'For IT', href: '/it/' },
  { label: 'For Agencies', href: '/integration-partners/' },
  { label: 'For Brands', href: '/brands/' },
  { label: 'Resources', href: '/blog/' }
]

export function SiteFooter({ showBuildTitle = true }: { showBuildTitle?: boolean }) {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1260px] px-6 py-12 md:py-16">
        {showBuildTitle ? <BuildPeopleProductsHeading /> : null}

        <div className={cn('grid gap-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-16', showBuildTitle && 'mt-10')}>
          <div>
            <Link href="/" className="inline-block" aria-label="BILDIT home">
              <Image src="/images/others/BILDIT_Logo.svg" alt="" width={118} height={26} className="h-[26px] w-auto" />
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
            <div className="mt-6 flex gap-4">
              <a href="https://www.linkedin.com" className="opacity-80 hover:opacity-100" aria-label="LinkedIn">
                <Image src="/images/footer/akar-icons_linkedin-box-fill.svg" alt="" width={24} height={24} />
              </a>
              <a href="https://twitter.com" className="opacity-80 hover:opacity-100" aria-label="Twitter">
                <Image src="/images/footer/fe_twitter.svg" alt="" width={24} height={24} />
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
              <ul className="font-[family-name:var(--font-inter)] space-y-2 text-sm">
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

        <div className="font-[family-name:var(--font-inter)] mt-12 flex flex-col gap-4 border-t border-neutral-200 pt-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 BILDIT, INC. All Rights Reserved</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/pricing/" className="hover:text-neutral-800">
              Enterprise License
            </Link>
            <Link href="/our-story/" className="hover:text-neutral-800">
              For Investors
            </Link>
            <Link href="/our-story/" className="hover:text-neutral-800">
              Terms + Conditions
            </Link>
            <Link href="/our-story/" className="hover:text-neutral-800">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
