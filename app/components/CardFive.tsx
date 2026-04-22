import Image from 'next/image'

export interface CardFiveSubItemType {
  status: boolean
  content: string
}

export interface CardFiveItemType {
  title: string
  subitems: Array<CardFiveSubItemType>
}

interface Props {
  item: CardFiveItemType
}
const CardFive: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-gray-100 borde border-gray-300 rounded-2xl p-6 lg:p-10 text-zinc-600 mb-10">
      <h3 className="font-bold text-2xl xl:text-3xl leading-none font-gt-walsheim">{item.title}</h3>
      {item.subitems.map((subitem, idx) => {
        return (
          <div className="grid grid-cols-[40px_auto] items-center mt-4 lg:mt-7" key={idx}>
            <div className="text-white p-1 mr-2">
              {
                <Image
                  src={`/images/others/${subitem.status ? 'check-circle-solid.svg' : 'carbon-close-filled.svg'}`}
                  width={34}
                  height={34}
                  alt="close"
                />
              }
            </div>
            <p className="font-normal text-xl lg:text-2xl leading-normal">{subitem.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CardFive
