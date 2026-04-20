"use client"
// @version v26
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// group { 1. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="left");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="16");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="6");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="16");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="9");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="9");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="16");
// endgroup

// group { 2. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color);
const sectionBackgroundImage = $(sectionBackgroundImage:String="wkxx_2025_cms_text_countdownclock_1920x720");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="Section background");
// endgroup

// group { 3.Video Settings }
const videoSlug = $(videoSlug:String="");
const videoTitle = $(videoTitle:String="");
const videoPosterSlug = $(videoPosterSlug:String="");
// endgroup

// group { 4.Overlay Settings }
const ctaUrl = $(ctaUrl:String="/";required=true);
const overlayImageSlug = $(overlayImageSlug:String="Hellow");
const ctaAdobeTag = $(ctaAdobeTag:String="hero_cta";required=true);
const overlayTextStackImage = $(overlayTextStackImage:String="");
const overlayBackgroundColor = $(overlayBackgroundColor:Color="#000000");
// endgroup


// group { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const ctaMinimumFontSize = $(ctaMinimumFontSize:String="12");
const ctaMaximumFontSize = $(ctaMaximumFontSize:String="18");
// endgroup

// group { 6. CTA Styling }
const ctaButtonCount = $(ctaButtonCount:Dropdown[4 Buttons|4,6 Buttons|6,8 Buttons|8]="6");
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const ctaButtonBackgroundColor = $(ctaButtonBackgroundColor:Color="#FFFFFF");
// endgroup

// group { 6.1. CTA 1 }
const firstCtaContent = $(firstCtaContent:RichText="Shop Women";color="#000000");
const firstCtaUrl = $(firstCtaUrl:String="/";required=true);
const firstCtaAdobeTag = $(firstCtaAdobeTag:String="hero_cta_1";required=true);
// endgroup

// group { 6.2. CTA 2 }
const secondCtaContent = $(secondCtaContent:RichText="Shop Men";color="#000000");
const secondCtaUrl = $(secondCtaUrl:String="/";required=true);
const secondCtaAdobeTag = $(secondCtaAdobeTag:String="hero_cta_2";required=true);
// endgroup

// group { 6.3. CTA 3 }
const thirdCtaContent = $(thirdCtaContent:RichText="Shop Kids";color="#000000");
const thirdCtaUrl = $(thirdCtaUrl:String="/";required=true);
const thirdCtaAdobeTag = $(thirdCtaAdobeTag:String="hero_cta_3";required=true);
// endgroup

// group { 6.4. CTA 4 }
const fourthCtaContent = $(fourthCtaContent:RichText="Shop Sale";color="#000000");
const fourthCtaUrl = $(fourthCtaUrl:String="/";required=true);
const fourthCtaAdobeTag = $(fourthCtaAdobeTag:String="hero_cta_4";required=true);
// endgroup

// group { 6.5. CTA 5 }
const fifthCtaContent = $(fifthCtaContent:RichText="Shop New";color="#000000");
const fifthCtaUrl = $(fifthCtaUrl:String="/";required=true);
const fifthCtaAdobeTag = $(fifthCtaAdobeTag:String="hero_cta_5";required=true);
// endgroup

// group { 6.6. CTA 6 }
const sixthCtaContent = $(sixthCtaContent:RichText="Shop Now";color="#000000");
const sixthCtaUrl = $(sixthCtaUrl:String="/";required=true);
const sixthCtaAdobeTag = $(sixthCtaAdobeTag:String="hero_cta_6";required=true);
// endgroup

// group { 6.7. CTA 7 }
const seventhCtaContent = $(seventhCtaContent:RichText="Shop Gifts");
const seventhCtaColor = $(seventhCtaColor:Color="#000000");
const seventhCtaUrl = $(seventhCtaUrl:String="/";required=true);
const seventhCtaAdobeTag = $(seventhCtaAdobeTag:String="hero_cta_7";required=true);
// endgroup

// group { 6.8. CTA 8 }
const eighthCtaContent = $(eighthCtaContent:RichText="Shop Decor";color="#000000");
const eighthCtaUrl = $(eighthCtaUrl:String="/";required=true);
const eighthCtaAdobeTag = $(eighthCtaAdobeTag:String="hero_cta_8";required=true);
// endgroup


