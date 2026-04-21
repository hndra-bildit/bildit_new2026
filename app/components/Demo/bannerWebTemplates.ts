/**
 * Preview thumbnails exported from Figma “Clone — Web Templates” (Vestaire page).
 * @see https://www.figma.com/design/mzWt5bbIDkM99DfqP23Ri8/Clone---Web-Templates?node-id=461-1433
 * Files live in `public/images/templates/`.
 */
import { BILDIT_SIGNUP_URL } from '@/app/lib/bildit-signup-url'

export const BILDIT_FREE_TRIAL_URL = BILDIT_SIGNUP_URL

/** Safe path for template filenames that may include spaces. */
function templateImage(file: string): string {
  return `/images/templates/${encodeURIComponent(file)}`
}

export interface BannerWebTemplate {
  id: string
  title: string
  previewSrc: string
}

export const BANNER_WEB_TEMPLATES: BannerWebTemplate[] = [
  {
    id: 'hero',
    title: 'Hero banner',
    previewSrc: templateImage('Hero.png')
  },
  {
    id: 'three-column-categories',
    title: 'Three-column categories',
    previewSrc: templateImage('Frame 1707480374.png')
  },
  {
    id: 'two-column-featured',
    title: 'Two-column featured',
    previewSrc: templateImage('Frame 1707480375.png')
  },
  {
    id: 'new-arrivals',
    title: 'New arrivals grid',
    previewSrc: templateImage('Frame 111.png')
  },
  {
    id: 'split-promo',
    title: 'Split promotional banner',
    previewSrc: templateImage('2 Column.png')
  },
  {
    id: 'lookbook',
    title: 'Brand lookbook',
    previewSrc: templateImage('3 Column with Text.png')
  },
  {
    id: 'category-icons',
    title: 'Category icons row',
    previewSrc: templateImage('5 Categories.png')
  },
  {
    id: 'deals-countdown',
    title: 'Deals & countdown',
    previewSrc: templateImage('Timer.png')
  }
]
