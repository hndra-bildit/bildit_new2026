import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { veeHeroPrimaryArt } from '@/app/lib/vee-hero-assets'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Figma-aligned marketing hero: same inset + rounded shell as HomeHero / marketers solutions
 * (`SiteHeader` `isHomeLayout` + `data-header-surface` for the floating nav pill).
 */
export function VeeHero() {
  return (
    <section
      id="visual-experience-engine-hero"
      data-header-surface="light"
      className="relative m-0 flex min-h-svh w-full flex-col overflow-hidden rounded-none pt-[calc(70px+30px+0.75rem)] sm:m-[calc((1rem+20px)*0.42)] sm:min-h-[calc(100svh-(1rem+20px)*0.84)] sm:w-auto sm:rounded-[51px] sm:shadow-[0_0_5px_rgba(0,0,0,0.3)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#fafafa]" aria-hidden />
      <div
        className="pointer-events-none absolute right-[-8%] top-[18%] size-[min(500px,50vw)] rounded-full opacity-25 blur-[64px]"
        style={{
          background:
            'radial-gradient(circle, rgba(237,30,121,0.12) 0%, rgba(59,30,237,0.1) 55%, transparent 70%)'
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col lg:flex-row lg:items-center lg:gap-6">
        <div className="flex max-w-[720px] flex-col gap-8 px-6 py-14 md:px-10 md:py-20 lg:max-w-[642px] lg:flex-1 lg:pl-[114px] lg:pr-0">
          <h1 className="font-uncut-sans text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-[#171717] md:text-5xl md:leading-[1.08] lg:text-[72px] lg:leading-[72px]">
            <span className="font-bold">BILDIT</span>
            <span> Visual Experience Engine</span>
          </h1>
          <p className="max-w-[642px] text-lg leading-[1.45] text-[#595959] md:text-2xl md:leading-[1.58]">
            Take control over digital marketing campaigns across web, mobile apps, email, and push notifications
            without waiting on deployments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <GradientCtaButton href="/pricing/" variant="figma-long" className="md:h-12 md:px-6">
              Start Building
            </GradientCtaButton>
            <Link
              href="/pricing/"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#d3d6db] bg-white px-5 text-base font-bold text-[#171717] md:h-12 md:px-6"
            >
              Download Demo: Free Tier
            </Link>
          </div>
        </div>

        <div className="relative flex flex-1 justify-center px-6 pb-12 pt-2 sm:px-10 lg:max-w-[min(761px,52%)] lg:justify-end lg:pb-20 lg:pr-12 lg:pt-20">
          <div className="relative w-full max-w-[520px] lg:max-w-[576px]">
            <Image
              src={veeHeroPrimaryArt}
              alt="BILDIT Visual Experience Engine product preview"
              width={430}
              height={415}
              className="h-auto w-full object-contain object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 576px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
