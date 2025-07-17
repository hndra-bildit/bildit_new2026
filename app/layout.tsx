import './globals.css'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Providers from '@/app/components/Providers'
import { getBanners } from '@/services/bildit'
import type { Banner } from '@/services/bildit.d'
import type { Metadata } from 'next'
import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'

export const metadata: Metadata = {
  title: 'BILDIT | Content Management System for Mobile Apps and React Web Sites',
  description: 'Content Management System for Mobile Apps and React Web Sites'
}

async function getInitialData(): Promise<Banner[]> {
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
  const banners: Banner[] = await getInitialData()
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={
            process.env.NODE_ENV === 'development'
              ? 'http://localhost:3001/scripts/admin.8e3bbd0f.js'
              : '/scripts/admin.22ff1ce5.js'
          }
          strategy="beforeInteractive"
          id="bildit-script"
        />
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
