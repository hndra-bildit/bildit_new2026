'use server'
export async function getBanners() {
  try {
    const apiUrl = process.env.BILDIT_API_URL
    if (!apiUrl) {
      console.warn('BILDIT_API_URL environment variable is not set')
      return []
    }

    const baseUrl = new URL(apiUrl)

    baseUrl.pathname += '/remote-banners_v1_3'

    baseUrl.searchParams.append('key', process.env.BILDIT_API_KEY ?? '')
    baseUrl.searchParams.append('device', 'web')

    const url = baseUrl.toString()

    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
    return []
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
