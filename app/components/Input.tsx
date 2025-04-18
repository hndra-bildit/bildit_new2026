'use client'
interface Props {
  type: string
  placeholder: string
  className?: string
}

const Input: React.FC<Props> = ({ type, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full p-2 lg:p-5 border border-blue-600 rounded-[3px] focus:outline-none focus:border-blue-500 text-sm lg:text-xl ${className}`}
    />
  )
}

export default Input
