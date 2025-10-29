import { getBanners } from './bildit'
import type { Banner } from './bildit.d'

interface BannerCache {
  [pathname: string]: {
    banners: Banner[]
    timestamp: number
    ttl: number // Time to live in milliseconds
  }
}

class BannerCacheService {
  private cache: BannerCache = {}
  private readonly DEFAULT_TTL = 5 * 60 * 1000 // 5 minutes
  private readonly MAX_CACHE_SIZE = 50 // Maximum number of cached routes

  /**
   * Get banners for a specific pathname
   * Returns cached banners if available and not expired, otherwise fetches fresh data
   */
  async getBanners(pathname: string): Promise<Banner[]> {
    const normalizedPath = this.normalizePath(pathname)

    // Check if we have valid cached data
    if (this.isCacheValid(normalizedPath)) {
      console.log(`Cache hit for pathname: ${normalizedPath}`)
      return this.cache[normalizedPath].banners
    }

    // Fetch fresh data
    console.log(`Cache miss for pathname: ${normalizedPath}, fetching fresh data`)
    try {
      const response = await getBanners({ location: normalizedPath })
      const banners = response?.data ? (response.data as Banner[]) : []

      // Cache the result
      this.setCache(normalizedPath, banners)

      return banners
    } catch (error) {
      console.error(`Error fetching banners for ${normalizedPath}:`, error)
      return []
    }
  }

  /**
   * Prefetch banners for multiple routes
   * Useful for prefetching all navigation routes
   */
  async prefetchBanners(pathnames: string[]): Promise<void> {
    console.log(`Prefetching banners for ${pathnames.length} routes`)

    const prefetchPromises = pathnames.map(async (pathname) => {
      const normalizedPath = this.normalizePath(pathname)

      // Only prefetch if not already cached or expired
      if (!this.isCacheValid(normalizedPath)) {
        try {
          const response = await getBanners({ location: normalizedPath })
          const banners = response?.data ? (response.data as Banner[]) : []
          this.setCache(normalizedPath, banners)
          console.log(`Prefetched banners for: ${normalizedPath}`)
        } catch (error) {
          console.error(`Error prefetching banners for ${normalizedPath}:`, error)
        }
      }
    })

    await Promise.allSettled(prefetchPromises)
  }

  /**
   * Get all cached pathnames
   */
  getCachedPathnames(): string[] {
    return Object.keys(this.cache)
  }

  /**
   * Clear expired cache entries
   */
  clearExpiredCache(): void {
    const now = Date.now()
    const expiredPaths = Object.keys(this.cache).filter(
      (pathname) => now - this.cache[pathname].timestamp > this.cache[pathname].ttl
    )

    expiredPaths.forEach((pathname) => {
      delete this.cache[pathname]
      console.log(`Cleared expired cache for: ${pathname}`)
    })
  }

  /**
   * Clear all cache
   */
  clearAllCache(): void {
    this.cache = {}
    console.log('Cleared all banner cache')
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; pathnames: string[] } {
    return {
      size: Object.keys(this.cache).length,
      pathnames: Object.keys(this.cache)
    }
  }

  private normalizePath(pathname: string): string {
    // Remove trailing slash except for root
    return pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  }

  private isCacheValid(pathname: string): boolean {
    const cached = this.cache[pathname]
    if (!cached) return false

    const now = Date.now()
    return now - cached.timestamp < cached.ttl
  }

  private setCache(pathname: string, banners: Banner[]): void {
    // Implement LRU eviction if cache is full
    if (Object.keys(this.cache).length >= this.MAX_CACHE_SIZE) {
      this.evictOldestEntry()
    }

    this.cache[pathname] = {
      banners,
      timestamp: Date.now(),
      ttl: this.DEFAULT_TTL
    }
  }

  private evictOldestEntry(): void {
    const pathnames = Object.keys(this.cache)
    if (pathnames.length === 0) return

    let oldestPath = pathnames[0]
    let oldestTimestamp = this.cache[oldestPath].timestamp

    for (const pathname of pathnames) {
      if (this.cache[pathname].timestamp < oldestTimestamp) {
        oldestPath = pathname
        oldestTimestamp = this.cache[pathname].timestamp
      }
    }

    delete this.cache[oldestPath]
    console.log(`Evicted oldest cache entry: ${oldestPath}`)
  }
}

// Export singleton instance
export const bannerCache = new BannerCacheService()

// Export the class for testing
export { BannerCacheService }
