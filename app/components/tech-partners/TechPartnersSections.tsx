import { LogoImage } from '@/app/components/LogoImage'
import {
  homeSectionEyebrowClassName,
  homeSectionSubtitleClassName,
  homeSectionTitleClassName
} from '@/app/components/home/home-section-typography'
import { MarketersSolutionsCtaForm } from '@/app/components/solutions/MarketersSolutionsCtaForm'
import {
  TECH_PARTNERS_AIRSHIP_LOGO,
  TECH_PARTNERS_ASTOUND_LOGO,
  TECH_PARTNERS_COMMERCE_CLOUD_LOGO,
  TECH_PARTNERS_COMMERCETOOLS_LOGO,
  TECH_PARTNERS_FLYBUY_LOGO,
  TECH_PARTNERS_GRINTEQ_LOGO,
  TECH_PARTNERS_INSIGHT_GLOBAL_LOGO
} from '@/app/lib/tech-partners-assets'
import { PRICING_PAGE_SURFACE_CLASS } from '@/app/lib/pricing-home-insets'
import { TECH_PARTNERS_INTEGRATIONS } from '@/app/lib/tech-partners-integrations'
import { cn } from '@/utils/cn'

function integrationLogoClassName(logoSrc: string) {
  if (logoSrc.includes('sap-hybris') || logoSrc.includes('bazaarvoice')) {
    return 'max-w-none'
  }
  return 'max-w-[min(100%,210px)]'
}

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
        <div className="mx-auto flex w-full min-w-0 justify-center">
          <LogoImage src={logoSrc} alt={logoAlt} className="max-w-[min(100%,200px)] md:max-w-[min(100%,220px)]" />
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
  const bareLogo = logoSrc.includes('aci-payon') || logoSrc.includes('apple-pay')
  return (
    <div className="flex min-w-0 flex-col items-center gap-4">
      <div className="box-border flex w-full min-w-0 items-center justify-center rounded-[14px] border border-[#d9d9d9] bg-[#f5f7fa] px-6 py-10 shadow-[0px_2px_3px_0px_rgba(0,0,0,0.05)]">
        <span className="inline-block w-fit max-w-full leading-none">
          <LogoImage
            src={logoSrc}
            alt={`${name} logo`}
            heightPx={logoSrc.includes('apple-pay') ? 70 : 50}
            bare={bareLogo}
            className={bareLogo ? undefined : integrationLogoClassName(logoSrc)}
          />
        </span>
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
        className={cn(
          'relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-[116px] lg:py-24',
          PRICING_PAGE_SURFACE_CLASS
        )}
        aria-labelledby="tech-partners-integrators-heading"
      >
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 md:gap-16">
          <header className="flex flex-col items-center gap-4 text-center md:gap-5">
            <p className={cn(homeSectionEyebrowClassName, 'text-neutral-600')}>Tech Partners</p>
            <h2 id="tech-partners-integrators-heading" className={cn('text-balance', homeSectionTitleClassName)}>
              Solutions Integrators
            </h2>
            <p className={cn(homeSectionSubtitleClassName, 'mx-auto text-balance text-center')}>
              We work with the best in the eCommerce industry. Partners of all sizes can implement the BILDIT Visual
              Experience Engine.
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <ShowcaseCard
              title="Astound Commerce"
              description="We create digital commerce experiences that engage consumers, increase sales & fuel exponential growth."
              logoSrc={TECH_PARTNERS_ASTOUND_LOGO}
              logoAlt="Astound Commerce"
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
        className={cn(
          'relative overflow-hidden px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-[116px] lg:py-24',
          PRICING_PAGE_SURFACE_CLASS
        )}
        aria-labelledby="tech-partners-network-heading"
      >
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-12 md:gap-16">
          <header className="flex flex-col items-center gap-4 text-center md:gap-5">
            <h2
              id="tech-partners-network-heading"
              className="text-balance font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl md:leading-[1.1]"
            >
              Partner Network
            </h2>
            <p className={cn(homeSectionSubtitleClassName, 'mx-auto text-balance text-center')}>
              We partner and integrate with the best platforms in the industry.
            </p>
          </header>
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
        className={cn(
          'px-4 py-16 sm:px-6 md:px-10 md:py-20 lg:px-[116px] lg:py-24',
          PRICING_PAGE_SURFACE_CLASS
        )}
        aria-labelledby="tech-partners-integrations-heading"
      >
        <div className="mx-auto max-w-[1280px]">
          <header className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16 md:gap-5">
            <h2
              id="tech-partners-integrations-heading"
              className="text-balance font-[family-name:var(--font-uncut-sans)] text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl md:leading-[1.1]"
            >
              Integrations
            </h2>
          </header>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {TECH_PARTNERS_INTEGRATIONS.map((item) => (
              <div key={item.name} className="min-w-0">
                <IntegrationLogoCard name={item.name} logoSrc={item.logoSrc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={cn('relative overflow-hidden px-3 py-16 sm:px-4 md:py-24', PRICING_PAGE_SURFACE_CLASS)}
        aria-labelledby="tech-partners-cta-heading"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute -left-20 -top-24 size-[580px] rounded-full opacity-20 blur-[36px]"
            style={{
              background: 'radial-gradient(circle, rgba(200,80,240,0.45) 0%, rgba(200,80,240,0) 70%)'
            }}
          />
          <div
            className="absolute -bottom-20 -right-16 size-[480px] rounded-full opacity-15 blur-[36px]"
            style={{
              background: 'radial-gradient(circle, rgba(237,30,121,0.4) 0%, rgba(237,30,121,0) 70%)'
            }}
          />
        </div>

        <div className="relative mx-auto flex max-w-[700px] flex-col items-center gap-10 px-2 text-center md:gap-12">
          <div className="flex flex-col gap-5">
            <p className={cn(homeSectionEyebrowClassName, 'text-neutral-900')}>Get started</p>
            <h2
              id="tech-partners-cta-heading"
              className="font-[family-name:var(--font-uncut-sans)] text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl md:leading-[72px]"
            >
              <span className="block">Ready to make</span>
              <span
                className="block bg-gradient-to-r from-[#e84590] to-[#c850f0] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                the move?
              </span>
            </h2>
            <p className="font-[family-name:var(--font-uncut-sans)] text-lg text-[#595959]">
              We onboard a limited number of teams each month. Secure your spot.
            </p>
          </div>
          <MarketersSolutionsCtaForm source="tech-partners" className="mt-0 w-full max-w-[480px]" />
        </div>
      </section>
    </>
  )
}
