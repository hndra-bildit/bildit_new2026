import ComparisonTable from '@/app/components/ComparisonTable'
import DisplayOne from '@/app/components/DisplayOne'
import Image from 'next/image'

export default function Comparison() {
  return (
    <section className="py-20 lg:pt-40 text-center py-13">
      <Image
        src="/images/comparison/BILDIT_Comparison_BG.png"
        className="top-0 left-0 absolute -z-1 w-full h-auto"
        alt="BILDIT_Comparison_BG.png"
        width={1200}
        height={0}
      />
      <div className="container mx-auto  px-4">
        <DisplayOne content="Content Management System Comparisons" />
        <ComparisonTable />
      </div>
    </section>
  )
}
