interface Props {
  content: string
  className?: string
}
const TextBtnL: React.FC<Props> = ({ content, className }) => {
  return <p className={`font-medium text-2xl tracking-wide leading-none font-gt-walsheim ${className}`}>{content}</p>
}

export default TextBtnL
