"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="Logo Rail";color="#000000");
const headerContentArrangement = $(headerContentArrangement:Dropdown[Stacked|flex-col,Side by Side|flex-row]="flex-row");
const sectionSubhead = $(sectionSubhead:RichText="";color="#000000");
const sectionCtaContent = $(sectionCtaContent:RichText="Shop Now";color="#000000");
const sectionCtaAlignment = $(sectionCtaAlignment:Dropdown[Left|left,Right|right]="left");
const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const sectionCtaBackgroundColor = $(sectionCtaBackgroundColor:Color="#FFFFFF");
const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="left");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-px");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-px");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const desktopContainerAspectRatioWidth = $(desktopContainerAspectRatioWidth:String="1200");
const desktopContainerAspectRatioHeight = $(desktopContainerAspectRatioHeight:String="280");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="704");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="220");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="343");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="200");
// endgroup

// group: { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#E0E0E0");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group: { 4. Column Layout }
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="720";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="356";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="720";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="356";required=true);
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="1";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="1";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
const columnCornerRadius = $(columnCornerRadius:Dropdown[None|none,Small|small,Large|large]="small");
// endgroup

// group: { 4.1. Responsive Grid Configuration }
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-2");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-4");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-4");
const gridGap = $(gridGap:Dropdown[Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-4");
// endgroup

// group: { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="2rem");
const subheadMinimumFontSize = $(subheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const textBelowMinimumFontSize = $(textBelowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const textBelowMaximumFontSize = $(textBelowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
// endgroup

// group: { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
// endgroup

// group: { 8. Column 1 }
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#FFFFFF");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wkxx_2025_test_4upbrands_p1");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
// endgroup

// group: { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#FFFFFF");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wkxx_2025_test_4upbrands_p2");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
// endgroup

// group: { 10. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color="#FFFFFF");
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="wkxx_2025_test_4upbrands_p3");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
// endgroup

// group: { 11. Column 4 }
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color="#FFFFFF");
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="wkxx_2025_test_4upbrands_p4");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
// endgroup

const MOBILE_TO_DESKTOP_RATIO = 3.159;

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
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

const Button = ({
  variant = "underline",
  className = "relative flex cursor-pointer",
  children
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button ${className} px-8 py-2 rounded-md`}>
        <span className="relative inline-block">
          {children}
        </span>
      </button>
    )
  }
  return (
    <button className={`flex-col font-bold gap-1.5 belk-button ${className}`}>
      <span className="relative inline-block">
        {children}
        <span className="block relative h-px md:h-0.5 mt-1">
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
    <div className={`relative overflow-hidden ${className}`}>
      {hasAnyImage && <picture>
        {mobile && <source alt={alt} media="(max-width: 767px)" srcSet={mobile} />}
        {tablet && <source alt={alt} media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
        {desktop && <source alt={alt} media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
        {largeDesktop && <source alt={alt} media="(min-width: 1920px)" srcSet={largeDesktop} />}
        <Image
          className={`${imageClassName}`}
          src={mobile || tablet || desktop || largeDesktop}
          alt={alt}
          fill
          onError={handleError}
        />
      </picture>}
      {children}
    </div>
  );
}

const FourColumnStandardStyleVars = ({ id }) => {
  return (
    <style global jsx>{`
      @layer template {
        :host, :root {
          @layer container {
            --${id}-container-background-color: ${sectionBackgroundColor};
            --${id}-container-font-family: ${fontFamily};
            --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}, 3vw, ${sectionTitleMaximumFontSize});
            --${id}-section-subhead-font-size: clamp(${subheadMinimumFontSize}, 1.5vw, ${subheadMaximumFontSize});
            --${id}-section-cta-background-color: ${sectionCtaBackgroundColor};
            --${id}-section-cta-font-size: clamp(${ctaMinimumFontSize}, 1.5vw, ${ctaMaximumFontSize});
            --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
            --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
            --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
          }
          @layer columns {
            --${id}-column-horizontal-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
            --${id}-column-vertical-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
            --${id}-desktop-column-aspect-ratio: ${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight};
            --${id}-tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight};
            --${id}-mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight};
            --${id}-mobile-grid-layout: ${mobileGridLayout};
            --${id}-tablet-grid-layout: ${tabletGridLayout};
            --${id}-desktop-grid-layout: ${desktopGridLayout};
            --${id}-grid-gap: ${gridGap};
            --${id}-first-column-background-color: ${firstColumnBackgroundColor};
            --${id}-second-column-background-color: ${secondColumnBackgroundColor};
            --${id}-third-column-background-color: ${thirdColumnBackgroundColor};
            --${id}-fourth-column-background-color: ${fourthColumnBackgroundColor};
          }
        }
      }
    `}</style>
  );
}

const FourColumnStandardStyles = ({ id }) => {
  return (
    <style>{`
    .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    .h-0\\.5 {
      height: 0.125rem;
    }
    .h-px {
      height: 1px;
    }
    .border-px {
      border-width: 1px;
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .px-2 {
      padding-left: calc(var(--spacing) * 2);
      padding-right: calc(var(--spacing) * 2);
    }
    .pt-0 {
      padding-top: 0;
    }
    .pb-0 {
      padding-bottom: 0;
    }
    .pt-2 {
      padding-top: calc(var(--spacing) * 2);
    }
    .pb-2 {
      padding-bottom: calc(var(--spacing) * 2);
    }
    .pt-4 {
      padding-top: calc(var(--spacing) * 4);
    }
    .pb-4 {
      padding-bottom: calc(var(--spacing) * 4);
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
    .${id}-container-background-color {
      background-color: var(--${id}-container-background-color);
    }
    .${id}-section-cta-background-color {
      background-color: var(--${id}-section-cta-background-color);
    }
    .${id}-container-font-family {
      font-family: var(--${id}-container-font-family);
    }
    .${id}-belk-text-clamp-section-title {
      font-size: var(--${id}-section-title-font-size);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    .${id}-belk-text-clamp-subhead {
      font-size: var(--${id}-section-subhead-font-size);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-section-cta-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    .${id}-column-horizontal-padding {
      padding-left: var(--${id}-column-horizontal-padding);
      padding-right: var(--${id}-column-horizontal-padding);
    }
    .${id}-column-vertical-padding {
      padding-top: var(--${id}-column-vertical-padding);
      padding-bottom: var(--${id}-column-vertical-padding);
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
    .${id}-aspect-\\[desktop-column\\] {
      aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-column\\] {
      aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-column\\] {
      aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
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
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
      }
      .md\\:${id}-aspect-\\[tablet-column\\] {
        aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
      }
      .md\\:px-8 {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .md\\:rounded-2xl {
        border-radius: var(--radius-2xl);
      }
      .md\\:my-2 {
        margin-top: calc(var(--spacing) * 2);
        margin-bottom: calc(var(--spacing) * 2);
      }
      .md\\:my-4 {
        margin-top: calc(var(--spacing) * 4);
        margin-bottom: calc(var(--spacing) * 4);
      }
      .md\\:my-8 {
        margin-top: calc(var(--spacing) * 8);
        margin-bottom: calc(var(--spacing) * 8);
      }
      .md\\:py-8 {
        padding-top: calc(var(--spacing) * 8);
        padding-bottom: calc(var(--spacing) * 8);
      }
      .md\\:pt-8 {
        padding-top: calc(var(--spacing) * 8);
      }
      .md\\:pb-8 {
        padding-bottom: calc(var(--spacing) * 8);
      }
      .md\\:pt-4 {
        padding-top: calc(var(--spacing) * 4);
      }
      .md\\:pb-4 {
        padding-bottom: calc(var(--spacing) * 4);
      }
      .md\\:h-0\\.5 {
        height: 0.125rem;
      }
    }
    @media (width >= 80rem) {
      .xl\\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
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


    /* Responsive breakpoint overrides */
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
    /* Column radius utilities */
    .${id}-column-rounded-none { border-radius: 0; }
    .${id}-column-rounded-small { border-radius: 0.5rem; }
    .${id}-column-rounded-large { border-radius: 1rem; }
  `}</style>
  );
}

const WrapperComponent = ({ href, children, ...props }) => (
  href ? <Link {...props} href={href}>{children}</Link> : <>{children}</>
)

const ResponsiveContainer = ({
  containerBehavior,
  className = "",
  children
}) => {
  // Standardized container behavior logic
  const containerClasses = (() => {
    switch (containerBehavior) {
      case 'max-w-full':
        return '[&>div]:md:max-w-full [&>div]:w-full';
      case 'max-w-inset':
        return 'px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full';
      case 'max-w-centered':
        return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5';
      default:
        return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5'; // Default to centered
    }
  })();

  return (
    <div className={`${containerClasses} ${className}`}>
      {children}
    </div>
  );
};
/*
  Derived from alignment constants for text alignment.
*/
const textAlignment = {
  'items-start': 'text-left',
  'items-center': 'text-center',
  'items-end': 'text-right',
};

const FourColumnStandard = ({ id }) => {
  const alignmentMap = {
    'flex-col': {
      'left': 'items-start',
      'center': 'items-center',
      'right': 'items-end'
    },
    'flex-row': {
      'left': 'justify-start',
      'center': 'justify-center',
      'right': 'justify-end'
    }
  };

  const arrangement = (typeof headerContentArrangement === 'string' ? headerContentArrangement : 'flex-row') || 'flex-row';
  const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : 'left') || 'left';
  const alignmentClass = alignmentMap[arrangement]?.[alignment] ?? alignmentMap['flex-row']['left'];

  // Conditional padding based on margins
  // Reduced padding for better vertical centering with flex
  const paddingTop = topMargin === "mt-0" ? "pt-0" : "pt-2 md:pt-4";
  const paddingBottom = bottomMargin === "mb-0" ? "pb-0" : "pb-2 md:pb-4";
  const paddingClasses = `px-4 md:px-6 ${paddingTop} ${paddingBottom}`;

  const columns = [
    {
      backgroundColor: `${id}-first-column-background-color`,
      image: {
        slug: firstColumnBackgroundImage,
        altText: firstColumnBackgroundImageAltText,
        preset: firstColumnBackgroundImagePreset
      },
      cta: {
        url: firstColumnCtaUrl,
        adobeTag: firstColumnCtaAdobeTag
      }
    },
    {
      backgroundColor: `${id}-second-column-background-color`,
      image: {
        slug: secondColumnBackgroundImage,
        altText: secondColumnBackgroundImageAltText,
        preset: secondColumnBackgroundImagePreset
      },
      cta: {
        url: secondColumnCtaUrl,
        adobeTag: secondColumnCtaAdobeTag
      }
    },
    {
      backgroundColor: `${id}-third-column-background-color`,
      image: {
        slug: thirdColumnBackgroundImage,
        altText: thirdColumnBackgroundImageAltText,
        preset: thirdColumnBackgroundImagePreset
      },
      cta: {
        url: thirdColumnCtaUrl,
        adobeTag: thirdColumnCtaAdobeTag
      }
    },
    {
      backgroundColor: `${id}-fourth-column-background-color`,
      image: {
        slug: fourthColumnBackgroundImage,
        altText: fourthColumnBackgroundImageAltText,
        preset: fourthColumnBackgroundImagePreset
      },
      cta: {
        url: fourthColumnCtaUrl,
        adobeTag: fourthColumnCtaAdobeTag
      }
    }
  ];

  return (
    <>
      <FourColumnStandardStyleVars id={id} />
      <FourColumnStandardStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
            tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
            desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
            largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
          }}
          alt={sectionBackgroundAlt}
          imageClassName="-z-1 object-cover object-center"
          className={`relative flex flex-col justify-center ${id}-aspect-[mobile-container] md:${id}-aspect-[tablet-container] xl:${id}-aspect-[desktop-container] ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color ${paddingClasses}`}
        >
        {(sectionTitle || sectionSubhead || sectionCtaContent) && (
          <div className={`flex ${arrangement} relative w-full font-bold mb-4 ${alignmentClass} items-center ${containerBehavior} gap-2 md:gap-4`}>
            {sectionTitle && (
              <span className={`flex flex-inline ${id}-belk-text-clamp-section-title`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>
            )}
            {sectionCtaContent && sectionCtaAlignment === 'left' && (
              <WrapperComponent className="cursor-pointer" href={sectionCtaUrl} data-aali={sectionCtaAdobeTag}>
                <Button className={`cursor-pointer ${id}-belk-text-clamp-cta ${sectionCtaVariant === 'solid' ? `${id}-section-cta-background-color` : ''}`} variant={sectionCtaVariant}><span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span></Button>
              </WrapperComponent>
            )}
            {sectionSubhead && (
              <span className={`flex flex-inline ${id}-belk-text-clamp-subhead`} data-bildit-var-name="sectionSubhead" data-bildit-var-type="RichText">{sectionSubhead}</span>
            )}
            {sectionCtaContent && sectionCtaAlignment === 'right' && (
              <WrapperComponent href={sectionCtaUrl} className="ml-auto cursor-pointer" data-aali={sectionCtaAdobeTag}>
                <Button className={`cursor-pointer ${id}-belk-text-clamp-cta ${sectionCtaVariant === 'solid' ? `${id}-section-cta-background-color` : ''}`} variant={sectionCtaVariant}><span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span></Button>
              </WrapperComponent>
            )}
          </div>
        )}
        <div className={`relative w-full grid ${id}-${mobileGridLayout} md:${id}-${tabletGridLayout} xl:${id}-${desktopGridLayout} ${gridGap} overflow-hidden ${id}-container-font-family`}>
          {columns.map(({backgroundColor, image, cta}, index) => (
            <WrapperComponent key={index} className="w-full cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
              <div data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage','thirdColumnBackgroundImage','fourthColumnBackgroundImage'][index]} data-bildit-var-type="String">
              <PictureResponsiveImage
                images={{
                  mobile: buildImageUrl(image.slug, 'm', image.preset),
                  tablet: buildImageUrl(image.slug, 't', image.preset),
                  desktop: buildImageUrl(image.slug, 'd', image.preset),
                  largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                }}
                alt={image.altText}
                imageClassName="z-10 object-cover object-center"
                className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[desktop-column] ${id}-column-rounded-${columnCornerRadius} ${backgroundColor}`}
              >
              </PictureResponsiveImage>
              </div>
            </WrapperComponent>
          ))}
        </div>
        </PictureResponsiveImage>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default FourColumnStandard;