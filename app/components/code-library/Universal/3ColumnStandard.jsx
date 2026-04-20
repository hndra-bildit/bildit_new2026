"use client"
// @version v28
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="");
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="16");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="6");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="4");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="3");
  const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="16");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="3");
// endgroup

// group: { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#FFFFFF");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group: { 4. Column Layout }
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="4";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="3";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="1";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="1";required=true);
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="1";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="1";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-center");
// endgroup



// group: { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:String="20");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:String="32");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:String="14");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:String="16");
const headlineMinimumFontSize = $(headlineMinimumFontSize:String="44");
const headlineMaximumFontSize = $(headlineMaximumFontSize:String="54");
const subheadMinimumFontSize = $(subheadMinimumFontSize:String="16");
const subheadMaximumFontSize = $(subheadMaximumFontSize:String="28");
const ctaMinimumFontSize = $(ctaMinimumFontSize:String="16");
const ctaMaximumFontSize = $(ctaMaximumFontSize:String="20");
const textBelowMinimumFontSize = $(textBelowMinimumFontSize:String="16");
const textBelowMaximumFontSize = $(textBelowMaximumFontSize:String="28");
// endgroup

// group: { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
// endgroup

// group: { 7. Image Sizing }
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

// group: { 8. Column 1 }
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#eeeeee");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wk22_063025_homepage_trend_3c_1");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="");
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="");
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnTextBelow = $(firstColumnTextBelow:RichText="");
// endgroup

// group: { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#eeeeee");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wk22_063025_homepage_trend_3c_2");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="Fasshion Moment");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="Vibrant Vaccation");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop Now");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:RichText="");
// endgroup

// group: { 10. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color="#eeeeee");
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="wk22_063025_homepage_trend_3c_3");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnEyebrowImage = $(thirdColumnEyebrowImage:String="");
const thirdColumnEyebrowImageAltText = $(thirdColumnEyebrowImageAltText:String="");
const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText="");
const thirdColumnHeadlineImage = $(thirdColumnHeadlineImage:String="");
const thirdColumnHeadlineImageAltText = $(thirdColumnHeadlineImageAltText:String="");
const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText="");
const thirdColumnSubheadImage = $(thirdColumnSubheadImage:String="");
const thirdColumnSubheadImageAltText = $(thirdColumnSubheadImageAltText:String="");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText="");
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText="");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
const thirdColumnTextBelow = $(thirdColumnTextBelow:RichText="");
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

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;
const isValidImageSlug = (slug) => typeof slug === 'string' && slug.length > 0;

