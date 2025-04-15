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
  updated_at: string
  title: string
  content: string
  href: string
}

interface Props {
  item: CardNineItemType
  cardType: string | 'small' | 'big'
}

const CardNine: React.FC<Props> = ({ item, cardType }) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    // Set initial width
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className="mt-10">
      <div className="aspect-[4/3] flex items-center overflow-hidden">
        <Image src={item.src} alt={item.alt} width={900} height={900} className="w-full h-auto" />
      </div>
      <div className="mt-5 ">
        <label className="font-gt-walsheim text-cms-purple text-base">
          {item.category} <span className="text-cms-grey">{item.updated_at}</span>
        </label>
      </div>
      <div className="mt-3">
        <h4
          className={cn(
            'font-medium font-gt-walsheim line-clamp-2 overflow-hidden text-ellipsis',
            cardType === 'big' && windowWidth && windowWidth > 768
              ? 'text-[34px] leading-none h-[70px]'
              : 'text-2xl leading-none h-[48px]'
          )}
        >
          {item.title}
        </h4>
        <p
          className={cn(
            'mt-7 font-gt-walsheim line-clamp-3 overflow-hidden text-ellipsis',
            cardType === 'big' && windowWidth && windowWidth > 768
              ? 'h-[72px] text-2xl leading-none'
              : 'h-[54px] text-cms-base leading-none'
          )}
        >
          {item.content}
        </p>
        <Link className="text-cms-rose text-base font-normal flex items-center mt-5" href={item.href}>
          <ImArrowUpRight2 className="mr-1" size={12} />
          <span>Read More</span>
        </Link>
      </div>
    </div>
  )
}

export default CardNine
