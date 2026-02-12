import { trackAIBotRequestForPixel } from '@bildit-platform/ai-pixel/nextjs'
import { enhanceMiddlewareWithBildit } from '@bildit-platform/nextjs'
import { NextRequest, NextResponse } from 'next/server'

async function customMiddleware(request: NextRequest) {
  const result = await trackAIBotRequestForPixel(request, {
    params: { edge: 'middleware' }
    // force: true, // Uncomment to test with all requests
  })
  console.log('[BILDIT Middleware] Result:', result)

  // Clone the request headers and add the pathname
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)

  // Return response with modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

// Enhance custom middleware with BILDIT preview date support
export const middleware = enhanceMiddlewareWithBildit(customMiddleware)

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
