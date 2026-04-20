import React, { useEffect, useMemo, useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const ChevronRightIcon = ChevronRight ?? ((props) => React.createElement('span', { className: props?.className, style: { fontSize: props?.size ?? 18 } }, '\u203A'))

const DEFAULT_PROMO_TEXT = 'Free shipping on orders orders overr $50'
const DEFAULT_LINK_TEXT = 'Shop Now'

const promoMessages = [
    {
      text: $(promo1Text:RichText='Free shipping on orders over $50'),
      type: $(promo1Type:Dropdown[Generic|generic,FreeShipping|freeship,BelkRewardsCard|brcc]="freeship"),
      linkText: $(promo1LinkTitle:RichText='Shop Now'),
      linkUrl: $(promo1LinkUrl:String='/';required=true),
      textVarName: 'promo1Text',
      linkTextVarName: 'promo1LinkTitle'
    },
    {
      text: $(promo2Text:RichText='Apply for the Belk Rewards Card'),
      type: $(promo2Type:Dropdown[Generic|generic,FreeShipping|freeship,BelkRewardsCard|brcc]="brcc"),
      linkText: $(promo2LinkTitle:RichText='Apply Now'),
      linkUrl: $(promo2LinkUrl:String='/';required=true),
      textVarName: 'promo2Text',
      linkTextVarName: 'promo2LinkTitle'
    },
    {
      text: $(promo3Text:RichText='Shop the latest styles and deals'),
      type: $(promo3Type:Dropdown[Generic|generic,FreeShipping|freeship,BelkRewardsCard|brcc]="generic"),
      linkText: $(promo3LinkTitle:RichText='Shop Now'),
      linkUrl: $(promo3LinkUrl:String='/';required=true),
      textVarName: 'promo3Text',
      linkTextVarName: 'promo3LinkTitle'
    },
]

const earnedFreeShippingMessage = $(earnedFreeShippingMessage:RichText="You've earned FREE Shipping!")
const eliteFreeShippingMessage = $(eliteFreeShippingMessage:RichText="You've earned FREE Shipping!")
const premierFreeShippingMessage = $(premierFreeShippingMessage:RichText='Premier members get FREE Shipping')
const standardFreeShippingMessage = $(standardFreeShippingMessage:RichText='Spend $50 for FREE Shipping')

const promoDelayInSeconds = $(promoDelayInSeconds:Number="5")
const displayAccessibilityLink = $(displayAccessibilityLink:Boolean="true")


const replacePlaceholders = (str, data) => {
  const { threshold } = data ?? {}
  return (str ?? '').replace('$<threshold>', threshold ?? '99')
}

const getTierText = (tier) => {
  const t = tier != null && typeof tier === 'string' ? tier.toUpperCase() : ''
  switch (t) {
      case 'ELITE':
      return eliteFreeShippingMessage ?? ''
      case 'PREMIER':
      case 'PREMIERE':
      return premierFreeShippingMessage ?? ''
      case 'STANDARD':
      return standardFreeShippingMessage ?? ''
      default:
      return ''
  }
}

const getTierVarName = (tier) => {
  const t = tier != null && typeof tier === 'string' ? tier.toUpperCase() : ''
  switch (t) {
    case 'ELITE': return 'eliteFreeShippingMessage'
    case 'PREMIER':
    case 'PREMIERE': return 'premierFreeShippingMessage'
    case 'STANDARD': return 'standardFreeShippingMessage'
    default: return null
  }
}

const Promo = ({ animate, className, message, threshold }) => {
  const promoDelayInMS = promoDelayInSeconds * 1000
  const [isVisible, setIsVisible] = useState(true)
  const promoRef = useRef(null)
  const data = { threshold }

  useEffect(() => {
    if (!animate || !message) return

    const element = promoRef.current
    if (!element) return

    /* Reset animation state */
    setIsVisible(true)
    element.style.animation = 'none'
    element.offsetHeight; /* Trigger reflow */
    element.style.animation = ''

    /* Start fade out animation before next message */
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, promoDelayInMS - 500) /* Start fade out 500ms before next message */

    return () => clearTimeout(timer);
  }, [animate, message, promoDelayInMS]);

  const visibleClass = useMemo(() => isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-5',
  [isVisible])

  if (!message) return null;

  const displayText = replacePlaceholders(message?.text, data) || DEFAULT_PROMO_TEXT
  const displayLinkText = replacePlaceholders(message?.linkText, data) || DEFAULT_LINK_TEXT
  const hasLink = message?.linkUrl && message.linkUrl !== '#'

  const textVarName = message?.textVarName
  const linkTextVarName = message?.linkTextVarName

  return (
    <div
      ref={promoRef}
      className={`relative transition-all duration-500 ease-out w-full text-center ${className ?? ''} ${visibleClass}`}
    >
      {hasLink
        ? <>
            <span {...(textVarName ? { 'data-bildit-var-name': textVarName, 'data-bildit-var-type': 'RichText' } : {})}>{displayText}</span>{' '}
            <Link href={message.linkUrl || '#'} prefetch={false} className='whitespace-nowrap font-bold text-white'>
              <span {...(linkTextVarName ? { 'data-bildit-var-name': linkTextVarName, 'data-bildit-var-type': 'RichText' } : {})}>{displayLinkText}</span>
              <ChevronRightIcon size={18} className='inline-block' />
            </Link>
          </>
        : <span {...(textVarName ? { 'data-bildit-var-name': textVarName, 'data-bildit-var-type': 'RichText' } : {})}>{displayText}</span>}
    </div>
  );
}

