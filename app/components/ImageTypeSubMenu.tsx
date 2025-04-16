import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export interface ImageTypeSubMenuType {
  src?: string
  alt?: string
  href: string
  title?: string
  content: string
  tip: string
  className: string
}

interface Props {
  item: ImageTypeSubMenuType
}
const ImageTypeSubMenu: React.FC<Props> = ({ item }) => {
  return (
    <Link href={item.href} className="bg-pink-200/35 p-6 rounded-xl w-full">
      {item.src && <Image src={item.src} alt={item.alt ?? ''} width={1000} height={1000} className="w-full h-auto" />}
      <div className="grid grid-cols-1">
        <div className={cn('order-3', item.src ? 'order-1' : ' ')}>
          {item.title && <h4 className="mt-1 text-xl font-bold leading-none netural-900">{item.title}</h4>}
          {item.content && <p className="text-base font-normal leading-none netural-900">{item.content}</p>}
        </div>
        <div className="flex items-center text-xl text-cms-rose order-2">
          <p>{item.tip}</p>
          <HiOutlineArrowNarrowRight className="ml-2" size={18} />
        </div>
      </div>
    </Link>
  )
}

export default ImageTypeSubMenu
