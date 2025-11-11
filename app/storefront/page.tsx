import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function StoreFront() {
  return (
    <div>
      <SlotPlaceholder slotId="storefront-title" />
      <SlotPlaceholder slotId="storefront-content" />
    </div>
  )
}
