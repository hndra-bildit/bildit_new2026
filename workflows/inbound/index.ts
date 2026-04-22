import { stepHumanFeedback, stepQualify, stepResearch, stepWriteEmail } from './steps'
import { type InboundLead } from '@/lib/lead/inbound-types'

/**
 * Durable workflow: research → qualify → (optional) draft + Slack HITL.
 * Based on vercel-labs/lead-agent.
 */
export const workflowInbound = async (data: InboundLead) => {
  'use workflow'

  const research = await stepResearch(data)
  const qualification = await stepQualify(data, research)

  if (qualification.category === 'QUALIFIED' || qualification.category === 'FOLLOW_UP') {
    const emailDraft = await stepWriteEmail(research, qualification)
    await stepHumanFeedback(data, research, emailDraft, qualification)
  }
}
