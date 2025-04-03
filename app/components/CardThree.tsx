import BodyTwo from "./BodyTwo"

interface ItemType{
    name:string,
    content:string,
    company:string
}

interface Props{
    item:ItemType
}
const CardThree: React.FC<Props> = ({ item }) => {
    return (
        <div className="h-[476px] p-[40px] flex items-center text-[#595959] shadow-lg radius-[14px] mx-[20px] bg-white">
            <div>
                <BodyTwo content={item.content} className={"text-[#171717!important]"}/>
                <p className="text-[20px] leading-[100%] font-500 secondary-font mt-[50px]">{item.name}</p>
                <p className="mt-[10px]">{item.company}</p>
            </div>
        </div>
    )
}

export default CardThree