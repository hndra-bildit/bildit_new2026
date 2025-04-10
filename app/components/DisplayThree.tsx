interface Props{
    content:string;
    className?: string
}
const DisplayThree: React.FC<Props> = ({ content, className }) => {
    return (
        <h3 className={`text-[32px] md:text-[48px] xl:text-[54px] font-extrabold text-black-one leading-none font-gt-walsheim mb-0 ${className}`}>{content}</h3>
    )
}

export default DisplayThree;