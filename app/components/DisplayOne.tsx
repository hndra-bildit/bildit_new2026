interface Props {
  content: string
  className?: string
}
const DisplayOne: React.FC<Props> = ({ content, className }) => {
  return (
    <h2 className={`text-[32px] lg:text-[74px] text-black font-gt-walsheim font-extrabold leading-[100%] ${className}`}>
      {content}
    </h2>
  )
}

export default DisplayOne
