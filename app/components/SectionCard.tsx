import BodyTwo from './BodyTwo'
import DisplayOne from './DisplayOne'
import SubTitleFiveCaps from './SubTitleFiveCaps'
import Image from 'next/image'

export interface SectionCardType {
  title: string
  head: string
  content: string
  src: string
  alt: string
  dir: boolean
}

interface Props {
  item: SectionCardType
}

const SectionCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="pt-[90px] lg:pt-[240px] container mx-auto lg:grid grid-cols-2 items-center gap-[60px]">
      <div className={`${item.dir === true ? 'order-2' : ''}`}>
        <SubTitleFiveCaps content={item.title} />
        <DisplayOne content={item.head} />
        <BodyTwo className="mt-[30px]" content={item.content} />
      </div>
      <div className={`flex justify-center ${item.dir === true ? 'order-1' : ''}`}>
        <Image src={`/images/${item.src}`} alt={item.alt} width={600} height={600} />
      </div>
    </div>
  )
}

export default SectionCard
