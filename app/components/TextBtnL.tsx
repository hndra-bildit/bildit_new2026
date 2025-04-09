
interface Props{
    content:string,
    className?:string
}
const TextBtnL:React.FC<Props>= ({content, className}) => {
    return (
        <p className={`font-500 text-[24px] tracking-wide leading-[100%] secondary-font ${className}`}>{ content }</p>
    )
}

export default TextBtnL;