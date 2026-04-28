export type NoLimitationsFeatureCard = {
  id: string
  imageAlt: string
  title: string
  description: string
}

/**
 * Feature carousel copy for “No Limitations” (Figma 4978:15763 — card titles align with design;
 * body copy is final marketing text, not design lorem).
 */
export const NO_LIMITATIONS_FEATURE_CARDS: readonly NoLimitationsFeatureCard[] = [
  {
    id: 'advanced-scheduling',
    imageAlt: 'Advanced scheduling: campaign and content timing controls',
    title: 'Advanced Scheduling',
    description: 'Plan launches, promos, and experience updates on your calendar—no deploys or engineering queue.'
  },
  {
    id: 'customizable-templates',
    imageAlt: 'Customizable page and block templates in the visual editor',
    title: 'Customizable Templates',
    description: 'On-brand layouts you can tune to your design system—structure and content, without new code paths.'
  },
  {
    id: 'inline-editing',
    imageAlt: 'Inline text and layout editing in the live storefront preview',
    title: 'Inline Editing',
    description: 'Edit copy and structure where merchandisers already think—in context, with instant feedback.'
  },
  {
    id: 'cross-channel',
    imageAlt: 'Consistent product story across web and other surfaces',
    title: 'Cross-Channel Content',
    description: 'One source of truth for experiences that stay consistent wherever customers find you.'
  }
] as const
