import './globals.css'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Providers from '@/app/components/Providers'
import { getBanners } from '@/services/bildit'
import type { Banner } from '@/services/bildit.d'
import { BILDITAIPixel } from '@bildit-platform/ai-pixel'
import { buildMouseDetectionInlineScript } from '@bildit-platform/ai-pixel/react'
import type { Metadata } from 'next'
import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'

export const metadata: Metadata = {
  title: 'BILDIT | Content Management System for Mobile Apps and React Web Sites',
  description: 'Content Management System for Mobile Apps and React Web Sites'
}

async function getInitialData(): Promise<Banner[]> {
  try {
    const response = await getBanners()
    if (!response || !response.data) {
      console.warn('No banner data received from API')
      return []
    }
    const banners = response.data as Banner[]
    console.log('Banners loaded:', banners)
    return banners
  } catch (error) {
    console.error('Error loading banners:', error)
    return []
  }
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
          id="postmessage-listener"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      // Notify parent that iframe is ready
      window.parent.postMessage({
        type: 'IFRAME_READY',
        success: true
      }, '*');
      
      window.addEventListener("message", (event) => {
        console.log('📨 Message received in Next.js:', event.data);
        
        if (event.data.type === "INJECT_SCRIPT") {
          console.log('🚀 Script injection message received from parent CMS...');
          
          const script = document.createElement("script");
          script.src = window.location.hostname === 'localhost' 
            ? "http://localhost:3333/static/js/admin.js"
            : "https://bildit.co/scripts/admin.654b4488.js";
          
          script.onload = function() {
            console.log('✅ Web script loaded successfully');
            // Notify parent that script was injected
            window.parent.postMessage({
              type: 'SCRIPT_INJECTED',
              success: true
            }, '*');
          };
          
          script.onerror = function() {
            console.error('❌ Failed to load web script');
            window.parent.postMessage({
              type: 'SCRIPT_INJECTED',
              success: false,
              error: 'Failed to load script'
            }, '*');
          };
          
          document.body.appendChild(script);
        }
      });
    `
          }}
        />
      </head>
      <body className="antialiased relative font-uncut-sans" style={{ paddingTop: 0 }}>
        <BILDITAIPixel />
        <Providers banners={banners}>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
        <Script
          id="bildit-mouse-detection"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: buildMouseDetectionInlineScript('https://ai-pixel.bildit.co/pixel.gif', {
              duration: 5000,
              throttle: 1000,
              maxMovements: 10,
              params: { app: 'marketing' }
            })
          }}
        />
      </body>
    </html>
  )
}
