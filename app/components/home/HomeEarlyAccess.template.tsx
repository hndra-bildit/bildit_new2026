// HomeEarlyAccess:v1.0 legacy=true
import React from "react";
import { homeSectionSubtitleOnDarkClassName, homeSectionTitleOnDarkClassName } from "@/app/components/Components";
import { cn } from "@/app/components/Components";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const GET_ITEMS = ['FREE Implementation', 'FREE Training', 'FREE 180 Day Trial'];
const BONUS_ITEMS = ['White-glove onboarding', 'Direct access to our engineering team', 'Elevated template starter pack'];
const CTA_GRADIENT = 'linear-gradient(90deg, rgb(200, 80, 240) 0%, rgb(232, 69, 144) 100%)';

/**
 * Figma Early Access section (4729:27157): program CTA card with benefits and link to `/early-access-program/`.
 */
export function HomeEarlyAccess({
  className
}) {
  // group { 1. General }
  const roundedCorners = $(roundedCorners:Boolean=true);
  const span = $(span:RichText='u2713'); // endgroup
  // group { 2. div }
  const sectionDivRoundedCornersToggle = $(sectionDivRoundedCornersToggle:Boolean=true); // endgroup
  // group { 3. div }
  const divH2Text = $(divH2Text:RichText='Join our early access program.');
  const divImageSrcValue = $(divImageSrcValue:String='/images/home-early-access/line-waves.png');
  const divLinkHrefValue = $(divLinkHrefValue:String='/early-access-program/');
  const divLinkRoundedCornersToggle = $(divLinkRoundedCornersToggle:Boolean=true);
  const divLinkText = $(divLinkText:RichText='Request Access');
  const divPText = $(divPText:RichText='If you\'re excited about creating and personalizing amazing content with a visual editor and live previews, we want you. We are looking for 10 eCommerce brands who want to use our product for free for six months with our training and implementation.'); // endgroup
  return <section className={cn('home-scheme-light relative w-full overflow-hidden bg-white py-16 md:py-24', className)} aria-labelledby="home-early-access-heading">
      <div className={`pointer-events-none absolute left-1/2 top-[106px] size-[500px] -translate-x-1/2 bg-[rgba(200,80,240,0.08)] blur-[120px] ${sectionDivRoundedCornersToggle ? "rounded-full" : ""}`} aria-hidden data-bildit-var-name="sectionDivRoundedCornersToggle" data-bildit-var-type="Boolean" />

      <div className="relative mx-auto max-w-[1512px] px-3 sm:px-4">
        <div className={cn('relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 overflow-hidden rounded-3xl', 'border border-black/[0.08] bg-white/70 px-6 py-12 shadow-[0px_0px_40px_0px_rgba(200,80,240,0.15),0px_0px_80px_0px_rgba(232,69,144,0.08)]', 'sm:px-10 md:gap-10 md:px-[100px] md:py-14')}>
          <div className={`pointer-events-none absolute inset-0 overflow-hidden bg-[#0d0118] ${sectionDivRoundedCornersToggle ? "rounded-3xl" : ""}`} aria-hidden data-bildit-var-name="sectionDivRoundedCornersToggle" data-bildit-var-type="Boolean" />
          <div className="pointer-events-none absolute -left-[29px] -top-0.5 h-[720px] w-[min(1280px,calc(100%+58px))] opacity-90" aria-hidden>
            <Image src={divImageSrcValue} alt="" fill className="object-cover object-center" sizes="(max-width: 1200px) 100vw, 1200px" data-bildit-var-name="divImageSrcValue" data-bildit-var-type="String" />
          </div>
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0118]/40 via-transparent to-[#0d0118]/55 ${sectionDivRoundedCornersToggle ? "rounded-3xl" : ""}`} aria-hidden data-bildit-var-name="sectionDivRoundedCornersToggle" data-bildit-var-type="Boolean" />

          <div className="relative z-[1] flex flex-col items-center gap-10">
            <div className="flex justify-center">
              <div className={`flex size-16 items-center justify-center bg-white px-3 ${sectionDivRoundedCornersToggle ? "rounded-2xl" : ""}`} data-bildit-var-name="sectionDivRoundedCornersToggle" data-bildit-var-type="Boolean">
                <Image src={divImageSrcValue} alt="" width={32} height={32} className="size-8" data-bildit-var-name="divImageSrcValue" data-bildit-var-type="String" />
              </div>
            </div>

            <div className="flex max-w-[768px] flex-col gap-2.5 text-center">
              <h2 id="home-early-access-heading" className={cn(homeSectionTitleOnDarkClassName, 'text-[#f0e6ff]')} data-bildit-var-name="divH2Text" data-bildit-var-type="RichText">
                {divH2Text}
              </h2>
              <p className={cn(homeSectionSubtitleOnDarkClassName, 'max-w-none text-lg leading-[29.25px]')} data-bildit-var-name="divPText" data-bildit-var-type="RichText">
                {divPText}
              </p>
            </div>

            <div className="flex w-full max-w-[900px] flex-col gap-12">
              <div className="flex flex-col items-start justify-center gap-10 md:flex-row md:gap-[60px]">
                <div className="flex flex-col gap-2.5 text-[#f0e6ff]">
                  <p className="font-[family-name:var(--font-uncut-sans)] text-xl font-bold leading-7" data-bildit-var-name="divPText" data-bildit-var-type="RichText">
                    {divPText}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {GET_ITEMS.map(item => <li key={item} className="flex items-center gap-2.5">
                        <span className={`flex size-6 shrink-0 items-center justify-center text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)] ${roundedCorners ? "rounded-full" : ""}`} aria-hidden data-bildit-var-name="roundedCorners" data-bildit-var-type="Boolean">
                          {span}
                        </span>
                        <span className="font-[family-name:var(--font-uncut-sans)] text-lg leading-7 text-[#f0e6ff]">
                          {item}
                        </span>
                      </li>)}
                  </ul>
                </div>
                <div className="flex flex-col gap-2.5">
                  <p className="font-[family-name:var(--font-uncut-sans)] text-xl font-bold leading-7 text-[#f0e6ff]" data-bildit-var-name="divPText" data-bildit-var-type="RichText">
                    {divPText}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {BONUS_ITEMS.map(item => <li key={item} className="flex items-center gap-2.5">
                        <span className={`flex size-6 shrink-0 items-center justify-center text-xs font-bold text-white [background-image:var(--bildit-gradient-check-chip)] ${roundedCorners ? "rounded-full" : ""}`} aria-hidden data-bildit-var-name="roundedCorners" data-bildit-var-type="Boolean">
                          {span}
                        </span>
                        <span className="font-[family-name:var(--font-uncut-sans)] text-lg leading-7 text-[#f0e6ff]">
                          {item}
                        </span>
                      </li>)}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2.5 px-0 sm:px-8 md:px-[162px]">
                <Link href={divLinkHrefValue} className={`font-[family-name:var(--font-uncut-sans)] inline-flex items-center gap-2.5 px-5 py-2 text-base font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98] ${divLinkRoundedCornersToggle ? "rounded-full" : ""}`} style={{
                backgroundImage: CTA_GRADIENT
              }} data-bildit-var-name="divLinkHrefValue" data-bildit-var-type="String">
                  {divLinkText}
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
export default HomeEarlyAccess;