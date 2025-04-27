import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function Home() {
  return (
    <>
      <SlotPlaceholder slotId="home-title" />
      <SlotPlaceholder slotId="home-content" />
    </>
  )
}
