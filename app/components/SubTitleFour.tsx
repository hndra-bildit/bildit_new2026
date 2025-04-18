interface Props {
  content: string
  className?: string
}

const SubTitleFour: React.FC<Props> = ({ content, className }) => {
  return <p className={`text-2xl font-500 text-neutral-900 leading-none font-gt-walsheim ${className}`}>{content}</p>
}

export default SubTitleFour
