import { CardItemsType } from './CardOne'
import cn from 'clsx'
import Image from 'next/image'

interface Props {
  item: CardItemsType
  className?: string
}
const CardTwo: React.FC<Props> = ({ item, className }) => {
  return (
    <div className="mt-5 p-5 border border-gray-200 rounded-2xl bg-gray-100">
      <div className="text-center">
        <Image src={item.src} alt={item.alt} width={0} height={0} className="w-auto h-auto inline-block" unoptimized />
      </div>
      <div className="text-center lg:text-left">
        <h5 className={cn('text-3xl leading-none text-neutral-900 font-bold mt-7 font-uncut-sans', className)}>
          {item.title}
        </h5>
        <p className="text-xl leading-normal text-zinc-600 font-normal mt-2">{item.content}</p>
      </div>
    </div>
  )
}

export default CardTwo
