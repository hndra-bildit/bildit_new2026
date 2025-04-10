interface Props {
  content: string
  className?: string
}
const BodyFour: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`my-12 text-light-gray font-normal text-[14px] lg:text-[16px] leading-[24px] font-gt-walsheim ${className}`}
    >
      {content}
    </p>
  )
}

export default BodyFour
