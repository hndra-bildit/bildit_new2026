## BILDIT.co Dynamic Menu & CMS Pages - Handoff Guide

This repo now includes dynamic top navigation and CMS-driven pages using `@bildit-platform/nextjs@0.4.37`.

### What shipped in this branch
- `app/components/Navigation.tsx`: Fetches published pages and renders menu links. Supports optional `NEXT_PUBLIC_BILDIT_API_BASE`.
- `app/layout.tsx`: Injects `Navigation` globally.
- `app/pages/[slug]/page.tsx`: Dynamic route that renders a CMS page by slug. Uses Next.js 15 Promise-based params, falls back to `getContent(contentId)` if detail lacks HTML, ISR set to 60s.
- `eslint.config.mjs`: Windows-friendly EOL to avoid CRLF failures.

### Environment variables
Add these in both local `.env.local` and Vercel (Preview + Production):

```
NEXT_PUBLIC_BILDIT_API_KEY=<your_app_api_key>
# Only if not using the default prod base:
NEXT_PUBLIC_BILDIT_API_BASE=https://<region>-<project-id>.cloudfunctions.net
```

Notes:
- Default production base is `https://us-east1-bilditcms.cloudfunctions.net`.
- Restart local dev after editing `.env.local`.

### CMS steps (how to add pages)
1) Contents → Create a “Custom Code” item (paste HTML) → Save + Publish.
2) Pages → New Page → set Title and Slug (e.g., `about-us`) → select Linked Content → Publish.
3) The page appears in the top menu and renders at `/pages/<slug>`.

### Local development
```
yarn dev
``` 
Visit:
- Menu: appears when at least one page is published.
- Page: `http://localhost:5002/pages/<slug>`.

### Production / Preview (Vercel)
1) Merge PR → Vercel deploys.
2) In Vercel Project Settings → Environment Variables: set values listed above; redeploy if updated.
3) Behavior after deploy:
   - Menu updates immediately on publish (client-side fetch).
   - Page routes render on-demand and cache via ISR (allow ~60s for changes).

### Debugging 404s quickly
- Sanity check endpoints in a browser:
  - List pages: `<API_BASE>/remote-pages?key=<API_KEY>`
  - Page detail: `<API_BASE>/remote-page?key=<API_KEY>&slug=<slug>`
- If 404:
  - Ensure Page is Published.
  - Ensure Linked Content is selected and Published.
  - Confirm slug matches exactly.
  - Verify `NEXT_PUBLIC_BILDIT_API_BASE` points to the correct functions project.

### Acceptance criteria
- Publishing a new CMS page adds it to the menu without redeploys.
- `/pages/<slug>` renders the linked content’s HTML.
- Unpublishing removes it from the menu and returns 404 for the route.

### Follow-ups (optional)
- Migrate legacy banners to the SDK to remove `BILDIT_API_URL` build logs.
- Add simple error UI for the menu (instead of silent fail) if desired.


