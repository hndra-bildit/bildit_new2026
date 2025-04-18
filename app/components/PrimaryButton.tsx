interface Props {
  content: string
  className?: string
}

const PrimaryButton: React.FC<Props> = ({ content, className }) => {
  return (
    <button
      className={`transition-all duration-500 border-[2px] border-gray-200 px-4 py-2 xl:px-[30px] xl:py-2 rounded-full text-white bg-neutral-900 cursor-pointer hover:bg-gray-200 hover:text-black hover:text-neutral-900 text-base outline-2 outline-neutral-900 ${className}`}
    >
      {content}
    </button>
  )
}

export default PrimaryButton
