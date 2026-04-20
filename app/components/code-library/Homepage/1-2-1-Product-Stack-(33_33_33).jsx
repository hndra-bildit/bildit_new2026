"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: {1. Section Header}
const sectionTitle = $(sectionTitle:RichText="");
const headerContentArrangement = $(headerContentArrangement:Dropdown[Stacked|flex-col,Side by Side|flex-row]="flex-col");
const sectionSubhead = $(sectionSubhead:RichText="");
const sectionCtaContent = $(sectionCtaContent:RichText="");
const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const sectionCtaBackgroundColor = $(sectionCtaBackgroundColor:Color="#FFFFFF");
const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
// endgroup

// group: {2. Section Layout}
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16]="mt-8");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-inset";required=true);
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-none");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-none");
const desktopContainerAspectRatioWidth = $(desktopContainerAspectRatioWidth:String="");
const desktopContainerAspectRatioHeight = $(desktopContainerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
// endgroup

// group: {3. Section Background}
const sectionTitleDropShadow = $(sectionTitleDropShadow:Dropdown[None|none,Small|sm,Medium|md,Large|lg]="md");
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#f3f4f6");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group: {4. Column Layout}
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="";required=true);
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="";required=true);
const desktopSideImageAspectRatioWidth = $(desktopSideImageAspectRatioWidth:String="");
const desktopSideImageAspectRatioHeight = $(desktopSideImageAspectRatioHeight:String="");
const desktopMiddleImageAspectRatioWidth = $(desktopMiddleImageAspectRatioWidth:String="");
const desktopMiddleImageAspectRatioHeight = $(desktopMiddleImageAspectRatioHeight:String="");
const tabletSideImageAspectRatioWidth = $(tabletSideImageAspectRatioWidth:String="");
const tabletSideImageAspectRatioHeight = $(tabletSideImageAspectRatioHeight:String="");
const tabletMiddleImageAspectRatioWidth = $(tabletMiddleImageAspectRatioWidth:String="");
const tabletMiddleImageAspectRatioHeight = $(tabletMiddleImageAspectRatioHeight:String="");
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
const columnImageRoundedCorners = $(columnImageRoundedCorners:Dropdown[None|rounded-none,Large|rounded-lg,Extra Large|rounded-2xl]="rounded-none");
// endgroup

// group: {4.1. Responsive Grid Configuration}
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-1");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-1-2-1");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-1-2-1");
const gridGap = $(gridGap:Dropdown[Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-4");
// endgroup

// group: {5. Typography}
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const textColor = $(textColor:Color="#000000");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="5rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem,9rem|9rem]="9rem");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="0.875rem");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1rem");
const headlineMinimumFontSize = $(headlineMinimumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1.5rem");
const headlineMaximumFontSize = $(headlineMaximumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="3.375rem");
const subheadMinimumFontSize = $(subheadMinimumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1.75rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1.25rem");
const textBelowMinimumFontSize = $(textBelowMinimumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1rem");
const textBelowMaximumFontSize = $(textBelowMaximumFontSize:Dropdown[0.75rem|0.75rem,0.813rem|0.813rem,0.875rem|0.875rem,0.938rem|0.938rem,1rem|1rem,1.125rem|1.125rem,1.25rem|1.25rem,1.5rem|1.5rem,1.75rem|1.75rem,2rem|2rem,2.25rem|2.25rem,2.5rem|2.5rem,3rem|3rem,3.375rem|3.375rem,3.75rem|3.75rem,5rem|5rem]="1.75rem");
// endgroup

// group: {6. CTA Styling}
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaTextColor = $(ctaTextColor:Color="#000000");
const ctaBackgroundColor = $(ctaBackgroundColor:Color);
// endgroup

// group: {8. Image Sizing}
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

// group: {9. Column 1}
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#FFFFFF");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="wkxx_2025_test_1_2_1_p1");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
    const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
    const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText);
    const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
    const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
    const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText);
    const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText);
const firstColumnCtaContent = $(firstColumnCtaContent:RichText);
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnTextBelow = $(firstColumnTextBelow:RichText);
// endgroup

// group: {10. Column 2}
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color);
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="wkxx_2025_test_1_2_1_p2");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
    const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
    const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText);
    const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
    const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
    const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText);
    const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText);
