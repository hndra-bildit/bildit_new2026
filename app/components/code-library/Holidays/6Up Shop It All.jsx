"use client"
// @version v27
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText='';color="#000000");
const sectionCtaContent = $(sectionCtaContent:RichText='';color="#000000");
const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const sectionCtaBackgroundColor = $(sectionCtaBackgroundColor:Color="#FFFFFF");
const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="left");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true);
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const desktopContainerAspectRatioWidth = $(desktopContainerAspectRatioWidth:String="16");
const desktopContainerAspectRatioHeight = $(desktopContainerAspectRatioHeight:String="9");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="16");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="9");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="16");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="9");
// endgroup

// group: { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#FFFFFF");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group: { 4. Column Layout }
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="1";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="1";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="4";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="3";required=true);
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="4";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="3";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
// endgroup

// group: { 4.1. Responsive Grid Configuration }
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,6 Columns|grid-cols-6]="grid-cols-2");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,6 Columns|grid-cols-6]="grid-cols-3");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,6 Columns|grid-cols-6]="grid-cols-6");
const gridGap = $(gridGap:Dropdown[Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-4");
// endgroup

// group: { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="2rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const textBelowMinimumFontSize = $(textBelowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const textBelowMaximumFontSize = $(textBelowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
// endgroup

// group: { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
// endgroup

// group: { 8. Column 1 }
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#FFFFFF");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wkxx_2025_test_6upshopitall_6c_1");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText='';color="#000000");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnTextBelow = $(firstColumnTextBelow:RichText='Fan Gear';color="#000000");
// endgroup

// group: { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#FFFFFF");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wkxx_2025_test_6upshopitall_6c_2");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText='';color="#000000");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:RichText='Denim';color="#000000");
// endgroup

// group: { 10. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color="#FFFFFF");
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="wkxx_2025_test_6upshopitall_6c_3");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText='';color="#000000");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
const thirdColumnTextBelow = $(thirdColumnTextBelow:RichText='Boots';color="#000000");
// endgroup

// group: { 11. Column 4 }
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color="#FFFFFF");
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="wkxx_2025_test_6upshopitall_6c_4");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText='';color="#000000");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
const fourthColumnTextBelow = $(fourthColumnTextBelow:RichText='Dresses';color="#000000");
// endgroup

