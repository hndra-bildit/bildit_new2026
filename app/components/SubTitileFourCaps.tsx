import cn from 'clsx'

interface Props {
  content: string
  className?: string
}

const SubTitleFourCaps: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={cn(
        'py-12 uppercase text-zinc-600 text-center font-base lg:text-2xl leading-none font-gt-walsheim',
        className
      )}
    >
      {content}
    </p>
  )
}

export default SubTitleFourCaps
