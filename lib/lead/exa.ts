import Exa from 'exa-js'

let exa: Exa | null = null

export function getExa(): Exa {
  if (!process.env.EXA_API_KEY) {
    throw new Error('EXA_API_KEY is not set')
  }
  if (!exa) {
    exa = new Exa(process.env.EXA_API_KEY)
  }
  return exa
}

export function isExaConfigured(): boolean {
  return Boolean(process.env.EXA_API_KEY)
}
