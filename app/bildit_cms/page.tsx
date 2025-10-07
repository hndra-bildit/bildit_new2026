import { Suspense } from 'react'
import { SlotPlaceholder } from '@bildit-platform/nextjs'
import Link from 'next/link'


export default function BilditCMS() {
  return (
    <>
      <SlotPlaceholder slotId="cms-title" />
      <SlotPlaceholder slotId="cms-content" />

      {/* Hero Image Banner Demo Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hero Image Banner Integration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the power of our HeroImage banner component integrated with the BILDIT CMS. Customize content,
              colors, and styling through our intuitive configuration interface.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Live Demo & Configuration</h3>
                <p className="text-gray-600 mb-6">
                  Test and customize your hero image banner with our interactive demo. See real-time changes and export
                  configurations for the BILDIT CMS.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Live preview with real-time updates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Customizable content and styling
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Export-ready configurations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    BILDIT CMS integration ready
                  </li>
                </ul>
                <Link
                  href="/bildit_cms/hero-image-demo"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Launch Demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
