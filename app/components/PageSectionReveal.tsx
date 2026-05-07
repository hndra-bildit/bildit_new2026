'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function PageSectionReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current

    if (!root) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const candidates = Array.from(
      root.querySelectorAll<HTMLElement>(
        [
          '[data-section-reveal]',
          'section',
          'article',
          'main',
          'main > div',
          'main > article',
          'main > section',
          ':scope > div'
        ].join(',')
      )
    ).filter((target) => {
      if (target === root || target.closest('[data-section-reveal-ignore]')) {
        return false
      }

      const tagName = target.tagName.toLowerCase()
      const isSemanticSection = tagName === 'section'
      const isPageArticle =
        tagName === 'article' &&
        (target.parentElement === root ||
          target.parentElement?.parentElement === root ||
          target.parentElement?.tagName.toLowerCase() === 'main')
      const isMainChild = target.parentElement?.tagName.toLowerCase() === 'main'
      const isRootChild = target.parentElement === root
      const hasSectionDescendant = Boolean(target.querySelector('section, article, main'))
      const isSafeStructuralBlock = (isMainChild || isRootChild || tagName === 'main') && !hasSectionDescendant

      return isSemanticSection || isPageArticle || isSafeStructuralBlock || target.hasAttribute('data-section-reveal')
    })
    const revealTargets = candidates.filter(
      (target, index) => candidates.findIndex((candidate) => candidate === target) === index
    )

    if (revealTargets.length === 0) {
      return
    }

    revealTargets.forEach((target, index) => {
      target.classList.add('page-section-reveal')
      target.style.setProperty('--section-reveal-delay', `${Math.min(index * 45, 180)}ms`)
    })

    if (prefersReducedMotion) {
      revealTargets.forEach((target) => target.classList.add('is-section-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-section-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.08
      }
    )

    revealTargets.forEach((target) => observer.observe(target))

    const initialRevealFrame = window.requestAnimationFrame(() => {
      revealTargets.forEach((target) => {
        const rect = target.getBoundingClientRect()
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight

        if (rect.top < viewportHeight && rect.bottom > 0) {
          target.classList.add('is-section-visible')
          observer.unobserve(target)
        }
      })
    })

    return () => {
      window.cancelAnimationFrame(initialRevealFrame)
      observer.disconnect()
      revealTargets.forEach((target) => {
        target.classList.remove('page-section-reveal', 'is-section-visible')
        target.style.removeProperty('--section-reveal-delay')
      })
    }
  }, [])

  return <div ref={rootRef}>{children}</div>
}
