'use client'

import React, { useState } from 'react'

const defaultHeroImageConfig: HeroImageBannerConfig = {
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

interface HeroImageBannerConfig {
  title: string
  subtitle: string
  description: string
  gradientColors: {
    from: string
    via: string
    to: string
  }
  className?: string
}

interface HeroImageBannerConfigProps {
  initialConfig?: HeroImageBannerConfig
  onConfigChange?: (config: HeroImageBannerConfig) => void
  className?: string
}

const HeroImageBannerConfig: React.FC<HeroImageBannerConfigProps> = ({
  initialConfig = defaultHeroImageConfig,
  onConfigChange,
  className = ''
}) => {
  const [config, setConfig] = useState<HeroImageBannerConfig>(initialConfig)

  const handleConfigChange = (field: keyof HeroImageBannerConfig, value: string | number) => {
    const newConfig = { ...config, [field]: value }
    setConfig(newConfig)
    onConfigChange?.(newConfig)
  }

  const handleGradientColorChange = (colorKey: keyof typeof config.gradientColors, value: string) => {
    const newGradientColors = { ...config.gradientColors, [colorKey]: value }
    const newConfig = { ...config, gradientColors: newGradientColors }
    setConfig(newConfig)
    onConfigChange?.(newConfig)
  }

  const resetToDefault = () => {
    setConfig(defaultHeroImageConfig)
    onConfigChange?.(defaultHeroImageConfig)
  }

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Hero Image Banner Configuration</h3>
        <p className="text-sm text-gray-600">Customize the hero image banner content and styling</p>
      </div>

      <div className="space-y-4">
        {/* Title Configuration */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Main Title
          </label>
          <input
            type="text"
            id="title"
            value={config.title}
            onChange={(e) => handleConfigChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter main title"
          />
        </div>

        {/* Subtitle Configuration */}
        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            value={config.subtitle}
            onChange={(e) => handleConfigChange('subtitle', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter subtitle"
          />
        </div>

        {/* Description Configuration */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={config.description}
            onChange={(e) => handleConfigChange('description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter description"
          />
        </div>

        {/* Gradient Colors Configuration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gradient Colors</label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="fromColor" className="block text-xs text-gray-600 mb-1">
                From
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  id="fromColor"
                  value={config.gradientColors.from}
                  onChange={(e) => handleGradientColorChange('from', e.target.value)}
                  className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={config.gradientColors.from}
                  onChange={(e) => handleGradientColorChange('from', e.target.value)}
                  className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded"
                  placeholder="#3B1DED"
                />
              </div>
            </div>
            <div>
              <label htmlFor="viaColor" className="block text-xs text-gray-600 mb-1">
                Via
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  id="viaColor"
                  value={config.gradientColors.via}
                  onChange={(e) => handleGradientColorChange('via', e.target.value)}
                  className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={config.gradientColors.via}
                  onChange={(e) => handleGradientColorChange('via', e.target.value)}
                  className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded"
                  placeholder="#ED1E79"
                />
              </div>
            </div>
            <div>
              <label htmlFor="toColor" className="block text-xs text-gray-600 mb-1">
                To
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  id="toColor"
                  value={config.gradientColors.to}
                  onChange={(e) => handleGradientColorChange('to', e.target.value)}
                  className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={config.gradientColors.to}
                  onChange={(e) => handleGradientColorChange('to', e.target.value)}
                  className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded"
                  placeholder="#EB6751"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS Class */}
        <div>
          <label htmlFor="customClass" className="block text-sm font-medium text-gray-700 mb-2">
            Custom CSS Class
          </label>
          <input
            type="text"
            id="customClass"
            value={config.className || ''}
            onChange={(e) => handleConfigChange('className', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter custom CSS class"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <button
            onClick={resetToDefault}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Reset to Default
          </button>
          <div className="text-sm text-gray-500">Changes are applied automatically</div>
        </div>
      </div>
    </div>
  )
}

export default HeroImageBannerConfig
