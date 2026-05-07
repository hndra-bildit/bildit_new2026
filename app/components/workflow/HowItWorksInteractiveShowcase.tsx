'use client'

import { useEffect, useRef, useState } from 'react'
import { Eye, PenLine, Rocket } from 'lucide-react'
import Image from 'next/image'

const howItWorks = [
  {
    step: '1',
    Icon: PenLine,
    title: 'Build visually',
    body: 'Templates with real brand control. Type. Color. Layout. Precision.',
    previewLabel: 'app.bildit.co/builder/homepage'
  },
  {
    step: '2',
    Icon: Eye,
    title: 'Preview instantly',
    body: 'See exactly what users see. Before it goes live. No surprises.',
    previewLabel: 'app.bildit.co/preview/homepage'
  },
  {
    step: '3',
    Icon: Rocket,
    title: 'Publish immediately',
    body: 'No deploy cycle. No coordination overhead. No waiting.',
    previewLabel: 'app.bildit.co/publish/homepage'
  }
] as const

const previewGridItems = [
  {
    title: 'Designer Bags',
    image: '/images/preview/Banner small size 7.png',
    width: 314,
    height: 335,
    layout: 'standard'
  },
  {
    title: 'Designer Shoes',
    image: '/images/preview/Banner small size 8.png',
    width: 314,
    height: 335,
    layout: 'standard'
  },
  {
    title: 'Designer Dresses',
    image: '/images/preview/Banner small size 9.png',
    width: 314,
    height: 335,
    layout: 'standard'
  },
  { title: 'Classic Look', image: '/images/preview/HalfSize Banner1.png', width: 568, height: 401, layout: 'wide' },
  { title: 'New Age Style', image: '/images/preview/HalfSize Banner2.png', width: 568, height: 401, layout: 'wide' }
] as const

const editorDemoPresets = [
  {
    textValue: 'New Summer Collections',
    weightTone: 'bold',
    colorTone: 'dark',
    headlineClass: 'is-bold is-dark'
  },
  {
    textValue: 'New Summer Edit',
    weightTone: 'semibold',
    colorTone: 'berry',
    headlineClass: 'is-semibold is-berry'
  },
  {
    textValue: 'Summer Collection Drop',
    weightTone: 'bold',
    colorTone: 'ocean',
    headlineClass: 'is-bold is-ocean'
  }
] as const

type WorkflowStep = (typeof howItWorks)[number]['step']

