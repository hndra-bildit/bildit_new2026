import { z } from 'zod'

/**
 * Normalized lead payload for the Vercel lead-agent–style workflow (research, qualify, draft, Slack HITL).
 * Maps all site lead forms to this shape.
 */
export const inboundFormSchema = z.object({
  source: z.string().min(1).max(100),
  name: z.string().min(2, 'Name is required').max(100, 'Name must be at most 100 characters'),
  email: z.email('Please enter a valid email address.'),
  phone: z.string().max(30).default(''),
  company: z.string().max(200).default(''),
  message: z.string().min(10, 'Message must be at least 10 characters').max(8000, 'Message is too long')
})

export type InboundLead = z.infer<typeof inboundFormSchema>

export const qualificationCategorySchema = z.enum(['QUALIFIED', 'UNQUALIFIED', 'SUPPORT', 'FOLLOW_UP'])

export const qualificationSchema = z.object({
  category: qualificationCategorySchema,
  reason: z.string()
})

export type Qualification = z.infer<typeof qualificationSchema>
