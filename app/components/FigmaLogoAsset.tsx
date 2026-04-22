import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

type FigmaLogoAssetProps = ComponentPropsWithoutRef<'img'>

/**
 * Figma (or any remote) brand marks. Pass only `max-w-*` / `max-h-*` in `className` to cap size.
 * Uses `shrink-0` + `object-contain` so flex/grid does not squash the replaced image (a plain
 * `min-w-0` on `<img>` is a common cause of wrong aspect in flex children).
 */
export function FigmaLogoAsset({ className, style, alt, ...props }: FigmaLogoAssetProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt ?? ''}
      className={cn('block h-auto w-auto shrink-0 object-contain', className)}
      style={{ width: 'auto', height: 'auto', ...style }}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}
