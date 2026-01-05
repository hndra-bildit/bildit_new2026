import Header from './components/Header'
import './globals.css'
import Footer from '@/app/components/Footer'
import Providers from '@/app/components/Providers'
import { bannerCache } from '@/services/bannerCache'
import type { Banner } from '@/services/bildit.d'
import { StylePlaceholder } from '@bildit-platform/nextjs'
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
        <Script
          id="bildit-admin-loader"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      console.log('[BILDIT DEBUG] Script tag executing');
      console.log('[BILDIT DEBUG] In iframe:', window.parent !== window);
      console.log('[BILDIT DEBUG] window.location:', window.location.href);

      (function() {
        // Only run if we're inside an iframe (loaded by CMS)
        var inIframe = window.parent !== window;
        console.log('[BILDIT] Iframe check:', inIframe);
        if (!inIframe) {
          console.log('[BILDIT] Not in iframe, skipping admin loader');
          return;
        }

        console.log('[BILDIT] Running in iframe, setting up admin loader');
        window.__bilditScriptInjected = false;

        // Notify parent we're ready
        console.log('[BILDIT] Sending IFRAME_READY to parent');
        window.parent.postMessage({ type: 'IFRAME_READY', success: true }, '*');

        // Listen for script injection command
        window.addEventListener('message', function(event) {
          console.log('[BILDIT] Received message:', event.data);
          if (event.data?.type === 'INJECT_SCRIPT' && !window.__bilditScriptInjected) {
            console.log('[BILDIT] Injecting admin script...');
            window.__bilditScriptInjected = true;
            var script = document.createElement('script');
            // Use dev server in development, local path in production
            var isDev = window.location.hostname === 'localhost';
            script.src = isDev ? 'http://localhost:3333/static/js/admin.js' : '/scripts/admin.js';
            console.log('[BILDIT] Loading script from:', script.src);
            script.onload = function() {
              console.log('[BILDIT] Admin script loaded successfully');
              window.parent.postMessage({ type: 'SCRIPT_INJECTED', success: true }, '*');
            };
            script.onerror = function() {
              console.error('[BILDIT] Failed to load admin script');
              window.__bilditScriptInjected = false;
              window.parent.postMessage({ type: 'SCRIPT_INJECTED', success: false }, '*');
            };
            (document.body || document.documentElement).appendChild(script);
          }
        });
      })();
    `
          }}
        />
        <Script
          id="visitiq-pixel"
          type="text/javascript"
          src="https://pixel.visitiq.io/vpixel.js"
          strategy="beforeInteractive"
        />
        <StylePlaceholder slotId="home-style" />
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
          <Header />
          {/* <Navigation /> */}
          <div>{children}</div>
          <Footer />
        </Providers>
        {/* <Script
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
        /> */}
      </body>
    </html>
  )
}
