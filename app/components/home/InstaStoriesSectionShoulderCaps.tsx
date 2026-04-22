import { cn } from '@/utils/cn'

/** Height of the white connector strip; GIF shows through the transparent center bay. */
export const INSTA_STORIES_SHOULDER_CAP_HEIGHT_PX = 50

/**
 * Center bay: matches inner curve radius to the 50px strip so the “tab” looks continuous with
 * adjacent full-width white sections.
 */
const centerBayClassName = 'w-[min(72vw,720px)] shrink-0 bg-white sm:w-[min(82vw,680px)] md:w-[min(72vw,720px)]'

const r50 = '50px' as const

type ShoulderCapsProps = {
  className?: string
}

/**
 * Top connector: full-width top chord (flush with the section above) + lateral shoulders.
 * The chord spans left→right; the center bay stays open below it so the GIF shows in the crotch of the U.
 */
export function InstaStoriesShoulderCapsTop({ className }: ShoulderCapsProps) {
  return (
    <div className={cn('relative z-10 w-full', className)} style={{ height: INSTA_STORIES_SHOULDER_CAP_HEIGHT_PX }}>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1 bg-white sm:h-1.5 md:h-2" />
      <div aria-hidden className="relative z-10 flex h-full w-full">
        <div className="min-h-0 flex-1 bg-white" style={{ borderBottomLeftRadius: r50 }} />
        <div className={centerBayClassName} />
        <div className="min-h-0 flex-1 bg-white" style={{ borderBottomRightRadius: r50 }} />
      </div>
    </div>
  )
}

/** Bottom connector: full-width bottom chord to the next section + mirrored shoulders. */
export function InstaStoriesShoulderCapsBottom({ className }: ShoulderCapsProps) {
  return (
    <div className={cn('relative z-10 w-full', className)} style={{ height: INSTA_STORIES_SHOULDER_CAP_HEIGHT_PX }}>
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1 bg-white sm:h-1.5 md:h-2" />
      <div aria-hidden className="relative z-10 flex h-full w-full">
        <div className="min-h-0 flex-1 bg-white" style={{ borderTopLeftRadius: r50 }} />
        <div className={centerBayClassName} />
        <div className="min-h-0 flex-1 bg-white" style={{ borderTopRightRadius: r50 }} />
      </div>
    </div>
  )
}
