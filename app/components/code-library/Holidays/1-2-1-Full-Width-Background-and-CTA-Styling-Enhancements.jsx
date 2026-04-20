"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="DENIM DEALS";color="#ffffff");
const headerContentArrangement = $(headerContentArrangement:Dropdown[Stacked|flex-col,Side by Side|flex-row]="flex-col");
const sectionSubhead = $(sectionSubhead:RichText="";color="#000000");
const sectionCtaContent = $(sectionCtaContent:RichText="";color="#000000");
const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const sectionCtaBackgroundColor = $(sectionCtaBackgroundColor:Color="#FFFFFF");
const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
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
const sectionTitleDropShadow = $(sectionTitleDropShadow:Dropdown[None|none,Small|sm,Medium|md,Large|lg]="md");
const sectionBackgroundColor = $(sectionBackgroundColor:Color);
const sectionBackgroundImage = $(sectionBackgroundImage:String="wk31_2025_newcms_denimdeals_bkgd_1");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group: { 4. Column Layout }
const desktopSideImageAspectRatioWidth = $(desktopSideImageAspectRatioWidth:String="496");
const desktopSideImageAspectRatioHeight = $(desktopSideImageAspectRatioHeight:String="339");
const desktopMiddleImageAspectRatioWidth = $(desktopMiddleImageAspectRatioWidth:String="512");
const desktopMiddleImageAspectRatioHeight = $(desktopMiddleImageAspectRatioHeight:String="169");
const tabletSideImageAspectRatioWidth = $(tabletSideImageAspectRatioWidth:String="496");
const tabletSideImageAspectRatioHeight = $(tabletSideImageAspectRatioHeight:String="339");
const tabletMiddleImageAspectRatioWidth = $(tabletMiddleImageAspectRatioWidth:String="512");
const tabletMiddleImageAspectRatioHeight = $(tabletMiddleImageAspectRatioHeight:String="169");
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="4";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="3";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-center");
// endgroup

