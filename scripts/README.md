# Build Watcher Script

This script automatically watches the Visual Experience Engine workspace build directory and copies new `admin.js` files to the public scripts directory.

## What it does

1. **Monitors** the build directory: `~/Development/BILDIT/bildit-cms-workspace/apps/bildit-web-script/build/scripts`
2. **Copies** new `admin.js` files to `public/scripts/` with timestamp-based filenames
3. **Updates** `app/layout.tsx` to use the latest admin.js file
4. **Cleans up** old files (keeps only the 5 most recent)

## Usage

### Install dependencies
```bash
pnpm install
```

### Run the watcher
```bash
# Run watcher only
pnpm watch:build

# Run Next.js dev server with watcher
pnpm dev:with-watcher

# Run all services (Next.js + admin + watcher)
pnpm dev:all
```

### Manual usage
```bash
node scripts/watch-build.js
```

## Configuration

The script is configured to:
- Watch: `~/Development/BILDIT/bildit-cms-workspace/apps/bildit-web-script/build/scripts`
- Target: `public/scripts/`
- File pattern: `admin.js`
- Keep: 5 most recent files

## Output

When a new `admin.js` file is detected:
```
📄 New file detected: /path/to/admin.js
✅ Copied admin.js to admin.1703123456789.js
📝 Updated layout.tsx to use admin.1703123456789.js
🗑️  Deleted old file: admin.1703123456788.js
```

## Stopping the watcher

Press `Ctrl+C` to stop the watcher gracefully. 