import cn from 'clsx'

interface Props {
  content: string
  className?: string
}
const BodyOne: React.FC<Props> = ({ content, className }) => {
  return <p className={cn(`text-zinc-600 text-base lg:text-2xl leading-normal`, className)}>{content}</p>
}

export default BodyOne
