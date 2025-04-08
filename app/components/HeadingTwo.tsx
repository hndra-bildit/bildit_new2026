interface Props{
    content:string;
    className?: string
}
const HeadingTwo: React.FC<Props> = ({ content, className }) => {
    return (
        <h2 className={`text-[32px] md:text-[48px] lg:text-[74px] secondary-font text-[#171717] mt-[10px] leading-[100%] font-extrabold ${className}`}>{content}</h2>
    )
}

export default HeadingTwo;