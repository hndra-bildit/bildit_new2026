import type { MouseEventHandler, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function GradientCtaButton({
  children,
  href,
  className = '',
  variant = 'default',
  onClick
}: {
  children: ReactNode
  href: string
  className?: string
  /** `figma-long` matches the multi-stop CTA gradient used on the Visual Experience Engine page. */
  variant?: 'default' | 'figma-long'
  onClick?: MouseEventHandler<HTMLAnchorElement>
}) {
  const isFigmaLong = variant === 'figma-long'
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'inline-flex h-11 items-center justify-center gap-2.5 rounded-full px-5 text-base text-white transition-opacity hover:opacity-95',
        isFigmaLong
          ? 'font-bold [background-image:var(--bildit-gradient-cta-figma-long)]'
          : 'bg-gradient-to-r from-[#e84590] to-[#c850f0] font-semibold shadow-[0px_10px_24px_0px_rgba(232,69,139,0.18)]',
        className
      )}
    >
      {children}
      <ArrowRight className="size-4 shrink-0" aria-hidden />
    </Link>
  )
}