const MOBILE_TO_DESKTOP_RATIO = 3.159;

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} preset - The Scene7 preset to apply
 * @returns {string|null} The constructed image URL or null if parameters are missing
 */
function buildImageUrl(slug, suffix = null, preset) {
  if (typeof slug !== 'string' || !slug || !preset) {
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

/**
 * Builds a Scene7 video URL with the specified slug and device suffix
 * @param {string} slug - The base video slug/filename
 * @param {string} suffix - Device suffix ('m' for mobile, 't' for tablet, null for desktop)
 * @returns {string|null} The constructed video URL or null if slug is missing
 */
function buildVideoUrl(slug, suffix = null) {
  if (!slug) {
    console.warn("Missing slug for video URL construction")
    return null
  }

  let deviceSlug = slug

  // Append suffix for mobile (_m) and tablet (_t), desktop uses base slug
  if (suffix === "m" || suffix === "t") {
    deviceSlug = `${slug}_${suffix}`
  }

  const baseUrl = "https://belk.scene7.com/is/content/Belk"
  return `${baseUrl}/${deviceSlug}`
}

/**
 * Returns the appropriate video URL based on the current viewport width
 * @param {string} baseSlug - The base video slug
 * @returns {string|null} The constructed video URL for the current viewport
 */
function getResponsiveVideoUrl(baseSlug) {
  if (!baseSlug) return null

  if (typeof window === "undefined") {
    // Server-side: return mobile version by default
    return buildVideoUrl(baseSlug)
  }

  const width = window.innerWidth

  if (width < 768) {
    // Mobile: use _m suffix
    return buildVideoUrl(baseSlug, "m")
  } else if (width >= 768 && width < 1280) {
    // Tablet: use _t suffix
    return buildVideoUrl(baseSlug, "t")
  } else {
    // Desktop: use base slug without suffix
    return buildVideoUrl(baseSlug, null)
  }
}

function buildVideoSlug(baseSlug, suffix) {
  if (!baseSlug) return "";
  // If desktop should be base slug (no _d), change to: 
  return suffix === "d" ? baseSlug : `${baseSlug}_${suffix}`
}
 
const ResponsiveS7VideoPlayer = ({
  baseSlug,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
}) => {
  const commonProps = {
    autoPlay,
    loop,
    muted: true,
    playsInline: true,
    poster: poster || undefined,
  };
 
  return (
<div className={`relative ${className}`}>
      {/* Mobile */}
<video
        {...commonProps}
        className={`w-full h-full object-cover s7vid s7vid--m`}
>
<source src={buildVideoUrl(buildVideoSlug(baseSlug, "m"))} type="video/mp4" />
</video>
 
      {/* Tablet */}
<video
        {...commonProps}
        className={`w-full h-full object-cover s7vid s7vid--t`}
>
<source src={buildVideoUrl(buildVideoSlug(baseSlug, "t"))} type="video/mp4" />
</video>
 
      {/* Desktop */}
<video
        {...commonProps}
        className={`w-full h-full object-cover s7vid s7vid--d`}
>
<source src={buildVideoUrl(buildVideoSlug(baseSlug,"d"))} type="video/mp4" />
</video>
 
      <style jsx>{`
        .s7vid {
          display: none;
        }
 
        /* Mobile: < 768 */
        @media (max-width: 767px) {
          .s7vid--m {
            display: block;
          }
        }
 
        /* Tablet: 768 - 1279 */
        @media (min-width: 768px) and (max-width: 1279px) {
          .s7vid--t {
            display: block;
          }
        }
 
        /* Desktop: >= 1280 */
        @media (min-width: 1280px) {
          .s7vid--d {
            display: block;
          }
        }
      `}</style>
</div>
  );
};


const Button = ({ variant = "underline", className = "relative flex cursor-pointer", children, ...props }) => {
  if (variant === "solid") {
    return (
      <button
        className={`flex-col font-bold gap-1.5 belk-button ${className} p-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-md flex-shrink-0 text-center`}
        {...props}
      >
        <span className="relative inline-block">{children}</span>
      </button>
    )
  }
  return (
    <button className={`flex-col font-bold gap-1.5 belk-button ${className}`} {...props}>
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
  const hasAnyImage = mobile || tablet || desktop || largeDesktop;
  const showPicture = hasAnyImage && isValidImageUrl(fallbackSrc);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showPicture && (
        <picture>
          {mobile && isValidImageUrl(mobile) && <source alt={alt ?? ''} media="(max-width: 767px)" srcSet={mobile} />}
          {tablet && isValidImageUrl(tablet) && <source alt={alt ?? ''} media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
          {desktop && isValidImageUrl(desktop) && <source alt={alt ?? ''} media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
          {largeDesktop && isValidImageUrl(largeDesktop) && <source alt={alt ?? ''} media="(min-width: 1920px)" srcSet={largeDesktop} />}
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

const VideoStyles = () => (
  <style>{`
    .max-w-7xl {
      max-width: 80rem;
    }
    .max-w-full {
      max-width: 100%;
    }

    .bg-opacity-30 {
      background-color: rgba(0, 0, 0, 0.3);
    }
    .bg-opacity-40 {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .bg-opacity-50 {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .bg-opacity-70 {
      background-color: rgba(0, 0, 0, 0.7);
    }
    .bg-opacity-20 {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .backdrop-blur-sm {
      backdrop-filter: blur(4px);
    }

    .z-10 {
      z-index: 10;
    }
    .z-20 {
      z-index: 20;
    }
    .-z-1 {
      z-index: -1;
    }
    .z-1 {
      z-index: 1;
    }

    .relative {
      position: relative;
    }
    .absolute {
      position: absolute;
    }
    .top-0 {
      top: 0;
    }
    .left-0 {
      left: 0;
    }
    .bottom-8 {
      bottom: 2rem;
    }
    .right-8 {
      right: 2rem;
    }

    .transition-opacity {
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .transition-all {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .duration-200 {
      transition-duration: 200ms;
    }
    .duration-300 {
      transition-duration: 300ms;
    }

    .hover\\:scale-110:hover {
      transform: scale(1.1);
    }

    .rounded-none {
      border-radius: 0;
    }
    .rounded-sm {
      border-radius: 0.125rem;
    }
    .rounded-md {
      border-radius: 0.375rem;
    }
    .rounded-lg {
      border-radius: 0.5rem;
    }
    .rounded-xl {
      border-radius: 0.75rem;
    }
    .rounded-full {
      border-radius: 9999px;
    }

    .w-10 {
      width: 2.5rem;
    }
    .h-10 {
      height: 2.5rem;
    }
    .w-full {
      width: 100%;
    }
    .h-full {
      height: 100%;
    }

    .flex {
      display: flex;
    }
    .flex-1 {
      flex: 1 1 0%;
    }
    .items-center {
      align-items: center;
    }
    .justify-center {
      justify-content: center;
    }

    .shadow-lg {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .object-cover {
      object-fit: cover;
    }
    .object-center {
      object-position: center;
    }

    .overflow-hidden {
      overflow: hidden;
    }
    
    .text-white {
      color: white;
    }
    
    .video-overlay {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    
    .video-overlay.hidden {
      opacity: 0;
      pointer-events: none;
    }
  `}</style>
)

const AnimationRefStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-container-aspect-ratio: ${containerAspectRatioWidth} / ${containerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaButtonBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}px, 2vw, ${ctaMaximumFontSize}px);
        }
        
        @layer columns {
        }

         @layer overlay {
          --${id}-overlay-background-color: ${overlayBackgroundColor};
        }
      }
    }
  `}</style>
)


const AnimationRefStyles = ({ id }) => (
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

    .mx-\\[max\$$36px\\,\\(100vw-1560px\$$\\/2\\)\\] {
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
    .${id}-bg-solid-button {
      background-color: var(--${id}-cta-background-color);
    }
    .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-cta-font-size);
      letter-spacing: 0.02em;
    }


    /* Added custom class for CTA grid container with proper breakpoint handling */
    .${id}-cta-grid-container {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 4 buttons layout:  */
    .${id}-cta-grid-container-4 {
      display: grid;
      grid-template-columns: repeat(4, auto);
      place-content: center;
      gap: 0.6rem;
    }

    /* 6 buttons layout:  */
    .${id}-cta-grid-container-6 {
      display: grid;
      grid-template-columns: repeat(2, auto);
      place-content: center;
      gap: 0.6rem;
    }

    /* 8 buttons layout */
    .${id}-cta-grid-container-8 {
      display: grid;
      grid-template-columns: repeat(2, auto);
      place-content: center;
      gap: 0.6rem;
    }

    .${id}-mobile-tablet-overlay {
       position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100vw - 2rem * 2);
       max-width: 100%;
      //max-width: calc((50vh * ${mobileContainerAspectRatioWidth}) / ${mobileContainerAspectRatioHeight});
      height: 45%;
      background-color: var(--${id}-overlay-background-color);
      z-index: 15;
      pointer-events: none;
      opacity:0.5;
    }

    @media (min-width: 640px) {
      .${id}-mobile-tablet-overlay {
        width: calc(100vw - 2rem * 2);
         height: 40%;
      }
    }

    @media (min-width: 768px) {
      .${id}-mobile-tablet-overlay {
         width: calc(100vw - 1.5rem * 2 - max(36px, (100vw - 1560px) / 2) * 2);
          height: 40%;
       // max-width: calc((50vh * ${tabletContainerAspectRatioWidth}) / ${tabletContainerAspectRatioHeight});
      }
    }

    @media (min-width: 1280px) {
      .${id}-mobile-tablet-overlay {
        display: none;
      }
    }

    .${id}-overlay-cta-wrapper {
      display: flex;
      flex-direction: column;
      gap: 32px;
      position: relative;
      z-index: 20;
      pointer-events: none;
    }


    @media (width >=48rem)  {
      .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\$$--breakpoint-3xl\$$\\] > div {
        max-width: var(--breakpoint-3xl);
      }
      .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .\\[\\&\\>div\\]\\:md\\:mx-\\[max\$$36px\\,\\(100vw-1560px\$$\\/2\\)\\] > div {
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

      /* Tablet button dimensions: 97px width, 16px height, 8px padding */
      .${id}-cta-button-width {
        min-width: 130px;
        min-height: 14px;
        height: 100%;
        width: 100%;
        padding: 0.75rem 1rem;
      }

     /* 4 buttons: 1 row x 4 columns on tablet/desktop */
      .${id}-cta-grid-container-4 {
        display: grid;
        grid-template-columns: repeat(4, auto);
         place-content: center; 
        justify-content: center; 
        gap: 0.8rem; 
      }

      /* 6 buttons: 2 rows x 3 columns on tablet */
      .${id}-cta-grid-container-6 {
        display: grid;
       grid-template-columns: repeat(3, auto);
         place-content: center; 
        justify-content: center; 
        gap: 0.8rem; 
      }

      /* 8 buttons: Keep existing 4 column grid */
      .${id}-cta-grid-container-8 {
        display: grid;
        grid-template-columns: repeat(4, auto);
        place-content: center; 
        justify-content: center; 
        gap: 0.8rem; 
      }

     

       .${id}-video-aspect-ratio {
  aspect-ratio: inherit !important;
}
.${id}-video-aspect-ratio > div,
.${id}-video-aspect-ratio video {
  aspect-ratio: inherit !important;
}

.${id}-overlay-cta-wrapper {
      display: flex;
      flex-direction: column;
      gap: 28px;
      position: absolute;
      top: 20px; 
      z-index: 20;
      pointer-events: none;
      margin:0 auto;
      width:100%;
      align-items:center;
      left: 50%;
      transform: translateX(-50%);
    }

     /* Position overlayTextStackImage */
    .${id}-overlay-text-stack-image {
      position: relative;
      z-index: 10;
      width: 70%;
      margin: 0 auto;
    }

    /* Position CTA buttons container */
    .${id}-cta-spacing {
      position: relative;
      width: 85%;
      height: auto;
      pointer-events: auto;
      margin: 0 auto;
    }

     /* Make image fill container properly */
    .${id}-overlay-text-stack-image img {
      position: relative !important; /* Override fill positioning */
      width: auto !important; /* Use natural dimensions */
      height: auto !important; /* Use natural dimensions */
    }


    }

    /* Added specific media query for 1024px-1280px range to ensure grid-cols-4 with 2 rows */
    @media (min-width: 1024px) and (max-width: 1279px) {
      /* 4 buttons: 1 row x 4 columns */
      .${id}-cta-grid-container-4 {
        display: grid;
        grid-template-columns: repeat(4, auto);
         place-content: center; 
        justify-content: center; 
        gap: 0.8rem; 
      }

      /* 6 buttons: 2 rows x 3 columns */
      .${id}-cta-grid-container-6 {
        display: grid;
        grid-template-columns: repeat(3, auto);
         place-content: center; 
        justify-content: center; 
        gap: 0.8rem; 
      }

      /* 8 buttons: 2 rows x 4 columns */
      .${id}-cta-grid-container-8 {
        display: grid;
        grid-template-columns: repeat(4, auto);
        place-content: center; 
        justify-content: center; 
        gap: 0.8rem; 
      }

           .${id}-video-aspect-ratio {
  aspect-ratio: inherit !important;
  // min-height:600px;
}
.${id}-video-aspect-ratio > div,
.${id}-video-aspect-ratio video {
  aspect-ratio: inherit !important;
}

 .${id}-cta-button-width {
        min-width: 160px;
        min-height: 14px;
        height: 100%;
        width: 100%;
        padding: 0.75rem 1rem;
      }

      .${id}-overlay-cta-wrapper {
      display: flex;
      flex-direction: column;
      gap: 28px;
      position: absolute;
      top: 20px; 
      z-index: 20;
      pointer-events: none;
      margin:0 auto;
      width:100%;
      align-items:center;
      left: 50%;
      transform: translateX(-50%);
    }

     /* Position overlayTextStackImage */
    .${id}-overlay-text-stack-image {
      position: relative;
      z-index: 10;
      width: 70%;
      margin: 0 auto;
    }

    /* Position CTA buttons container */
    .${id}-cta-spacing {
      position: relative;
      width: 85%;
      height: auto;
      pointer-events: auto;
      margin: 0 auto;
    }

     /* Make image fill container properly */
    .${id}-overlay-text-stack-image img {
      position: relative !important; /* Override fill positioning */
      width: auto !important; /* Use natural dimensions */
      height: auto !important; /* Use natural dimensions */
    }

    }

    @media (width > 64rem) and (width <= 79rem) {
     .lg\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }

        /* Position CTA buttons container */
    .${id}-cta-spacing {
      position: relative;
      height: auto;
      pointer-events: auto;
      width:40%;
    }

      .${id}-cta-button-width {
      min-width: 166px;
        min-height: 14px;
        height: 100%;
        width: 100%;
        padding: 0.75rem 1rem;
      }

      

         .${id}-video-aspect-ratio {
  aspect-ratio: inherit !important;
  // min-height:600px;
}
.${id}-video-aspect-ratio > div,
.${id}-video-aspect-ratio video {
  aspect-ratio: inherit !important;
}
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[column\\] {
        aspect-ratio: var(--${id}-column-aspect-ratio);
      }
      .xl\\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 4 buttons: flex layout with 4 buttons in a row */
      .${id}-cta-grid-container-4 {
        display: grid;
        grid-template-columns: repeat(4, auto);
        place-content: start;
        gap: 0.8rem;
      }

      /* 6 buttons: flex layout with wrapping */
      .${id}-cta-grid-container-6 {
         display: grid;
          grid-template-columns: repeat(3, auto);
      place-content: start;
      gap: 0.8rem;
      }

      /* 8 buttons: flex layout (existing behavior) */
      .${id}-cta-grid-container-8 {
         display: grid;
         grid-template-columns: repeat(4, auto);
      place-content: start;
      gap: 0.8rem;
      }

      /* Desktop button dimensions: 108px width, 20px height, 8px 16px padding */
      .${id}-cta-button-width {
          min-width: 144px;
        min-height: 14px;
        height: 100%;
        width: 100%;
        padding: 0.75rem 0.5rem;
      }


         .${id}-video-aspect-ratio {
  aspect-ratio: inherit !important;
  // min-height:600px;
}
.${id}-video-aspect-ratio > div,
.${id}-video-aspect-ratio video {
  aspect-ratio: inherit !important;
}

.${id}-overlay-cta-wrapper {
        display: flex;
        flex-direction: column;
        gap: 32px;
        position: absolute;
        top: 120px;
        z-index: 20;
        pointer-events: none;
        align-items:flex-start;
        margin-left:50px;
        left:auto;
        transform:none;
        max-width: calc(100% - 100px); /* Account for left and right spacing */
        width: auto;
    }

 /* Position overlayTextStackImage */
    .${id}-overlay-text-stack-image {
      position: relative;
      z-index: 10;
      max-width: 64%;
        width: auto;
        margin: 0;
      // margin-left:10px;
    }

    /* Position CTA buttons container */
    .${id}-cta-spacing {
      position: relative;
      height: auto;
      pointer-events: auto;
      width:100%;
      // width:45%;
    }

    }

     @media (width < 48rem) {
       .${id}-cta-button-width {
        min-width: 130px;
        min-height: 14px;
        height: 100%;
      width: 100%;
      padding: 0.75rem 0.5rem;
      }
      

         .${id}-video-aspect-ratio {
  aspect-ratio: inherit !important;
  // min-height:600px;
}
.${id}-video-aspect-ratio > div,
.${id}-video-aspect-ratio video {
  aspect-ratio: inherit !important;
}

.${id}-overlay-cta-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      top:25px; 
      z-index: 20;
      pointer-events: none;
      align-items:center;
      width:100%;
      left: 50%;
      transform: translateX(-50%);
    }

     /* Position overlayTextStackImage */
    .${id}-overlay-text-stack-image {
      position: relative;
      z-index: 10;
      width: 82%;
      max-width:82%;
      margin:0 auto;
    }

    /* Position CTA buttons container */
    .${id}-cta-spacing {
      position: relative;
      width: 80%;
      height: auto;
      pointer-events: auto;
    }

     /* Make image fill container properly */
    .${id}-overlay-text-stack-image img {
      position: relative !important; /* Override fill positioning */
      width: auto !important; /* Use natural dimensions */
      height: auto !important; /* Use natural dimensions */
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
        return "px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full"
      case "max-w-centered":
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)]"
      default:
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] " // Default to centered
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

const AnimationRefSingleHero = ({ id }) => {
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
      url: eighthCtaUrl,
      adobeTag: eighthCtaAdobeTag,
    },
  ]

  const displayedCtas = ctas.filter((cta) => cta.content).slice(0, Number.parseInt(ctaButtonCount))
  const gridClassName = `${id}-cta-grid-container-${ctaButtonCount}`

  const Overlay = () => {
    const safeCtaUrl = (ctaUrl && typeof ctaUrl === 'string' && ctaUrl.trim() !== '') ? ctaUrl.trim() : null;
    const safeCtaAdobeTag = (ctaAdobeTag && typeof ctaAdobeTag === 'string' && ctaAdobeTag.trim() !== '') ? ctaAdobeTag.trim() : null;
    const safeVideoTitle = (videoTitle && typeof videoTitle === 'string' && videoTitle.trim() !== '') ? videoTitle.trim() : '';
    const overlayFallback = buildImageUrl(overlayImageSlug, 'm', sectionBackgroundImagePreset);
    const showOverlayImage = overlayImageSlug && isValidImageUrl(overlayFallback);

    return (
      <>
        {showOverlayImage && (
        <WrapperComponent href={safeCtaUrl} data-aali={safeCtaAdobeTag} className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer">
          <div data-bildit-var-name="overlayImageSlug" data-bildit-var-type="String">
          <PictureResponsiveImage
            images={{
              mobile: buildImageUrl(overlayImageSlug, "m", sectionBackgroundImagePreset),
              tablet: buildImageUrl(overlayImageSlug, "t", sectionBackgroundImagePreset),
              desktop: buildImageUrl(overlayImageSlug, "d", sectionBackgroundImagePreset),
              largeDesktop: buildImageUrl(overlayImageSlug, "l", sectionBackgroundImagePreset),
            }}
            alt={safeVideoTitle}
            className='absolute top-0 left-0 w-full h-full object-cover'
            imageClassName='-z-1 object-cover object-center'
          />
          </div>
        </WrapperComponent>
        )}
      </>
    );
  };

  const S7VideoPlayer = ({ slug, poster, autoPlay = true, loop = true, className = "" }) => {
    const videoRef = useRef(null)
    const [currentVideoUrl, setCurrentVideoUrl] = useState(() => getResponsiveVideoUrl(slug))

    // Update video source on window resize
    useEffect(() => {
      if (!slug) return

      const handleResize = () => {
        const newUrl = getResponsiveVideoUrl(slug)
        if (newUrl !== currentVideoUrl) {
          setCurrentVideoUrl(newUrl)
        }
      }

      handleResize() // Set initial URL
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [slug, currentVideoUrl])

    // Autoplay video when loaded and when source changes
    useEffect(() => {
      if (autoPlay && videoRef.current && currentVideoUrl) {
        videoRef.current.play().catch((error) => {
          console.warn("Autoplay failed:", error)
        })
      }
    }, [autoPlay, currentVideoUrl])

    if (!currentVideoUrl) {
      return (
        <div className={`flex items-center justify-center bg-muted ${className}`}>
          <p className="text-muted-foreground">No video available</p>
        </div>
      )
    }

    return (
      <video key={currentVideoUrl} ref={videoRef} className={className} poster={poster} loop={loop} muted playsInline>
        <source src={currentVideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  const sectionContainerClasses = (() => {
    switch (containerBehavior) {
      case "max-w-full": return "[&>div]:md:max-w-full [&>div]:w-full"
      case "max-w-inset": return "px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full"
      case "max-w-centered": return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)]"
      default: return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)]"
    }
  })()

  return (
    <div className="animation-ref-single-hero-root">
      <VideoStyles />
      <AnimationRefStyleVars id={id} />
      <AnimationRefStyles id={id} />
      <div
        className={`${sectionContainerClasses} w-full relative overflow-hidden justify-center mx-auto ${topMargin} ${bottomMargin} ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color ${id}-aspect-[mobile-container] md:${id}-aspect-[tablet-container] xl:${id}-aspect-[container]`}
      >
        <div className="relative w-full h-full min-h-0">
          {sectionBackgroundImage && isValidImageUrl(buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset)) && (
            <div className="absolute inset-0 z-0" data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
              <PictureResponsiveImage
                images={{
                  mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
                  tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
                  desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
                  largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
                }}
                alt={sectionBackgroundAlt ?? ''}
                imageClassName="object-cover object-center w-full h-full"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}
          {/* Video fills the aspect-ratio container */}
          <div className={`absolute inset-0 ${roundedCornersTop} ${roundedCornersBottom} overflow-hidden`}>
            <ResponsiveS7VideoPlayer
              baseSlug={videoSlug}
              poster={buildImageUrl(videoPosterSlug, null, "$DWP_PHOTO$")}
              autoPlay={true}
              loop={true}
              className={`w-full h-full object-cover ${id}-video-aspect-ratio`}
            />
          </div>
          <div className={`${id}-mobile-tablet-overlay`} />
          <div className="flex flex-col pointer-events-none">
            <div className={`${id}-overlay-cta-wrapper`}>
              {overlayTextStackImage && isValidImageUrl(buildImageUrl(overlayTextStackImage, 'm', sectionBackgroundImagePreset)) && (
                <div className={`${id}-overlay-text-stack-image`} data-bildit-var-name="overlayTextStackImage" data-bildit-var-type="String">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(overlayTextStackImage, "m", sectionBackgroundImagePreset),
                      tablet: buildImageUrl(overlayTextStackImage, "t", sectionBackgroundImagePreset),
                      desktop: buildImageUrl(overlayTextStackImage, "d", sectionBackgroundImagePreset),
                      largeDesktop: buildImageUrl(overlayTextStackImage, "l", sectionBackgroundImagePreset),
                    }}
                    alt=""
                    className={`${id}-overlay-text-stack-image`}
                    imageClassName="object-contain object-center"
                  />
                </div>
              )}
              <div className={`${id}-cta-spacing pointer-events-auto`}>
                {/* CTA Buttons */}
                <div className={`${gridClassName} gap-4 md:gap-4 lg:gap-4 mx-auto md:mx-auto xl:mx-0`}>
                  {displayedCtas.map(
                    (cta, index) =>
                      cta.content && (
                        <WrapperComponent
                          key={index}
                          href={cta.url}
                          data-aali={cta.adobeTag}
                          className="flex items-stretch z-10"
                        >
                          <Button
                            className={`text-center items-center justify-center whitespace-nowrap py-3 md:py-3 ${id}-cta-button-width ${id}-belk-text-clamp-cta cursor-pointer ${ctaVariant === "solid" ? `${id}-bg-solid-button` : ""}`}
                            variant={ctaVariant}
                            data-bildit-var-name={['firstCtaContent','secondCtaContent','thirdCtaContent','fourthCtaContent','fifthCtaContent','sixthCtaContent','seventhCtaContent','eighthCtaContent'][index]}
                            data-bildit-var-type="RichText"
                          >
                            {cta.content}
                          </Button>
                        </WrapperComponent>
                      ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationRefSingleHero