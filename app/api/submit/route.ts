import { inboundFormSchema } from '@/lib/lead/inbound-types'
import { templateSubmitFormSchema } from '@/lib/lead/template-submit-schema'
import { workflowInbound } from '@/workflows/inbound'
import { checkBotId } from 'botid/server'
import { NextResponse } from 'next/server'
import { start } from 'workflow/api'

const SUBMIT_SOURCE = 'lead-agent-submit'

/**
 * Vercel Lead Agent template entrypoint (`app/api/submit` in vercel-labs/lead-agent).
 * Validates the template body, normalizes to {@link inboundFormSchema}, then runs the same workflow as `/api/lead`.
 */
export async function POST(request: Request) {
  const verification = await checkBotId()
  if (verification.isBot) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsedBody = templateSubmitFormSchema.safeParse(body)
  if (!parsedBody.success) {
    return NextResponse.json({ error: parsedBody.error.message }, { status: 400 })
  }

  const t = parsedBody.data
  const phone = typeof t.phone === 'string' ? t.phone.trim().slice(0, 30) : ''

  const inbound = inboundFormSchema.safeParse({
    source: SUBMIT_SOURCE,
    name: t.name,
    email: t.email,
    phone,
    company: (t.company ?? '').trim().slice(0, 200),
    message: t.message
  })

  if (!inbound.success) {
    return NextResponse.json({ error: inbound.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
  }

  await start(workflowInbound, [inbound.data])

  return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 })
}
