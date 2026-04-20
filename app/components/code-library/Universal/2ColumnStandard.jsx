"use client"
// @version v27
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="");
// endgroup

// group { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="16");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="6.2");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="16");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="6.2");
// endgroup

// group { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color);
const sectionBackgroundImage = $(sectionBackgroundImage:String="wk31_2025_newcms_denimdeals_bkgd_1");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group { 4. Column Layout }
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="4";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="3";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="4";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="3";required=true);
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="4";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="3";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const firstColumnVerticalAlignment = $(firstColumnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
const secondColumnVerticalAlignment = $(secondColumnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
const columnRoundedCorners = $(columnRoundedCorners:Dropdown[None|rounded-none,Small|rounded-sm,Medium|rounded-md,Large|rounded-lg,Extra Large|rounded-xl]="rounded-md");
const firstColumnTextAlignment = $(firstColumnTextAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const secondColumnTextAlignment = $(secondColumnTextAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
// endgroup

// group { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const textColor = $(textColor:Color="#000000");
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
const ctaTextColor = $(ctaTextColor:Color="#000000");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
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
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color);
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wk31_2025_newcms_homepage_denimdeals_2c_1");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="");
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="Up to 50% Off");
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="Women's Lucky  Brand");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="Shop Now");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnTextBelow = $(firstColumnTextBelow:RichText="");
// endgroup

// group { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color);
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wk31_2025_newcms_homepage_denimdeals_2c_2");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="Up to 50% Off");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="Men's Denim from Lucky");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop All Deals");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:RichText="");
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

// Generate dynamic border radius classes
const getBorderRadiusClasses = (topRadius, bottomRadius, columnRadius) => {
  const sectionClasses = `${topRadius} ${bottomRadius}`;
  // Generate responsive column classes for mobile, tablet, and desktop
  // You can customize different radius values for different breakpoints if needed
  const columnClasses = `${columnRadius} md:${columnRadius} lg:${columnRadius}`;

  return { sectionClasses, columnClasses };
};

