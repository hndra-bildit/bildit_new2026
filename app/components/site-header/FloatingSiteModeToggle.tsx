'use client'

import { cn } from '@/utils/cn'
import { Moon, Sun } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

/**
 * Marketing vs engineering site toggle (Sun / Moon), fixed for thumb reach.
 * Desktop uses the pill control in `SiteHeader` instead.
 */
const engineeringPaths = new Set(['/it', '/solutions-for-engineering'])

export function FloatingSiteModeToggle() {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const normalized = pathname.replace(/\/$/, '') || '/'
  const isEngineering = engineeringPaths.has(normalized)

  const toggle = () => {
    if (isEngineering) {
      router.push('/')
    } else {
      router.push('/solutions-for-engineering/')
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEngineering}
      aria-label={isEngineering ? 'Switch to marketing site' : 'Switch to engineering site'}
      onClick={toggle}
      className={cn(
        'site-header--floating fixed z-[70] hidden size-12 items-center justify-center rounded-full border border-neutral-200/80 bg-white/95 text-neutral-900 shadow-lg backdrop-blur-sm transition-transform hover:scale-[1.04] active:scale-[0.98] max-lg:flex',
        'bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))]'
      )}
    >
      {isEngineering ? (
        <Moon className="size-5 text-violet-700" aria-hidden />
      ) : (
        <Sun className="size-5 text-amber-500" aria-hidden />
      )}
    </button>
  )
}
