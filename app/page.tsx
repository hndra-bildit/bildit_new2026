import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main>
        <SlotPlaceholder slotId="home-hero" />
        <SlotPlaceholder slotId="home-before-after" />
        <SlotPlaceholder slotId="home-social-proof" />
        <SlotPlaceholder slotId="home-problem" />
        <SlotPlaceholder slotId="home-liberation" />
        <SlotPlaceholder slotId="home-how-it-works" />
        <SlotPlaceholder slotId="home-interactive-section" />
        <SlotPlaceholder slotId="home-core-benefits" />
        <SlotPlaceholder slotId="home-value-stack" />
        <SlotPlaceholder slotId="home-guarantee" />
        <SlotPlaceholder slotId="home-urgency" />
        <SlotPlaceholder slotId="home-testimonials" />
        <SlotPlaceholder slotId="home-faq" />
        <SlotPlaceholder slotId="home-final-close" />
      </main>
    </div>
  )
}
