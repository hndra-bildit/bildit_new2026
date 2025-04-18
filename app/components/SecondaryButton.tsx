interface Props {
  content: string
  className?: string
}

const SecondaryButton: React.FC<Props> = ({ content, className }) => {
  return (
    <button
      className={`transition-all duration-500 border-3 border-neutral-500 px-4 py-2 xl:px-8 xl:py-2 rounded-full text-black bg-white cursor-pointer hover:bg-neutral-900 hover:text-white text-sm lg:text-base ${className}`}
    >
      {content}
    </button>
  )
}

export default SecondaryButton
