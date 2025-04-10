interface Props {
  content: string
  className?: string
}
const BodyOne: React.FC<Props> = ({ content, className }) => {
  return <p className={`text-grey text-base lg:text-2xl leading-[32px] ${className}`}>{content}</p>
}

export default BodyOne
