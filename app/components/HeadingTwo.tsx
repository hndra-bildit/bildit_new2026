interface Props{
    content:string;
    className?: string
}
const HeadingTwo: React.FC<Props> = ({ content, className }) => {
    return (
        <h2 className={`text-4xl md:text-[48px] lg:text-[74px]  text-black-one mt-[10px] font-gt-walsheim leading-[100%] font-extrabold ${className}`}>{content}</h2>
    )
}

export default HeadingTwo;