# 🛠️ Next.js + Vercel CLI Preview Deployment Cheat Sheet
> kevin@bildit.co   
> Tue 2025-05-13 11:53:30

## 🚀 Deploying a Preview Build

```bash
# Build your Next.js project locally
vercel build

# Deploy the prebuilt project as a preview deployment
vercel deploy --prebuilt
```

- `vercel build`: Generates the production-ready build locally.
- `vercel deploy --prebuilt`: Deploys the locally built output without rebuilding on Vercel's servers.

## ⚙️ Useful Flags and Options

- `--yes`: Skips all interactive prompts, using default options.
- `--token <token>`: Authenticate using a Vercel token (useful in CI/CD).
- `--scope <team>`: Specify the team scope for the deployment.
- `--env KEY=VALUE`: Set environment variables for the deployment.
- `--build-env KEY=VALUE`: Set environment variables for the build step.
- `--archive=tgz`: Compress the deployment into a `.tgz` archive to optimize upload.
- `--meta KEY=VALUE`: Attach metadata to the deployment for filtering and organization.

## 🧪 Example: Deploy with Environment Variables and Metadata

```bash
vercel build

vercel deploy --prebuilt \
  --yes \
  --env API_URL=https://api.example.com \
  --meta branch=feature-xyz \
  --token $VERCEL_TOKEN
```

## 🔁 Automating with GitHub Actions

```yaml
name: Deploy Preview to Vercel

on:
  push:
    branches:
      - main
      - 'feature/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Pull Vercel Environment Information
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build Project Artifacts
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Vercel
        run: vercel deploy --prebuilt --yes --token=${{ secrets.VERCEL_TOKEN }}
```

## 🔗 Aliasing a Preview Deployment to a Custom Domain

```bash
# Deploy and capture the deployment URL
url=$(vercel deploy --prebuilt --yes --token $VERCEL_TOKEN)

# Alias the deployment to a custom domain
vercel alias $url preview.example.com --token $VERCEL_TOKEN
```

## 🧹 Cleaning Up Old Deployments

```bash
# List all deployments
vercel ls

# Remove a specific deployment by ID or URL
vercel remove <deployment-id-or-url> --yes
```

## 📚 References

- Vercel CLI Documentation: [https://vercel.com/docs/cli](https://vercel.com/docs/cli)
- Vercel CLI Deploy Command: [https://vercel.com/docs/cli/deploy](https://vercel.com/docs/cli/deploy)
