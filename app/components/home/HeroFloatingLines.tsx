'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const FloatingLines = dynamic(() => import('./FloatingLines'), { ssr: false })

const STUDIO_SIZE = 1080

/**
 * React Bits Floating Lines at1080×1080 (Background Studio export), scaled to cover the hero.
 */
export function HeroFloatingLines() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const measure = () => {
      const { width, height } = root.getBoundingClientRect()
      setScale(Math.max(width / STUDIO_SIZE, height / STUDIO_SIZE, 0.0001))
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-none bg-[#1a0d2e] sm:rounded-[29px]"
    >
      <div
        className="pointer-events-auto absolute left-1/2 top-1/2"
        style={{
          width: STUDIO_SIZE,
          height: STUDIO_SIZE,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center'
        }}
      >
        <FloatingLines
          linesGradient={['#E945F5', '#2F4BC0', '#E945F5']}
          animationSpeed={0.2}
          interactive
          bendRadius={15}
          bendStrength={2}
          mouseDamping={0}
          parallax={false}
          parallaxStrength={0.9}
        />
      </div>
    </div>
  )
}
