
interface Props{
    content:string,
    className?:string
}

const SubTitleThree: React.FC<Props> = ({ content, className }) =>{
    return (
        <p className={`text-[18px] md:text-[21px] lg:text-[24px] xl:text-[32px] font-500 text-[#595959] leading-[100%] secondary-font ${className}`}>{content}</p>
    )
}

export default SubTitleThree;