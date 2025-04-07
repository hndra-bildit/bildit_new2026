
import Image from 'next/image';
import SubTitleFour from './SubTitleFour';
import BodyTwo from './BodyTwo';


export interface CardSixItemType{
    head:string,
    title:string,
    subitems: Array<string>
}

interface Props{
    item:CardSixItemType
}

const CardSix: React.FC<Props> = ({ item }) => {
    return (
        <div className='bg-[#F5F7FA] border border-[#DBDBDB] rounded-[14px] px-[20px] px-[24px] py-[40px] text-[#595959] mt-[50px] w-[320px]'>
            <SubTitleFour content={item.head}/>
            <BodyTwo content={item.title} className="mt-[12px] text-[#171717!important]"/>
            {
                item.subitems.map((content,idx) => {
                    return (
                        <div className="flex mt-[18px] lg:mt-[30px]" key={idx}>
                            <div className='text-white rounded-full inline-block w-[45px] mt-[3px] mr-[9px]' >
                                <Image src={`/images/Check_circle_solid.svg`} width={25} height={24} alt="check"/>
                            </div>
                            <BodyTwo content={content} className={"w-[248px] m-[0px!important]"}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardSix