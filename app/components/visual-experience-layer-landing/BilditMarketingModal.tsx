'use client'

import { useEffect, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

type BilditMarketingModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  labelledBy: string
  describedBy?: string
  children: ReactNode
  className?: string
}

export function BilditMarketingModal({
  open,
  onOpenChange,
  labelledBy,
  describedBy,
  children,
  className
}: BilditMarketingModalProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onOpenChange(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[10000]" role="presentation">
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/40"
        aria-label="Close dialog"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        className={cn(
          'absolute left-1/2 top-1/2 max-h-[min(90vh,880px)] w-[min(600px,90vw)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] md:p-10',
          className
        )}
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 px-2 py-1 text-2xl font-normal leading-none text-[#666] transition-colors hover:text-black md:right-4 md:top-4"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}
