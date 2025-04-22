import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export interface TextListSubMenuType {
  src: string
  alt: string
  title: string
  href: string
  children: Array<string>

  className: string
}

interface Props {
  item: TextListSubMenuType
}

const TextListSubMenu: React.FC<Props> = ({ item }) => {
  return (
    <div className="p-4 hover:bg-pink-200/35 w-full rounded-xl">
      <Link href={item.href} className="flex items-center">
        <div className="bg-white p-1 rounded-xl">
          <Image src={item.src} alt={item.alt} width={36} height={0} className="h-auto" />
        </div>
        <div className="ml-2 text-xl text-neutral-900">{item.title}</div>
      </Link>
      <div className={cn('grid  mt-4 gap-3', item.className)}>
        {item.children.length > 0 &&
          item.children.map((list, key) => (
            <div
              className="relative text-base leading-none text-neutral-900 pl-5 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-black"
              key={key}
            >
              {' '}
              {list}
            </div>
          ))}
      </div>
    </div>
  )
}

export default TextListSubMenu
