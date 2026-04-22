import { sendEmail } from '@/lib/lead/services'
import { slackApp, receiver } from '@/lib/lead/slack'
import { createHandler } from '@vercel/slack-bolt'

if (slackApp && receiver) {
  slackApp.event('app_mention', async ({ event, client }) => {
    await client.chat.postMessage({
      channel: event.channel,
      thread_ts: event.ts,
      text: `Hello <@${event.user}>!`
    })
  })

  slackApp.action('lead_approved', async ({ ack }) => {
    await ack()
    await sendEmail('Approved: wire sendEmail() in lib/lead/services.ts to your provider')
  })

  slackApp.action('lead_rejected', async ({ ack }) => {
    await ack()
  })
}

export const POST =
  slackApp && receiver
    ? createHandler(slackApp, receiver)
    : () => new Response('Slack credentials not configured', { status: 503 })
