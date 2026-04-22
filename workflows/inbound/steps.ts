import { type InboundLead, type Qualification } from '@/lib/lead/inbound-types'
import { humanFeedback, qualify, researchAgent, writeEmail } from '@/lib/lead/services'

export const stepQualify = async (data: InboundLead, research: string) => {
  'use step'
  return await qualify(data, research)
}

export const stepResearch = async (data: InboundLead) => {
  'use step'
  const result = await researchAgent.generate({
    prompt: `Research the lead and return a report: ${JSON.stringify(data)}`
  })
  return result.text
}

export const stepWriteEmail = async (research: string, qualification: Qualification) => {
  'use step'
  return await writeEmail(research, qualification)
}

export const stepHumanFeedback = async (
  data: InboundLead,
  research: string,
  emailDraft: string,
  qualification: Qualification
) => {
  'use step'
  if (!process.env.SLACK_BOT_TOKEN || !process.env.SLACK_SIGNING_SECRET) {
    console.warn('⚠️ SLACK_BOT_TOKEN or SLACK_SIGNING_SECRET is not set, skipping human feedback step')
    return
  }
  return await humanFeedback(data, research, emailDraft, qualification)
}
