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
        <div className="h-[476px] p-10 flex items-center text-grey shadow-lg radius-[14px] mx-5 bg-white">
            <div>
                <BodyTwo content={item.content} className={"!text-black-one"}/>
                <p className="text-xl leading-[100%] font-medium font-gt-walsheim mt-[50px]">{item.name}</p>
                <p className="mt-2">{item.company}</p>
            </div>
        </div>
    )
}

export default CardThree