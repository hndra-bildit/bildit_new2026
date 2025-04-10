import { CardItemsType } from './CardOne'
import Image from 'next/image'

interface Props {
  item: CardItemsType
  className?: string
}
const CardTwo: React.FC<Props> = ({ item, className }) => {
  return (
    <div className="mt-10 md:mt-0 p-5 border border-[#DBDBDB] rounded-[14px] bg-lighter-gray">
      <div className="text-center">
        <Image src={item.src} alt={item.alt} width={0} height={0} className="w-auto h-auto inline-block" unoptimized />
      </div>
      <div className="">
        <h5 className={`text-3xl leading-[100%] text-black-one font-bold mt-7 font-uncut-sans ${className}`}>
          {item.title}
        </h5>
        <p className="text-xl leading-[32px] text-grey font-normal mt-2">{item.content}</p>
      </div>
    </div>
  )
}

export default CardTwo
