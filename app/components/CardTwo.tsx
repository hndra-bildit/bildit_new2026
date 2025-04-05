import Image from "next/image"
import { CardItemsType } from "./CardOne"


interface Props{
    item:CardItemsType
    className?: string
}
const CardTwo: React.FC<Props> = ({ item , className}) => {
    return (
        <div className="mt-[40px] md:mt-0 p-[20px] border border-[#DBDBDB] rounded-[14px] bg-[#F5F7FA]">
            <div className="text-center">
                <Image src={item.src} alt={item.alt} width={0}  height={0} className="w-auto h-auto inline-block" unoptimized />
            </div>
            <div className="">
                <h5 className={`text-[32px] leading-[100%] text-[#171717] font-[700] mt-[30px] secondary-font ${className}`}>{item.title}</h5>
                <p className="text-[20px] leading-[32px] text-[#595959] font-[400] mt-[10px]">{item.content}</p>
            </div>
        </div>
    )
}

export default CardTwo