const secondColumnCtaContent = $(secondColumnCtaContent:RichText);
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:RichText);
// endgroup

// group: {11. Column 3}
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color);
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="wkxx_2025_test_1_2_1_p3");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnEyebrowImage = $(thirdColumnEyebrowImage:String="");
    const thirdColumnEyebrowImageAltText = $(thirdColumnEyebrowImageAltText:String="");
    const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText);
    const thirdColumnHeadlineImage = $(thirdColumnHeadlineImage:String="");
    const thirdColumnHeadlineImageAltText = $(thirdColumnHeadlineImageAltText:String="");
    const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText);
    const thirdColumnSubheadImage = $(thirdColumnSubheadImage:String="");
const thirdColumnSubheadImageAltText = $(thirdColumnSubheadImageAltText:String="");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText);
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText);
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
const thirdColumnTextBelow = $(thirdColumnTextBelow:RichText);
// endgroup

// group: {12. Column 4}
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color="#FFFFFF");
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="wkxx_2025_test_1_2_1_p4");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnEyebrowImage = $(fourthColumnEyebrowImage:String="");
    const fourthColumnEyebrowImageAltText = $(fourthColumnEyebrowImageAltText:String="");
    const fourthColumnEyebrowContent = $(fourthColumnEyebrowContent:RichText);
    const fourthColumnHeadlineImage = $(fourthColumnHeadlineImage:String="");
    const fourthColumnHeadlineImageAltText = $(fourthColumnHeadlineImageAltText:String="");
    const fourthColumnHeadlineContent = $(fourthColumnHeadlineContent:RichText);
    const fourthColumnSubheadImage = $(fourthColumnSubheadImage:String="");
const fourthColumnSubheadImageAltText = $(fourthColumnSubheadImageAltText:String="");
const fourthColumnSubheadContent = $(fourthColumnSubheadContent:RichText);
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText);
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
const fourthColumnTextBelow = $(fourthColumnTextBelow:RichText);
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

/**
 * Picture-based responsive image component using HTML picture element
 */
