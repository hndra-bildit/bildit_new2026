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
    await sendEmail('Send email to the lead')
  })

  slackApp.action('lead_rejected', async ({ ack }) => {
    await ack()
  })
}

const slackBoltPost = slackApp && receiver ? createHandler(slackApp, receiver) : null

export async function POST(request: Request) {
  if (!slackBoltPost) {
    return new Response('Slack credentials not configured', { status: 503 })
  }
  return slackBoltPost(request)
}
