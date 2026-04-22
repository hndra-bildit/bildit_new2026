import { inboundFormSchema } from '@/lib/lead/inbound-types'
import { workflowInbound } from '@/workflows/inbound'
import { checkBotId } from 'botid/server'
import { NextResponse } from 'next/server'
import { start } from 'workflow/api'

type LeadPayloadBase = {
  source?: string
  fullName?: string
  email?: string
  company?: string
  message?: string
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
 * All marketing / contact / integration lead forms: BotID, validate, then Workflow DevKit inbound pipeline
 * (vercel-labs/lead-agent pattern). Optional `LEADS_WEBHOOK_URL` still receives a JSON POST for HubSpot, Zapier, etc.
 */
export async function POST(request: Request) {
  const verification = await checkBotId()
  if (verification.isBot) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 })
  }

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
  const userMessage = String((body as LeadPayloadBase).message ?? '').trim()

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY

  if (source === 'integration-partners') {
    const b = body as IntegrationPartnersPayload
    const websiteRaw = String(b.website ?? '').trim()
    const website = normalizeWebsite(websiteRaw)
    const engineerRaw = b.engineerCount
    const engineerCount = typeof engineerRaw === 'number' ? engineerRaw : parseInt(String(engineerRaw ?? '').trim(), 10)
    const cmses = String(b.cmses ?? '').trim()
    const buildsMobileApps = String(b.buildsMobileApps ?? '')
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

    const token = String(b.turnstileToken ?? '').trim()
    if (turnstileSecret) {
      if (!token || !(await verifyTurnstileToken(token, turnstileSecret))) {
        return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 })
      }
    } else if (process.env.NODE_ENV === 'production') {
      return NextResponse.json({ error: 'Captcha is not configured on the server.' }, { status: 503 })
    }

    const message = [
      'Integration partners application',
      `Website: ${website}`,
      `Engineer count: ${engineerCount}`,
      `CMS platforms: ${cmses}`,
      `Builds mobile apps: ${buildsMobileApps}`,
      `Submitted: ${new Date().toISOString()}`
    ].join('\n')

    const parsed = inboundFormSchema.safeParse({
      source,
      name: fullName,
      email,
      phone: '',
      company: company || '',
      message
    })

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
    }

    const webhook = process.env.LEADS_WEBHOOK_URL
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source,
            fullName,
            email,
            company,
            website,
            engineerCount,
            cmses,
            buildsMobileApps,
            submittedAt: new Date().toISOString()
          })
        })
      } catch {
        // best-effort
      }
    }

    await start(workflowInbound, [parsed.data])
    return NextResponse.json({ ok: true })
  }

  if (!fullName || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 })
  }

  if (source === 'contact-us') {
    if (!userMessage) {
      return NextResponse.json({ error: 'Please enter a message.' }, { status: 400 })
    }
    if (userMessage.length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters.' }, { status: 400 })
    }
  }

  const message =
    source === 'contact-us'
      ? userMessage
      : `This is a lead request from the BILDIT site (form source: "${source}"). The visitor used a short marketing form without a long message.`

  const parsed = inboundFormSchema.safeParse({
    source,
    name: fullName,
    email,
    phone: '',
    company: company || '',
    message
  })

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
  }

  const webhook = process.env.LEADS_WEBHOOK_URL
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          fullName,
          email,
          company: company || undefined,
          message: userMessage || undefined,
          submittedAt: new Date().toISOString()
        })
      })
    } catch {
      // best-effort
    }
  }

  await start(workflowInbound, [parsed.data])
  return NextResponse.json({ ok: true })
}
