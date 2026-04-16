'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/cn'
import { ImageIcon, Link2 } from 'lucide-react'
import Image from 'next/image'

export interface ImageEditPopoverProps {
  currentSrc: string
  gallerySrcs: string[]
  onImageChange: (src: string) => void
  onClose: () => void
}

function isProbablyRemoteUrl(src: string): boolean {
  return /^https?:\/\//i.test(src.trim())
}

const ImageEditPopover: React.FC<ImageEditPopoverProps> = ({ currentSrc, gallerySrcs, onImageChange, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [urlDraft, setUrlDraft] = useState(() => (isProbablyRemoteUrl(currentSrc) ? currentSrc : ''))

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const applyUrl = () => {
    const next = urlDraft.trim()
    if (!next) return
    onImageChange(next)
    onClose()
  }

  return (
    <div className="relative z-50 flex w-[min(100vw-24px,320px)] shrink-0 flex-col gap-3 rounded-xl bg-white p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-2 border-b border-[#d9d9d9] pb-2">
        <ImageIcon className="size-4 shrink-0 text-[#0559fd]" aria-hidden />
        <span className="font-uncut-sans text-sm font-normal text-[#171717]">Change image</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-gt-walsheim text-xs font-medium text-[#404040]">Media gallery</span>
        <div className="flex max-h-[120px] flex-wrap gap-2 overflow-y-auto pr-0.5">
          {gallerySrcs.map((src) => {
            const selected = src === currentSrc
            return (
              <button
                key={src}
                type="button"
                onClick={() => {
                  onImageChange(src)
                  onClose()
                }}
                className={cn(
                  'relative size-[52px] shrink-0 overflow-hidden rounded-md bg-[#e8eaed] outline-none transition-shadow',
                  selected ? 'ring-2 ring-[#0559fd] ring-offset-2' : 'ring-1 ring-[#d9d9d9] hover:ring-[#0559fd]/50'
                )}
                aria-label={selected ? 'Selected gallery image' : 'Use this gallery image'}
                aria-pressed={selected}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="52px" />
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-[#ececec] pt-3">
        <span className="flex items-center gap-1.5 font-gt-walsheim text-xs font-medium text-[#404040]">
          <Link2 className="size-3.5 shrink-0 text-[#737373]" aria-hidden />
          Image URL
        </span>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            ref={inputRef}
            type="url"
            value={urlDraft}
            onChange={(e) => setUrlDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                applyUrl()
              }
            }}
            className="min-w-0 flex-1 rounded-[5px] border border-[#697b8c] px-3 py-2 font-uncut-sans text-sm font-normal text-[#171717] focus:border-[#0559fd] focus:outline-none"
            placeholder="https://…"
            inputMode="url"
            autoComplete="url"
          />
          <button
            type="button"
            onClick={applyUrl}
            className="shrink-0 rounded-[5px] bg-[#0559fd] px-4 py-2 font-gt-walsheim text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#0447d1]"
          >
            Apply
          </button>
        </div>
        <p className="font-uncut-sans text-[11px] leading-snug text-[#737373]">
          Paste a direct image link, or pick from the gallery above.
        </p>
      </div>
    </div>
  )
}

export default ImageEditPopover
