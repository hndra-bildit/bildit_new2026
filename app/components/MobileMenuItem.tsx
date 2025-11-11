import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export interface MobileMenuItemType {
  name: string
  href?: string
  subMenu?: Array<{ src: string; alt: string; name: string; href: string }>
}

interface Props {
  item: MobileMenuItemType
}

const MobileMenuItem: React.FC<Props> = ({ item }) => {
  return (
    <>
      {item.href ? (
        <Link
          href={item.href}
          className="text-neutral-900 font-semibold text-base hover:bg-pink-200 px-3 py-3 flex items-center justify-between"
        >
          <p>{item.name}</p>
          <HiOutlineArrowNarrowRight className="text-cms-rose" />
        </Link>
      ) : (
        <div>
          <p className="text-neutral-900 font-semibold text-base">{item.name}</p>
          {item.subMenu &&
            item.subMenu.map((itm, idx) => (
              <Link href={itm.href} className="flex items-center justify-between py-3 hover:bg-pink-200 px-3" key={idx}>
                <div className="flex items-center">
                  <Image src={itm.src} alt={itm.alt} width={35} height={0} className="h-auto" />
                  <p className="text-neutral-900 font-semibold text-base ml-2">{itm.name}</p>
                </div>
                <HiOutlineArrowNarrowRight className="text-cms-rose" />
              </Link>
            ))}
        </div>
      )}
    </>
  )
}

export default MobileMenuItem
