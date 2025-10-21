'use client'

import { useEffect, useState } from 'react'
import { BilditClient, type Page } from '@bildit-platform/nextjs'
import Link from 'next/link'
import { Skeleton } from '@/app/components/Skeleton'
import { Duplicator } from '@/app/components/Duplicator'

const Navigation: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_BILDIT_API_KEY
        if (!apiKey) {
          throw new Error('BILDIT API key is not configured')
        }

        const apiBase = process.env.NEXT_PUBLIC_BILDIT_API_BASE
        const client = new BilditClient(apiBase ? { apiKey, apiBase } : { apiKey })
        const pagesData = await client.getPages()

        // getPages() already returns only published pages
        setPages(pagesData)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching pages:', err)
        setError(err instanceof Error ? err.message : 'Failed to load pages')
        setLoading(false)
      }
    }

    fetchPages()
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

  if (error) {
    console.warn('Navigation error:', error)
    return null // Fail silently in production
  }

  if (pages.length === 0) {
    return null
  }

  return (
    <nav className="py-4 px-6 bg-white border-b">
      <ul className="flex gap-6 items-center justify-center">
        {pages.map((page) => (
          <li key={page.id}>
            <Link
              href={`/pages/${page.slug}`}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
