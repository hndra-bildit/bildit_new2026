import { inboundFormSchema } from '@/lib/lead/inbound-types'
import { uploadSlackFile } from '@/lib/lead/slack'
import { workflowInbound } from '@/workflows/inbound'
import { checkBotId } from 'botid/server'
import { NextResponse } from 'next/server'
import { start } from 'workflow/api'

const SOURCE = 'career'
const MAX_RESUME_BYTES = 4_500_000 // stay under typical server body limits

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function fileTypeAllowed(file: File): boolean {
  const name = file.name.toLowerCase()
  const byExt = name.endsWith('.pdf') || name.endsWith('.doc') || name.endsWith('.docx')
  const byMime =
    file.type === 'application/pdf' ||
    file.type === 'application/msword' ||
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  return byExt || byMime
}

export async function POST(request: Request) {
  const verification = await checkBotId()
  if (verification.isBot) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 })
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const fullName = String(form.get('fullName') ?? '').trim()
  const email = String(form.get('email') ?? '').trim()
  const messageRaw = String(form.get('message') ?? '').trim()
  const resume = form.get('resume')

  if (!fullName || fullName.length < 2) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (!(resume instanceof File) || !resume.name) {
    return NextResponse.json({ error: 'Resume file is required.' }, { status: 400 })
  }
  if (!fileTypeAllowed(resume)) {
    return NextResponse.json({ error: 'Resume must be a PDF, DOC, or DOCX file.' }, { status: 400 })
  }
  if (resume.size <= 0) {
    return NextResponse.json({ error: 'Resume file is empty.' }, { status: 400 })
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: 'Resume must be 4.5MB or smaller.' }, { status: 400 })
  }

  // Upload resume into Slack so the team can access it without needing Blob/S3.
  let resumeLink: string | null = null
  try {
    const arrayBuffer = await resume.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const uploaded = await uploadSlackFile({
      filename: resume.name,
      buffer,
      title: `Resume — ${fullName}`,
      initialComment: `New career inquiry from *${fullName}* <${email}>`,
      contentType: resume.type || undefined
    })
    resumeLink = uploaded.permalink
  } catch (e) {
    const msg = String(e)
    // If Slack isn't configured, fail loudly in production so we don't silently drop resumes.
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: msg.includes('SLACK_') ? 'Resume intake is temporarily unavailable.' : 'Could not upload resume.' },
        { status: 503 }
      )
    }
  }

  const messageLines = [
    'Career inquiry',
    resumeLink ? `Resume: ${resumeLink}` : `Resume: (upload unavailable — please follow up with ${email})`,
    messageRaw ? `Message: ${messageRaw}` : null,
    `Submitted: ${new Date().toISOString()}`
  ].filter(Boolean) as string[]

  const parsed = inboundFormSchema.safeParse({
    source: SOURCE,
    name: fullName,
    email,
    phone: '',
    company: '',
    message: messageLines.join('\n')
  })

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, { status: 400 })
  }

  await start(workflowInbound, [parsed.data])
  return NextResponse.json({ ok: true })
}
