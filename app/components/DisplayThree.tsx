import cn from 'clsx'

interface Props {
  content: string
  className?: string
}
const DisplayThree: React.FC<Props> = ({ content, className }) => {
  return (
    <h3
      className={cn(
        'text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-none font-gt-walsheim mb-0',
        className
      )}
    >
      {content}
    </h3>
  )
}

export default DisplayThree
