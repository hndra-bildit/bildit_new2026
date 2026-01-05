// Polyfill for browser Image API in server-side environment
// This is needed when CMS components use new Image() during SSR

if (typeof global !== 'undefined' && typeof global.Image === 'undefined') {
  // Create a minimal Image polyfill for server-side rendering
  class ImagePolyfill {
    src: string = ''
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null = null
    onerror: ((this: GlobalEventHandlers, ev: Event) => any) | null = null
    width: number = 0
    height: number = 0
    naturalWidth: number = 0
    naturalHeight: number = 0
    complete: boolean = false

    constructor() {
      // No-op constructor for server-side
    }

    addEventListener() {
      // No-op for server-side
    }

    removeEventListener() {
      // No-op for server-side
    }
  }

  // @ts-ignore - Adding to global scope for server-side
  global.Image = ImagePolyfill as any
}

export {}

