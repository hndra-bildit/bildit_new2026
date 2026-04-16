'use client'

import React, { useEffect } from 'react'
import { BANNER_WEB_TEMPLATES, BILDIT_FREE_TRIAL_URL, type BannerWebTemplate } from './bannerWebTemplates'
import { cn } from '@/utils/cn'
import { X } from 'lucide-react'
import Image from 'next/image'

interface TemplatePickerPanelProps {
  open: boolean
  onClose: () => void
  selectedId: string | null
  onSelect: (id: string) => void
}

const TemplatePickerPanel: React.FC<TemplatePickerPanelProps> = ({ open, onClose, selectedId, onSelect }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-picker-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-black/40 backdrop-blur-[2px]"
        aria-label="Close template list"
        onClick={onClose}
      />
      <div className="relative flex min-h-0 max-h-[min(92dvh,880px)] w-full max-w-5xl flex-col rounded-t-2xl border border-[#d9d9d9] bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.18)] sm:mx-2 sm:rounded-2xl">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#d9d9d9] px-4 py-3">
          <h2 id="template-picker-title" className="font-uncut-sans text-base font-normal text-[#171717]">
            Choose a template
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 cursor-pointer items-center justify-center rounded-lg text-[#171717] transition-colors hover:bg-black/5"
            aria-label="Close"
          >
            <X className="size-5" strokeWidth={2} />
          </button>
        </div>

        <p className="font-uncut-sans shrink-0 px-4 pb-2 pt-2 text-xs font-normal text-[#595959]">
          From the Vestaire web template set in Figma — each row is a section you can build in BILDIT.
        </p>

        <ul className="grid min-h-0 flex-1 grid-cols-2 gap-2 overflow-y-auto px-3 pb-3 pt-1 md:grid-cols-3 md:gap-3">
          {BANNER_WEB_TEMPLATES.map((t: BannerWebTemplate) => {
            const selected = selectedId === t.id
            return (
              <li key={t.id} className="min-w-0">
                <button
                  type="button"
                  onClick={() => onSelect(t.id)}
                  className={cn(
                    'flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border text-left transition-shadow',
                    selected
                      ? 'border-[#0559fd] shadow-[0_0_0_2px_rgba(5,89,253,0.25)]'
                      : 'border-[#e5e5e5] hover:border-[#b8b8b8]'
                  )}
                >
                  <div className="relative h-[72px] w-full bg-[#f4f4f4] sm:h-[84px] md:h-[76px]">
                    <Image
                      src={t.previewSrc}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 45vw, 200px"
                    />
                  </div>
                  <span className="font-gt-walsheim px-1.5 py-1.5 text-[10px] font-medium uppercase leading-tight tracking-wide text-[#171717] sm:px-2 sm:text-[11px]">
                    {t.title}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="shrink-0 border-t border-[#d9d9d9] bg-white px-4 py-4">
          <a
            href={BILDIT_FREE_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-gt-walsheim flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#1e1e1e] px-4 py-3 text-center text-sm font-medium uppercase leading-tight text-white transition-colors hover:bg-black"
          >
            Start a Free Trial to use all of our templates
          </a>
        </div>
      </div>
    </div>
  )
}

export default TemplatePickerPanel
