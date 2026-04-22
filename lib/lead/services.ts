import { getExa, isExaConfigured } from '@/lib/lead/exa'
import { type InboundLead, type Qualification, qualificationSchema } from '@/lib/lead/inbound-types'
import { sendSlackMessageWithButtons } from '@/lib/lead/slack'
import { generateObject, generateText, ToolLoopAgent, tool, stepCountIs } from 'ai'
import { z } from 'zod'

const leadModel = process.env.LEAD_AGENT_MODEL ?? 'openai/gpt-4.1'

export async function qualify(lead: InboundLead, research: string): Promise<Qualification> {
  const { object } = await generateObject({
    model: leadModel,
    schema: qualificationSchema,
    prompt: `Qualify the lead and give a reason for the qualification based on: LEAD DATA: ${JSON.stringify(lead)} and RESEARCH: ${research}. Context: BILDIT (commerce / visual experience / mobile apps for retailers).`
  })
  return object
}

export async function writeEmail(research: string, qualification: Qualification): Promise<string> {
  const { text } = await generateText({
    model: leadModel,
    prompt: `Write a short, professional first reply for a BILDIT sales or success conversation for a ${qualification.category} lead. Use the research: ${JSON.stringify(research)}. Do not make unverifiable claims.`
  })
  return text
}

/**
 * Outbound email after Slack approval (wire to Resend, SendGrid, etc.).
 */
export async function sendEmail(_message: string): Promise<void> {
  void _message
  // implement with your transactional email provider
}

export async function humanFeedback(
  lead: InboundLead,
  research: string,
  draftResponse: string,
  qualification: Qualification
) {
  const text =
    `*New BILDIT lead*\n` +
    `*Source:* ${lead.source}\n` +
    `*From:* ${lead.name} <${lead.email}>\n` +
    `*Category:* ${qualification.category}\n` +
    `*Reason:* ${qualification.reason}\n\n` +
    `*Research (excerpt):*\n${research.slice(0, 500)}…\n\n` +
    `*Draft reply (review in thread):*\n${draftResponse.slice(0, 1500)}`

  const slackChannel = process.env.SLACK_CHANNEL_ID || ''
  return await sendSlackMessageWithButtons(slackChannel, text)
}

const fetchUrl = tool({
  description: 'Return visible text from a public URL as Markdown.',
  inputSchema: z.object({
    url: z.string().describe('Absolute URL, including http:// or https://')
  }),
  execute: async ({ url }) => {
    if (!isExaConfigured()) {
      return 'URL fetch is not available (EXA_API_KEY not set).'
    }
    const exa = getExa()
    return await exa.getContents(url, { text: true })
  }
})

const crmSearch = tool({
  description: 'Search internal CRM for opportunities by company name (placeholder).',
  inputSchema: z.object({
    name: z.string().describe('Company or account name to search for')
  }),
  execute: async () => [] as const
})

const techStackAnalysis = tool({
  description: 'Return tech stack analysis for a domain (placeholder).',
  inputSchema: z.object({ domain: z.string() }),
  execute: async () => ({ note: 'Not implemented — add your Wappalyzer, BuiltWith, or internal data source.' })
})

const search = tool({
  description: 'Search the web for information about a company, product, or person.',
  inputSchema: z.object({
    keywords: z.string().describe('Entity to search (e.g. company name)'),
    resultCategory: z
      .enum(['company', 'research paper', 'news', 'pdf', 'personal site', 'financial report', 'people'])
      .describe('The category of the result to prefer (Exa-supported categories)')
  }),
  execute: async ({ keywords, resultCategory }) => {
    if (!isExaConfigured()) {
      return 'Web search is not available (set EXA_API_KEY for Exa search).'
    }
    const exa = getExa()
    return await exa.searchAndContents(keywords, {
      numResults: 2,
      type: 'keyword',
      category: resultCategory,
      summary: true
    })
  }
})

const queryKnowledgeBase = tool({
  description: 'Query an internal knowledge base (placeholder).',
  inputSchema: z.object({ query: z.string() }),
  execute: async () => 'Not configured: connect turbopuffer, PG vector, or your docs store in lib/lead/services.ts'
})

/**
 * Autonomous research pass over the normalized lead.
 */
export const researchAgent = new ToolLoopAgent({
  model: leadModel,
  instructions: `You are a BILDIT business researcher. Given lead form data, find credible public information: company, product, e‑commerce, mobile apps, tech stack, and news. 
Use the tools. Synthesize a concise report for sales — no speculation beyond sources.`,
  tools: {
    search,
    queryKnowledgeBase,
    fetchUrl,
    crmSearch,
    techStackAnalysis
  },
  stopWhen: [stepCountIs(20)]
})
