'use server'

import type { WebBannersResponse, BilditBannerParams } from './bildit.d'

export async function getBanners(params?: BilditBannerParams): Promise<WebBannersResponse | null> {
  try {
    const { category, location } = params ?? {}
    const apiUrl = process.env.BILDIT_API_URL
    if (!apiUrl) {
      console.warn('BILDIT_API_URL environment variable is not set')
      return null
    }

    const baseUrl = new URL(apiUrl)

    baseUrl.pathname += process.env.BILDIT_API_ENDPOINT

    baseUrl.searchParams.append('key', process.env.BILDIT_API_KEY ?? '')
    baseUrl.searchParams.append('mode', 'csr')
    baseUrl.searchParams.append('tomorrow', 'true')
    if (category) {
      baseUrl.searchParams.append('category', category)
    }
    baseUrl.searchParams.append('location', location ?? '/')

    const url = baseUrl.toString()

    console.log('url', url)
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

export async function getRemoteBaseCodeLib() {
  const apiUrl = process.env.BILDIT_API_URL
  if (!apiUrl) {
    console.warn('BILDIT_API_URL environment variable is not set')
    return []
  }

  const baseUrl = new URL(apiUrl)

  baseUrl.pathname += '/remote-baseCodelib'

  baseUrl.searchParams.append('key', process.env.BILDIT_API_KEY ?? '')

  const url = baseUrl.toString()
  const response = await fetch(url)
  const data = await response.json()
  return data
}
