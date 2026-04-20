'use client'

import type { ComponentType } from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

function buildVideoUrl(slug: string, suffix: 'm' | 't' | null): string | null {
  if (!slug) {
    return null
  }

  let deviceSlug = slug
  if (suffix === 'm' || suffix === 't') {
    deviceSlug = `${slug}_${suffix}`
  }

  const baseUrl = 'https://belk.scene7.com/is/content/Belk'
  return `${baseUrl}/${deviceSlug}`
}

function buildVideoSlug(baseSlug: string, suffix: 'm' | 't' | 'd'): string {
  if (!baseSlug) return ''
  return suffix === 'd' ? baseSlug : `${baseSlug}_${suffix}`
}

export type S7VideoPlayerProps = {
  /** Scene7 content slug (base filename). */
  video: string
  /** Passed to overlay components (matches BILDIT template `StaticColumnContent`). */
  id?: string
  Overlay?: ComponentType<{ id?: string }>
  OverlayDuringPlay?: ComponentType<{ id?: string }>
  className?: string
}

/**
 * Responsive Scene7 MP4 background with optional text overlay.
 * Mirrors the `ResponsiveS7VideoPlayer` pattern used in BILDIT holiday templates.
 */
export default function S7VideoPlayer({ video, id, Overlay, OverlayDuringPlay, className }: S7VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)

  const ActiveOverlay = playing ? (OverlayDuringPlay ?? Overlay) : Overlay

  const videoProps = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true as const,
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false)
  }

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative w-full">
        <video {...videoProps} className="block h-full w-full object-cover md:hidden">
          <source src={buildVideoUrl(buildVideoSlug(video, 'm'), null) ?? undefined} type="video/mp4" />
        </video>
        <video {...videoProps} className="hidden h-full w-full object-cover md:block lg:hidden">
          <source src={buildVideoUrl(buildVideoSlug(video, 't'), null) ?? undefined} type="video/mp4" />
        </video>
        <video {...videoProps} className="hidden h-full w-full object-cover lg:block">
          <source src={buildVideoUrl(buildVideoSlug(video, 'd'), null) ?? undefined} type="video/mp4" />
        </video>
      </div>

      {ActiveOverlay ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center">
          <div className="pointer-events-auto">
            <ActiveOverlay id={id} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
