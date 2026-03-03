'use client'

import { createPortal } from 'react-dom'
import React, { useCallback, useState } from 'react'

import { cn } from '@/utils/cn'

import TextEditPopover, { type TextFormat } from './TextEditPopover'

export interface EditableTextItem {
  id: string
  text: string
  format: TextFormat
  className?: string
}

const DEFAULT_TEXTS: EditableTextItem[] = [
  { id: 'tagline', text: 'IN-STORE & ONLINE', format: {}, className: 'text-base text-white' },
  { id: 'title', text: 'THE SUMMER SALE', format: { bold: true }, className: 'text-3xl lg:text-4xl font-bold text-white' },
  { id: 'subtitle', text: 'All Dress, Tops, Shorts, and Swim', format: { bold: true }, className: 'text-xl lg:text-2xl font-bold text-white' },
  { id: 'promo', text: '25% OFF', format: { bold: true }, className: 'text-6xl lg:text-7xl font-bold text-white' },
  { id: 'cta', text: 'Shop Now', format: { bold: true }, className: 'text-2xl font-medium text-white' },
]

const EditableBanner: React.FC = () => {
  const [textItems, setTextItems] = useState<EditableTextItem[]>(DEFAULT_TEXTS)
  const [backgroundColor, setBackgroundColor] = useState('#b88f3f')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 })

  const updateTextItem = useCallback((id: string, updates: Partial<EditableTextItem>) => {
    setTextItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updates } : item))
    )
  }, [])

  const handleTextClick = useCallback((id: string, el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    setPopoverPosition({
      left: rect.left,
      top: rect.bottom + 8,
    })
    setActiveId(id)
    setAnchorEl(el)
  }, [])

  const handleClose = useCallback(() => {
    setActiveId(null)
    setAnchorEl(null)
  }, [])

  const activeItem = activeId ? textItems.find((t) => t.id === activeId) : null

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[rgba(8,11,26,0.95)] to-[rgba(6,8,20,0.98)] shadow-xl"
      style={{ minHeight: 350 }}
    >
      <div
        className="relative flex min-h-[350px] items-center px-8 py-12 lg:flex-row lg:gap-12 lg:px-14"
        style={{
          background: `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}dd 50%, ${backgroundColor}99 100%)`,
        }}
      >
        <div className="relative z-10 flex flex-1 flex-col gap-5">
          {textItems.map((item) => (
            <EditableTextBlock
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onClick={(el) => handleTextClick(item.id, el)}
            />
          ))}
        </div>
        <div className="absolute right-0 top-0 hidden h-full w-[35%] lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-800/30">
            <span className="font-gt-walsheim text-sm font-medium text-white/60">Product image</span>
          </div>
        </div>
      </div>

      {activeItem &&
        anchorEl &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed z-[9999]"
            style={{
              left: popoverPosition.left,
              top: popoverPosition.top,
            }}
          >
            <TextEditPopover
              anchorRef={{ current: anchorEl }}
              text={activeItem.text}
              format={activeItem.format}
              onTextChange={(text) => updateTextItem(activeItem.id, { text })}
              onFormatChange={(format) => updateTextItem(activeItem.id, { format })}
              onBackgroundColorChange={setBackgroundColor}
              backgroundColor={backgroundColor}
              onClose={handleClose}
            />
          </div>,
          document.body
        )}
    </div>
  )
}

interface EditableTextBlockProps {
  item: EditableTextItem
  isActive: boolean
  onClick: (el: HTMLElement) => void
}

const EditableTextBlock: React.FC<EditableTextBlockProps> = ({ item, isActive, onClick }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (ref.current) onClick(ref.current)
  }

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      className={cn(
        'w-full cursor-pointer rounded-lg border-none bg-transparent px-2 py-1 text-left font-gt-walsheim transition-all hover:ring-2 hover:ring-[#0559fd] hover:ring-offset-2',
        isActive && 'ring-2 ring-[#0559fd] ring-offset-2',
        item.id === 'cta' && 'mt-4 w-auto self-start bg-white/25 px-6 py-3',
        item.className
      )}
      style={{
        fontWeight: item.format.bold ? 700 : 400,
        fontStyle: item.format.italic ? 'italic' : 'normal',
        textDecoration: item.format.underline ? 'underline' : 'none',
      }}
    >
      {item.text || <span className="text-white/50">Click to edit</span>}
    </div>
  )
}

export default EditableBanner
