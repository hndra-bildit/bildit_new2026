import cn from 'clsx'

interface Props {
  content: string
  className?: string
}
const DisplayTwo: React.FC<Props> = ({ content, className }) => {
  return (
    <h2 className={cn('text-3xl lg:text-6xl font-extrabold font-gt-walsheim leading-none', className)}>{content}</h2>
  )
}

export default DisplayTwo