const Button = ({
  variant = "underline",
  className = "relative flex cursor-pointer",
  children
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button ${className} bg-solid-button px-8 py-2 rounded-md`}>
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

/**
 * Picture-based responsive image component using HTML picture element.
 * When backgroundLayer is true, the image is absolutely positioned (e.g. for section bg or column image block).
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

const ThreeColumnStandardStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
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
          --${id}-column-horizontal-padding: clamp(0.75rem, 2vw, 1.5rem);
          --${id}-column-vertical-padding: clamp(0.5rem, 1.5vw, 1rem);
          --${id}-column-aspect-ratio: ${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight};
          --${id}-mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight};
          --${id}-tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight};
          --${id}-first-column-background-color: ${firstColumnBackgroundColor};
          --${id}-second-column-background-color: ${secondColumnBackgroundColor};
          --${id}-third-column-background-color: ${thirdColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const ThreeColumnStandardStyles = ({ id }) => (
  <style>{`
    .max-w-inset {
      max-width: var(--breakpoint-3xl);
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
    .container-background-color {
      background-color: var(--container-background-color);
    }
    .container-font-family {
      font-family: var(--container-font-family);
    }
    .belk-text-clamp-section-title {
      font-size: var(--section-title-font-size);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    .column-horizontal-padding {
      padding-left: var(--column-horizontal-padding);
      padding-right: var(--column-horizontal-padding);
    }
    .column-vertical-padding {
      padding-top: var(--column-vertical-padding);
      padding-bottom: var(--column-vertical-padding);
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
    .${id}-max-h-\\[eyebrow\\] {
      max-height: var(--${id}-eyebrow-max-height);
    }
    .${id}-max-w-\\[headline\\] {
      max-width: var(--${id}-headline-max-width);
    }
    .${id}-max-h-\\[headline\\] {
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
    .${id}-cta-align-start {
      align-self: flex-start;
    }
    .${id}-cta-align-center {
      align-self: center;
    }
    .${id}-cta-align-end {
      align-self: flex-end;
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
      .md\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .md\\:py-8 {
        padding-top: calc(var(--spacing) * 8);
        padding-bottom: calc(var(--spacing) * 8);
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

    .${id}-container-background-color {
      background-color: var(--${id}-container-background-color);
    }
    .${id}-container-font-family {
      font-family: var(--${id}-container-font-family);
    }
    .${id}-belk-text-clamp-section-title {
      font-size: var(--${id}-section-title-font-size);
      line-height: 1.2;
    }
    .${id}-column-horizontal-padding {
      padding-left: var(--${id}-column-horizontal-padding);
      padding-right: var(--${id}-column-horizontal-padding);
    }
    .${id}-column-vertical-padding {
      padding-top: var(--${id}-column-vertical-padding);
      padding-bottom: var(--${id}-column-vertical-padding);
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
  `}</style>
)

const SafeLink = ({ href, children, ...props }) => (
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
const ctaAlignClass = (id) => ({
  'items-start': `${id}-cta-align-start`,
  'items-center': `${id}-cta-align-center`,
  'items-end': `${id}-cta-align-end`,
});

const ThreeColumnStandard = ({ id }) => {
  const alignmentClass = (typeof sectionAlignment === 'string' ? sectionAlignment : 'items-start') || 'items-start';

  const columns = [
    {
      backgroundColor: `${id}-first-column-background-color`,
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
    },
    {
      backgroundColor: `${id}-third-column-background-color`,
      image: {
        slug: thirdColumnBackgroundImage,
        altText: thirdColumnBackgroundImageAltText,
        preset: thirdColumnBackgroundImagePreset
      },
      eyebrow: {
        content: thirdColumnEyebrowContent,
        image: {
          slug: thirdColumnEyebrowImage,
          altText: thirdColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: thirdColumnHeadlineContent,
        image: {
          slug: thirdColumnHeadlineImage,
          altText: thirdColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: thirdColumnSubheadContent,
        image: {
          slug: thirdColumnSubheadImage,
          altText: thirdColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: thirdColumnCtaContent,
        url: thirdColumnCtaUrl,
        adobeTag: thirdColumnCtaAdobeTag
      },
      textBelow: {
        content: thirdColumnTextBelow
      }
    }
  ];

  const columnVarNames = [
    { imageAlt: 'firstColumnBackgroundImageAltText', eyebrowImageAlt: 'firstColumnEyebrowImageAltText', eyebrow: 'firstColumnEyebrowContent', headlineImageAlt: 'firstColumnHeadlineImageAltText', headline: 'firstColumnHeadlineContent', subheadImageAlt: 'firstColumnSubheadImageAltText', subhead: 'firstColumnSubheadContent', cta: 'firstColumnCtaContent', textBelow: 'firstColumnTextBelow' },
    { imageAlt: 'secondColumnBackgroundImageAltText', eyebrowImageAlt: 'secondColumnEyebrowImageAltText', eyebrow: 'secondColumnEyebrowContent', headlineImageAlt: 'secondColumnHeadlineImageAltText', headline: 'secondColumnHeadlineContent', subheadImageAlt: 'secondColumnSubheadImageAltText', subhead: 'secondColumnSubheadContent', cta: 'secondColumnCtaContent', textBelow: 'secondColumnTextBelow' },
    { imageAlt: 'thirdColumnBackgroundImageAltText', eyebrowImageAlt: 'thirdColumnEyebrowImageAltText', eyebrow: 'thirdColumnEyebrowContent', headlineImageAlt: 'thirdColumnHeadlineImageAltText', headline: 'thirdColumnHeadlineContent', subheadImageAlt: 'thirdColumnSubheadImageAltText', subhead: 'thirdColumnSubheadContent', cta: 'thirdColumnCtaContent', textBelow: 'thirdColumnTextBelow' },
  ];

  return (
    <>
      <ThreeColumnStandardStyleVars id={id} />
      <ThreeColumnStandardStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div className="contents" data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
            tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
            desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
            largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
          }}
          alt={sectionBackgroundAlt}
          imageClassName="-z-1 object-cover object-center"
          className={`relative justify-center ${id}-aspect-[mobile-container] md:${id}-aspect-[tablet-container] xl:${id}-aspect-[container] ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color py-4 md:py-8`}
        >
          {sectionTitle && (
            <div className={`flex flex-col md:flex-row relative w-full font-bold mb-4 ${alignmentClass} items-center ${containerBehavior} ${topMargin} mb-4 px-4 md:px-6 lg:px-8`}>
              <span className={`flex flex-inline ${id}-belk-text-clamp-section-title`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>
            </div>
          )}
          <div className={`relative w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-start ${id}-container-font-family px-4 md:px-6 lg:px-8`}>
            {columns.map(({ backgroundColor, image, eyebrow, headline, subhead, cta, textBelow }, index) => {
              const v = columnVarNames[index];
              return (
              <SafeLink key={index} className="w-full flex flex-col cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
                <div className="contents" data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage','thirdColumnBackgroundImage'][index]} data-bildit-var-type="String">
                <PictureResponsiveImage
                  images={{
                    mobile: buildImageUrl(image.slug, 'm', image.preset),
                    tablet: buildImageUrl(image.slug, 't', image.preset),
                    desktop: buildImageUrl(image.slug, 'd', image.preset),
                    largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                  }}
                  alt={image.altText}
                  imageClassName={isValidImageSlug(image.slug) ? "z-0 object-cover object-center" : "z-10 object-contain object-center"}
                  backgroundLayer={isValidImageSlug(image.slug)}
                  className={`flex w-full relative overflow-visible rounded-lg md:rounded-2xl ${isValidImageSlug(image.slug) ? `${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[column]` : 'min-h-0'} ${backgroundColor}`}
                >
                  <div className={`w-full flex flex-col z-10 flex-shrink-0 min-h-0 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}>
                    {eyebrow.image.slug && isValidImageSlug(eyebrow.image.slug) ? (
                      <div className="contents" data-bildit-var-name={['firstColumnEyebrowImage','secondColumnEyebrowImage','thirdColumnEyebrowImage'][index]} data-bildit-var-type="String">
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset),
                          tablet: buildImageUrl(eyebrow.image.slug, 't', eyebrow.image.preset),
                          desktop: buildImageUrl(eyebrow.image.slug, 'd', eyebrow.image.preset),
                          largeDesktop: buildImageUrl(eyebrow.image.slug, 'l', eyebrow.image.preset),
                        }}
                        alt={eyebrow.image.altText}
                        className={`my-2 ${id}-aspect-[eyebrow] w-full ${id}-max-w-[eyebrow] ${id}-max-h-[eyebrow]`}
                        imageClassName="-z-1 object-contain object-center"
                      />
                      </div>
                    ) : (
                      <p className={`${id}-belk-text-clamp-eyebrow font-bold`} data-bildit-var-name={v.eyebrow} data-bildit-var-type="RichText">{eyebrow.content}</p>
                    )}

                    {headline.image.slug && isValidImageSlug(headline.image.slug) ? (
                      <div className="contents" data-bildit-var-name={['firstColumnHeadlineImage','secondColumnHeadlineImage','thirdColumnHeadlineImage'][index]} data-bildit-var-type="String">
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(headline.image.slug, 'm', headline.image.preset),
                          tablet: buildImageUrl(headline.image.slug, 't', headline.image.preset),
                          desktop: buildImageUrl(headline.image.slug, 'd', headline.image.preset),
                          largeDesktop: buildImageUrl(headline.image.slug, 'l', headline.image.preset),
                        }}
                        alt={headline.image.altText}
                        className={`my-2 md:my-4 ${id}-aspect-[headline] w-full ${id}-max-w-[headline] ${id}-max-h-[headline]`}
                        imageClassName="-z-1 object-contain object-center"
                      />
                      </div>
                    ) : (
                      <h2 className={`my-1 font-bold ${id}-belk-text-clamp-headline`} data-bildit-var-name={v.headline} data-bildit-var-type="RichText">{headline.content}</h2>
                    )}

                    {subhead.image.slug && isValidImageSlug(subhead.image.slug) ? (
                      <div className="contents" data-bildit-var-name={['firstColumnSubheadImage','secondColumnSubheadImage','thirdColumnSubheadImage'][index]} data-bildit-var-type="String">
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
                      <h3 className={`my-1 ${id}-belk-text-clamp-subhead`} data-bildit-var-name={v.subhead} data-bildit-var-type="RichText">{subhead.content}</h3>
                    )}

                    {(cta.content) && (
                      <Button className={`my-1 mt-2 ${ctaAlignClass(id)[columnHorizontalAlignment] ?? `${id}-cta-align-start`} ${id}-belk-text-clamp-cta cursor-pointer`} variant={ctaVariant}><span data-bildit-var-name={v.cta} data-bildit-var-type="RichText">{cta.content}</span></Button>
                    )}
                  </div>
                </PictureResponsiveImage>
                </div>
                {textBelow.content && (
                  <p className={`${id}-belk-text-clamp-text-below font-bold text-center my-2`} data-bildit-var-name={v.textBelow} data-bildit-var-type="RichText">{textBelow.content}</p>
                )}
              </SafeLink>
            );
            })}
          </div>
        </PictureResponsiveImage>
        </div>
      </ResponsiveContainer>
    </>
  );
}

export default ThreeColumnStandard