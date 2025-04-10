
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
        <div className='bg-lighter-gray borde border-light-gray rounded-[14px] p-6 lg:p-10 text-grey mb-10'>
            <h3 className='font-bold text-2xl xl:text-3xl leading-[100%] font-gt-walsheim'>{item.title}</h3>
            {
                item.subitems.map((subitem,idx) => {
                    return (
                        <div className='flex mt-4 lg:mt-7' key={idx}>
                            <div className='text-white rounded-full p-1 mr-2 lg:mr-5'>{<Image src={`/images/${subitem.status?"Check_circle_solid.svg":"carbon_close-filled.svg"}`} width={34} height={34} alt="close"/> }</div>
                            <p className='font-normal text-2xl leading-[36px]'>{subitem.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardFive