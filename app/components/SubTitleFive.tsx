import { cn } from '@/utils/cn'

interface Props {
  content: string
  className?: string
}

const SubTitleFive: React.FC<Props> = ({ content, className }) => {
  return (
    <p className={cn('font-400 text-base lg:text-xl leading-none font-gt-walsheim text-neutral-900', className)}>
      {content}
    </p>
  )
}

export default SubTitleFive
