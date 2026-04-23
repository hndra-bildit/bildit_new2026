import BlogClient from '@/app/components/BlogClient'
import { BlogInsightsHero } from '@/app/components/blog/BlogInsightsHero'
import { PRICING_PAGE_SURFACE_CLASS } from '@/app/lib/pricing-home-insets'
import { cn } from '@/utils/cn'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Insights on commerce, content strategy, and BILDIT platform updates.'
}

export default function BlogPage() {
  return (
    <div className={cn('min-h-screen overflow-x-clip text-neutral-900', PRICING_PAGE_SURFACE_CLASS)}>
      <SlotPlaceholder slotId="blog-main-title">
        <BlogInsightsHero />
      </SlotPlaceholder>
      <main className={cn('w-full', PRICING_PAGE_SURFACE_CLASS)}>
        <SlotPlaceholder slotId="blog-main-content">
          <BlogClient />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
