"use client"
import { useState, useEffect } from "react"
import Image from 'next/image';
import Link from 'next/link';

// group { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="");
// endgroup

// group { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true);
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
const lowerTextPresent = $(lowerTextPresent:Dropdown[None|none,Tablet Only|tablet-only,Mobile Only|mobile-only,Both Tablet and Mobile|both,All|all]="all");
// endgroup

// group { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#FFFFFF");
const sectionBackgroundImage = $(sectionBackgroundImage:String="wk27_080425_newcmshomepage_bts_slide_1");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group { 4. Column Layout }
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="622");
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="368");
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="622");
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="368");
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="622");
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="368");
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
const columnRoundedCorners = $(columnRoundedCorners:Dropdown[None|rounded-none,Small|rounded-sm,Medium|rounded-md,Large|rounded-lg,Extra Large|rounded-xl]="rounded-lg");
// endgroup

// group { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:String="12");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:String="16");
const headlineMinimumFontSize = $(headlineMinimumFontSize:String="24");
const headlineMaximumFontSize = $(headlineMaximumFontSize:String="54");
const subheadMinimumFontSize = $(subheadMinimumFontSize:String="16");
const subheadMaximumFontSize = $(subheadMaximumFontSize:String="28");
const ctaMinimumFontSize = $(ctaMinimumFontSize:String="16");
const ctaMaximumFontSize = $(ctaMaximumFontSize:String="20");
// endgroup

// group { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
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
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#f5f5f5");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wk31_090225_spec_test_productswoffer_4c_3");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="LOREM IPSUM DOLOR");
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="Lorem 29.99");
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="Lorem ipsum dolor sit");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="Shop Now");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#f5f5f5");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wk31_090225_spec_test_productswoffer_4c_4");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="LOREM IPSUM DOLOR");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="Lorem 29.99");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="Lorem ipsum dolor sit");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop Now");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
// endgroup

const MOBILE_TO_DESKTOP_RATIO = 3.159

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} suffix - The suffix for the image
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
  if (suffix === "d" || suffix === "l") {
    deviceSlug = slug;
  }

  const baseUrl = "https://belk.scene7.com/is"
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

// Generate dynamic border radius classes

const getBorderRadiusClasses = (topRadius, bottomRadius, columnRadius) => {
  const sectionClasses = `${topRadius} ${bottomRadius}`;
  // Generate responsive column classes for mobile, tablet, and desktop
  // You can customize different radius values for different breakpoints if needed
  const columnClasses = `${columnRadius} md:${columnRadius} lg:${columnRadius}`;
  return { sectionClasses, columnClasses };
};

