import BlogClient from '@/app/components/BlogClient'
import { BlogInsightsHero } from '@/app/components/blog/BlogInsightsHero'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Insights on commerce, content strategy, and BILDIT platform updates.'
}

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-neutral-900">
      <SlotPlaceholder slotId="blog-main-title">
        <BlogInsightsHero />
      </SlotPlaceholder>
      <main className="w-full bg-white">
        <SlotPlaceholder slotId="blog-main-content">
          <BlogClient />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
