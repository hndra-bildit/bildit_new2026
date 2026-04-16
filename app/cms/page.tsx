import { Demo } from '@/app/components/Demo'
import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default function BilditCMS() {
  return (
    <>
      <SlotPlaceholder slotId="cms-title" />
      <Demo />
    </>
  )
}
