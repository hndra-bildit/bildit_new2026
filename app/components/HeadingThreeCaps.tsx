interface Props {
  content: string
  className?: string
}
const HeadingThreeCaps: React.FC<Props> = ({ content, className }) => {
  return <h3 className={`text-[32px] font-gt-walsheim leading-none font-bold uppercase ${className}`}>{content}</h3>
}

export default HeadingThreeCaps
