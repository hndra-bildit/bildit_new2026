interface Props {
  content: string
  className?: string
}
const HeadingTwo: React.FC<Props> = ({ content, className }) => {
  return (
    <h2
      className={`text-4xl md:text-5xl lg:text-7xl  text-neutral-900 mt-[10px] font-gt-walsheim leading-none font-extrabold ${className}`}
    >
      {content}
    </h2>
  )
}

export default HeadingTwo
