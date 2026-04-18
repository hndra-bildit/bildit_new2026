'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AudienceThemeToggle } from '@/app/components/solutions/AudienceThemeToggle'
import { ArrowRight } from 'lucide-react'
import cn from 'clsx'

export function SolutionsLocalHeader({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const dark = variant === 'dark'
  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b backdrop-blur-md',
        dark ? 'border-white/10 bg-[#0d0118]/95' : 'border-black/5 bg-white/90'
      )}
    >
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={dark ? '/images/others/BILDIT_Logo_White.svg' : '/images/others/BILDIT_Logo.svg'}
            alt="BILDIT"
            width={134}
            height={30}
            className="h-7 w-auto"
          />
        </Link>
        <nav
          className={cn(
            'hidden flex-1 justify-center gap-8 text-base md:flex',
            dark ? 'text-white/80' : 'text-neutral-800'
          )}
        >
          <span className={cn('cursor-default', dark ? 'text-white/50' : 'text-neutral-500')}>Platform</span>
          <span className={cn('cursor-default font-medium', dark ? 'text-white' : 'text-neutral-900')}>
            Solutions
          </span>
          <span className={cn('cursor-default', dark ? 'text-white/50' : 'text-neutral-500')}>Partners</span>
          <Link
            href="/pricing/"
            className={cn('transition-colors', dark ? 'hover:text-cms-rose' : 'hover:text-cms-rose')}
          >
            Pricing
          </Link>
          <span className={cn('cursor-default', dark ? 'text-white/50' : 'text-neutral-500')}>Insights</span>
        </nav>
        <div className="flex shrink-0 items-center gap-3 md:gap-4">
          <AudienceThemeToggle variant={dark ? 'dark' : 'light'} />
          <Link
            href="/pricing/"
            className={cn(
              'rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
              dark
                ? 'border border-white/30 text-white hover:bg-white hover:text-[#0d0118]'
                : 'border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white'
            )}
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  )
}

export function GradientCtaButton({
  children,
  href,
  className = ''
}: {
  children: ReactNode
  href: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#e84590] to-[#c850f0] px-5 text-base font-semibold text-white shadow-[0px_10px_24px_0px_rgba(232,69,139,0.18)] transition-opacity hover:opacity-95 ${className}`}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  )
}
