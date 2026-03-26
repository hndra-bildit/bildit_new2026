'use client'

import { Bold, Italic, Underline } from 'lucide-react'
import React, { useCallback, useEffect, useRef } from 'react'

import { cn } from '@/utils/cn'

export interface TextFormat {
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

interface TextEditPopoverProps {
  anchorRef: React.RefObject<HTMLElement | null>
  text: string
  format: TextFormat
  onTextChange: (text: string) => void
  onFormatChange: (format: TextFormat) => void
  onBackgroundColorChange?: (color: string) => void
  backgroundColor?: string
  onClose: () => void
}

const TextEditPopover: React.FC<TextEditPopoverProps> = ({
  anchorRef,
  text,
  format,
  onTextChange,
  onFormatChange,
  onBackgroundColorChange,
  backgroundColor = '#b88f3f',
  onClose,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose, anchorRef])

  const toggleBold = useCallback(() => {
    onFormatChange({ ...format, bold: !format.bold })
  }, [format, onFormatChange])

  const toggleItalic = useCallback(() => {
    onFormatChange({ ...format, italic: !format.italic })
  }, [format, onFormatChange])

  const toggleUnderline = useCallback(() => {
    onFormatChange({ ...format, underline: !format.underline })
  }, [format, onFormatChange])

  return (
    <div
      ref={popoverRef}
      className="absolute z-50 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      style={{ minWidth: 280 }}
    >
      <div className="flex items-center justify-between border-b border-[#d9d9d9] pb-2">
        <span className="font-gt-walsheim text-sm font-bold text-[#171717]">Edit text</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            className="flex-1 rounded-[5px] border border-[#697b8c] px-3 py-2 text-sm text-[#171717] focus:border-[#0559fd] focus:outline-none"
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

        {onBackgroundColorChange && (
          <div className="flex items-center gap-2">
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
              className="w-20 rounded-[5px] border border-[#697b8c] px-2 py-1 text-xs text-[#171717] focus:border-[#0559fd] focus:outline-none"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default TextEditPopover
