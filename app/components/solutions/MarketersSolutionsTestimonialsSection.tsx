import { HomeWorkflowSocialStrip } from '@/app/components/home/HomeWorkflowSocialStrip'
import {
  homeSectionEyebrowClassName,
  homeSectionTitleOnDarkClassName
} from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'

/**
 * Marketers “Section - TESTIMONIALS” (Figma 4978:16269).
 * Quotes and carousel match `HomeWorkflowSocialStrip` / pricing — real customer testimonials from `SOCIAL_PROOF_TESTIMONIALS`.
 */
export function MarketersSolutionsTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d0118] px-4 py-16 text-white md:px-[116px] md:py-[100px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 top-0 size-[600px] max-h-[400px] -translate-x-1/2 rounded-[250px] opacity-15 blur-[36px]"
          style={{
            background: 'radial-gradient(circle, rgba(237,30,121,0.3) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-10 md:gap-14">
        <header className="flex flex-col items-center gap-3.5 text-center">
          <p className={cn(homeSectionEyebrowClassName, 'text-[#a07dc0]')}>What teams say</p>
          <h2 className={homeSectionTitleOnDarkClassName}>
            <span className="block">Built for speed.</span>
            <span className="block">Loved by marketers.</span>
          </h2>
        </header>
        <HomeWorkflowSocialStrip
          variant="dark"
          prominent
          className="w-full max-w-[1280px]"
          id="marketers-solutions-customer-quotes"
        />
      </div>
    </section>
  )
}
