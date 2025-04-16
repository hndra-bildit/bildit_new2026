interface Props {
  content: string
  className?: string
}
const DisplayTwo: React.FC<Props> = ({ content, className }) => {
  return <h2 className={`text-[64px] font-extrabold font-gt-walsheim leading-none ${className}`}>{content}</h2>
}

export default DisplayTwo
