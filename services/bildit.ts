'use server'
export async function getBanners() {
  try {
    const baseUrl = new URL(process.env.BILDIT_API_URL ?? '')

    baseUrl.pathname += '/remote-banners_v1_3'

    baseUrl.searchParams.append('key', process.env.BILDIT_API_KEY ?? '')
    baseUrl.searchParams.append('device', 'web')

    const url = baseUrl.toString()

    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export async function getRemoteBaseCodeLib() {
  const baseUrl = new URL(process.env.BILDIT_API_URL ?? '')

  baseUrl.pathname += '/remote-baseCodelib'

  baseUrl.searchParams.append('key', process.env.BILDIT_API_KEY ?? '')

  const url = baseUrl.toString()
  const response = await fetch(url)
  const data = await response.json()
  return data
}
