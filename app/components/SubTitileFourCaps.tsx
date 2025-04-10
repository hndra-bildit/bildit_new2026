interface Props {
  content: string
  className?: string
}

const SubTitleFourCaps: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={`py-[49px] uppercase text-grey text-center font-base lg:text-2xl leading-[100%] font-gt-walsheim ${className}`}
    >
      {content}
    </p>
  )
}

export default SubTitleFourCaps
