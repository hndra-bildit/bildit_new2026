interface Props {
  content: string
  className?: string
}
const BodyThree: React.FC<Props> = ({ content, className }) => {
  return <p className={`text-cms-base leading-normal font-normal text-cms-grey ${className}`}>{content}</p>
}

export default BodyThree
