import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function BilditCMS() {
  return (
    <>
      <SlotPlaceholder slotId="cms-title" />
      <SlotPlaceholder slotId="cms-content" />
    </>
  )
}
