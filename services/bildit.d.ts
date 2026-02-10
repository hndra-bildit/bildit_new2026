export interface BilditBannerParams {
  category?: string
  location?: string
}

export type ImageFile = File & {
  preview?: string
  height?: number
  width?: number
  screen?: ScreenType
}
export type CodeType = 'js' | 'jsx' | 'html' | 'json' | 'ts' | 'tsx'
export type ScreenType = 'desktop' | 'tablet' | 'phone'
export type OrientationType = 'portrait' | 'landscape'

export interface BannerCode {
  updated?: boolean
  compiled?: string
  raw?: string
  html?: string
}

export interface VariantMetadata {
  name: string
  type: string
  defaultValue?: string | number | boolean
  value?: string | number | boolean
  dropdownOptions?: Array<{
    label: string
    value: string | number | boolean
  }>
}

export interface ResponsiveImage {
  base64?: string
  height: number
  image?: string
  screen: string
  url: string
  width: number
  preview?: VariantPreview
}

export interface VariantPreview {
  blurhash?: string
  h: number
  uuid: string
  w: number
}

export interface Variant {
  customerGroups?: string[]
  id: string
  categories: string[]
  code?: BannerCode
  codePreview?: string
  codeType: CodeType
  image?: string
  imageFile?: ImageFile
  locations: string[]
  metadata?: VariantMetadata[]
  preview?: VariantPreview
  responsiveImage?: ResponsiveImage[]
  templateName?: string
  url?: string
}

export interface ScheduleType {
  slot: number
  startDate: string | number
  endDate: string | number
}

export interface WebBannersResponse {
  lastUpdate: number
  data: Banner[]
}

export interface Banner {
  [index: string]: unknown
  adobeAnalytics?: string
  alternateText?: string
  appType?: string
  archived?: boolean
  bannerSortOrder?: Record<string, number>
  createdAt?: number | string
  createdBy?: string
  deleted?: boolean
  devices?: Record<string, boolean>
  dirty?: boolean
  draft?: boolean
  id: string
  image?: string
  key?: string
  location?: string
  locations: string[]
  metadata?: VariantMetadata[]
  name: string
  order?: number
  orientation?: OrientationType
  preview?: VariantPreview
  published: boolean
  responsiveImage?: ResponsiveImage[]
  schedules: ScheduleType[]
  screenTypes: {
    desktop: boolean
    tablet: boolean
    phone: boolean
  }
  slot?: number
  stale?: boolean
  updatedAt?: number | string
  updatedBy?: string
  url?: string
  variants: Variant[]
  webSlots: string[]
}

export interface BannerTypeRender {
  adobeAnalytics?: string
  alternateText?: string
  bannerSortOrder?: Record<string, number>
  code?: {
    code?: string
    html?: string
  }
  id: string
  image?: string
  locations: string[]
  name: string
  orientation?: OrientationType
  published: boolean
  preview?: VariantPreview
  schedules: ScheduleType[]
  screenTypes: {
    desktop: boolean
    tablet: boolean
    phone: boolean
  }
  slot?: number
  url?: string
  variants: Variant[]
  webSlots: string[]
}

interface BannerOptionalTestProperties {
  location?: string
}

export type BannerTypeRenderForTests = BannerTypeRender & BannerOptionalTestProperties

export interface BannerSortOrderUpdate {
  id?: string
  bannerSortOrder?: Record<string, number>
}

export interface BilditBannerParams {
  category?: string
  location?: string
}

export interface ResponsiveImage {
  base64?: string
  height: number
  image?: string
  screen: string
  url: string
  width: number
  preview?: VariantPreview
}
export interface BannerSortOrderUpdate {
  id?: string
  bannerSortOrder?: Record<string, number>
}

export interface WebApp {
  environment: string
  id: string
  image?: string
  name: string
  startDate: number
  type: string
  url: string
  version: string
}

export interface FormValues {
  order: number
  name: string
  devices: ['web']
  screenTypes: ScreenType[]
  location: string
  url: string
  alternateText: string
  orientation: 'portrait'
  siteSpectCampaignId: string
  schedules: ScheduleType[]
  slotId: string
  responsiveImage: ResponsiveImage[]
}

export interface DefaultTemplate {
  code: string
  codeType: CodeType
  raw: string
  metadata: VariantMetadata[]
  name: string
}

export type SSOConfig = Record<string, Record<string, string>>
