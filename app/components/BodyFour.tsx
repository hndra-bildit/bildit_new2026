

interface Props{
    content:string;
    className?: string
}
const BodyFour: React.FC<Props> = ({ content, className }) => {
    return (
        <p className={`my-[50px] text-[#D3D6DB] font-400 text-[14px] lg:text-[16px] leading-[24px] secondary-font ${className}`}>{content}</p>
    )
}

export default BodyFour;