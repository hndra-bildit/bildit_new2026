import cn from 'clsx'

interface Props {
  content: string
  className?: string
}
const BodyTwo: React.FC<Props> = ({ content, className }) => {
  return (
    <p
      className={cn(
        `text-lg leading-none lg:text-xl lg:leading-normal font-normal text-zinc-600`,
        className ? className : ''
      )}
    >
      {content}
    </p>
  )
}

export default BodyTwo
