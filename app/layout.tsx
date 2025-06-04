import './globals.css'
import type { Metadata } from 'next'
import type { BannerType } from '@bildit-platform/nextjs'
import { getBanners } from '@/services/bildit'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Providers from '@/app/components/Providers'

import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'

export const metadata: Metadata = {
  title: 'BILDIT | Content Management System for Mobile Apps and React Web Sites',
  description: 'Content Management System for Mobile Apps and React Web Sites'
}

async function getInitialData(): Promise<BannerType[]> {
  const banners = await getBanners()
  if (!banners) {
    return []
  }
  console.log(banners)
  return banners
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const banners: BannerType[] = await getInitialData()
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="/scripts/admin.22ff1ce5.js" strategy="beforeInteractive" id="bildit-script" />
      </head>
      <Providers banners={banners}>
        <body className="antialiased relative font-uncut-sans" style={{ paddingTop: 0 }}>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
