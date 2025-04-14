interface Props {
  content: string
  className?: string
}
const BodyFour: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`my-12 text-cms-light-gray font-normal text-cms-basic lg:text-base leading-normal font-gt-walsheim ${className}`}
    >
      {content}
    </p>
  )
}

export default BodyFour
