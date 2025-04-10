import Link from "next/link"
import BodyThree from "./BodyThree"
import HeadingThreeCaps from "./HeadingThreeCaps"
import PrimaryButton from "./PrimaryButton"
import { FaCheckCircle } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import HeadingThree from "./HeadingThree";


export interface PriceCardItemType{
    isPopular:boolean,
    title:string,
    content:string,
    url:string,
    price?:number,
    subItems:Array<string>
}
interface Props{
    item: PriceCardItemType
}

const PriceCard:React.FC<Props> = ({ item }) =>{
    const Currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
    return (
        <div className={`px-8 py-10 mt-5  text-grey max-w-[370px] rounded-[14px] ${item.isPopular? "bg-[rgba(237,30,121,0.1)]":"border border-[#DBDBDB] bg-lighter-gray"}`}>
            <label className={`bg-gradient-to-r from-[#9103F8] to-[#3B1EED] font-gt-walsheim text-transparent text-white text-base font-400 leading-[18px] px-2 py-1 rounded-[40px] ${ !item.isPopular ? "invisible":""}`}>Most Popular</label>
            <div className="h-[310px]">
                <HeadingThreeCaps content={item.title} className="mt-10 text-pink-main"/>
                <BodyThree content={item.content} className="mt-3"/>
                {
                    item.price && (
                        <div className="leading-[18px] text-base">
                            <div className="pt-7">Starting at</div>
                            <div className="flex items-center">
                                <HeadingThree content={`US${Currency.format(item.price)}`} className="mt-1 text-black-one"/>
                                <div className="font-normal text-[12px] leading-[100%] w-[36px] ml-1">per month</div>
                            </div>
                            <div className="mt-1 w-[216px]">Billed monthly based on usage</div>
                            <div>
                                <Link href="#" className="flex items-center mt-3"><IoEye className="text-2xl text-red"/><span className="ml-2 text-base leading-[18px]">Pricing preview</span></Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="mt-5 text-center">
                <Link href="#">
                    <PrimaryButton content="Start Free Trial"/>
                </Link>
            </div>
            <p className="font-normal text-base leading-[18px] mt-7 ">This is include:</p>
            {
                item.subItems.map((sub,key)=>{
                    return (
                        <div className="flex" key={key}>
                            <FaCheckCircle className="text-pink-main text-xl leading-[100%] mt-2"/>
                            <span className="leading-[36px] ml-2 text-base">{sub}</span>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default PriceCard;