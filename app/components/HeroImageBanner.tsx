'use client'

import React from 'react'
import { HeroImageBannerConfig, defaultHeroImageConfig } from '../../services/heroImageBanner'

interface HeroImageBannerProps {
  config?: HeroImageBannerConfig
  className?: string
}

const HeroImageBanner: React.FC<HeroImageBannerProps> = ({ config = defaultHeroImageConfig, className = '' }) => {
  const finalConfig = { ...defaultHeroImageConfig, ...config }

  return (
    <section className={`w-full bg-white py-16 lg:py-24 ${className} ${finalConfig.className}`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-15">
          {/* Text Content Section */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-[0.05em]">
                <span className="text-gray-900">Commerce</span>
                <br />
                <span
                  className="bg-gradient-to-br from-[#3B1DED] via-[#ED1E79] to-[#EB6751] bg-clip-text text-transparent"
                  style={{
                    background: `linear-gradient(135deg, ${finalConfig.gradientColors.from} 0%, ${finalConfig.gradientColors.via} 22.85%, ${finalConfig.gradientColors.to} 50.6%, ${finalConfig.gradientColors.via} 70.97%, ${finalConfig.gradientColors.from} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Suite
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-600 leading-tight max-w-2xl mx-auto lg:mx-0">
                {finalConfig.subtitle}
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {finalConfig.description}
              </p>
            </div>
          </div>

          {/* Hero Images Section */}
          <div className="flex-1 relative w-full max-w-[604px] h-[492px]">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[470px] h-[330px] opacity-90">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-xl">
                {/* Placeholder for background image */}
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-100/30 to-purple-100/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <span className="text-blue-600 text-2xl">📱</span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">Background Element</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Phone Mockup */}
            <div className="absolute top-0 right-0 w-[180px] h-[387px] lg:w-[220px] lg:h-[470px] z-10">
              <div className="relative w-full h-full">
                <div className="w-full h-full bg-gray-800 rounded-[40px] border-4 border-white shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-blue-100 to-purple-100 rounded-[36px] flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                        <span className="text-blue-600 text-xl">📱</span>
                      </div>
                      <span className="text-gray-600 text-xs font-medium">Phone Mockup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Images */}
            <div className="absolute top-0 left-8 w-[136px] h-[136px] z-20">
              <div className="w-full h-full rounded-full border-8 border-white shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                  <span className="text-blue-600 text-2xl">👨‍💼</span>
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-20 w-[105px] h-[105px] z-20">
              <div className="w-full h-full rounded-full border-8 border-white shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                  <span className="text-pink-600 text-xl">👩‍💼</span>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-8 w-[105px] h-[105px] z-20">
              <div className="w-full h-full rounded-full border-8 border-white shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center">
                  <span className="text-green-600 text-xl">👵‍💼</span>
                </div>
              </div>
            </div>

            {/* Additional UI Elements */}
            <div className="absolute bottom-0 left-0 w-[301px] h-[107px] z-10">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">⚙️</span>
                    </div>
                    <span className="text-blue-600 text-xs font-medium">UI Element</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[235px] h-[96px] z-10">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="w-full h-full bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-green-600 text-sm">💬</span>
                    </div>
                    <span className="text-green-600 text-xs font-medium">Messages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroImageBanner
