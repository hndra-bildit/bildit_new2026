"use client"
// @version v26
import React, { useState } from 'react';
import Link from 'next/link';


// group: { 1. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-none");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-none");
const sectionBackgroundAspectRatioWidth = $(sectionBackgroundAspectRatioWidth:String="16");
const sectionBackgroundAspectRatioHeight = $(sectionBackgroundAspectRatioHeight:String="9");
const tabletSectionBackgroundAspectRatioWidth = $(tabletSectionBackgroundAspectRatioWidth:String="16");
const tabletSectionBackgroundAspectRatioHeight = $(tabletSectionBackgroundAspectRatioHeight:String="9");
const mobileSectionBackgroundAspectRatioWidth = $(mobileSectionBackgroundAspectRatioWidth:String="");
const mobileSectionBackgroundAspectRatioHeight = $(mobileSectionBackgroundAspectRatioHeight:String="");
// endgroup

// group: { 2. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#FFFFFF");
const sectionBackgroundImage = $(sectionBackgroundImage:String="wkxx_2025_test_saleheroimagebkgrd_p1");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="Section background");
// endgroup

// group: { 2.1 Overlay Image }
const overlayImage = $(overlayImage:String="");
const overlayImagePreset = $(overlayImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const overlayImageAlt = $(overlayImageAlt:String="Overlay image");
const overlayAspectRatioWidth = $(overlayAspectRatioWidth:String="16");
const overlayAspectRatioHeight = $(overlayAspectRatioHeight:String="9");
const tabletOverlayAspectRatioWidth = $(tabletOverlayAspectRatioWidth:String="");
const tabletOverlayAspectRatioHeight = $(tabletOverlayAspectRatioHeight:String="");
const mobileOverlayAspectRatioWidth = $(mobileOverlayAspectRatioWidth:String="");
const mobileOverlayAspectRatioHeight = $(mobileOverlayAspectRatioHeight:String="");

// endgroup

// group: { 3. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
// endgroup

// group: { 4. CTA Styling }
const ctaButtonCount = $(ctaButtonCount:Dropdown[4 Buttons|4,6 Buttons|6,8 Buttons|8]="8");
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const ctaButtonBackgroundColor = $(ctaButtonBackgroundColor:Color="#FFFFFF");
const ctaVerticalPosition = $(ctaVerticalPosition:Dropdown[Top|top,Middle|middle,Bottom|bottom]="middle");
// endgroup

// group: { 5. CTA 1 }
const firstCtaContent = $(firstCtaContent:RichText="Shop Now";color="#000000");
const firstCtaUrl = $(firstCtaUrl:String="/";required=true);
const firstCtaAdobeTag = $(firstCtaAdobeTag:String="cta-1";required=true);
// endgroup

// group: { 6. CTA 2 }
const secondCtaContent = $(secondCtaContent:RichText="Shop Now";color="#000000");
const secondCtaUrl = $(secondCtaUrl:String="/";required=true);
const secondCtaAdobeTag = $(secondCtaAdobeTag:String="cta-2";required=true);
// endgroup

// group: { 7. CTA 3 }
const thirdCtaContent = $(thirdCtaContent:RichText="Shop Now";color="#000000");
const thirdCtaUrl = $(thirdCtaUrl:String="/";required=true);
const thirdCtaAdobeTag = $(thirdCtaAdobeTag:String="cta-3";required=true);
// endgroup

// group: { 8. CTA 4 }
const fourthCtaContent = $(fourthCtaContent:RichText="Shop Now";color="#000000");
const fourthCtaUrl = $(fourthCtaUrl:String="/";required=true);
const fourthCtaAdobeTag = $(fourthCtaAdobeTag:String="cta-4";required=true);
// endgroup

// group: { 9. CTA 5 }
const fifthCtaContent = $(fifthCtaContent:RichText="Shop Now";color="#000000");
const fifthCtaUrl = $(fifthCtaUrl:String="/";required=true);
const fifthCtaAdobeTag = $(fifthCtaAdobeTag:String="cta-5";required=true);
// endgroup

// group: { 10. CTA 6 }
const sixthCtaContent = $(sixthCtaContent:RichText="Shop Now";color="#000000");
const sixthCtaUrl = $(sixthCtaUrl:String="/";required=true);
const sixthCtaAdobeTag = $(sixthCtaAdobeTag:String="cta-6";required=true);
// endgroup

// group: { 11. CTA 7 }
const seventhCtaContent = $(seventhCtaContent:RichText="Shop Now";color="#000000");
const seventhCtaUrl = $(seventhCtaUrl:String="/";required=true);
const seventhCtaAdobeTag = $(seventhCtaAdobeTag:String="cta-7";required=true);
// endgroup

// group: { 12. CTA 8 }
const eighthCtaContent = $(eighthCtaContent:RichText="Shop Now";color="#000000");
const eigthCtaUrl = $(eigthCtaUrl:String="/";required=true);
const eigthCtaAdobeTag = $(eigthCtaAdobeTag:String="cta-8";required=true);
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

const Button = ({ variant = "underline", className = "relative flex cursor-pointer", children }) => {
  if (variant === "solid") {
    return (
      <button
        className={`flex-col font-bold gap-1.5 belk-button ${className} p-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-md flex-shrink-0 text-center`}
      >
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
}

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
  const { mobile, tablet, desktop, largeDesktop } = images || {};
  const fallbackSrc = mobile || tablet || desktop || largeDesktop;
  const shouldRenderImage = fallbackSrc && isValidImageUrl(fallbackSrc);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {shouldRenderImage && (
        <div className="absolute inset-0 z-0" aria-hidden>
          <picture className="relative block w-full h-full">
            {isValidImageUrl(mobile) && <source media="(max-width: 767px)" srcSet={mobile} />}
            {isValidImageUrl(tablet) && <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
            {isValidImageUrl(desktop) && <source media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
            {isValidImageUrl(largeDesktop) && <source media="(min-width: 1920px)" srcSet={largeDesktop} />}
            <img
              src={fallbackSrc}
              alt={alt ?? ''}
              className={`block w-full h-full ${imageClassName}`}
              onError={handleError}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      )}
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}


const SaleHeroStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
        }

         @layer overlay {
          --${id}-overlay-aspect-ratio: ${overlayAspectRatioWidth} / ${overlayAspectRatioHeight};
          --${id}-mobile-overlay-aspect-ratio: ${mobileOverlayAspectRatioWidth || overlayAspectRatioWidth} / ${mobileOverlayAspectRatioHeight || overlayAspectRatioHeight};
          --${id}-tablet-overlay-aspect-ratio: ${tabletOverlayAspectRatioWidth || overlayAspectRatioWidth} / ${tabletOverlayAspectRatioHeight || overlayAspectRatioHeight};
        }

        @layer section-bg {
          --${id}-section-bg-aspect-ratio: ${sectionBackgroundAspectRatioWidth} / ${sectionBackgroundAspectRatioHeight};
          --${id}-mobile-section-bg-aspect-ratio: ${mobileSectionBackgroundAspectRatioWidth || sectionBackgroundAspectRatioWidth} / ${mobileSectionBackgroundAspectRatioHeight || sectionBackgroundAspectRatioHeight};
          --${id}-tablet-section-bg-aspect-ratio: ${tabletSectionBackgroundAspectRatioWidth || sectionBackgroundAspectRatioWidth} / ${tabletSectionBackgroundAspectRatioHeight || sectionBackgroundAspectRatioHeight};
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaButtonBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 2vw, ${ctaMaximumFontSize});
        }
      
      }
    }
  `}</style>
)


const SaleHeroStyles = ({ id }) => (
  <style>{`
    /* Outer container: clips overflow so nothing extends past the slot */
    .${id}-sale-hero-outer {
      width: 100% !important;
      max-width: 100% !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
    }

    .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    .h-0\\.5 {
      height: 0.125rem;
    }
    .-z-1 {
      z-index: -1;
    }
    .border-px {
      border-width: 1px;
    }
    .px-2 {
      padding-left: calc(var(--spacing) * 2);
      padding-right: calc(var(--spacing) * 2);
    }

     .mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\]  {
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
    .${id}-container-font-family {
      font-family: var(--${id}-container-font-family);
    }
   
    .${id}-bg-solid-button {
      background-color: var(--${id}-cta-background-color);
    }
    .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-cta-font-size);
      letter-spacing: 0.02em;
    }

    /* Section outer: strict containment so image cannot overflow slot */
    .${id}-section-outer {
      overflow: hidden !important;
      max-width: 100% !important;
    }
    /* Section background image: keep inside slot, no right overflow */
    .${id}-section-bg-wrap {
      width: 100% !important;
      max-width: 100% !important;
      left: 0 !important;
      right: 0 !important;
      overflow: hidden !important;
      box-sizing: border-box !important;
    }
    .${id}-section-bg-wrap > div,
    .${id}-section-bg-wrap picture,
    .${id}-section-bg-wrap img {
      width: 100% !important;
      max-width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      object-position: center !important;
      box-sizing: border-box !important;
    }
    .${id}-section-bg-wrap picture {
      display: block !important;
    }

    /* CTA vertical position: top / middle (65%) / bottom (90%) */
    .${id}-cta-position-top {
      top: 0 !important;
      transform: translateY(0) !important;
    }
    .${id}-cta-position-middle {
      top: 65% !important;
      transform: translateY(-50%) !important;
    }
    .${id}-cta-position-bottom {
      top: 90% !important;
      transform: translateY(-100%) !important;
    }

    /* Added custom class for CTA grid container with proper breakpoint handling */
    .${id}-cta-grid-container {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 4 buttons layout:  */
    .${id}-cta-grid-container-4 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 6 buttons layout:  */
    .${id}-cta-grid-container-6 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 8 buttons layout */
    .${id}-cta-grid-container-8 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* Overlay image positioning with responsive padding-top */
    .${id}-overlay-container {
      padding-top: 1.25rem; /* 20px for mobile */
    }

    @media (width >=48rem){
      .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\$$--breakpoint-3xl\$$\\] > div {
        max-width: var(--breakpoint-3xl);
      }
      .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .\\[\\&\\>div\\]\\:md\\:mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\]  > div {
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
      .md\\:rounded-2xl {
        border-radius: var(--radius-2xl);s
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

      /* Tablet button dimensions: 97px width, 16px height, 8px padding */
      .${id}-cta-button-width {
        min-width: 113px;
        min-height: 32px;
        height:100%;
        width:100%;
        padding:8px;
      }

     /* 4 buttons: 1 row x 4 columns on tablet/desktop */
      .${id}-cta-grid-container-4 {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 6 buttons: 2 rows x 3 columns on tablet */
      .${id}-cta-grid-container-6 {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      /* 8 buttons: Keep existing 4 column grid */
      .${id}-cta-grid-container-8 {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

       .${id}-cta-container-pb {
      padding-bottom: calc(var(--spacing) * 20);
    }

    .${id}-overlay-container {
        padding-top: 2.275rem; /* 50px for tablet */
      }
      
      .${id}-overlay-image {
      width:98%;
      margin:auto;
    }

    }

    /* Added specific media query for 1024px-1280px range to ensure grid-cols-4 with 2 rows */
    @media (min-width: 1024px) and (max-width: 1280px) {
      /* 4 buttons: 1 row x 4 columns */
      .${id}-cta-grid-container-4 {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 6 buttons: 2 rows x 3 columns */
      .${id}-cta-grid-container-6 {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, auto);
      }

      /* 8 buttons: 2 rows x 4 columns */
      .${id}-cta-grid-container-8 {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-template-rows: repeat(2, auto);
      }

      .${id}-overlay-image {
      margin:auto;
      }
        .${id}-cta-button-width {
        min-width: 113px;
        min-height: 32px;
        height:100%;
        width:100%;
        padding:8px;
      }
    }

    @media (width > 64.06rem) and (width <=79rem) {
     .lg\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }

      .${id}-cta-button-width {
         min-width: 113px;
        min-height: 32px;
        height:100%;
        width:100%;
        padding:8px;
      }

      .${id}-cta-container-pb {
      padding-bottom: calc(var(--spacing) * 20);
    }
     .${id}-overlay-image {
      width:80%;
      margin:auto;
    }

    }

    @media (width >= 80rem) {
      .xl\\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 4 buttons: flex layout with 4 buttons in a row */
      .${id}-cta-grid-container-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 6 buttons: flex layout with wrapping */
      .${id}-cta-grid-container-6 {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
      }

      /* 8 buttons: flex layout (existing behavior) */
      .${id}-cta-grid-container-8 {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
      }

      /* Desktop button dimensions: 108px width, 20px height, 8px 16px padding */
      .${id}-cta-button-width {
        padding: 8px 16px;
        min-width: 130px;
        min-height: 48px;
        width:100%;
        height:100%;
      }

        .${id}-cta-container-pb {
      padding-bottom: calc(var(--spacing) * 18);
    }
     .${id}-overlay-container {
        padding-top: 1.5625rem; 
      }

       .${id}-overlay-image {
      width:80%;
      margin:auto;
    }
    }

     @media (width < 48rem) {
       .${id}-cta-button-width {
        min-width: 104px;
        min-height:32px;
        padding:8px;
        height:100%;
        width:100%;
        display:inline-flex;
      }
       .${id}-cta-container-pb {
      padding-bottom: calc(var(--spacing) * 20);
    }
     .${id}-overlay-image {
      width:80%;
      margin:auto;
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

    .${id}-aspect-\\[overlay\\] {
      aspect-ratio: var(--${id}-overlay-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-overlay\\] {
      aspect-ratio: var(--${id}-mobile-overlay-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-overlay\\] {
      aspect-ratio: var(--${id}-tablet-overlay-aspect-ratio);
    }

    @media (width >= 48rem) {
      .md\\:${id}-aspect-\\[tablet-overlay\\] {
        aspect-ratio: var(--${id}-tablet-overlay-aspect-ratio);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[overlay\\] {
        aspect-ratio: var(--${id}-overlay-aspect-ratio);
      }
    }

    /* Section background aspect ratio (mobile / tablet / desktop) */
    .${id}-aspect-\\[mobile-section-bg\\] {
      aspect-ratio: var(--${id}-mobile-section-bg-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-section-bg\\] {
      aspect-ratio: var(--${id}-tablet-section-bg-aspect-ratio);
    }
    .${id}-aspect-\\[section-bg\\] {
      aspect-ratio: var(--${id}-section-bg-aspect-ratio);
    }
    @media (width >= 48rem) {
      .md\\:${id}-aspect-\\[tablet-section-bg\\] {
        aspect-ratio: var(--${id}-tablet-section-bg-aspect-ratio);
      }
    }
    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[section-bg\\] {
        aspect-ratio: var(--${id}-section-bg-aspect-ratio);
      }
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
        return "[&>div]:md:max-w-full [&>div]:w-full"
      case "max-w-inset":
        return "px-4 md:px-8 [&>div]:mx-auto [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full"
      case "max-w-centered":
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem]"
      default:
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem]" // Default to centered
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

const SaleHero = ({ id }) => {
  const ctas = [
    {
      content: firstCtaContent,
      url: firstCtaUrl,
      adobeTag: firstCtaAdobeTag,
    },
    {
      content: secondCtaContent,
      url: secondCtaUrl,
      adobeTag: secondCtaAdobeTag,
    },
    {
      content: thirdCtaContent,
      url: thirdCtaUrl,
      adobeTag: thirdCtaAdobeTag,
    },
    {
      content: fourthCtaContent,
      url: fourthCtaUrl,
      adobeTag: fourthCtaAdobeTag,
    },
    {
      content: fifthCtaContent,
      url: fifthCtaUrl,
      adobeTag: fifthCtaAdobeTag,
    },
    {
      content: sixthCtaContent,
      url: sixthCtaUrl,
      adobeTag: sixthCtaAdobeTag,
    },
    {
      content: seventhCtaContent,
      url: seventhCtaUrl,
      adobeTag: seventhCtaAdobeTag,
    },
    {
      content: eighthCtaContent,
      url: eigthCtaUrl,
      adobeTag: eigthCtaAdobeTag,
    },
  ]

  const displayedCtas = ctas.filter((cta) => cta.content).slice(0, Number.parseInt(ctaButtonCount))
  const gridClassName = `${id}-cta-grid-container-${ctaButtonCount}`
  const ctaVarNames = ['firstCtaContent', 'secondCtaContent', 'thirdCtaContent', 'fourthCtaContent', 'fifthCtaContent', 'sixthCtaContent', 'seventhCtaContent', 'eighthCtaContent']

  const sectionBgImages = {
    mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
    tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
    desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
    largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
  };
  const hasValidSectionBg = isValidImageUrl(sectionBgImages.mobile) || isValidImageUrl(sectionBgImages.tablet) || isValidImageUrl(sectionBgImages.desktop) || isValidImageUrl(sectionBgImages.largeDesktop);
  const overlayImages = {
    mobile: buildImageUrl(overlayImage, 'm', overlayImagePreset),
    tablet: buildImageUrl(overlayImage, 't', overlayImagePreset),
    desktop: buildImageUrl(overlayImage, 'd', overlayImagePreset),
    largeDesktop: buildImageUrl(overlayImage, 'l', overlayImagePreset),
  };
  const hasValidOverlay = isValidImageUrl(overlayImages.mobile) || isValidImageUrl(overlayImages.tablet) || isValidImageUrl(overlayImages.desktop) || isValidImageUrl(overlayImages.largeDesktop);
  const contentWrapperClass = `relative justify-center ${roundedCornersTop} ${roundedCornersBottom} py-8`;
  const contentWrapperClassWithBgColor = `relative justify-center ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color py-8`;
  const sectionBgAspectClass = `${id}-aspect-[mobile-section-bg] md:${id}-aspect-[tablet-section-bg] xl:${id}-aspect-[section-bg]`;
  const rawPosition = typeof ctaVerticalPosition === 'string' ? String(ctaVerticalPosition).trim().toLowerCase() : '';
  const ctaPositionNorm = rawPosition === 'middle' || rawPosition === 'bottom' ? rawPosition : 'top';
  const ctaPositionStyle = (() => {
    const base = { position: 'absolute', left: 0, right: 0, width: '100%', zIndex: 10 };
    if (ctaPositionNorm === 'top') return { ...base, top: 0, transform: 'translateY(0)' };
    if (ctaPositionNorm === 'middle') return { ...base, top: '65%', transform: 'translateY(-50%)' };
    return { ...base, top: '90%', transform: 'translateY(-100%)' };
  })();

  const overlayBlock = (
    <div className="w-full flex-shrink-0" data-bildit-var-name="overlayImage" data-bildit-var-type="String">
      <PictureResponsiveImage
        images={overlayImages}
        alt={overlayImageAlt}
        imageClassName="object-contain object-top"
        className={`relative ${id}-aspect-[mobile-overlay] md:${id}-aspect-[tablet-overlay] xl:${id}-aspect-[overlay] ${id}-overlay-image`}
      />
    </div>
  );

  const innerContent = (
    <div className="flex flex-col items-center">
      {hasValidOverlay ? overlayBlock : null}
      <div className={`w-fit mx-auto ${gridClassName} justify-center gap-2 md:gap-3 lg:gap-2 px-4 mt-0 md:mt-3 md:px-8 lg:px-12 ${id}-container-font-family`}>
        {displayedCtas.map(
          (cta, index) =>
            cta.content && (
              <WrapperComponent
                key={index}
                href={cta.url}
                data-aali={cta.adobeTag}
                className="flex items-stretch flex-shrink-0"
                data-bildit-var-name={index === 0 ? 'firstCtaUrl' : index === 1 ? 'secondCtaUrl' : index === 2 ? 'thirdCtaUrl' : index === 3 ? 'fourthCtaUrl' : index === 4 ? 'fifthCtaUrl' : index === 5 ? 'sixthCtaUrl' : index === 6 ? 'seventhCtaUrl' : 'eigthCtaUrl'}
                data-bildit-var-type="String"
              >
                <span
                  data-bildit-var-name={index === 0 ? 'firstCtaAdobeTag' : index === 1 ? 'secondCtaAdobeTag' : index === 2 ? 'thirdCtaAdobeTag' : index === 3 ? 'fourthCtaAdobeTag' : index === 4 ? 'fifthCtaAdobeTag' : index === 5 ? 'sixthCtaAdobeTag' : index === 6 ? 'seventhCtaAdobeTag' : 'eigthCtaAdobeTag'}
                  data-bildit-var-type="String"
                  style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}
                  aria-hidden
                />
                <Button
                  className={`${id}-cta-button-width ${id}-belk-text-clamp-cta cursor-pointer ${ctaVariant === 'solid' ? `${id}-bg-solid-button` : ''}`}
                  variant={ctaVariant}
                >
                  <span data-bildit-var-name={ctaVarNames[index]} data-bildit-var-type="RichText">{cta.content}</span>
                </Button>
              </WrapperComponent>
            ),
        )}
      </div>
    </div>
  );

  return (
    <div className={`${id}-sale-hero-outer`} style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', boxSizing: 'border-box' }}>
      <SaleHeroStyleVars id={id} />
      <SaleHeroStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        {hasValidSectionBg ? (
          <div className={`relative w-full max-w-full min-w-0 overflow-hidden ${contentWrapperClass} ${sectionBgAspectClass} ${id}-section-outer`} data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String" style={{ boxSizing: 'border-box', maxWidth: '100%' }}>
            <div className={`w-full ${sectionBgAspectClass} shrink-0 pointer-events-none`} aria-hidden />
            <div className={`absolute inset-0 min-w-0 overflow-hidden ${id}-section-bg-wrap`} style={{ width: '100%', maxWidth: '100%', left: 0, right: 0 }}>
              <PictureResponsiveImage
                images={sectionBgImages}
                alt={sectionBackgroundAlt}
                imageClassName="object-cover object-center w-full h-full min-w-0 max-w-full"
                className="w-full h-full min-w-0 max-w-full overflow-hidden"
              />
            </div>
            <div className="flex flex-col items-center" style={ctaPositionStyle}>
              {innerContent}
            </div>
          </div>
        ) : (
          <div className={`relative w-full max-w-full min-w-0 overflow-hidden ${contentWrapperClassWithBgColor} ${sectionBgAspectClass} ${id}-section-outer`} data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String" style={{ boxSizing: 'border-box', maxWidth: '100%' }}>
            <div className={`w-full ${sectionBgAspectClass} shrink-0 pointer-events-none`} aria-hidden />
            <div className="flex flex-col items-center" style={ctaPositionStyle}>
              {innerContent}
            </div>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default SaleHero