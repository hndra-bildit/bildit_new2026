import DesktopSubMenu, { DesktopSubMenuItemType } from './DesktopSubMenu'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'

export interface DesktopMenuItemType {
  name: string
  href?: string
  hasSubMenu: boolean
  subMenu?: Array<DesktopSubMenuItemType>
  className?: string
}
interface Props {
  item: DesktopMenuItemType
}
const DesktopMenu: React.FC<Props> = ({ item }) => {
  return (
    <>
      {item.hasSubMenu && item.subMenu ? (
        <div className="cursor-pointer group relative group">
          <div className="hidden group-hover:block">
            <DesktopSubMenu item={item.subMenu} className={item.className ?? ''} />
          </div>
          <div className="flex items-center group-hover:text-cms-rose">
            <p className="py-3">{item.name}</p>
            <IoIosArrowDown className="ml-1 mt-1" />
          </div>
        </div>
      ) : (
        <Link className="hover:text-cms-rose" href={item.href ?? '#'}>
          {item.name}
        </Link>
      )}
    </>
  )
}

export default DesktopMenu
