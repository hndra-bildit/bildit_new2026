import Image from "next/image"

export interface CardItemsType{
    src:string,
    alt:string,
    title:string,
    content:string
}
interface Props{
    item:CardItemsType
}
const CardOne: React.FC<Props> = ({ item }) => {

    return (
        <div className="w-[320px] mt-[50px] mx-[20px]">
            <div className="bg-[#F5F7FA] border-[#D3D6DB] rounded-[14px] flex items-center justify-center py-[103px]">
                <Image src={item.src} alt={item.alt} width={168} height={168}/>
            </div>
            <div className="text-center">
                <h5 className="text-[32px] leading-[100%] text-[#171717] font-[700] mt-[36px] secondary-font h-[74px]">{item.title}</h5>
                <p className="text-[20px] leading-[32px] text-[#595959]">{item.content}</p>
            </div>
        </div>

    )
}

export default CardOne