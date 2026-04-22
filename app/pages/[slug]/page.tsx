import { SITE_PAGE_TITLE } from '@/app/lib/site-page-title'
import { BilditClient, type Page } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Generate static params for all published pages
export async function generateStaticParams() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_BILDIT_API_KEY
    if (!apiKey) {
      console.warn('BILDIT API key is not configured')
      return []
    }

    const apiBase = process.env.NEXT_PUBLIC_BILDIT_API_BASE
    const client = new BilditClient(apiBase ? { apiKey, apiBase } : { apiKey })
    const pages = await client.getPages()

    // getPages() already returns only published pages
    return pages.map((page: Page) => ({
      slug: page.slug
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params
    const apiKey = process.env.NEXT_PUBLIC_BILDIT_API_KEY
    if (!apiKey) {
      return {
        title: SITE_PAGE_TITLE
      }
    }

    const apiBase = process.env.NEXT_PUBLIC_BILDIT_API_BASE
    const client = new BilditClient(apiBase ? { apiKey, apiBase } : { apiKey })
    const pageData = await client.getPageDetail(slug)

    if (!pageData) {
      return {
        title: SITE_PAGE_TITLE
      }
    }

    return {
      title: SITE_PAGE_TITLE,
      description: pageData.name
    }
  } catch {
    return {
      title: SITE_PAGE_TITLE
    }
  }
}

// Main page component
export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const apiKey = process.env.NEXT_PUBLIC_BILDIT_API_KEY
    if (!apiKey) {
      throw new Error('BILDIT API key is not configured')
    }

    const client = new BilditClient({ apiKey })
    const pageData = await client.getPageDetail(slug)
    if (!pageData) {
      notFound()
    }

    // Fallback: if code not present, try loading by contentId
    let htmlCode = pageData.code
    if (!htmlCode && pageData.contentId) {
      const content = await client.getContent(pageData.contentId)
      htmlCode = content?.code
    }

    if (!htmlCode) {
      notFound()
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{pageData.name}</h1>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: htmlCode! }} />
        </article>
      </div>
    )
  } catch (error) {
    console.error('Error loading page:', error)
    notFound()
  }
}

// Enable ISR (Incremental Static Regeneration) to refresh pages every 60 seconds
export const revalidate = 60
