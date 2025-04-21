import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import cn from 'clsx'
import type { Metadata } from 'next'
import 'swiper/css'
import 'swiper/css/navigation'

export const metadata: Metadata = {
  title: 'BILDIT | Content Management System for Mobile Apps and React Web Sites',
  description: 'Content Management System for Mobile Apps and React Web Sites'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased relative', 'font-uncut-sans')}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
