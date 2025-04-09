interface Props{
    content:string,
    className?:string
}

const SubTitleFive: React.FC<Props> = ({ content, className}) => {
    return (
        <p className={`font-400 text-base lg:text-xl leading-[100%] secondary-font text-black-one ${className}`}>{content}</p>
    )
}

export default SubTitleFive;
