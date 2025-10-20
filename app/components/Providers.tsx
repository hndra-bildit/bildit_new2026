'use client'

import React, { Suspense, useEffect, useState } from 'react'
import BannerLoader from './BannerLoader'
import { getBanners } from '@/services/bildit'
import type { Banner } from '@/services/bildit.d'
import { BilditProvider } from '@bildit-platform/nextjs'
import { usePathname } from 'next/navigation'

interface ProvidersProps {
  children: React.ReactNode
  banners: Banner[]
}

const Providers: React.FC<ProvidersProps> = ({ children, banners: initialBanners }) => {
  const pathname = usePathname()
  const [banners, setBanners] = useState<Banner[]>(initialBanners)
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const fetchBannersForRoute = async () => {
      setIsLoading(true)
      try {
        const response = await getBanners({ location: pathname })
        if (response?.data) {
          setBanners(response.data as Banner[])
        }
      } catch (error) {
        console.error('Error fetching banners for route:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBannersForRoute()
  }, [pathname, isMounted])

  // Show loader until mounted and first fetch completes
  if (!isMounted || isLoading) {
    return <BannerLoader />
  }

  return (
    <Suspense>
      <BilditProvider banners={banners}>{children}</BilditProvider>
    </Suspense>
  )
}

export default Providers
