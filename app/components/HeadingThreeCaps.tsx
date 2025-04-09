interface Props{
    content:string;
    className?: string
}
const HeadingThreeCaps: React.FC<Props> = ({ content, className }) => {
    return (
        <h3 className={`text-[32px] secondary-font leading-[100%] font-bold uppercase ${className}`}>{content}</h3>
    )
}

export default HeadingThreeCaps;