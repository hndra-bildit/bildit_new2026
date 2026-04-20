"use client"
// @version v27
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="The Style Syllabus: Deals from 9.99";color="#264491");
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|justify-start,Center|justify-center,Right|justify-end]="justify-center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-4");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="1920");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="600");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="343");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="160");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="704");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="200");
// endgroup

// group: { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#FFFFFF");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group: { 4. Column Layout }
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="279";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="200";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="576";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="440";required=true);
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="1";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="1";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
// endgroup



// group: { 5. Typography }
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
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#FFFFFF");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wk25_072125_newcms_homepage_style_4c_2");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="");
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="30% off select beauty";color="#264491");
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="Select eye makeup, lipstick, & more";color="#264491");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="Shop Now";color="#264491");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnTextBelow = $(firstColumnTextBelow:RichText="");
// endgroup

// group: { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#FFFFFF");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wk25_072125_newcms_homepage_style_4c_3");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="Marc Jacobs";color="#264491");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="Perfect Absolute";color="#264491");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop Fragrances";color="#264491");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:RichText="");
// endgroup

// group: { 10. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color="#FFFFFF");
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="wk25_072125_newcms_homepage_style_4c_4");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnEyebrowImage = $(thirdColumnEyebrowImage:String="");
const thirdColumnEyebrowImageAltText = $(thirdColumnEyebrowImageAltText:String="");
const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText="");
const thirdColumnHeadlineImage = $(thirdColumnHeadlineImage:String="");
const thirdColumnHeadlineImageAltText = $(thirdColumnHeadlineImageAltText:String="");
const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText="Shop the trend";color="#264491");
const thirdColumnSubheadImage = $(thirdColumnSubheadImage:String="");
const thirdColumnSubheadImageAltText = $(thirdColumnSubheadImageAltText:String="");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText="Curated picks for you";color="#264491");
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText="Shop Now";color="#264491");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
const thirdColumnTextBelow = $(thirdColumnTextBelow:RichText="");
// endgroup

const columns = [
  {
    backgroundColor: 'first-column-background-color',
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
    backgroundColor: 'second-column-background-color',
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
    backgroundColor: 'third-column-background-color',
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
]

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

  const hasAnyImage = (mobile || tablet || desktop || largeDesktop) && !hasError;
  const imageSrc = mobile || tablet || desktop || largeDesktop;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasAnyImage && imageSrc && (
      <picture>
        {mobile && <source alt={alt} media="(max-width: 767px)" srcSet={mobile} />}
        {tablet && <source alt={alt} media="(min-width: 768px) and (max-width: 1439px)" srcSet={tablet} />}
        {desktop && <source alt={alt} media="(min-width: 1440px) and (max-width: 1919px)" srcSet={desktop} />}
        {largeDesktop && <source alt={alt} media="(min-width: 1920px)" srcSet={largeDesktop} />}
        <Image
          className={`${imageClassName}`}
          src={imageSrc}
          alt={alt ?? ""}
          fill
          onError={handleError}
        />
      </picture>
      )}
      {children}
    </div>
  );
}

