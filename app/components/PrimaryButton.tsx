interface Props {
  content: string
  className?: string
}

const PrimaryButton: React.FC<Props> = ({ content, className }) => {
  return (
    <button
      className={`transition-all duration-500 border-[2px] border-gray-200 px-4 py-2 xl:px-[30px] xl:py-2 rounded-full text-white bg-cms-black-one cursor-pointer hover:bg-gray-200 hover:text-black hover:text-cms-black-one text-base outline-2 outline-cms-black-one ${className}`}
    >
      {content}
    </button>
  )
}

export default PrimaryButton
