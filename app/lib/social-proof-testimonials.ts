/** Customer quotes aligned with bildit.co/pricing — "What Our Customers Say". */
export type SocialProofTestimonial = {
  name: string
  company: string
  content: string
}

export const SOCIAL_PROOF_TESTIMONIALS: SocialProofTestimonial[] = [
  {
    name: 'Toni Montgomery',
    company: 'Belk',
    content:
      "I don't necessarily have all developers on my team. And so we need tools that I can teach anyone on my team to use. … We actually just had someone start and they pretty much had her up to speed in I would say about two weeks. She's pretty much doing the building on her own now."
  },
  {
    name: 'Erik Cruz Casco',
    company: 'El Palacio de Hierro',
    content:
      "It's a great CMS to make quick changes … We can make a change immediately. And it's reflected immediately. … my team or I could change something without an IT team or developer, we basically publish it and it's done."
  },
  {
    name: 'Katie Woodward',
    company: 'Beacon',
    content:
      "If you're doing things at literally times 100, having those code snippets really is helpful. It just helps us improve efficiency. If you're doing hundreds of pieces of content, using code snippets keeps things moving quickly and consistently."
  }
]
