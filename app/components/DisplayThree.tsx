interface Props {
  content: string
  className?: string
}
const DisplayThree: React.FC<Props> = ({ content, className }) => {
  return (
    <h3
      className={`text-4xl md:text-cms-2xl xl:text-cms-3xl font-extrabold text-cms-black-one leading-none font-gt-walsheim mb-0 ${className}`}
    >
      {content}
    </h3>
  )
}

export default DisplayThree
