"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="");
const headerContentArrangement = $(headerContentArrangement:Dropdown[Stacked|flex-col,Side by Side|flex-row]="flex-col");
const sectionSubhead = $(sectionSubhead:RichText="");
const sectionCtaContent = $(sectionCtaContent:RichText="");
const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
// endgroup

// group { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="left");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const desktopContainerAspectRatioWidth = $(desktopContainerAspectRatioWidth:String="");
const desktopContainerAspectRatioHeight = $(desktopContainerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
// endgroup

// group { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#2A3F40");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group { 4. Column Layout }
const desktopLargeImageAspectRatioWidth = $(desktopLargeImageAspectRatioWidth:String="785");
const desktopLargeImageAspectRatioHeight = $(desktopLargeImageAspectRatioHeight:String="436");
const desktopSmallImageAspectRatioWidth = $(desktopSmallImageAspectRatioWidth:String="369");
const desktopSmallImageAspectRatioHeight = $(desktopSmallImageAspectRatioHeight:String="210");
const tabletLargeImageAspectRatioWidth = $(tabletLargeImageAspectRatioWidth:String="640");
const tabletLargeImageAspectRatioHeight = $(tabletLargeImageAspectRatioHeight:String="168");
const tabletSmallImageAspectRatioWidth = $(tabletSmallImageAspectRatioWidth:String="369");
const tabletSmallImageAspectRatioHeight = $(tabletSmallImageAspectRatioHeight:String="210");
const mobileLargeImageAspectRatioWidth = $(mobileLargeImageAspectRatioWidth:String="311");
const mobileLargeImageAspectRatioHeight = $(mobileLargeImageAspectRatioHeight:String="150");
const mobileSmallImageAspectRatioWidth = $(mobileSmallImageAspectRatioWidth:String="148");
const mobileSmallImageAspectRatioHeight = $(mobileSmallImageAspectRatioHeight:String="120");
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
// endgroup

// group { 4.1. Responsive Grid Configuration }
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-2");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-2");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-4");
const gridGap = $(gridGap:Dropdown[Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-4");
// endgroup

// group { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const textColor = $(textColor:Color);
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
const ctaTextColor = $(ctaTextColor:Color);
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
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color);
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wk40_2025_test_extrahour_1_2_2_p1");
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

// group { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color);
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wk40_2025_test_extrahour_1_2_2_p2");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:String="");
// endgroup

// group { 10. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color);
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="wk40_2025_test_extrahour_1_2_2_p3");
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

// group { 11. Column 4 }
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color);
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="wk40_2025_test_extrahour_1_2_2_p4");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnEyebrowImage = $(fourthColumnEyebrowImage:String="");
const fourthColumnEyebrowImageAltText = $(fourthColumnEyebrowImageAltText:String="");
const fourthColumnEyebrowContent = $(fourthColumnEyebrowContent:RichText="");
const fourthColumnHeadlineImage = $(fourthColumnHeadlineImage:String="");
const fourthColumnHeadlineImageAltText = $(fourthColumnHeadlineImageAltText:String="");
const fourthColumnHeadlineContent = $(fourthColumnHeadlineContent:RichText="");
const fourthColumnSubheadImage = $(fourthColumnSubheadImage:String="");
const fourthColumnSubheadImageAltText = $(fourthColumnSubheadImageAltText:String="");
const fourthColumnSubheadContent = $(fourthColumnSubheadContent:RichText="");
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText="");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
const fourthColumnTextBelow = $(fourthColumnTextBelow:RichText="");
// endgroup

