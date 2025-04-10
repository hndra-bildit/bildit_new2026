import Image from 'next/image'

interface ItemType {
  src: string
  alt: string
  width: number
  height: number
}

interface Props {
  item: ItemType
}
const CardFour: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
    </div>
  )
}

export default CardFour
