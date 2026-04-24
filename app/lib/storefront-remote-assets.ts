/**
 * Mobile app storefront card imagery (`public/images/mobile-app-storefront/`).
 * Scheduling: `promotionalScheduling`. Integrations art (`integrations.png`): storefront two-up + marketers bento panel.
 * Native checkout: `nativeCheckoutBg` for the horizontal card; `nativeCheckoutFeature5231` for Everything preview.
 * Horizontal cards also use `banners`, `storefront`, `appClipsBg` (`storefront-bg.png`, `app-clips-bg.png`).
 */
export const MOBILE_APP_STOREFRONT_IMAGES = {
  /** Promotion / scheduling hero art (Everything + Sophisticated scheduling card). */
  promotionalScheduling: '/images/mobile-app-storefront/promotional-scheduling.png',
  /** Best-in-class integrations — `StorefrontSchedulingIntegrations` + `MarketersFeaturesBentoSection`. */
  integrations: '/images/mobile-app-storefront/integrations.png',
  /** Horizontal scroll — Native Checkout card. */
  nativeCheckoutBg: '/images/mobile-app-storefront/native-checkout-bg.png',
  /** “Everything your team needs” — Intuitive Native Checkout preview. */
  nativeCheckoutFeature5231: '/images/mobile-app-storefront/native-checkout.png',
  banners: '/images/mobile-app-storefront/banners.png',
  /** “Everything your team needs” — Simplified Content Management preview. */
  simplifiedContentManagement: '/images/mobile-app-storefront/simplified-content-management.png',
  /** Horizontal scroll — Customise Your Storefront card. */
  storefront: '/images/mobile-app-storefront/storefront-bg.png',
  /** App Clips horizontal card — `public/images/mobile-app-storefront/app-clips-bg.png`. */
  appClipsBg: '/images/mobile-app-storefront/app-clips-bg.png'
} as const
