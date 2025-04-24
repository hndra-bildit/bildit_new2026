import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function StoreFront() {
  return (
    <div>
      <SlotPlaceholder slotId="storefront-title" />
      <SlotPlaceholder slotId="storefront-content-first" />
      <SlotPlaceholder slotId="storefront-content-second" />
      <SlotPlaceholder slotId="storefront-content-third" />
      <SlotPlaceholder slotId="storefront-content-fourth" />
      <SlotPlaceholder slotId="storefront-content-five" />
      <SlotPlaceholder slotId="storefront-content-six" />
    </div>
  )
}
