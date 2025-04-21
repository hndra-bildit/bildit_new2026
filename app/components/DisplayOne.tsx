import cn from 'clsx'

interface Props {
  content: string
  className?: string
}
const DisplayOne: React.FC<Props> = ({ content, className }) => {
  return (
    <h2 className={cn('text-4xl lg:text-7xl text-black font-gt-walsheim font-extrabold leading-none', className)}>
      {content}
    </h2>
  )
}

export default DisplayOne
