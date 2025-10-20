'use client'

import React from 'react'

const BannerLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-cms-rose rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600 text-sm font-medium">Loading content...</p>
      </div>
    </div>
  )
}

export default BannerLoader