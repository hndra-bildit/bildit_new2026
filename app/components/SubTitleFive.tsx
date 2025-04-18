interface Props {
  content: string
  className?: string
}

const SubTitleFive: React.FC<Props> = ({ content, className }) => {
  return (
    <p className={`font-400 text-base lg:text-xl leading-none font-gt-walsheim text-neutral-900 ${className}`}>
      {content}
    </p>
  )
}

export default SubTitleFive
