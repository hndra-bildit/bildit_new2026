import Image from 'next/image'

export interface CardItemsType {
  src: string
  alt: string
  title: string
  content: string
}
interface Props {
  item: CardItemsType
}
const CardOne: React.FC<Props> = ({ item }) => {
  return (
    <div className="w-80 mt-12 mx-5">
      <div className="bg-gray-100 border-cms-light-gray rounded-2xl flex items-center justify-center py-26">
        <Image src={item.src} alt={item.alt} width={168} height={168} />
      </div>
      <div className="text-center">
        <h5 className="text-3xl leading-none text-neutral-900 font-bold mt-5 font-gt-walsheim">{item.title}</h5>
        <p className="text-xl leading-none text-zinc-600 mt-2">{item.content}</p>
      </div>
    </div>
  )
}

export default CardOne
