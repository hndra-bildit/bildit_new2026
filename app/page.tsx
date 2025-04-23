import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function Home() {
  return (
    <>
      <SlotPlaceholder slotId="home-title" />
      <SlotPlaceholder slotId="home-content-belk-results" />
      <SlotPlaceholder slotId="home-content-why-bildit" />
      <SlotPlaceholder slotId="home-content-cms-overview-first" />
      <SlotPlaceholder slotId="home-content-cms-overview-second" />
      <SlotPlaceholder slotId="home-content-cms-overview-third" />
    </>
  )
}
