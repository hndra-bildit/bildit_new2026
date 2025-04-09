

interface Props{
    content:string;
    className?: string
}
const BodyThree: React.FC<Props> = ({ content, className }) => {
    return (
        <p className={`text-[18px] leading-[26px] font-400 text-[#595959] ${className}`}>{content}</p>
    )
}

export default BodyThree;