const ThreeColumnWithContentBelowStyleVars = () => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --container-background-color: ${sectionBackgroundColor};
          --container-font-family: ${fontFamily};
          --section-title-font-size: clamp(${sectionTitleMinimumFontSize}px, 2vw, ${sectionTitleMaximumFontSize}px);
          --container-aspect-ratio: ${containerAspectRatioWidth} / ${containerAspectRatioHeight};
    --mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
    --tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
        }
        @layer eyebrow {
          --eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
          --eyebrow-font-size: clamp(${eyebrowMinimumFontSize}px, 1.5vw, ${eyebrowMaximumFontSize}px);
          --eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer headline {
          --headline-aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
          --headline-font-size: clamp(${headlineMinimumFontSize}px, 1.5vw, ${headlineMaximumFontSize}px);
          --headline-max-width: clamp(${headlineImageWidth}px, 50vw, ${headlineImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --headline-max-height: clamp(${headlineImageHeight}px, 50vw, ${headlineImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer subhead {
          --subhead-aspect-ratio: ${subheadImageWidth} / ${subheadImageHeight};
          --subhead-font-size: clamp(${subheadMinimumFontSize}px, 1.5vw, ${subheadMaximumFontSize}px);
          --subhead-max-width: clamp(${subheadImageWidth}px, 50vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --subhead-max-height: clamp(${subheadImageHeight}px, 50vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer cta {
          --cta-background-color: ${ctaBackgroundColor};
          --cta-font-size: clamp(${ctaMinimumFontSize}px, 2vw, ${ctaMaximumFontSize}px);
        }

        @layer text-below {
          --text-below-font-size: clamp(${textBelowMinimumFontSize}px, 1vw, ${textBelowMaximumFontSize}px);
        }

        @layer columns {
          --column-horizontal-padding: clamp(calc(var(--spacing) * 3), 3vw, calc(var(--spacing) * 8));
          --column-vertical-padding: clamp(calc(var(--spacing) * 3), 3vw, calc(var(--spacing) * 8));
              --column-aspect-ratio: ${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight};
    --mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight};
    --tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight};
          --first-column-background-color: ${firstColumnBackgroundColor};
          --second-column-background-color: ${secondColumnBackgroundColor};
          --third-column-background-color: ${thirdColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const ThreeColumnWithContentBelowStyles = () => (
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
    .aspect-\\[container\\] {
      aspect-ratio: var(--container-aspect-ratio);
    }
    .aspect-\\[mobile-container\\] {
      aspect-ratio: var(--mobile-container-aspect-ratio);
    }
    .aspect-\\[tablet-container\\] {
      aspect-ratio: var(--tablet-container-aspect-ratio);
    }
    .aspect-\\[column\\] {
      aspect-ratio: var(--column-aspect-ratio);
    }
    .aspect-\\[mobile-column\\] {
      aspect-ratio: var(--mobile-column-aspect-ratio);
    }
    .aspect-\\[tablet-column\\] {
      aspect-ratio: var(--tablet-column-aspect-ratio);
    }
    .aspect-\\[eyebrow\\] {
      aspect-ratio: var(--eyebrow-aspect-ratio);
    }
    .max-w-\\[eyebrow\\] {
      max-width: var(--eyebrow-max-width);
    }
    .max-h-\\[eyebrow\\] {
      max-height: var(--eyebrow-max-height);
    }
    .max-w-\\[headline\\] {
      max-width: var(--headline-max-width);
    }
    .max-h-\\[headline\\] {
      max-height: var(--headline-max-height);
    }
    .aspect-\\[headline\\] {
      aspect-ratio: var(--headline-aspect-ratio);
    }
    .max-w-\\[subhead\\] {
      max-width: var(--subhead-max-width);
    }
    .max-h-\\[subhead\\] {
      max-height: var(--subhead-max-height);
    }
    .aspect-\\[subhead\\] {
      aspect-ratio: var(--subhead-aspect-ratio);
    }
    .bg-solid-button {
      background-color: var(--cta-background-color);
    }
    .belk-text-clamp-eyebrow {
      font-size: var(--eyebrow-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    .belk-text-clamp-headline {
      font-size: var(--headline-font-size);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .belk-text-clamp-subhead {
      font-size: var(--subhead-font-size);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .belk-text-clamp-cta {
      font-size: var(--cta-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    .belk-text-clamp-text-below {
      font-size: var(--text-below-font-size);
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
              .md\\:aspect-\\[tablet-container\\] {
          aspect-ratio: var(--tablet-container-aspect-ratio);
        }
        .md\\:aspect-\\[tablet-column\\] {
          aspect-ratio: var(--tablet-column-aspect-ratio);
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
      .lg\\:aspect-\\[container\\] {
        aspect-ratio: var(--container-aspect-ratio);
      }
      .lg\\:aspect-\\[column\\] {
        aspect-ratio: var(--column-aspect-ratio);
      }
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
      .md\\:px-4 {
        padding-left: calc(var(--spacing) * 4);
        padding-right: calc(var(--spacing) * 4);
      }
      .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\\(--breakpoint-3xl\\)\\] > div {
        max-width: var(--breakpoint-3xl);
      }
      .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
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

    .first-column-background-color {
      background-color: var(--first-column-background-color);
    }
    .second-column-background-color {
      background-color: var(--second-column-background-color);
    }
    .third-column-background-color {
      background-color: var(--third-column-background-color);
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
    <div className={`overflow-hidden ${containerClasses} ${className}`}>
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
const selfAlignment = {
  'items-start': 'self-start',
  'items-center': 'self-center',
  'items-end': 'self-end',
};

const columnVarNames = [
  { imageAlt: 'firstColumnBackgroundImageAltText', eyebrowImageAlt: 'firstColumnEyebrowImageAltText', eyebrow: 'firstColumnEyebrowContent', headlineImageAlt: 'firstColumnHeadlineImageAltText', headline: 'firstColumnHeadlineContent', subheadImageAlt: 'firstColumnSubheadImageAltText', subhead: 'firstColumnSubheadContent', cta: 'firstColumnCtaContent', textBelow: 'firstColumnTextBelow' },
  { imageAlt: 'secondColumnBackgroundImageAltText', eyebrowImageAlt: 'secondColumnEyebrowImageAltText', eyebrow: 'secondColumnEyebrowContent', headlineImageAlt: 'secondColumnHeadlineImageAltText', headline: 'secondColumnHeadlineContent', subheadImageAlt: 'secondColumnSubheadImageAltText', subhead: 'secondColumnSubheadContent', cta: 'secondColumnCtaContent', textBelow: 'secondColumnTextBelow' },
  { imageAlt: 'thirdColumnBackgroundImageAltText', eyebrowImageAlt: 'thirdColumnEyebrowImageAltText', eyebrow: 'thirdColumnEyebrowContent', headlineImageAlt: 'thirdColumnHeadlineImageAltText', headline: 'thirdColumnHeadlineContent', subheadImageAlt: 'thirdColumnSubheadImageAltText', subhead: 'thirdColumnSubheadContent', cta: 'thirdColumnCtaContent', textBelow: 'thirdColumnTextBelow' },
];

const ThreeColumnWithContentBelow = () => (
  <>
    <ThreeColumnWithContentBelowStyleVars />
    <ThreeColumnWithContentBelowStyles />
    <ResponsiveContainer
      containerBehavior={containerBehavior}
      className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
    >
      <div className={`relative w-full min-w-0 max-w-full overflow-hidden py-4 md:py-8 ${roundedCornersTop} ${roundedCornersBottom} container-background-color`}>
        {sectionBackgroundImage && (
          <div className="absolute inset-0 -z-10 overflow-hidden" data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
            <PictureResponsiveImage
              images={{
                mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
                tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
                desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
                largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
              }}
              alt={sectionBackgroundAlt}
              imageClassName="object-cover object-center"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}
        {sectionTitle && (
          <div className={`flex flex-col lg:flex-row relative w-full font-bold mb-4 ${sectionAlignment} items-center ${containerBehavior} mb-4`}>
            <span className="flex flex-inline belk-text-clamp-section-title" data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>
          </div>
        )}
        <div className={`relative w-full grid grid-cols-1 lg:grid-cols-3 gap-4 container-font-family`}>
          {columns.map(({backgroundColor, image, eyebrow, headline, subhead, cta, textBelow}, index) => {
            const v = columnVarNames[index];
            return (
            <WrapperComponent key={index} className="w-full min-w-0 flex flex-col cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
              {image.slug && image.preset ? (
                <div data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage','thirdColumnBackgroundImage'][index]} data-bildit-var-type="String">
                <PictureResponsiveImage
                  images={{
                    mobile: buildImageUrl(image.slug, 'm', image.preset),
                    tablet: buildImageUrl(image.slug, 't', image.preset),
                    desktop: buildImageUrl(image.slug, 'd', image.preset),
                    largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                  }}
                  alt={image.altText}
                  imageClassName="z-10 object-contain object-center"
                  className={`flex w-full relative aspect-[mobile-column] md:aspect-[tablet-column] lg:aspect-[column] rounded-lg md:rounded-2xl ${backgroundColor}`}
                />
                </div>
              ) : (
                <div className={`flex w-full relative aspect-[mobile-column] md:aspect-[tablet-column] lg:aspect-[column] rounded-lg md:rounded-2xl ${backgroundColor} min-h-[120px]`} aria-hidden />
              )}
              <div className={`w-full flex flex-col z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} column-horizontal-padding column-vertical-padding`}>
                {eyebrow.image.slug ? (
                  <div data-bildit-var-name={['firstColumnEyebrowImage','secondColumnEyebrowImage','thirdColumnEyebrowImage'][index]} data-bildit-var-type="String">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset),
                      tablet: buildImageUrl(eyebrow.image.slug, 't', eyebrow.image.preset),
                      desktop: buildImageUrl(eyebrow.image.slug, 'd', eyebrow.image.preset),
                      largeDesktop: buildImageUrl(eyebrow.image.slug, 'l', eyebrow.image.preset),
                    }}
                    alt={eyebrow.image.altText}
                    className="my-1 md:my-2 aspect-[eyebrow] w-full max-w-[eyebrow] max-h-[eyebrow]"
                    imageClassName="-z-1 object-contain object-center"
                  />
                  </div>
                ) : (
                  <p className={`my-1 md:my-2 belk-text-clamp-eyebrow font-bold whitespace-pre-line`} data-bildit-var-name={v.eyebrow} data-bildit-var-type="RichText">{eyebrow.content || "\u00A0"}</p>
                )}
                {headline.image.slug ? (
                  <div data-bildit-var-name={['firstColumnHeadlineImage','secondColumnHeadlineImage','thirdColumnHeadlineImage'][index]} data-bildit-var-type="String">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(headline.image.slug, 'm', headline.image.preset),
                      tablet: buildImageUrl(headline.image.slug, 't', headline.image.preset),
                      desktop: buildImageUrl(headline.image.slug, 'd', headline.image.preset),
                      largeDesktop: buildImageUrl(headline.image.slug, 'l', headline.image.preset),
                    }}
                    alt={headline.image.altText}
                    className="my-1 md:my-2 lg:my-4 aspect-[headline] w-full max-w-[headline] max-h-[headline]"
                    imageClassName="-z-1 object-contain object-center"
                  />
                  </div>
                ) : (
                  <h2 className={`block my-1 md:my-2 lg:my-4 font-bold belk-text-clamp-headline whitespace-pre-line`} data-bildit-var-name={v.headline} data-bildit-var-type="RichText">{headline.content || "\u00A0"}</h2>
                )}

                {subhead.image.slug && (
                  <div data-bildit-var-name={['firstColumnSubheadImage','secondColumnSubheadImage','thirdColumnSubheadImage'][index]} data-bildit-var-type="String">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(subhead.image.slug, 'm', subhead.image.preset),
                      tablet: buildImageUrl(subhead.image.slug, 't', subhead.image.preset),
                      desktop: buildImageUrl(subhead.image.slug, 'd', subhead.image.preset),
                      largeDesktop: buildImageUrl(subhead.image.slug, 'l', subhead.image.preset),
                    }}
                    alt={subhead.image.altText}
                    className="my-1 md:my-2 aspect-[subhead] w-full max-w-[subhead] max-h-[subhead]"
                    imageClassName="-z-1 object-contain object-center"
                  />
                  </div>
                )}
                {(subhead.content || !subhead.image.slug) && (
                  <h3 className={`my-1 md:my-2 belk-text-clamp-subhead whitespace-pre-line`} data-bildit-var-name={v.subhead} data-bildit-var-type="RichText">{subhead.content || "\u00A0"}</h3>
                )}

                {cta.content && (
                  <Button className={`my-1 md:my-2 belk-text-clamp-cta whitespace-pre-line cursor-pointer ${textAlignment[columnHorizontalAlignment]} ${selfAlignment[columnHorizontalAlignment]}`} variant={ctaVariant}><span data-bildit-var-name={v.cta} data-bildit-var-type="RichText">{cta.content}</span></Button>
                )}

                {textBelow.content && (
                  <p className={`my-1 md:my-2 belk-text-clamp-text-below whitespace-pre-line`} data-bildit-var-name={v.textBelow} data-bildit-var-type="RichText">{textBelow.content}</p>
                )}
                
              </div>
            </WrapperComponent>
          );
          })}
        </div>
      </div>
    </ResponsiveContainer>
  </>
);

export default ThreeColumnWithContentBelow;