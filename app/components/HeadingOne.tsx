interface Props {
  sub1: string
  sub2?: string
  sub3?: string
  className1?: string
  className2?: string
}
const HeadingOne: React.FC<Props> = ({ sub1, sub2, sub3, className1, className2 }) => {
  return (
    <h1 className={`text-6xl md:text-8xl xl:text-9xl leading-none font-gt-walsheim font-extrabold  ${className1}`}>
      {sub1} <span className={`font-extrabold ${className2}`}> {sub2} </span>
      <br /> {sub3}
    </h1>
  )
}

export default HeadingOne
