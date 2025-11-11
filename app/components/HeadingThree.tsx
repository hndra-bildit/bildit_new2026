import cn from 'clsx'

interface Props {
  content: string
  className?: string
}
const HeadingThree: React.FC<Props> = ({ content, className }) => {
  return <h3 className={cn('text-3xl font-gt-walsheim leading-none font-bold uppercase', className)}>{content}</h3>
}

export default HeadingThree
