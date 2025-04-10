interface Props {
  content: string
  className?: string
}

const SubTitleThree: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`text-xl lg:text-2xl xl:text-[32px] font-medium text-grey leading-[100%] font-gt-walsheim ${className}`}
    >
      {content}
    </p>
  )
}

export default SubTitleThree
