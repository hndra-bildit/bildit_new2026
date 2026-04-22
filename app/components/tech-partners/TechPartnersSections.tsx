import { MarketersSolutionsCtaForm } from '@/app/components/solutions/MarketersSolutionsCtaForm'
import {
  TECH_PARTNERS_AIRSHIP_LOGO,
  TECH_PARTNERS_ASTOUND_LOGO,
  TECH_PARTNERS_COMMERCE_CLOUD_LOGO,
  TECH_PARTNERS_COMMERCETOOLS_LOGO,
  TECH_PARTNERS_FLYBUY_LOGO,
  TECH_PARTNERS_GRINTEQ_LOGO,
  TECH_PARTNERS_INSIGHT_GLOBAL_LOGO,
  TECH_PARTNERS_WALLOP_LOGO
} from '@/app/lib/tech-partners-assets'
import { TECH_PARTNERS_INTEGRATIONS } from '@/app/lib/tech-partners-integrations'
import { cn } from '@/utils/cn'
import Image from 'next/image'

function ShowcaseCard({
  title,
  description,
  logoSrc,
  logoAlt,
  logoAreaClassName
}: {
  title: string
  description: string
  logoSrc: string
  logoAlt: string
  logoAreaClassName?: string
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[14px] border border-[#d3d6db] bg-white shadow-[0px_2px_3px_0px_rgba(0,0,0,0.05)]">
      <div
        className={cn(
          'flex items-center justify-center bg-[#f5f7fa] px-8 py-10',
          logoAreaClassName ?? 'min-h-[190px] md:min-h-[190px]'
        )}
      >
        <div className="relative h-14 w-full max-w-[280px] shrink-0 md:h-[72px]">
          <Image src={logoSrc} alt={logoAlt} fill unoptimized className="object-contain object-center" sizes="280px" />
        </div>
      </div>
      <div className="flex min-h-[200px] flex-col gap-2.5 border-t border-[#d3d6db] px-6 py-7 md:min-h-[220px]">
        <h3 className="font-[family-name:var(--font-uncut-sans)] text-xl font-bold text-[#171717] md:text-2xl">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-[#595959] md:text-lg md:leading-[1.6]">{description}</p>
      </div>
    </article>
  )
}

function IntegrationLogoCard({ name, logoSrc }: { name: string; logoSrc: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-[191px] w-full items-center justify-center rounded-[14px] border border-[#d9d9d9] bg-[#f5f7fa] px-6 py-6 shadow-[0px_2px_3px_0px_rgba(0,0,0,0.05)]">
        <div className="relative h-[94px] w-full max-w-[210px] shrink-0">
          <Image
            src={logoSrc}
            alt={`${name} logo`}
            fill
            unoptimized
            className="object-contain object-center"
            sizes="210px"
          />
        </div>
      </div>
      <p className="text-center font-[family-name:var(--font-uncut-sans)] text-lg font-bold text-[#171717] md:text-2xl">
        {name}
      </p>
    </div>
  )
}

export function TechPartnersSections() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-[#fafafa] px-4 py-16 sm:px-6 md:py-24 lg:px-[116px] lg:py-[100px]"
        aria-labelledby="tech-partners-integrators-heading"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-[-6rem] size-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,80,240,0.35)_0%,transparent_68%)] opacity-40 blur-[72px]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 md:gap-16">
          <h2
            id="tech-partners-integrators-heading"
            className="text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold tracking-tight text-[#171717] md:text-5xl md:leading-[1.15]"
          >
            Solutions Integrators
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <ShowcaseCard
              title="Astound Commerce"
              description="We create digital commerce experiences that engage consumers, increase sales & fuel exponential growth."
              logoSrc={TECH_PARTNERS_ASTOUND_LOGO}
              logoAlt="Astound Commerce"
            />
            <ShowcaseCard
              title="Wallop"
              description="Wallop is an independent creative and digital strategy firm generating growth and impact for hospitality and travel experiences."
              logoSrc={TECH_PARTNERS_WALLOP_LOGO}
              logoAlt="Wallop"
            />
            <ShowcaseCard
              title="Grinteq"
              description="Solving tech challenges for ecommerce brands worldwide: from the forefront payment services to giant web stores."
              logoSrc={TECH_PARTNERS_GRINTEQ_LOGO}
              logoAlt="Grinteq"
            />
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-[116px] lg:py-[100px]"
        aria-labelledby="tech-partners-network-heading"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 size-[695px] -translate-x-1/2 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(200,80,240,0.28)_0%,transparent_70%)] opacity-35 blur-[72px]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 md:gap-16">
          <h2
            id="tech-partners-network-heading"
            className="text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold tracking-tight text-[#171717] md:text-5xl md:leading-[1.15]"
          >
            Partner Network
          </h2>
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <ShowcaseCard
                title="Flybuy"
                description="Radius Networks is a location technology company that helps companies conduct location-based transactions with customers."
                logoSrc={TECH_PARTNERS_FLYBUY_LOGO}
                logoAlt="Flybuy"
                logoAreaClassName="min-h-[200px] md:min-h-[238px]"
              />
              <ShowcaseCard
                title="Airship"
                description="Helping brands master Mobile App Experiences (MAX) to engage customers and win their loyalty."
                logoSrc={TECH_PARTNERS_AIRSHIP_LOGO}
                logoAlt="Airship"
                logoAreaClassName="min-h-[200px] md:min-h-[238px]"
              />
              <ShowcaseCard
                title="Commerce Cloud"
                description="Commerce Cloud powers commerce everywhere with AI, data, and CRM."
                logoSrc={TECH_PARTNERS_COMMERCE_CLOUD_LOGO}
                logoAlt="Salesforce Commerce Cloud"
                logoAreaClassName="min-h-[200px] md:min-h-[238px]"
              />
            </div>
            <div className="mx-auto grid w-full max-w-[880px] gap-8 md:grid-cols-2 lg:gap-10">
              <ShowcaseCard
                title="Commercetools"
                description="Powerful E-Commerce Business — Deliver Seamless Customer Experiences Across Channels."
                logoSrc={TECH_PARTNERS_COMMERCETOOLS_LOGO}
                logoAlt="Commercetools"
                logoAreaClassName="min-h-[200px] md:min-h-[238px]"
              />
              <ShowcaseCard
                title="Insight Global"
                description="International staffing and services company specializing in sourcing IT, accounting, finance, healthcare, and engineering professionals."
                logoSrc={TECH_PARTNERS_INSIGHT_GLOBAL_LOGO}
                logoAlt="Insight Global"
                logoAreaClassName="min-h-[200px] md:min-h-[238px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#fafafa] px-4 py-16 sm:px-6 md:py-24 lg:px-[116px] lg:py-[100px]"
        aria-labelledby="tech-partners-integrations-heading"
      >
        <div className="mx-auto max-w-[1280px]">
          <h2
            id="tech-partners-integrations-heading"
            className="mb-12 text-center font-[family-name:var(--font-uncut-sans)] text-3xl font-bold tracking-tight text-[#171717] md:mb-16 md:text-5xl md:leading-[1.15]"
          >
            Integrations
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {TECH_PARTNERS_INTEGRATIONS.map((item) => (
              <IntegrationLogoCard key={item.name} name={item.name} logoSrc={item.logoSrc} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#fafafa] px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-[100px]"
        aria-labelledby="tech-partners-cta-heading"
      >
        <div
          className="pointer-events-none absolute -left-16 top-24 size-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,80,240,0.45)_0%,transparent_68%)] opacity-25 blur-[72px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-0 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,80,240,0.4)_0%,transparent_68%)] opacity-25 blur-[72px]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-10 text-center md:gap-12">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="font-[family-name:var(--font-uncut-sans)] text-[13px] font-medium uppercase tracking-[0.08em] text-[#595959]">
              Get started
            </p>
            <h2 id="tech-partners-cta-heading" className="flex flex-col items-center">
              <span className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold tracking-tight text-[#171717] md:text-6xl md:leading-[1.05] lg:text-[72px] lg:leading-[1.08]">
                Ready to make
              </span>
              <span
                className="bg-clip-text font-[family-name:var(--font-uncut-sans)] text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-[72px] lg:leading-[1.08]"
                style={{
                  WebkitBackgroundClip: 'text',
                  backgroundImage: 'linear-gradient(90deg, #e84590 0%, #c850f0 100%)'
                }}
              >
                the move?
              </span>
            </h2>
            <p className="mx-auto max-w-[560px] text-base text-[#595959] md:text-lg">
              We onboard a limited number of teams each month. Secure your spot.
            </p>
          </div>
          <MarketersSolutionsCtaForm source="tech-partners" />
        </div>
      </section>
    </>
  )
}
