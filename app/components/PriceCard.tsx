import BodyThree from './BodyThree'
import HeadingThree from './HeadingThree'
import HeadingThreeCaps from './HeadingThreeCaps'
import PrimaryButton from './PrimaryButton'
import cn from 'clsx'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { IoEye } from 'react-icons/io5'

export interface PriceCardItemType {
  isPopular: boolean
  title: string
  content: string
  url: string
  price?: number
  subItems: Array<string>
}
interface Props {
  item: PriceCardItemType
}

const PriceCard: React.FC<Props> = ({ item }) => {
  const Currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
  return (
    <div
      className={cn(
        'px-8 py-10 mt-5  text-zinc-600 max-w-93 rounded-xl',
        item.isPopular ? 'bg-pink-600/10' : 'border border-gray-200 bg-gray-100'
      )}
    >
      <label
        className={cn(
          'bg-gradient-to-r from-purple-700 to-violet-700 font-gt-walsheim text-transparent text-white text-base font-400 leading-base px-2 py-1 rounded-4xl',
          !item.isPopular ? 'invisible' : ''
        )}
      >
        Most Popular
      </label>
      <div className="h-78">
        <HeadingThreeCaps content={item.title} className="mt-10 text-cms-rose" />
        <BodyThree content={item.content} className="mt-3" />
        {item.price && (
          <div className="leading-none text-base">
            <div className="pt-7">Starting at</div>
            <div className="flex items-center">
              <HeadingThree content={`US${Currency.format(item.price)}`} className="mt-1 text-neutral-900" />
              <div className="font-normal text-xs leading-none w-9 ml-1">per month</div>
            </div>
            <div className="mt-1 w-54">Billed monthly based on usage</div>
            <div>
              <Link href="#" className="flex items-center mt-3">
                <IoEye className="text-2xl text-red" />
                <span className="ml-2 text-base leading-none">Pricing preview</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 text-center">
        <Link href="#">
          <PrimaryButton content="Start Free Trial" className="w-full" />
        </Link>
      </div>
      <p className="font-normal text-base leading-none mt-7 ">This is include:</p>
      {item.subItems.map((sub, key) => {
        return (
          <div className="flex items-center mt-1" key={key}>
            <FaCheckCircle className="text-cms-rose text-base leading-none " />
            <span className="leading-normal ml-2 text-base">{sub}</span>
          </div>
        )
      })}
    </div>
  )
}

export default PriceCard
