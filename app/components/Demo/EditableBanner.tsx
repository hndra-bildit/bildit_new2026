'use client'

import React, { useCallback, useState } from 'react'
import ImageEditPopover from './ImageEditPopover'
import TemplatePickerPanel from './TemplatePickerPanel'
import TextEditPopover, { type TextFormat } from './TextEditPopover'
import { cn } from '@/utils/cn'
import { ArrowDown, ChevronUp, GripVertical, Layers, LayoutTemplate, Plus } from 'lucide-react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

export interface EditableTextItem {
  id: string
  text: string
  format: TextFormat
  className?: string
  /** Text color (toolbar color control updates this). */
  color?: string
}

const DEFAULT_TEXTS: EditableTextItem[] = [
  {
    id: 'headline',
    text: 'New in...',
    format: { bold: true },
    color: '#171717',
    className: 'text-[28px] font-semibold leading-none tracking-normal sm:text-[34px]'
  },
  {
    id: 'body',
    text: 'Shop the latest products...',
    format: {},
    color: '#272727',
    className: 'text-base font-normal leading-normal'
  }
]

/** Stock photos for the interactive demo — `/images/home/interactive-demo/product-*.png` were never added to `public/`. */
const DEMO_PRODUCT_IMAGES = [
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=520&h=652&q=80',
  'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=520&h=652&q=80',
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=520&h=652&q=80',
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=520&h=652&q=80'
] as const

const PRODUCT_CARDS_INITIAL: { src: string; brand: string }[] = [
  { src: DEMO_PRODUCT_IMAGES[0], brand: 'Saint Laurent' },
  { src: DEMO_PRODUCT_IMAGES[1], brand: 'Chanel' },
  { src: DEMO_PRODUCT_IMAGES[2], brand: 'Balenciaga' },
  { src: DEMO_PRODUCT_IMAGES[3], brand: 'Gucci' },
  { src: DEMO_PRODUCT_IMAGES[0], brand: 'Gucci' },
  { src: DEMO_PRODUCT_IMAGES[1], brand: 'Chanel' },
  { src: DEMO_PRODUCT_IMAGES[2], brand: 'Balenciaga' }
]

const GALLERY_SRCS = [...DEMO_PRODUCT_IMAGES]

function isRemoteImageSrc(src: string): boolean {
  return /^https?:\/\//i.test(src.trim())
}

function BannerCardImage({ src, alt }: { src: string; alt: string }) {
  if (isRemoteImageSrc(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- demo allows arbitrary pasted URLs
      <img src={src} alt={alt} className="absolute inset-0 size-full object-cover" />
    )
  }
  return <Image src={src} alt={alt} fill className="pointer-events-none object-cover" sizes="130px" />
}

