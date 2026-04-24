import { LayoutChrome } from './components/LayoutChrome'
import './globals.css'
import Footer from '@/app/components/Footer'
import Providers from '@/app/components/Providers'
import { SITE_PAGE_TITLE } from '@/app/lib/site-page-title'
import { cn } from '@/lib/utils'
import type { Banner } from '@/services/bildit.d'
import { getPreviewDateFromHeaders } from '@bildit-platform/nextjs'
import { RemoteConnector } from '@bildit-platform/nextjs-api'
import type { Metadata, Viewport } from 'next'
import { Archivo_Black, Geist } from 'next/font/google'
import { headers } from 'next/headers'
import Script from 'next/script'
import 'swiper/css'
import 'swiper/css/navigation'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

/** Canonical site for Open Graph / Twitter cards (social crawlers need absolute URLs). */
const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  (process.env.NODE_ENV === 'development' ? 'http://localhost:5002' : 'https://bildit.co')

/** Featured preview when sharing links (file in /public). */
const defaultOgImage = '/images/bildit-lines-animation.gif'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: SITE_PAGE_TITLE,
  description: 'Content Management System for Mobile Apps and React Web Sites',
  openGraph: {
    title: SITE_PAGE_TITLE,
    description: 'Content Management System for Mobile Apps and React Web Sites',
    type: 'website',
    locale: 'en_US',
    siteName: 'BILDIT',
    images: [{ url: defaultOgImage }]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_PAGE_TITLE,
    description: 'Content Management System for Mobile Apps and React Web Sites',
    images: [defaultOgImage]
  }
}

// Force dynamic rendering since we need to access headers for pathname and preview date
export const dynamic = 'force-dynamic'

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap'
})

const API_KEY = process.env.BILDIT_API_KEY || ''

const isLocalDevPort5002 = (host: string | null) => {
  if (!host) return false
  const h = host.toLowerCase()
  return h === 'localhost:5002' || h === '127.0.0.1:5002' || h === '[::1]:5002'
}

/**
 * On `localhost:5002` (this app's dev port), use the Firebase Functions emulator base URL
 * when `BILDIT_API_URL_LOCAL` is set; otherwise `BILDIT_API_URL` (e.g. admin-dev).
 */
function resolveBilditApiBaseUrl(host: string | null): string {
  if (isLocalDevPort5002(host)) {
    const local = process.env.BILDIT_API_URL_LOCAL
    if (local) return local
    console.warn(
      '[BILDIT] Host is :5002 but BILDIT_API_URL_LOCAL is unset; using BILDIT_API_URL. Set BILDIT_API_URL_LOCAL to your Functions emulator base (e.g. http://127.0.0.1:5001/PROJECT_ID/REGION/FUNCTION_NAME).'
    )
  }
  return process.env.BILDIT_API_URL || ''
}

async function getInitialData(): Promise<Banner[]> {
  try {
    const headersList = await headers()
    const pathname = headersList.get('x-pathname') || '/'
    const previewDate = getPreviewDateFromHeaders(headersList)
    const baseURL = resolveBilditApiBaseUrl(headersList.get('host'))

    const remoteConnector = new RemoteConnector({
      key: API_KEY,
      baseURL
    })

    const result = await remoteConnector.getWebBanners({
      location: pathname,
      date: previewDate,
      mode: 'csr',
      tomorrow: true,
      source: 'live' as const
    })

    return (result.data as unknown as Banner[]) || []
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
    <html lang="en" className={cn('font-sans', geist.variable, archivoBlack.variable)} suppressHydrationWarning>
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
                  if (window.__adminScriptInjected) return;
                  window.__adminScriptInjected = true;
                  console.log('Script injection message received from parent CMS...');

                  const script = document.createElement("script");
                  script.src = "${process.env.NODE_ENV}" !== "production" 
                    ? "/scripts/admin.js" 
                    : "https://bildit-cdn.bilditon.com/cms-client/scripts/admin.js?v=" + new Date().getTime();
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
        <Providers {...{ banners }}>
          <>
            <LayoutChrome>{children}</LayoutChrome>
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  )
}
