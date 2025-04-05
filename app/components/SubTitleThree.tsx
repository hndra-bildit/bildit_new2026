
interface Props{
    content:string,
    className?:string
}

const SubTitleThree: React.FC<Props> = ({ content, className }) =>{
    return (
        <p className={`text-[32px] font-500 text-[#595959] ${className}`}>{content}</p>
    )
}

export default SubTitleThree;