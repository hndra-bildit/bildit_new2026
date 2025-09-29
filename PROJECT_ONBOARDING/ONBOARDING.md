# BILDIT Web (Next.js) – Developer Onboarding
> kevin@bildit.co   
> Mon 2025-09-29
> 
> Project: bildit-web-nextjs (Next.js 15 / React 19)  
> Local dev port: 5002

Welcome! This guide gets you running locally fast, explains the project layout, and shows you how to ship changes and deploy exactly like we do.

## Prerequisites

- macOS (preferred) or Linux
- Git access to this repository
- Terminal with `zsh` or `bash`
- Node Version Manager (`nvm`) installed
- Yarn Classic (v1) – we use Yarn only

## Environment Setup (Exact Versions)

⚠️ Use these versions for a frictionless setup.

1) Install and select Node.js:

```bash
# Next.js 15 + React 19 works well with Node 18+
nvm install 18
nvm use 18
node -v   # should print v18.x
```

2) Use Yarn 1.x (project is pinned):

```bash
npm i -g yarn@1.22.22
yarn -v    # 1.22.x
```

3) Never mix package managers:

- Do not run `npm install`. We commit a `yarn.lock` and the repo declares `"packageManager": "yarn@1.22.22"`.

## Environment Variables

The site runs without secrets, but some CMS-powered areas (banners) use these optional vars:

```
# .env.local (create at repo root)
BILDIT_API_URL=https://api.bildit.co
BILDIT_API_ENDPOINT=/banners
BILDIT_API_KEY=your-key-here
```

Notes:
- If `BILDIT_API_*` are missing, the code logs a warning and falls back safely.
- We do not require any Vercel env locally to boot the site.

## Local Development

1) Install deps

```bash
cd /Users/kevingarriott/Documents/BILDIT/0_projects/0_BILDIT-Next_js
yarn install
```

2) Run the dev server (Turbopack, port 5002)

```bash
yarn dev
# open http://localhost:5002
```

3) Production build locally (optional)

```bash
yarn build
yarn start  # serves on http://localhost:5002
```

Optional: If you have the internal CMS companion app checked out beside this repo, you can run the admin script injector:

```bash
# from this repo
yarn dev:admin   # expects ../bildit-web-script
```

## Project Structure (What Matters)

- `app/` – Next.js App Router pages and layouts
  - `app/layout.tsx` – global providers, header/footer, AI pixel, and CMS script injection
  - `app/page.tsx` – home page
  - `app/**/page.tsx` – route-based pages (create new routes here)
- `app/components/` – reusable UI components for marketing pages
- `services/` – server functions for CMS data (e.g., `bildit.ts`, `heroImageBanner.ts`)
- `lib/` – utilities (blog helpers, safelist)
- `public/` – static assets (images, fonts, scripts)
- `app/api/` – Next.js route handlers (server-side APIs)
- `scripts/` – local helpers (e.g., `watch-build.js`)
- `bitbucket-pipelines.yml` – CI deploy via Vercel CLI (Node 20)
- `next.config.ts` – Next config (port is passed via CLI in scripts)

## UI & Styling

- The current codebase predominantly uses utility classes in JSX and global CSS.
- For new UI, prefer styled-components for complex sections (as requested). If needed:

```bash
yarn add styled-components
yarn add -D @types/styled-components
```

Then enable it in `next.config.ts` if not already:

```ts
// next.config.ts
const nextConfig = {
  compiler: { styledComponents: true }
}
export default nextConfig
```

Keep components small and composed. For simple one-off layout wrappers, utility classes are fine.

## From Figma To Page (Typical Flow)

1) Create a new route folder and page file:

```bash
# Example: new landing page at /storefront
mkdir -p app/storefront
touch app/storefront/page.tsx
```

2) Implement the page using components under `app/components/` and styled-components for complex sections.

3) Add any server data needs via functions in `services/` (server-only).

4) Add assets to `public/images/...` and reference with `/images/...` paths.

5) Verify on `http://localhost:5002/storefront`.

## Quality Gates

```bash
yarn lint
yarn format
```

TypeScript: we use strict TS across server and client components; keep props and return types explicit on exported APIs.

## Deployment (Like We Do)

Continuous Deployment via Bitbucket Pipelines uses Vercel CLI with Node 20:

- `custom:deploy-dev` → Preview
- `custom:deploy-stage` → Preview with `BRANCH=staging` meta
- `branches:master` → Production

To deploy from your machine (useful for testing):

```bash
npm i -g vercel
vercel login
vercel link       # run once in this repo
vercel pull --yes --environment=preview
vercel build
vercel deploy --prebuilt --yes
```

For prod:

```bash
vercel pull --yes --environment=production
vercel build
vercel deploy --prebuilt --prod --yes
```

Make sure the Vercel project has the same `BILDIT_API_*` vars configured under the appropriate environment.

## Quick Checks

- Home loads at `http://localhost:5002`
- Header/Footer render from `app/components/`
- No 500s in the terminal from `getBanners` when vars are present
- `yarn build` completes without errors

## Troubleshooting

- Wrong Node: `node -v` must be 20.x. If not: `nvm use 20`.
- Mixed package managers: delete `node_modules` and only run `yarn install`.
- Port in use: change with `PORT=5003 yarn dev` or stop the process on 5002.
- Missing banners: add `.env.local` with `BILDIT_API_*` or proceed without; the app falls back safely.

## Quick Reference

- `yarn dev` – start Next.js dev on 5002 with Turbopack
- `yarn dev:admin` – run the admin script injector (requires bildit-web-script repo)
- `yarn dev:all` – run both frontend and admin script concurrently
- `yarn dev:with-watcher` – run dev server with file watcher
- `yarn watch:build` – watch for build changes
- `yarn build` – create production build
- `yarn start` – serve production build on port 5002
- `yarn lint` – run ESLint
- `yarn format` – auto-format with Prettier
- `yarn check` – check formatting without changing files
- Key files: `app/layout.tsx`, `services/bildit.ts`, `services/heroImageBanner.ts`

