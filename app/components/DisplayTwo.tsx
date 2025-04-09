interface Props{
    content:string;
    className?: string
}
const DisplayTwo: React.FC<Props> = ({ content, className }) => {
    return (
        <h2 className={`text-[64px] font-extrabold font-gt-walsheim leading-[64px] ${className}`}>{content}</h2>
    )
}

export default DisplayTwo;