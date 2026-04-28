import type { ReactNode } from 'react'
import { BuildPeopleProductsHeading } from '@/app/components/BuildPeopleProductsHeading'
import { SITE_MEGA_FOOTER_SECTIONS } from '@/app/lib/site-mega-nav-data'
import Image from 'next/image'
import Link from 'next/link'

type FooterHrefItem = { label: string; href: string; external?: boolean }

const colCompany: FooterHrefItem[] = [
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'Careers', href: '/career/' },
  { label: 'Partners', href: '/tech-partners/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Documentation', href: 'https://docs.bildit.co', external: true }
]

/** Deeper product links (plus mega Platform coverage). */
const colProduct: FooterHrefItem[] = [
  { label: 'Visual Experience Engine', href: '/visual-experience-engine/' },
  { label: 'Reference App', href: '/mobile-app-storefront/' },
  { label: 'Native Checkout', href: '/mobile-app-storefront/' },
  { label: 'App Clip SDK', href: '/mobile-app-storefront/' },
  { label: 'Mobile Checkout', href: '/mobile-app-storefront/' },
  { label: 'Integrations', href: '/integration-partners/' },
  { label: 'React Native Storefront', href: '/mobile-app-storefront/' }
]

const colResources: FooterHrefItem[] = [
  { label: 'Developers', href: '/solutions-for-engineering/' },
  { label: 'For IT', href: '/solutions-for-engineering/' },
  { label: 'For Agencies', href: '/integration-partners/' }
]

function FooterLinkList({ items }: { items: FooterHrefItem[] }) {
  return (
    <ul className="font-[family-name:var(--font-inter)] mt-3 space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.label}>
          {item.external ? (
            <a
              href={item.href}
              className="text-neutral-700 hover:text-neutral-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <Link href={item.href} className="text-neutral-700 hover:text-neutral-900">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wide text-neutral-900">
        {title}
      </p>
      {children}
    </div>
  )
}

type MegaFooterSection = (typeof SITE_MEGA_FOOTER_SECTIONS)[number]

function MegaFooterLinkColumn({ section }: { section: MegaFooterSection }) {
  return (
    <FooterColumn title={section.label}>
      <ul className="font-[family-name:var(--font-inter)] mt-3 space-y-2 text-sm">
        {section.items.map((item) => (
          <li key={item.title + item.href}>
            <Link href={item.href} className="text-neutral-700 hover:text-neutral-900">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </FooterColumn>
  )
}

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

            <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
              <div className="min-w-0 flex-1 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {SITE_MEGA_FOOTER_SECTIONS.map((section) => (
                  <MegaFooterLinkColumn key={section.label} section={section} />
                ))}
                <FooterColumn title="Product">
                  <FooterLinkList items={colProduct} />
                </FooterColumn>
                <FooterColumn title="Resources">
                  <FooterLinkList items={colResources} />
                </FooterColumn>
              </div>
              <aside
                className="w-full shrink-0 border-t border-neutral-200 pt-8 lg:max-w-[200px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
                aria-label="Company"
              >
                <FooterColumn title="Company">
                  <FooterLinkList items={colCompany} />
                </FooterColumn>
              </aside>
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
