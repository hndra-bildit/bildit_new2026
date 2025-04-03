

interface Props{
    content:string;
    className?: string
}
const DisplayOne: React.FC<Props> = ({ content, className }) => {
    return (
        <h2 className={`text-[74px] secondary-font font-extrabold leading-[100%] ${className}`}>{content}</h2>
    )
}

export default DisplayOne;