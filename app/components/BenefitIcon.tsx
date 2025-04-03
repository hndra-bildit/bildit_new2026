import Image from "next/image"

export interface IconItemsType{
    src:string,
    alt:string,
    content:string
}
interface Props{
    item:IconItemsType
}
const BenefitIcon: React.FC<Props> = ({ item }) => {

    return (
        <div className="mx-[20px]">
            <div className="">
                <Image src={item.src} alt={item.alt} width={286} height={286}/>
            </div>
            <div className="text-center">
                <p className="text-[32px] leading-[100%] text-[#595959] font-[700] mt-[20px] secondary-font">{item.content}</p>
            </div>
        </div>

    )
}

export default BenefitIcon