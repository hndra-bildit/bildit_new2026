// Copyright 2025, BILDIT, INC.
//
// Licensed under the ENT License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://bildit.co/ENTLicense
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
/* README:

  This file is used to define the dependencies for the CMS.  These dependencies
  are used in the CMS to render components, pages, or banners using local modules. */
/* node_modules. */
import React from 'react'
/* Local modules - used in multiple places. */
import BenefitIcon from '@/app/components/BenefitIcon'
import BillingToggle from '@/app/components/BillingToggle'
import BlogClient from '@/app/components/BlogClient'
import BlogSingleClient from '@/app/components/BlogSingleClient'
import BodyFour from '@/app/components/BodyFour'
import BodyOne from '@/app/components/BodyOne'
import BodyThree from '@/app/components/BodyThree'
import BodyTwo from '@/app/components/BodyTwo'
import CMSFeatureTable from '@/app/components/CMSFeatureTable'
import CardCarousel from '@/app/components/CardCarousel'
import CardEight from '@/app/components/CardEight'
import CardFive from '@/app/components/CardFive'
import CardFour from '@/app/components/CardFour'
import CardNine from '@/app/components/CardNine'
import CardOne from '@/app/components/CardOne'
import CardSeven from '@/app/components/CardSeven'
import CardSix from '@/app/components/CardSix'
import CardThree from '@/app/components/CardThree'
import CardTwo from '@/app/components/CardTwo'
import ComparisonTable from '@/app/components/ComparisonTable'
import { Demo } from '@/app/components/Demo'
import DisplayOne from '@/app/components/DisplayOne'
import DisplayThree from '@/app/components/DisplayThree'
import DisplayTwo from '@/app/components/DisplayTwo'
import FAQAccordion from '@/app/components/FAQAccordion'
import HeadingOne from '@/app/components/HeadingOne'
import HeadingThree from '@/app/components/HeadingThree'
import HeadingThreeCaps from '@/app/components/HeadingThreeCaps'
import HeadingTwo from '@/app/components/HeadingTwo'
import HeroImage from '@/app/components/HeroImage'
import Input from '@/app/components/Input'
import LatestPost from '@/app/components/LatestPost'
import PriceCard from '@/app/components/PriceCard'
import PrimaryButton from '@/app/components/PrimaryButton'
import ResultImage from '@/app/components/ResultImage'
import SecondaryButton from '@/app/components/SecondaryButton'
import SectionCard from '@/app/components/SectionCard'
import SocialProofSlider from '@/app/components/SocialProofSlider'
import SubTitileFourCaps from '@/app/components/SubTitileFourCaps'
import SubTitleFive from '@/app/components/SubTitleFive'
import SubTitleFiveCaps from '@/app/components/SubTitleFiveCaps'
import SubTitleFour from '@/app/components/SubTitleFour'
import SubTitleThree from '@/app/components/SubTitleThree'
import SwiperCarousel from '@/app/components/SwiperCarousel'
import { HomeWorkflowShowcase, HomeWorkflowShowcaseWithSteps } from '@/app/components/home/HomeWorkflowShowcase'
import * as homeSectionTypography from '@/app/components/home/home-section-typography'
import { BilditLogo } from '@/app/components/site-header/BilditLogo'
import {
  StorefrontEverythingYouNeed,
  StorefrontHero,
  StorefrontIntroBand,
  StorefrontLeadCta,
  StorefrontPlatformStrip,
  StorefrontSchedulingIntegrations,
  StorefrontTestimonials,
  StorefrontTestimonialsQuotes,
  StorefrontTransforming
} from '@/app/components/storefront'
import * as homeFaqData from '@/app/lib/home-faq-data'
import { cn } from '@/utils/cn'
import { getRemoteProps } from '@bildit-platform/nextjs'
import * as LucideIcons from 'lucide-react'
import * as Next from 'next/client'
import * as NextForm from 'next/form'
import NextImageOriginal from 'next/image'
import type { ImageProps } from 'next/image'
import * as NextLink from 'next/link'
import * as NextNavigation from 'next/navigation'
import * as NextScript from 'next/script'
import * as NextWebVitals from 'next/web-vitals'
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'
import jsxRuntime from 'react/jsx-runtime'

// Avoids CMS/runtime errors when `src` is missing
function SafeImage(props: ImageProps) {
  if (!props.src || props.src === '') {
    return null
  }
  return <NextImageOriginal {...props} />
}

const NextImage = {
  default: SafeImage,
  __esModule: true
}

/* Specific to component. */
const isProduction = process.env.ENVIRONMENT === 'production'

interface Dependency {
  module: unknown
  globalName?: string
}

