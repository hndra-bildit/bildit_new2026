import { SiteHeroTopSpacer } from '@/app/components/site-header/SiteHeroTopSpacer'
import { MARKETERS_SOLUTIONS_HERO_BG } from '@/app/lib/marketers-solutions-hero-bg'
import Image from 'next/image'

/**
 * Marketing hero shell aligned with `VeeHero` / pricing — centered headline (Figma 4588:10109).
 */
export function TechPartnersHero() {
  return (
    <section
      id="tech-partners-hero"
      data-header-surface="light"
      className="relative m-0 flex h-svh max-h-svh w-full flex-col overflow-hidden rounded-none sm:mt-[calc((1rem+20px)*0.42-10px)] sm:mb-[calc((1rem+20px)*0.315)] sm:ml-[calc((1rem+20px)*0.42-10px)] sm:mr-[calc((1rem+20px)*0.42-10px)] sm:h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:max-h-[calc(100svh-(1rem+20px)*0.735+10px)] sm:w-auto sm:rounded-[29px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#fafafa]" aria-hidden />
        <Image
          src={MARKETERS_SOLUTIONS_HERO_BG}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1536px) 100vw, 1512px"
        />
        <div
          className="absolute -left-48 top-[-12rem] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(237,30,121,0.15)_0%,rgba(59,30,237,0.08)_45%,transparent_70%)] blur-[64px]"
          aria-hidden
        />
        <div
          className="absolute -right-32 top-1/3 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(237,30,121,0.12)_0%,rgba(59,30,237,0.1)_50%,transparent_72%)] blur-[64px]"
          aria-hidden
        />
      </div>
      <SiteHeroTopSpacer />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-10 sm:py-20">
          <div className="flex max-w-[980px] flex-col items-center gap-8 md:gap-10">
            <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.28em] text-[#171717]">
              Tech Partners
            </p>
            <h1 className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#171717] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.06]">
              Elevate Your eCommerce with Our Tech Partners!
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
