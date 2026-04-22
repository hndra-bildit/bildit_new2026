import { NoLimitationsFeatureCarousel } from '@/app/components/home/NoLimitationsFeatureCarousel'
import { homeSectionSubtitleClassName, homeSectionTitleClassName } from '@/app/components/home/home-section-typography'
import { cn } from '@/utils/cn'

const sectionPaddingX = 'px-6 sm:px-8 md:px-10 lg:px-[116px]'

export function HomeSpeedWithoutCompromise({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        'home-scheme-light relative w-full overflow-x-hidden rounded-b-[64px] bg-white text-neutral-900',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-[72px] flex justify-center px-6 sm:px-8" aria-hidden>
        <div className="relative h-[280px] w-full max-w-[min(560px,calc(100%-2rem))]">
          <div className="absolute left-[18%] top-[52%] size-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(124,58,237,0.14)] blur-[72px]" />
          <div className="absolute left-[58%] top-[38%] size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(232,69,144,0.085)] blur-[72px]" />
        </div>
      </div>

      <div className="relative flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
        <header
          className={cn('mx-auto flex w-full max-w-[768px] flex-col items-center gap-4 text-center', sectionPaddingX)}
        >
          <p className="font-[family-name:var(--font-uncut-sans)] text-xs font-semibold uppercase tracking-[0.12em] text-[#633b9c]">
            Visual Experience Engine
          </p>
          <h2 className={cn('text-balance', homeSectionTitleClassName)}>No Limitations.</h2>
          <p className={cn(homeSectionSubtitleClassName, 'text-balance text-center')}>
            Never compromise: get every tool your storefront needs; designed to move as fast as your ideas.
          </p>
        </header>

        <NoLimitationsFeatureCarousel />
      </div>
    </section>
  )
}
