interface Props{
    sub1:string,
    sub2?:string,
    sub3?:string
    className1?: string,
    className2?: string
}
const HeadingOne: React.FC<Props> = ({sub1,sub2,sub3,className1,className2 }) => {
    return (
        <h1 className={`text-[57px] md:text-[96px] lg:text-[102px] xl:text-[134px] leading-[100%] secondary-font font-extrabold ${className1}`}>{sub1} <span className={`font-extrabold ${className2}`}> { sub2 } </span><br/> { sub3 }</h1>
    )
}

export default HeadingOne;