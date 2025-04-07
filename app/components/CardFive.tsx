
import Image from 'next/image';

export interface CardFiveSubItemType{
    status:boolean,
    content:string
}

export interface CardFiveItemType{
    title:string,
    subitems: Array<CardFiveSubItemType>
}

interface Props{
    item:CardFiveItemType
}
const CardFive: React.FC<Props> = ({ item }) => {
    return (
        <div className='bg-[#F5F7FA] borde border-[#D3D6DB] rounded-[14px] p-[24px] lg:p-[40px] text-[#595959] mb-[40px]'>
            <h3 className='font-[700] text-[26px] xl:text-[32px] leading-[100%] secondary-font'>{item.title}</h3>
            {
                item.subitems.map((subitem,idx) => {
                    return (
                        <div className='flex mt-[18px] lg:mt-[30px]' key={idx}>
                            <div className='text-white rounded-full p-1 mr-[9px] lg:mr-[20px]'>{<Image src={`/images/${subitem.status?"Check_circle_solid.svg":"carbon_close-filled.svg"}`} width={34} height={34} alt="close"/> }</div>
                            <p className='font-400 text-[24px] leading-[36px]'>{subitem.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardFive