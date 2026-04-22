'use client'

import { useEffect, useMemo, useState } from 'react'

const CODE_SNIPPET = `import {
  BilditProvider,
  SlotPlaceholder,
  StylePlaceholder
} from '@bildit-platform/nextjs'

export default function Page() {
  return (
    <Providers>
      <StylePlaceholder slotId="home-styles" target="head" />

      <main className="min-h-screen bg-white">
        <SlotPlaceholder slotId="sdk-hero">
          <Hero />
        </SlotPlaceholder>
      </main>
    </Providers>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <BilditProvider>{children}</BilditProvider>
}`

const TYPING_SPEED_MS = 32
const RESET_DELAY_MS = 1800

const TOKEN_STYLES: Array<{ pattern: RegExp; className: string }> = [
  { pattern: /\b(import|from|export|default|function|return)\b/g, className: 'text-[#ff7bc0]' },
  { pattern: /\b(Providers|StylePlaceholder|SlotPlaceholder|BilditProvider|Hero)\b/g, className: 'text-[#7dd3fc]' },
  { pattern: /\b(Page|children)\b/g, className: 'text-[#f9a8d4]' },
  { pattern: /\b(className|slotId|target)\b/g, className: 'text-[#fde68a]' },
  { pattern: /("[^"]*"|'[^']*')/g, className: 'text-[#86efac]' },
  { pattern: /[<>{}()=]/g, className: 'text-white/80' }
]

function highlightLine(line: string) {
  const matches: Array<{ start: number; end: number; className: string }> = []

  for (const token of TOKEN_STYLES) {
    for (const match of line.matchAll(token.pattern)) {
      if (match.index === undefined) continue
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        className: token.className
      })
    }
  }

  matches.sort((a, b) => a.start - b.start || a.end - b.end)

  const result: Array<{ text: string; className?: string }> = []
  let cursor = 0

  for (const match of matches) {
    if (match.start < cursor) continue
    if (match.start > cursor) {
      result.push({ text: line.slice(cursor, match.start) })
    }
    result.push({ text: line.slice(match.start, match.end), className: match.className })
    cursor = match.end
  }

  if (cursor < line.length) {
    result.push({ text: line.slice(cursor) })
  }

  if (!result.length) {
    result.push({ text: line })
  }

  return result
}

export function EngineeringSdkCodePanel() {
  const [typedLength, setTypedLength] = useState(0)

  useEffect(() => {
    if (typedLength >= CODE_SNIPPET.length) {
      const resetTimer = window.setTimeout(() => setTypedLength(0), RESET_DELAY_MS)
      return () => window.clearTimeout(resetTimer)
    }

    const timer = window.setTimeout(() => setTypedLength((count) => count + 1), TYPING_SPEED_MS)
    return () => window.clearTimeout(timer)
  }, [typedLength])

  const typedCode = CODE_SNIPPET.slice(0, typedLength)
  const lines = useMemo(() => typedCode.split('\n'), [typedCode])
  const cursorLine = lines.length - 1

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden rounded-[26px] border border-white/12 bg-[#090312] shadow-[0_28px_100px_rgba(5,0,15,0.65)] lg:min-h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,30,121,0.20),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,30,237,0.18),transparent_35%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

      <div className="relative flex items-center border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
      </div>

      <div className="relative grid gap-4 px-5 pb-5 pt-4 lg:grid-cols-[minmax(0,1fr)_200px] lg:px-6 lg:pb-6">
        <div className="overflow-hidden rounded-2xl border border-white/8 bg-black/35">
          <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">
                <code>app/page.tsx</code>
              </p>
              <p className="mt-1 text-xs text-[#9f94bd]">SSR-safe placeholders with explicit visual slot hooks.</p>
            </div>
          </div>

          <div className="overflow-x-auto px-0 py-3">
            <div className="min-w-[620px] px-4 font-mono text-[12px] leading-6 text-white/88 md:text-[13px]">
              {lines.map((line, index) => (
                <div key={`${index}-${line}`} className="group flex">
                  <span className="mr-4 w-7 shrink-0 select-none text-right text-white/22">{index + 1}</span>
                  <span className="whitespace-pre">
                    {highlightLine(line).map((segment, segmentIndex) => (
                      <span key={`${segment.text}-${segmentIndex}`} className={segment.className}>
                        {segment.text}
                      </span>
                    ))}
                    {index === cursorLine ? (
                      <span className="ml-[1px] inline-block h-[1.05em] w-[2px] translate-y-[2px] animate-pulse bg-[#f7f2ff]" />
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div className="rounded-2xl border border-[#38bdf8]/20 bg-[#081523] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">What ships</p>
            <div className="mt-3 space-y-2 text-sm text-[#d8efff]">
              <div className="rounded-xl border border-white/8 bg-white/5 px-3 py-2">
                <code>&lt;BilditProvider /&gt;</code>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/5 px-3 py-2">
                <code>&lt;StylePlaceholder /&gt;</code>
              </div>
              <div className="rounded-xl border border-white/8 bg-white/5 px-3 py-2">
                <code>&lt;SlotPlaceholder /&gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
