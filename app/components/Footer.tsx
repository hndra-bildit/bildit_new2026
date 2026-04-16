'use client'

import { SiteFooter } from '@/app/components/SiteFooter'
import { usePathname } from 'next/navigation'

const Footer: React.FC = () => {
  const pathname = usePathname() || '/'
  const isHome = pathname.replace(/\/$/, '') === ''
  return <SiteFooter showBuildTitle={!isHome} />
}

export default Footer
