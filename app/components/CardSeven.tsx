import Image from 'next/image'

export interface CardSevenItemType {
  src: string
  alt: string
  width: number
  height: number
  title: string
  content: string
}

interface Props {
  item: CardSevenItemType
}
const CardSeven: React.FC<Props> = ({ item }) => {
  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden">
      <div className="bg-gray-100 flex justify-center items-center h-60">
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
      </div>
      <div className="px-6 py-7">
        <h4 className="text-2xl font-bold leading-normal font-gt-walsheim text-black">{item.title}</h4>
        <p className="mt-3 text-lg leading-normal text-black">{item.content}</p>
      </div>
    </div>
  )
}

export default CardSeven
