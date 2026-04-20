import React, { useEffect, useMemo, useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useUserData } from '@hooks'

const ChevronRightIcon = ChevronRight ?? ((props) => React.createElement('span', { className: props?.className, style: { fontSize: props?.size ?? 18 } }, '\u203A'))
const useUserDataSafe = typeof useUserData === 'function' ? useUserData : () => ({ userData: undefined })

const DEFAULT_PROMO_TEXT = 'Free shipping on orders over $50'
const DEFAULT_LINK_TEXT = 'Shop Now'

const promoMessages = [
    {
      text: $(promo1Text:RichText='Free shipping on orders over $50'),
      type: $(promo1Type:Dropdown[Generic|generic,FreeShipping|freeship,BelkRewardsCard|brcc,BelkRewardsDollars|brd]="freeship"),
      linkText: $(promo1LinkTitle:RichText='Shop Now'),
      linkUrl: $(promo1LinkUrl:String='/';required=true),
      textVarName: 'promo1Text',
      linkTextVarName: 'promo1LinkTitle'
    },
    {
      text: $(promo2Text:RichText='Apply for the Belk Rewards Card'),
      type: $(promo2Type:Dropdown[Generic|generic,FreeShipping|freeship,BelkRewardsCard|brcc,BelkRewardsDollars|brd]="brcc"),
      linkText: $(promo2LinkTitle:RichText='Apply Now'),
      linkUrl: $(promo2LinkUrl:String='/';required=true),
      textVarName: 'promo2Text',
      linkTextVarName: 'promo2LinkTitle'
    },
    {
      text: $(promo3Text:RichText='Earn Belk Rewards Dollars on every purchase'),
      type: $(promo3Type:Dropdown[Generic|generic,FreeShipping|freeship,BelkRewardsCard|brcc,BelkRewardsDollars|brd]="brd"),
      linkText: $(promo3LinkTitle:RichText='Learn More'),
      linkUrl: $(promo3LinkUrl:String='/';required=true),
      textVarName: 'promo3Text',
      linkTextVarName: 'promo3LinkTitle'
    }
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
  const { userData: userDataRefetched } = useUserDataSafe()

  const { brd, userDetails, rewardDetails } = userData ?? userDataRefetched ?? {}
  const { isFreeShippingQualified, hasBelkPaymentType } = userDetails ?? {}
  const { tier, threshold, available } = brd?.brdDetailsMap ?? {}
  const { prequalify_url } = rewardDetails ?? {}

  const { shipPromo, otherPromos } = useMemo(() => {
    const shipPromo = promoMessages.find(p => p.type === 'freeship');
    const processedPromos = promoMessages
      .filter(promo => {
        if (hasBelkPaymentType && promo.type === 'brcc') return false;
        // Skip invalid promos and the free shipping promo (we'll handle it separately)
        return !(!(promo.text || DEFAULT_PROMO_TEXT).trim() || !promo.type || promo.type === 'freeship');
      })
      .map(promo => {
        const basePromo = { ...promo, text: (promo.text || DEFAULT_PROMO_TEXT).trim(), linkText: (promo.linkText || DEFAULT_LINK_TEXT).trim(), linkUrl: promo.linkUrl || '/', textVarName: promo.textVarName, linkTextVarName: promo.linkTextVarName };
        // Apply BRD transformations if we have valid data
        if (promo.type === 'brd') {
          if (available && available !== '0') {
            return {
              ...basePromo,
              text: `You have $${available} Belk Reward Dollars + FREE Shipping for ${tier ?? 'Elite'} or Fast & FREE Store Pickup`
            };
          }

          return {
              ...basePromo,
              text: `FREE Shipping for Elite or Fast & FREE Store Pickup`,
              linkText: basePromo.linkText,
              linkUrl: basePromo.linkUrl || prequalify_url || '/'
            };
        }
        return basePromo;
      })
      .filter(Boolean);

    const processedFreeShipPromo = shipPromo ? {
      ...shipPromo,
      text: (getTierText(tier) || shipPromo.text || DEFAULT_PROMO_TEXT).trim(),
      linkText: (shipPromo.linkText || DEFAULT_LINK_TEXT).trim(),
      linkUrl: shipPromo.linkUrl || '/',
      textVarName: getTierVarName(tier) || shipPromo.textVarName,
      linkTextVarName: shipPromo.linkTextVarName
    } : null;

    return {
      shipPromo: processedFreeShipPromo,
      otherPromos: processedPromos
    };
  }, [hasBelkPaymentType, tier, available]);

  // Handle promo rotation for other promos (not free shipping)
  const otherPromosLen = otherPromos.length;
  const activeOtherPromo = otherPromosLen > 0 ? otherPromos[activeDTIndex % otherPromosLen] : null;

  // For mobile, we'll show either free shipping or other promos
  const fallbackMessage = { text: DEFAULT_PROMO_TEXT, linkText: DEFAULT_LINK_TEXT, linkUrl: '/', type: 'generic' };
  const activeMessage = (shipPromo && activeIndex === 0 ? shipPromo : activeOtherPromo) ?? shipPromo ?? otherPromos[0];
  const activeDesktopMessage = activeOtherPromo ?? otherPromos[0];

  // Auto-rotate promos
  useEffect(() => {
    if (otherPromos.length === 0) return;

    const delay = promoDelayInMS ?? 5000;
    const totalItems = shipPromo ? otherPromos.length + 1 : otherPromos.length;

    const rotatePromo = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
      setActiveDTIndex((prevIndex) => (prevIndex + 1) % otherPromosLen)
      timerRef.current = setTimeout(rotatePromo, delay);
    };

    timerRef.current = setTimeout(rotatePromo, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [otherPromos.length, shipPromo, promoDelayInMS]);

    const messageToShow = activeMessage ?? shipPromo ?? otherPromos[0] ?? fallbackMessage;
    if (!messageToShow || (!(messageToShow.text || '').trim() && !(messageToShow.linkText || '').trim())) {
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
            <Promo animate className="block lg:hidden" message={activeMessage ?? shipPromo ?? fallbackMessage} threshold={threshold} />
            <Promo animate className="hidden lg:block" message={activeDesktopMessage ?? otherPromos[0] ?? fallbackMessage} threshold={threshold} />
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