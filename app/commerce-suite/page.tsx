import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function CommerceSuite() {
  return (
    <div className="text-center lg:text-left">
      <SlotPlaceholder slotId="commerce-suite-title" />
      <SlotPlaceholder slotId="commerce-suite-content" />
    </div>
  )
}
