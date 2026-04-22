/**
 * Backs up originals under public/images/archive/public-originals-<date>/
 * (mirroring paths from public/), then losslessly / high-quality recompresses
 * PNG, JPEG (sharp) and animated GIFs (gifsicle -O3).
 * WebP is skipped — re-encoding often increases size vs export tooling.
 */
const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')

const sharp = require('sharp')

const ROOT = path.join(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const DATE_TAG = new Date().toISOString().slice(0, 10)
const ARCHIVE_BASE = path.join(PUBLIC, 'images', 'archive', `public-originals-${DATE_TAG}`)

const EXT_RE = /\.(png|jpe?g|gif)$/i

function shouldSkipDir(name) {
  return name === 'archive' || name === 'node_modules'
}

function collectImages(dir, out) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (shouldSkipDir(ent.name)) continue
      collectImages(full, out)
    } else if (EXT_RE.test(ent.name)) {
      out.push(full)
    }
  }
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function copyOriginal(srcAbs, relFromPublic) {
  const dest = path.join(ARCHIVE_BASE, relFromPublic)
  ensureDir(path.dirname(dest))
  fs.copyFileSync(srcAbs, dest)
}

async function optimizeOne(absPath) {
  const rel = path.relative(PUBLIC, absPath)
  const ext = path.extname(absPath).toLowerCase()
  const before = fs.statSync(absPath).size

  const tmp = `${absPath}.opt-tmp${ext}`

  try {
    if (ext === '.png') {
      await sharp(absPath)
        .png({
          compressionLevel: 9,
          adaptiveFiltering: true,
          effort: 10
        })
        .toFile(tmp)
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(absPath)
        .jpeg({
          quality: 93,
          mozjpeg: true,
          chromaSubsampling: '4:4:4'
        })
        .toFile(tmp)
    } else if (ext === '.gif') {
      execFileSync('gifsicle', ['-O3', '--no-warnings', absPath, '-o', tmp], { stdio: 'pipe' })
    } else {
      return { rel, before, after: before, skipped: true }
    }

    const after = fs.statSync(tmp).size
    fs.renameSync(tmp, absPath)
    return { rel, before, after, skipped: false }
  } catch (e) {
    try {
      if (fs.existsSync(tmp)) fs.unlinkSync(tmp)
    } catch {
      /* ignore */
    }
    throw new Error(`${rel}: ${e.message}`)
  }
}

async function main() {
  const images = []
  collectImages(PUBLIC, images)
  images.sort()

  ensureDir(ARCHIVE_BASE)

  let saved = 0
  let grew = 0
  const rows = []

  for (const abs of images) {
    const rel = path.relative(PUBLIC, abs)
    copyOriginal(abs, rel)
    const r = await optimizeOne(abs)
    if (!r.skipped) {
      const delta = r.before - r.after
      if (delta > 0) saved += delta
      else grew += -delta
      rows.push(r)
    }
  }

  console.log(`Backed up ${images.length} files to:\n  ${ARCHIVE_BASE}\n`)
  for (const r of rows) {
    const pct = r.before > 0 ? (((r.before - r.after) / r.before) * 100).toFixed(1) : '0'
    console.log(`${r.rel}: ${(r.before / 1024).toFixed(0)} KiB -> ${(r.after / 1024).toFixed(0)} KiB (${pct}% smaller)`)
  }
  console.log(`\nTotal net: ${(saved - grew) / 1024 / 1024} MiB smaller (vs pre-optimize originals in archive)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
