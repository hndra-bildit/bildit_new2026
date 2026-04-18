import { EngineeringSolutionsContent } from '@/app/components/solutions/EngineeringSolutionsContent'
import { SolutionsLocalHeader } from '@/app/components/solutions/SolutionsLocalHeader'

export default function SolutionsForEngineeringPage() {
  return (
    <>
      <SolutionsLocalHeader variant="dark" />
      <EngineeringSolutionsContent />
    </>
  )
}
