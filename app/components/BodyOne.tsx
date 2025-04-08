

interface Props{
    content:string;
    className?: string
}
const BodyOne: React.FC<Props> = ({ content, className }) => {
    return (
        <p className={`text-[#595959] text-[16px] lg:text-[24px] leading-[32px] ${className}`}>{content}</p>
    )
}

export default BodyOne;