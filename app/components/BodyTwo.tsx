

interface Props{
    content:string;
    className?: string
}
const BodyTwo: React.FC<Props> = ({ content, className }) => {
    return (
        <p className={`text-[20px] leading-[32px] font-400 text-[#595959] my-[30px] ${className}`}>{content}</p>
    )
}

export default BodyTwo;