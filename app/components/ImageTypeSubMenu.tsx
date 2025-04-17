import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

interface listImageType {
  src: string
  alt: string
  title: string
}
interface thumbnailImageType {
  src?: string
  alt?: string
  href: string
  title?: string
  content: string
  tip: string
}
export interface ImageTypeSubMenuType {
  thumbnailImage: thumbnailImageType
  listImage?: Array<listImageType>
  className: string
}

interface Props {
  item: ImageTypeSubMenuType
}
const ImageTypeSubMenu: React.FC<Props> = ({ item }) => {
  return (
    <div className={cn('w-full', item.listImage ? 'grid gap-5  grid-cols-[250px_400px]' : '')}>
      <div className="grid gap-4">
        {item.listImage &&
          item.listImage.map((itm, idx) => {
            return (
              <div className="flex items-center" key={idx}>
                <Image src={itm.src} alt={itm.alt} width={44} height={0} className="h-auto" />
                <p className="ml-1 text-base text-neutral-900 font-semibold leading-none">{itm.title}</p>
              </div>
            )
          })}
      </div>
      <div className="w-full flex items-center">
        <Link href={item.thumbnailImage.href} className="bg-pink-200/35 p-6 rounded-xl w-full block">
          {item.thumbnailImage.src && (
            <Image
              src={item.thumbnailImage.src}
              alt={item.thumbnailImage.alt ?? ''}
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          )}
          <div className="grid grid-cols-1">
            <div className={cn('order-3', item.thumbnailImage.src ? 'order-1' : ' ')}>
              {item.thumbnailImage.title && (
                <h4 className="mt-1 text-xl font-bold leading-none text-neutral-900">{item.thumbnailImage.title}</h4>
              )}
              {item.thumbnailImage.content && (
                <p className="mt-1 text-sm font-normal leading-none text-neutral-900">{item.thumbnailImage.content}</p>
              )}
            </div>
            <div
              className={cn('flex items-center text-xl text-cms-rose order-2', item.thumbnailImage.src ? 'mt-4' : '')}
            >
              <p>{item.thumbnailImage.tip}</p>
              <HiOutlineArrowNarrowRight className="ml-2" size={18} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ImageTypeSubMenu
