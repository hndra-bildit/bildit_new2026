'use client'

import React, { useState } from 'react'
import type { HeroImageBannerConfig as ConfigType } from '../../../services/heroImageBanner'
import HeroImageBanner from '../../components/HeroImageBanner'
import HeroImageBannerConfig from '../../components/HeroImageBannerConfig'

// Default configuration - moved here to avoid server module import issues
const defaultHeroImageConfig: ConfigType = {
  title: 'Commerce Suite',
  subtitle: 'Unleash the Power of Commerce Suite with Our CMS',
  description:
    'Say goodbye to the hassle of juggling multiple tools. Our cutting-edge CMS brings everything you need into one seamless platform, designed for modern e-commerce businesses.',
  gradientColors: {
    from: '#3B1DED',
    via: '#ED1E79',
    to: '#EB6751'
  },
  className: ''
}

export default function HeroImageDemo() {
  const [config, setConfig] = useState<ConfigType>(defaultHeroImageConfig)
  const [showConfig, setShowConfig] = useState(true)

  const handleConfigChange = (newConfig: ConfigType) => {
    setConfig(newConfig)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hero Image Banner Demo</h1>
              <p className="text-sm text-gray-600">BILDIT CMS Integration Example</p>
            </div>
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {showConfig ? 'Hide Config' : 'Show Config'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          {showConfig && (
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <HeroImageBannerConfig initialConfig={config} onConfigChange={handleConfigChange} />

                {/* Export Section */}
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Export for BILDIT CMS</h4>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">HTML Code</label>
                      <textarea
                        readOnly
                        value={JSON.stringify(config, null, 2)}
                        rows={8}
                        className="w-full px-3 py-2 text-xs font-mono bg-gray-50 border border-gray-300 rounded-md"
                      />
                    </div>

                    <button
                      onClick={() => navigator.clipboard.writeText(JSON.stringify(config, null, 2))}
                      className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      Copy Configuration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Preview Panel */}
          <div className={`${showConfig ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
              <p className="text-sm text-gray-600 mb-4">
                This is how your hero image banner will appear. Make changes in the configuration panel to see live
                updates.
              </p>
            </div>

            {/* Hero Image Banner */}
            <HeroImageBanner config={config} />

            {/* Integration Instructions */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">BILDIT CMS Integration</h3>
              <div className="space-y-3 text-sm text-blue-800">
                <p>
                  <strong>1. Copy Configuration:</strong> Use the configuration panel to customize your banner, then
                  copy the JSON configuration.
                </p>
                <p>
                  <strong>2. Create Banner in BILDIT CMS:</strong> In your BILDIT CMS admin panel, create a new banner
                  and paste the configuration.
                </p>
                <p>
                  <strong>3. Deploy:</strong> The banner will be automatically deployed to your specified locations and
                  categories.
                </p>
                <p>
                  <strong>4. Customize Further:</strong> You can continue to customize the banner through the BILDIT CMS
                  interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
