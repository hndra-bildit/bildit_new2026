import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { getBanners } from '@/services/bildit'
import { BilditProvider } from '@bildit-platform/nextjs'
import type { BannerType } from '@bildit-platform/nextjs'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'

export const metadata: Metadata = {
  title: 'BILDIT | Content Management System for Mobile Apps and React Web Sites',
  description: 'Content Management System for Mobile Apps and React Web Sites'
}

async function getInitialData(): Promise<BannerType[]> {
  const banners = await getBanners()
  return banners
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const banners: BannerType[] = await getInitialData()
  return (
    <html lang="en">
      <BilditProvider
        banners={banners}
        extraDependenciesConfig={{
          Link: { module: Link, globalName: 'Link' },
          Image: { module: Image, globalName: 'Image' }
        }}
      >
        <body className="antialiased relative font-uncut-sans">
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </BilditProvider>
    </html>
  )
}
