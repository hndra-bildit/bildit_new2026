// @template v2

import { homeSectionSubtitleOnDarkClassName, homeSectionTitleOnDarkClassName } from "@/cmsDependencies";
import { cn } from "@/cmsDependencies";
import { ArrowRight, X } from "@/cmsDependencies";
import Image from 'next/image';
import Link from 'next/link';

/**
 * Figma: Section (node 4726:15551) — CTA band below FAQ.
 */
export function HomePostFaqCta({
  className
}: {
  className?: string;
}) {
  return <section className={cn('w-full', className)} aria-labelledby="home-post-faq-cta-heading">
      <div className={`relative w-full overflow-hidden px-6 py-16 sm: sm:px-10 md:px-16 md:py-20 lg:px-[116px] lg:py-[100px] ${sectionDivRoundedCornersToggle ? "rounded-none" : ""}`}>
        <div aria-hidden className={`pointer-events-none absolute inset-0 sm: ${sectionDivRoundedCornersToggle ? "rounded-none" : ""}`}>
          <div className={`absolute inset-0 bg-black sm: ${sectionDivRoundedCornersToggle ? "rounded-none" : ""}`} />
          <div className={`absolute inset-0 sm: ${sectionDivRoundedCornersToggle ? "rounded-none" : ""}`}>
            <div className={`relative size-full sm: ${sectionDivRoundedCornersToggle ? "rounded-none" : ""}`}>
              <Image src={divImageSrcValue} alt="" fill sizes="100vw" className={`object-cover opacity-[0.35] sm: ${divImageRoundedCornersToggle ? "rounded-none" : ""}`} priority={false} />
            </div>
          </div>
          <div className={`absolute inset-0 sm: ${sectionDivRoundedCornersToggle ? "rounded-none" : ""}`} style={{
          backgroundImage: 'linear-gradient(114.47deg, rgba(0, 0, 0, 0.45) 0.54%, rgba(0, 0, 0, 0.157) 100%)'
        }} />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 text-center md:gap-10">
          <h2 id="home-post-faq-cta-heading" className={cn(homeSectionTitleOnDarkClassName, 'max-w-[900px] text-center text-[#f0e6ff]')}>
            <span className="block">{h2SpanText}</span>
            <span className="block">{h2SpanText}</span>
          </h2>

          <div className={cn(homeSectionSubtitleOnDarkClassName, 'flex max-w-none flex-wrap items-center justify-center gap-x-4 gap-y-2 text-lg md:gap-x-8 md:text-[18px] md:leading-7')}>
            <p className="px-2.5 py-2.5">{divPText}</p>
            <div className="flex items-center gap-2.5 px-2.5 py-2.5">
              <X className="size-6 shrink-0" strokeWidth={2.25} aria-hidden />
              <p className="leading-7">{divPText}</p>
            </div>
            <div className="flex items-center gap-2.5 px-2.5 py-2.5">
              <X className="size-6 shrink-0" strokeWidth={2.25} aria-hidden />
              <p className="leading-7">{divPText}</p>
            </div>
          </div>

          <p className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-none text-center text-base tracking-[0.2em] text-white sm:text-lg md:text-xl md:tracking-[3px]')}>
            {divPText}
          </p>

          <p className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-none text-center sm:text-lg md:text-[18px]')}>
            {divPText}
          </p>

          <Link href={divLinkHrefValue} className={`font-[family-name:var(--font-uncut-sans)] inline-flex h-10 items-center justify-center gap-2 bg-gradient-to-r from-[#c850f0] to-[#e84590] px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${divLinkRoundedCornersToggle ? "rounded-full" : ""}`}>
            {divLinkText}
            <ArrowRight className="size-4 shrink-0" aria-hidden />
          </Link>

          <p className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-xl text-sm leading-5 text-[#f0e6ff] sm:text-sm md:text-[14px] md:leading-5')}>
            {divPText}
          </p>
        </div>
      </div>
    </section>;
}