/**
 * Renames files and directories under public/ (excluding images/archive) to
 * lowercase kebab-case. Writes scripts/public-asset-rename-map.json for reference.
 */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

/** Two-step rename for case-only changes on case-insensitive volumes. */
function renamePathSafe(fromAbs, toAbs) {
  if (fromAbs === toAbs) return
  if (!fs.existsSync(fromAbs)) return
  const dir = path.dirname(fromAbs)
  const tmp = path.join(dir, `.kebab-rename-${crypto.randomBytes(8).toString('hex')}${path.extname(fromAbs) || '.dir'}`)
  fs.renameSync(fromAbs, tmp)
  fs.renameSync(tmp, toAbs)
}

const ROOT = path.join(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')

/** Only these trees contain marketing images (exclude fonts, videos, etc.). */
const IMAGE_ROOTS = [
  'images',
  'mobile-app-storefront',
  'visual-experience-engine',
  'home-early-access',
  'home-everything',
  'home-integrations',
  'home-no-limitations',
  'home-post-faq-cta',
  'home-speed',
  'home-workflow'
].map((p) => path.join(PUBLIC, p))

function toKebabBase(base) {
  let s = base
    .replace(/_/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/[\s]+/g, '-')
    .toLowerCase()
  return s.replace(/-+/g, '-').replace(/^-|-$/g, '')
}

function toKebabFileName(name) {
  const ext = path.extname(name)
  const base = path.basename(name, ext)
  return toKebabBase(base) + ext.toLowerCase()
}

function toKebabDirName(name) {
  return toKebabBase(name)
}

function isUnderArchive(abs) {
  const rel = path.relative(PUBLIC, abs)
  return rel.startsWith('images/archive')
}

function shouldSkipArchiveEntry(parentAbs, name) {
  return name === 'archive' && parentAbs === path.join(PUBLIC, 'images')
}

function collectDirs() {
  const dirs = []
  function walk(d) {
    if (!fs.existsSync(d)) return
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      if (shouldSkipArchiveEntry(d, ent.name)) continue
      const full = path.join(d, ent.name)
      if (!ent.isDirectory()) continue
      if (isUnderArchive(full)) continue
      walk(full)
      dirs.push(full)
    }
  }
  for (const root of IMAGE_ROOTS) walk(root)
  return dirs.sort((a, b) => b.split(path.sep).length - a.split(path.sep).length)
}

function collectFiles() {
  const files = []
  function walk(d) {
    if (!fs.existsSync(d)) return
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      if (shouldSkipArchiveEntry(d, ent.name)) continue
      const full = path.join(d, ent.name)
      if (isUnderArchive(full)) continue
      if (ent.isDirectory()) walk(full)
      else if (/\.(png|jpe?g|gif|webp|svg)$/i.test(ent.name)) files.push(full)
    }
  }
  for (const root of IMAGE_ROOTS) walk(root)
  return files.sort((a, b) => b.split(path.sep).length - a.split(path.sep).length)
}

const urlMap = {}

function recordMove(fromAbs, toAbs) {
  const fromUrl = '/' + path.relative(PUBLIC, fromAbs).split(path.sep).join('/')
  const toUrl = '/' + path.relative(PUBLIC, toAbs).split(path.sep).join('/')
  if (fromUrl !== toUrl) urlMap[fromUrl] = toUrl
}

function main() {
  for (const dir of collectDirs()) {
    const base = path.basename(dir)
    const nextBase = toKebabDirName(base)
    if (base === nextBase) continue
    const parent = path.dirname(dir)
    const dest = path.join(parent, nextBase)
    const dirCaseOnly =
      path.dirname(dir) === path.dirname(dest) && path.basename(dir).toLowerCase() === path.basename(dest).toLowerCase()
    if (!dirCaseOnly && fs.existsSync(dest)) {
      throw new Error(`Refusing to overwrite: ${dest}`)
    }
    renamePathSafe(dir, dest)
    recordMove(dir, dest)
  }

  for (const file of collectFiles()) {
    const base = path.basename(file)
    const nextBase = toKebabFileName(base)
    if (base === nextBase) continue
    const parent = path.dirname(file)
    const dest = path.join(parent, nextBase)
    const fileCaseOnly =
      path.dirname(file) === path.dirname(dest) &&
      path.basename(file).toLowerCase() === path.basename(dest).toLowerCase()
    if (!fileCaseOnly && fs.existsSync(dest)) {
      throw new Error(`Refusing to overwrite: ${dest}`)
    }
    renamePathSafe(file, dest)
    recordMove(file, dest)
  }

  const out = path.join(__dirname, 'public-asset-rename-map.json')
  fs.writeFileSync(out, JSON.stringify(urlMap, null, 2))
  console.log(`Recorded ${Object.keys(urlMap).length} path changes -> ${out}`)
}

main()
