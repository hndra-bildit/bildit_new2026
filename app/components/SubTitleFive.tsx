interface Props{
    content:string,
    className?:string
}

const SubTitleFive: React.FC<Props> = ({ content, className}) => {
    return (
        <p className={`font-500 text-[16px] lg:text-[20px] leading-[100%] secondary-font text-[#D3D6DB] ${className}`}>{content}</p>
    )
}

export default SubTitleFive;
