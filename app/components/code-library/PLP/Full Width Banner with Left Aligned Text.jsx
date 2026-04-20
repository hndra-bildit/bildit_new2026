"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="Full Width Banner";color="#000000");
// endgroup

// group { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
// endgroup

// group { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color);
const sectionBackgroundImage = $(sectionBackgroundImage:String="wk31_090225_spec_test_tall_fh_1");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group { 4. Column Layout }
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="");
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="");
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="");
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="");
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="");
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="");
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
// endgroup



// group { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:String="20");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:String="32");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:String="14");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:String="16");
const headlineMinimumFontSize = $(headlineMinimumFontSize:String="24");
const headlineMaximumFontSize = $(headlineMaximumFontSize:String="54");
const subheadMinimumFontSize = $(subheadMinimumFontSize:String="16");
const subheadMaximumFontSize = $(subheadMaximumFontSize:String="28");
const ctaMinimumFontSize = $(ctaMinimumFontSize:String="16");
const ctaMaximumFontSize = $(ctaMaximumFontSize:String="20");
const textBelowMinimumFontSize = $(textBelowMinimumFontSize:String="16");
const textBelowMaximumFontSize = $(textBelowMaximumFontSize:String="28");
// endgroup

// group { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color);
// endgroup

// group { 7. Image Sizing }
const eyebrowImageWidth = $(eyebrowImageWidth:String="");
const eyebrowImageHeight = $(eyebrowImageHeight:String="");
const eyebrowImagePreset = $(eyebrowImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const headlineImageWidth = $(headlineImageWidth:String="");
const headlineImageHeight = $(headlineImageHeight:String="");
const headlineImagePreset = $(headlineImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const subheadImageWidth = $(subheadImageWidth:String="");
const subheadImageHeight = $(subheadImageHeight:String="");
const subheadImagePreset = $(subheadImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup

// group { 8. Column 1 }
const ColumnBackgroundColor = $(ColumnBackgroundColor:Color);
const ColumnBackgroundImage = $(ColumnBackgroundImage:String="");
const ColumnBackgroundImageAltText = $(ColumnBackgroundImageAltText:String="");
const ColumnBackgroundImagePreset = $(ColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const ColumnEyebrowImage = $(ColumnEyebrowImage:String="");
const ColumnEyebrowImageAltText = $(ColumnEyebrowImageAltText:String="");
const ColumnEyebrowContent = $(ColumnEyebrowContent:RichText="LOREM IPSUM DOLOR";color="#FFFFFF");
const ColumnHeadlineImage = $(ColumnHeadlineImage:String="");
const ColumnHeadlineImageAltText = $(ColumnHeadlineImageAltText:String="");
const ColumnHeadlineContent = $(ColumnHeadlineContent:RichText="From 39.99";color="#FFFFFF");
const ColumnSubheadImage = $(ColumnSubheadImage:String="");
const ColumnSubheadImageAltText = $(ColumnSubheadImageAltText:String="");
const ColumnSubheadContent = $(ColumnSubheadContent:RichText="men's outerwear";color="#FFFFFF");
const ColumnCtaContent = $(ColumnCtaContent:RichText="Shop Now";color="#FFFFFF");
const ColumnCtaUrl = $(ColumnCtaUrl:String="/";required=true);
const ColumnCtaAdobeTag = $(ColumnCtaAdobeTag:String="";required=true);
const ColumnTextBelow = $(ColumnTextBelow:RichText="";color="#FFFFFF");
// endgroup


const MOBILE_TO_DESKTOP_RATIO = 3.159;

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} preset - The Scene7 preset to apply
 * @returns {string|null} The constructed image URL or null if parameters are missing
 */
function buildImageUrl(slug, suffix = null, preset) {
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
  const contentType = preset.includes("RAW") ? "content" : "image";

  // Build query string manually to avoid URL encoding the preset parameter
  const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
  });

  return `${baseUrl}/${contentType}/Belk/${deviceSlug}?${preset}&${otherParams.toString()}`;
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

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;

/**
 * Picture-based responsive image component using HTML picture element
 */
const PictureResponsiveImage = ({
  images,
  alt,
  className = "",
  imageClassName = "-z-1 object-cover object-center",
  children,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const { mobile, tablet, desktop, largeDesktop } = images || {}

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  const fallbackSrc = mobile || tablet || desktop || largeDesktop;
  const hasAnyImage = mobile || tablet || desktop || largeDesktop;

  return (
    <div className={`relative overflow-hidden ${className}`} {...rest}>
      {hasAnyImage && isValidImageUrl(fallbackSrc) && !hasError && (
        <picture>
          {isValidImageUrl(mobile) && <source alt={alt ?? ''} media="(max-width: 767px)" srcSet={mobile} />}
          {isValidImageUrl(tablet) && <source alt={alt ?? ''} media="(min-width: 768px) and (max-width: 1439px)" srcSet={tablet} />}
          {isValidImageUrl(desktop) && <source alt={alt ?? ''} media="(min-width: 1440px) and (max-width: 1919px)" srcSet={desktop} />}
          {isValidImageUrl(largeDesktop) && <source alt={alt ?? ''} media="(min-width: 1920px)" srcSet={largeDesktop} />}
          <Image
            className={`${imageClassName}`}
            src={fallbackSrc}
            alt={alt ?? ''}
            fill
            onError={handleError}
          />
        </picture>
      )}
      {children}
    </div>
  );
}

const FullWidthBannerLeftAlignedTextStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}px, 2vw, ${sectionTitleMaximumFontSize}px);
          --${id}-container-aspect-ratio: ${containerAspectRatioWidth || '1920'} / ${containerAspectRatioHeight || '600'};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth || '343'} / ${mobileContainerAspectRatioHeight || '160'};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth || '704'} / ${tabletContainerAspectRatioHeight || '200'};
        }
        @layer eyebrow {
          --${id}-eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}px, 1.5vw, ${eyebrowMaximumFontSize}px);
          --${id}-eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer headline {
          --${id}-headline-aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
          --${id}-headline-font-size: clamp(${headlineMinimumFontSize}px, 1.5vw, ${headlineMaximumFontSize}px);
          --${id}-headline-max-width: clamp(${headlineImageWidth}px, 50vw, ${headlineImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-headline-max-height: clamp(${headlineImageHeight}px, 50vw, ${headlineImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer subhead {
          --${id}-subhead-aspect-ratio: ${subheadImageWidth} / ${subheadImageHeight};
          --${id}-subhead-font-size: clamp(${subheadMinimumFontSize}px, 1.5vw, ${subheadMaximumFontSize}px);
          --${id}-subhead-max-width: clamp(${subheadImageWidth}px, 50vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-subhead-max-height: clamp(${subheadImageHeight}px, 50vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}px, 2vw, ${ctaMaximumFontSize}px);
        }

        @layer text-below {
          --${id}-text-below-font-size: clamp(${textBelowMinimumFontSize}px, 1vw, ${textBelowMaximumFontSize}px);
        }

        @layer columns {
          --${id}-column-horizontal-padding: clamp(calc(var(--spacing) * 3), 3vw, calc(var(--spacing) * 8));
          --${id}-column-vertical-padding: clamp(calc(var(--spacing) * 3), 3vw, calc(var(--spacing) * 8));
          --${id}-column-aspect-ratio: ${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight};
          --${id}-mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight};
          --${id}-tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight};
          --${id}-column-background-color: ${ColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const FullWidthBannerLeftAlignedTextStyles = ({ id }) => (
  <style>{`
    /* Tailwind fallback (combinedv1plan §1.5) */
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .flex-row { flex-direction: row; }
    .flex-wrap { flex-wrap: wrap; }
    .flex-nowrap { flex-wrap: nowrap; }
    @media (min-width: 48rem) {
      .md\\:flex-row { flex-direction: row; }
      .md\\:flex-col { flex-direction: column; }
      .md\\:flex { display: flex; }
    }

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
    .${id}-container-background-color {
      background-color: var(--${id}-container-background-color);
    }
    .fullwidth-banner-section-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
      object-position: center;
    }
    .-z-10 { z-index: -10; }
    .absolute { position: absolute; }
    .inset-0 { inset: 0; }
    .min-w-0 { min-width: 0; }
    .min-h-0 { min-height: 0; }
    .max-w-full { max-width: 100%; }
    .max-h-full { max-height: 100%; }
    .object-cover { object-fit: cover; }
    .object-center { object-position: center; }
    .pointer-events-none { pointer-events: none; }
    .w-full { width: 100%; }
    .h-full { height: 100%; }
    .${id}-container-font-family {
      font-family: var(--${id}-container-font-family);
    }
    .${id}-belk-text-clamp-section-title {
      font-size: var(--${id}-section-title-font-size);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    .${id}-column-horizontal-padding {
      padding-left: var(--${id}-column-horizontal-padding);
      padding-right: var(--${id}-column-horizontal-padding);
    }
    .${id}-column-vertical-padding {
      padding-top: var(--${id}-column-vertical-padding);
      padding-bottom: var(--${id}-column-vertical-padding);
    }
    .aspect-\\[343\\/160\\] {
      aspect-ratio: 343 / 160;
    }
    .${id}-aspect-\\[container\\] {
      aspect-ratio: var(--${id}-container-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-container\\] {
      aspect-ratio: var(--${id}-mobile-container-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-container\\] {
      aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
    }
    .${id}-aspect-\\[column\\] {
      aspect-ratio: var(--${id}-column-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-column\\] {
      aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-column\\] {
      aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
    }
    .${id}-aspect-\\[eyebrow\\] {
      aspect-ratio: var(--${id}-eyebrow-aspect-ratio);
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
    .${id}-aspect-\\[headline\\] {
      aspect-ratio: var(--${id}-headline-aspect-ratio);
    }
    .${id}-max-w-\\[subhead\\] {
      max-width: var(--${id}-subhead-max-width);
    }
    .${id}-max-h-\\[subhead\\] {
      max-height: var(--${id}-subhead-max-height);
    }
    .${id}-aspect-\\[subhead\\] {
      aspect-ratio: var(--${id}-subhead-aspect-ratio);
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
      font-size: var(--${id}-subhead-font-size);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-cta-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    .${id}-belk-text-clamp-text-below {
      font-size: var(--${id}-text-below-font-size);
      line-height: 1.3;
      letter-spacing: 0.01em;
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
      .md\\:aspect-\\[704\\/200\\] {
        aspect-ratio: 704 / 200;
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
    }
    @media (width >= 64rem) {
      .lg\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .lg\\:${id}-aspect-\\[column\\] {
        aspect-ratio: var(--${id}-column-aspect-ratio);
      }
      .lg\\:grid-cols-4 {
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

  .${id}-column-background-color {
      background-color: var(--${id}-column-background-color);
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
    .${id}-column-text-below-color {
      color: var(--${id}-column-text-below-color);
    }
  `}</style>
)

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

const DEFAULT_SECTION_BG_SLUG = 'wk27_080425_newcms_homepage_abercrombie_fh_1';

const FullWidthBannerLeftAlignedText = ({ id }) => {
  const sectionBgSlug = (typeof sectionBackgroundImage === 'string' && sectionBackgroundImage.trim()) ? sectionBackgroundImage : DEFAULT_SECTION_BG_SLUG;
  const columns = [
    {
      backgroundColor: `${id}-column-background-color`,
      image: {
        slug: ColumnBackgroundImage,
        altText: ColumnBackgroundImageAltText,
        preset: ColumnBackgroundImagePreset
      },
      eyebrow: {
        content: ColumnEyebrowContent,
        image: {
          slug: ColumnEyebrowImage,
          altText: ColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: ColumnHeadlineContent,
        image: {
          slug: ColumnHeadlineImage,
          altText: ColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: ColumnSubheadContent,
        image: {
          slug: ColumnSubheadImage,
          altText: ColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: ColumnCtaContent,
        url: ColumnCtaUrl,
        adobeTag: ColumnCtaAdobeTag
      },
      textBelow: {
        content: ColumnTextBelow
      }
    },
  ];

  return (
     <>
      <FullWidthBannerLeftAlignedTextStyleVars id={id} />
      <FullWidthBannerLeftAlignedTextStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div className={`relative min-w-0 py-4 md:py-8 overflow-hidden w-full ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color ${id}-aspect-[mobile-container] md:${id}-aspect-[tablet-container] lg:${id}-aspect-[container] my-2 md:my-4`}>
          {sectionBgSlug && (
            <div className="absolute inset-0 -z-10 w-full h-full min-w-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 w-full h-full">
                <PictureResponsiveImage
                  images={{
                    mobile: buildImageUrl(sectionBgSlug, 'm', sectionBackgroundImagePreset),
                    tablet: buildImageUrl(sectionBgSlug, 't', sectionBackgroundImagePreset),
                    desktop: buildImageUrl(sectionBgSlug, 'd', sectionBackgroundImagePreset),
                    largeDesktop: buildImageUrl(sectionBgSlug, 'l', sectionBackgroundImagePreset),
                  }}
                  alt={sectionBackgroundAlt}
                  imageClassName="object-cover object-center min-w-0 min-h-0 w-full h-full"
                  className="w-full h-full"
                  data-bildit-var-name="sectionBackgroundImage"
                  data-bildit-var-type="String"
                />
              </div>
            </div>
          )}
          <div className={`relative top-0 w-full grid grid-cols-2 lg:grid-cols-2 gap-2 overflow-hidden ${id}-container-font-family`}>
            {columns.map(({backgroundColor, image, eyebrow, headline, subhead, cta, textBelow}, index) => (
              <div key={index} data-bildit-var-name="ColumnCtaUrl" data-bildit-var-type="String">
              <WrapperComponent className="w-full cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
                <PictureResponsiveImage
                  images={{
                    mobile: buildImageUrl(image.slug, 'm', image.preset),
                    tablet: buildImageUrl(image.slug, 't', image.preset),
                    desktop: buildImageUrl(image.slug, 'd', image.preset),
                    largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                  }}
                  alt={image.altText}
                  imageClassName="absolute z-10 object-cover "
                  className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] lg:${id}-aspect-[column] rounded-lg md:rounded-2xl ${backgroundColor}`}
                  data-bildit-var-name="ColumnBackgroundImage"
                  data-bildit-var-type="String"
                >
                  <div className={`w-full flex flex-col z-10 items-start text-left ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment] ?? 'text-left'} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}>
                   {eyebrow.image.slug && eyebrow.image.slug.length > 0 ? (
                    <PictureResponsiveImage
                      images={{
                        mobile: buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset),
                        tablet: buildImageUrl(eyebrow.image.slug, 't', eyebrow.image.preset),
                        desktop: buildImageUrl(eyebrow.image.slug, 'd', eyebrow.image.preset),
                        largeDesktop: buildImageUrl(eyebrow.image.slug, 'l', eyebrow.image.preset),
                      }}
                      alt={eyebrow.image.altText}
                      className={`my-2 ${id}-aspect-eyebrow w-full ${id}-max-w-eyebrow ${id}-h-eyebrow`}
                      imageClassName="-z-1 object-contain object-center"
                      data-bildit-var-name="ColumnEyebrowImage"
                      data-bildit-var-type="String"
                    />
                  ) : (
                    <p className={`${id}-belk-text-clamp-eyebrow font-bold`} data-bildit-var-name="ColumnEyebrowContent" data-bildit-var-type="RichText">{eyebrow.content}</p>
                  )}

                  {headline.image.slug && headline.image.slug.length > 0 ? (
                    <PictureResponsiveImage
                      images={{
                        mobile: buildImageUrl(headline.image.slug, 'm', headline.image.preset),
                        tablet: buildImageUrl(headline.image.slug, 't', headline.image.preset),
                        desktop: buildImageUrl(headline.image.slug, 'd', headline.image.preset),
                        largeDesktop: buildImageUrl(headline.image.slug, 'l', headline.image.preset),
                      }}
                      alt={headline.image.altText}
                      className={`my-2 md:my-4 ${id}-aspect-headline w-full ${id}-max-w-headline ${id}-h-headline`}
                      imageClassName="-z-1 object-contain object-center"
                      data-bildit-var-name="ColumnHeadlineImage"
                      data-bildit-var-type="String"
                    />
                  ) : (
                      <h2 className={`my-1 font-bold ${id}-belk-text-clamp-headline`} data-bildit-var-name="ColumnHeadlineContent" data-bildit-var-type="RichText">{headline.content}</h2>
                  )}
                 {subhead.image.slug && subhead.image.slug.length > 0 ? (
                    <PictureResponsiveImage
                      images={{
                        mobile: buildImageUrl(subhead.image.slug, 'm', subhead.image.preset),
                        tablet: buildImageUrl(subhead.image.slug, 't', subhead.image.preset),
                        desktop: buildImageUrl(subhead.image.slug, 'd', subhead.image.preset),
                        largeDesktop: buildImageUrl(subhead.image.slug, 'l', subhead.image.preset),
                      }}
                      alt={subhead.image.altText}
                      className={`my-1 md:my-2 ${id}-aspect-[subhead] w-full h-full ${id}-max-w-[subhead] ${id}-max-h-[subhead]`}
                      imageClassName="-z-1 object-contain object-center"
                      data-bildit-var-name="ColumnSubheadImage"
                      data-bildit-var-type="String"
                    />
                  ) : (
                    <h3 className={`my-2 ${id}-belk-text-clamp-subhead`} data-bildit-var-name="ColumnSubheadContent" data-bildit-var-type="RichText">{subhead.content}</h3>
                  )}

                  {(cta.content) && (
                    <Button className={`self-start mt-2 mb-1 ${id}-belk-text-clamp-cta cursor-pointer ${id}-bg-solid-button`} variant={ctaVariant}><span data-bildit-var-name="ColumnCtaContent" data-bildit-var-type="RichText">{cta.content}</span></Button>
                  )}
                </div>
              </PictureResponsiveImage>
             
              </WrapperComponent>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default FullWidthBannerLeftAlignedText;