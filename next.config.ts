import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // Port configuration handled via CLI flags in package.json
  // but can also be set via env variable: PORT=5002
  transpilePackages: [
    '@bildit-platform/ai-pixel',
    '@bildit-platform/nextjs',
    'owl.carousel',
    'react-owl-carousel',
    'swiper',
    'embla-carousel-react',
    'framer-motion',
    'react-icons',
    'lucide-react'
  ],
  trailingSlash: true,
  compiler: {
    removeConsole:
      process.env.ENVIRONMENT === 'production'
        ? {
            exclude: ['error']
          }
        : false
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' }
        ]
      }
    ]
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'retailmedia-static.criteo.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'retailmedia-static.azureedge.net',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'belk.scene7.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**'
      }
    ]
  }
}

export default nextConfig
