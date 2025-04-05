interface Props{
    content:string;
    className?: string
}
const DisplayThree: React.FC<Props> = ({ content, className }) => {
    return (
        <h3 className={`text-[32px] md:text-[48px] xl:text-[54px] font-extrabold text-[#171717] leading-none secondary-font mb-0 ${className}`}>{content}</h3>
    )
}

export default DisplayThree;