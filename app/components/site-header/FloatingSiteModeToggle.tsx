'use client'

import { cn } from '@/utils/cn'
import { Moon, Sun } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

/**
 * Marketing vs engineering site toggle: Moon on marketing (go to engineering),
 * Sun on engineering (back to marketing). Fixed for thumb reach; desktop uses
 * the pill in `SiteHeader`.
 */
const engineeringPaths = new Set(['/it', '/solutions-for-engineering'])
const returnToKey = 'siteMode:returnTo'

export function FloatingSiteModeToggle() {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const normalized = pathname.replace(/\/$/, '') || '/'
  const isEngineering = engineeringPaths.has(normalized)

  const toggle = () => {
    if (isEngineering) {
      const returnTo = typeof window !== 'undefined' ? window.sessionStorage.getItem(returnToKey) : null

      if (returnTo) {
        if (typeof window !== 'undefined') {
          window.sessionStorage.removeItem(returnToKey)
        }
        router.push(returnTo)
        return
      }

      if (typeof window !== 'undefined' && window.history.length > 1) {
        router.back()
        return
      }

      router.push('/')
    } else {
      if (typeof window !== 'undefined') {
        const currentUrl = window.location.pathname + window.location.search + window.location.hash
        window.sessionStorage.setItem(returnToKey, currentUrl)
      }
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
        <Sun className="size-5 text-amber-500" aria-hidden />
      ) : (
        <Moon className="size-5 text-violet-700" aria-hidden />
      )}
    </button>
  )
}
