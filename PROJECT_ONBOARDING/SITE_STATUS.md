# BILDIT Next.js Site Status

> kevin@bildit.co  
> Last updated: September 29, 2025  
> Project: bildit-web-nextjs (Next.js 15 / React 19)

## Implemented Pages

The following pages are fully implemented and accessible on the production site:

| Page Route | Status | CMS Integration | Description |
|------------|--------|----------------|-------------|
| `/` | ✅ Complete | Yes | Home page with multiple content sections |
| `/bildit_cms` | ✅ Complete | Yes | BILDIT CMS product page with hero image demo |
| `/bildit_cms/hero-image-demo` | ✅ Complete | Yes | Interactive hero image demo page |
| `/commerce_suite` | ✅ Complete | Yes | Commerce Suite product page |
| `/comparison` | ✅ Complete | Yes | CMS comparison page |
| `/integration_partners` | ✅ Complete | Yes | Integration Partners page |
| `/pricing` | ✅ Complete | Yes | Pricing page |
| `/storefront` | ✅ Complete | Yes | Storefront product page |
| `/tech_partners` | ✅ Complete | Yes | Tech Partners page |
| `/blog/category/[category]` | ✅ Complete | Yes | Blog category pages (marketing, design, development) |
| `/blog/[postId]` | ✅ Complete | Yes | Individual blog post pages |

**Note**: The direct `/blog` route returns a 404, but category pages and individual posts work correctly.

## CMS Content Structure

Each page has designated content slots that can be populated via the BILDIT CMS:

### Global Components
- `header` - Site navigation
- `footer` - Site footer with links, contact info, and subscription form

### Page-Specific Content Slots
- **Home**: `home-title`, `home-content`, `home-content-belk-results`
- **CMS**: `cms-title`, `cms-content`, `cms-content-five`
- **Commerce Suite**: `commerce-suite-title`, `commerce-suite-content`
- **Comparison**: `comparison-title`, `comparison-content`
- **Integration Partners**: `integration-partners-title`, `integration-partners-content`
- **Pricing**: `pricing-title`, `pricing-content`
- **Storefront**: `storefront-title`, `storefront-content`, `storefront-content-fourth`
- **Tech Partners**: `tech-partners-title`, `tech-partners-content`
- **Blog**: `blog-main-title`, `blog-main-content`, `blog-single-title`, `blog-single-content`

### Generic Slots
- `slot1`, `slot2` - Generic slots used across multiple pages

## Content Management

Content is managed through the BILDIT CMS, which stores data in Firebase:

- **Firebase Project**: `compilepoc-2d379`
- **Database Path**: `/apps/bildit-nextjs-website`
- **Content Collections**:
  - `banners` - Main content blocks
  - `bannerMeta` - Configuration for slots and locations

## Development Status

The site is fully functional and can be run locally even without CMS connection:

- All pages render with fallback content when CMS is unavailable
- Components use a consistent styling approach with utility classes
- The site follows Next.js App Router conventions
- Pages match the Figma designs

## Next Steps for New Development

When creating new pages:

1. Create a new directory in `/app` with a `page.tsx` file
2. Use the `SlotPlaceholder` component to define content areas
3. Register new slots in the CMS if needed
4. Add any custom components to `/app/components`
5. Follow the existing patterns for styling and layout

## Deployment

The site is deployed on Vercel:
- Production URL: https://bildit-web-nextjs.vercel.app/
- Deployment is handled via Bitbucket Pipelines using Vercel CLI
