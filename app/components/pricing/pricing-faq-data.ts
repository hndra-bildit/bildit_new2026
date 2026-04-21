export const PRICING_FAQ_SALES_URL = 'https://meetings.hubspot.com/matt1792?uuid=14da6ae5-6b22-4d09-9edb-6ed350c2e20a'

export type PricingFaqEntry = {
  question: string
  answer: string
}

export const PRICING_FAQ_ENTRIES: PricingFaqEntry[] = [
  {
    question: 'Is there a free trial?',
    answer:
      'Yes. Every plan starts with a free trial. No credit card required. You can publish your first experience and see BILDIT in action before committing to a plan.'
  },
  {
    question: 'How does usage-based billing work?',
    answer:
      'Plans include generous platform allowances. If you grow beyond included usage, additional usage is metered and billed in arrears so you only pay for what you use. Your account dashboard shows current usage and estimates.'
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Yes. You can move between plans as your needs change. Upgrades take effect immediately; downgrades are scheduled according to your billing period so there are no surprise interruptions.'
  },
  {
    question: 'What does the 10% annual discount include?',
    answer:
      'When you commit to annual billing on eligible plans, we apply a 10% discount compared to month-to-month pricing. The discount applies to the subscription portion of your invoice for that term.'
  },
  {
    question: 'Do you offer discounts for agencies or partners?',
    answer:
      'We work with agency and technology partners on tailored programs. Contact our sales team to discuss volume, referral, or partner pricing that fits how you deliver work for clients.'
  },
  {
    question: "What's included in onboarding?",
    answer:
      'Onboarding includes guided setup, best-practice training for your team, and hands-on support to connect your first channels. Higher tiers add deeper solution design and ongoing success checkpoints.'
  }
]
