interface Props {
  content: string
  className?: string
}

const SubTitleFiveCaps: React.FC<Props> = ({ content, className }) => {
  return (
    <p className={`text-cms-rose text-xl font-medium font-gt-walsheim leading-none uppercase ${className}`}>
      {content}
    </p>
  )
}

export default SubTitleFiveCaps