const Button = ({
  id,
  variant = "underline",
  className = "relative flex cursor-pointer",
  children
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button ${className} ${id ? `${id}-bg-solid-button` : 'bg-solid-button'} px-8 py-2 rounded-md`}>
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
        <span  style={{height: '2px'}} className="block relative h-0.5 mt-1">
          <svg
            className={`absolute bottom-0 left-0 h-full w-full underline-svg`}
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M0 0.5 H100" />
          </svg>
          <span className="block relative h-0.5 mt-1 bg-current border-b border-current underline-fallback"></span>
        </span>
      </span>
    </button>
  )
};

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;
const isValidImageSlug = (slug) => typeof slug === 'string' && slug.length > 0;

/**
 * Picture-based responsive image component using HTML picture element.
 * When backgroundLayer is true, the image is absolutely positioned so it fills the column and text overlay only takes the space it needs.
 */
/**
 * Picture-based responsive image component using HTML picture element.
 * When backgroundLayer is true, the image is absolutely positioned (used for section bg). Column images stay in-flow so container height is correct.
 */
const PictureResponsiveImage = ({
  images,
  alt,
  className = "",
  imageClassName = "-z-1 object-cover object-center",
  children,
  backgroundLayer = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const { mobile, tablet, desktop, largeDesktop } = images || {};

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  const fallbackSrc = mobile || tablet || desktop || largeDesktop;
  const hasAnyImage = mobile || tablet || desktop || largeDesktop;
  const pictureWrapperClass = backgroundLayer ? "absolute inset-0 w-full h-full" : "";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasAnyImage && isValidImageUrl(fallbackSrc) && (
        <picture className={pictureWrapperClass}>
          {isValidImageUrl(mobile) && <source alt={alt ?? ''} media="(max-width: 767px)" srcSet={mobile} />}
          {isValidImageUrl(tablet) && <source alt={alt ?? ''} media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
          {isValidImageUrl(desktop) && <source alt={alt ?? ''} media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
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

const TwoColumnWithContentBelowStyleVars = ({id}) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer spacing {
          --${id}-spacing: 0.25rem;
        }
        @layer radius {
          --${id}-radius-sm: 0.125rem;
          --${id}-radius-md: 0.375rem;
          --${id}-radius-lg: 0.5rem;
          --${id}-radius-xl: 0.75rem;
          --${id}-radius-2xl: 1rem;
        }
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-container-text-color: ${textColor};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}px, 2vw, ${sectionTitleMaximumFontSize}px);
          --${id}-container-aspect-ratio: ${containerAspectRatioWidth} / ${containerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
        }
        @layer eyebrow {
          --${id}-eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}px, 1.5vw, ${eyebrowMaximumFontSize}px);
          --${id}-eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer headline {
          --${id}-headline-aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
          --${id}-headline-font-size: clamp(${headlineMinimumFontSize}px, 2vw, ${headlineMaximumFontSize}px);
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
          --${id}-cta-text-color: ${ctaTextColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}px, 2vw, ${ctaMaximumFontSize}px);
        }

        @layer text-below {
          --${id}-text-below-font-size: clamp(${textBelowMinimumFontSize}px, 1vw, ${textBelowMaximumFontSize}px);
        }

        @layer columns {
          --${id}-column-horizontal-padding: clamp(0.75rem, 2vw, 1.5rem);
          --${id}-column-vertical-padding: clamp(0.5rem, 1.5vw, 1rem);
          --${id}-column-aspect-ratio: ${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight};
          --${id}-mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight};
          --${id}-tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight};
          --${id}-first-column-background-color: ${firstColumnBackgroundColor};
          --${id}-second-column-background-color: ${secondColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const TwoColumnWithContentBelowStyles = ({id}) => (
  <style>{`
    .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    .h-0\\.5 {
     height: 0.125rem; /* 2px with a base font size of 16px */
    }
    .my-2 {
      margin-top: calc(var(--${id}-spacing) * 2);
      margin-bottom: calc(var(--${id}-spacing) * 2);
    }
    .my-3 {
      margin-top: calc(var(--${id}-spacing) * 3);
      margin-bottom: calc(var(--${id}-spacing) * 3);
    }
    .my-4 {
      margin-top: calc(var(--${id}-spacing) * 4);
      margin-bottom: calc(var(--${id}-spacing) * 4);
    }
    .mt-4 {
      margin-top: calc(var(--${id}-spacing) * 4);
    }
    .mt-6 {
      margin-top: calc(var(--${id}-spacing) * 6);
    }
    .mb-2 {
      margin-bottom: calc(var(--${id}-spacing) * 2);
    }
    .bg-current {
      background-color: currentColor;
    }
    .border-b {
      border-bottom-width: 1px;
    }
    .border-current {
      border-color: currentColor;
    }
    .underline-svg {
      display: block;
    }
    .underline-fallback {
      display: none;
    }
    /* Fallback for Windows browsers where SVG might not render properly */
    @supports not (stroke: currentColor) {
      .underline-svg {
        display: none;
      }
      .underline-fallback {
        display: block;
      }
    }
    /* Additional fallback for browsers that don't support SVG properly */
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      .underline-svg {
        display: none;
      }
      .underline-fallback {
        display: block;
      }
    }
    .border-px {
      border-width: 1px;
    }
    .px-2 {
      padding-left: calc(var(--${id}-spacing) * 2);
      padding-right: calc(var(--${id}-spacing) * 2);
    }
    .mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\)\\/2\\] {
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
      margin-left: calc(var(--${id}-spacing) * 4);
      margin-right: calc(var(--${id}-spacing) * 4);
    }
    .\\[\\&\\>div\\]\\:px-5 > div {
      padding-left: calc(var(--${id}-spacing) * 5);
      padding-right: calc(var(--${id}-spacing) * 5);
    }
    @media (width >= 40rem) {
      .\\[\\&\\>div\\]\\:sm\\:mx-8 > div {
        margin-left: calc(var(--${id}-spacing) * 8);
        margin-right: calc(var(--${id}-spacing) * 8);
      }
    }
    .${id}-container-background-color {
      background-color: var(--${id}-container-background-color);
    }
    .${id}-container-text-color {
      color: var(--${id}-container-text-color);
    }
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
    .${id}-aspect-\\[343\\/160\\] {
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
    .${id}-max-h-\\[eyebrow\\] {
      max-height: var(--${id}-eyebrow-max-height);
    }
    .${id}-h-\\[eyebrow\\] {
      height: var(--${id}-eyebrow-max-height);
    }
    .${id}-max-w-\\[headline\\] {
      max-width: var(--${id}-headline-max-width);
    }
    .${id}-max-h-\\[headline\\] {
      max-height: var(--${id}-headline-max-height);
    }
    .${id}-h-\\[headline\\] {
      height: var(--${id}-headline-max-height);
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
    .${id}-cta-text-color {
      color: var(--${id}-cta-text-color);
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
        padding-left: calc(var(--${id}-spacing) * 8);
        padding-right: calc(var(--${id}-spacing) * 8);
      }
      .\\[\\&\\>div\\]\\:md\\:mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] > div {
        margin-left: max(36px, (100vw - 1560px) / 2);
        margin-right: max(36px, (100vw - 1560px) / 2);
      }
      .\\[\\&\\>div\\]\\:md\\:max-w-full > div {
        max-width: 100%;
      }
      .\\[\\&\\>div\\]\\:md\\:px-5 > div {
        padding-left: calc(var(--${id}-spacing) * 5);
        padding-right: calc(var(--${id}-spacing) * 5);
      }
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
      }
      .md\\:${id}-aspect-\\[tablet-column\\] {
          aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
      }
      .md\\:px-8 {
        padding-left: calc(var(--${id}-spacing) * 8);
        padding-right: calc(var(--${id}-spacing) * 8);
      }
      .md\\:px-4 {
        padding-left: calc(var(--${id}-spacing) * 4);
        padding-right: calc(var(--${id}-spacing) * 4);
      }
      .md\\:gap-6 {
        gap: calc(var(--${id}-spacing) * 6);
      }
      .md\\:rounded-2xl {
        border-radius: var(--${id}-radius-2xl);
      }
      .md\\:${id}-aspect-\\[704\\/200\\] {
        aspect-ratio: 704 / 200;
      }
      .md\\:my-2 {
        margin-top: calc(var(--${id}-spacing) * 2);
        margin-bottom: calc(var(--${id}-spacing) * 2);
      }
      .md\\:my-4 {
        margin-top: calc(var(--${id}-spacing) * 4);
        margin-bottom: calc(var(--${id}-spacing) * 4);
      }
      .md\\:my-8 {
        margin-top: calc(var(--${id}-spacing) * 8);
        margin-bottom: calc(var(--${id}-spacing) * 8);
      }
      .md\\:py-8 {
        padding-top: calc(var(--${id}-spacing) * 8);
        padding-bottom: calc(var(--${id}-spacing) * 8);
      }
      .md\\:p-8 {
        padding: calc(var(--${id}-spacing) * 8);
      }
      .md\\:py-4 {
        padding-top: calc(var(--${id}-spacing) * 4);
        padding-bottom: calc(var(--${id}-spacing) * 4);
      }
      .md\\:rounded-none {
        border-radius: 0;
      }
      .md\\:rounded-sm {
        border-radius: var(--${id}-radius-sm);
      }
      .md\\:rounded-md {
        border-radius: var(--${id}-radius-md);
      }
      .md\\:rounded-lg {
        border-radius: var(--${id}-radius-lg);
      }
      .md\\:rounded-xl {
        border-radius: var(--${id}-radius-xl);
      }
    }

    @media (width >= 64rem) {
      .lg\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .lg\\:p-8 {
        padding: calc(var(--${id}-spacing) * 8);
      }
      .lg\\:py-4 {
        padding-top: calc(var(--${id}-spacing) * 4);
        padding-bottom: calc(var(--${id}-spacing) * 4);
      }
      .lg\\:rounded-none {
        border-radius: 0;
      }
      .lg\\:rounded-sm {
        border-radius: var(--${id}-radius-sm);
      }
      .lg\\:rounded-md {
        border-radius: var(--${id}-radius-md);
      }
      .lg\\:rounded-lg {
        border-radius: var(--${id}-radius-lg);
      }
      .lg\\:rounded-xl {
        border-radius: var(--${id}-radius-xl);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[column\\] {
        aspect-ratio: var(--${id}-column-aspect-ratio);
      }
    }

    .rounded-t-none {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .rounded-t-sm {
      border-top-left-radius: var(--${id}-radius-sm);
      border-top-right-radius: var(--${id}-radius-sm);
    }
    .rounded-t-md {
      border-top-left-radius: var(--${id}-radius-md);
      border-top-right-radius: var(--${id}-radius-md);
    }
    .rounded-t-lg {
      border-top-left-radius: var(--${id}-radius-lg);
      border-top-right-radius: var(--${id}-radius-lg);
    }
    .rounded-t-xl {
      border-top-left-radius: var(--${id}-radius-xl);
      border-top-right-radius: var(--${id}-radius-xl);
    }
    .rounded-b-none {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .rounded-b-sm {
      border-bottom-left-radius: var(--${id}-radius-sm);
      border-bottom-right-radius: var(--${id}-radius-sm);
    }
    .rounded-b-md {
      border-bottom-left-radius: var(--${id}-radius-md);
      border-bottom-right-radius: var(--${id}-radius-md);
    }
    .rounded-b-lg {
      border-bottom-left-radius: var(--${id}-radius-lg);
      border-bottom-right-radius: var(--${id}-radius-lg);
    }
    .rounded-b-xl {
      border-bottom-left-radius: var(--${id}-radius-xl);
      border-bottom-right-radius: var(--${id}-radius-xl);
    }

    /* Enhanced margin classes with proper specificity */
    .mt-0 {
      margin-top: 0 !important;
    }
    .mb-0 {
      margin-bottom: 0 !important;
    }
    .mt-px {
      margin-top: 1px !important;
    }
    .mb-px {
      margin-bottom: 1px !important;
    }
    .mt-1 {
      margin-top: calc(var(--${id}-spacing) * 1) !important;
    }
    .mb-1 {
      margin-bottom: calc(var(--${id}-spacing) * 1) !important;
    }
    .mt-2 {
      margin-top: calc(var(--${id}-spacing) * 2) !important;
    }
    .mb-2 {
      margin-bottom: calc(var(--${id}-spacing) * 2) !important;
    }
    .mt-4 {
      margin-top: calc(var(--${id}-spacing) * 4) !important;
    }
    .mb-4 {
      margin-bottom: calc(var(--${id}-spacing) * 4) !important;
    }
    .mt-8 {
      margin-top: calc(var(--${id}-spacing) * 8) !important;
    }
    .mb-8 {
      margin-bottom: calc(var(--${id}-spacing) * 8) !important;
    }
    .mt-12 {
      margin-top: calc(var(--${id}-spacing) * 12) !important;
    }
    .mb-12 {
      margin-bottom: calc(var(--${id}-spacing) * 12) !important;
    }
    .mt-16 {
      margin-top: calc(var(--${id}-spacing) * 16) !important;
    }
    .mb-16 {
      margin-bottom: calc(var(--${id}-spacing) * 16) !important;
    }
    .mt-20 {
      margin-top: calc(var(--${id}-spacing) * 20) !important;
    }
    .mb-20 {
      margin-bottom: calc(var(--${id}-spacing) * 20) !important;
    }

    .${id}-first-column-background-color {
      background-color: var(--${id}-first-column-background-color);
    }
    .${id}-second-column-background-color {
      background-color: var(--${id}-second-column-background-color);
    }

    .top-\\[70px\\] {
      top: 70px;
    }
    .top-\\[23px\\] {
      top: 23px;
    }
    .top-\\[20px\\] {
      top: 20px;
    }

    .whitespace-pre-line {
      white-space: pre-line;
    }

    /* Padding classes */
    .p-4 {
      padding: calc(var(--${id}-spacing) * 4);
    }
    .gap-4 {
      gap: calc(var(--${id}-spacing) * 4);
    }
    .py-4 {
      padding-top: calc(var(--${id}-spacing) * 4);
      padding-bottom: calc(var(--${id}-spacing) * 4);
    }


    /* Margin classes */
    .mt-4 {
      margin-top: calc(var(--${id}-spacing) * 4);
    }

    /* Border radius classes */
    .rounded-none {
      border-radius: 0;
    }
    .rounded-sm {
      border-radius: var(--${id}-radius-sm);
    }
    .rounded-md {
      border-radius: var(--${id}-radius-md);
    }
    .rounded-lg {
      border-radius: var(--${id}-radius-lg);
    }
    .rounded-xl {
      border-radius: var(--${id}-radius-xl);
    }

    /* Responsive border radius classes */


    .rounded-t-none {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .rounded-t-sm {
      border-top-left-radius: var(--${id}-radius-sm);
      border-top-right-radius: var(--${id}-radius-sm);
    }
    .rounded-t-md {
      border-top-left-radius: var(--${id}-radius-md);
      border-top-right-radius: var(--${id}-radius-md);
    }
    .rounded-t-lg {
      border-top-left-radius: var(--${id}-radius-lg);
      border-top-right-radius: var(--${id}-radius-lg);
    }
    .rounded-t-xl {
      border-top-left-radius: var(--${id}-radius-xl);
      border-top-right-radius: var(--${id}-radius-xl);
    }
    .rounded-b-none {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .rounded-b-sm {
      border-bottom-left-radius: var(--${id}-radius-sm);
      border-bottom-right-radius: var(--${id}-radius-sm);
    }
    .rounded-b-md {
      border-bottom-left-radius: var(--${id}-radius-md);
      border-bottom-right-radius: var(--${id}-radius-md);
    }
    .rounded-b-lg {
      border-bottom-left-radius: var(--${id}-radius-lg);
      border-bottom-right-radius: var(--${id}-radius-lg);
    }
    .rounded-b-xl {
      border-bottom-left-radius: var(--${id}-radius-xl);
      border-bottom-right-radius: var(--${id}-radius-xl);
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
        return 'w-full'; // No margins or padding for full width
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

// Helper function to determine if padding should be applied
const shouldApplyPadding = (topMargin, bottomMargin) => {
  const topIsNone = topMargin === 'mt-0';
  const bottomIsNone = bottomMargin === 'mb-0';
  return !(topIsNone || bottomIsNone);
};


/*
  Derived from alignment constants for text alignment.
*/
const textAlignment = {
  'items-start': 'text-left',
  'items-center': 'text-center',
  'items-end': 'text-right',
};

const TwoColumnStandard = ({id}) => {
  const selfAlignment = { 'items-start': 'self-start', 'items-center': 'self-center', 'items-end': 'self-end' };

  const columns = [
    {
      backgroundColor: `${id}-first-column-background-color`,
      alignment: firstColumnTextAlignment,
      verticalAlignment: firstColumnVerticalAlignment,
      eyebrowVarName: 'firstColumnEyebrowContent',
      headlineVarName: 'firstColumnHeadlineContent',
      subheadVarName: 'firstColumnSubheadContent',
      ctaVarName: 'firstColumnCtaContent',
      textBelowVarName: 'firstColumnTextBelow',
      image: {
        slug: firstColumnBackgroundImage,
        altText: firstColumnBackgroundImageAltText,
        preset: firstColumnBackgroundImagePreset
      },
      eyebrow: {
        content: firstColumnEyebrowContent,
        image: {
          slug: firstColumnEyebrowImage,
          altText: firstColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: firstColumnHeadlineContent,
        image: {
          slug: firstColumnHeadlineImage,
          altText: firstColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: firstColumnSubheadContent,
        image: {
          slug: firstColumnSubheadImage,
          altText: firstColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: firstColumnCtaContent,
        url: firstColumnCtaUrl,
        adobeTag: firstColumnCtaAdobeTag
      },
      textBelow: {
        content: firstColumnTextBelow
      }
    },
    {
      backgroundColor: `${id}-second-column-background-color`,
      alignment: secondColumnTextAlignment,
      verticalAlignment: secondColumnVerticalAlignment,
      eyebrowVarName: 'secondColumnEyebrowContent',
      headlineVarName: 'secondColumnHeadlineContent',
      subheadVarName: 'secondColumnSubheadContent',
      ctaVarName: 'secondColumnCtaContent',
      textBelowVarName: 'secondColumnTextBelow',
      image: {
        slug: secondColumnBackgroundImage,
        altText: secondColumnBackgroundImageAltText,
        preset: secondColumnBackgroundImagePreset
      },
      eyebrow: {
        content: secondColumnEyebrowContent,
        image: {
          slug: secondColumnEyebrowImage,
          altText: secondColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: secondColumnHeadlineContent,
        image: {
          slug: secondColumnHeadlineImage,
          altText: secondColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: secondColumnSubheadContent,
        image: {
          slug: secondColumnSubheadImage,
          altText: secondColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: secondColumnCtaContent,
        url: secondColumnCtaUrl,
        adobeTag: secondColumnCtaAdobeTag
      },
      textBelow: {
        content: secondColumnTextBelow
      }
    }
  ];

  const { sectionClasses, columnClasses } = getBorderRadiusClasses(roundedCornersTop, roundedCornersBottom, columnRoundedCorners);

  // Safe alignment for section header (NestedSlotRenderer can inject function instead of string)
  const alignmentClass = (typeof sectionAlignment === 'string' ? sectionAlignment : 'items-center') || 'items-center';

  // Determine padding classes based on margin settings

  // Determine if horizontal centering should be applied
  const horizontalCentering = containerBehavior === 'max-w-full' ? '' : 'justify-center mx-auto';

  // Determine if content should be centered (for full-width, no centering)
  const contentCentering = containerBehavior === 'max-w-full' ? '' : 'justify-center';

  return (
    <>
      <TwoColumnWithContentBelowStyleVars id={id} />
      <TwoColumnWithContentBelowStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative ${horizontalCentering} ${topMargin} ${bottomMargin}`}
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
          imageClassName="z-0 object-cover object-center"
          className={`relative ${contentCentering} ${id}-aspect-[mobile-container] md:${id}-aspect-[tablet-container] xl:${id}-aspect-[container] ${sectionClasses} ${id}-container-background-color p-4 md:p-8`}
        >
        {sectionTitle && (
          <div className={`flex flex-col lg:flex-row relative w-full font-bold ${alignmentClass} items-center ${containerBehavior !== 'max-w-full' ? containerBehavior : ''} ${topMargin} ${bottomMargin}`}>
            <span className={`flex flex-inline ${id}-belk-text-clamp-section-title`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>
          </div>
        )}
        <div className={`relative w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start auto-rows-min ${id}-container-text-color ${id}-container-font-family`}>
          {columns.map(({backgroundColor, image, eyebrow, headline, subhead, cta, textBelow, alignment, verticalAlignment, eyebrowVarName, headlineVarName, subheadVarName, ctaVarName, textBelowVarName}, index) => (
            <WrapperComponent key={index} className="w-full cursor-pointer self-start" href={cta.url} data-aali={cta.adobeTag}>
              <div className={`w-full flex flex-col relative flex-shrink-0 ${columnRoundedCorners} shadow-sm ${backgroundColor}`} data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage'][index]} data-bildit-var-type="String">
              {isValidImageSlug(image.slug) ? (
                <div className={`w-full relative overflow-hidden ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[column]`}>
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(image.slug, 'm', image.preset),
                      tablet: buildImageUrl(image.slug, 't', image.preset),
                      desktop: buildImageUrl(image.slug, 'd', image.preset),
                      largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                    }}
                    alt={image.altText}
                    imageClassName="z-0 object-cover object-center"
                    backgroundLayer
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : null}
                <div className={`w-full flex flex-col z-10 ${verticalAlignment} ${alignment} ${textAlignment[alignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding ${isValidImageSlug(image.slug) ? 'absolute inset-0 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto' : ''}`}>
                  {isValidImageSlug(eyebrow.image.slug) ? (
                    <div className="contents" data-bildit-var-name={['firstColumnEyebrowImage','secondColumnEyebrowImage'][index]} data-bildit-var-type="String">
                    <PictureResponsiveImage
                      images={{
                        mobile: buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset),
                        tablet: buildImageUrl(eyebrow.image.slug, 't', eyebrow.image.preset),
                        desktop: buildImageUrl(eyebrow.image.slug, 'd', eyebrow.image.preset),
                        largeDesktop: buildImageUrl(eyebrow.image.slug, 'l', eyebrow.image.preset),
                      }}
                      alt={eyebrow.image.altText}
                      className={`my-2 ${id}-aspect-[eyebrow] w-full ${id}-max-w-[eyebrow] ${id}-h-[eyebrow]`}
                      imageClassName="-z-1 object-contain object-center"
                    />
                    </div>
                  ) : (
                    <p className={`${id}-belk-text-clamp-eyebrow font-bold whitespace-pre-line`} data-bildit-var-name={eyebrowVarName} data-bildit-var-type="RichText">{eyebrow.content}</p>
                  )}

                  {isValidImageSlug(headline.image.slug) ? (
                    <div className="contents" data-bildit-var-name={['firstColumnHeadlineImage','secondColumnHeadlineImage'][index]} data-bildit-var-type="String">
                    <PictureResponsiveImage
                      images={{
                        mobile: buildImageUrl(headline.image.slug, 'm', headline.image.preset),
                        tablet: buildImageUrl(headline.image.slug, 't', headline.image.preset),
                        desktop: buildImageUrl(headline.image.slug, 'd', headline.image.preset),
                        largeDesktop: buildImageUrl(headline.image.slug, 'l', headline.image.preset),
                      }}
                      alt={headline.image.altText}
                      className={`my-2 md:my-4 ${id}-aspect-[headline] w-full ${id}-max-w-[headline] ${id}-h-[headline]`}
                      imageClassName="-z-1 object-contain object-center"
                    />
                    </div>
                  ) : (
                    <h2 className={`my-1 whitespace-pre-line font-bold ${id}-belk-text-clamp-headline`} data-bildit-var-name={headlineVarName} data-bildit-var-type="RichText">{headline.content}</h2>
                  )}

                  {isValidImageSlug(subhead.image.slug) ? (
                    <div className="contents" data-bildit-var-name={['firstColumnSubheadImage','secondColumnSubheadImage'][index]} data-bildit-var-type="String">
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
                    />
                    </div>
                  ) : (
                    <h3 className={`my-1 ${id}-belk-text-clamp-subhead whitespace-pre-line`} data-bildit-var-name={subheadVarName} data-bildit-var-type="RichText">{subhead.content}</h3>
                  )}

                  {(cta.content) && (
                    <Button id={id} className={`my-1 mt-2 w-fit max-w-full ${id}-belk-text-clamp-cta whitespace-pre-line cursor-pointer ${selfAlignment[alignment] ?? 'self-start'} ${textAlignment[alignment] ?? 'text-left'}`} variant={ctaVariant}><span data-bildit-var-name={ctaVarName} data-bildit-var-type="RichText">{cta.content}</span></Button>
                  )}
                </div>
              </div>
              {textBelow.content && (
                <p className={`${id}-belk-text-clamp-text-below font-bold text-center my-2`} data-bildit-var-name={textBelowVarName} data-bildit-var-type="RichText">{textBelow.content}</p>
              )}
            </WrapperComponent>
          ))}
        </div>
      </PictureResponsiveImage>
        </div>
    </ResponsiveContainer>
    </>
  );
};

export default TwoColumnStandard;