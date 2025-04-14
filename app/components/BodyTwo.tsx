interface Props {
  content: string
  className?: string
}
const BodyTwo: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`text-cms-base leading-none lg:text-xl lg:leading-normal font-normal text-cms-grey my-7 ${className}`}
    >
      {content}
    </p>
  )
}

export default BodyTwo
