'use client'

import { useEffect, useState } from 'react'

const SPOTS_MAX = 10

/**
 * Same behavior as `bildit-web/modules/firebase-user-counter.module/module.html`:
 * GET {NEXT_PUBLIC_FIREBASE_DATABASE_URL}{path}.json — number or { value: number }.
 * Configure path to match the HubSpot module’s Firebase path (e.g. /users/count).
 */
function buildCountUrl(): string | null {
  const base = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
  const path = process.env.NEXT_PUBLIC_FIREBASE_EARLY_ACCESS_PATH
  if (!base || !path) return null
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base.replace(/\/$/, '')}${normalizedPath}.json`
}

function parseUserCount(data: unknown): number {
  if (typeof data === 'number' && Number.isFinite(data)) return data
  if (data && typeof data === 'object' && 'value' in data) {
    const v = (data as { value: unknown }).value
    if (typeof v === 'number' && Number.isFinite(v)) return v
  }
  return 0
}

type EarlyAccessSpotsCounterProps = {
  className?: string
}

export function EarlyAccessSpotsCounter({ className }: EarlyAccessSpotsCounterProps) {
  const [taken, setTaken] = useState<number | null>(null)

  useEffect(() => {
    const url = buildCountUrl()
    if (!url) {
      setTaken(0)
      return
    }
    const ac = new AbortController()
    fetch(url, { signal: ac.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Count request failed')
        return res.json() as Promise<unknown>
      })
      .then((data) => setTaken(Math.min(parseUserCount(data), SPOTS_MAX)))
      .catch(() => setTaken(0))
    return () => ac.abort()
  }, [])

  const display = taken === null ? '—' : String(taken)

  return (
    <p className={className} suppressHydrationWarning>
      <span className="tabular-nums">{display}</span> out of {SPOTS_MAX} Taken
    </p>
  )
}