const StyleTag = () => (
    <style>
      {`
        @media (width >= 64rem) {
          .lg\:mx-auto {
            margin-inline: auto;
          }
        }

        @media (width >= 64rem) {
          .lg\:flex {
            display: flex;
          }
        }

        @media (width >= 64rem) {
          .lg\:hidden {
            display: none;
          }
        }
      `}
    </style>
  )

const NavPromos = ({ id, userData }) => {
  const promoDelayInMS = promoDelayInSeconds * 1000
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeDTIndex, setActiveDTIndex] = useState(0)
  const timerRef = useRef(null)

  const { brd, userDetails } = userData ?? {}
  const { customerType, isFreeShippingQualified, hasBelkPaymentType } = userDetails ?? {}
  const { tier, nextTier, threshold } = brd?.brdDetailsMap ?? {}

  const filteredPromos = useMemo(() => {
      return promoMessages.map((promo) => {
        if (hasBelkPaymentType && promo.type === 'brcc') return null
        const basePromo = { ...promo, text: (promo.text || DEFAULT_PROMO_TEXT).trim(), linkText: (promo.linkText || DEFAULT_LINK_TEXT).trim(), linkUrl: promo.linkUrl || '/', textVarName: promo.textVarName, linkTextVarName: promo.linkTextVarName }
        if (tier && promo.type === 'freeship') {
          const tierText = getTierText(tier)
          const tierVarName = getTierVarName(tier)
          return (tierText && tierText.length > 0) ? {
            ...basePromo,
            text: tierText,
            textVarName: tierVarName || basePromo.textVarName
          } : basePromo
        }
        return basePromo
      }).filter(Boolean)
    }, [hasBelkPaymentType, tier])

  const promoLen = filteredPromos.length
  const fallbackMessage = { text: DEFAULT_PROMO_TEXT, linkText: DEFAULT_LINK_TEXT, linkUrl: '/', type: 'generic' }
  const activeMessage = (promoLen > 0 ? filteredPromos[activeIndex % promoLen] : null) ?? fallbackMessage

    const [shipPromo, otherPromos] = useMemo(() => {
        const promos = promoMessages
        const promoIndex = promos.findIndex((p) => p.type === "freeship");
        if (isFreeShippingQualified) {
            const otherPromos = promoIndex !== -1 ? promos.slice(promoIndex + 1) : promos
            const shipPromoMsg = promos.slice(0, promoIndex + 1)?.[0]
            return [{
                text: getTierText(tier) ?? 'Congrats! You\'ve earned FREE Shipping.',
                type: 'freeship',
                linkUrl: shipPromoMsg?.linkUrl ?? '/',
                linkText: shipPromoMsg?.linkText ?? DEFAULT_LINK_TEXT,
                textVarName: getTierVarName(tier) || shipPromoMsg?.textVarName,
                linkTextVarName: shipPromoMsg?.linkTextVarName
            }, otherPromos]
        }
        if (promoIndex !== -1) {
            const [freeShipPromos, otherPromos] = [promos.slice(0, promoIndex + 1)?.[0],
                promos.slice(promoIndex + 1),
            ];
            let tierPromo
            const tierText = getTierText(tier)
            if (tierText) {
              tierPromo = {
                ...freeShipPromos,
                text: tierText,
                type: 'freeship',
                textVarName: getTierVarName(tier) || freeShipPromos?.textVarName,
                linkTextVarName: freeShipPromos?.linkTextVarName
              }
            }

            return [tierPromo ?? freeShipPromos, otherPromos];
        }

        return [[], promos];
    }, [isFreeShippingQualified, tier])

  const otherPromoLen = otherPromos.length;
  const activeDesktopMessage = (otherPromoLen > 0 ? otherPromos[activeDTIndex % otherPromoLen] : null) ?? otherPromos[0] ?? fallbackMessage

  useEffect(() => {
    if (promoLen === 0) return;

    const rotatePromo = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % promoLen)
      setActiveDTIndex((prevIndex) => (prevIndex + 1) % otherPromoLen)
      timerRef.current = setTimeout(rotatePromo, +(promoDelayInMS ?? 5000))
    }

    timerRef.current = setTimeout(rotatePromo, +(promoDelayInMS ?? 5000))

    return () => {
      if (timerRef.current) {
          clearTimeout(timerRef.current)
          timerRef.current = null
      }
    }
  }, [promoLen, otherPromoLen, promoDelayInMS])

    if (promoLen === 0 && !shipPromo) {
      return (
        <div className="flex relative w-full min-h-[2.5rem] items-center justify-center bg-[#333] text-white text-sm">
          <div className="promo-list flex flex-1 items-center justify-center">
            <span>{DEFAULT_PROMO_TEXT}</span>
            <Link href="/" prefetch={false} className="ml-2 font-bold text-white underline">{DEFAULT_LINK_TEXT}</Link>
          </div>
        </div>
      );
    }

    return (
        <>
        <StyleTag />
        <div className="flex relative w-full min-h-[2.5rem] items-center justify-center bg-[#333] text-white text-sm">
          <div className="promo-list flex flex-1 items-center justify-center mx-auto max-w-none">
            <Promo animate className="block lg:hidden" message={activeMessage} threshold={threshold} />
            <Promo animate className="hidden lg:block" message={activeDesktopMessage ?? shipPromo ?? fallbackMessage} threshold={threshold} />
            {shipPromo && <Promo className="hidden lg:block" message={shipPromo} threshold={threshold} />}
          </div>
          {displayAccessibilityLink && <div id="adalinks" className="hidden lg:block ml-2 self-center">
            <button type="button" className="UsableNetAssistive whitespace-nowrap border-b border-white hover:border-transparent" onClick={() => window['enableUsableNetAssistive']?.()}>Enable Accessibility</button>
          </div>}
        </div>
      </>
    );
};

export default NavPromos;