'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'
import { Bold, Italic, Underline } from 'lucide-react'

export interface TextFormat {
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

interface TextEditPopoverProps {
  text: string
  format: TextFormat
  onTextChange: (text: string) => void
  onFormatChange: (format: TextFormat) => void
  onBackgroundColorChange?: (color: string) => void
  backgroundColor?: string
  /** When set with onTextColorChange, shows a working color control in the dark variant toolbar. */
  textColor?: string
  onTextColorChange?: (color: string) => void
  onClose: () => void
  /** Matches Visual Experience Engine edit panel (Figma Edit_Popup_Collapsed). */
  variant?: 'light' | 'dark'
}

const TextEditPopover: React.FC<TextEditPopoverProps> = ({
  text,
  format,
  onTextChange,
  onFormatChange,
  onBackgroundColorChange,
  backgroundColor = '#b88f3f',
  textColor = '#171717',
  onTextColorChange,
  onClose,
  variant = 'light'
}) => {
  const popoverRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isDark = variant === 'dark'

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

  const toggleBold = useCallback(() => {
    onFormatChange({ ...format, bold: !format.bold })
  }, [format, onFormatChange])

  const toggleItalic = useCallback(() => {
    onFormatChange({ ...format, italic: !format.italic })
  }, [format, onFormatChange])

  const toggleUnderline = useCallback(() => {
    onFormatChange({ ...format, underline: !format.underline })
  }, [format, onFormatChange])

  if (isDark) {
    return (
      <div
        ref={popoverRef}
        className="relative z-50 flex w-[296px] shrink-0 flex-col gap-4 overflow-hidden rounded-[14px] bg-[#0e0218] pb-5 shadow-[0px_0px_20px_1px_rgba(0,0,0,0.25),0px_10px_20px_0px_rgba(0,0,0,0.15)]"
      >
        <div className="flex w-full shrink-0 items-center border-b border-[rgba(255,255,255,0.25)] p-2.5">
          <span className="font-uncut-sans text-sm font-normal leading-5 text-[#f0e6ff]">Text</span>
        </div>
        <div className="flex w-full flex-col gap-5 px-2.5">
          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={toggleBold}
                className={cn(
                  'flex size-6 items-center justify-center rounded-[5px] transition-colors',
                  format.bold ? 'bg-[#ed1e79] text-white' : 'text-white/70 hover:bg-white/10'
                )}
                aria-label="Bold"
              >
                <Bold size={16} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={toggleItalic}
                className={cn(
                  'flex size-6 items-center justify-center rounded-[5px] transition-colors',
                  format.italic ? 'bg-[#ed1e79] text-white' : 'text-white/70 hover:bg-white/10'
                )}
                aria-label="Italic"
              >
                <Italic size={16} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={toggleUnderline}
                className={cn(
                  'flex size-6 items-center justify-center rounded-[5px] transition-colors',
                  format.underline ? 'bg-[#ed1e79] text-white' : 'text-white/70 hover:bg-white/10'
                )}
                aria-label="Underline"
              >
                <Underline size={16} strokeWidth={2.5} />
              </button>
              <div className="mx-0.5 h-6 w-px bg-[rgba(217,217,217,0.35)]" aria-hidden />
              {onTextColorChange ? (
                <label className="flex cursor-pointer items-center rounded-[30px] border border-[rgba(217,217,217,0.65)] p-0.5">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => onTextColorChange(e.target.value)}
                    className="size-5 cursor-pointer rounded-full border-0 bg-transparent p-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0"
                    aria-label="Text color"
                  />
                </label>
              ) : (
                <div
                  className="flex items-center rounded-[30px] border border-[rgba(217,217,217,0.65)] p-0.5"
                  aria-hidden
                >
                  <div className="size-5 rounded-full bg-[#242424]" />
                </div>
              )}
            </div>
            <div className="flex h-9 flex-col justify-center rounded-[5px] border border-[#431782] bg-[#1a1e34] px-2.5 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.15)]">
              <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                className="w-full bg-transparent font-uncut-sans text-sm font-normal text-white outline-none placeholder:text-white/40"
                placeholder="Enter text"
              />
            </div>
          </div>
          {onBackgroundColorChange ? (
            <div className="flex items-center gap-2 border-t border-white/10 pt-3">
              <span className="font-gt-walsheim text-xs font-medium text-[#f0e6ff]/80">Background</span>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => onBackgroundColorChange(e.target.value)}
                className="h-8 w-12 cursor-pointer rounded-lg border border-white/20 bg-transparent"
                aria-label="Background color"
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div
      ref={popoverRef}
      className="relative z-50 flex min-w-[280px] shrink-0 flex-col gap-3 rounded-xl bg-white p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    >
      <div className="flex items-center justify-between border-b border-[#d9d9d9] pb-2">
        <span className="font-uncut-sans text-sm font-normal text-[#171717]">Edit text</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            className="flex-1 rounded-[5px] border border-[#697b8c] px-3 py-2 font-uncut-sans text-sm font-normal text-[#171717] focus:border-[#0559fd] focus:outline-none"
            placeholder="Enter text"
          />
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleBold}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                format.bold ? 'bg-cms-rose text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
              aria-label="Bold"
            >
              <Bold size={18} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={toggleItalic}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                format.italic ? 'bg-cms-rose text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
              aria-label="Italic"
            >
              <Italic size={18} strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={toggleUnderline}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-md transition-colors',
                format.underline ? 'bg-cms-rose text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
              aria-label="Underline"
            >
              <Underline size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {onTextColorChange ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-gt-walsheim text-xs font-medium text-[#404040]">Color</span>
            <input
              type="color"
              value={textColor}
              onChange={(e) => onTextColorChange(e.target.value)}
              className="h-8 w-12 cursor-pointer rounded-lg border border-[#d9d9d9] bg-transparent"
              aria-label="Text color"
            />
            <input
              type="text"
              value={textColor}
              onChange={(e) => onTextColorChange(e.target.value)}
              className="min-w-0 flex-1 rounded-[5px] border border-[#697b8c] px-2 py-1 text-xs text-[#171717] focus:border-[#0559fd] focus:outline-none sm:w-24 sm:flex-none"
            />
          </div>
        ) : null}

        {onBackgroundColorChange ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-gt-walsheim text-xs font-medium text-[#404040]">Background</span>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="h-8 w-12 cursor-pointer rounded-lg border border-[#d9d9d9] bg-transparent"
              aria-label="Background color"
            />
            <input
              type="text"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="min-w-0 flex-1 rounded-[5px] border border-[#697b8c] px-2 py-1 text-xs text-[#171717] focus:border-[#0559fd] focus:outline-none sm:w-20 sm:flex-none"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TextEditPopover
