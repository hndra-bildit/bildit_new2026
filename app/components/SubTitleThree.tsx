interface Props {
  content: string
  className?: string
}

const SubTitleThree: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`text-xl lg:text-2xl xl:text-[32px] font-medium text-zinc-600 leading-none font-gt-walsheim ${className}`}
    >
      {content}
    </p>
  )
}

export default SubTitleThree
