import { cn } from '@/utils/cn'

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  count: number
  children: ((idx: number) => React.ReactNode) | React.ReactNode
}

export const Duplicator = (props: Props) => {
  const { count, children, className, ...restProps } = props
  return (
    <div className={cn('flex w-full flex-col gap-2', className)} {...restProps}>
      {Array(count)
        .fill(null)
        .map((_, idx) => (typeof children === 'function' ? children(idx) : children))}
    </div>
  )
}
