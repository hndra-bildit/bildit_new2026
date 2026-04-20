"use client"
// @version v1
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// group: { 1.1 Left Headline & Subhead }
const leftHeadline = $(leftHeadline:RichText="Fall Style, Fresh Savings";color="#ffffff");
const leftSubhead = $(leftSubhead:RichText="Step into the new season with chic looks and timeless essentials—now at irresistible prices.";color="#ffffff");
const leftHeadlineMinFontSize = $(leftHeadlineMinFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.5rem");
const leftHeadlineMaxFontSize = $(leftHeadlineMaxFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="2rem");
const leftSubheadMinFontSize = $(leftSubheadMinFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const leftSubheadMaxFontSize = $(leftSubheadMaxFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
// endgroup

// group: { 1.2 Right Headline & Subhead }
const rightHeadline = $(rightHeadline:RichText="Enjoy 25–65% OFF";color="#ffffff");
const rightSubhead = $(rightSubhead:RichText="Limited-time event. Ends Sunday.";color="#ffffff");
const rightHeadlineMinFontSize = $(rightHeadlineMinFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.5rem");
const rightHeadlineMaxFontSize = $(rightHeadlineMaxFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="2rem");
const rightSubheadMinFontSize = $(rightSubheadMinFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const rightSubheadMaxFontSize = $(rightSubheadMaxFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-4");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true);
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const desktopContainerAspectRatioWidth = $(desktopContainerAspectRatioWidth:String="");
const desktopContainerAspectRatioHeight = $(desktopContainerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
const sectionPaddingDesktop = $(sectionPaddingDesktop:Dropdown[None|none,Small|small,Medium|medium,Large|large]="medium");
const sectionPaddingMobile = $(sectionPaddingMobile:Dropdown[None|none,Small|small,Medium|medium,Large|large]="medium");
// endgroup

// group: { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#2E4A4D");
const sectionBackgroundImage = $(sectionBackgroundImage:String="wkxx_2025_test_salebanner");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
const sectionBorderRadius = $(sectionBorderRadius:Dropdown[None|rounded-none,Small|rounded-sm,Medium|rounded-md,Large|rounded-lg]="rounded-md");
// endgroup

// group: { 4. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="2rem");
const sectionSubheadMinimumFontSize = $(sectionSubheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const sectionSubheadMaximumFontSize = $(sectionSubheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const headlineMinimumFontSize = $(headlineMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.5rem");
const headlineMaximumFontSize = $(headlineMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="3.375rem");
const subheadMinimumFontSize = $(subheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const highlightFontFamily = $(highlightFontFamily:String="roslindale-variable");
// endgroup

// group: { 5. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
// endgroup

// group: { 6. CTA Buttons Configuration }
const ctaButtonCount = $(ctaButtonCount:Dropdown[3 Buttons|3,4 Buttons|4,5 Buttons|5,6 Buttons|6,7 Buttons|7,8 Buttons|8]="8");
const ctaButtonBackgroundColor = $(ctaButtonBackgroundColor:Color="#ffffff");
const ctaButtonBackgroundColorHover = $(ctaButtonBackgroundColorHover:Color="#f5f5f5");
const ctaButtonBorderRadius = $(ctaButtonBorderRadius:String="4");
const ctaButtonFontSizeDesktop = $(ctaButtonFontSizeDesktop:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaButtonFontSizeMobile = $(ctaButtonFontSizeMobile:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaButtonGap = $(ctaButtonGap:String="8");
const ctaButtonWidth = $(ctaButtonWidth:String="130");
// endgroup

// group: { 7. CTA Button 1 }
const firstCtaContent = $(firstCtaContent:RichText="Women";color="#000000");
const firstCtaUrl = $(firstCtaUrl:String="/";required=true);
const firstCtaAdobeTag = $(firstCtaAdobeTag:String="cta-1";required=true);
// endgroup

// group: { 8. CTA Button 2 }
const secondCtaContent = $(secondCtaContent:RichText="Men";color="#000000");
const secondCtaUrl = $(secondCtaUrl:String="/";required=true);
const secondCtaAdobeTag = $(secondCtaAdobeTag:String="cta-2";required=true);
// endgroup

// group: { 9. CTA Button 3 }
const thirdCtaContent = $(thirdCtaContent:RichText="Kids";color="#000000");
const thirdCtaUrl = $(thirdCtaUrl:String="/";required=true);
const thirdCtaAdobeTag = $(thirdCtaAdobeTag:String="cta-3";required=true);
// endgroup

// group: { 10. CTA Button 4 }
const fourthCtaContent = $(fourthCtaContent:RichText="Shoes";color="#000000");
const fourthCtaUrl = $(fourthCtaUrl:String="/";required=true);
const fourthCtaAdobeTag = $(fourthCtaAdobeTag:String="cta-4";required=true);
// endgroup

// group: { 11. CTA Button 5 }
const fifthCtaContent = $(fifthCtaContent:RichText="Handbags";color="#000000");
const fifthCtaUrl = $(fifthCtaUrl:String="/";required=true);
const fifthCtaAdobeTag = $(fifthCtaAdobeTag:String="cta-5";required=true);
// endgroup

// group: { 12. CTA Button 6 }
const sixthCtaContent = $(sixthCtaContent:RichText="Jewelry";color="#000000");
const sixthCtaUrl = $(sixthCtaUrl:String="/";required=true);
const sixthCtaAdobeTag = $(sixthCtaAdobeTag:String="cta-6";required=true);
// endgroup

// group: { 12.1. CTA Button 7 }
const seventhCtaContent = $(seventhCtaContent:RichText="Beauty";color="#000000");
const seventhCtaUrl = $(seventhCtaUrl:String="/";required=true);
const seventhCtaAdobeTag = $(seventhCtaAdobeTag:String="cta-7";required=true);
// endgroup

// group: { 12.2. CTA Button 8 }
const eighthCtaContent = $(eighthCtaContent:RichText="Shop All";color="#000000");
const eighthCtaUrl = $(eighthCtaUrl:String="/";required=true);
const eighthCtaAdobeTag = $(eighthCtaAdobeTag:String="cta-8";required=true);
// endgroup

// group: { 13. Disclaimer }
const disclaimerText = $(disclaimerText:RichText="Valid on select styles only. Prices as marked; no exclusions may apply.";color="#ffffff");
const disclaimerFontSize = $(disclaimerFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem]="0.75rem");
// endgroup


const MOBILE_TO_DESKTOP_RATIO = 3.159;

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} suffix - The device suffix ('m', 't', 'd', 'l') or null
 * @param {string} preset - The Scene7 preset to apply
 * @returns {string|null} The constructed image URL or null if parameters are missing
 */
function buildImageUrl(slug, suffix = null, preset) {
  if (typeof slug !== 'string') {
    return null;
  }
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }

  let deviceSlug = slug;

  if (suffix) {
    deviceSlug = `${slug}_${suffix}`;
  }

  // Reset to the original slug if suffix is 'd' or 'l' because the original slug is more appropriate for these cases
  if (suffix === 'd' || suffix === 'l') {
    deviceSlug = slug;
  }

  const baseUrl = "https://belk.scene7.com/is";
  // Ensure preset is a string before calling includes
  const presetString = String(preset || "");
  const contentType = presetString.includes("RAW") ? "content" : "image";

  // Build query string manually to avoid URL encoding the preset parameter
  const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
  });

  return `${baseUrl}/${contentType}/Belk/${deviceSlug}?${presetString}&${otherParams.toString()}`;
}

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;

const Button = ({
  variant = "underline",
  className = "relative flex cursor-pointer",
  children
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col items-center font-bold gap-1 md:gap-1.5 belk-button ${className} px-8 py-2 rounded-md`}>
        <span className="relative inline-block">
          {children}
        </span>
      </button>
    )
  }
  return (
    <button className={`flex-col items-center font-bold gap-1 md:gap-1.5 belk-button ${className}`}>
      <span className="relative inline-block">
        {children}
        <span className="block relative h-0.5 mt-1">
          <svg
            className={`absolute bottom-0 left-0 h-full w-full`}
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M0 0.5 H100" />
          </svg>
        </span>
      </span>
    </button>
  )
};

/**
 * Picture-based responsive image component using HTML picture element
 */
const PictureResponsiveImage = ({
  images,
  alt,
  className = "",
  imageClassName = "-z-1 object-cover object-center",
  children,
}) => {
  const [hasError, setHasError] = useState(false);
  const { mobile, tablet, desktop, largeDesktop } = images || {}

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  const hasAnyImage = mobile || tablet || desktop || largeDesktop;

  return (
    <div className={`relative overflow-hidden flex flex-col ${className}`}>
      {hasAnyImage && (
        <div className="absolute inset-0 z-0" aria-hidden>
          <picture className="relative block w-full h-full">
            {mobile && <source media="(max-width: 767px)" srcSet={mobile} />}
            {tablet && <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
            {desktop && <source media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
            {largeDesktop && <source media="(min-width: 1920px)" srcSet={largeDesktop} />}
            <Image
              className={`object-cover object-center ${imageClassName}`}
              src={mobile || tablet || desktop || largeDesktop}
              alt={alt ?? ''}
              fill
              onError={handleError}
            />
          </picture>
        </div>
      )}
      {children ? <div className="relative z-10 flex flex-col flex-1">{children}</div> : null}
    </div>
  );
}

const SaleHero8CTA2HeadlinStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-section-background-color: ${sectionBackgroundColor || 'transparent'};
          --${id}-section-padding-mobile: ${sectionPaddingMobile === 'none' ? '0' : sectionPaddingMobile === 'small' ? '1rem' : sectionPaddingMobile === 'medium' ? '1.5rem' : '2rem'};
          --${id}-section-padding-desktop: ${sectionPaddingDesktop === 'none' ? '0' : sectionPaddingDesktop === 'small' ? '1rem' : sectionPaddingDesktop === 'medium' ? '2rem' : '3rem'};
          --${id}-font-family: ${fontFamily};
          --${id}-highlight-font-family: ${highlightFontFamily};
          --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
        }

        @layer typography {
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 1.5vw, ${ctaMaximumFontSize});
          --${id}-left-headline-font-size: clamp(${leftHeadlineMinFontSize}, 2vw, ${leftHeadlineMaxFontSize});
          --${id}-left-subhead-font-size: clamp(${leftSubheadMinFontSize}, 1.5vw, ${leftSubheadMaxFontSize});
          --${id}-right-headline-font-size: clamp(${rightHeadlineMinFontSize}, 2vw, ${rightHeadlineMaxFontSize});
          --${id}-right-subhead-font-size: clamp(${rightSubheadMinFontSize}, 1.5vw, ${rightSubheadMaxFontSize});
          --${id}-disclaimer-font-size: ${disclaimerFontSize};
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-button-bg: ${ctaButtonBackgroundColor};
          --${id}-cta-button-bg-hover: ${ctaButtonBackgroundColorHover};
          --${id}-cta-button-border-radius: ${ctaButtonBorderRadius}px;
          --${id}-cta-button-font-size-desktop: ${ctaButtonFontSizeDesktop};
          --${id}-cta-button-font-size-mobile: clamp(0.7rem, 2.5vw, ${ctaButtonFontSizeMobile});
          --${id}-cta-button-gap: ${ctaButtonGap}px;
          --${id}-cta-button-width: ${ctaButtonWidth}px;
          --${id}-disclaimer-font-size: ${disclaimerFontSize};

        }
      }
    }
  `}</style>
);

const SaleHero8CTA2HeadlinStyles = ({ id }) => (
  <style>{`
      .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    .h-0\\.5 {
      height: 0.125rem;
    }
    .border-px {
      border-width: 1px;
    }
    .px-2 {
      padding-left: calc(var(--spacing) * 2);
      padding-right: calc(var(--spacing) * 2);
    }
    .mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] {
      margin-left: max(36px, (100vw - 1560px) / 2);
      margin-right: max(36px, (100vw - 1560px) / 2);
    }
    .\\[\\&\\>div\\]\\:max-w-\\[100rem\\] > div {
      max-width: 100rem;
    }
    .\\[\\&\\>div\\]\\:w-full > div {
      width: 100%;
    }
    .\\[\\&\\>div\\]\\:mx-4 > div {
      margin-left: calc(var(--spacing) * 4);
      margin-right: calc(var(--spacing) * 4);
    }
    .\\[\\&\\>div\\]\\:px-5 > div {
      padding-left: calc(var(--spacing) * 5);
      padding-right: calc(var(--spacing) * 5);
    }
    @media (width >= 40rem) {
      .\\[\\&\\>div\\]\\:sm\\:mx-8 > div {
        margin-left: calc(var(--spacing) * 8);
        margin-right: calc(var(--spacing) * 8);
      }
    }
    @media (width >= 48rem) {
      .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\\(--breakpoint-3xl\\)\\] > div {
        max-width: var(--breakpoint-3xl);
      }
      .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .\\[\\&\\>div\\]\\:md\\:mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] > div {
        margin-left: max(36px, (100vw - 1560px) / 2);
        margin-right: max(36px, (100vw - 1560px) / 2);
      }
      .\\[\\&\\>div\\]\\:md\\:max-w-full > div {
        max-width: 100%;
      }
      .\\[\\&\\>div\\]\\:md\\:px-5 > div {
        padding-left: calc(var(--spacing) * 5);
        padding-right: calc(var(--spacing) * 5);
      }
      .md\\:px-8 {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
    }

    .${id}-container-background-color {
      background-color: var(--${id}-section-background-color);
    }
    .${id}-container-font-family {
      font-family: var(--${id}-font-family);
    }
    .${id}-belk-text-clamp-section-title {
      font-size: var(--${id}-section-title-font-size);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    .closeout {
      font-family: var(--${id}-highlight-font-family);
      color: var(--${id}-section-title-highlight-color);
    }
    
   
    .${id}-max-w-\\[eyebrow\\] {
      max-width: var(--${id}-eyebrow-max-width);
    }
    .${id}-h-\\[eyebrow\\] {
      max-height: var(--${id}-eyebrow-max-height);
    }
    .${id}-max-w-\\[headline\\] {
      max-width: var(--${id}-headline-max-width);
    }
    .${id}-h-\\[headline\\] {
      max-height: var(--${id}-headline-max-height);
    }
    
    .${id}-max-w-\\[subhead\\] {
      max-width: var(--${id}-subhead-max-width);
    }
    .${id}-max-h-\\[subhead\\] {
      max-height: var(--${id}-subhead-max-height);
    }
   
    .${id}-aspect-\\[section-title-image-mobile\\] {
      aspect-ratio: var(--${id}-section-title-image-mobile-aspect-ratio);
    }
    @media (min-width: 768px) {
      .${id}-aspect-\\[section-title-image-tablet\\] {
        aspect-ratio: var(--${id}-section-title-image-tablet-aspect-ratio);
      }
    }
    @media (min-width: 1280px) {
      .${id}-aspect-\\[section-title-image-desktop\\] {
        aspect-ratio: var(--${id}-section-title-image-desktop-aspect-ratio);
      }
    }
    .${id}-max-w-\\[section-title-image\\] {
      max-width: var(--${id}-section-title-image-max-width);
    }
    .${id}-max-h-\\[section-title-image\\] {
      max-height: var(--${id}-section-title-image-max-height);
    }
    .${id}-section-title-image {
      position: relative;
      z-index: 1;
      display: block;
      width: 100%;
    }
    .${id}-bg-solid-button {
      background-color: var(--${id}-cta-background-color);
    }
    .${id}-belk-text-clamp-eyebrow {
      font-size: var(--${id}-eyebrow-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    .${id}-belk-text-clamp-headline {
      font-size: var(--${id}-headline-font-size);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .${id}-belk-text-clamp-subhead {
      font-size: var(--${id}-section-subhead-font-size);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-cta-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
      .${id}-aspect-\\[desktop-container\\] {
      aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-container\\] {
      aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-container\\] {
      aspect-ratio: var(--${id}-mobile-container-aspect-ratio);
    }
    .${id}-section-padding {
      padding: var(--${id}-section-padding-mobile);
    }
    @media (min-width: 1280px) {
      .${id}-section-padding {
        padding: var(--${id}-section-padding-desktop);
      }
    }

    @media (min-width: 768px) {
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
      }
      .md\\:${id}-aspect-auto {
        aspect-ratio: auto;
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
    }

    /* CTA Button Grid Styles - Sale Banner: mobile 1 col, tablet 2 cols, desktop 4 cols */
/* Mobile: 1 column (8 rows) */
.${id}-cta-grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--${id}-cta-button-gap);
  width: 100%;
}

.${id}-cta-grid-container > * {
   width: 100%;
   box-sizing: border-box;
}

/* Tablet: 2 columns (4 rows) */
@media (min-width: 48rem) {
  .${id}-cta-grid-container {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: var(--${id}-cta-button-gap);
     width: 100%;
  }
  .${id}-cta-grid-container > * {
     width: 100%;
     box-sizing: border-box;
  }
}

/* Desktop: 4 columns (2 rows) */
@media (min-width: 80rem) {
   .${id}-cta-grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--${id}-cta-button-gap);
      width: 100%;
   }
   .${id}-cta-grid-container > * {
      width: 100%;
   }
}

    .${id}-cta-button-width {
      min-width: 0;
      height: 100%;
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 9px 2px;
      font-size: var(--${id}-cta-button-font-size-mobile);
    }

   @media (width >= 48rem) {
  .${id}-cta-button-width {
    min-width: 0;
    min-height: 14px;
    height: 100%;
    width: 100%; /* Fill grid cell for proper alignment with text */
    padding: 8px 12px;
    font-size: var(--${id}-cta-button-font-size-desktop);
    text-align: center;
  }
}

    @media (width >= 80rem) {
  .${id}-cta-button-width {
    width: 100%; /* Fill grid cell for proper alignment with text */
    height: auto;
    padding: 10px 16px;
    display: inline-flex;
    text-align: center;
  }
}
    /* Responsive Grid Layout Classes */
    .${id}-grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .${id}-grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .${id}-grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .${id}-grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .${id}-gap-2 {
      gap: calc(var(--spacing) * 2);
    }
    .${id}-gap-4 {
      gap: calc(var(--spacing) * 4);
    }
    .${id}-gap-6 {
      gap: calc(var(--spacing) * 6);
    }
    .${id}-gap-8 {
      gap: calc(var(--spacing) * 8);
    }

  .${id}-aspect-\\[mobile-column\\] {
      aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
    }

    @media (width >= 48rem) {
      .md\\:${id}-grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .md\\:${id}-grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .md\\:${id}-grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .md\\:${id}-grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .md\\:${id}-aspect-\\[tablet-column\\] {
        aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .xl\\:${id}-grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .xl\\:${id}-grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .xl\\:${id}-grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
      }
    }

    .${id}-first-column-background-color {
      background-color: var(--${id}-first-column-background-color);
    }
    .${id}-second-column-background-color {
      background-color: var(--${id}-second-column-background-color);
    }
    .${id}-third-column-background-color {
      background-color: var(--${id}-third-column-background-color);
    }
    .${id}-fourth-column-background-color {
      background-color: var(--${id}-fourth-column-background-color);
    }
    .${id}-column-eyebrow-color {
      color: var(--${id}-column-eyebrow-color);
    }
    .${id}-column-headline-color {
      color: var(--${id}-column-headline-color);
    }
    .${id}-column-subhead-color {
      color: var(--${id}-column-subhead-color);
    }
    .${id}-column-cta-color {
      color: var(--${id}-column-cta-color);
    }
    .${id}-belk-text-clamp-column-cta {
      font-size: var(--${id}-column-cta-font-size-mobile);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    @media (min-width: 768px) {
      .${id}-belk-text-clamp-column-cta {
        font-size: var(--${id}-column-cta-font-size-desktop);
      }
    }
    .${id}-bg-solid-column-cta-button {
      background-color: var(--${id}-column-cta-background-color);
      border-radius: var(--${id}-column-cta-border-radius);
    }
    .rounded-t-none {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .rounded-t-sm {
      border-top-left-radius: var(--radius-sm);
      border-top-right-radius: var(--radius-sm);
    }
    .rounded-t-md {
      border-top-left-radius: var(--radius-md);
      border-top-right-radius: var(--radius-md);
    }
    .rounded-t-lg {
      border-top-left-radius: var(--radius-lg);
      border-top-right-radius: var(--radius-lg);
    }
    .rounded-t-xl {
      border-top-left-radius: var(--radius-xl);
      border-top-right-radius: var(--radius-xl);
    }
    .rounded-b-none {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .rounded-b-sm {
      border-bottom-left-radius: var(--radius-sm);
      border-bottom-right-radius: var(--radius-sm);
    }
    .rounded-b-md {
      border-bottom-left-radius: var(--radius-md);
      border-bottom-right-radius: var(--radius-md);
    }
    .rounded-b-lg {
      border-bottom-left-radius: var(--radius-lg);
      border-bottom-right-radius: var(--radius-lg);
    }
    .rounded-b-xl {
      border-bottom-left-radius: var(--radius-xl);
      border-bottom-right-radius: var(--radius-xl);
    }
       .${id}-left-headline {
      font-size: var(--${id}-left-headline-font-size);
      line-height: 1.2;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
     .${id}-left-subhead {
      font-size: var(--${id}-left-subhead-font-size);
      line-height: 1.2;
      font-weight: 400;
      max-width: clamp(325px, 18vw, 390px);
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .${id}-left-subhead {
        max-width: clamp(327px, 18vw, 378px);
      }
    }
   
    
    .${id}-right-headline {
      font-size: var(--${id}-right-headline-font-size);
      line-height: 1.2;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .${id}-right-subhead {
      font-size: var(--${id}-right-subhead-font-size);
      line-height: 1.2;
      font-weight: 400;
      max-width: clamp(140px, 11vw, 200px);
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .${id}-right-subhead {
        max-width: clamp(130px, 10vw, 160px);
      }
    }
    @media (max-width: 767px) {
      .${id}-right-subhead {
        max-width: clamp(126px, 16vw, 160px);
        font-size: .75rem;
      }
      .${id}-right-headline {
       max-width: clamp(80px, 20vw, 100px);
       font-size: .875rem; /* 16px */
      }  
      .${id}-disclaimer-text {
        max-width: 240px;
        margin-left: auto;
        margin-right: auto;
        font-size: .7rem;
        line-height: 1.4;
      }
      .${id}-left-subhead {
        max-width: clamp(171px, 42vw, 420px);
        font-size: .75rem;
      }
        .${id}-left-headline{
         max-width: clamp(171px, 18vw, 230px);
          font-size: .875rem; /* 16px */
          white-space: nowrap;
        }
    }
      .${id}-disclaimer-text {
      font-size: var(--${id}-disclaimer-font-size);
      line-height: 1.2;
      font-weight: 400;
      text-align: center;
         max-width: 100%;
    }
   
  `}</style>
);

const WrapperComponent = ({ href, children, ...props }) =>
  href ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );

const ResponsiveContainer = ({ containerBehavior, className = "", children }) => {
  const containerClasses = (() => {
    switch (containerBehavior) {
      case "max-w-full":
        return "[&>div]:md:max-w-full [&>div]:w-full";
      case "max-w-inset":
        return "px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full";
      case "max-w-centered":
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-3 [&>div]:md:px-5";
      default:
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-3 [&>div]:md:px-5";
    }
  })();

  return <div className={`${containerClasses} ${className}`}>{children}</div>;
};

/*
  Derived from alignment constants for text alignment.
*/
const textAlignment = {
  'items-start': 'text-left',
  'items-center': 'text-center',
  'items-end': 'text-right',
};

const SaleHero8CTA2Headlin = ({ id }) => {
  const ctas = [
    { content: firstCtaContent, url: firstCtaUrl, adobeTag: firstCtaAdobeTag },
    { content: secondCtaContent, url: secondCtaUrl, adobeTag: secondCtaAdobeTag },
    { content: thirdCtaContent, url: thirdCtaUrl, adobeTag: thirdCtaAdobeTag },
    { content: fourthCtaContent, url: fourthCtaUrl, adobeTag: fourthCtaAdobeTag },
    { content: fifthCtaContent, url: fifthCtaUrl, adobeTag: fifthCtaAdobeTag },
    { content: sixthCtaContent, url: sixthCtaUrl, adobeTag: sixthCtaAdobeTag },
    { content: seventhCtaContent, url: seventhCtaUrl, adobeTag: seventhCtaAdobeTag },
    { content: eighthCtaContent, url: eighthCtaUrl, adobeTag: eighthCtaAdobeTag },
  ];

  const displayedCtas = ctas.filter((cta) => cta.content).slice(0, Number.parseInt(ctaButtonCount));
  const ctaContentVarNames = ['firstCtaContent', 'secondCtaContent', 'thirdCtaContent', 'fourthCtaContent', 'fifthCtaContent', 'sixthCtaContent', 'seventhCtaContent', 'eighthCtaContent'];
  const gridClassName = `${id}-cta-grid-container`;

  const sectionBgImages = {
    mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
    tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
    desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
    largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
  };
  const hasValidSectionBg = isValidImageUrl(sectionBgImages.mobile) || isValidImageUrl(sectionBgImages.tablet) || isValidImageUrl(sectionBgImages.desktop) || isValidImageUrl(sectionBgImages.largeDesktop);
  const contentWrapperClass = `relative justify-between ${mobileContainerAspectRatioWidth && mobileContainerAspectRatioHeight ? `${id}-aspect-[mobile-container]` : ''} ${tabletContainerAspectRatioWidth && tabletContainerAspectRatioHeight ? `md:${id}-aspect-[tablet-container]` : `md:${id}-aspect-auto`} ${desktopContainerAspectRatioWidth && desktopContainerAspectRatioHeight ? `xl:${id}-aspect-[desktop-container]` : ''} ${roundedCornersTop} ${roundedCornersBottom} ${sectionBorderRadius} ${id}-section-padding ${containerBehavior === 'max-w-full' ? 'px-4' : ''}`;
  const contentWrapperWithBg = `${contentWrapperClass} ${id}-container-background-color`;

  return (
    <>
      <SaleHero8CTA2HeadlinStyleVars id={id} />
      <SaleHero8CTA2HeadlinStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        {hasValidSectionBg ? (
          <div data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
          <PictureResponsiveImage
            images={sectionBgImages}
            alt={sectionBackgroundAlt ?? ''}
            imageClassName="-z-1 object-cover object-center"
            className={contentWrapperClass}
          >
      {(leftHeadline || rightHeadline) && (
            <div className="flex flex-row justify-between items-start relative z-10 w-full px-2 md:px-8 lg:px-12">
              {/* Left Column: Headline + Subhead */}
             <div className="flex flex-col items-start text-left max-w-[45%] md:max-w-[50%] xl:max-w-none">
                {leftHeadline && <h2 className={`${id}-left-headline`} data-bildit-var-name="leftHeadline" data-bildit-var-type="RichText">{leftHeadline}</h2>}
                {leftSubhead && <p className={`${id}-left-subhead mt-1 md:mt-2`} data-bildit-var-name="leftSubhead" data-bildit-var-type="RichText">{leftSubhead}</p>}
              </div>
              {/* Right Column: Headline + Subhead */}
            
             <div className="flex flex-col items-end text-right max-w-[45%] md:max-w-[50%] xl:max-w-none">
                {rightHeadline && <h2 className={`${id}-right-headline`} data-bildit-var-name="rightHeadline" data-bildit-var-type="RichText">{rightHeadline}</h2>}
                {rightSubhead && <p className={`${id}-right-subhead mt-1 md:mt-2`} data-bildit-var-name="rightSubhead" data-bildit-var-type="RichText">{rightSubhead}</p>}
              </div>
            </div>
          )}

          {displayedCtas.length > 0 && (
              <div className={`relative z-10 w-full ${gridClassName} gap-2 md:gap-3 lg:gap-2 px-2 md:px-8 lg:px-12 md:py-4 py-2 ${id}-container-font-family`}>
             {displayedCtas.map((cta, index) =>
                cta.content && (
                  <WrapperComponent
                    key={index}
                    href={cta.url}
                    data-aali={cta.adobeTag}
                    className="flex items-stretch"
                  >
                    <Button
                      className={`${id}-cta-button-width ${id}-belk-text-clamp-cta cursor-pointer ${ctaVariant === "solid" ? `${id}-bg-solid-button` : ""}`}
                      variant={ctaVariant}
                    >
                      <span data-bildit-var-name={ctaContentVarNames[index]} data-bildit-var-type="RichText">{cta.content}</span>
                    </Button>
                  </WrapperComponent>
                ),
              )}
            </div>
          )}

            {disclaimerText && (
            <div className="relative z-10 w-full px-2 md:px-8 pb-2">
              <p className={`${id}-disclaimer-text`} data-bildit-var-name="disclaimerText" data-bildit-var-type="RichText">{disclaimerText}</p>
            </div>
          )}

          </PictureResponsiveImage>
          </div>
        ) : (
          <div className={contentWrapperWithBg}>
      {(leftHeadline || rightHeadline) && (
            <div className="flex flex-row justify-between items-start relative z-10 w-full px-2 md:px-8 lg:px-12">
              <div className="flex flex-col items-start text-left max-w-[45%] md:max-w-[50%] xl:max-w-none">
                {leftHeadline && <h2 className={`${id}-left-headline`} data-bildit-var-name="leftHeadline" data-bildit-var-type="RichText">{leftHeadline}</h2>}
                {leftSubhead && <p className={`${id}-left-subhead mt-1 md:mt-2`} data-bildit-var-name="leftSubhead" data-bildit-var-type="RichText">{leftSubhead}</p>}
              </div>
              <div className="flex flex-col items-end text-right max-w-[45%] md:max-w-[50%] xl:max-w-none">
                {rightHeadline && <h2 className={`${id}-right-headline`} data-bildit-var-name="rightHeadline" data-bildit-var-type="RichText">{rightHeadline}</h2>}
                {rightSubhead && <p className={`${id}-right-subhead mt-1 md:mt-2`} data-bildit-var-name="rightSubhead" data-bildit-var-type="RichText">{rightSubhead}</p>}
              </div>
            </div>
          )}

          {displayedCtas.length > 0 && (
            <div className={`relative z-10 w-full ${gridClassName} gap-2 md:gap-3 lg:gap-2 px-2 md:px-8 lg:px-12 md:py-4 py-2 ${id}-container-font-family`}>
              {displayedCtas.map((cta, index) =>
                cta.content && (
                  <WrapperComponent
                    key={index}
                    href={cta.url}
                    data-aali={cta.adobeTag}
                    className="flex items-stretch"
                  >
                    <Button
                      className={`${id}-cta-button-width ${id}-belk-text-clamp-cta cursor-pointer ${ctaVariant === "solid" ? `${id}-bg-solid-button` : ""}`}
                      variant={ctaVariant}
                    >
                      <span data-bildit-var-name={ctaContentVarNames[index]} data-bildit-var-type="RichText">{cta.content}</span>
                    </Button>
                  </WrapperComponent>
                ),
              )}
            </div>
          )}

            {disclaimerText && (
            <div className="relative z-10 w-full px-2 md:px-8 pb-2">
              <p className={`${id}-disclaimer-text`} data-bildit-var-name="disclaimerText" data-bildit-var-type="RichText">{disclaimerText}</p>
            </div>
          )}
          </div>
        )}
      </ResponsiveContainer>
    </>
  );
};

export default SaleHero8CTA2Headlin;