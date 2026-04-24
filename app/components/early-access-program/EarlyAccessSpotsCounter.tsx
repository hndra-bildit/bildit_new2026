'use client'

import { useEffect, useState } from 'react'

const SPOTS_MAX = 10

/**
 * Same behavior as HubSpot `modules/firebase-user-counter.module/module.html` (REST, not the JS SDK):
 * GET `firebaseUrl = firebaseDatabaseUrl + firebasePath + '.json'` and parse the body.
 *
 * HubSpot module fields → Next.js public env (set in Vercel / `.env` for local):
 * - `firebase_database_url` → `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
 * - `firebase_path` → `NEXT_PUBLIC_FIREBASE_EARLY_ACCESS_PATH` (RTDB node for this counter, e.g. `/earlyAccess/count`; exact value lives in CMS config)
 *
 * Response: a JSON number, or an object with `value` (see `parseUserCount`).
 */
function buildCountUrl(): string | null {
  const firebaseDatabaseUrl = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
  const firebasePath = process.env.NEXT_PUBLIC_FIREBASE_EARLY_ACCESS_PATH
  if (!firebaseDatabaseUrl || !firebasePath) return null
  const normalizedPath = firebasePath.startsWith('/') ? firebasePath : `/${firebasePath}`
  return `${firebaseDatabaseUrl.replace(/\/$/, '')}${normalizedPath}.json`
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
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json() as Promise<unknown>
      })
      .then((data) => {
        const userCount = Math.min(parseUserCount(data), SPOTS_MAX)
        setTaken(userCount)
      })
      .catch(() => setTaken(0))
    return () => ac.abort()
  }, [])

  const display = taken === null ? '—' : String(taken)

  return (
    <p className={className} suppressHydrationWarning>
      <span className="tabular-nums">{display}</span> out of {SPOTS_MAX} chosen
    </p>
  )
}
