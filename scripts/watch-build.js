#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// Configuration
const BUILD_DIR = path.resolve(process.env.HOME, 'Development/BILDIT/bildit-cms-workspace/apps/bildit-web-script/build/scripts');
const TARGET_DIR = path.resolve(__dirname, '../public/scripts');

// Ensure target directory exists
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  console.log(`Created target directory: ${TARGET_DIR}`);
}

// Function to copy file with timestamp
function copyFileWithTimestamp(sourcePath) {
  const fileName = path.basename(sourcePath);
  const timestamp = Date.now();
  const newFileName = `admin.${timestamp}.js`;
  const targetPath = path.join(TARGET_DIR, newFileName);
  
  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ Copied ${fileName} to ${newFileName}`);
    
    // Update the layout.tsx file to use the new filename
    updateLayoutFile(newFileName);
    
    // Clean up old files (keep only the 5 most recent)
    cleanupOldFiles();
    
  } catch (error) {
    console.error(`❌ Error copying file: ${error.message}`);
  }
}

// Function to update layout.tsx with new filename
function updateLayoutFile(newFileName) {
  const layoutPath = path.resolve(__dirname, '../app/layout.tsx');
  
  try {
    let content = fs.readFileSync(layoutPath, 'utf8');
    
    // Update the production filename in the Script src
    const regex = /\/scripts\/admin\.\d+\.js/;
    const replacement = `/scripts/${newFileName}`;
    
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      fs.writeFileSync(layoutPath, content, 'utf8');
      console.log(`📝 Updated layout.tsx to use ${newFileName}`);
    }
  } catch (error) {
    console.error(`❌ Error updating layout.tsx: ${error.message}`);
  }
}

// Function to clean up old files
function cleanupOldFiles() {
  try {
    const files = fs.readdirSync(TARGET_DIR)
      .filter(file => file.startsWith('admin.') && file.endsWith('.js'))
      .map(file => ({
        name: file,
        path: path.join(TARGET_DIR, file),
        mtime: fs.statSync(path.join(TARGET_DIR, file)).mtime
      }))
      .sort((a, b) => b.mtime - a.mtime);
    
    // Keep only the 5 most recent files
    if (files.length > 5) {
      const filesToDelete = files.slice(5);
      filesToDelete.forEach(file => {
        fs.unlinkSync(file.path);
        console.log(`🗑️  Deleted old file: ${file.name}`);
      });
    }
  } catch (error) {
    console.error(`❌ Error cleaning up old files: ${error.message}`);
  }
}

// Initialize watcher
console.log(`🔍 Watching for changes in: ${BUILD_DIR}`);
console.log(`📁 Target directory: ${TARGET_DIR}`);

const watcher = chokidar.watch(BUILD_DIR, {
  persistent: true,
  ignoreInitial: false,
  awaitWriteFinish: {
    stabilityThreshold: 1000,
    pollInterval: 100
  }
});

// Watch for new or changed admin.js files
watcher.on('add', (filePath) => {
  if (path.basename(filePath) === 'admin.js') {
    console.log(`📄 New file detected: ${filePath}`);
    copyFileWithTimestamp(filePath);
  }
});

watcher.on('change', (filePath) => {
  if (path.basename(filePath) === 'admin.js') {
    console.log(`📝 File changed: ${filePath}`);
    copyFileWithTimestamp(filePath);
  }
});

watcher.on('error', (error) => {
  console.error(`❌ Watcher error: ${error.message}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping watcher...');
  watcher.close();
  process.exit(0);
});

console.log('🚀 Watcher started. Press Ctrl+C to stop.'); 