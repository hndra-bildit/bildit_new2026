import { SlotPlaceholder } from '@bildit-platform/nextjs'

export default async function Blogs() {
  return (
    <>
      <SlotPlaceholder slotId="blog-main-title" />
      <SlotPlaceholder slotId="blog-main-content" />
    </>
  )
}
