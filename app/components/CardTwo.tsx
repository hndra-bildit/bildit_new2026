import Image from "next/image"
import { CardItemsType } from "./CardOne"


interface Props{
    item:CardItemsType
    className?: string
}
const CardTwo: React.FC<Props> = ({ item , className}) => {
    return (
        <div className="mt-10 md:mt-0 p-5 border border-[#DBDBDB] rounded-[14px] bg-[#F5F7FA]">
            <div className="text-center">
                <Image src={item.src} alt={item.alt} width={0}  height={0} className="w-auto h-auto inline-block" unoptimized />
            </div>
            <div className="">
                <h5 className={`text-[32px] leading-[100%] text-black-one font-[700] mt-7 font-uncut-sans ${className}`}>{item.title}</h5>
                <p className="text-xl leading-[32px] text-grey font-normal mt-2">{item.content}</p>
            </div>
        </div>
    )
}

export default CardTwo