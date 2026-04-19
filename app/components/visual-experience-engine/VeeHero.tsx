import { GradientCtaButton } from '@/app/components/solutions/GradientCtaButton'
import { veeHeroBg, veeHeroProjectTitle, veeHeroVector308 } from '@/app/lib/vee-hero-assets'
import Image from 'next/image'
import Link from 'next/link'

export function VeeHero() {
  return (
    <section className="relative px-4 pb-6 pt-28 md:px-8 md:pb-10 md:pt-32">
      <div className="relative mx-auto max-w-[1470px] overflow-hidden rounded-[32px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)] md:rounded-[55px]">
        <div className="relative min-h-[560px] md:min-h-[640px] lg:min-h-[667px]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[#fafafa]" />
            <Image
              src={veeHeroBg}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1470px) 100vw, 1470px"
              priority
            />
            <div
              className="absolute right-[-8%] top-[18%] size-[min(500px,50vw)] rounded-full opacity-25 blur-[64px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(237,30,121,0.12) 0%, rgba(59,30,237,0.1) 55%, transparent 70%)'
              }}
            />
          </div>

          <div className="pointer-events-none absolute right-0 top-[12%] hidden w-[55%] max-w-[761px] lg:block">
            <div className="relative">
              <Image
                src={veeHeroVector308}
                alt=""
                width={629}
                height={444}
                className="pointer-events-none absolute right-[5%] top-[18%] w-[82%] max-w-none"
              />
              <Image
                src={veeHeroProjectTitle}
                alt="BILDIT Visual Experience Engine product preview"
                width={761}
                height={583}
                className="relative z-[1] w-full"
                priority
              />
            </div>
          </div>

          <div className="relative z-[2] flex max-w-[720px] flex-col gap-8 px-6 py-14 md:px-10 md:py-20 lg:max-w-[642px] lg:pl-[114px] lg:pr-0">
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

          <div className="relative z-[2] px-6 pb-10 md:hidden">
            <Image
              src={veeHeroProjectTitle}
              alt="BILDIT Visual Experience Engine product preview"
              width={761}
              height={583}
              className="mx-auto w-full max-w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
