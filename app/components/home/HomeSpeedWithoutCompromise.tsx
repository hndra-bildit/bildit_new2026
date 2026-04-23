import { NoLimitationsFeatureCarousel } from '@/app/components/home/NoLimitationsFeatureCarousel'
import {
  homeSectionEyebrowClassName,
  homeSectionSubtitleClassName,
  homeSectionTitleClassName
} from '@/app/components/home/home-section-typography'
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
      <div className="relative flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
        <header
          className={cn('mx-auto flex w-full max-w-[768px] flex-col items-center gap-4 text-center', sectionPaddingX)}
        >
          <p className={cn(homeSectionEyebrowClassName, 'text-neutral-900')}>
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
