import { App, LogLevel } from '@slack/bolt'
import { WebClient } from '@slack/web-api'
import { VercelReceiver } from '@vercel/slack-bolt'

const logLevel = process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO

/** Trim and strip a single pair of surrounding quotes (common .env mistake). */
function normalizeSlackSecret(raw: string | undefined): string {
  let t = (raw ?? '').trim()
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    t = t.slice(1, -1).trim()
  }
  return t
}

const slackBotToken = normalizeSlackSecret(process.env.SLACK_BOT_TOKEN)
const slackSigningSecret = normalizeSlackSecret(process.env.SLACK_SIGNING_SECRET)

const botTokenLooksValid = Boolean(slackBotToken && slackBotToken.startsWith('xoxb-'))
const hasSlackCredentials = Boolean(botTokenLooksValid && slackSigningSecret)

if (slackBotToken && slackSigningSecret && !botTokenLooksValid) {
  console.error(
    '⚠️ SLACK_BOT_TOKEN must be the Bot User OAuth Token (starts with xoxb-). The Signing Secret belongs only in SLACK_SIGNING_SECRET — do not swap them.'
  )
}

/**
 * Read env at call time (workflow workers / isolates may not match module init snapshot).
 */
export function isSlackBoltConfigured(): boolean {
  const token = normalizeSlackSecret(process.env.SLACK_BOT_TOKEN)
  const signing = normalizeSlackSecret(process.env.SLACK_SIGNING_SECRET)
  return Boolean(token.startsWith('xoxb-') && signing)
}

/**
 * Outbound posts: WebClient from current env. Validates token shape — Bot User OAuth tokens start with xoxb-.
 */
function outboundWebClient(): WebClient {
  const token = normalizeSlackSecret(process.env.SLACK_BOT_TOKEN)
  if (!token) {
    throw new Error('SLACK_BOT_TOKEN is not set')
  }
  if (!token.startsWith('xoxb-')) {
    throw new Error(
      'SLACK_BOT_TOKEN must be the Bot User OAuth Token (starts with xoxb-) from Slack → Your app → OAuth & Permissions. The Signing Secret belongs in SLACK_SIGNING_SECRET only — do not put it in SLACK_BOT_TOKEN.'
    )
  }
  return new WebClient(token)
}

if (!hasSlackCredentials) {
  console.warn('⚠️ SLACK_BOT_TOKEN or SLACK_SIGNING_SECRET is not set. Slack lead approval will be disabled.')
}

export const receiver = hasSlackCredentials
  ? new VercelReceiver({
      signingSecret: slackSigningSecret,
      logLevel
    })
  : null

export const slackApp = hasSlackCredentials
  ? new App({
      token: slackBotToken,
      signingSecret: slackSigningSecret,
      receiver: receiver!,
      deferInitialization: true,
      logLevel
    })
  : null

async function slackAuthPing(client: WebClient): Promise<void> {
  try {
    await client.auth.test()
  } catch (e) {
    const msg = String(e)
    if (msg.includes('invalid_auth')) {
      throw new Error(
        'Slack API invalid_auth: regenerate the Bot User OAuth Token (xoxb-) under OAuth & Permissions and update SLACK_BOT_TOKEN in every environment.'
      )
    }
    throw e
  }
}

function resolveSlackChannel(explicitChannel: string): string {
  const fromEnv = process.env.SLACK_CHANNEL_ID?.trim()
  const ch = (explicitChannel && explicitChannel.trim()) || fromEnv
  if (!ch) {
    throw new Error(
      'SLACK_CHANNEL_ID is not set. Add it to .env.local (e.g. C01234567890 from channel details, or #your-channel). Invite the app to the channel if it is private.'
    )
  }
  return ch
}

type UploadSlackFileArgs = {
  filename: string
  buffer: Buffer
  title?: string
  initialComment?: string
  contentType?: string
  channel?: string
}

/**
 * Upload a file to Slack (requires the app to have `files:write` scope).
 * Returns a permalink for easy sharing in lead messages.
 */
export async function uploadSlackFile(args: UploadSlackFileArgs): Promise<{ permalink: string }> {
  const client = outboundWebClient()
  const ch = resolveSlackChannel(args.channel ?? '')
  await slackAuthPing(client)

  // `files.uploadV2` supports Buffer uploads.
  const result = await client.files.uploadV2({
    channel_id: ch,
    filename: args.filename,
    title: args.title,
    initial_comment: args.initialComment,
    file: args.buffer
  })

  const file = Array.isArray((result as { files?: unknown[] }).files)
    ? (result as { files?: { permalink?: string; permalink_public?: string }[] }).files?.[0]
    : undefined
  const permalink = file?.permalink || file?.permalink_public

  if (!result.ok || !permalink) {
    throw new Error(`Slack files.uploadV2 failed: ${(result as { error?: string }).error ?? 'unknown error'}`)
  }

  return { permalink }
}

/**
 * Simple notification (no interactive buttons). Used when the lead is not routed through HITL approval.
 */
export async function sendSlackMarkdownMessage(
  channel: string,
  text: string
): Promise<{ messageTs: string; channel: string }> {
  const client = outboundWebClient()
  const ch = resolveSlackChannel(channel)
  await slackAuthPing(client)

  const result = await client.chat.postMessage({
    channel: ch,
    text,
    blocks: [{ type: 'section', text: { type: 'mrkdwn', text } }]
  })

  if (!result.ok || !result.ts) {
    throw new Error(`Slack chat.postMessage failed: ${result.error ?? 'unknown error'}`)
  }

  return { messageTs: result.ts, channel: result.channel! }
}

/**
 * Post lead summary + Approve / Reject to Slack (human-in-the-loop).
 */
export async function sendSlackMessageWithButtons(
  channel: string,
  text: string
): Promise<{ messageTs: string; channel: string }> {
  const client = outboundWebClient()
  const ch = resolveSlackChannel(channel)

  await slackAuthPing(client)

  const result = await client.chat.postMessage({
    channel: ch,
    text,
    blocks: [
      { type: 'section', text: { type: 'mrkdwn', text } },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: { type: 'plain_text', text: '👍 Approve', emoji: true },
            style: 'primary',
            action_id: 'lead_approved'
          },
          {
            type: 'button',
            text: { type: 'plain_text', text: '👎 Reject', emoji: true },
            style: 'danger',
            action_id: 'lead_rejected'
          }
        ]
      }
    ]
  })

  if (!result.ok || !result.ts) {
    throw new Error(`Slack chat.postMessage failed: ${result.error ?? 'unknown error'}`)
  }

  return { messageTs: result.ts, channel: result.channel! }
}