export function HowItWorksInteractiveShowcase() {
  const [activeStep, setActiveStep] = useState<WorkflowStep>('1')
  const [displayedStep, setDisplayedStep] = useState<WorkflowStep>('1')
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'out' | 'in'>('idle')
  const [isHowItWorksInView, setIsHowItWorksInView] = useState(false)
  const [hasPlayedPublishTyping, setHasPlayedPublishTyping] = useState(false)
  const [hasPlayedPreviewClick, setHasPlayedPreviewClick] = useState(false)
  const [editorDemoPhase, setEditorDemoPhase] = useState(0)
  const [editorTypedLength, setEditorTypedLength] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const scrollTrackRef = useRef<HTMLDivElement | null>(null)
  const activeItem = howItWorks.find((item) => item.step === displayedStep) ?? howItWorks[0]
  const activeEditorDemo = editorDemoPresets[editorDemoPhase]
  const activeEditorText = activeEditorDemo.textValue.slice(0, editorTypedLength)
  const isEditorTypingComplete = editorTypedLength >= activeEditorDemo.textValue.length

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHowItWorksInView(entry.isIntersecting)
      },
      { threshold: 0.01 }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const track = scrollTrackRef.current
    const steps = howItWorks.map((item) => item.step)
    let animationFrame = 0

    if (!track || steps.length === 0) {
      return
    }

    const updateActiveStepFromScroll = () => {
      animationFrame = 0

      const rect = track.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const stickyOffset = Math.min(Math.max(viewportHeight * 0.1, 64), 96)
      const scrollableDistance = Math.max(rect.height - viewportHeight + stickyOffset, 1)

      if (rect.top > stickyOffset || rect.bottom < viewportHeight * 0.45) {
        return
      }

      const progress = Math.min(Math.max((stickyOffset - rect.top) / scrollableDistance, 0), 1)
      const nextStep = steps[Math.round(progress * (steps.length - 1))]

      if (nextStep) {
        setActiveStep((currentStep) => (currentStep === nextStep ? currentStep : nextStep))
      }
    }

    const scheduleScrollUpdate = () => {
      if (animationFrame) {
        return
      }

      animationFrame = window.requestAnimationFrame(updateActiveStepFromScroll)
    }

    scheduleScrollUpdate()
    window.addEventListener('scroll', scheduleScrollUpdate, { passive: true })
    window.addEventListener('resize', scheduleScrollUpdate)

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }

      window.removeEventListener('scroll', scheduleScrollUpdate)
      window.removeEventListener('resize', scheduleScrollUpdate)
    }
  }, [])

  useEffect(() => {
    if (activeStep === displayedStep) {
      return
    }

    setTransitionPhase('out')

    const swapTimeout = window.setTimeout(() => {
      setDisplayedStep(activeStep)
      setTransitionPhase('in')
    }, 150)

    const settleTimeout = window.setTimeout(() => {
      setTransitionPhase('idle')
    }, 470)

    return () => {
      window.clearTimeout(swapTimeout)
      window.clearTimeout(settleTimeout)
    }
  }, [activeStep, displayedStep])

  useEffect(() => {
    if (activeStep === '2' && isHowItWorksInView && !hasPlayedPreviewClick) {
      setHasPlayedPreviewClick(true)
    }
  }, [activeStep, hasPlayedPreviewClick, isHowItWorksInView])

  useEffect(() => {
    if (activeStep === '3' && isHowItWorksInView && !hasPlayedPublishTyping) {
      setHasPlayedPublishTyping(true)
    }
  }, [activeStep, hasPlayedPublishTyping, isHowItWorksInView])

  useEffect(() => {
    if (activeStep !== '1' || !isHowItWorksInView) {
      return
    }

    const currentText = activeEditorDemo.textValue
    let nextLength = 0
    let advanceTimeout: number | undefined

    setEditorTypedLength(0)

    const typingInterval = window.setInterval(() => {
      nextLength += 1
      setEditorTypedLength(nextLength)

      if (nextLength >= currentText.length) {
        window.clearInterval(typingInterval)
        advanceTimeout = window.setTimeout(() => {
          setEditorDemoPhase((current) => (current + 1) % editorDemoPresets.length)
        }, 900)
      }
    }, 55)

    return () => {
      window.clearInterval(typingInterval)

      if (advanceTimeout) {
        window.clearTimeout(advanceTimeout)
      }
    }
  }, [activeEditorDemo.textValue, activeStep, isHowItWorksInView])

  const handleStepSelect = (step: WorkflowStep) => {
    setActiveStep(step)

    const track = scrollTrackRef.current
    const stepIndex = howItWorks.findIndex((item) => item.step === step)

    if (!track || stepIndex < 0 || howItWorks.length <= 1) {
      return
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const stickyOffset = Math.min(Math.max(viewportHeight * 0.1, 64), 96)
    const trackTop = track.getBoundingClientRect().top + window.scrollY
    const scrollableDistance = Math.max(track.offsetHeight - viewportHeight + stickyOffset, 1)
    const targetProgress = stepIndex / (howItWorks.length - 1)

    window.scrollTo({
      top: trackTop - stickyOffset + scrollableDistance * targetProgress,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={sectionRef} className="hiw-section">
      <div className="hiw-scroll-track" ref={scrollTrackRef}>
        <div className="hiw-sticky-frame">
          <div className="hiw-showcase">
            <div className="hiw-tabs" role="tablist" aria-label="How it works">
              {howItWorks.map((item) => {
                const isActive = item.step === activeStep
                const Icon = item.Icon

                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`hiw-tab${isActive ? ' is-active' : ''}`}
                    key={item.step}
                    onClick={() => handleStepSelect(item.step)}
                  >
                    <span className="hiw-tab-heading">
                      <Icon className="hiw-tab-icon" strokeWidth={2.1} aria-hidden />
                      <span className="hiw-tab-title">{item.title}</span>
                      <span className="hiw-tab-step">{item.step}</span>
                    </span>
                    <span className="hiw-tab-body">{item.body}</span>
                  </button>
                )
              })}
            </div>

            <div className="hiw-stage-scale">
              <div
                className={`hiw-stage${activeItem.step === '3' ? ' hiw-stage-plain' : ''}${
                  transitionPhase === 'out' ? ' is-transitioning-out' : ''
                }${transitionPhase === 'in' ? ' is-transitioning-in' : ''}`}
              >
                {activeItem.step !== '3' && (
                  <div className="hiw-stage-topbar">
                    <div className="hiw-window-controls" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="hiw-address-bar">{activeItem.previewLabel}</div>
                    <div className="hiw-stage-actions">
                      <div className="hiw-schedule-pill">
                        <span>2025-11-01 00:00:00</span>
                        <span className="hiw-schedule-caret" aria-hidden="true">
                          v
                        </span>
                      </div>
                      <button type="button" className="hiw-share-button" aria-label="Refresh preview">
                        R
                      </button>
                      <div className="hiw-device-switcher" aria-label="Device preview">
                        <span className="hiw-device-chip is-active">D</span>
                        <span className="hiw-device-chip">T</span>
                        <span className="hiw-device-chip">M</span>
                      </div>
                      <div className="hiw-preview-link-wrap">
                        <span
                          className={`hiw-topbar-link${displayedStep === '2' ? ' is-preview-link' : ''}${
                            displayedStep === '2' && hasPlayedPreviewClick ? ' is-preview-link-active' : ''
                          }`}
                        >
                          Preview
                        </span>
                        {displayedStep === '2' && (
                          <Image
                            className={`hiw-preview-cursor${hasPlayedPreviewClick ? ' is-animated' : ''}`}
                            src="/images/preview/preview_cursor.svg"
                            alt=""
                            width={24}
                            height={24}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <button type="button" className="hiw-publish-pill">
                        Publish
                      </button>
                    </div>
                  </div>
                )}

                <div
                  className={`hiw-stage-canvas hiw-stage-canvas-${activeItem.step}${
                    activeItem.step === '3' ? ' hiw-stage-canvas-plain' : ''
                  }`}
                >
                  <div className={`hiw-preview-shell${activeItem.step === '3' ? ' hiw-preview-shell-plain' : ''}`}>
                    {activeItem.step === '1' ? (
                      <div className="hiw-editor-shell">
                        <aside className="hiw-editor-sidebar">
                          <div className="hiw-editor-badge" aria-hidden="true">
                            B
                          </div>
                          <div className="hiw-editor-nav">
                            <button type="button" className="hiw-editor-nav-item is-active">
                              Scheduled Content
                            </button>
                            <button type="button" className="hiw-editor-nav-item">
                              Personalization
                            </button>
                            <button type="button" className="hiw-editor-nav-item">
                              Pages
                            </button>
                            <button type="button" className="hiw-editor-nav-item">
                              Mobile App
                            </button>
                          </div>
                        </aside>
                        <div className="hiw-editor-main">
                          <div className="hiw-editor-header">
                            <div>
                              <h3>Live Editor</h3>
                              <p>Drag banners to change storefront order before publishing.</p>
                            </div>
                            <p className="hiw-editor-meta">Last Replication Today (12:31 PM EST)</p>
                          </div>
                          <div className="hiw-editor-panel">
                            <div className="hiw-editor-panel-top">
                              <div className="hiw-editor-preview-title">
                                <span>Preview</span>
                                <span className="hiw-editor-date">Mar 12, 2026</span>
                              </div>
                              <div className="hiw-editor-preview-controls">
                                <span className="hiw-editor-control-pill">Desktop</span>
                                <span className="hiw-editor-control-pill">Personalized slot</span>
                              </div>
                            </div>
                            <div className="hiw-editor-preview-scroll">
                              <StorefrontEditorScene
                                activeEditorDemo={activeEditorDemo}
                                activeEditorText={activeEditorText}
                                isEditorTypingComplete={isEditorTypingComplete}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeItem.step === '3' ? (
                      <PublishScene hasPlayedPublishTyping={hasPlayedPublishTyping} />
                    ) : (
                      <PreviewScene activeEditorDemo={activeEditorDemo} hasPlayedPreviewClick={hasPlayedPreviewClick} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StorefrontEditorScene({
  activeEditorDemo,
  activeEditorText,
  isEditorTypingComplete
}: {
  activeEditorDemo: (typeof editorDemoPresets)[number]
  activeEditorText: string
  isEditorTypingComplete: boolean
}) {
  return (
    <>
      <div className="hiw-preview-nav">
        <div className="hiw-preview-logo">Stylez</div>
        <div className="hiw-preview-menu">
          <span>Women</span>
          <span>Men</span>
          <span>Girl</span>
          <span>Boy</span>
          <span>Sport</span>
        </div>
        <div className="hiw-preview-icons" aria-hidden="true">
          <span>Search</span>
          <span>Wish</span>
          <span>Bag</span>
        </div>
      </div>
      <div className="hiw-hero-banner hiw-hero-banner-editor">
        <div className="hiw-editor-toolbar" aria-hidden="true">
          <span className="hiw-editor-chip hiw-editor-chip-blue">
            <span className="hiw-editor-chip-icon hiw-editor-chip-icon-grid" />
            Slot
          </span>
          <span className="hiw-editor-chip hiw-editor-chip-blue hiw-editor-chip-square">+</span>
        </div>
        <div className="hiw-banner-tag">
          <span className="hiw-editor-chip-icon hiw-editor-chip-icon-panel" />
          Banner
        </div>
        <div className="hiw-banner-copy">
          <div className="hiw-text-tag" aria-hidden="true">
            <span className="hiw-editor-chip hiw-editor-chip-blue">
              <span className="hiw-editor-chip-icon hiw-editor-chip-icon-text" />
              Text
            </span>
            <span className="hiw-editor-chip hiw-editor-chip-blue hiw-editor-chip-square">+</span>
          </div>
          <p className="hiw-banner-kicker">Sale 50% Off</p>
          <div className="hiw-editor-selection hiw-editor-selection-headline" aria-hidden="true">
            <span className="hiw-editor-add hiw-editor-add-headline-top">+</span>
            <span className="hiw-editor-add hiw-editor-add-headline-bottom">+</span>
            <h3 className={`hiw-editor-headline ${activeEditorDemo.headlineClass}`}>{activeEditorText}</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Donec ut mi arcu. Est nunc lacus viverra egestas gravida sed cum
            convallis adipiscing.
          </p>
          <div className="hiw-banner-actions">
            <button type="button" className="hiw-banner-button hiw-banner-button-dark">
              Preview the Sale
            </button>
            <button type="button" className="hiw-banner-button hiw-banner-button-light">
              Explore More
            </button>
          </div>
        </div>
        <div className="hiw-banner-visual" aria-hidden="true">
          <Image src="/images/preview/Hero_dummy.png" alt="" width={354} height={390} className="hiw-banner-image" />
        </div>
        <div className="hiw-editor-demo-panel" aria-hidden="true">
          <div className="hiw-editor-demo-topbar">
            <div className="hiw-editor-demo-title">
              <span className="hiw-editor-demo-title-icon">
                <span className="hiw-editor-chip-icon hiw-editor-chip-icon-panel" />
              </span>
              <span>Text</span>
            </div>
            <span className="hiw-editor-demo-close">x</span>
          </div>
          <div className="hiw-editor-demo-body">
            <div className="hiw-editor-demo-tools">
              <span className={activeEditorDemo.weightTone === 'bold' ? 'is-active' : ''}>B</span>
              <span>I</span>
              <span>U</span>
              <span className="hiw-editor-demo-divider" />
              <span className={`hiw-editor-demo-color hiw-editor-demo-color-${activeEditorDemo.colorTone}`} />
            </div>
            <div className={`hiw-editor-demo-input${isEditorTypingComplete ? ' is-complete' : ''}`}>
              {activeEditorText}
            </div>
          </div>
        </div>
        <div className="hiw-editor-add hiw-editor-add-top" aria-hidden="true">
          +
        </div>
        <div className="hiw-editor-expand" aria-hidden="true">
          v
        </div>
        <div className="hiw-editor-add hiw-editor-add-bottom" aria-hidden="true">
          +
        </div>
      </div>
      <PreviewGrid editor />
    </>
  )
}

function PreviewScene({
  activeEditorDemo,
  hasPlayedPreviewClick
}: {
  activeEditorDemo: (typeof editorDemoPresets)[number]
  hasPlayedPreviewClick: boolean
}) {
  return (
    <div className={`hiw-preview-demo-page${hasPlayedPreviewClick ? ' is-animated' : ''}`}>
      <div className="hiw-preview-demo-scroll">
        <div className="hiw-preview-nav">
          <div className="hiw-preview-logo">Stylez</div>
          <div className="hiw-preview-menu">
            <span>Women</span>
            <span>Men</span>
            <span>Girl</span>
            <span>Boy</span>
            <span>Sport</span>
          </div>
          <div className="hiw-preview-icons" aria-hidden="true">
            <span>Search</span>
            <span>Wish</span>
            <span>Bag</span>
          </div>
        </div>
        <div className="hiw-hero-banner hiw-hero-banner-preview">
          <div className="hiw-banner-copy">
            <p className="hiw-banner-kicker">Sale 50% Off</p>
            <h3 className={`hiw-editor-headline ${activeEditorDemo.headlineClass}`}>New Summer Collection Drop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec ut mi arcu. Est nunc lacus viverra egestas gravida sed cum
              convallis adipiscing.
            </p>
            <div className="hiw-banner-actions">
              <button type="button" className="hiw-banner-button hiw-banner-button-dark">
                Preview the Sale
              </button>
              <button type="button" className="hiw-banner-button hiw-banner-button-light">
                Explore More
              </button>
            </div>
          </div>
          <div className="hiw-banner-visual" aria-hidden="true">
            <Image src="/images/preview/Hero_dummy.png" alt="" width={354} height={390} className="hiw-banner-image" />
          </div>
        </div>
        <PreviewGrid />
      </div>
    </div>
  )
}

function PreviewGrid({ editor = false }: { editor?: boolean }) {
  return (
    <div className={`hiw-preview-grid ${editor ? 'hiw-preview-grid-editor' : 'hiw-preview-grid-preview'}`}>
      {previewGridItems.map((item) => (
        <article
          className={`hiw-preview-card hiw-preview-card-image${item.layout === 'wide' ? ' hiw-preview-card-wide' : ''}`}
          key={item.title}
        >
          <Image
            src={item.image}
            alt=""
            width={item.width}
            height={item.height}
            className="hiw-preview-card-image-media"
          />
        </article>
      ))}
    </div>
  )
}

function PublishScene({ hasPlayedPublishTyping }: { hasPlayedPublishTyping: boolean }) {
  const products = [
    { title: 'Tuxedo Skirt', image: '/images/preview/prd_img01.png' },
    { title: 'Elegant Blue Blouse', image: '/images/preview/prd_img02.png' },
    { title: 'Elegant Long Sleeve Blouse', image: '/images/preview/prd_img03.png' },
    { title: 'White Crop Shirt | Long Sleeves', image: '/images/preview/prd_img04.png' }
  ]

  return (
    <div className="hiw-publish-scene">
      <div className="hiw-publish-headline">
        <div className={`hiw-publish-banner${hasPlayedPublishTyping ? ' is-typed' : ''}`}>
          <p className="hiw-publish-line hiw-publish-line-1">Just Publish It.</p>
          <p className="hiw-publish-line hiw-publish-line-2">Stop waiting on dev tickets</p>
        </div>
        <button type="button" className="hiw-publish-floating">
          Publish
        </button>
      </div>
      <div className="hiw-publish-composer">
        <div className="hiw-publish-composer-top">
          <div className="hiw-window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hiw-publish-url">app.bildit.co/promotions/homepage</div>
          <span className="hiw-publish-mode">Preview mode</span>
          <button type="button" className="hiw-publish-mode hiw-publish-mode-primary">
            Publish changes
          </button>
        </div>
        <div className="hiw-publish-main">
          <div className="hiw-publish-hero">
            <div className="hiw-publish-hero-copy">
              <h3>Unveiling the New Look!</h3>
            </div>
            <div className="hiw-publish-hero-visual" aria-hidden="true">
              <Image
                src="/images/preview/imageComposerBlock.png"
                alt=""
                width={268}
                height={370}
                className="hiw-publish-hero-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hiw-publish-products">
        {products.map((product) => (
          <article className="hiw-publish-card" key={product.title}>
            <Image src={product.image} alt="" width={221} height={285} className="hiw-publish-card-media" />
            <h4>{product.title}</h4>
            <p>$100</p>
          </article>
        ))}
      </div>
    </div>
  )
}
