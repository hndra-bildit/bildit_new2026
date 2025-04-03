interface Props{
    content:string,
    className?:string
}

const SubTitleFourCaps: React.FC<Props> = ({ content, className}) => {
    return (
        <p className={`py-[49px] uppercase text-[#595959] text-center font[16px] lg:font-[24px] leading-[100%] secondary-font ${className}`}>{content}</p>

    )
}

export default SubTitleFourCaps;
