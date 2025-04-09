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
        <div className={`px-[30px] py-[40px] mt-[20px]  text-grey max-w-[370px] rounded-[14px] ${item.isPopular? "bg-[rgba(237,30,121,0.1)]":"border border-[#DBDBDB] bg-[#F5F7FA]"}`}>
            <label className={`bg-gradient-to-r from-[#9103F8] to-[#3B1EED] secondary-font text-transparent text-white text-base font-400 leading-[18px] px-[10px] py-[5px] rounded-[40px] ${ !item.isPopular ? "invisible":""}`}>Most Popular</label>
            <div className="h-[310px]">
                <HeadingThreeCaps content={item.title} className="mt-[40px] text-[#ED1E79]"/>
                <BodyThree content={item.content} className="mt-[10px]"/>
                {
                    item.price && (
                        <div className="leading-[18px] text-[16px]">
                            <div className="pt-[30px]">Starting at</div>
                            <div className="flex items-center">
                                <HeadingThree content={`US${Currency.format(item.price)}`} className="mt-[5px] text-black-one"/>
                                <div className="font-400 text-[12px] leading-[100%] w-[36px] ml-[5px]">per month</div>
                            </div>
                            <div className="mt-[5px] w-[216px]">Billed monthly based on usage</div>
                            <div>
                                <Link href="#" className="flex items-center mt-[13px]"><IoEye className="text-[24px] text-red"/><span className="ml-[10px] text-base leading-[18px]">Pricing preview</span></Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="mt-[20px] text-center">
                <Link href="#">
                    <PrimaryButton content="Start Free Trial"/>
                </Link>
            </div>
            <p className="font-400 text-base leading-[18px] mt-[30px] ">This is include:</p>
            {
                item.subItems.map((sub,key)=>{
                    return (
                        <div className="flex" key={key}>
                            <FaCheckCircle className="text-pink-main text-[21px] leading-[100%] mt-2"/>
                            <span className="leading-[36px] ml-[10px] text-[16px]">{sub}</span>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default PriceCard;