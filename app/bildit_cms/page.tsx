import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function BilditCMS() {
  return (
    <>
      <SlotPlaceholder slotId="cms-title" />
      <SlotPlaceholder slotId="cms-content-first" />
      <SlotPlaceholder slotId="cms-content-second" />
      <SlotPlaceholder slotId="cms-content-third" />
      <SlotPlaceholder slotId="cms-content-fourth" />
      <SlotPlaceholder slotId="cms-content-five" />
      <SlotPlaceholder slotId="cms-content-six" />
      <SlotPlaceholder slotId="cms-content-seven" />
      <SlotPlaceholder slotId="cms-content-eight" />
    </>
  )
}
