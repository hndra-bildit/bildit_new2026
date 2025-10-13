'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { Banner } from '@/services/bildit.d'
import { BilditProvider } from '@bildit-platform/nextjs'
import { getBanners } from '@/services/bildit'

interface ProvidersProps {
  children: React.ReactNode
  banners: Banner[]
}

const Providers: React.FC<ProvidersProps> = ({ children, banners: initialBanners }) => {
  const pathname = usePathname()
  const [banners, setBanners] = useState<Banner[]>(initialBanners)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
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
  }, [pathname])

  return (
    <Suspense>
      <BilditProvider banners={banners}>{children}</BilditProvider>
    </Suspense>
  )
}

export default Providers