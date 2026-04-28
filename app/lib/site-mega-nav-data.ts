/**
 * Shared navigation items for the site header mega menu and footer.
 * Labels for each group match the desktop mega menu column headings.
 */
export type SiteMegaLinkItem = {
  href: string
  title: string
  description: string
}

export const SITE_MEGA_CAPABILITIES_ITEMS: SiteMegaLinkItem[] = [
  {
    href: '/visual-experience-engine/',
    title: 'Visual Experience Engine',
    description: 'Build Templates in React and let the marketing team edit them visually.'
  },
  {
    href: '/mobile-app-storefront/',
    title: 'Mobile App Storefront',
    description:
      'Optimized React Native Mobile App Storefront: fast and modern UI/UX built-in, high conversion with one click checkout'
  }
]

export const SITE_MEGA_SOLUTION_ITEMS: SiteMegaLinkItem[] = [
  {
    href: '/solutions-for-marketers/',
    title: 'For Marketing Teams',
    description: 'Update your site without engineering tickets. Schedule and Preview Content in Realtime.'
  },
  {
    href: '/solutions-for-engineering/',
    title: 'For Engineering Teams',
    description: 'Build advanced templates in React and React Native. Push out template updates without a deployment.'
  }
]

export const SITE_MEGA_PARTNER_ITEMS: SiteMegaLinkItem[] = [
  {
    href: '/tech-partners/',
    title: 'Tech Partners',
    description: 'Explore integrations and technology partners that extend the BILDIT platform.'
  },
  {
    href: '/integration-partners/',
    title: 'Become a Partner',
    description: 'Join our partner program and build solutions on top of BILDIT.'
  }
]

export const SITE_MEGA_INSIGHTS_ITEMS: SiteMegaLinkItem[] = [
  {
    href: '/blog/',
    title: 'Blog',
    description: 'Articles on commerce, content strategy, and platform updates.'
  },
  {
    href: '/webinars/',
    title: 'Webinars',
    description: 'Watch sessions on commerce, content, and getting the most from the platform.'
  }
]

export const SITE_MEGA_FOOTER_SECTIONS: ReadonlyArray<{
  label: string
  items: readonly SiteMegaLinkItem[]
}> = [
  { label: 'Platform', items: SITE_MEGA_CAPABILITIES_ITEMS },
  { label: 'Solutions', items: SITE_MEGA_SOLUTION_ITEMS },
  { label: 'Partners', items: SITE_MEGA_PARTNER_ITEMS },
  { label: 'Insights', items: SITE_MEGA_INSIGHTS_ITEMS }
]
