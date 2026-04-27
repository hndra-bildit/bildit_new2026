// HomeSpeedWithoutCompromise:v1.0 legacy=true
import React from "react";
import { NoLimitationsFeatureCarousel } from "@/app/components/Components";
import { homeSectionEyebrowClassName, homeSectionSubtitleClassName, homeSectionTitleClassName } from "@/app/components/Components";
import { cn } from "@/app/components/Components";
const sectionPaddingX = 'px-6 sm:px-8 md:px-10 lg:px-[116px]';
export function HomeSpeedWithoutCompromise({
  className
}) {
  // group { 1. div }
  const headerH2Text = $(headerH2Text:RichText='No Limitations.');
  const headerPText = $(headerPText:RichText='Visual Experience Engine'); // endgroup
  return <section className={cn('home-scheme-light relative w-full overflow-x-hidden rounded-b-[64px] bg-white text-neutral-900', className)}>
      <div className="relative flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
        <header className={cn('mx-auto flex w-full max-w-[768px] flex-col items-center gap-4 text-center', sectionPaddingX)}>
          <p className={cn(homeSectionEyebrowClassName, 'text-neutral-900')} data-bildit-var-name="headerPText" data-bildit-var-type="RichText">{headerPText}</p>
          <h2 className={cn('text-balance', homeSectionTitleClassName)} data-bildit-var-name="headerH2Text" data-bildit-var-type="RichText">{headerH2Text}</h2>
          <p className={cn(homeSectionSubtitleClassName, 'text-balance text-center')} data-bildit-var-name="headerPText" data-bildit-var-type="RichText">
            {headerPText}
          </p>
        </header>

        <NoLimitationsFeatureCarousel />
      </div>
    </section>;
}
export default HomeSpeedWithoutCompromise;