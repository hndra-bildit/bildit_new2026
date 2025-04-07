

interface Props{
    content:string
    className?:string
}

const PrimaryButton: React.FC<Props> = ({ content, className }) => {
    return (
        <button 
        className = {`transition-all duration-500 border-[2px] border-gray-200 px-4 py-2 xl:px-[30px] xl:py-2 rounded-full text-white bg-[#171717] cursor-pointer hover:bg-gray-200 hover:text-black hover:text-[#171717] text-[14px] lg:text-[16px] outline-2 outline-[#171717] ${className}`}>
            {content}
        </button>
    )
}

export default PrimaryButton;