const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;

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

  const urls = [mobile, tablet, desktop, largeDesktop].filter(isValidImageUrl);
  const hasAnyImage = urls.length > 0 && !hasError;
  const fallbackSrc = mobile || tablet || desktop || largeDesktop;

  return (
    <div className={`relative overflow-hidden ${className}`} {...rest}>
      {hasAnyImage && isValidImageUrl(fallbackSrc) && (
        <picture>
          {isValidImageUrl(mobile) && <source alt={alt} media="(max-width: 767px)" srcSet={mobile} />}
          {isValidImageUrl(tablet) && <source alt={alt} media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
          {isValidImageUrl(desktop) && <source alt={alt} media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
          {isValidImageUrl(largeDesktop) && <source alt={alt} media="(min-width: 1920px)" srcSet={largeDesktop} />}
          <Image
            className={`${imageClassName}`}
            src={fallbackSrc}
            alt={alt ?? ''}
            fill
            sizes="100vw"
            onError={handleError}
          />
        </picture>
      )}
      {children}
    </div>
  );
}

const HolidayOneTwoOneStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-title-drop-shadow: ${sectionTitleDropShadow};
          --${id}-container-font-family: ${fontFamily};
          --${id}-container-text-color: ${textColor};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}, 3vw, ${sectionTitleMaximumFontSize});
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
          --${id}-cta-text-color: ${ctaTextColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 1.5vw, ${ctaMaximumFontSize});
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
          --${id}-desktop-side-image-aspect-ratio: ${desktopSideImageAspectRatioWidth} / ${desktopSideImageAspectRatioHeight};
          --${id}-desktop-middle-image-aspect-ratio: ${desktopMiddleImageAspectRatioWidth} / ${desktopMiddleImageAspectRatioHeight};
          --${id}-tablet-side-image-aspect-ratio: ${tabletSideImageAspectRatioWidth} / ${tabletSideImageAspectRatioHeight};
          --${id}-tablet-middle-image-aspect-ratio: ${tabletMiddleImageAspectRatioWidth} / ${tabletMiddleImageAspectRatioHeight};
          --${id}-mobile-grid-layout: ${mobileGridLayout};
          --${id}-tablet-grid-layout: ${tabletGridLayout};
          --${id}-desktop-grid-layout: ${desktopGridLayout};
          --${id}-grid-gap: ${gridGap};
          --${id}-first-column-background-color: ${firstColumnBackgroundColor};
          --${id}-second-column-background-color: ${secondColumnBackgroundColor};
          --${id}-third-column-background-color: ${thirdColumnBackgroundColor};
          --${id}-fourth-column-background-color: ${fourthColumnBackgroundColor};
        }
      }
    }
  `}</style>
)

const HolidayOneTwoOneStyles = ({ id }) => (
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
      /* CHANGE: Headline drop shadow */ 
    .${id}-container-title-drop-shadow-none {
      filter: none;
    }
    .${id}-container-title-drop-shadow-sm {
      filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.15));
    }
    .${id}-container-title-drop-shadow-md {
      filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.25)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.06));
    }
    .${id}-container-title-drop-shadow-lg {
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.35)) drop-shadow(0 4px 8px rgb(0 0 0 / 0.1));
    }
    .${id}-section-cta-background-color {
      background-color: var(--${id}-section-cta-background-color);
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
    .${id}-aspect-\\[desktop-column\\] {
      aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-column\\] {
      aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
    }
   .${id}-aspect-\\[tablet-side-image\\] {
      aspect-ratio: var(--${id}-tablet-side-image-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-middle-image\\] {
      aspect-ratio: var(--${id}-tablet-middle-image-aspect-ratio);
    }
    /* Mobile-only: prevent mobile aspect ratios from affecting tablet/desktop (fixes gaps when mobile is 1/1) */
    @media (max-width: 47.999rem) {
      .${id}-aspect-\\[mobile-container\\] {
        aspect-ratio: var(--${id}-mobile-container-aspect-ratio);
      }
      .${id}-aspect-\\[mobile-column\\] {
        aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
      }
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
    @media (width >= 48rem) {
      .md\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .md\\:${id}-aspect-\\[tablet-side-image\\] {
        aspect-ratio: var(--${id}-tablet-side-image-aspect-ratio);
      }
      .md\\:${id}-aspect-\\[tablet-middle-image\\] {
        aspect-ratio: var(--${id}-tablet-middle-image-aspect-ratio);
      }
    }
     
    @media (width >= 64rem) {
      .lg\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    @media (width >= 80rem) {
      .xl\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
      }
     .xl\\:${id}-aspect-\\[desktop-side-image\\] {
        aspect-ratio: var(--${id}-desktop-side-image-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-middle-image\\] {
        aspect-ratio: var(--${id}-desktop-middle-image-aspect-ratio);
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

    /* Mobile only: 2x2 grid, row1 = col1 + col4, row2 = col2 + col3 */
    @media (max-width: 47.999rem) {
      .${id}-mobile-2x2-1-4-2-3 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        column-gap: 1rem;
        row-gap: 1rem;
        align-items: stretch;
      }
      .${id}-mobile-2x2-1-4-2-3 .${id}-grid-item-1 {
        grid-column: 1;
        grid-row: 1;
      }
      .${id}-mobile-2x2-1-4-2-3 .${id}-grid-item-4 {
        grid-column: 2;
        grid-row: 1;
      }
      .${id}-mobile-2x2-1-4-2-3 .${id}-grid-item-2 {
        grid-column: 1;
        grid-row: 2;
      }
      .${id}-mobile-2x2-1-4-2-3 .${id}-grid-item-3 {
        grid-column: 2;
        grid-row: 2;
      }
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
    }
      
    @media (width >= 48rem ) {
       .md\\:${id}-grid-cols-1-2-1 {
        display:grid;
        grid-template-columns: 1fr  1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
        align-items: stretch;
        height:100%;
        min-height: 28rem;
      }    
      .md\\:${id}-grid-item-1 > a,
      .md\\:${id}-grid-item-2 > a,
      .md\\:${id}-grid-item-3 > a,
      .md\\:${id}-grid-item-4 > a {
        width: 100%;
        height: 100%;
        display: block;
      }
      .md\\:${id}-grid-item-1 {
        grid-column: 1;
        grid-row: 1 / 3;
        height:100%;
      }
      .md\\:${id}-grid-item-2 {
        grid-column: 2;
        grid-row:  1;
        height: 100%;
        margin: 0;
        padding: 0;
      }  
      .md\\:${id}-grid-item-3 {
        grid-column: 2;
        grid-row: 2;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .md\\:${id}-grid-item-4 {
        grid-column: 3;
        grid-row: 1 / 3;
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
      .md\\:${id}-grid-item-2 > a > div > div,
      .md\\:${id}-grid-item-3 > a > div > div {
          min-height: 12rem;
      }
      .md\\:${id}-grid-item-1 > a > div > div > div > picture,
      .md\\:${id}-grid-item-2 > a > div > div > div > picture,
      .md\\:${id}-grid-item-3 > a > div > div > div > picture,
      .md\\:${id}-grid-item-4 > a > div > div > div > picture {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
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

    /* Tablet only: row1 = col1 full-width, row2 = col4 full-width, row3 = col2 left + col3 right */
    @media (min-width: 48rem) and (max-width: 79.999rem) {
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: auto;
        overflow: visible;
      }
      .md\\:${id}-grid-cols-1-2-1-tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        column-gap: 1rem;
        row-gap: 1rem;
        align-items: stretch;
        min-height: 28rem;
      }
      .md\\:${id}-grid-item-1 {
        grid-column: 1 / -1;
        grid-row: 1;
        height: auto;
        min-height: 14rem;
      }
      .md\\:${id}-grid-item-2 {
        grid-column: 1;
        grid-row: 3;
        height: 100%;
        min-height: 14rem;
        margin: 0;
        padding: 0;
      }
      .md\\:${id}-grid-item-3 {
        grid-column: 2;
        grid-row: 3;
        height: 100%;
        min-height: 14rem;
        margin: 0;
        padding: 0;
      }
      .md\\:${id}-grid-item-4 {
        grid-column: 1 / -1;
        grid-row: 2;
        height: auto;
        min-height: 14rem;
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-grid-cols-1-2-1 {
        display:grid;
        grid-template-columns: 1fr  1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
        align-items: stretch;
        height:100%;
        min-height: 28rem;
      }    
      .xl\\:${id}-grid-item-1 > a,
      .xl\\:${id}-grid-item-2 > a,
      .xl\\:${id}-grid-item-3 > a,
      .xl\\:${id}-grid-item-4 > a {
        width: 100%;
        height: 100%;
        display: block;
      }
      .xl\\:${id}-grid-item-1 {
        grid-column: 1;
        grid-row: 1 / 3;
        height:100%;
      }
      .xl\\:${id}-grid-item-2 {
        grid-column: 2;
        grid-row:  1;
        height: 100%;
        margin: 0;
        padding: 0;
      }  
      .xl\\:${id}-grid-item-3 {
        grid-column: 2;
        grid-row: 2;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .xl\\:${id}-grid-item-4 {
        grid-column: 3;
        grid-row: 1 / 3;
        height:100%;
      }
      .xl\\:${id}-grid-item-1 > div,
      .xl\\:${id}-grid-item-2 > div,
      .xl\\:${id}-grid-item-3 > div,
      .xl\\:${id}-grid-item-4 > div {
          width: 100%;
          height: 100%;
          position: relative;
      }
      .xl\\:${id}-grid-item-2 > a > div > div,
      .xl\\:${id}-grid-item-3 > a > div > div {
          min-height: 12rem;
      }
      .xl\\:${id}-grid-item-1 > a > div > div > div > picture,
      .xl\\:${id}-grid-item-2 > a > div > div > div > picture,
      .xl\\:${id}-grid-item-3 > a > div > div > div > picture,
      .xl\\:${id}-grid-item-4 > a > div > div > div > picture {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
      .xl\\:${id}-grid-item-1 > img,
      .xl\\:${id}-grid-item-2 > img,
      .xl\\:${id}-grid-item-3 > img,
      .xl\\:${id}-grid-item-4 > img {
        object-fit : cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
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

const HolidayOneTwoOne = ({ id }) => {
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

  // Safe access to alignment with fallback
  const getAlignmentClass = () => {
    const arrangement = (typeof headerContentArrangement === 'string' ? headerContentArrangement : 'flex-col') || 'flex-col';
    // Ensure sectionAlignment is a string, not a component or function
    const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : String(sectionAlignment || 'center')) || 'center';
    return alignmentMap[arrangement]?.[alignment] || alignmentMap['flex-col']['center'];
  };

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

  const getDesktopAspectRatioClass = (index) => {
    // Side columns (1st and 4th): no aspect-ratio on md/xl so card fills full grid cell height; image covers vertically
    if (index === 0 || index === 3) {
      return 'md:aspect-auto xl:aspect-auto'
    }
    // Middle images: 2nd (index 1) and 3rd (index 2) use middle aspect ratio (512:169)
    return `md:${id}-aspect-[tablet-middle-image] xl:${id}-aspect-[desktop-middle-image] `
  }

  return (
    <>
      <HolidayOneTwoOneStyleVars id={id} />
      <HolidayOneTwoOneStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}  >
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
            tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
            desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
            largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
          }}
          alt={sectionBackgroundAlt}
          imageClassName="-z-1 object-cover object-center"
          className={`relative justify-center ${id}-aspect-[mobile-container] md:${id}-aspect-[tablet-container] xl:${id}-aspect-[desktop-container] ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color py-4 md:py-8`}>
        {(sectionTitle || sectionSubhead || (sectionCtaContent != null && String(sectionCtaContent).trim() !== '')) && (
          <div className={`flex ${typeof headerContentArrangement === 'string' ? headerContentArrangement : 'flex-col'} relative w-full font-bold mb-4 ${getAlignmentClass()} items-center ${containerBehavior} ${topMargin} mb-4 ${id}-container-title-drop-shadow-${sectionTitleDropShadow}`}
            data-bildit-var-name="headerContentArrangement">
            {sectionTitle && (
              <span className={`flex flex-inline whitespace-pre ${id}-belk-text-clamp-section-title`}
                data-bildit-var-name="sectionTitle"
                data-bildit-var-type="RichText"
                data-bildit-var-default=""
              >{sectionTitle}</span>
            )}
            {sectionSubhead && (
              <span className={`flex flex-inline whitespace-pre ${id}-belk-text-clamp-subhead`}
                data-bildit-var-name="sectionSubhead"
                data-bildit-var-type="RichText"
                data-bildit-var-default=""
              >{sectionSubhead}</span>
            )}
            {(sectionCtaContent != null && String(sectionCtaContent).trim() !== '') && (
              <Button className={`ml-auto ${id}-belk-text-clamp-cta ${sectionCtaVariant === 'solid' ? `${id}-section-cta-background-color` : ''}`} variant={sectionCtaVariant}
                data-bildit-var-name="sectionCtaContent"
                data-bildit-var-type="RichText"
                data-bildit-var-default=""
              >{sectionCtaContent}</Button>
            )}
          </div>
        )}
        <div className={`relative w-full grid ${id}-mobile-2x2-1-4-2-3 ${id}-${mobileGridLayout} md:${id}-grid-cols-1-2-1-tablet xl:${id}-grid-cols-1-2-1 ${id}-${gridGap} ${id}-container-text-color ${id}-container-font-family`}>
          {columns.map(({backgroundColor, image, eyebrow, headline, subhead, cta, textBelow}, index) => {
            const isSideColumn = index === 0 || index === 3;
            const columnCardClassName = `flex flex-col w-full relative ${columnImageRoundedCorners} ${backgroundColor} h-full`;
            const columnImageWrapperClassName = `w-full relative overflow-hidden flex-shrink-0 flex-1 min-h-0 ${id}-aspect-[mobile-column] ${getDesktopAspectRatioClass(index)}`;
            const columnContent = (
              <>
          <div className={`flex flex-col z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding h-full justify-between`}>
            <div>
                  {eyebrow.image.slug && eyebrow.image.slug.length > 0 ? (
                    <PictureResponsiveImage
                      images={{
                        mobile: buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset),
                        tablet: buildImageUrl(eyebrow.image.slug, 't', eyebrow.image.preset),
                        desktop: buildImageUrl(eyebrow.image.slug, 'd', eyebrow.image.preset),
                        largeDesktop: buildImageUrl(eyebrow.image.slug, 'l', eyebrow.image.preset),
                      }}
                      alt={eyebrow.image.altText}
                      className={`my-2 ${id}-aspect-[eyebrow] w-full ${id}-max-w-[eyebrow] ${id}-h-[eyebrow]`}
                      imageClassName="-z-1 object-cover object-center"
                      data-bildit-var-name={index === 0 ? "firstColumnEyebrowImage" : index === 1 ? "secondColumnEyebrowImage" : index === 2 ? "thirdColumnEyebrowImage" : "fourthColumnEyebrowImage"}
                      data-bildit-var-type="String"
                    />
                  ) : (
                    <p className={`whitespace-pre ${id}-belk-text-clamp-eyebrow font-bold`}
                      data-bildit-var-name={index === 0 ? "firstColumnEyebrowContent" : index === 1 ? "secondColumnEyebrowContent" : index === 2 ? "thirdColumnEyebrowContent" : "fourthColumnEyebrowContent"}
                      data-bildit-var-type="RichText"
                      data-bildit-var-default=""
                    >{eyebrow.content}</p>
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
                      className={`my-2 md:my-4 ${id}-aspect-[headline] w-full ${id}-max-w-[headline] ${id}-h-[headline]`}
                      imageClassName="-z-1 object-contain object-center"
                      data-bildit-var-name={index === 0 ? "firstColumnHeadlineImage" : index === 1 ? "secondColumnHeadlineImage" : index === 2 ? "thirdColumnHeadlineImage" : "fourthColumnHeadlineImage"}
                      data-bildit-var-type="String"
                    />
                  ) : (
                      <h2 className={`my-1 font-bold whitespace-pre ${id}-belk-text-clamp-headline`}
                        data-bildit-var-name={index === 0 ? "firstColumnHeadlineContent" : index === 1 ? "secondColumnHeadlineContent" : index === 2 ? "thirdColumnHeadlineContent" : "fourthColumnHeadlineContent"}
                        data-bildit-var-type="RichText"
                        data-bildit-var-default=""
                      >{headline.content}</h2>
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
                      data-bildit-var-name={index === 0 ? "firstColumnSubheadImage" : index === 1 ? "secondColumnSubheadImage" : index === 2 ? "thirdColumnSubheadImage" : "fourthColumnSubheadImage"}
                      data-bildit-var-type="String"
                    />
                  ) : (
                    <h3 className={`my-1 whitespace-pre ${id}-belk-text-clamp-subhead`}
                      data-bildit-var-name={index === 0 ? "firstColumnSubheadContent" : index === 1 ? "secondColumnSubheadContent" : index === 2 ? "thirdColumnSubheadContent" : "fourthColumnSubheadContent"}
                      data-bildit-var-type="RichText"
                      data-bildit-var-default=""
                    >{subhead.content}</h3>
                  )}
            </div>

                  {(cta.content != null && String(cta.content).trim() !== '') && (
                    <Button className={`mt-2 mb-1 ${id}-belk-text-clamp-cta cursor-pointer ${ctaVariant === 'solid' ? `${id}-bg-solid-button` : ''}`} variant={ctaVariant}
                      data-bildit-var-name={index === 0 ? "firstColumnCtaContent" : index === 1 ? "secondColumnCtaContent" : index === 2 ? "thirdColumnCtaContent" : "fourthColumnCtaContent"}
                      data-bildit-var-type="RichText"
                      data-bildit-var-default=""
                    >{cta.content}</Button>
                  )}
                </div>
              </>
            );
            return (
              <WrapperComponent key={index} className={`w-full cursor-pointer ${id}-grid-item-${index + 1} xl:${id}-grid-item-${index + 1} md:${id}-grid-item-${index + 1}`} href={cta.url} data-aali={cta.adobeTag}>
                {image.slug ? (
                  <div className={columnCardClassName}>
                    <div className={columnImageWrapperClassName}>
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(image.slug, 'm', image.preset),
                          tablet: buildImageUrl(image.slug, 't', image.preset),
                          desktop: buildImageUrl(image.slug, 'd', image.preset),
                          largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                        }}
                        alt={image.altText}
                        imageClassName="absolute z-10 object-cover object-center"
                        className="w-full h-full relative"
                      />
                    </div>
                    <div className={`absolute inset-0 z-10 flex flex-col ${columnVerticalAlignment} ${columnHorizontalAlignment} pointer-events-none [&>*]:pointer-events-auto`}>
                      {columnContent}
                    </div>
                    <div
                      className="absolute inset-0 z-20"
                      aria-hidden
                      data-bildit-var-name={index === 0 ? "firstColumnBackgroundImage" : index === 1 ? "secondColumnBackgroundImage" : index === 2 ? "thirdColumnBackgroundImage" : "fourthColumnBackgroundImage"}
                      data-bildit-var-type="String"
                      style={{ pointerEvents: 'none' }}
                    />
                  </div>
                ) : (
                  <div className={columnCardClassName}>
                    <div
                      className="absolute inset-0 z-0 min-h-[8rem]"
                      aria-hidden
                      data-bildit-var-name={index === 0 ? "firstColumnBackgroundImage" : index === 1 ? "secondColumnBackgroundImage" : index === 2 ? "thirdColumnBackgroundImage" : "fourthColumnBackgroundImage"}
                      data-bildit-var-type="String"
                      style={{ pointerEvents: 'none' }}
                    />
                    {columnContent}
                  </div>
                )}
                {(textBelow.content != null && String(textBelow.content).trim() !== '') && (
                  <p className={`whitespace-pre ${id}-belk-text-clamp-text-below font-bold text-center my-2`}
                    data-bildit-var-name={index === 0 ? "firstColumnTextBelow" : index === 1 ? "secondColumnTextBelow" : index === 2 ? "thirdColumnTextBelow" : "fourthColumnTextBelow"}
                    data-bildit-var-type="RichText"
                    data-bildit-var-default=""
                  >{textBelow.content}</p>
                )}
              </WrapperComponent>
            );
          })}
        </div>
        </PictureResponsiveImage>
      </ResponsiveContainer>
    </>
  );
};

export default HolidayOneTwoOne;