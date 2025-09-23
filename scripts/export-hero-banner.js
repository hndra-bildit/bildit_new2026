#!/usr/bin/env node

/**
 * HeroImage Banner Export Script for BILDIT CMS
 *
 * This script helps export the HeroImage banner configuration
 * for integration with the BILDIT CMS.
 */

const fs = require('fs')
const path = require('path')

// Default configuration for the HeroImage banner
const defaultConfig = {
  title: 'Commerce Suite',
  subtitle: 'Unleash the Power of Commerce Suite with Our CMS',
  description:
    'Say goodbye to the hassle of juggling multiple tools. Our cutting-edge CMS brings everything you need into one seamless platform, designed for modern e-commerce businesses.',
  gradientColors: {
    from: '#3B1DED',
    via: '#ED1E79',
    to: '#EB6751'
  },
  className: '',
  metadata: {
    componentType: 'HeroImageBanner',
    version: '1.0.0',
    author: 'BILDIT Team',
    lastModified: new Date().toISOString(),
    description: 'Configurable hero image banner component for BILDIT CMS'
  }
}

// Generate HTML code for the banner
function generateHTML(config) {
  return `
<section class="w-full bg-white py-16 lg:py-24 ${config.className}">
  <div class="max-w-[1400px] mx-auto px-4 lg:px-8">
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-15">
      <!-- Text Content Section -->
      <div class="flex-1 space-y-8 text-center lg:text-left">
        <!-- Main Title -->
        <div class="space-y-6">
          <h1 class="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-[0.05em]">
            <span class="text-gray-900">Commerce</span>
            <br />
            <span class="bg-gradient-to-br from-[${config.gradientColors.from}] via-[${config.gradientColors.via}] to-[${config.gradientColors.to}] bg-clip-text text-transparent">
              Suite
            </span>
          </h1>

          <!-- Subtitle -->
          <h2 class="text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-600 leading-tight max-w-2xl mx-auto lg:mx-0">
            ${config.subtitle}
          </h2>

          <!-- Description -->
          <p class="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            ${config.description}
          </p>
        </div>
      </div>

      <!-- Hero Images Section -->
      <div class="flex-1 relative w-full max-w-[604px] h-[492px]">
        <!-- Background Elements -->
        <div class="absolute top-0 left-0 w-[470px] h-[330px] opacity-90">
          <div class="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-xl">
            <div class="w-full h-full rounded-3xl bg-gradient-to-br from-blue-100/30 to-purple-100/30 flex items-center justify-center">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span class="text-blue-600 text-2xl">📱</span>
                </div>
                <span class="text-blue-600 text-sm font-medium">Background Element</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Phone Mockup -->
        <div class="absolute top-0 right-0 w-[180px] h-[387px] lg:w-[220px] lg:h-[470px] z-10">
          <div class="relative w-full h-full">
            <div class="w-full h-full bg-gray-800 rounded-[40px] border-4 border-white shadow-2xl">
              <div class="w-full h-full bg-gradient-to-b from-blue-100 to-purple-100 rounded-[36px] flex items-center justify-center p-4">
                <div class="text-center">
                  <div class="w-12 h-12 bg-white rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                    <span class="text-blue-600 text-xl">📱</span>
                  </div>
                  <span class="text-gray-600 text-xs font-medium">Phone Mockup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Images -->
        <div class="absolute top-0 left-8 w-[136px] h-[136px] z-20">
          <div class="w-full h-full rounded-full border-8 border-white shadow-xl overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
              <span class="text-blue-600 text-2xl">👨‍💼</span>
            </div>
          </div>
        </div>

        <div class="absolute top-20 right-20 w-[105px] h-[105px] z-20">
          <div class="w-full h-full rounded-full border-8 border-white shadow-xl overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
              <span class="text-pink-600 text-xl">👩‍💼</span>
            </div>
          </div>
        </div>

        <div class="absolute top-0 right-8 w-[105px] h-[105px] z-20">
          <div class="w-full h-full rounded-full border-8 border-white shadow-xl overflow-hidden">
            <div class="w-full h-full bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
              <span class="text-green-600 text-xl">👵‍💼</span>
            </div>
          </div>
        </div>

        <!-- Additional UI Elements -->
        <div class="absolute bottom-0 left-0 w-[301px] h-[107px] z-10">
          <div class="w-full h-full bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center p-4">
              <div class="text-center">
                <div class="w-8 h-8 bg-blue-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span class="text-blue-600 text-sm">⚙️</span>
                </div>
                <span class="text-blue-600 text-xs font-medium">UI Element</span>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 right-0 w-[235px] h-[96px] z-10">
          <div class="w-full h-full bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="w-full h-full bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center p-4">
              <div class="text-center">
                <div class="w-8 h-8 bg-green-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span class="text-green-600 text-sm">💬</span>
                </div>
                <span class="text-green-600 text-xs font-medium">Messages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
}

// Generate CSS for the banner
function generateCSS(config) {
  return `
/* HeroImage Banner Styles */
.hero-image-banner {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.hero-image-banner .gradient-text {
  background: linear-gradient(135deg, ${config.gradientColors.from} 0%, ${config.gradientColors.via} 22.85%, ${config.gradientColors.to} 50.6%, ${config.gradientColors.via} 70.97%, ${config.gradientColors.from} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-image-banner .lg\\:flex-row {
    flex-direction: column;
  }
  
  .hero-image-banner .lg\\:text-left {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-image-banner .text-5xl {
    font-size: 3rem;
  }
  
  .hero-image-banner .text-2xl {
    font-size: 1.5rem;
  }
}`
}

// Main export function
function exportBanner() {
  const outputDir = path.join(__dirname, '../exports')

  // Create exports directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Export configuration
  const configPath = path.join(outputDir, 'hero-banner-config.json')
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2))
  console.log(`✅ Configuration exported to: ${configPath}`)

  // Export HTML
  const htmlPath = path.join(outputDir, 'hero-banner.html')
  const htmlContent = generateHTML(defaultConfig)
  fs.writeFileSync(htmlPath, htmlContent)
  console.log(`✅ HTML exported to: ${htmlPath}`)

  // Export CSS
  const cssPath = path.join(outputDir, 'hero-banner.css')
  const cssContent = generateCSS(defaultConfig)
  fs.writeFileSync(cssPath, cssContent)
  console.log(`✅ CSS exported to: ${cssPath}`)

  // Export README
  const readmePath = path.join(outputDir, 'README.md')
  const readmeContent = `# HeroImage Banner Export

This directory contains exported files for the HeroImage banner integration with BILDIT CMS.

## Files

- \`hero-banner-config.json\` - Banner configuration in JSON format
- \`hero-banner.html\` - HTML code for the banner
- \`hero-banner.css\` - CSS styles for the banner

## Usage

1. Copy the configuration from \`hero-banner-config.json\`
2. Paste it into your BILDIT CMS banner configuration
3. Use the HTML and CSS files as reference for custom implementations

## Customization

You can modify the configuration values in the JSON file to customize:
- Title, subtitle, and description text
- Gradient colors
- Custom CSS classes

## Support

For questions about integration, refer to the main documentation or contact the BILDIT team.
`
  fs.writeFileSync(readmePath, readmeContent)
  console.log(`✅ README exported to: ${readmePath}`)

  console.log('\n🎉 Export completed successfully!')
  console.log('\nNext steps:')
  console.log('1. Review the exported files in the exports/ directory')
  console.log('2. Copy the configuration to your BILDIT CMS')
  console.log('3. Customize the banner as needed')
  console.log('4. Deploy through the CMS interface')
}

// Run the export if this script is executed directly
if (require.main === module) {
  exportBanner()
}

module.exports = {
  exportBanner,
  generateHTML,
  generateCSS,
  defaultConfig
}
