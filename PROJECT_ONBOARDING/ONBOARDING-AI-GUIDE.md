# AI Onboarding Guide for BILDIT Web (Next.js)

> kevin@bildit.co  
> Mon 2025-09-29

## Instructions for the AI Assistant

When a developer says "Teach me this project", follow this step-by-step path. Use real file paths and line-number anchored references where possible. Always verify they can run the app locally first.

### Initial Greeting

1. Confirm they completed setup in `PROJECT_ONBOARDING/ONBOARDING.md` and can open `http://localhost:5002`.
2. Explain there are 8 short sections. Ask if they are resuming.
3. Remind: We use Yarn 1 and Node 18+. No npm commands.

### Teaching Style

- Be specific: quote file paths, components, and exact code to add.
- Show concise code snippets and where to paste them.
- Ask them to confirm results in the browser or terminal.
- Generate lightweight docs as they progress.

---

## Section 1: Architecture Overview

Goal: Understand routing, components, and server utilities.

Steps:

1. Show root layout and global providers.
   - Open `app/layout.tsx`. Point out providers, header/footer, and AI pixel.
   - Locate the `getInitialData` function and explain it fetches CMS banners via `services/bildit.ts`.

2. Show page routing.
   - Open `app/page.tsx` (home) and one subpage like `app/commerce_suite/page.tsx`.
   - Explain: every `app/<route>/page.tsx` becomes a route.

Exercise: Add a console log in `app/layout.tsx` within the `getInitialData` try block, after banners load:

```ts
console.log('[ONBOARDING] Banners loaded count:', banners.length)
```

Verify: Run `yarn dev`, refresh the browser, and confirm the message appears in the server terminal.

Generate: `docs/how-tos/01-architecture.md`

---

## Section 2: Services and Env Vars

Goal: Understand server-only utilities and optional environment variables.

Steps:

1. Open `services/bildit.ts` and review `getBanners`.
   - Note `process.env.BILDIT_API_URL`, `BILDIT_API_ENDPOINT`, `BILDIT_API_KEY`.
   - Explain safe fallback behavior when env vars are missing.

2. Create `.env.local` (if not present) and add placeholders.

Exercise: Add a dev-only guard log when vars are missing:

```ts
if (!process.env.BILDIT_API_URL) {
  console.warn('[ONBOARDING] Missing BILDIT_API_URL; using fallback banner config')
}
```

Generate: `docs/how-tos/02-services-env.md`

---

## Section 3: Components Library

Goal: Learn how to use and extend components under `app/components/`.

Steps:

1. Open `app/components/HeroImageBanner.tsx` (and related `HeroImageBannerConfig.tsx`).
2. Open a simpler component like `app/components/HeadingOne.tsx` and observe prop patterns.

Exercise: Create a small styled-component wrapper and use it on the home page:

1. Add a file `app/components/Section.tsx`:

```tsx
'use client'

import styled from 'styled-components'

export const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 24px;
`
```

2. Import and wrap a block in `app/page.tsx`.

Generate: `docs/how-tos/03-components.md`

---

## Section 4: Creating a New Page from Figma

Goal: Build a route from a design.

Steps:

1. Create `app/storefront/page.tsx` (if not already present) and scaffold the layout.
2. Use components from `app/components/` and the `Section` styled wrapper.
3. Add images under `public/images/store_front/` and reference via `/images/store_front/...`.

Exercise: Implement a hero section with heading + subheading mirroring the design. Confirm at `http://localhost:5002/storefront`.

Generate: `docs/how-tos/04-new-page-from-figma.md`

---

## Section 5: Data Fetching on the Server

Goal: Use server functions inside App Router.

Steps:

1. In any `page.tsx`, create an async server component and call `getHeroImageBanner('marketing', '/')`.
2. Render returned content or fallback UI.

Exercise: In `app/bildit_cms/page.tsx`, add a server call for a banner and log its id.

Generate: `docs/how-tos/05-server-data.md`

---

## Section 6: Quality & Linting

Goal: Keep code consistent and green.

Steps:

1. Run `yarn lint` and fix any issues.
2. Run `yarn format` before commits.
3. Review `eslint.config.mjs` rules (Prettier integrated; import sorting).

Exercise: Introduce one unsorted import, run lint, and fix automatically.

Generate: `docs/how-tos/06-quality.md`

---

## Section 7: Local Production Check

Goal: Validate a production build locally.

Steps:

1. Run `yarn build`.
2. Run `yarn start` and browse a few routes.

Exercise: Confirm no server errors when navigating pages that use `getBanners`.

Generate: `docs/how-tos/07-prod-check.md`

---

## Section 8: Deployment via Vercel CLI

Goal: Practice the same deploy flow as CI.

Steps:

1. Install Vercel CLI: `npm i -g vercel`
2. `vercel pull --yes --environment=preview`
3. `vercel build` then `vercel deploy --prebuilt --yes`
4. For production: use `--environment=production` and `--prod`.

Exercise: Do a preview deploy from a feature branch. Share the preview URL.

Generate: `docs/how-tos/08-deploy.md`

---

## Troubleshooting

- Port 5002 busy: `PORT=5003 yarn dev` or kill the process.
- Node mismatch: `nvm use 18`.
- Mixed managers: delete `node_modules` and rerun `yarn install`.
- Missing banners: add `.env.local` with `BILDIT_API_*` or continue with fallback.

## Completion

Congratulate the developer, summarize what they learned, and point them to the generated docs in `docs/how-tos/`.