// group: { 12. Column 5 }
const fifthColumnBackgroundColor = $(fifthColumnBackgroundColor:Color="#FFFFFF");
const fifthColumnBackgroundImage = $(fifthColumnBackgroundImage:String="wkxx_2025_test_6upshopitall_6c_5");
const fifthColumnBackgroundImageAltText = $(fifthColumnBackgroundImageAltText:String="");
const fifthColumnBackgroundImagePreset = $(fifthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fifthColumnCtaContent = $(fifthColumnCtaContent:RichText='';color="#000000");
const fifthColumnCtaUrl = $(fifthColumnCtaUrl:String="/";required=true);
const fifthColumnCtaAdobeTag = $(fifthColumnCtaAdobeTag:String="";required=true);
const fifthColumnTextBelow = $(fifthColumnTextBelow:RichText='Women';color="#000000");
// endgroup

// group: { 13. Column 6 }
const sixthColumnBackgroundColor = $(sixthColumnBackgroundColor:Color="#FFFFFF");
const sixthColumnBackgroundImage = $(sixthColumnBackgroundImage:String="wkxx_2025_test_6upshopitall_6c_6");
const sixthColumnBackgroundImageAltText = $(sixthColumnBackgroundImageAltText:String="");
const sixthColumnBackgroundImagePreset = $(sixthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sixthColumnCtaContent = $(sixthColumnCtaContent:RichText='';color="#000000");
const sixthColumnCtaUrl = $(sixthColumnCtaUrl:String="/";required=true);
const sixthColumnCtaAdobeTag = $(sixthColumnCtaAdobeTag:String="";required=true);
const sixthColumnTextBelow = $(sixthColumnTextBelow:RichText='Handbags';color="#000000");
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

const Button = ({
  variant = "underline",
  className = "relative flex",
  children
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button cursor-pointer ${className} px-8 py-2 rounded-md`}>
        <span className="relative inline-block">
          {children}
        </span>
      </button>
    )
  }
  return (
    <button className={`flex-col font-bold gap-1.5 cursor-pointer belk-button ${className}`}>
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

  const fallbackSrc = mobile || tablet || desktop || largeDesktop;
  const hasAnyImage = mobile || tablet || desktop || largeDesktop;
  const showImage = hasAnyImage && isValidImageUrl(fallbackSrc);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showImage && (
        <div className="absolute inset-0 w-full h-full">
          <picture className="relative block w-full h-full">
            {isValidImageUrl(mobile) && <source alt={alt} media="(max-width: 767px)" srcSet={mobile} />}
            {isValidImageUrl(tablet) && <source alt={alt} media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
            {isValidImageUrl(desktop) && <source alt={alt} media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
            {isValidImageUrl(largeDesktop) && <source alt={alt} media="(min-width: 1920px)" srcSet={largeDesktop} />}
            <Image
              className={`${imageClassName}`}
              src={fallbackSrc}
              alt={alt ?? ''}
              fill
              onError={handleError}
            />
          </picture>
        </div>
      )}
      {children}
    </div>
  );
}

const SixUpShopItAllStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}, 2.5dvw, ${sectionTitleMaximumFontSize});
          --${id}-section-cta-background-color: ${sectionCtaBackgroundColor};
          --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 1.8dvw, ${ctaMaximumFontSize});
        }

         @layer text-below {
          --${id}-text-below-font-size: clamp(${textBelowMinimumFontSize}, 1.8dvw, ${textBelowMaximumFontSize});
        }

        @layer columns {
          --${id}-column-horizontal-padding: clamp(var(--spacing) * 1, 1.5vw, calc(var(--spacing) * 4));
          --${id}-column-vertical-padding: clamp(var(--spacing) * 1, 1.5vw, calc(var(--spacing) * 4));
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
          --${id}-fifth-column-background-color: ${fifthColumnBackgroundColor};
          --${id}-sixth-column-background-color: ${sixthColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const SixUpShopItAllStyles = ({ id }) => (
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
   
    .${id}-bg-solid-button {
      background-color: var(--${id}-cta-background-color);
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
    @media (width >= 80rem) {
      .xl\\:grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr));
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
    .${id}-grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
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

      /* Added gap-26 class for 26px gap when no background/padding */
    .${id}-gap-26 {
      gap: 26px;
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
      .md\\:${id}-grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr));
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
      .xl\\:${id}-grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr));
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
    .${id}-sixth-column-background-color {
      background-color: var(--${id}-sixth-column-background-color);
    }
  
    .${id}-first-column-cta-color {
      color: var(--${id}-first-column-cta-color);
    }
    .${id}-second-column-cta-color {
      color: var(--${id}-second-column-cta-color);
    }
    .${id}-third-column-cta-color {
      color: var(--${id}-third-column-cta-color);
    }
    .${id}-fourth-column-cta-color {
      color: var(--${id}-fourth-column-cta-color);
    }
    .${id}-fifth-column-cta-color {
      color: var(--${id}-fifth-column-cta-color);
    }
    .${id}-sixth-column-cta-color {
      color: var(--${id}-sixth-column-cta-color);
    }
    .${id}-first-column-text-below-color {
      color: var(--${id}-first-column-text-below-color);
    }
    .${id}-second-column-text-below-color {
      color: var(--${id}-second-column-text-below-color);
    }
    .${id}-third-column-text-below-color {
      color: var(--${id}-third-column-text-below-color);
    }
    .${id}-fourth-column-text-below-color {
      color: var(--${id}-fourth-column-text-below-color);
    }
    .${id}-fifth-column-text-below-color {
      color: var(--${id}-fifth-column-text-below-color);
    }
    .${id}-sixth-column-text-below-color {
      color: var(--${id}-sixth-column-text-below-color);
    }
    .whitespace-pre {
      white-space: pre;
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

const SixUpShopItAll = ({ id }) => {
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

  const arrangement = 'flex-col';
  const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : 'left') || 'left';
  const alignmentClass = alignmentMap[arrangement]?.[alignment] ?? alignmentMap['flex-col']['left'];

  const hasNoBackgroundOrPadding = !sectionBackgroundColor && containerBehavior === "max-w-full";
  const effectiveGridGap = hasNoBackgroundOrPadding ? "gap-26" : gridGap;

  const columns = [
    {
      backgroundColor: `${id}-first-column-background-color`,
      image: {
        slug: firstColumnBackgroundImage,
        altText: firstColumnBackgroundImageAltText,
        preset: firstColumnBackgroundImagePreset
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
      cta: {
        content: thirdColumnCtaContent,
        url: thirdColumnCtaUrl,
        adobeTag: thirdColumnCtaAdobeTag
      },
       textBelow: {
        content: thirdColumnTextBelow
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
        content: fourthColumnCtaContent,
        url: fourthColumnCtaUrl,
        adobeTag: fourthColumnCtaAdobeTag
      },
       textBelow: {
        content: fourthColumnTextBelow
      }
    },
    {
      backgroundColor: `${id}-fifth-column-background-color`,
      image: {
        slug: fifthColumnBackgroundImage,
        altText: fifthColumnBackgroundImageAltText,
        preset: fifthColumnBackgroundImagePreset
      },
      cta: {
        content: fifthColumnCtaContent,
        url: fifthColumnCtaUrl,
        adobeTag: fifthColumnCtaAdobeTag
      },
       textBelow: {
        content: fifthColumnTextBelow
      }
    },
    {
      backgroundColor: `${id}-sixth-column-background-color`,
      image: {
        slug: sixthColumnBackgroundImage,
        altText: sixthColumnBackgroundImageAltText,
        preset: sixthColumnBackgroundImagePreset
      },
      cta: {
        content: sixthColumnCtaContent,
        url: sixthColumnCtaUrl,
        adobeTag: sixthColumnCtaAdobeTag
      },
       textBelow: {
        content: sixthColumnTextBelow
      }
    }
  ];

  return (
    <>
      <SixUpShopItAllStyleVars id={id} />
      <SixUpShopItAllStyles id={id} />
      <div className={`w-full relative overflow-hidden ${topMargin} ${bottomMargin} ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color`}>
        {sectionBackgroundImage && isValidImageUrl(buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset)) && (
          <div className="absolute inset-0 z-0" data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
            <PictureResponsiveImage
              images={{
                mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
                tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
                desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
                largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
              }}
              alt={sectionBackgroundAlt}
              imageClassName="object-cover object-center w-full h-full"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}
        <ResponsiveContainer
          containerBehavior={containerBehavior}
          className={`relative z-10 w-full justify-center mx-auto py-4 md:py-8 px-4 md:px-6 lg:px-8`}
        >
          {(sectionTitle || sectionCtaContent) && (
            <div className={`flex relative w-full font-bold mb-4 justify-between ${alignmentClass} ${topMargin} mb-4`}>
              {sectionTitle && (
                <span className={`flex flex-inline whitespace-pre ${id}-belk-text-clamp-section-title`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>
              )}
              {sectionCtaContent && (
                <WrapperComponent href={sectionCtaUrl} data-aali={sectionCtaAdobeTag} className="flex items-center justify-end mt-4 cursor-pointer">
                  <Button className={`ml-auto ${id}-belk-text-clamp-cta ${sectionCtaVariant === 'solid' ? `${id}-section-cta-background-color` : ''}`} variant={sectionCtaVariant}><span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span></Button>
                </WrapperComponent>
              )}
            </div>
          )}
          <div className={`relative w-full grid ${id}-${mobileGridLayout} md:${id}-${tabletGridLayout} xl:${id}-${desktopGridLayout} ${id}-${effectiveGridGap} overflow-hidden ${id}-container-font-family mx-auto max-w-[100rem]`}>
            {columns.map(({ backgroundColor, image, cta, textBelow }, index) => (
              <WrapperComponent key={index} className="w-full cursor-pointer flex flex-col" href={cta.url} data-aali={cta.adobeTag}>
                {image.slug && isValidImageUrl(buildImageUrl(image.slug, 'm', image.preset)) ? (
                  <div data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage','thirdColumnBackgroundImage','fourthColumnBackgroundImage','fifthColumnBackgroundImage','sixthColumnBackgroundImage'][index]} data-bildit-var-type="String">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(image.slug, 'm', image.preset),
                      tablet: buildImageUrl(image.slug, 't', image.preset),
                      desktop: buildImageUrl(image.slug, 'd', image.preset),
                      largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                    }}
                    alt={image.altText}
                    imageClassName="z-10 object-cover object-center"
                    className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[desktop-column] ${backgroundColor}`}
                  />
                  </div>
                ) : (
                  <div className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[desktop-column] ${backgroundColor} bg-gray-200`} />
                )}
                {textBelow.content && (
                  <p className={`${id}-belk-text-clamp-text-below font-bold text-center my-2 ${id}-column-horizontal-padding`} data-bildit-var-name={['firstColumnTextBelow','secondColumnTextBelow','thirdColumnTextBelow','fourthColumnTextBelow','fifthColumnTextBelow','sixthColumnTextBelow'][index]} data-bildit-var-type="RichText">{textBelow.content}</p>
                )}
              </WrapperComponent>
            ))}
          </div>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SixUpShopItAll;