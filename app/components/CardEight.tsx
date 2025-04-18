import Image from 'next/image'

export interface CardEightType {
  src: string
  alt: string
  width: number
  height: number
  title: string
  content?: string
}
interface Props {
  item: CardEightType
}

const CardEight: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <div className="flex items-center justify-center h-[191px] px-6 border border-gray-300 bg-cms-lighter-gray rounded-2xl">
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
      </div>
      <div className="mt-5 px-12">
        <h4 className="text-2xl text-center font-bold leading-normal font-gt-walsheim text-black">{item.title}</h4>
        <p className="text-lg font-normal leading-normal text-neutral-900 text-center">{item.content}</p>
      </div>
    </div>
  )
}

export default CardEight
