"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText='Section Title';color="#000000");
const headerContentArrangement = $(headerContentArrangement:Dropdown[Stacked|flex-col,Side by Side|flex-row]="flex-row");
const sectionSubhead = $(sectionSubhead:RichText='';color="#000000");
const sectionCtaContent = $(sectionCtaContent:RichText='Shop Now';color="#000000");
const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const sectionCtaBackgroundColor = $(sectionCtaBackgroundColor:Color="#FFFFFF");
const sectionCtaAlignment = $(sectionCtaAlignment:Dropdown[Left|left,Middle|center,Right|right]="left");
const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="left");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-none");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-none");
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
const textStackedBelow = $(textStackedBelow:Dropdown[No|no,Yes|yes]="no");
const textStackedBelowBackgroundColor = $(textStackedBelowBackgroundColor:Color="#FFFFFF");
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="4";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="3";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="4";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="3";required=true);
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="4";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="3";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
// endgroup

// group: { 4.1. Responsive Grid Configuration }
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-2");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|md:grid-cols-1,2 Columns|md:grid-cols-2,3 Columns|md:grid-cols-3,4 Columns|md:grid-cols-4]="md:grid-cols-4");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|xl:grid-cols-1,2 Columns|xl:grid-cols-2,3 Columns|xl:grid-cols-3,4 Columns|xl:grid-cols-4]="xl:grid-cols-4");
const gridGap = $(gridGap:Dropdown[Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-4");
// endgroup

// group: { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = 
$(sectionTitleMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const sectionCtaMinimumFontSize = $(sectionCtaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const sectionCtaMaximumFontSize = $(sectionCtaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const headlineMinimumFontSize = $(headlineMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const headlineMaximumFontSize = $(headlineMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const subheadMinimumFontSize = $(subheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const textBelowMinimumFontSize = $(textBelowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const textBelowMaximumFontSize = $(textBelowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
// endgroup

// group: { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color);
// endgroup

// group: { 7. Image Sizing }
const eyebrowImageWidth = $(eyebrowImageWidth:String="100");
const eyebrowImageHeight = $(eyebrowImageHeight:String="100");
const eyebrowImagePreset = $(eyebrowImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const headlineImageWidth = $(headlineImageWidth:String="100");
const headlineImageHeight = $(headlineImageHeight:String="100");
const headlineImagePreset = $(headlineImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const subheadImageWidth = $(subheadImageWidth:String="100");
const subheadImageHeight = $(subheadImageHeight:String="100");
const subheadImagePreset = $(subheadImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup

// group: { 8. Column 1 }
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color);
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wkxx_2025_test_4up_4c_1");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="";color="#000000");
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="";color="#000000");
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="";color="#000000");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="";color="#000000");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnTextBelow = $(firstColumnTextBelow:RichText='';color="#000000");
// endgroup

// group: { 9. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color);
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wkxx_2025_test_4up_4c_2");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="";color="#000000");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="";color="#000000");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="";color="#000000");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="";color="#000000");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:RichText="";color="#000000");
// endgroup

// group: { 10. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color);
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="wkxx_2025_test_4up_4c_3");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnEyebrowImage = $(thirdColumnEyebrowImage:String="");
const thirdColumnEyebrowImageAltText = $(thirdColumnEyebrowImageAltText:String="");
const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText="";color="#000000");
const thirdColumnHeadlineImage = $(thirdColumnHeadlineImage:String="");
const thirdColumnHeadlineImageAltText = $(thirdColumnHeadlineImageAltText:String="");
const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText="";color="#000000");
const thirdColumnSubheadImage = $(thirdColumnSubheadImage:String="");
const thirdColumnSubheadImageAltText = $(thirdColumnSubheadImageAltText:String="");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText="";color="#000000");
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText="";color="#000000");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
const thirdColumnTextBelow = $(thirdColumnTextBelow:RichText='';color="#000000");
// endgroup

// group: { 11. Column 4 }
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color);
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="wkxx_2025_test_4up_4c_4");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnEyebrowImage = $(fourthColumnEyebrowImage:String="");
const fourthColumnEyebrowImageAltText = $(fourthColumnEyebrowImageAltText:String="");
const fourthColumnEyebrowContent = $(fourthColumnEyebrowContent:RichText="";color="#000000");
const fourthColumnHeadlineImage = $(fourthColumnHeadlineImage:String="");
const fourthColumnHeadlineImageAltText = $(fourthColumnHeadlineImageAltText:String="");
const fourthColumnHeadlineContent = $(fourthColumnHeadlineContent:RichText="";color="#000000");
  const fourthColumnSubheadImage = $(fourthColumnSubheadImage:String="");
const fourthColumnSubheadImageAltText = $(fourthColumnSubheadImageAltText:String="");
const fourthColumnSubheadContent = $(fourthColumnSubheadContent:RichText="";color="#000000");
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText="";color="#000000");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
const fourthColumnTextBelow = $(fourthColumnTextBelow:RichText='';color="#000000");
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
  className = "relative flex cursor-pointer",
  children
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button ${className} px-8 py-2 rounded-md`}>
        <span className="relative inline-block pt-2">
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

const TwoFourUpStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}, 3vw, ${sectionTitleMaximumFontSize});
          --${id}-section-cta-font-size: clamp(${sectionCtaMinimumFontSize}, 3vw, ${sectionCtaMaximumFontSize});
          --${id}-section-cta-background-color: ${sectionCtaBackgroundColor};
          --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
        }
        @layer eyebrow {
          --${id}-eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}, 1.5vw, ${eyebrowMaximumFontSize});
          --${id}-eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer headline {
          --${id}-headline-aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
          --${id}-headline-font-size: clamp(${headlineMinimumFontSize}, 2vw, ${headlineMaximumFontSize});
          --${id}-headline-max-width: clamp(${headlineImageWidth}px, 50vw, ${headlineImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-headline-max-height: clamp(${headlineImageHeight}px, 50vw, ${headlineImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer subhead {
          --${id}-subhead-aspect-ratio: ${subheadImageWidth} / ${subheadImageHeight};
          --${id}-subhead-font-size: clamp(${subheadMinimumFontSize}, 1.5vw, ${subheadMaximumFontSize});
          --${id}-subhead-max-width: clamp(${subheadImageWidth}px, 50vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-subhead-max-height: clamp(${subheadImageHeight}px, 50vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}px, 1.5vw, ${ctaMaximumFontSize}px);
        }

        @layer text-below {
          --${id}-text-below-font-size: clamp(${textBelowMinimumFontSize}, 1vw, ${textBelowMaximumFontSize});
        }

        @layer columns {
          --${id}-column-horizontal-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
          --${id}-column-vertical-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
          --${id}-desktop-column-aspect-ratio: ${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight};
          --${id}-tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight};
          --${id}-mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight};
          --${id}-grid-gap: ${gridGap};
          --${id}-text-stacked-below-background-color: ${textStackedBelowBackgroundColor};
          --${id}-first-column-background-color: ${firstColumnBackgroundColor};
          --${id}-second-column-background-color: ${secondColumnBackgroundColor};
          --${id}-third-column-background-color: ${thirdColumnBackgroundColor};
          --${id}-fourth-column-background-color: ${fourthColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const TwoFourUpStyles = ({ id }) => (
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
     .\\[\\&\\>div\\]\\:px-4 > div {
        padding-left: calc(var(--spacing) * 4);
        padding-right: calc(var(--spacing) * 4);
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
    .${id}-belk-text-clamp-section-cta {
      font-size: var(--${id}-section-cta-font-size);
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

       .\\[\\&\\>div\\]\\:md\\:px-6 > div {
        padding-left: calc(var(--spacing) * 6);
        padding-right: calc(var(--spacing) * 6);
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
      .xl\\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
      }

       .\\[\\&\\>div\\]\\:xl\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
    }

    /* Responsive Grid Layout Classes */
    .grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
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
      .md\\:grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .md\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .md\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .md\\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
    @media (width >= 80rem) {
      .xl\\:grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .xl\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .xl\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .xl\\:grid-cols-4 {
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
     .${id}-text-stacked-below-background-color {
      background-color: var(--${id}-text-stacked-below-background-color);
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
        return '[&>div]:md:max-w-full [&>div]:w-full [&>div]:p-4';
      case 'max-w-inset':
        return 'px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full';
      case 'max-w-centered':
        return 'px-4 md:px-6 lg:px-8 [&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-4 [&>div]:md:px-6 [&>div]:xl:px-8';
      default:
        return 'px-4 md:px-6 lg:px-8 [&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-4 [&>div]:md:px-6 [&>div]:xl:px-8'; // Default to centered
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

const TwoFourUp = ({ id }) => {

const getColumnCount = (gridClass) => {
    const match = gridClass.match(/grid-cols-(\d+)/);
    return match ? parseInt(match[1], 10) : 4;
  };

  const mobileColumns = getColumnCount(mobileGridLayout);
  const tabletColumns = getColumnCount(tabletGridLayout);
  const desktopColumns = getColumnCount(desktopGridLayout);

  // Use the desktop column count as the primary determiner
  const maxColumnsToShow = desktopColumns;
  
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

  const sectionRoundedTop = (roundedCornersTop === 'None' || !roundedCornersTop) ? 'rounded-t-none' : roundedCornersTop;
  const sectionRoundedBottom = (roundedCornersBottom === 'None' || !roundedCornersBottom) ? 'rounded-b-none' : roundedCornersBottom;

   const getCtaPlacement = () => {
    // If alignment is left, CTA is always inline (same line as title)
    if (sectionCtaAlignment === "left") {
      return "inline"
    }
    // If arrangement is side by side, CTA is inline
    if (arrangement === "flex-row") {
      return "inline"
    }
    // Otherwise (stacked with center/right), CTA is below
    return "below"
  }

  const getCtaAlignmentClass = () => {
    if (sectionCtaAlignment === "left") {
      return "" // Push to right side when on same line
    }
    if (sectionCtaAlignment === "center") {
      return "mx-auto"
    }
    return "ml-auto" // Right alignment (default)
  }

 const hasTextStackContent = (column) => {
    return !!(
      column.eyebrow.content ||
      column.eyebrow.image.slug ||
      column.headline.content ||
      column.headline.image.slug ||
      column.subhead.content ||
      column.subhead.image.slug ||
      column.cta.content
    );
  }

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
    },
    {
      backgroundColor: `${id}-fourth-column-background-color`,
      image: {
        slug: fourthColumnBackgroundImage,
        altText: fourthColumnBackgroundImageAltText,
        preset: fourthColumnBackgroundImagePreset
      },
      eyebrow: {
        content: fourthColumnEyebrowContent,
        image: {
          slug: fourthColumnEyebrowImage,
          altText: fourthColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: fourthColumnHeadlineContent,
        image: {
          slug: fourthColumnHeadlineImage,
          altText: fourthColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: fourthColumnSubheadContent,
        image: {
          slug: fourthColumnSubheadImage,
          altText: fourthColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: fourthColumnCtaContent,
        url: fourthColumnCtaUrl,
        adobeTag: fourthColumnCtaAdobeTag
      },
      textBelow: {
        content: fourthColumnTextBelow
      }
    }
  ];

  const columnVarNames = [
    { eyebrow: 'firstColumnEyebrowContent', headline: 'firstColumnHeadlineContent', subhead: 'firstColumnSubheadContent', cta: 'firstColumnCtaContent', textBelow: 'firstColumnTextBelow' },
    { eyebrow: 'secondColumnEyebrowContent', headline: 'secondColumnHeadlineContent', subhead: 'secondColumnSubheadContent', cta: 'secondColumnCtaContent', textBelow: 'secondColumnTextBelow' },
    { eyebrow: 'thirdColumnEyebrowContent', headline: 'thirdColumnHeadlineContent', subhead: 'thirdColumnSubheadContent', cta: 'thirdColumnCtaContent', textBelow: 'thirdColumnTextBelow' },
    { eyebrow: 'fourthColumnEyebrowContent', headline: 'fourthColumnHeadlineContent', subhead: 'fourthColumnSubheadContent', cta: 'fourthColumnCtaContent', textBelow: 'fourthColumnTextBelow' },
  ];
  const columnCtaUrlVarNames = ['firstColumnCtaUrl', 'secondColumnCtaUrl', 'thirdColumnCtaUrl', 'fourthColumnCtaUrl'];

  const visibleColumns = columns.slice(0, maxColumnsToShow);

  const getAspectRatioClasses = () => {
    return `${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[desktop-column]`
  }

  const TextContent = ({ eyebrow, headline, subhead, cta, varNames }) => (
    <>
      {eyebrow.image.slug && eyebrow.image.slug.length > 0 ? (
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
        />
      ) : (
        eyebrow.content && (
          <p className={`${id}-belk-text-clamp-eyebrow font-bold`} data-bildit-var-name={varNames?.eyebrow} data-bildit-var-type="RichText">{eyebrow.content}</p>
        )
      )}

      {headline.image.slug && headline.image.slug.length > 0 ? (
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
        />
      ) : (
        headline.content && (
          <h2 className={`my-1 font-bold ${id}-belk-text-clamp-headline`} data-bildit-var-name={varNames?.headline} data-bildit-var-type="RichText">{headline.content}</h2>
        )
      )}

      {subhead.image.slug && subhead.image.slug.length > 0 ? (
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
        />
      ) : (
        subhead.content && (
          <h3 className={`my-1 ${id}-belk-text-clamp-subhead`} data-bildit-var-name={varNames?.subhead} data-bildit-var-type="RichText">{subhead.content}</h3>
        )
      )}

      {cta.content && (
        <Button
          className={`mt-2 mb-1 ${id}-belk-text-clamp-cta cursor-pointer ${id}-bg-solid-button`}
          variant={ctaVariant}
        >
          <span data-bildit-var-name={varNames?.cta} data-bildit-var-type="RichText">{cta.content}</span>
        </Button>
      )}
    </>
  )

 return (
    <>
      <TwoFourUpStyleVars id={id} />
      <TwoFourUpStyles id={id} />
      <div className={`w-full relative overflow-hidden ${topMargin} ${bottomMargin} ${sectionRoundedTop} ${sectionRoundedBottom} ${id}-container-background-color`}>
        {sectionBackgroundImage && isValidImageUrl(buildImageUrl(sectionBackgroundImage, "m", sectionBackgroundImagePreset)) && (
          <div className="absolute inset-0 z-0" data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
            <PictureResponsiveImage
              images={{
                mobile: buildImageUrl(sectionBackgroundImage, "m", sectionBackgroundImagePreset),
                tablet: buildImageUrl(sectionBackgroundImage, "t", sectionBackgroundImagePreset),
                desktop: buildImageUrl(sectionBackgroundImage, "d", sectionBackgroundImagePreset),
                largeDesktop: buildImageUrl(sectionBackgroundImage, "l", sectionBackgroundImagePreset),
              }}
              alt={sectionBackgroundAlt}
              imageClassName="object-cover object-center w-full h-full"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}
        <ResponsiveContainer
          containerBehavior={containerBehavior}
          className="relative z-10 w-full justify-center mx-auto py-4 md:py-8"
        >
          {(sectionTitle || sectionSubhead || sectionCtaContent) && (
            <div className={`flex flex-col relative w-full font-bold mb-4`}>
              {/* Title and Subhead row - CTA inline when left-aligned or side-by-side arrangement */}
              <div
                className={`flex ${arrangement} ${alignmentClass} items-center w-full gap-2`}
              >
                {sectionTitle && (
                  <span className={`flex flex-inline ${id}-belk-text-clamp-section-title mr-4`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>
                )}
                {sectionCtaContent && getCtaPlacement() === "inline" && sectionCtaAlignment === "left" && (
                 <WrapperComponent className="cursor-pointer" href={sectionCtaUrl} data-aali={sectionCtaAdobeTag}>
                  <Button
                    className={`${getCtaAlignmentClass()} ${id}-belk-text-clamp-section-cta ${sectionCtaVariant === "solid" ? `${id}-section-cta-background-color` : ""}`}
                    variant={sectionCtaVariant}
                  ><span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span></Button></WrapperComponent>
                )}
                {sectionSubhead && (
                  <span className={`flex flex-inline ${id}-belk-text-clamp-subhead`} data-bildit-var-name="sectionSubhead" data-bildit-var-type="RichText">{sectionSubhead}</span>
                )}
                {sectionCtaContent && getCtaPlacement() === "inline" && sectionCtaAlignment !== "left" && (
                  <WrapperComponent className="cursor-pointer" href={sectionCtaUrl} data-aali={sectionCtaAdobeTag}>
                  <Button
                    className={`${getCtaAlignmentClass()} ${id}-belk-text-clamp-section-cta ${sectionCtaVariant === "solid" ? `${id}-section-cta-background-color` : ""}`}
                    variant={sectionCtaVariant}
                  ><span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span></Button></WrapperComponent>
                )}
              </div>

              {/* CTA shown below when: arrangement is stacked AND alignment is center or right */}
              {sectionCtaContent && getCtaPlacement() === "below" && (
              <WrapperComponent className="cursor-pointer" href={sectionCtaUrl} data-aali={sectionCtaAdobeTag}>
                <div
                  className={`flex w-full mt-2 ${sectionCtaAlignment === "center" ? "justify-center" : sectionCtaAlignment === "right" ? "justify-end" : "justify-start"}`}
                >
                  <Button
                    className={`${id}-belk-text-clamp-section-cta ${sectionCtaVariant === "solid" ? `${id}-section-cta-background-color` : ""}`}
                    variant={sectionCtaVariant}
                  ><span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span></Button></div>
              </WrapperComponent>
              )}
            </div>
          )}
          <div
            className={`relative w-full grid ${mobileGridLayout} ${tabletGridLayout} ${desktopGridLayout} ${id}-${gridGap} overflow-hidden ${id}-container-font-family !m-0 !p-0`}
          >
            {visibleColumns.map(({ backgroundColor, image, eyebrow, headline, subhead, cta, textBelow }, index) => (
              <div key={index} data-bildit-var-name={columnCtaUrlVarNames[index]} data-bildit-var-type="String">
              <WrapperComponent className="w-full cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
                {image.slug && isValidImageUrl(buildImageUrl(image.slug, "m", image.preset)) ? (
                  <div data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage','thirdColumnBackgroundImage','fourthColumnBackgroundImage'][index]} data-bildit-var-type="String">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(image.slug, "m", image.preset),
                      tablet: buildImageUrl(image.slug, "t", image.preset),
                      desktop: buildImageUrl(image.slug, "d", image.preset),
                      largeDesktop: buildImageUrl(image.slug, "l", image.preset),
                    }}
                    alt={image.altText}
                    imageClassName="z-10 object-cover object-center"
                    className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[desktop-column] ${backgroundColor}`}
                  >
                    {textStackedBelow === "no" && (
                      <div
                        className={`w-full flex flex-col z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}
                      >
                        <TextContent eyebrow={eyebrow} headline={headline} subhead={subhead} cta={cta} varNames={columnVarNames[index]} />
                      </div>
                    )}
                  </PictureResponsiveImage>
                  </div>
                ) : (
                  <div
                    className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[desktop-column] ${backgroundColor}`}
                  >
                    {textStackedBelow === "no" && (
                      <div
                        className={`w-full flex flex-col z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}
                      >
                        <TextContent eyebrow={eyebrow} headline={headline} subhead={subhead} cta={cta} varNames={columnVarNames[index]} />
                      </div>
                    )}
                  </div>
                )}

                   {textStackedBelow === "yes" && hasTextStackContent({ eyebrow, headline, subhead, cta, textBelow }) && (
                  <div
                    className={`w-full flex flex-col ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} p-4 ${id}-text-stacked-below-background-color`}
                  >
                    <TextContent eyebrow={eyebrow} headline={headline} subhead={subhead} cta={cta} varNames={columnVarNames[index]} />
                  </div>
                )}

                 {textStackedBelow === "yes" && !hasTextStackContent({ eyebrow, headline, subhead, cta, textBelow }) && textBelow.content && (
                  <p className={`${id}-belk-text-clamp-text-below ${id}-text-stacked-below-background-color font-bold text-center my-0 py-2 md:py-1 lg:py-1`} data-bildit-var-name={columnVarNames[index]?.textBelow} data-bildit-var-type="RichText">
                    {textBelow.content}
                  </p>
                )}
              </WrapperComponent>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default TwoFourUp