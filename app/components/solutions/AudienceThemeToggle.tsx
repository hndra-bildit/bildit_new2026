'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun } from 'lucide-react'
import cn from 'clsx'

const marketersPath = '/solutions-for-marketers/'
const engineeringPath = '/solutions-for-engineering/'

export function AudienceThemeToggle({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const pathname = usePathname() ?? ''
  const onMarketers = pathname.includes('solutions-for-marketers')
  const dark = variant === 'dark'

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border p-1',
        dark ? 'border-white/15 bg-white/10' : 'border-black/10 bg-neutral-100/90'
      )}
      role="group"
      aria-label="Solutions audience"
    >
      <Link
        href={marketersPath}
        className={cn(
          'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors',
          onMarketers
            ? dark
              ? 'bg-white/15 text-white shadow-sm'
              : 'bg-white text-neutral-900 shadow-sm'
            : dark
              ? 'text-white/70 hover:text-white'
              : 'text-neutral-600 hover:text-neutral-900'
        )}
      >
        <Sun className="size-4 shrink-0" aria-hidden />
        Marketers
      </Link>
      <Link
        href={engineeringPath}
        className={cn(
          'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors',
          !onMarketers
            ? dark
              ? 'bg-white text-[#0d0118] shadow-sm'
              : 'bg-neutral-900 text-white shadow-sm'
            : dark
              ? 'text-white/70 hover:text-white'
              : 'text-neutral-600 hover:text-neutral-900'
        )}
        aria-label="View solutions for engineering (dark theme page)"
      >
        <Moon className="size-4 shrink-0" aria-hidden />
        Engineering
      </Link>
    </div>
  )
}
