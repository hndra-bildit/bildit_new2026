import BILDIT_Comparison_BG from '../../public/images/comparison/BILDIT_Comparison_BG.png'
import ComparisonTable from '../components/ComparisonTable'
import DisplayOne from '../components/DisplayOne'
import Image from 'next/image'

export default function Comparison() {
  return (
    <section className="pt-[160px] text-center py-[54px] md:py-[200px]">
      <Image
        src={BILDIT_Comparison_BG}
        className="top-0 left-0 absolute -z-1"
        alt="BILDIT_Comparison_BG.png"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="container mx-auto  px-[16px] lg:px-0 pt-[160px]">
        <DisplayOne content="Content Management System Comparisons" />
        <ComparisonTable />
      </div>
    </section>
  )
}
