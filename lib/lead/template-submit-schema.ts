import { z } from 'zod'

/**
 * Payload shape for `POST /api/submit` — matches vercel-labs/lead-agent `lib/types` formSchema
 * so the Vercel Lead Agent template can be used against this app without changes.
 */
export const templateSubmitFormSchema = z.object({
  email: z.email('Please enter a valid email address.'),
  name: z
    .string()
    .min(2, 'Name is required')
    .max(50, 'Name must be at most 50 characters.'),
  phone: z.preprocess(
    (v) => (v === undefined || v === null ? '' : String(v)),
    z.union([
      z.literal(''),
      z
        .string()
        .regex(/^[\d\s\-+()]+$/, 'Please enter a valid phone number.')
        .min(10, 'Phone number must be at least 10 digits.')
    ])
  ),
  company: z.string().optional().or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message is required')
    .max(500, 'Message must be less than 500 characters.')
})

export type TemplateSubmitForm = z.infer<typeof templateSubmitFormSchema>
