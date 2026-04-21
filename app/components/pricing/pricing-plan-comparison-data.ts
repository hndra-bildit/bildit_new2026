export type PlanKey = 'sandbox' | 'growth' | 'multichannel' | 'enterprise'

export type CellValue = { kind: 'unlimited' } | { kind: 'check' } | { kind: 'dash' } | { kind: 'text'; value: string }

export type ComparisonRow = {
  feature: string
  newBadge?: boolean
} & Record<PlanKey, CellValue>

export type ComparisonGroup = {
  title: string
  rows: ComparisonRow[]
}

export const PRICING_PLAN_COMPARISON_GROUPS: ComparisonGroup[] = [
  {
    title: 'Platform',
    rows: [
      {
        feature: 'Users',
        sandbox: { kind: 'text', value: '1' },
        growth: { kind: 'text', value: '20' },
        multichannel: { kind: 'text', value: '30' },
        enterprise: { kind: 'text', value: 'Unlimited' }
      },
      {
        feature: 'Channels',
        sandbox: { kind: 'text', value: '1 Channel (Web Site or Mobile App)' },
        growth: { kind: 'text', value: '1 Channel (Mobile App or Web Site)' },
        multichannel: { kind: 'text', value: '2 Channels (Mobile App and Web Site)' },
        enterprise: { kind: 'text', value: 'Unlimited Channels' }
      },
      {
        feature: 'API calls',
        sandbox: { kind: 'dash' },
        growth: { kind: 'text', value: '1M API Calls' },
        multichannel: { kind: 'text', value: '2M API Calls' },
        enterprise: { kind: 'text', value: 'Custom' }
      },
      {
        feature: 'Traffic & bandwidth',
        sandbox: { kind: 'dash' },
        growth: { kind: 'text', value: '100 GB Traffic' },
        multichannel: { kind: 'text', value: '200 GB Bandwidth' },
        enterprise: { kind: 'text', value: 'Custom Traffic, Bandwidth, Requests, Traffic' }
      },
      {
        feature: 'Roles',
        sandbox: { kind: 'dash' },
        growth: { kind: 'text', value: 'Admin, Developer, User Roles' },
        multichannel: { kind: 'text', value: 'Admin, Developer, User Roles' },
        enterprise: { kind: 'dash' }
      },
      {
        feature: 'Support',
        sandbox: { kind: 'text', value: 'Community Support' },
        growth: { kind: 'text', value: 'Email Support' },
        multichannel: { kind: 'text', value: 'Email Support' },
        enterprise: { kind: 'dash' }
      }
    ]
  },
  {
    title: 'Enterprise',
    rows: [
      {
        feature: 'Discounted Implementation',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: '24 Hour Support',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: 'Discounted Rate for Services',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: 'All of the Features of Multi-channel',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: 'SSO',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: 'Dedicated Customer Success Manager',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: 'White Glove Onboarding and Training',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: 'SLAs',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      },
      {
        feature: 'Invoiced Billing',
        sandbox: { kind: 'dash' },
        growth: { kind: 'dash' },
        multichannel: { kind: 'dash' },
        enterprise: { kind: 'check' }
      }
    ]
  }
]
