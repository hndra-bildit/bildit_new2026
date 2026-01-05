'use client'

import Image from 'next/image'

interface Item {
  src: string
  alt: string
}
interface Props {
  item: Item
}
const ResultImage: React.FC<Props> = ({ item }) => {
  return (
    <div className="w-60 lg:w-70 mt-5 lg:mt-15 mx-3 rounded-full overflow-hidden shadow-[0px_7px_16px_2px_rgba(0,0,0,0.1)]">
      <Image src={item.src} alt={item.alt} width={276} height={0} className="w-full h-auto" />
    </div>
  )
}

export default ResultImage