// group: { 4.1. Responsive Grid Configuration }
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-1");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-3");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-3");
const gridGap = $(gridGap:Dropdown[Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-4");
// endgroup

// group: { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem,11xl|6rem,12xl|6.5rem,13xl|7rem,14xl|7.5rem,15xl|8rem,16xl|8.5rem,17xl|8.75rem]="5rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem,11xl|6rem,12xl|6.5rem,13xl|7rem,14xl|7.5rem,15xl|8rem,16xl|8.5rem,17xl|8.75rem]="8.75rem");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const headlineMinimumFontSize = $(headlineMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const headlineMaximumFontSize = $(headlineMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const subheadMinimumFontSize =$(subheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const textBelowMinimumFontSize = $(textBelowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const textBelowMaximumFontSize = $(textBelowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
// endgroup

// group: { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color);
// endgroup

// group: { 7.1. CTA Button 1 }
const firstButtonCtaContent = $(firstButtonCtaContent:RichText="Women";color="#ffffff");
const firstButtonCtaUrl = $(firstButtonCtaUrl:String="/";required=true);
const firstButtonCtaAdobeTag = $(firstButtonCtaAdobeTag:String="";required=true);
const firstButtonCtaVariant = $(firstButtonCtaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const firstButtonCtaBackgroundColor = $(firstButtonCtaBackgroundColor:Color='#203048');
// endgroup

// group: { 7.2. CTA Button 2 }
const secondButtonCtaContent = $(secondButtonCtaContent:RichText="Men";color="#ffffff");
const secondButtonCtaUrl = $(secondButtonCtaUrl:String="/";required=true);
const secondButtonCtaAdobeTag = $(secondButtonCtaAdobeTag:String="";required=true);
const secondButtonCtaVariant = $(secondButtonCtaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const secondButtonCtaBackgroundColor = $(secondButtonCtaBackgroundColor:Color='#203048');
// endgroup

// group: { 7.3. CTA Button 3 }
const thirdButtonCtaContent = $(thirdButtonCtaContent:RichText="Kids";color="#ffffff");
const thirdButtonCtaUrl = $(thirdButtonCtaUrl:String="/";required=true);
const thirdButtonCtaAdobeTag = $(thirdButtonCtaAdobeTag:String="";required=true);
const thirdButtonCtaVariant = $(thirdButtonCtaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const thirdButtonCtaBackgroundColor = $(thirdButtonCtaBackgroundColor:Color='#203048');
// endgroup

// group: { 7.4. CTA Button 4 }
const fourthButtonCtaContent = $(fourthButtonCtaContent:RichText="Shop All";color="#001D38");
const fourthButtonCtaUrl = $(fourthButtonCtaUrl:String="/";required=true);
const fourthButtonCtaAdobeTag = $(fourthButtonCtaAdobeTag:String="";required=true);
const fourthButtonCtaVariant = $(fourthButtonCtaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const fourthButtonCtaBackgroundColor = $(fourthButtonCtaBackgroundColor:Color='#ffffff');
// endgroup


// group: { 8. Image Sizing }
const eyebrowImageWidth = $(eyebrowImageWidth:String="80");
const eyebrowImageHeight = $(eyebrowImageHeight:String="24");
const eyebrowImagePreset = $(eyebrowImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const headlineImageWidth = $(headlineImageWidth:String="200");
const headlineImageHeight = $(headlineImageHeight:String="60");
const headlineImagePreset = $(headlineImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const subheadImageWidth = $(subheadImageWidth:String="180");
const subheadImageHeight = $(subheadImageHeight:String="40");
const subheadImagePreset = $(subheadImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup

// group: { 9. Column 1 }
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#203048");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="Up to";color="#FFFFFF");
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="20% Off";color="#FFFFFF");
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="Lucky Brand for Women & kids";color="#FFFFFF");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="Shop Now";color="#ffffff");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnTextBelow = $(firstColumnTextBelow:RichText="";color="#FFFFFF");
// endgroup

// group: { 10. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#203048");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="From";color="#FFFFFF");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="19% Off";color="#FFFFFF");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="Kids & Women";color="#FFFFFF");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop Now";color="#ffffff");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnTextBelow = $(secondColumnTextBelow:RichText="";color="#000000");
// endgroup

// group: { 11. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color="#203048");
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnEyebrowImage = $(thirdColumnEyebrowImage:String="");
const thirdColumnEyebrowImageAltText = $(thirdColumnEyebrowImageAltText:String="");
const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText="From";color="#FFFFFF");
const thirdColumnHeadlineImage = $(thirdColumnHeadlineImage:String="");
const thirdColumnHeadlineImageAltText = $(thirdColumnHeadlineImageAltText:String="");
const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText="19% Off";color="#FFFFFF");
const thirdColumnSubheadImage = $(thirdColumnSubheadImage:String="");
const thirdColumnSubheadImageAltText = $(thirdColumnSubheadImageAltText:String="");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText="Men & Women";color="#FFFFFF");
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText="Shop Now";color="#ffffff");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
const thirdColumnTextBelow = $(thirdColumnTextBelow:RichText="";color="#000000");
// endgroup

// group: { 12. Column 4 }
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color="#203048");
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnEyebrowImage = $(fourthColumnEyebrowImage:String="");
const fourthColumnEyebrowImageAltText = $(fourthColumnEyebrowImageAltText:String="");
const fourthColumnEyebrowContent = $(fourthColumnEyebrowContent:RichText="From";color="#FFFFFF");
const fourthColumnHeadlineImage = $(fourthColumnHeadlineImage:String="");
const fourthColumnHeadlineImageAltText = $(fourthColumnHeadlineImageAltText:String="");
const fourthColumnHeadlineContent = $(fourthColumnHeadlineContent:RichText="34.99";color="#FFFFFF");
const fourthColumnSubheadImage = $(fourthColumnSubheadImage:String="");
const fourthColumnSubheadImageAltText = $(fourthColumnSubheadImageAltText:String="");
const fourthColumnSubheadContent = $(fourthColumnSubheadContent:RichText="Clearance Sale";color="#FFFFFF");
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText="Shop Now";color="#ffffff");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
const fourthColumnTextBelow = $(fourthColumnTextBelow:RichText="";color="#000000");
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
        <button
        className={`flex-col font-bold gap-1.5 belk-button ${className} p-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-md flex-shrink-0`}
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

  const hasAnyImage = mobile || tablet || desktop || largeDesktop;

  return (
    <div className={`relative overflow-hidden ${className}`}>
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

const HPOneTwoOneStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-title-drop-shadow: ${sectionTitleDropShadow};
          --${id}-container-font-family: ${fontFamily};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}, 16vw, ${sectionTitleMaximumFontSize});
          --${id}-section-cta-background-color: ${sectionCtaBackgroundColor};
          --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
        }
        @layer eyebrow {
          --${id}-eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}, 1.8vw, ${eyebrowMaximumFontSize});
          --${id}-eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer headline {
          --${id}-headline-aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
          --${id}-headline-font-size: clamp(${headlineMinimumFontSize}, 2.8vw, ${headlineMaximumFontSize});
          --${id}-headline-max-width: clamp(${headlineImageWidth}px, 50vw, ${headlineImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-headline-max-height: clamp(${headlineImageHeight}px, 50vw, ${headlineImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer subhead {
          --${id}-subhead-aspect-ratio: ${subheadImageWidth} / ${subheadImageHeight};
          --${id}-subhead-font-size: clamp(${subheadMinimumFontSize}, 2.2vw, ${subheadMaximumFontSize});
          --${id}-subhead-max-width: clamp(${subheadImageWidth}px, 50vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-subhead-max-height: clamp(${subheadImageHeight}px, 50vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 1.8vw, ${ctaMaximumFontSize});
          --${id}-first-button-cta-background-color: ${firstButtonCtaBackgroundColor};
          --${id}-second-button-cta-background-color: ${secondButtonCtaBackgroundColor};
          --${id}-third-button-cta-background-color: ${thirdButtonCtaBackgroundColor};
          --${id}-fourth-button-cta-background-color: ${fourthButtonCtaBackgroundColor};
        }

        @layer text-below {
          --${id}-text-below-font-size: clamp(${textBelowMinimumFontSize}, 1vw, ${textBelowMaximumFontSize});
        }

        @layer columns {
          --${id}-column-horizontal-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
          --${id}-column-vertical-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
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

const HPOneTwoOneStyles = ({ id }) => (
  <style>{`
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
   .${id}-aspect-\\[tablet-side-image\\] {
      aspect-ratio: var(--${id}-tablet-side-image-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-middle-image\\] {
      aspect-ratio: var(--${id}-tablet-middle-image-aspect-ratio);
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
      .${id}-cta-button-width {
      width: 104px;
      height: 32px;
      padding: 8px;
      font-size: 14px;
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
      .${id}-belk-text-clamp-section-title {
      font-size: var(--${id}-section-title-font-size);
      line-height: .85;
      letter-spacing: 0.02em;
    }
      .${id}-cta-button-width {
      width: 140px;
      height: 48px;
      padding: 8px;
      font-size: 16px;
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
      .${id}-cta-button-width {
      width: 167px;
      height: 43px;
      font-size: 18px;
    }

    }

    @media (width >= 80rem) {
   
      .xl\\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
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
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
        align-items: stretch;
        height:100%;
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
      .xl\\:${id}-grid-cols-1-2-1 {
        display:grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
        grid-template-rows: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
        align-items: stretch;
        height:100%;
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
    .${id}-first-button-cta-background-color {
      background-color: var(--${id}-first-button-cta-background-color);
    }
    .${id}-second-button-cta-background-color {
      background-color: var(--${id}-second-button-cta-background-color);
    }
    .${id}-third-button-cta-background-color {
      background-color: var(--${id}-third-button-cta-background-color);
    }
    .${id}-fourth-button-cta-background-color {
      background-color: var(--${id}-fourth-button-cta-background-color);
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
  // Use padding on container (not margin on section) so section width = 100% of padded area and never overflows
  const containerClasses = (() => {
    switch (containerBehavior) {
      case 'max-w-full':
        return 'px-1 overflow-x-hidden [&>div]:w-full [&>div]:max-w-full';
      case 'max-w-inset':
        return 'px-4 md:px-8 overflow-x-hidden [&>div]:w-full [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8';
      case 'max-w-centered':
      default:
        return 'px-4 sm:px-8 md:px-[max(36px,(100vw-1560px)/2)] overflow-x-hidden [&>div]:w-full [&>div]:max-w-[100rem] [&>div]:mx-auto [&>div]:px-5';
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

const HPOneTwoOne = ({ id }) => {
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

  const arrangement = (typeof headerContentArrangement === 'string' ? headerContentArrangement : 'flex-col') || 'flex-col';
  const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : 'center') || 'center';
  const alignmentClass = alignmentMap[arrangement]?.[alignment] ?? alignmentMap['flex-col']['center'];

 const ctaButtonColumns = [
    {
      content: firstButtonCtaContent,
      backgroundColor: `${id}-first-button-cta-background-color`,
      buttonVariant: firstButtonCtaVariant,
      url: firstButtonCtaUrl,
      adobeTag: firstButtonCtaAdobeTag,
    },
    {
      content: secondButtonCtaContent,
      backgroundColor: `${id}-second-button-cta-background-color`,
      buttonVariant: secondButtonCtaVariant,
      url: secondButtonCtaUrl,
      adobeTag: secondButtonCtaAdobeTag,
    },
    {
      content: thirdButtonCtaContent,
      backgroundColor: `${id}-third-button-cta-background-color`,
      buttonVariant: thirdButtonCtaVariant,
      url: thirdButtonCtaUrl,
      adobeTag: thirdButtonCtaAdobeTag,
    },
   {
      content: fourthButtonCtaContent,
      backgroundColor: `${id}-fourth-button-cta-background-color`,
      buttonVariant: fourthButtonCtaVariant,
      url: fourthButtonCtaUrl,
      adobeTag: fourthButtonCtaAdobeTag,
    },
  ];

  const ctaButtonVarNames = ['firstButtonCtaContent', 'secondButtonCtaContent', 'thirdButtonCtaContent', 'fourthButtonCtaContent'];
  const columnVarNames = [
    { eyebrow: 'firstColumnEyebrowContent', headline: 'firstColumnHeadlineContent', subhead: 'firstColumnSubheadContent', cta: 'firstColumnCtaContent', textBelow: 'firstColumnTextBelow' },
    { eyebrow: 'secondColumnEyebrowContent', headline: 'secondColumnHeadlineContent', subhead: 'secondColumnSubheadContent', cta: 'secondColumnCtaContent', textBelow: 'secondColumnTextBelow' },
    { eyebrow: 'thirdColumnEyebrowContent', headline: 'thirdColumnHeadlineContent', subhead: 'thirdColumnSubheadContent', cta: 'thirdColumnCtaContent', textBelow: 'thirdColumnTextBelow' },
    { eyebrow: 'fourthColumnEyebrowContent', headline: 'fourthColumnHeadlineContent', subhead: 'fourthColumnSubheadContent', cta: 'fourthColumnCtaContent', textBelow: 'fourthColumnTextBelow' },
  ];
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
    // Side images: 1st (index 0) and 4th (index 3) use side aspect ratio (496:339)
    if (index === 0 || index === 3) {
      return `md:${id}-aspect-[tablet-side-image] xl:${id}-aspect-[desktop-side-image]`
    }
    // Middle images: 2nd (index 1) and 3rd (index 2) use middle aspect ratio (512:169)
    return `md:${id}-aspect-[tablet-middle-image] xl:${id}-aspect-[desktop-middle-image] `
  }

  // Section width must match container so background never overflows
  const sectionWidthClass = (() => {
    switch (containerBehavior) {
      case 'max-w-full':
        return 'w-full max-w-full';
      case 'max-w-inset':
        return 'w-full max-w-full md:max-w-[var(--breakpoint-3xl)]';
      case 'max-w-centered':
      default:
        return 'w-full max-w-[100rem] mx-auto';
    }
  })();

  return (
    <>
      <HPOneTwoOneStyleVars id={id} />
      <HPOneTwoOneStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div className={`relative min-w-0 py-4 md:py-8 overflow-hidden ${sectionWidthClass} ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color`}>
          {sectionBackgroundImage && sectionBackgroundImage.length>0 && (
            <div className="absolute inset-0 -z-10 w-full h-full min-w-0 overflow-hidden pointer-events-none">
              <PictureResponsiveImage
                images={{
                  mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
                  tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
                  desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
                  largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
                }}
                alt={sectionBackgroundAlt}
                imageClassName="object-cover object-center min-w-0 min-h-0 w-full h-full"
                className="absolute inset-0 w-full h-full max-w-full max-h-full min-w-0 min-h-0"
              />
            </div>
          )}
          {sectionTitle && (
            <div className={`flex flex-col relative w-full font-bold ${alignmentClass} justify-center items-center mb-4 ${id}-container-title-drop-shadow-${sectionTitleDropShadow}`}>
              <span className={`block leading-tight font-black whitespace-normal break-words text-center ${id}-belk-text-clamp-section-title`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>
            </div>
          )}
          {(sectionSubhead || sectionCtaContent) && (
            <div className={`flex ${arrangement} relative w-full font-bold mb-4 ${alignmentClass} items-center justify-center`}>
              {sectionSubhead && (
                <span className={`flex flex-inline whitespace-pre ${id}-belk-text-clamp-subhead`} data-bildit-var-name="sectionSubhead" data-bildit-var-type="RichText">{sectionSubhead}</span>
              )}
              {sectionCtaContent && (
                <Button className={`ml-auto ${id}-belk-text-clamp-cta ${sectionCtaVariant === 'solid' ? `${id}-section-cta-background-color` : ''}`} variant={sectionCtaVariant}><span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span></Button>
              )}
            </div>
          )}
          <div
            className={`relative inset-x-0 w-fit mx-auto grid grid-cols-2
              md:grid-cols-4 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap 
              justify-center gap-2 md:gap-3 lg:gap-4 px-4 
              md:px-8 lg:px-12 pb-6 md:pb-8 lg:pb-10 
              ${id}-container-text-color ${id}-container-font-family`}
          >
            {ctaButtonColumns.map(
              (cta, index) =>
                cta.content && (
                  <WrapperComponent
                    key={index}
                    href={cta.url}
                    data-aali={cta.adobeTag}
                    className="flex items-stretch flex-shrink-0"
                  >
                    <Button
                      className={`${id}-cta-button-width ${id}-belk-text-clamp-cta text-center
                     ${cta.backgroundColor} cursor-pointer
                      ${id}-bg-solid-button`} variant={cta.buttonVariant}>
                      <span data-bildit-var-name={ctaButtonVarNames[index]} data-bildit-var-type="RichText">{cta.content}</span>
                    </Button>
                  </WrapperComponent>
                ),
            )}
          </div>
          <div className={`relative w-full min-w-0 grid sm:${id}-${mobileGridLayout} md:${id}-grid-cols-1-2-1 xl:${id}-grid-cols-1-2-1 ${id}-${gridGap} overflow-hidden ${id}-container-text-color ${id}-container-font-family mx-5 px-2 md:px-16`}>
          {columns.map(({backgroundColor, image, eyebrow, headline, subhead, cta, textBelow}, index) => {
            const v = columnVarNames[index];
            return (
            <WrapperComponent key={index}  className={`w-full min-w-0 cursor-pointer xl:${id}-grid-item-${index + 1} md:${id}-grid-item-${index + 1}`}  href={cta.url} data-aali={cta.adobeTag}>
              <PictureResponsiveImage
                images={{
                  mobile: buildImageUrl(image.slug, 'm', image.preset),
                  tablet: buildImageUrl(image.slug, 't', image.preset),
                  desktop: buildImageUrl(image.slug, 'd', image.preset),
                  largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                }}
                alt={image.altText}
                imageClassName="absolute z-10 object-cover object-center"
                className={`flex w-full relative ${id}-aspect-[mobile-column] ${getDesktopAspectRatioClass(index)} rounded-lg md:rounded-2xl ${backgroundColor}`}
              >
                <div className={`w-full flex flex-col z-10 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}>
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
                    />
                  ) : (
                    <p className={`whitespace-pre ${id}-belk-text-clamp-eyebrow font-bold`} data-bildit-var-name={v.eyebrow} data-bildit-var-type="RichText">{eyebrow.content}</p>
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
                    />
                  ) : (
                      <h2 className={`my-1 font-bold whitespace-pre ${id}-belk-text-clamp-headline`} data-bildit-var-name={v.headline} data-bildit-var-type="RichText">{headline.content}</h2>
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
                    />
                  ) : (
                    <h3 className={`my-1 whitespace-pre ${id}-belk-text-clamp-subhead`} data-bildit-var-name={v.subhead} data-bildit-var-type="RichText">{subhead.content}</h3>
                  )}

                  {(cta.content) && (
                    <Button className={`mt-2 mb-1 ${id}-belk-text-clamp-cta cursor-pointer ${id}-bg-solid-button ${textAlignment[columnHorizontalAlignment]}`} variant={ctaVariant}><span data-bildit-var-name={v.cta} data-bildit-var-type="RichText">{cta.content}</span></Button>
                  )}
                </div>
              </PictureResponsiveImage>
              {textBelow.content && (
                <p className={`whitespace-pre ${id}-belk-text-clamp-text-below font-bold text-center my-2`} data-bildit-var-name={v.textBelow} data-bildit-var-type="RichText">{textBelow.content}</p>
              )}
            </WrapperComponent>
          );
          })}
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default HPOneTwoOne;