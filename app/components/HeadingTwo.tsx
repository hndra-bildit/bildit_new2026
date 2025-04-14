interface Props {
  content: string
  className?: string
}
const HeadingTwo: React.FC<Props> = ({ content, className }) => {
  return (
    <h2
      className={`text-4xl md:text-[48px] lg:text-[74px]  text-cms-black-one mt-[10px] font-gt-walsheim leading-none font-extrabold ${className}`}
    >
      {content}
    </h2>
  )
}

export default HeadingTwo
