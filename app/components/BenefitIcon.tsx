import Image from 'next/image'

export interface IconItemsType {
  src: string
  alt: string
  content: string
}
interface Props {
  item: IconItemsType
}
const BenefitIcon: React.FC<Props> = ({ item }) => {
  return (
    <div className="mx-5 pt-10">
      <div className="">
        <Image src={item.src} alt={item.alt} width={286} height={286} />
      </div>
      <div className="text-center">
        <p className="text-2xl leading-none text-zinc-600 font-bold mt-5 font-gt-walsheim">{item.content}</p>
      </div>
    </div>
  )
}

export default BenefitIcon
