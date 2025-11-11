'use client'

import { useState, useEffect } from 'react'
import { cn } from '../../utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { ImArrowUpRight2 } from 'react-icons/im'

export interface CardNineItemType {
  id: string
  src: string
  alt: string
  category: string
  updatedAt: string
  title: string
  content: string
  href: string
  author: string
  data: Array<{ title: string; content: string }>
  createdAt: string
}

interface Props {
  item: CardNineItemType
  cardType: string | 'small' | 'big'
}

const CardNine: React.FC<Props> = ({ item, cardType }) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className="mt-5 lg:mt-10">
      <div className="aspect-[4/3] flex items-center overflow-hidden">
        <Image src={item.src} alt={item.alt} width={900} height={900} className="w-full h-auto" />
      </div>
      <div className="mt-2 ">
        <label className="font-gt-walsheim text-purple-700 text-base">
          {item.category} <span className="text-zinc-600">{item.updatedAt}</span>
        </label>
      </div>
      <div className="mt-2">
        <h4
          className={cn(
            'font-medium font-gt-walsheim line-clamp-2 overflow-hidden text-ellipsis',
            cardType === 'big' && windowWidth && windowWidth > 768 ? 'text-4xl leading-none' : 'text-2xl leading-none'
          )}
        >
          {item.title}
        </h4>
        <p
          className={cn(
            'mt-5 font-gt-walsheim line-clamp-3 overflow-hidden text-ellipsis',
            cardType === 'big' && windowWidth && windowWidth > 768 ? 'text-2xl leading-none' : 'text-lg leading-none'
          )}
        >
          {item.content}
        </p>
        <Link className="text-cms-rose text-base font-normal flex items-center mt-1 lg:mt-3" href={item.href}>
          <ImArrowUpRight2 className="mr-1" size={12} />
          <span>Read More</span>
        </Link>
      </div>
    </div>
  )
}

export default CardNine
