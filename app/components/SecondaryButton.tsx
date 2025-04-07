

interface Props{
    content:string
    className?:string
}


const SecondaryButton: React.FC<Props> = ({ content, className}) => {
    return (
        <button className={`transition-all duration-500 border-[3px] border-[#737373] px-4 py-2 xl:px-[30px] xl:py-2 rounded-full text-black bg-white cursor-pointer hover:bg-[#171717] hover:text-white text-[14px] lg:text-[16px] ${className}`}>{content}</button>
    )
}

export default SecondaryButton;