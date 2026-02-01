import Header from './components/Header'
import './globals.css'
import Footer from '@/app/components/Footer'
import Providers from '@/app/components/Providers'
import { bannerCache } from '@/services/bannerCache'
import type { Banner } from '@/services/bildit.d'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'

export const metadata: Metadata = {
  title: 'BILDIT | Content Management System for Mobile Apps and React Web Sites',
  description: 'Content Management System for Mobile Apps and React Web Sites'
}

// Force dynamic rendering since we need to access headers for pathname
export const dynamic = 'force-dynamic'

//TODO: Use getWebBanners from the BILDIT Next.js SDK
// Server-side data fetching for SSR with caching
async function getInitialData(): Promise<Banner[]> {
  try {
    // Get the pathname from headers
    const headersList = await headers()
    const pathname = headersList.get('x-pathname') || '/'

    // Use cached banners if available, otherwise fetch fresh
    const banners = await bannerCache.getBanners(pathname)

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
        {/* <Script
          id="cms-admin-bridge"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      // Notify parent that iframe is ready
      window.parent.postMessage({
        type: 'IFRAME_READY',
        success: true
      }, '*');

      window.addEventListener("message", (event) => {
        console.log('Message received in Next.js:', event.data);

        if (event.data.type === "INJECT_SCRIPT") {
          console.log('Script injection message received from parent CMS...');

          const script = document.createElement("script");
          script.src = "https://bildit-cdn.bilditon.com/cms-client/bildit.min.js";

          script.onload = function() {
            console.log('Web script loaded successfully');
            // Notify parent that script was injected
            window.parent.postMessage({
              type: 'SCRIPT_INJECTED',
              success: true
            }, '*');
          };

          script.onerror = function() {
            console.error('Failed to load web script');
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
        /> */}
        {process.env.NODE_ENV === 'development' ? (
          <Script src="http://localhost:4000/admin.js" strategy="afterInteractive" />
        ) : (
          <Script src="https://bildit-cdn.bilditon.com/cms-client/bildit.min.js" strategy="afterInteractive" />
        )}
        <Script id="vpixel-loader" src="https://pixel.visitiq.io/vpixel.js" strategy="beforeInteractive" />
      </head>
      <body className="antialiased relative font-uncut-sans" style={{ paddingTop: 0 }}>
        <Script
          id="visitiq-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof vpixel !== 'undefined') {
                vpixel.piximage('${process.env.BILDIT_VPIXEL_ID}');
              } else {
                window.addEventListener('load', function() {
                  if (typeof vpixel !== 'undefined') {
                    vpixel.piximage('${process.env.BILDIT_VPIXEL_ID}');
                  }
                });
              }
            `
          }}
        />
        {/* <BILDITAIPixel /> */}
        <Providers banners={banners}>
        <>
          <Header />
          <div>{children}</div>
          <Footer />
        </>
        </Providers>
      </body>
    </html>
  )
}
