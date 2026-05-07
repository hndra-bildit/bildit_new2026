# BILDIT Web (Next.js)

> Next.js 15 / React 19 / Tailwind CSS 4  
> Local dev port: 5002

A modern web application built with Next.js App Router, featuring server-side rendering, API integrations, and automated deployments to Vercel.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Project Structure](#project-structure)
- [UI & Styling](#ui--styling)
- [From Figma To Page](#from-figma-to-page-typical-flow)
- [Quality Gates](#quality-gates)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Quick Reference](#quick-reference)

## Prerequisites

- macOS (preferred) or Linux
- Git access to this repository
- Terminal with `zsh` or `bash`
- Node Version Manager (`nvm`) installed
- Yarn Classic (v1) – we use Yarn only

## Environment Setup

⚠️ Use these versions for a frictionless setup.

### 1. Install and select Node.js

```bash
# Next.js 15 + React 19 works well with Node 18+
nvm install 18
nvm use 18
node -v   # should print v18.x
```

### 2. Use Yarn 1.x (project is pinned)

```bash
npm i -g yarn@1.22.22
yarn -v    # 1.22.x
```

### 3. Never mix package managers

- Do not run `npm install`. We commit a `yarn.lock` and the repo declares `"packageManager": "yarn@1.22.22"`.

## Environment Variables

The site runs without secrets, but some CMS-powered areas (banners) use these optional vars.

Create a `.env.local` file at the repository root:

```bash
# .env.local
BILDIT_API_URL=https://admin-staging.bildit.co
BILDIT_API_ENDPOINT=remote-webbanners_v1_1
BILDIT_API_KEY=your-key-here

# CMS companion script directory (optional, for watch-build script)
CMS_COMPANION_SCRIPT_DIR=/path/to/bildit-web-script/build/static/js
```

**Notes:**
- If `BILDIT_API_*` variables are missing, the code logs a warning and falls back safely
- We do not require any Vercel env locally to boot the site
- Never commit `.env.local` – it's in `.gitignore`

## Local Development

### 1. Install dependencies

```bash
yarn install
```

### 2. Run the development server

```bash
yarn dev
# Opens on http://localhost:5002 (with Turbopack)
```

The page auto-updates as you edit files.

### 3. Test production build locally

```bash
yarn build
yarn start  # serves on http://localhost:5002
```

### Optional: Run with Admin Script

If you have the internal CMS companion app checked out beside this repo:

```bash
# Run frontend and admin script together
yarn dev:all

# Or run admin script separately
yarn dev:admin   # expects ../bildit-web-script

# Run with file watcher
yarn dev:with-watcher
```

## Project Structure

```
bildit-web-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Global layout, providers, header/footer
│   ├── page.tsx             # Home page
│   ├── components/          # Reusable UI components
│   ├── api/                 # Next.js API routes
│   └── **/page.tsx          # Route-based pages
├── lib/                      # Utilities (blog helpers, safelist)
├── utils/                    # Utility functions
├── public/                   # Static assets (images, fonts, scripts)
├── scripts/                  # Local helper scripts
│   └── watch-build.js       # File watcher
├── middleware.ts             # Next.js middleware
├── next.config.ts            # Next.js configuration
├── bitbucket-pipelines.yml   # CI/CD configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

### Key Files

- **`app/layout.tsx`** – Global providers, header/footer, AI pixel, and CMS script injection
- **`app/page.tsx`** – Home page
- **`middleware.ts`** – Request/response middleware
- **`next.config.ts`** – Next.js configuration (port is passed via CLI in scripts)

## UI & Styling

- **Tailwind CSS 4** with utility classes for most styling
- **Global CSS** for base styles and custom components
- **Styled-components** available for complex sections (optional)

### Using Styled-components (if needed)

The project supports styled-components. If you need to add it:

```bash
yarn add styled-components
yarn add -D @types/styled-components
```

Ensure it's enabled in `next.config.ts`:

```ts
// next.config.ts
const nextConfig = {
  compiler: { styledComponents: true }
}
export default nextConfig
```

**Best Practices:**
- Use Tailwind utility classes for simple layouts
- Use styled-components for complex, reusable components
- Keep components small and composed

## From Figma To Page (Typical Flow)

1. **Create a new route:**

```bash
# Example: new landing page at /storefront
mkdir -p app/storefront
touch app/storefront/page.tsx
```

2. **Implement the page:**
   - Use components from `app/components/`
   - Use styled-components for complex sections
   - Add TypeScript types for props and data

3. **Add server-side data:**
   - Create or use functions in `services/` (server-only)
   - Example: `services/bildit.ts` for CMS data

4. **Add static assets:**
   - Place in `public/images/...`
   - Reference with `/images/...` paths in code

5. **Test locally:**
   - Visit `http://localhost:5002/storefront`
   - Verify responsive design and functionality

## Quality Gates

### Linting

```bash
yarn lint
```

### Formatting

```bash
# Check formatting
yarn check

# Auto-format code
yarn format
```

### TypeScript

- We use strict TypeScript across server and client components
- Keep props and return types explicit on exported APIs
- No `any` types – use proper typing or `unknown` with type guards

### Before Committing

1. Run `yarn lint` and fix any errors
2. Run `yarn format` to ensure consistent code style
3. Run `yarn build` to verify production build works
4. Test the feature in your browser

## Deployment

This project uses **Vercel** for hosting and **Bitbucket Pipelines** for continuous deployment.

### Automated Deployment (CI/CD)

Deployments are triggered automatically via Bitbucket Pipelines:

| Branch/Trigger | Environment | Command |
|---------------|-------------|---------|
| `master` branch | Production | Automatic on push |
| `custom:deploy-stage` | Staging (Preview) | Manual trigger |
| `custom:deploy-dev` | Development (Preview) | Manual trigger |

#### Pipeline Configuration

The pipeline uses Node 20 and Vercel CLI. See `bitbucket-pipelines.yml` for details.

**Required Bitbucket Pipeline Variables:**
- `VERCEL_TOKEN` – Vercel API token (set in Bitbucket repository settings)

### Manual Deployment

For testing deployments from your local machine:

#### First-time Setup

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Link this repository to Vercel project (run once)
vercel link
```

#### Deploy to Preview

```bash
# Pull environment config
vercel pull --yes --environment=preview

# Build the project
vercel build

# Deploy to preview
vercel deploy --prebuilt --yes
```

#### Deploy to Production

```bash
# Pull production environment config
vercel pull --yes --environment=production

# Build for production
vercel build

# Deploy to production
vercel deploy --prebuilt --prod --yes
```

### Environment Variables on Vercel

Configure the following environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables for each environment (Development, Preview, Production):

```
BILDIT_API_URL=https://admin-staging.bildit.co
BILDIT_API_ENDPOINT=remote-webbanners_v1_1
BILDIT_API_KEY=your-key-here
```

### Testing Production Builds Locally

Before deploying, always test the production build locally:

```bash
# Create production build
yarn build

# Start production server
yarn start

# Visit http://localhost:5002
```

**Verify:**
- All pages load without errors
- API integrations work correctly
- No console errors or warnings
- Images and assets load properly
- SEO meta tags are correct

### Deployment Checklist

Before deploying to production:

- [ ] All tests pass (`yarn lint`, `yarn format`)
- [ ] Production build succeeds (`yarn build`)
- [ ] Changes tested locally with production build (`yarn start`)
- [ ] Environment variables are configured on Vercel
- [ ] No sensitive data or API keys in code
- [ ] All images optimized and using Next.js Image component
- [ ] No console.log statements in production code
- [ ] Database migrations run (if applicable)
- [ ] External API integrations tested

### Rollback Procedure

If a deployment causes issues:

1. **Via Vercel Dashboard:**
   - Go to your project on Vercel
   - Click **Deployments** tab
   - Find the last working deployment
   - Click the three-dot menu → **Promote to Production**

2. **Via Git:**
   - Revert the problematic commit: `git revert <commit-hash>`
   - Push to master: `git push origin master`
   - Pipeline will auto-deploy the reverted version

3. **Via Vercel CLI:**
   ```bash
   # List recent deployments
   vercel list
   
   # Promote a specific deployment to production
   vercel promote <deployment-url>
   ```

## Troubleshooting

### Wrong Node Version

```bash
node -v   # Must be 18.x or 20.x
nvm use 18
```

### Mixed Package Managers

If you accidentally ran `npm install`:

```bash
rm -rf node_modules package-lock.json
yarn install
```

### Port Already in Use

```bash
# Use a different port
PORT=5003 yarn dev

# Or kill the process on port 5002
lsof -ti:5002 | xargs kill -9
```

### Missing Banners or API Errors

- Add `.env.local` with `BILDIT_API_*` variables
- Or proceed without them – the app falls back safely
- Check that the API URL is accessible

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
yarn install

# Try building again
yarn build
```

### TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit

# Update types
yarn add -D @types/node @types/react @types/react-dom
```

### Vercel Deployment Fails

1. Check Bitbucket Pipeline logs for errors
2. Verify `VERCEL_TOKEN` is set correctly in Bitbucket
3. Ensure environment variables are configured on Vercel
4. Try deploying manually to isolate the issue

## Quick Reference

### Development Commands

| Command | Description |
|---------|-------------|
| `yarn dev` | Start Next.js dev server on port 5002 with Turbopack |
| `yarn dev:admin` | Run admin script injector (requires bildit-web-script) |
| `yarn dev:all` | Run frontend and admin script concurrently |
| `yarn dev:with-watcher` | Run dev server with file watcher |
| `yarn watch:build` | Watch for build changes |
| `yarn build` | Create production build |
| `yarn start` | Serve production build on port 5002 |
| `yarn lint` | Run ESLint |
| `yarn format` | Auto-format with Prettier |
| `yarn check` | Check formatting without changing files |

### Important URLs

- **Local Development:** http://localhost:5002
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Bitbucket Repository:** https://bitbucket.org/bildit/bildit-nextjs-web-site/src/main/
- **Production Site:** https://bildit-web-nextjs.vercel.app/

### Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Need help?** Contact the development team for additional guides.

# bildit_new2026
