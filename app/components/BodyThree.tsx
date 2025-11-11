import cn from 'clsx'

interface Props {
  content: string
  className?: string
}
const BodyThree: React.FC<Props> = ({ content, className }) => {
  return <p className={cn('text-lg leading-normal font-normal text-zinc-600', className)}>{content}</p>
}

export default BodyThree