const Button = ({ variant = "underline", className = "relative flex cursor-pointer", children, id }) => {
  if (variant === "solid") {
    return (
      <button
        className={`flex-col font-bold gap-1.5 belk-button ${className} ${id}-bg-solid-button py-2 rounded-md`}
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

const TwoTilePLPStyleVars = ({ id }) => (
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
        @layer eyebrow {
          --${id}-eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}px, 1.5vw, ${eyebrowMaximumFontSize}px);
          --${id}-eyebrow-max-width: clamp(${eyebrowImageWidth}px, 80vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-eyebrow-max-height: clamp(${eyebrowImageHeight}px, 20vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
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
           --${id}-subhead-max-width: clamp(${subheadImageWidth}px, 85vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
           --${id}-subhead-max-height: clamp(${subheadImageHeight}px, 22vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer cta {
           --${id}-cta-background-color: ${ctaBackgroundColor};
           --${id}-cta-font-size: clamp(${ctaMinimumFontSize}px, 2vw, ${ctaMaximumFontSize}px);
        }
       
        @layer columns {
           --${id}-column-horizontal-padding: clamp(calc(var(--spacing) * 2), 3vw, calc(var(--spacing) * 2));
           --${id}-column-vertical-padding: clamp(calc(var(--spacing) * 2), 3vw, calc(var(--spacing) * 2));
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

const TwoTilePLPStyles = ({ id }) => (
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


    .\\[\\&\\>div\\]\\:max-w-\\[100rem\\] > div {
      max-width: 100rem;
    }
    .\\[\\&\\>div\\]\\:w-full > div {
      width: 100%;
    }
    .\\[\\&\\>div\\]\\:px-5 > div {
      padding-left: calc(var(--spacing) * 5);
      padding-right: calc(var(--spacing) * 5);
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
   
      @media (width >= 48rem) and (width < 80rem) { 
      .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\\(--breakpoint-3xl\\)\\] > div {
        max-width: var(--breakpoint-3xl);
      }
      .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
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
    }
    @media (width >= 80rem) {
      .lg\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .lg\\:${id}-aspect-\\[column\\] {
        aspect-ratio: var(--${id}-column-aspect-ratio);
      }
      .xl\\:grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr));
      }
       .xl\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[column\\] {
        aspect-ratio: var(--${id}-column-aspect-ratio);
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
    .whitespace-pre-line {
      white-space: pre-line;
    }
  `}</style>
)


const SafeLink = ({ href, children, ...props }) =>
  href ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <div>{children}</div>
  )

const ResponsiveContainer = ({ containerBehavior, className = "", children }) => {
  const containerClasses = (() => {
    switch (containerBehavior) {
      case "max-w-full":
        return `[&>div]:md:max-w-full [&>div]:w-full`
      case "max-w-inset":
        return `px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full`
      case "max-w-centered":
        return ` [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5`
      default:
        return ` [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5` // Default to centered
    }
  })();

  return (
  <div className={`${containerClasses} ${className}`}>{children}</div>
  );
}

const textAlignment = {
  "items-start": "text-left",
  "items-center": "text-center",
  "items-end": "text-right",
}

const TwoTilePLP = ({ id }) => {
  const [screenSize, setScreenSize] = useState({ isMobile: false, isTablet: false })
  const [secondColumnDismissed, setSecondColumnDismissed] = useState(false)

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1280
      const isDesktop = width >= 1280
      setScreenSize({ isMobile, isTablet, isDesktop })
    }

    updateScreenSize()
    window.addEventListener("resize", updateScreenSize)
    return () => window.removeEventListener("resize", updateScreenSize)
  }, [])

   const { sectionClasses, columnClasses } = getBorderRadiusClasses(roundedCornersTop, roundedCornersBottom, columnRoundedCorners);
   
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
          preset: eyebrowImagePreset,
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
        },
      },
      cta: {
        content: firstColumnCtaContent,
        url: firstColumnCtaUrl,
        adobeTag: firstColumnCtaAdobeTag
      },
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
        },
      },
      headline: {
        content: secondColumnHeadlineContent,
        image: {
          slug: secondColumnHeadlineImage,
          altText: secondColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        },
      },
      subhead: {
        content: secondColumnSubheadContent,
        image: {
          slug: secondColumnSubheadImage,
          altText: secondColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        },
      },
      cta: {
        content: secondColumnCtaContent,
        url: secondColumnCtaUrl,
        adobeTag: secondColumnCtaAdobeTag
      },
    },
  ]

  const shouldShowTextBelow = () => {
   const { isMobile, isTablet } = screenSize
  switch (lowerTextPresent) {
    case "all":
      return true
    case "tablet-only":
      const tabletResult = isTablet
      return tabletResult
    case "mobile-only":
      const mobileResult = isMobile
      return mobileResult
    case "both":
      const bothResult = isMobile || isTablet
      return bothResult
    case "none":
    default:
      return false
  }
  }

  const columnBackgroundImageVars = ['firstColumnBackgroundImage', 'secondColumnBackgroundImage'];
  const columnEyebrowImageVars = ['firstColumnEyebrowImage', 'secondColumnEyebrowImage'];
  const columnHeadlineImageVars = ['firstColumnHeadlineImage', 'secondColumnHeadlineImage'];
  const columnSubheadImageVars = ['firstColumnSubheadImage', 'secondColumnSubheadImage'];
  const columnEyebrowContentVars = ['firstColumnEyebrowContent', 'secondColumnEyebrowContent'];
  const columnHeadlineContentVars = ['firstColumnHeadlineContent', 'secondColumnHeadlineContent'];
  const columnSubheadContentVars = ['firstColumnSubheadContent', 'secondColumnSubheadContent'];
  const columnCtaContentVars = ['firstColumnCtaContent', 'secondColumnCtaContent'];

  const renderTextContent = ({ eyebrow, headline, subhead, cta }, index) => (
    <>
      {eyebrow.image.slug && eyebrow?.image?.slug?.length > 0 ? (
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(eyebrow.image.slug, "m", eyebrow.image.preset),
            tablet: buildImageUrl(eyebrow.image.slug, "t", eyebrow.image.preset),
            desktop: buildImageUrl(eyebrow.image.slug, "d", eyebrow.image.preset),
            largeDesktop: buildImageUrl(eyebrow.image.slug, "l", eyebrow.image.preset),
          }}
          alt={eyebrow.image.altText}
          className={`my-2 ${id}-aspect-[eyebrow] w-full ${id}-max-w-[eyebrow] ${id}-h-[eyebrow]`}
          imageClassName="-z-1 object-contain object-center"
          data-bildit-var-name={columnEyebrowImageVars[index]}
          data-bildit-var-type="String"
        />
      ) : (
        eyebrow.content && (
          <p
            className={`my-1 md:my-1 ${id}-belk-text-clamp-eyebrow font-normal uppercase whitespace-pre-line`}
            data-bildit-var-name={columnEyebrowContentVars[index]}
            data-bildit-var-type="RichText"
          >
            {eyebrow.content}
          </p>
        )
      )}

      {headline.image.slug && headline?.image?.slug?.length > 0 ? (
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(headline.image.slug, "m", headline.image.preset),
            tablet: buildImageUrl(headline.image.slug, "t", headline.image.preset),
            desktop: buildImageUrl(headline.image.slug, "d", headline.image.preset),
            largeDesktop: buildImageUrl(headline.image.slug, "l", headline.image.preset),
          }}
          alt={headline.image.altText}
          className={`my-1 md:my-1 lg:my-1 ${id}-aspect-[headline] w-full ${id}-max-w-[headline] ${id}-h-[headline]`}
          imageClassName="-z-1 object-contain object-center"
          data-bildit-var-name={columnHeadlineImageVars[index]}
          data-bildit-var-type="String"
        />
      ) : (
        <h2
          className={`my-1 md:my-1 lg:my-1 font-bold ${id}-belk-text-clamp-headline whitespace-pre-line`}
          data-bildit-var-name={columnHeadlineContentVars[index]}
          data-bildit-var-type="RichText"
        >
          {headline.content}
        </h2>
      )}

      {subhead.image.slug && subhead?.image?.slug?.length > 0 ? (
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(subhead.image.slug, "m", subhead.image.preset),
            tablet: buildImageUrl(subhead.image.slug, "t", subhead.image.preset),
            desktop: buildImageUrl(subhead.image.slug, "d", subhead.image.preset),
            largeDesktop: buildImageUrl(subhead.image.slug, "l", subhead.image.preset),
          }}
          alt={subhead.image.altText}
          className={`my-1 md:my-1 ${id}-aspect-[subhead] w-full h-full ${id}-max-w-[subhead] ${id}-max-h-[subhead]`}
          imageClassName="-z-1 object-contain object-center"
          data-bildit-var-name={columnSubheadImageVars[index]}
          data-bildit-var-type="String"
        />
      ) : (
        <h3 className={`my-1 ${id}-belk-text-clamp-subhead`} data-bildit-var-name={columnSubheadContentVars[index]} data-bildit-var-type="RichText">{subhead.content}</h3>
      )}
      {cta.content && (
        <Button
          className={`my-1 text-left ${id}-belk-text-clamp-cta whitespace-pre-line cursor-pointer`}
          variant={ctaVariant}
          id={id}
          data-bildit-var-name={columnCtaContentVars[index]}
          data-bildit-var-type="RichText"
        >
          {cta.content}
        </Button>
      )}
    </>
  )
 
  return (
    <>
      <TwoTilePLPStyleVars id={id} />
      <TwoTilePLPStyles id={id} />
       <div>
        <div className="block md:hidden">
         <ResponsiveContainer
            className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
            containerBehavior={containerBehavior}
          >
            <div
              className={`w-full grid grid-cols-1 gap-6 overflow-hidden ${id}-container-text-color ${id}-container-font-family`}
            >
              {columns.map(({ backgroundColor, image, eyebrow, headline, subhead, cta }, index) => {
                if (index === 1 && secondColumnDismissed) return null
                return (
                <SafeLink key={index} className="w-full cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
                  <div className={`flex flex-col w-full rounded-lg overflow-hidden ${backgroundColor}`}>
                    <PictureResponsiveImage
                      images={{
                        mobile: buildImageUrl(image.slug, "m", image.preset),
                        tablet: buildImageUrl(image.slug, "t", image.preset),
                        desktop: buildImageUrl(image.slug, "", image.preset),
                        largeDesktop: buildImageUrl(image.slug, "", image.preset),
                      }}
                      alt={image.altText}
                      imageClassName="z-10 w-full"
                      className={` ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column]  ${columnClasses} `}
                      data-bildit-var-name={columnBackgroundImageVars[index]}
                      data-bildit-var-type="String"
                    ></PictureResponsiveImage>
                     {shouldShowTextBelow() && (
                      <div className="block">
                        <div
                          className={`w-full flex flex-col z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding overflow-hidden`}
                        >
                          {renderTextContent({ eyebrow, headline, subhead, cta }, index)}
                        </div>
                      </div>
                    )}
                  </div>
                </SafeLink>
                );
              })}
            </div>
          </ResponsiveContainer>
        </div>

        <div className="hidden md:block">
          <ResponsiveContainer
            className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
            containerBehavior={containerBehavior}
          >
            <div
              className={`w-full grid gap-4 overflow-hidden ${id}-container-text-color ${id}-container-font-family ${secondColumnDismissed ? 'grid-cols-1' : 'grid-cols-2 sm:grid-cols-2 xl:grid-cols-2'}`}
            >
              {columns.map(({ backgroundColor, image, eyebrow, headline, subhead, cta }, index) => {
                if (index === 1 && secondColumnDismissed) return null
                const cardContent = (
                  <div className={`flex flex-row w-full rounded-lg overflow-hidden ${backgroundColor} min-h-0 relative`}>
                    {shouldShowTextBelow() && (
                      <div
                        className={`flex flex-col flex-1 min-w-0 z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}
                      >
                        {renderTextContent({ eyebrow, headline, subhead, cta }, index)}
                      </div>
                    )}
                    <div className={`flex-shrink-0 w-[45%] min-h-0 relative aspect-[4/3] ${columnClasses}`}>
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(image.slug, "m", image.preset),
                          tablet: buildImageUrl(image.slug, "t", image.preset),
                          desktop: buildImageUrl(image.slug, "m", image.preset),
                          largeDesktop: buildImageUrl(image.slug, "m", image.preset),
                        }}
                        alt={image.altText}
                        imageClassName="z-10 object-cover object-right"
                        className="absolute inset-0 w-full h-full"
                        data-bildit-var-name={columnBackgroundImageVars[index]}
                        data-bildit-var-type="String"
                      />
                    </div>
                    {index === 1 && (
                      <button
                        type="button"
                        aria-label="Dismiss"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSecondColumnDismissed(true); }}
                        className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-[#ec4899] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 2l10 10M12 2L2 12" /></svg>
                      </button>
                    )}
                  </div>
                )
                return (
                  <SafeLink key={index} className={`w-full cursor-pointer block relative ${index === 1 ? 'relative' : ''}`} href={cta.url} data-aali={cta.adobeTag}>
                    {cardContent}
                  </SafeLink>
                )
              })}
            </div>
          </ResponsiveContainer>
        </div>
      </div>
 
  </>
);
};

export default TwoTilePLP