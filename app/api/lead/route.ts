import { NextResponse } from 'next/server'

type LeadPayloadBase = {
  source?: string
  fullName?: string
  email?: string
  company?: string
  turnstileToken?: string
}

type IntegrationPartnersPayload = LeadPayloadBase & {
  source: 'integration-partners'
  website?: string
  engineerCount?: string | number
  cmses?: string
  buildsMobileApps?: string
}

type LeadPayload = LeadPayloadBase | IntegrationPartnersPayload

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizeWebsite(url: string): string | null {
  const t = url.trim()
  if (!t) return null
  try {
    const withProto = /^https?:\/\//i.test(t) ? t : `https://${t}`
    const u = new URL(withProto)
    if (!u.hostname) return null
    return withProto
  } catch {
    return null
  }
}

async function verifyTurnstileToken(token: string, secret: string): Promise<boolean> {
  const body = new URLSearchParams()
  body.set('secret', secret)
  body.set('response', token)
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  })
  const data = (await res.json()) as { success?: boolean }
  return data.success === true
}

/**
 * Lead capture (Vercel-friendly): validates input, optionally verifies Turnstile, forwards to webhook when configured.
 * Set `LEADS_WEBHOOK_URL` to POST JSON to HubSpot, Zapier, Slack, etc.
 *
 * Turnstile (integration partner and optional future flows): `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`.
 */
export async function POST(request: Request) {
  let body: LeadPayload
  try {
    body = (await request.json()) as LeadPayload
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const source = String(body.source ?? 'unknown').trim()
  const email = String(body.email ?? '').trim()
  const fullName = String(body.fullName ?? '').trim()
  const company = String(body.company ?? '').trim()

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY

  if (source === 'integration-partners') {
    const websiteRaw = String((body as IntegrationPartnersPayload).website ?? '').trim()
    const website = normalizeWebsite(websiteRaw)
    const engineerRaw = (body as IntegrationPartnersPayload).engineerCount
    const engineerCount = typeof engineerRaw === 'number' ? engineerRaw : parseInt(String(engineerRaw ?? '').trim(), 10)
    const cmses = String((body as IntegrationPartnersPayload).cmses ?? '').trim()
    const buildsMobileApps = String((body as IntegrationPartnersPayload).buildsMobileApps ?? '')
      .trim()
      .toLowerCase()

    if (!fullName || !email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Contact name and a valid work email are required.' }, { status: 400 })
    }
    if (!company) {
      return NextResponse.json({ error: 'Company name is required.' }, { status: 400 })
    }
    if (!website) {
      return NextResponse.json({ error: 'A valid website URL is required.' }, { status: 400 })
    }
    if (!Number.isFinite(engineerCount) || engineerCount < 0) {
      return NextResponse.json({ error: 'Number of engineers must be zero or greater.' }, { status: 400 })
    }
    if (!cmses) {
      return NextResponse.json({ error: 'Please list the CMS platforms you work with.' }, { status: 400 })
    }
    if (buildsMobileApps !== 'yes' && buildsMobileApps !== 'no') {
      return NextResponse.json({ error: 'Please indicate whether you build mobile apps.' }, { status: 400 })
    }

    const token = String(body.turnstileToken ?? '').trim()
    if (turnstileSecret) {
      if (!token || !(await verifyTurnstileToken(token, turnstileSecret))) {
        return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
      }
    } else if (process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Captcha is not configured on the server.' }, { status: 503 })
    }

    const payload = {
      source,
      fullName,
      email,
      company,
      website,
      engineerCount,
      cmses,
      buildsMobileApps,
      submittedAt: new Date().toISOString()
    }

    const webhook = process.env.LEADS_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
      } catch {
        // Still return success to the user; ops can monitor webhook separately
      }
    }

    return NextResponse.json({ ok: true })
  }

  if (!fullName || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 })
  }

  const payload = { source, fullName, email, company: company || undefined, submittedAt: new Date().toISOString() }

  const webhook = process.env.LEADS_WEBHOOK_URL
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
    } catch {
      // Still return success to the user; ops can monitor webhook separately
    }
  }

  return NextResponse.json({ ok: true })
}
