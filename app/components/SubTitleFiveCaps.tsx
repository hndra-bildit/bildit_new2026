interface Props{
    content:string,
    className?:string
}

const SubTitleFiveCaps: React.FC<Props> = ({ content, className}) => {
    return (
        <p className={`text-[#ED1E79] text-[18px] lg:text-[20px] font-500 secondary-font leading-[100%] uppercase ${className}`}>{content}</p>
    )
}

export default SubTitleFiveCaps;
