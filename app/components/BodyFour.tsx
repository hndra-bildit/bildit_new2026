interface Props {
  content: string
  className?: string
}
const BodyFour: React.FC<Props> = ({ content, className }) => {
  return (
    <p className={`text-gray-300 font-normal text-sm lg:text-base leading-normal font-gt-walsheim ${className}`}>
      {content}
    </p>
  )
}

export default BodyFour
