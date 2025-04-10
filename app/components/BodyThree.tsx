

interface Props{
    content:string;
    className?: string
}
const BodyThree: React.FC<Props> = ({ content, className }) => {
    return (
        <p className={`text-[18px] leading-[26px] font-400 text-grey ${className}`}>{content}</p>
    )
}

export default BodyThree;