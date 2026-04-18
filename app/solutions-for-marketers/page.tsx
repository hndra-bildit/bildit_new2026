import { MarketersSolutionsContent } from '@/app/components/solutions/MarketersSolutionsContent'
import { SolutionsLocalHeader } from '@/app/components/solutions/SolutionsLocalHeader'

export default function SolutionsForMarketersPage() {
  return (
    <>
      <SolutionsLocalHeader variant="light" />
      <MarketersSolutionsContent />
    </>
  )
}
