#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const chokidar = require('chokidar')

// Configuration
const SOURCE_DIR = path.resolve(
  process.env.HOME,
  'Development/BILDIT/bildit-cms-workspace/apps/bildit-web-script/public/scripts'
)
const TARGET_DIR = path.resolve(__dirname, '../public/scripts')

// Ensure target directory exists
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true })
  console.log(`Created target directory: ${TARGET_DIR}`)
}

// Function to copy file without timestamp
function copyFile(sourcePath) {
  const fileName = path.basename(sourcePath)
  const newFileName = 'admin.js'
  const targetPath = path.join(TARGET_DIR, newFileName)

  try {
    fs.copyFileSync(sourcePath, targetPath)
    console.log(`✅ Copied ${fileName} to ${targetPath}`)
  } catch (error) {
    console.error(`❌ Error copying file: ${error.message}`)
  }
}

// Initialize watcher
console.log(`🔍 Watching for changes in: ${SOURCE_DIR}`)
console.log(`📁 Target directory: ${TARGET_DIR}`)

const watcher = chokidar.watch(SOURCE_DIR, {
  persistent: true,
  ignoreInitial: false,
  awaitWriteFinish: {
    stabilityThreshold: 1000,
    pollInterval: 100
  }
})

// Watch for new or changed admin.js files
watcher.on('add', (filePath) => {
  if (path.basename(filePath) === 'admin.js') {
    console.log(`📄 New file detected: ${filePath}`)
    copyFile(filePath)
  }
})

watcher.on('change', (filePath) => {
  if (path.basename(filePath) === 'admin.js') {
    console.log(`📝 File changed: ${filePath}`)
    copyFile(filePath)
  }
})

watcher.on('error', (error) => {
  console.error(`❌ Watcher error: ${error.message}`)
})

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping watcher...')
  watcher.close()
  process.exit(0)
})

console.log('🚀 Watcher started. Press Ctrl+C to stop.')
