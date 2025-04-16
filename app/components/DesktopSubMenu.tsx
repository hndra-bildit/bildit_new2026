import ImageTypeSubMenu from './ImageTypeSubMenu'
import { ImageTypeSubMenuType } from './ImageTypeSubMenu'
import TextListSubMenu from './TextListSubMenu'
import { TextListSubMenuType } from './TextListSubMenu'

export interface DesktopSubMenuItemType {
  menu_type: 'TextListSubMenuType' | 'ImageTypeSubMenuType'
  data: TextListSubMenuType | ImageTypeSubMenuType
}
interface Props {
  item: Array<DesktopSubMenuItemType>
  className: string
}
const DesktopSubMenu: React.FC<Props> = ({ item, className }) => {
  return (
    <>
      <div className={`absolute -left-40 top-10 z-10 p-11 rounded-2xl ${className} gap-10 w-[70vw] bg-white shadow-xl`}>
        {item.map((ele, key) =>
          ele.menu_type === 'ImageTypeSubMenuType' ? (
            <div className={`flex items-center ${ele.data.className}`} key={key}>
              <ImageTypeSubMenu item={ele.data as ImageTypeSubMenuType} />
            </div>
          ) : (
            <div className={`flex items-center ${ele.data.className}`} key={key}>
              <TextListSubMenu item={ele.data as TextListSubMenuType} />
            </div>
          )
        )}
      </div>
    </>
  )
}

export default DesktopSubMenu