function CmsLabelPill({
  tone,
  label,
  icon: Icon
}: {
  tone: 'blue' | 'green'
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const active = tone === 'blue' ? 'border-[#0559fd] bg-[#0559fd]' : 'border-[#50c12e] bg-[#50c12e]'
  return (
    <div
      className={cn(
        'flex items-center gap-1.5 border border-solid px-1.5 py-0.5 font-gt-walsheim text-sm font-medium uppercase leading-none text-white',
        active
      )}
    >
      <Icon className="size-4 shrink-0 text-white" aria-hidden />
      <span>{label}</span>
    </div>
  )
}

type PopoverTarget = { kind: 'text'; textId: string } | { kind: 'image'; cardIndex: number }

const EditableBanner: React.FC = () => {
  const [textItems, setTextItems] = useState<EditableTextItem[]>(DEFAULT_TEXTS)
  const [productCards, setProductCards] = useState(PRODUCT_CARDS_INITIAL)
  const [popoverTarget, setPopoverTarget] = useState<PopoverTarget | null>(null)
  const [innerBgColor, setInnerBgColor] = useState('#eaebe6')
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 })
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [templatePickerOpen, setTemplatePickerOpen] = useState(false)
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null)

  const updateTextItem = useCallback((id: string, updates: Partial<EditableTextItem>) => {
    setTextItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)))
  }, [])

  const openPopoverAnchoredTo = useCallback((target: PopoverTarget, el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    const panelWidth = 320
    const vw = typeof globalThis.window !== 'undefined' ? globalThis.window.innerWidth : 1200
    setPopoverPosition({
      left: Math.min(Math.max(12, rect.left), Math.max(12, vw - panelWidth - 12)),
      top: rect.bottom + 8
    })
    setPopoverTarget(target)
    setAnchorEl(el)
  }, [])

  const handleTextClick = useCallback(
    (textId: string, el: HTMLElement) => {
      openPopoverAnchoredTo({ kind: 'text', textId }, el)
    },
    [openPopoverAnchoredTo]
  )

  const handleImageClick = useCallback(
    (cardIndex: number, el: HTMLElement) => {
      openPopoverAnchoredTo({ kind: 'image', cardIndex }, el)
    },
    [openPopoverAnchoredTo]
  )

  const handleClose = useCallback(() => {
    setPopoverTarget(null)
    setAnchorEl(null)
  }, [])

  const activeTextItem = popoverTarget?.kind === 'text' ? textItems.find((t) => t.id === popoverTarget.textId) : null
  const activeImageIndex = popoverTarget?.kind === 'image' ? popoverTarget.cardIndex : null

  const headline = textItems.find((t) => t.id === 'headline')
  const body = textItems.find((t) => t.id === 'body')

  return (
    <div
      className="relative w-full rounded-[24px] border border-black bg-white pt-10 shadow-[0px_8px_10px_0px_rgba(0,0,0,0.1),0px_20px_25px_0px_rgba(0,0,0,0.1)] sm:pt-12 md:px-2 md:pb-5 md:pt-[50px]"
      style={{ fontFamily: "var(--font-uncut-sans), 'Uncut Sans', sans-serif" }}
    >
      <div className="relative mx-auto min-h-[320px] max-w-[950px] px-3 pb-24 sm:min-h-[340px] sm:px-4 md:min-h-[353px] md:px-0 md:pb-5">
        {/* Beige fill behind blue slot + green banner outlines (borders are transparent inside) */}
        <div
          className="pointer-events-none absolute inset-x-1 top-8 bottom-16 z-0 sm:inset-x-2 md:inset-x-0 md:top-0 md:bottom-0"
          style={{ backgroundColor: innerBgColor }}
          aria-hidden
        />

        {/* Slot chrome */}
        <div
          className="pointer-events-none absolute inset-x-1 top-8 bottom-16 z-[1] border border-[#0559fd] sm:inset-x-2 md:inset-x-0 md:top-0 md:bottom-0"
          aria-hidden
        >
          <div className="absolute -top-7 left-0 flex items-start sm:-top-8">
            <CmsLabelPill tone="blue" label="Slot" icon={Layers} />
          </div>
        </div>

        {/* Banner outline — stays under live content (z-[3]) */}
        <div className="pointer-events-none absolute inset-x-2 top-10 bottom-[4.5rem] z-[2] border border-[#50c12e] sm:inset-x-4 sm:top-12 md:inset-x-[6px] md:top-[6px] md:bottom-[6px]" />

        {/* Banner label + Change template — own layer above content (z-[5]); z-[5] on a z-[2] parent would still sit under content */}
        <div className="pointer-events-none absolute inset-x-2 top-10 bottom-[4.5rem] z-[5] sm:inset-x-4 sm:top-12 md:inset-x-[6px] md:top-[6px] md:bottom-[6px]">
          <div className="pointer-events-auto absolute left-2 top-2 flex max-w-[calc(100%-1rem)] flex-wrap items-center gap-2 md:left-3 md:top-3">
            <CmsLabelPill tone="green" label="Banner" icon={LayoutTemplate} />
            <button
              type="button"
              onClick={() => setTemplatePickerOpen(true)}
              className="cursor-pointer border border-[#50c12e] bg-white px-2 py-1 font-gt-walsheim text-xs font-medium uppercase leading-none text-[#2a7a1c] shadow-sm transition-colors hover:bg-[#f3fcf0]"
            >
              Change template
            </button>
          </div>
        </div>

        {/* Live content (beige comes from plate behind outlines) */}
        <div className="relative z-[3] mx-1 mt-2 flex flex-col gap-6 bg-transparent px-3 py-10 pt-10 sm:mx-2 sm:mt-3 sm:py-12 sm:pt-12 md:mx-[6px] md:mt-[6px] md:flex-row md:items-center md:gap-10 md:py-[65px] md:pl-5 md:pr-0">
          <div className="relative z-10 flex max-w-full flex-col gap-2.5 md:w-[230px] md:shrink-0">
            {headline ? (
              <div className="order-2 md:order-1">
                <EditableTextBlock
                  item={headline}
                  isActive={popoverTarget?.kind === 'text' && popoverTarget.textId === 'headline'}
                  onClick={(el) => handleTextClick('headline', el)}
                  frameClassName="px-0.5 py-0.5"
                />
              </div>
            ) : null}
            {body ? (
              <div className="order-1 md:order-2">
                <EditableTextBlock
                  item={body}
                  isActive={popoverTarget?.kind === 'text' && popoverTarget.textId === 'body'}
                  onClick={(el) => handleTextClick('body', el)}
                  frameClassName="px-0.5 py-0.5"
                />
              </div>
            ) : null}
          </div>

          <div className="min-w-0 flex-1 overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] md:pr-5 [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-5 pb-1">
              {productCards.map((p, i) => (
                <article
                  key={`card-${i}`}
                  className="flex w-[150px] shrink-0 flex-col items-center gap-[11px] bg-white px-2.5 pb-[11px] pt-2.5"
                >
                  <div
                    role="button"
                    tabIndex={0}
                    className={cn(
                      'relative h-[163px] w-[130px] cursor-pointer overflow-hidden bg-[#e8eaed] outline-none focus-visible:ring-2 focus-visible:ring-[#0559fd]',
                      popoverTarget?.kind === 'image' &&
                        popoverTarget.cardIndex === i &&
                        'ring-2 ring-[#0559fd] ring-offset-2'
                    )}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleImageClick(i, e.currentTarget)
                      }
                    }}
                    onClick={(e) => handleImageClick(i, e.currentTarget)}
                  >
                    <BannerCardImage src={p.src} alt={p.brand} />
                  </div>
                  <p className="text-center font-gt-walsheim text-sm font-normal uppercase leading-normal text-black">
                    {p.brand}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Blue slot handles — z above green banner outline (z-[2]) */}
        <div
          className="pointer-events-none absolute inset-x-1 top-8 bottom-16 z-[3] sm:inset-x-2 md:inset-x-0 md:top-0 md:bottom-0"
          aria-hidden
        >
          <div className="absolute left-1/2 top-0 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0559fd]">
            <Plus className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
          <div className="absolute bottom-0 left-1/2 size-6 -translate-x-1/2 translate-y-1/2 rounded-t-[15px] bg-[#0559fd]">
            <Plus className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white" />
          </div>
        </div>

        {/* Reorder bar */}
        <div
          className="pointer-events-none absolute bottom-6 left-1/2 z-[4] flex -translate-x-1/2 items-center gap-2.5 rounded-[30px] bg-white px-4 py-2.5 shadow-md sm:bottom-8 md:bottom-[31px]"
          aria-hidden
        >
          <GripVertical className="size-6 text-[#171717]" />
          <div className="h-6 w-px bg-[#d9d9d9]" />
          <ChevronUp className="size-6 text-[#171717]" />
          <ArrowDown className="size-6 text-[#171717]" />
        </div>
      </div>

      {popoverTarget &&
        anchorEl &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="pointer-events-none fixed inset-0 z-[99999]">
            <div
              className="absolute inset-0 z-0 bg-transparent"
              style={{ pointerEvents: 'auto' }}
              aria-hidden
              onClick={handleClose}
            />
            <div
              className="absolute z-10"
              style={{
                left: popoverPosition.left,
                top: popoverPosition.top,
                pointerEvents: 'auto'
              }}
            >
              {activeTextItem ? (
                <TextEditPopover
                  key={activeTextItem.id}
                  text={activeTextItem.text}
                  format={activeTextItem.format}
                  onTextChange={(text) => updateTextItem(activeTextItem.id, { text })}
                  onFormatChange={(format) => updateTextItem(activeTextItem.id, { format })}
                  textColor={activeTextItem.color ?? (activeTextItem.id === 'headline' ? '#171717' : '#272727')}
                  onTextColorChange={(color) => updateTextItem(activeTextItem.id, { color })}
                  backgroundColor={innerBgColor}
                  onBackgroundColorChange={setInnerBgColor}
                  onClose={handleClose}
                />
              ) : null}
              {activeImageIndex !== null && productCards[activeImageIndex] ? (
                <ImageEditPopover
                  key={`img-${activeImageIndex}`}
                  currentSrc={productCards[activeImageIndex].src}
                  gallerySrcs={GALLERY_SRCS}
                  onImageChange={(src) => {
                    setProductCards((prev) =>
                      prev.map((card, idx) => (idx === activeImageIndex ? { ...card, src } : card))
                    )
                  }}
                  onClose={handleClose}
                />
              ) : null}
            </div>
          </div>,
          document.body
        )}

      {templatePickerOpen && typeof document !== 'undefined'
        ? createPortal(
            <TemplatePickerPanel
              open={templatePickerOpen}
              onClose={() => setTemplatePickerOpen(false)}
              selectedId={selectedTemplateId}
              onSelect={(id) => setSelectedTemplateId(id)}
            />,
            document.body
          )
        : null}
    </div>
  )
}

interface EditableTextBlockProps {
  item: EditableTextItem
  isActive: boolean
  onClick: (el: HTMLElement) => void
  frameClassName?: string
}

const EditableTextBlock: React.FC<EditableTextBlockProps> = ({ item, isActive, onClick, frameClassName }) => {
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
        'w-full cursor-pointer rounded-sm bg-transparent text-left transition-shadow',
        isActive && 'ring-2 ring-[#0559fd] ring-offset-2',
        'hover:ring-2 hover:ring-[#0559fd]/60 hover:ring-offset-1',
        frameClassName,
        item.className
      )}
      style={{
        color: item.color ?? (item.id === 'headline' ? '#171717' : '#272727'),
        fontWeight: (() => {
          if (item.format.bold) return 700
          return item.id === 'headline' ? 600 : 400
        })(),
        fontStyle: item.format.italic ? 'italic' : 'normal',
        textDecoration: item.format.underline ? 'underline' : 'none'
      }}
    >
      {item.text || <span className="text-[#737373]">Click to edit</span>}
    </div>
  )
}

export default EditableBanner
