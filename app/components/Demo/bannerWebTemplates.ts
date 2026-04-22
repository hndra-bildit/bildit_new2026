/**
 * Preview thumbnails for the home “Try out live preview” template picker.
 * Figma reference (optional local exports): https://www.figma.com/design/mzWt5bbIDkM99DfqP23Ri8/Clone---Web-Templates?node-id=461-1433
 * Remote previews avoid broken thumbnails when `public/images/templates/` is not checked in.
 */
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'

export const BILDIT_FREE_TRIAL_URL = BILDIT_SIGNUP_URL

export interface BannerWebTemplate {
  id: string
  title: string
  previewSrc: string
}

const u = (id: string, w = 640, h = 360) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

export const BANNER_WEB_TEMPLATES: BannerWebTemplate[] = [
  {
    id: 'hero',
    title: 'Hero banner',
    previewSrc: u('photo-1441986300917-64674bd600d8')
  },
  {
    id: 'three-column-categories',
    title: 'Three-column categories',
    previewSrc: u('photo-1445205170230-053b83016050')
  },
  {
    id: 'two-column-featured',
    title: 'Two-column featured',
    previewSrc: u('photo-1490481651871-ab68de25d43d')
  },
  {
    id: 'new-arrivals',
    title: 'New arrivals grid',
    previewSrc: u('photo-1591047139829-d91aecb6caea')
  },
  {
    id: 'split-promo',
    title: 'Split promotional banner',
    previewSrc: u('photo-1469334031218-e382a71b716b')
  },
  {
    id: 'lookbook',
    title: 'Brand lookbook',
    previewSrc: u('photo-1515886657613-9f3515b0c78f')
  },
  {
    id: 'category-icons',
    title: 'Category icons row',
    previewSrc: u('photo-1523381210434-271e8be1f52b')
  },
  {
    id: 'deals-countdown',
    title: 'Deals & countdown',
    previewSrc: u('photo-1607082348824-0a96f2a4b9da')
  }
]
