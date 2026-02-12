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
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
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
                  script.src = "${process.env.NODE_ENV !== 'production' ? '/scripts/admin.js' : 'https://bildit-cdn.bilditon.com/cms-client/static/js/admin.js'}";
                  console.log('Script source:', script.src);
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
                    if ("${process.env.NODE_ENV}" !== 'production') {
                      console.warn('⚠️ [BILDIT] public/scripts/admin.js is missing! This script is ignored by git and must be manually provided for local development if needed.');
                    }
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
