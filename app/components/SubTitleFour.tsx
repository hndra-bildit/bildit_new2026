
interface Props{
    content:string,
    className?:string
}

const SubTitleFour: React.FC<Props> = ({ content, className }) =>{
    return (
        <p className={`text-[24px] font-500 text-[#171717] leading-[100%] secondary-font ${className}`}>{content}</p>
    )
}

export default SubTitleFour;