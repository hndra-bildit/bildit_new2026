import BodyTwo from './BodyTwo'
import SubTitleFour from './SubTitleFour'
import Image from 'next/image'

export interface CardSixItemType {
  head: string
  title: string
  subitems: Array<string>
}

interface Props {
  item: CardSixItemType
}

const CardSix: React.FC<Props> = ({ item }) => {
  return (
    <div className="bg-cms-lighter-gray border border-cms-outline rounded-2xl px-6 py-10 text-cms-grey mt-3 w-[320px]">
      <SubTitleFour content={item.head} />
      <BodyTwo content={item.title} className="mt-3 !text-cms-black-one" />
      {item.subitems.map((content, idx) => {
        return (
          <div className="flex mt-4 lg:mt-7" key={idx}>
            <div className="text-white rounded-full inline-block w-[45px] mt-1 mr-2">
              <Image src={`/images/others/Check_circle_solid.svg`} width={25} height={24} alt="check" />
            </div>
            <BodyTwo content={content} className={'w-[248px] !m-0'} />
          </div>
        )
      })}
    </div>
  )
}

export default CardSix
