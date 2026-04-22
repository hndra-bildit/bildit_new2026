import { cn } from '@/utils/cn'

type LogoImageProps = {
  src: string
  alt: string
  className?: string
  /** Inline image height in pixels. Default 50. */
  heightPx?: number
  /**
   * Only default utility classes replaced by optional `className` — `style` is height + `width: auto`
   * + `maxWidth: 100%` so flex parents cannot stretch the img horizontally.
   */
  bare?: boolean
}

/**
 * Partner / brand mark. Default: `height` + `width: auto` in style and shared layout classes.
 * `bare` uses the same `style` width hints without Tailwind, for logos that need intrinsic sizing in flex.
 */
export function LogoImage({ src, alt, className, heightPx = 50, bare }: LogoImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={
        bare ? { height: `${heightPx}px`, width: 'auto', maxWidth: '100%' } : { height: `${heightPx}px`, width: 'auto' }
      }
      className={bare ? className : cn('h-auto w-auto max-w-full shrink-0 object-contain', className)}
      loading="lazy"
      decoding="async"
    />
  )
}
