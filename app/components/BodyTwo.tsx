interface Props {
  content: string
  className?: string
}
const BodyTwo: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`text-[18px] leading-[21px] lg:text-[20px] lg:leading-[32px] font-400 text-grey my-[30px] ${className}`}
    >
      {content}
    </p>
  )
}

export default BodyTwo
