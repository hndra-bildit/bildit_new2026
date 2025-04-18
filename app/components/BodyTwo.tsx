interface Props {
  content: string
  className?: string
}
const BodyTwo: React.FC<Props> = ({ content, className }) => {
  return (
    <p className={`text-lg leading-none lg:text-xl lg:leading-normal font-normal text-zinc-600 ${className}`}>
      {content}
    </p>
  )
}

export default BodyTwo
