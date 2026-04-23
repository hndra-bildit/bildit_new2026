import BlogClient from '@/app/components/BlogClient'
import { WebinarsHero } from '@/app/components/blog/WebinarsHero'
import { PRICING_PAGE_SURFACE_CLASS } from '@/app/lib/pricing-home-insets'
import { cn } from '@/utils/cn'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Webinars on commerce, content, and getting the most from the BILDIT platform.'
}

export default function WebinarsPage() {
  return (
    <div className={cn('min-h-screen overflow-x-clip text-neutral-900', PRICING_PAGE_SURFACE_CLASS)}>
      <SlotPlaceholder slotId="webinars-main-title">
        <WebinarsHero />
      </SlotPlaceholder>
      <main className={cn('w-full', PRICING_PAGE_SURFACE_CLASS)}>
        <SlotPlaceholder slotId="webinars-main-content">
          <BlogClient fixedCategory="webinar" />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
