import React from 'react'
import { cn } from '@/utils/cn'

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  isLoading?: boolean
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, isLoading = true, children, ...props }, ref) => {
    if (!isLoading && children) {
      return <>{children}</>
    }

    return <div ref={ref} className={cn('animate-pulse rounded-md bg-gray-200', className)} {...props} />
  }
)

Skeleton.displayName = 'Skeleton'
