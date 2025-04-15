import Image from 'next/image'

interface Item {
  src: string
  alt: string
}
interface Props {
  item: Item
}
const BelkResultsImage: React.FC<Props> = ({ item }) => {
  return (
    <div className="mt-[60px] rounded-full overflow-hidden shadow-[0px_7px_16px_2px_rgba(0,0,0,0.1)]">
      <Image src={item.src} alt={item.alt} width={276} height={276} />
    </div>
  )
}

export default BelkResultsImage
