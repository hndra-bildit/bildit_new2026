import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default async function Blog() {
  return (
    <>
      <SlotPlaceholder slotId="blog-single-title" />
      <SlotPlaceholder slotId="blog-single-content" />
    </>
  )
}
