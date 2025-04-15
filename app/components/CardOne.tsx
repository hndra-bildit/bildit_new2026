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
    <div className="w-[320px] mt-12 mx-5">
      <div className="bg-cms-lighter-gray border-cms-light-gray rounded-2xl flex items-center justify-center py-[103px]">
        <Image src={item.src} alt={item.alt} width={168} height={168} />
      </div>
      <div className="text-center">
        <h5 className="text-3xl leading-none text-cms-black-one font-bold mt-9 font-gt-walsheim h-[74px]">
          {item.title}
        </h5>
        <p className="text-xl leading- text-cms-grey">{item.content}</p>
      </div>
    </div>
  )
}

export default CardOne