const cmsDependencies: Record<string, Dependency> = {
  // node_modules
  'lucide-react': { module: LucideIcons },
  'next/form': { module: NextForm },
  'next/image': { module: NextImage },
  'next/link': { module: NextLink },
  'next/script': { module: NextScript },
  'react/jsx-runtime': { module: jsxRuntime },
  react: { module: React },
  // Local modules.
  '@/app/components/BenefitIcon': { module: BenefitIcon },
  '@/app/components/BillingToggle': { module: BillingToggle },
  '@/app/components/BlogClient': { module: BlogClient },
  '@/app/components/BlogSingleClient': { module: BlogSingleClient },
  '@/app/components/BodyFour': { module: BodyFour },
  '@/app/components/BodyOne': { module: BodyOne },
  '@/app/components/BodyThree': { module: BodyThree },
  '@/app/components/BodyTwo': { module: BodyTwo },
  '@/app/components/CMSFeatureTable': { module: CMSFeatureTable },
  '@/app/components/CardCarousel': { module: CardCarousel },
  '@/app/components/CardEight': { module: CardEight },
  '@/app/components/CardFive': { module: CardFive },
  '@/app/components/CardFour': { module: CardFour },
  '@/app/components/CardNine': { module: CardNine },
  '@/app/components/CardOne': { module: CardOne },
  '@/app/components/CardSeven': { module: CardSeven },
  '@/app/components/CardSix': { module: CardSix },
  '@/app/components/CardThree': { module: CardThree },
  '@/app/components/CardTwo': { module: CardTwo },
  '@/app/components/ComparisonTable': { module: ComparisonTable },
  '@/app/components/Demo': { module: Demo },
  '@/app/components/DisplayOne': { module: DisplayOne },
  '@/app/components/DisplayThree': { module: DisplayThree },
  '@/app/components/DisplayTwo': { module: DisplayTwo },
  '@/app/components/FAQAccordion': { module: FAQAccordion },
  '@/app/components/HeadingOne': { module: HeadingOne },
  '@/app/components/HeadingThree': { module: HeadingThree },
  '@/app/components/HeadingThreeCaps': { module: HeadingThreeCaps },
  '@/app/components/HeadingTwo': { module: HeadingTwo },
  '@/app/components/HeroImage': { module: HeroImage },
  '@/app/components/Input': { module: Input },
  '@/app/components/LatestPost': { module: LatestPost },
  '@/app/components/PriceCard': { module: PriceCard },
  '@/app/components/PrimaryButton': { module: PrimaryButton },
  '@/app/components/ResultImage': { module: ResultImage },
  '@/app/components/SecondaryButton': { module: SecondaryButton },
  '@/app/components/SectionCard': { module: SectionCard },
  '@/app/components/SocialProofSlider': { module: SocialProofSlider },
  '@/app/components/SubTitileFourCaps': { module: SubTitileFourCaps },
  '@/app/components/SubTitleFive': { module: SubTitleFive },
  '@/app/components/SubTitleFiveCaps': { module: SubTitleFiveCaps },
  '@/app/components/SubTitleFour': { module: SubTitleFour },
  '@/app/components/SubTitleThree': { module: SubTitleThree },
  '@/app/components/SwiperCarousel': { module: SwiperCarousel },
  '@/app/components/home/HomeWorkflowShow': {
    module: {
      __esModule: true,
      default: HomeWorkflowShowcase,
      HomeWorkflowShow: HomeWorkflowShowcase,
      HomeWorkflowShowcase,
      HomeWorkflowShowcaseWithSteps
    }
  },
  '@/app/components/home/HomeWorkflowShowcase': {
    module: {
      __esModule: true,
      default: HomeWorkflowShowcase,
      HomeWorkflowShowcase,
      HomeWorkflowShowcaseWithSteps
    }
  },
  '@/app/components/home/home-section-typography': { module: homeSectionTypography },
  '@/app/components/storefront': {
    module: {
      StorefrontEverythingYouNeed,
      StorefrontHero,
      StorefrontIntroBand,
      StorefrontLeadCta,
      StorefrontPlatformStrip,
      StorefrontSchedulingIntegrations,
      StorefrontTestimonials,
      StorefrontTestimonialsQuotes,
      StorefrontTransforming
    }
  },
  '@/app/components/site-header/BilditLogo': { module: { BilditLogo } },
  '@/app/lib/home-faq-data': { module: homeFaqData },
  '@/utils/cn': { module: { cn } }
}

if (!isProduction) {
  cmsDependencies['next/client'] = { module: Next }
  cmsDependencies['next/navigation'] = { module: NextNavigation }
  cmsDependencies['next/web-vitals'] = { module: NextWebVitals }
  cmsDependencies['react-dom'] = { module: ReactDOM }
  cmsDependencies['react-dom/client'] = { module: ReactDOMClient }
}

export default cmsDependencies

declare global {
  interface Window {
    cmsDependencies: Record<string, unknown>
    React: typeof React
    ReactDOM: typeof ReactDOM & typeof ReactDOMClient
    remoteProps: typeof getRemoteProps
  }
}

/* for dev environments, expose React libs + cmsDependencies */
if (!isProduction && typeof window !== 'undefined') {
  window.cmsDependencies = {}
  window.remoteProps = getRemoteProps
  Object.keys(cmsDependencies).forEach((key) => {
    window.cmsDependencies[key] = cmsDependencies[key]
  })
}
