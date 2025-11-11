'use client'

import { useEffect, useState } from 'react'
import { Duplicator } from '@/app/components/Duplicator'
import { Skeleton } from '@/app/components/Skeleton'
import Link from 'next/link'

// Mock pages for local development
const mockPages = [
  { slug: '/', title: 'Home' },
  { slug: '/about', title: 'About' },
  { slug: '/products', title: 'Products' },
  { slug: '/contact', title: 'Contact' }
]

const Navigation: React.FC = () => {
  const [pages, setPages] = useState<typeof mockPages>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if we're in local development
    const isLocal = window.location.hostname === 'localhost'

    if (isLocal) {
      // Use mock data for local development
      console.log('🔧 Using mock navigation data for local development')
      setPages(mockPages)
      setLoading(false)
    } else {
      // In production, you would fetch from BILDIT API here
      // For now, fallback to mock data
      setPages(mockPages)
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <nav className="py-4 px-6 bg-white border-b">
        <div className="flex gap-6 items-center justify-center">
          <Duplicator count={5} className="flex flex-row gap-6">
            <Skeleton className="h-6 w-20 rounded" />
          </Duplicator>
        </div>
      </nav>
    )
  }

  if (pages.length === 0) {
    return null
  }

  return (
    <nav className="py-4 px-6 bg-white border-b">
      <ul className="flex gap-6 items-center justify-center">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link href={page.slug} className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
