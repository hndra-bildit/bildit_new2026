'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'

const DEFAULT_FRAME_CLASS =
  'relative h-[260px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#12081f] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.35)] md:h-[400px]'

const controlButtonClass =
  'flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition-[background-color,transform] hover:bg-white/25 active:scale-95 md:size-11'

export type SolutionsDemoVideoProps = {
  src: string
  /** Outer frame (heights, border, shadow). Defaults to engineering / dark-page styling. */
  frameClassName?: string
}

export function SolutionsDemoVideo({ src, frameClassName }: SolutionsDemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      void el.play()
    } else {
      el.pause()
    }
  }, [])

  const toggleMute = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = !el.muted
    setMuted(el.muted)
  }, [])

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    el.pause()
    setPlaying(false)

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnded = () => setPlaying(false)

    el.addEventListener('play', onPlay)
    el.addEventListener('pause', onPause)
    el.addEventListener('ended', onEnded)

    return () => {
      el.removeEventListener('play', onPlay)
      el.removeEventListener('pause', onPause)
      el.removeEventListener('ended', onEnded)
    }
  }, [src])

  const frame = frameClassName ?? DEFAULT_FRAME_CLASS

  return (
    <div className={frame}>
      <video
        ref={videoRef}
        key={src}
        className="size-full object-cover"
        playsInline
        preload="metadata"
        muted={muted}
        src={src}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-2 p-3 md:p-4">
        <button
          type="button"
          className={`pointer-events-auto ${controlButtonClass}`}
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          {playing ? (
            <Pause className="size-4 md:size-[18px]" aria-hidden />
          ) : (
            <Play className="size-4 md:size-[18px]" aria-hidden />
          )}
        </button>
        <button
          type="button"
          className={`pointer-events-auto ${controlButtonClass}`}
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
        >
          {muted ? (
            <VolumeX className="size-4 md:size-[18px]" aria-hidden />
          ) : (
            <Volume2 className="size-4 md:size-[18px]" aria-hidden />
          )}
        </button>
      </div>
    </div>
  )
}
