interface Props{
    content:string,
    className?:string
}

const SubTitleFiveCaps: React.FC<Props> = ({ content, className}) => {
    return (
        <p className={`text-pink-main text-xl font-medium gt-walsheim leading-[100%] uppercase ${className}`}>{content}</p>
    )
}

export default SubTitleFiveCaps;
