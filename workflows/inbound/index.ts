import {
  stepHumanFeedback,
  stepQualify,
  stepResearch,
  stepSlackNotifyWithoutHitl,
  stepWriteEmail
} from './steps'
import { type InboundLead } from '@/lib/lead/inbound-types'

/**
 * Inbound lead workflow (vercel-labs/lead-agent pattern):
 * - research the lead
 * - qualify the lead
 * - QUALIFIED / FOLLOW_UP: draft + Slack message with Approve / Reject
 * - Other categories: Slack summary only (so every lead is visible in-channel)
 */
export const workflowInbound = async (data: InboundLead) => {
  'use workflow'

  const research = await stepResearch(data)
  const qualification = await stepQualify(data, research)

  if (qualification.category === 'QUALIFIED' || qualification.category === 'FOLLOW_UP') {
    const emailDraft = await stepWriteEmail(research, qualification)
    await stepHumanFeedback(data, research, emailDraft, qualification)
  } else {
    await stepSlackNotifyWithoutHitl(data, research, qualification)
  }
}
