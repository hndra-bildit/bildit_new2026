import BlogClient from '@/app/components/BlogClient'
import { WebinarsHero } from '@/app/components/blog/WebinarsHero'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Webinars on commerce, content, and getting the most from the BILDIT platform.'
}

export default function WebinarsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#fafafa] text-neutral-900">
      <SlotPlaceholder slotId="webinars-main-title">
        <WebinarsHero />
      </SlotPlaceholder>
      <main className="w-full bg-white">
        <SlotPlaceholder slotId="webinars-main-content">
          <BlogClient fixedCategory="webinar" />
        </SlotPlaceholder>
      </main>
    </div>
  )
}
