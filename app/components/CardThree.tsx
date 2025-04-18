import BodyTwo from './BodyTwo'

interface ItemType {
  name: string
  content: string
  company: string
}

interface Props {
  item: ItemType
}
const CardThree: React.FC<Props> = ({ item }) => {
  return (
    <div className="h-[476px] p-10 flex items-center text-zinc-600 shadow-xl radius-2xl bg-white">
      <div>
        <BodyTwo content={item.content} className={'!text-neutral-900'} />
        <p className="text-xl leading-none font-medium font-gt-walsheim mt-12">{item.name}</p>
        <p className="mt-2">{item.company}</p>
      </div>
    </div>
  )
}

export default CardThree