// group { 12. Column 5 }
const fifthColumnBackgroundColor = $(fifthColumnBackgroundColor:Color);
const fifthColumnBackgroundImage = $(fifthColumnBackgroundImage:String="wk40_2025_test_extrahour_1_2_2_p5");
const fifthColumnBackgroundImageAltText = $(fifthColumnBackgroundImageAltText:String="");
const fifthColumnBackgroundImagePreset = $(fifthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fifthColumnEyebrowImage = $(fifthColumnEyebrowImage:String="");
const fifthColumnEyebrowImageAltText = $(fifthColumnEyebrowImageAltText:String="");
const fifthColumnEyebrowContent = $(fifthColumnEyebrowContent:RichText="");
const fifthColumnHeadlineImage = $(fifthColumnHeadlineImage:String="");
const fifthColumnHeadlineImageAltText = $(fifthColumnHeadlineImageAltText:String="");
const fifthColumnHeadlineContent = $(fifthColumnHeadlineContent:RichText="");
const fifthColumnSubheadImage = $(fifthColumnSubheadImage:String="");
const fifthColumnSubheadImageAltText = $(fifthColumnSubheadImageAltText:String="");
const fifthColumnSubheadContent = $(fifthColumnSubheadContent:RichText="");
const fifthColumnCtaContent = $(fifthColumnCtaContent:RichText="");
const fifthColumnCtaUrl = $(fifthColumnCtaUrl:String="/";required=true);
const fifthColumnCtaAdobeTag = $(fifthColumnCtaAdobeTag:String="";required=true);
const fifthColumnTextBelow = $(fifthColumnTextBelow:RichText="");
// endgroup

const MOBILE_TO_DESKTOP_RATIO = 3.159

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


const Button = ({ variant = "underline", className = "relative flex cursor-pointer", children }) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button ${className} px-8 py-2 rounded-md`}>
        <span className="relative inline-block">{children}</span>
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
      console.warn(`Failed to load image sources`)
      setHasError(true)
    }
  }

  const hasAnyImage = mobile || tablet || desktop || largeDesktop

  return (
    <div className={`relative overflow-hidden ${className}`} {...rest}>
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

const OneTwoTwoStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-container-text-color: ${textColor};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}px, 2.5dvw, ${sectionTitleMaximumFontSize}px);
          --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
        }
        @layer eyebrow {
          --${id}-eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}px, 1.8dvw, ${eyebrowMaximumFontSize}px);
          --${id}-eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer headline {
          --${id}-headline-aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
          --${id}-headline-font-size: clamp(${headlineMinimumFontSize}px, 2.8dvw, ${headlineMaximumFontSize}px);
          --${id}-headline-max-width: clamp(${headlineImageWidth}px, 50vw, ${headlineImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-headline-max-height: clamp(${headlineImageHeight}px, 50vw, ${headlineImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer subhead {
          --${id}-subhead-aspect-ratio: ${subheadImageWidth} / ${subheadImageHeight};
          --${id}-subhead-font-size: clamp(${subheadMinimumFontSize}px, 2.2dvw, ${subheadMaximumFontSize}px);
          --${id}-subhead-max-width: clamp(${subheadImageWidth}px, 50vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-subhead-max-height: clamp(${subheadImageHeight}px, 50vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-text-color: ${ctaTextColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}px, 1.8dvw, ${ctaMaximumFontSize}px);
        }

        @layer text-below {
          --${id}-text-below-font-size: clamp(${textBelowMinimumFontSize}px, 1.5dvw, ${textBelowMaximumFontSize}px);
        }

        @layer columns {
          --${id}-column-horizontal-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
          --${id}-column-vertical-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
          --${id}-desktop-large-image-aspect-ratio: ${desktopLargeImageAspectRatioWidth} / ${desktopLargeImageAspectRatioHeight};
          --${id}-desktop-small-image-aspect-ratio: ${desktopSmallImageAspectRatioWidth} / ${desktopSmallImageAspectRatioHeight};
          --${id}-tablet-large-image-aspect-ratio: ${tabletLargeImageAspectRatioWidth} / ${tabletLargeImageAspectRatioHeight};
          --${id}-tablet-small-image-aspect-ratio: ${tabletSmallImageAspectRatioWidth} / ${tabletSmallImageAspectRatioHeight};
          --${id}-mobile-large-image-aspect-ratio: ${mobileLargeImageAspectRatioWidth} / ${mobileLargeImageAspectRatioHeight};
          --${id}-mobile-small-image-aspect-ratio: ${mobileSmallImageAspectRatioWidth} / ${mobileSmallImageAspectRatioHeight};
          --${id}-mobile-grid-layout: ${mobileGridLayout};
          --${id}-tablet-grid-layout: ${tabletGridLayout};
          --${id}-desktop-grid-layout: ${desktopGridLayout};
          --${id}-grid-gap: ${gridGap};
          --${id}-first-column-background-color: ${firstColumnBackgroundColor};
          --${id}-second-column-background-color: ${secondColumnBackgroundColor};
          --${id}-third-column-background-color: ${thirdColumnBackgroundColor};
          --${id}-fourth-column-background-color: ${fourthColumnBackgroundColor};
          --${id}-fifth-column-background-color: ${fifthColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const OneTwoTwoStyles = ({ id }) => (
  <style>{`
    /* Tailwind fallback (combinedv1plan §1.5) */
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .flex-row { flex-direction: row; }
    .flex-nowrap { flex-wrap: nowrap; }
    .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    .h-0\\.5 {
      height: 0.125rem;
    }
    .border-px {
      border-width: 1px;
    }
    .${id} .mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] {
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
    .${id}-aspect-\\[desktop-container\\] {
      aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-container\\] {
      aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-container\\] {
      aspect-ratio: var(--${id}-mobile-container-aspect-ratio);
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
    .cta-text-color {
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
      .${id} .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .${id} .\\[\\&\\>div\\]\\:md\\:mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] > div {
        margin-left: max(36px, (100vw - 1560px) / 2);
        margin-right: max(36px, (100vw - 1560px) / 2);
      }
      .\\[\\&\\>div\\]\\:md\\:max-w-full > div {
        max-width: 100%;
      }
      .${id} .\\[\\&\\>div\\]\\:md\\:px-5 > div {
        padding-left: calc(var(--spacing) * 5);
        padding-right: calc(var(--spacing) * 5);
      }
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
      }

      .md\\:${id}-aspect-\\[tablet-large-image\\] {
        aspect-ratio: var(--${id}-tablet-large-image-aspect-ratio);
      }
      .md\\:${id}-aspect-\\[tablet-small-image\\] {
        aspect-ratio: var(--${id}-tablet-small-image-aspect-ratio);
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

     @media (width < 48rem) {
     .sm\\:${id}-aspect-\\[mobile-large-image\\] {
        aspect-ratio: var(--${id}-mobile-large-image-aspect-ratio);
      }
      .sm\\:${id}-aspect-\\[mobile-small-image\\] {
        aspect-ratio: var(--${id}-mobile-small-image-aspect-ratio);
      }
    }

    @media (width >= 80rem) {
      .xl\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
     .xl\\:${id}-aspect-\\[desktop-large-image\\] {
        aspect-ratio: var(--${id}-desktop-large-image-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-small-image\\] {
        aspect-ratio: var(--${id}-desktop-small-image-aspect-ratio);
      }
      
      .\\[\\&\\>div\\]\\:xl\\:px-4 > div {
        padding-left: calc(var(--spacing) * 4);
        padding-right: calc(var(--spacing) * 4);
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
    .${id}-grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
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

         .md\\:${id}-grid-cols-1-2-2 {
        display:grid;
        grid-template-columns: 1fr  1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
        align-items: stretch;
        height:100%;
      }    
   .md\\:${id}-grid-item-2 {
        grid-column: 1;
        grid-row:  1;
        height: 100%;
        margin: 0;
        padding: 0;
      }  
      .md\\:${id}-grid-item-3 {
        grid-column: 2;
        grid-row: 1;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .md\\:${id}-grid-item-4 {
        grid-column: 1;
        grid-row: 2;
        height:100%;
      }
       .md\\:${id}-grid-item-5 {
        grid-column: 2;
        grid-row: 2;
        height:100%;
      }
      .md\\:${id}-grid-item-1 > div,
      .md\\:${id}-grid-item-2 > div,
      .md\\:${id}-grid-item-3 > div,
      .md\\:${id}-grid-item-4 > div {
          width: 100%;
          height: 100%;
          position: relative;
      }
      .md\\:${id}-grid-item-1 > img,
      .md\\:${id}-grid-item-2 > img,
      .md\\:${id}-grid-item-3 > img,
      .md\\:${id}-grid-item-4 > img {
        object-fit : cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
      }  
    }

    @media (width >= 80rem) {
      .xl\\:${id}-grid-cols-1-2-2 {
       display: grid;
  grid-template-columns: 3.2fr 1.5fr 1.5fr;
  grid-template-rows: auto auto;  /* ← Changed from 1fr 1fr */
  column-gap: 1rem;
  row-gap: 1rem;
  align-items: stretch;
      }  
 .xl\\:${id}-grid-item-1 {
        grid-column: 1;
        grid-row: 1 / span 2;
      }
      .xl\\:${id}-grid-item-2 {
        grid-column: 2;
        grid-row:  1;
        margin: 0;
        padding: 0;
      }  
      .xl\\:${id}-grid-item-3 {
        grid-column: 2;
        grid-row: 2;
        margin: 0;
        padding: 0;
      }
     .xl\\:${id}-grid-item-4 {
        grid-column: 3;
        grid-row: 1;
         margin: 0;
         padding: 0;
      }
    .xl\\:${id}-grid-item-5 {
        grid-column: 3;
        grid-row: 2;
         margin: 0;
         padding: 0;
      }
      .xl\\:${id}-grid-item-1 > div
      {
          width: 100%;
          position: relative;
      }
      .xl\\:${id}-grid-item-1 > img,
      .xl\\:${id}-grid-item-2 > img,
      .xl\\:${id}-grid-item-3 > img,
      .xl\\:${id}-grid-item-4 > img,
      .xl\\:${id}-grid-item-5 > img {
        object-fit : cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
      }  

      .xl\\:py-4 {
        padding-top: calc(var(--spacing) * 4);
        padding-bottom: calc(var(--spacing) * 4);
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
    .${id}-fifth-column-background-color {
      background-color: var(--${id}-fifth-column-background-color);
    }
    .whitespace-pre {
      white-space: pre;
    }

  `}</style>
)

const WrapperComponent = ({ href, children, ...props }) =>
  href ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  )

const ResponsiveContainer = ({ containerBehavior, className = "", children }) => {
  // Standardized container behavior logic
  const containerClasses = (() => {
    switch (containerBehavior) {
      case "max-w-full":
        return "[&>div]:md:max-w-full [&>div]:w-full [&>div]:px-5 [&>div]:md:px-5 [&>div]:xl:px-4"
      case "max-w-inset":
        return "px-4 md:px-8 [&>div]:md:max-w-[1536px] [&>div]:md:px-8 [&>div]:w-full"
      case "max-w-centered":
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-8 [&>div]:md:px-8 [&>div]:xl:px-4"
      default:
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-8 [&>div]:md:px-8 [&>div]:xl:px-4" // Default to centered
    }
  })()

  return <div className={`${containerClasses} ${className}`}>{children}</div>
}
/*
  Derived from alignment constants for text alignment.
*/
const textAlignment = {
  "items-start": "text-left",
  "items-center": "text-center",
  "items-end": "text-right",
}

const OneTwoTwo = ({ id }) => {
  const alignmentMap = {
    "flex-col": {
      left: "items-start",
      center: "items-center",
      right: "items-end",
    },
    "flex-row": {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
  }

  const arrangement = (typeof headerContentArrangement === 'string' ? headerContentArrangement : 'flex-col') || 'flex-col';
  const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : String(sectionAlignment || 'left')) || 'left';
  const alignmentClass = alignmentMap[arrangement]?.[alignment] ?? alignmentMap['flex-col']['left'];

  const columns = [
    {
      backgroundColor: `${id}-first-column-background-color`,
      image: {
        slug: firstColumnBackgroundImage,
        altText: firstColumnBackgroundImageAltText,
        preset: firstColumnBackgroundImagePreset,
      },
      eyebrow: {
        content: firstColumnEyebrowContent,
        image: {
          slug: firstColumnEyebrowImage,
          altText: firstColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset,
        },
      },
      headline: {
        content: firstColumnHeadlineContent,
        image: {
          slug: firstColumnHeadlineImage,
          altText: firstColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset,
        },
      },
      subhead: {
        content: firstColumnSubheadContent,
        image: {
          slug: firstColumnSubheadImage,
          altText: firstColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset,
        },
      },
      cta: {
        content: firstColumnCtaContent,
        url: firstColumnCtaUrl,
        adobeTag: firstColumnCtaAdobeTag,
      },
      textBelow: {
        content: firstColumnTextBelow,
      },
    },
    {
      backgroundColor: `${id}-second-column-background-color`,
      image: {
        slug: secondColumnBackgroundImage,
        altText: secondColumnBackgroundImageAltText,
        preset: secondColumnBackgroundImagePreset,
      },
      eyebrow: {
        content: secondColumnEyebrowContent,
        image: {
          slug: secondColumnEyebrowImage,
          altText: secondColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset,
        },
      },
      headline: {
        content: secondColumnHeadlineContent,
        image: {
          slug: secondColumnHeadlineImage,
          altText: secondColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset,
        },
      },
      subhead: {
        content: secondColumnSubheadContent,
        image: {
          slug: secondColumnSubheadImage,
          altText: secondColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset,
        },
      },
      cta: {
        content: secondColumnCtaContent,
        url: secondColumnCtaUrl,
        adobeTag: secondColumnCtaAdobeTag,
      },
      textBelow: {
        content: secondColumnTextBelow,
      },
    },
    {
      backgroundColor: `${id}-third-column-background-color`,
      image: {
        slug: thirdColumnBackgroundImage,
        altText: thirdColumnBackgroundImageAltText,
        preset: thirdColumnBackgroundImagePreset,
      },
      eyebrow: {
        content: thirdColumnEyebrowContent,
        image: {
          slug: thirdColumnEyebrowImage,
          altText: thirdColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset,
        },
      },
      headline: {
        content: thirdColumnHeadlineContent,
        image: {
          slug: thirdColumnHeadlineImage,
          altText: thirdColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset,
        },
      },
      subhead: {
        content: thirdColumnSubheadContent,
        image: {
          slug: thirdColumnSubheadImage,
          altText: thirdColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset,
        },
      },
      cta: {
        content: thirdColumnCtaContent,
        url: thirdColumnCtaUrl,
        adobeTag: thirdColumnCtaAdobeTag,
      },
      textBelow: {
        content: thirdColumnTextBelow,
      },
    },
    {
      backgroundColor: `${id}-fourth-column-background-color`,
      image: {
        slug: fourthColumnBackgroundImage,
        altText: fourthColumnBackgroundImageAltText,
        preset: fourthColumnBackgroundImagePreset,
      },
      eyebrow: {
        content: fourthColumnEyebrowContent,
        image: {
          slug: fourthColumnEyebrowImage,
          altText: fourthColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset,
        },
      },
      headline: {
        content: fourthColumnHeadlineContent,
        image: {
          slug: fourthColumnHeadlineImage,
          altText: fourthColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset,
        },
      },
      subhead: {
        content: fourthColumnSubheadContent,
        image: {
          slug: fourthColumnSubheadImage,
          altText: fourthColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset,
        },
      },
      cta: {
        content: fourthColumnCtaContent,
        url: fourthColumnCtaUrl,
        adobeTag: fourthColumnCtaAdobeTag,
      },
      textBelow: {
        content: fourthColumnTextBelow,
      },
    },
      {
      backgroundColor: `${id}-fifth-column-background-color`,
      image: {
        slug: fifthColumnBackgroundImage,
        altText: fifthColumnBackgroundImageAltText,
        preset: fifthColumnBackgroundImagePreset,
      },
      eyebrow: {
        content: fifthColumnEyebrowContent,
        image: {
          slug: fifthColumnEyebrowImage,
          altText: fifthColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset,
        },
      },
      headline: {
        content: fifthColumnHeadlineContent,
        image: {
          slug: fifthColumnHeadlineImage,
          altText: fifthColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset,
        },
      },
      subhead: {
        content: fifthColumnSubheadContent,
        image: {
          slug: fifthColumnSubheadImage,
          altText: fifthColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset,
        },
      },
      cta: {
        content: fifthColumnCtaContent,
        url: fifthColumnCtaUrl,
        adobeTag: fifthColumnCtaAdobeTag,
      },
      textBelow: {
        content: fifthColumnTextBelow,
      },
    }
  ]

  const getDesktopAspectRatioClass = (index) => {
    // Large Image: 
    if (index === 0 ) {
      return `sm:${id}-aspect-[mobile-large-image] md:${id}-aspect-[tablet-large-image] xl:${id}-aspect-[desktop-large-image]`
    }
    // Small images: 
    return `sm:${id}-aspect-[mobile-small-image] xl:${id}-aspect-[tablet-small-image] xl:${id}-aspect-[desktop-small-image]`
  }

  return (
    <>
      <OneTwoTwoStyleVars id={id} />
      <OneTwoTwoStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(sectionBackgroundImage, "m", sectionBackgroundImagePreset),
            tablet: buildImageUrl(sectionBackgroundImage, "t", sectionBackgroundImagePreset),
            desktop: buildImageUrl(sectionBackgroundImage, "d", sectionBackgroundImagePreset),
            largeDesktop: buildImageUrl(sectionBackgroundImage, "l", sectionBackgroundImagePreset),
          }}
          alt={sectionBackgroundAlt}
        imageClassName="-z-1 object-cover object-center"
          className={`relative justify-center ${id}-aspect-[mobile-container] 
          md:${id}-aspect-[tablet-container] xl:${id}-aspect-[desktop-container] 
          ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color 
          px-4 py-4 md:py-8 xl:py-4`}
          data-bildit-var-name="sectionBackgroundImage"
          data-bildit-var-type="String"
        >
          {(sectionTitle || sectionSubhead || sectionCtaContent) && (
            <div
              className={`flex ${arrangement} relative w-full font-bold mb-4 ${alignmentClass} items-center ${containerBehavior} ${topMargin} mb-4`}
            >
              {sectionTitle && (
                <span className={`flex flex-inline whitespace-pre ${id}-belk-text-clamp-section-title`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">
                  {sectionTitle}
                </span>
              )}
              {sectionSubhead && (
                <span
                  className={`flex flex-inline whitespace-pre ${id}-belk-text-clamp-subhead`}
                  data-bildit-var-name="sectionSubhead"
                  data-bildit-var-type="RichText"
                >
                  {sectionSubhead}
                </span>
              )}
              {sectionCtaContent && (
                <Button
                  className={`ml-auto ${id}-belk-text-clamp-cta`}
                  variant={sectionCtaVariant}
                  data-bildit-var-name="sectionCtaContent"
                  data-bildit-var-type="RichText"
                >
                  {sectionCtaContent}
                </Button>
              )}
            </div>
          )}
          <div
            className={`relative w-full grid grid-cols-2 ${id}-${mobileGridLayout} md:${id}-${tabletGridLayout} xl:${id}-grid-cols-1-2-2 ${id}-${gridGap} overflow-hidden ${id}-container-text-color ${id}-container-font-family`}
          >
            {columns.map(({ backgroundColor, image, eyebrow, headline, subhead, cta, textBelow }, index) => (
              <WrapperComponent
                key={index}
                className={`w-full cursor-pointer ${index === 0 ? "col-span-2 xl:col-span-1" : ""} 
                xl:${id}-grid-item-${index + 1}`}
                href={cta.url}
                data-aali={cta.adobeTag}
              >
                <PictureResponsiveImage
                  images={{
                    mobile: buildImageUrl(image.slug, "m", image.preset),
                    tablet: buildImageUrl(image.slug, "t", image.preset),
                    desktop: buildImageUrl(image.slug, "d", image.preset),
                    largeDesktop: buildImageUrl(image.slug, "l", image.preset),
                  }}
                  alt={image.altText}
                  imageClassName="absolute z-10 object-cover object-center"
                  className={`flex w-full relative 
                     ${getDesktopAspectRatioClass(index)} 
                    ${index === 0 ? `sm:${id}-aspect-[mobile-large-image] md:${id}-aspect-[tablet-large-image] xl:${id}-aspect-[desktop-large-image]` : `sm:${id}-aspect-[mobile-small-image] md:${id}-aspect-[tablet-small-image] xl:${id}-aspect-[desktop-small-image]`}
                     rounded-lg md:rounded-2xl ${backgroundColor}`}
                  data-bildit-var-name={['firstColumnBackgroundImage', 'secondColumnBackgroundImage', 'thirdColumnBackgroundImage', 'fourthColumnBackgroundImage', 'fifthColumnBackgroundImage'][index]}
                  data-bildit-var-type="String"
                >
                  <div
                    className={`w-full flex flex-col z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}
                  >
                    {eyebrow.image.slug ? (
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(eyebrow.image.slug, "m", eyebrow.image.preset),
                          tablet: buildImageUrl(eyebrow.image.slug, "t", eyebrow.image.preset),
                          desktop: buildImageUrl(eyebrow.image.slug, "d", eyebrow.image.preset),
                          largeDesktop: buildImageUrl(eyebrow.image.slug, "l", eyebrow.image.preset),
                        }}
                        alt={eyebrow.image.altText}
                        className={`my-2 ${id}-aspect-[eyebrow] w-full ${id}-max-w-[eyebrow] ${id}-h-[eyebrow]`}
                        imageClassName="-z-1 object-cover object-center"
                        data-bildit-var-name={['firstColumnEyebrowImage', 'secondColumnEyebrowImage', 'thirdColumnEyebrowImage', 'fourthColumnEyebrowImage', 'fifthColumnEyebrowImage'][index]}
                        data-bildit-var-type="String"
                      />
                    ) : (
                      <p className={`whitespace-pre ${id}-belk-text-clamp-eyebrow font-bold `} data-bildit-var-name={['firstColumnEyebrowContent', 'secondColumnEyebrowContent', 'thirdColumnEyebrowContent', 'fourthColumnEyebrowContent', 'fifthColumnEyebrowContent'][index]} data-bildit-var-type="RichText">
                        {eyebrow.content}
                      </p>
                    )}

                    {headline.image.slug ? (
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(headline.image.slug, "m", headline.image.preset),
                          tablet: buildImageUrl(headline.image.slug, "t", headline.image.preset),
                          desktop: buildImageUrl(headline.image.slug, "d", headline.image.preset),
                          largeDesktop: buildImageUrl(headline.image.slug, "l", headline.image.preset),
                        }}
                        alt={headline.image.altText}
                        className={`my-2 md:my-4 ${id}-aspect-[headline] w-full ${id}-max-w-[headline] ${id}-h-[headline]`}
                        imageClassName="-z-1 object-contain object-center"
                        data-bildit-var-name={['firstColumnHeadlineImage', 'secondColumnHeadlineImage', 'thirdColumnHeadlineImage', 'fourthColumnHeadlineImage', 'fifthColumnHeadlineImage'][index]}
                        data-bildit-var-type="String"
                      />
                    ) : (
                      <h2
                        className={`my-1 font-bold whitespace-pre ${id}-belk-text-clamp-headline `}
                        data-bildit-var-name={['firstColumnHeadlineContent', 'secondColumnHeadlineContent', 'thirdColumnHeadlineContent', 'fourthColumnHeadlineContent', 'fifthColumnHeadlineContent'][index]}
                        data-bildit-var-type="RichText"
                      >
                        {headline.content}
                      </h2>
                    )}

                    {subhead.image.slug ? (
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(subhead.image.slug, "m", subhead.image.preset),
                          tablet: buildImageUrl(subhead.image.slug, "t", subhead.image.preset),
                          desktop: buildImageUrl(subhead.image.slug, "d", subhead.image.preset),
                          largeDesktop: buildImageUrl(subhead.image.slug, "l", subhead.image.preset),
                        }}
                        alt={subhead.image.altText}
                        className={`my-1 md:my-2 ${id}-aspect-[subhead] w-full h-full ${id}-max-w-[subhead] ${id}-max-h-[subhead]`}
                        imageClassName="-z-1 object-contain object-center"
                        data-bildit-var-name={['firstColumnSubheadImage', 'secondColumnSubheadImage', 'thirdColumnSubheadImage', 'fourthColumnSubheadImage', 'fifthColumnSubheadImage'][index]}
                        data-bildit-var-type="String"
                      />
                    ) : (
                      <h3 className={`my-1 whitespace-pre ${id}-belk-text-clamp-subhead `} data-bildit-var-name={['firstColumnSubheadContent', 'secondColumnSubheadContent', 'thirdColumnSubheadContent', 'fourthColumnSubheadContent', 'fifthColumnSubheadContent'][index]} data-bildit-var-type="RichText">
                        {subhead.content}
                      </h3>
                    )}

                    {cta.content && (
                      <Button
                        className={`mt-2 mb-1 ${id}-belk-text-clamp-cta  cursor-pointer ${id}-bg-solid-button`}
                        variant={ctaVariant}
                        data-bildit-var-name={['firstColumnCtaContent', 'secondColumnCtaContent', 'thirdColumnCtaContent', 'fourthColumnCtaContent', 'fifthColumnCtaContent'][index]}
                        data-bildit-var-type="RichText"
                      >
                        {cta.content}
                      </Button>
                    )}
                  </div>
                </PictureResponsiveImage>
                {textBelow.content && (
                  <p
                    className={`whitespace-pre ${id}-belk-text-clamp-text-below font-bold  text-center my-2`}
                    data-bildit-var-name={['firstColumnTextBelow', 'secondColumnTextBelow', 'thirdColumnTextBelow', 'fourthColumnTextBelow', 'fifthColumnTextBelow'][index]}
                    data-bildit-var-type="RichText"
                  >
                    {textBelow.content}
                  </p>
                )}
              </WrapperComponent>
            ))}
          </div>
        </PictureResponsiveImage>
      </ResponsiveContainer>
    </>
  )
}

export default OneTwoTwo