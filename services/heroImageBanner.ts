'use server'

import { getBanners } from './bildit'

export interface HeroImageBannerConfig {
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

export const defaultHeroImageConfig: HeroImageBannerConfig = {
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

export async function getHeroImageBanner(category?: string, location?: string) {
  try {
    // Try to get banner from BILDIT CMS first
    const banners = await getBanners({ category, location })

    if (banners && banners.data && banners.data.length > 0) {
      // Return the first banner if available
      return banners.data[0]
    }

    // Fallback to default configuration
    return {
      id: 'hero-image-default',
      name: 'Hero Image Banner',
      config: defaultHeroImageConfig,
      published: true,
      locations: [location || '/'],
      categories: category ? [category] : ['default']
    }
  } catch (error) {
    console.error('Error fetching hero image banner:', error)

    // Return default configuration on error
    return {
      id: 'hero-image-default',
      name: 'Hero Image Banner',
      config: defaultHeroImageConfig,
      published: true,
      locations: [location || '/'],
      categories: category ? [category] : ['default']
    }
  }
}

export async function generateHeroImageHTML(config: HeroImageBannerConfig): Promise<string> {
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
    </section>
  `
}
