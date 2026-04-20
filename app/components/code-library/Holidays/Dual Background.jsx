"use client"
// @version v1
import React, { useState, useRef, useEffect, useCallback, useLayoutEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group { 1. Section Layout }
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-2");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-xl");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-xl");
const desktopContainerAspectRatioWidth = $(desktopContainerAspectRatioWidth:String="1600");
const desktopContainerAspectRatioHeight = $(desktopContainerAspectRatioHeight:String="560");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="704");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="504");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="343");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="408");
const desktopInnerContainerAspectRatioWidth = $(desktopInnerContainerAspectRatioWidth:String="1520");
const desktopInnerContainerAspectRatioHeight = $(desktopInnerContainerAspectRatioHeight:String="480");
const tabletInnerContainerAspectRatioWidth = $(tabletInnerContainerAspectRatioWidth:String="656");
const tabletInnerContainerAspectRatioHeight = $(tabletInnerContainerAspectRatioHeight:String="456");
const mobileInnerContainerAspectRatioWidth = $(mobileInnerContainerAspectRatioWidth:String="311");
const mobileInnerContainerAspectRatioHeight = $(mobileInnerContainerAspectRatioHeight:String="376");

// endgroup

// group { 2. Outer Container Background }
const outerContainerBackgroundColor = $(outerContainerBackgroundColor:Color);
const outerContainerBackgroundImage = $(outerContainerBackgroundImage:String="wkxx_2025_test_productstorycarousel_slidercopybottom_background");
const outerContainerBackgroundImagePreset = $(outerContainerBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const outerContainerBackgroundAlt = $(outerContainerBackgroundAlt:String="");
// endgroup

// group { 3. Inner Container Background }
const innerContainerBackgroundColor = $(innerContainerBackgroundColor:Color="#CAC9B7");
const innerContainerBackgroundImage = $(innerContainerBackgroundImage:String="");
const innerContainerBackgroundImagePreset = $(innerContainerBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const innerContainerBackgroundAlt = $(innerContainerBackgroundAlt:String="");
const innerContainerRoundedCorners = $(innerContainerRoundedCorners:Dropdown[None|rounded-none,Small|rounded-sm,Medium|rounded-md,Large|rounded-lg,Extra Large|rounded-xl]="rounded-xl");
// endgroup

// group { 3.1 Inner Section Content }
const innerCopyHorizontalAlign = $(innerCopyHorizontalAlign:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const innerCopyVerticalAlign = $(innerCopyVerticalAlign:Dropdown[Top|justify-start,Middle|justify-center,Bottom|justify-end]="justify-center");
const eyebrowContent = $(eyebrowContent:RichText="BELK DEALS";color="#000000");
const headlineContent = $(headlineContent:RichText="Up to 60% Off";color="#000000");
const subheadContent = $(subheadContent:RichText="Winter Style Refresh";color="#000000");
const ctaContent = $(ctaContent:RichText="Shop Now";color="#000000");
const ctaUrl = $(ctaUrl:String="/";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="fs-homepage-wk51-2026-4C-BelkDealsShopAll";required=true);
// endgroup

// group { 4. Card Layout }
const desktopCardAspectRatioWidth = $(desktopCardAspectRatioWidth:String="290");
const desktopCardAspectRatioHeight = $(desktopCardAspectRatioHeight:String="328");
const tabletCardAspectRatioWidth = $(tabletCardAspectRatioWidth:String="290");
const tabletCardAspectRatioHeight = $(tabletCardAspectRatioHeight:String="293");
const mobileCardAspectRatioWidth = $(mobileCardAspectRatioWidth:String="248");
const mobileCardAspectRatioHeight = $(mobileCardAspectRatioHeight:String="143");
const cardRoundedCorners = $(cardRoundedCorners:Dropdown[None|rounded-none,Small|rounded-sm,Medium|rounded-md,Large|rounded-lg,Extra Large|rounded-xl]="rounded-xl");
// endgroup

// group { 5. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const headlineMinimumFontSize = $(headlineMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.5rem");
const headlineMaximumFontSize = $(headlineMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="3.375rem");
const subheadMinimumFontSize = $(subheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
// endgroup

// group { 6. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
// endgroup

// group { 7.1 Card 1 }
const firstCardBackgroundImage = $(firstCardBackgroundImage:String="wk51_2026_homepage_dealcard_1");
const firstCardBackgroundImageAltText = $(firstCardBackgroundImageAltText:String="A brown sweater and jeans. Up to 60% off women’s apparel.");
const firstCardBackgroundImagePreset = $(firstCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstCardCtaUrl = $(firstCardCtaUrl:String="/";required=true);
const firstCardCtaAdobeTag = $(firstCardCtaAdobeTag:String="fs-homepage-wk51-2026-4C-BelkDealsHeadline1";required=true);
const firstCardTextBelow = $(firstCardTextBelow:RichText="Up to 60% Off Women’s Apparel*";color="#000000");
// endgroup

// group { 7.2 Card 2 }
const secondCardBackgroundImage = $(secondCardBackgroundImage:String="wk51_2026_homepage_dealcard_3");
const secondCardBackgroundImageAltText = $(secondCardBackgroundImageAltText:String="Two brown handbags with charms. Up to 40% off handbags.");
const secondCardBackgroundImagePreset = $(secondCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondCardCtaUrl = $(secondCardCtaUrl:String="/";required=true);
const secondCardCtaAdobeTag = $(secondCardCtaAdobeTag:String="fs-homepage-wk51-2026-4C-BelkDeals7";required=true);
const secondCardTextBelow = $(secondCardTextBelow:RichText="Up to 40% Off Handbags*";color="#000000");
// endgroup

// group { 7.3 Card 3 }
const thirdCardBackgroundImage = $(thirdCardBackgroundImage:String="wk51_2026_homepage_dealcard_2");
const thirdCardBackgroundImageAltText = $(thirdCardBackgroundImageAltText:String="A stack of sweaters. 50% off men’s apparel.");
const thirdCardBackgroundImagePreset = $(thirdCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdCardCtaUrl = $(thirdCardCtaUrl:String="/";required=true);
const thirdCardCtaAdobeTag = $(thirdCardCtaAdobeTag:String="fs-homepage-wk51-2026-4C-BelkDealsHeadline2";required=true);
const thirdCardTextBelow = $(thirdCardTextBelow:RichText="50% Off Men’s Apparel*";color="#000000");
// endgroup

// group { 7.4 Card 4 }
const fourthCardBackgroundImage = $(fourthCardBackgroundImage:String="wk51_2026_homepage_dealcard_4");
const fourthCardBackgroundImageAltText = $(fourthCardBackgroundImageAltText:String="A blue and white bedding set. Up to 50% off home.");
const fourthCardBackgroundImagePreset = $(fourthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthCardCtaUrl = $(fourthCardCtaUrl:String="/";required=true);
const fourthCardCtaAdobeTag = $(fourthCardCtaAdobeTag:String="fs-homepage-wk51-2026-4C-BelkDeals5";required=true);
const fourthCardTextBelow = $(fourthCardTextBelow:RichText="Up to 50% Off Home*";color="#000000");
// endgroup

// group { 7.5 Card 5 }
const fifthCardBackgroundImage = $(fifthCardBackgroundImage:String="");
const fifthCardBackgroundImageAltText = $(fifthCardBackgroundImageAltText:String="");
const fifthCardBackgroundImagePreset = $(fifthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fifthCardCtaUrl = $(fifthCardCtaUrl:String="/";required=true);
const fifthCardCtaAdobeTag = $(fifthCardCtaAdobeTag:String="";required=true);
const fifthCardTextBelow = $(fifthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.6 Card 6 }
const sixthCardBackgroundImage = $(sixthCardBackgroundImage:String="");
const sixthCardBackgroundImageAltText = $(sixthCardBackgroundImageAltText:String="");
const sixthCardBackgroundImagePreset = $(sixthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sixthCardCtaUrl = $(sixthCardCtaUrl:String="/";required=true);
const sixthCardCtaAdobeTag = $(sixthCardCtaAdobeTag:String="";required=true);
const sixthCardTextBelow = $(sixthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.7 Card 7 }
const seventhCardBackgroundImage = $(seventhCardBackgroundImage:String="");
const seventhCardBackgroundImageAltText = $(seventhCardBackgroundImageAltText:String="");
const seventhCardBackgroundImagePreset = $(seventhCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const seventhCardCtaUrl = $(seventhCardCtaUrl:String="/";required=true);
const seventhCardCtaAdobeTag = $(seventhCardCtaAdobeTag:String="";required=true);
const seventhCardTextBelow = $(seventhCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.8 Card 8 }
const eighthCardBackgroundImage = $(eighthCardBackgroundImage:String="");
const eighthCardBackgroundImageAltText = $(eighthCardBackgroundImageAltText:String="");
const eighthCardBackgroundImagePreset = $(eighthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const eighthCardCtaUrl = $(eighthCardCtaUrl:String="/";required=true);
const eighthCardCtaAdobeTag = $(eighthCardCtaAdobeTag:String="";required=true);
const eighthCardTextBelow = $(eighthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.9 Card 9 }
const ninthCardBackgroundImage = $(ninthCardBackgroundImage:String="");
const ninthCardBackgroundImageAltText = $(ninthCardBackgroundImageAltText:String="");
const ninthCardBackgroundImagePreset = $(ninthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const ninthCardCtaUrl = $(ninthCardCtaUrl:String="/";required=true);
const ninthCardCtaAdobeTag = $(ninthCardCtaAdobeTag:String="";required=true);
const ninthCardTextBelow = $(ninthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.10 Card 10 }
const tenthCardBackgroundImage = $(tenthCardBackgroundImage:String="");
const tenthCardBackgroundImageAltText = $(tenthCardBackgroundImageAltText:String="");
const tenthCardBackgroundImagePreset = $(tenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const tenthCardCtaUrl = $(tenthCardCtaUrl:String="/";required=true);
const tenthCardCtaAdobeTag = $(tenthCardCtaAdobeTag:String="";required=true);
const tenthCardTextBelow = $(tenthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.11 Card 11 }
const eleventhCardBackgroundImage = $(eleventhCardBackgroundImage:String="");
const eleventhCardBackgroundImageAltText = $(eleventhCardBackgroundImageAltText:String="");
const eleventhCardBackgroundImagePreset = $(eleventhCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const eleventhCardCtaUrl = $(eleventhCardCtaUrl:String="/";required=true);
const eleventhCardCtaAdobeTag = $(eleventhCardCtaAdobeTag:String="";required=true);
const eleventhCardTextBelow = $(eleventhCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.12 Card 12 }
const twelfthCardBackgroundImage = $(twelfthCardBackgroundImage:String="");
const twelfthCardBackgroundImageAltText = $(twelfthCardBackgroundImageAltText:String="");
const twelfthCardBackgroundImagePreset = $(twelfthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const twelfthCardCtaUrl = $(twelfthCardCtaUrl:String="/";required=true);
const twelfthCardCtaAdobeTag = $(twelfthCardCtaAdobeTag:String="";required=true);
const twelfthCardTextBelow = $(twelfthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.13 Card 13 }
const thirteenthCardBackgroundImage = $(thirteenthCardBackgroundImage:String="");
const thirteenthCardBackgroundImageAltText = $(thirteenthCardBackgroundImageAltText:String="");
const thirteenthCardBackgroundImagePreset = $(thirteenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirteenthCardCtaUrl = $(thirteenthCardCtaUrl:String="/";required=true);
const thirteenthCardCtaAdobeTag = $(thirteenthCardCtaAdobeTag:String="";required=true);
const thirteenthCardTextBelow = $(thirteenthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.14 Card 14 }
const fourteenthCardBackgroundImage = $(fourteenthCardBackgroundImage:String="");
const fourteenthCardBackgroundImageAltText = $(fourteenthCardBackgroundImageAltText:String="");
const fourteenthCardBackgroundImagePreset = $(fourteenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourteenthCardCtaUrl = $(fourteenthCardCtaUrl:String="/";required=true);
const fourteenthCardCtaAdobeTag = $(fourteenthCardCtaAdobeTag:String="";required=true);
const fourteenthCardTextBelow = $(fourteenthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.15 Card 15 }
const fifteenthCardBackgroundImage = $(fifteenthCardBackgroundImage:String="");
const fifteenthCardBackgroundImageAltText = $(fifteenthCardBackgroundImageAltText:String="");
const fifteenthCardBackgroundImagePreset = $(fifteenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fifteenthCardCtaUrl = $(fifteenthCardCtaUrl:String="/";required=true);
const fifteenthCardCtaAdobeTag = $(fifteenthCardCtaAdobeTag:String="";required=true);
const fifteenthCardTextBelow = $(fifteenthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.16 Card 16 }
const sixteenthCardBackgroundImage = $(sixteenthCardBackgroundImage:String="");
const sixteenthCardBackgroundImageAltText = $(sixteenthCardBackgroundImageAltText:String="");
const sixteenthCardBackgroundImagePreset = $(sixteenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sixteenthCardCtaUrl = $(sixteenthCardCtaUrl:String="/";required=true);
const sixteenthCardCtaAdobeTag = $(sixteenthCardCtaAdobeTag:String="";required=true);
const sixteenthCardTextBelow = $(sixteenthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.17 Card 17 }
const seventeenthCardBackgroundImage = $(seventeenthCardBackgroundImage:String="");
const seventeenthCardBackgroundImageAltText = $(seventeenthCardBackgroundImageAltText:String="");
const seventeenthCardBackgroundImagePreset = $(seventeenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const seventeenthCardCtaUrl = $(seventeenthCardCtaUrl:String="/";required=true);
const seventeenthCardCtaAdobeTag = $(seventeenthCardCtaAdobeTag:String="";required=true);
const seventeenthCardTextBelow = $(seventeenthCardTextBelow:RichText="";color="#000000");
// endgroup

// group { 7.18 Card 18 }
const eighteenthCardBackgroundImage = $(eighteenthCardBackgroundImage:String="");
const eighteenthCardBackgroundImageAltText = $(eighteenthCardBackgroundImageAltText:String="");
const eighteenthCardBackgroundImagePreset = $(eighteenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const eighteenthCardCtaUrl = $(eighteenthCardCtaUrl:String="/";required=true);
const eighteenthCardCtaAdobeTag = $(eighteenthCardCtaAdobeTag:String="";required=true);
const eighteenthCardTextBelow = $(eighteenthCardTextBelow:RichText="";color="#000000");
// endgroup

// group {8. Carousel Settings}
const interval = $(interval:String="3");
const autoplay = $(autoplay:Boolean="true");
const pagination = $(pagination:Boolean="false");
const loop = $(loop:Boolean="false");
const navigationBackgroundColor = $(navigationBackgroundColor:Color="#FFFFFF");
// endgroup

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
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
  if (suffix === 'd' || suffix === 'l') {
    deviceSlug = slug;
  }

  const baseUrl = "https://belk.scene7.com/is";
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

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;

/**
 * Provides a standardized container layout behavior (max widths, padding, centering).
 *
 * @param {Object} props
 * @param {"max-w-full"|"max-w-inset"|"max-w-centered"} props.containerBehavior - Determines the container CSS pattern.
 * @param {string} [props.className=""] - Additional class names to apply to the container wrapper.
 * @param {React.ReactNode} props.children - Child content placed inside the container.
 * @returns {JSX.Element} Container wrapper element.
 */
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
        return 'px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:w-full';
      case 'max-w-centered':
        return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem]';
      default:
        return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem]'; // Default to centered
    }
  })();

  return (
    <div className={`${containerClasses} ${className}`}>
      {children}
    </div>
  );
};

/**
 * @param {Object} props
 * @param {"underline"|"solid"} [props.variant="underline"] - Visual style variant of the button.
 * @param {string} [props.className="relative flex cursor-pointer"] - Additional class names to apply.
 * @param {React.ReactNode} props.children - Button content (text or nodes).
 * @returns {JSX.Element} Rendered button element.
 */
const Button = ({
  variant = "underline",
  className = "relative flex cursor-pointer",
  children,
  ...rest
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button ${className} px-4 py-2 rounded-md`} {...rest}>
        <span className="relative inline-block">
          {children}
        </span>
      </button>
    )
  }
  return (
    <button className={`flex-col font-bold gap-1.5 belk-button ${className}`} {...rest}>
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
 * Responsive image wrapper that renders a <picture> element with multiple sources
 * and falls back to Next/Image for the actual image element. It also provides
 * a simple error handler to flag when any image fails to load.
 *
 * @param {Object} props
 * @param {Object} props.images - Object containing image URLs for breakpoints.
 * @param {string} [props.images.mobile] - Mobile image src.
 * @param {string} [props.images.tablet] - Tablet image src.
 * @param {string} [props.images.desktop] - Desktop image src.
 * @param {string} [props.images.largeDesktop] - Large desktop image src.
 * @param {string} props.alt - Alt text for the image.
 * @param {string} [props.className=""] - Wrapper class names.
 * @param {string} [props.imageClassName="-z-1 object-cover object-center"] - Class names applied to the Image element.
 * @param {React.ReactNode} [props.children] - Optional children rendered inside the wrapper (overlays, captions, etc.).
 * @returns {JSX.Element} Picture-based responsive image container.
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
  const hasAnyImage = (mobile || tablet || desktop || largeDesktop) && !hasError && isValidImageUrl(fallbackSrc);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasAnyImage && isValidImageUrl(fallbackSrc) && (
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

const textAlignment = {
  'items-start': 'text-left',
  'items-center': 'text-center',
  'items-end': 'text-right',
};

/**
 * Small wrapper that renders a Next.js Link when an href is provided, otherwise
 * renders its children without wrapping. Useful for optional link wrappers.
 *
 * @param {Object} props
 * @param {string} [props.href] - Optional href for the link.
 * @param {React.ReactNode} props.children - Child nodes to render/wrap.
 * @returns {JSX.Element} Link-wrapped children or plain children.
 */
const SafeLink = ({ href, children, ...props }) => (
  href ? <Link {...props} href={href}>{children}</Link> : <>{children}</>
)

/**
 * A fully-featured carousel component with support for infinite looping, autoplay,
 * drag/swipe interactions, keyboard navigation, and responsive configuration.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Slide elements to display in the carousel.
 * @param {boolean} [props.loop=false] - Enable infinite looping.
 * @param {number|Object} [props.perPage=1] - Number of slides visible per page. Supports responsive breakpoints: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5, 2xl: 6 }.
 * @param {number} [props.perMove=1] - Number of slides to move on navigation.
 * @param {number|string} [props.gap=0] - Gap between slides (CSS value: number for px, or string like '1rem').
 * @param {number|string|Object} [props.padding=0] - Padding around slides. Can be a number/string for uniform padding, { left, right } for asymmetric, or responsive object.
 * @param {number} [props.clones] - Number of clones per side for infinite loop (auto-calculated if not provided).
 * @param {number|string} [props.fixedWidth] - Fixed width for each slide (CSS value).
 * @param {boolean} [props.autoWidth=false] - Allow slides to have auto width.
 * @param {boolean|string} [props.autoplay=false] - Enable autoplay (use 'pause' to pause).
 * @param {number} [props.interval=3000] - Autoplay interval in milliseconds.
 * @param {boolean} [props.pauseOnHover=true] - Pause autoplay on hover.
 * @param {boolean} [props.pauseOnFocus=true] - Pause autoplay on focus.
 * @param {boolean} [props.drag=true] - Enable drag/swipe interactions. Automatically detects vertical swipes for page scrolling.
 * @param {number} [props.swipeAngle=45] - Maximum angle (in degrees) for horizontal swipe detection. Lower values require more horizontal movement.
 * @param {Object} [props.dragMinThreshold] - Minimum drag distance (in pixels) to trigger slide change.
 * @param {number} [props.dragMinThreshold.mouse=10] - Threshold for mouse drag.
 * @param {number} [props.dragMinThreshold.touch=10] - Threshold for touch drag.
 * @param {number} [props.flickVelocityThreshold=0.1] - Minimum velocity (px/ms) for flick detection.
 * @param {string} [props.className=''] - Additional class names for the carousel container.
 * @param {number} [props.transitionMs=400] - Transition duration in milliseconds.
 * @param {string} [props.ariaLabel='Carousel'] - ARIA label for accessibility.
 * @param {boolean|Object} [props.navigation=true] - Show navigation arrows. Supports responsive breakpoints: navigation={false} or navigation={{ xs: false, lg: true }}.
 * @param {Function} [props.renderPrevArrow] - Custom render function for previous arrow. Receives { onClick, onPointerDown }.
 * @param {Function} [props.renderNextArrow] - Custom render function for next arrow. Receives { onClick, onPointerDown }.
 * @param {string} [props.navigationClassName=''] - Additional class names for the default navigation buttons (not applied when using custom render functions).
 * @param {boolean} [props.pagination=false] - Show pagination dots.
 * @returns {JSX.Element} Rendered carousel component.
 *
 * @example
 * // Basic usage
 * <Carousel perPage={3} gap={16}>
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 * </Carousel>
 *
 * @example
 * // Responsive with custom navigation
 * <Carousel
 *   perPage={{ xs: 1, md: 2, lg: 4 }}
 *   navigation={{ xs: false, lg: true }}
 *   padding={{ xs: 16, lg: 40 }}
 *   loop={true}
 * >
 *   {slides}
 * </Carousel>
 */
export const Carousel = ({
  children,
  loop = false,
  perPage = 1,
  perMove = 1,
  gap = 0,
  padding = 0,
  clones: clonesOption,
  fixedWidth,
  autoWidth = false,
  autoplay = false,
  interval = 3000,
  pauseOnHover = true,
  pauseOnFocus = true,
  drag = true,
  swipeAngle = 45,
  dragMinThreshold = { mouse: 10, touch: 10 },
  flickVelocityThreshold = 0.1,
  className = '',
  transitionMs = 400,
  ariaLabel = 'Carousel',
  navigation = true,
  renderPrevArrow,
  renderNextArrow,
  pagination = false,
  navigationClassName
}) => {
  const MULTIPLIER = 2;
  const CLASS_CLONE = 'is-clone';

  const isNum = useCallback((value) => typeof value === 'number' && !Number.isNaN(value), []);

  const unit = useCallback((value) => {
    if (value == null) return null;
    return isNum(value) ? `${value}px` : String(value);
  }, [isNum]);

  const px = useCallback((length, context) => {
    if (length == null) return 0;
    if (isNum(length)) return length;
    const str = String(length).trim();
    if (str.endsWith('px')) return parseFloat(str);
    const element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.visibility = 'hidden';
    element.style.width = str;
    element.style.height = '0';
    (context || document.body).appendChild(element);
    const width = element.getBoundingClientRect().width;
    element.remove();
    return width || 0;
  }, [isNum])

  const getResponsiveValue = useCallback((value, windowWidth) => {
    if (typeof value !== 'object' || value === null || isNum(value) || typeof value === 'string') {
      return value;
    }

    if ('left' in value || 'right' in value) {
      return value;
    }

    const breakpoints = [
      { key: 'xs', min: 0 },
      { key: 'sm', min: 640 },
      { key: 'md', min: 768 },
      { key: 'lg', min: 1024 },
      { key: 'xl', min: 1280 },
      { key: '2xl', min: 1536 },
    ];

    let matchedValue = value.xs ?? value.default ?? 0;

    for (const bp of breakpoints) {
      if (windowWidth >= bp.min && value[bp.key] !== undefined) {
        matchedValue = value[bp.key];
      }
    }

    return matchedValue;
  }, [isNum]);

  const normalizePadding = useCallback((padding) => {
    if (isNum(padding) || typeof padding === 'string') return { left: padding, right: padding };
    return { left: padding?.left ?? 0, right: padding?.right ?? 0 };
  }, [isNum])

  const asElement = useCallback((node) => {
    return React.isValidElement(node) ? node : <span>{node}</span>;
  }, [])

  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const listRef = useRef(null);
  const isNormalizing = useRef(false);

  const slides = useMemo(() => React.Children.toArray(children), [children]);
  const slideCount = slides.length;

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [slideSizeInPixels, setSlideSizeInPixels] = useState(0);
  const [gapInPixels, setGapInPixels] = useState(0);

  const responsivePadding = useMemo(() => getResponsiveValue(padding, windowWidth), [padding, windowWidth, getResponsiveValue]);
  const paddingValues = normalizePadding(responsivePadding);

  const responsivePerPage = useMemo(() => {
    const value = getResponsiveValue(perPage, windowWidth);
    return Math.max(1, Number(value) || 1);
  }, [perPage, windowWidth, getResponsiveValue]);

  const responsiveNavigation = useMemo(() => {
    const value = getResponsiveValue(navigation, windowWidth);
    return value !== false;
  }, [navigation, windowWidth, getResponsiveValue]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimation, setHasAnimation] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const dragStateRef = useRef({
    pointerId: null,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastTimestamp: 0,
    startTranslate: 0,
    moved: false,
    suppressClick: false,
    capturedPointerId: null,
    hasPointerCapture: false,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragLockedAxis, setDragLockedAxis] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);

  const computeCloneCount = useCallback(() => {
    if (!loop) return 0;
    if (isNum(clonesOption)) return Math.max(0, clonesOption);
    const track = trackRef.current;
    if (!track || slideCount === 0) return responsivePerPage * MULTIPLIER;
    const trackWidth = track.getBoundingClientRect().width;
    const gapSize = px(gap, rootRef.current);
    if (fixedWidth != null) {
      const fixedWidthValue = px(fixedWidth, rootRef.current);
      const fixedSize = fixedWidthValue + gapSize;
      const fixedCount = fixedSize > 0 ? Math.ceil(trackWidth / fixedSize) : 0;
      if (fixedCount) return fixedCount;
    }
    if (autoWidth) return slideCount;
    return responsivePerPage * MULTIPLIER;
  }, [autoWidth, fixedWidth, clonesOption, loop, responsivePerPage, slideCount, gap, isNum, px]);

  const [clonesPerSide, setClonesPerSide] = useState(0);

  const measure = useCallback(() => {
    const root = rootRef.current;
    const list = listRef.current;
    if (!root || !list) return;
    const gapSize = px(gap, root);
    setGapInPixels(gapSize);
    const firstRealSlide = list.querySelector('li[data-role="real"]') || list.children[0];
    if (firstRealSlide) {
      const rect = firstRealSlide.getBoundingClientRect();
      setSlideSizeInPixels(rect.width + gapSize);
    }
    setClonesPerSide(computeCloneCount());
  }, [gap, computeCloneCount, px]);

  // Initial measurement on mount and whenever measure function changes
  useLayoutEffect(() => { measure(); }, [measure]);

  // Track window width for responsive values and re-measure on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      measure();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [measure]);

  // Re-measure slides when list or slide dimensions change
  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof ResizeObserver === 'undefined') return;
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(list);
    const firstRealSlide = list.querySelector('li[data-role="real"]');
    if (firstRealSlide) resizeObserver.observe(firstRealSlide);
    return () => resizeObserver.disconnect();
  }, [measure]);

  const headClones = useMemo(() => {
    const count = clonesPerSide;
    if (!count) return [];
    const array = [];
    for (let i = 0; i < count; i++) {
      const realIndex = (slideCount - 1 - i + slideCount) % slideCount;
      const node = asElement(slides[realIndex]);
      const classes = (node.props?.className || '') + ' ' + CLASS_CLONE;
      array.push(React.cloneElement(node, { key: `h-${i}-${realIndex}`, 'data-clone': '', className: classes }));
    }
    return array.reverse();
  }, [clonesPerSide, slideCount, asElement, slides]);

  const tailClones = useMemo(() => {
    const count = clonesPerSide;
    if (!count) return [];
    const array = [];
    for (let i = 0; i < count; i++) {
      const realIndex = i % slideCount;
      const node = asElement(slides[realIndex]);
      const classes = (node.props?.className || '') + ' ' + CLASS_CLONE;
      array.push(React.cloneElement(node, { key: `t-${i}-${realIndex}`, 'data-clone': '', className: classes }));
    }
    return array;
  }, [clonesPerSide, slideCount, asElement, slides]);

  const extendedSlides = useMemo(() => [...headClones, ...slides, ...tailClones], [headClones, slides, tailClones]);

  // Initialize carousel to start at the first real slide (after head clones)
  useEffect(() => {
    if (extendedSlides.length && clonesPerSide) {
      setCurrentIndex(clonesPerSide);
      setHasAnimation(false);
    }
  }, [extendedSlides.length, clonesPerSide]);

  // Re-enable animation after it's been disabled
  useEffect(() => {
    if (!hasAnimation) requestAnimationFrame(() => setHasAnimation(true));
  }, [hasAnimation]);

  // Keep a ref of current index for autoplay to avoid stale closures
  const indexRef = useRef(currentIndex);
  useEffect(() => { indexRef.current = currentIndex; }, [currentIndex]);

  /**
   * Autoplay: Automatically advances slides at specified intervals
   * - Uses recursive setTimeout instead of setInterval for better control
   * - Pauses when user hovers, focuses, or drags the carousel
   * - Supports per-slide custom intervals via data-splide-interval attribute
   * - Uses indexRef to avoid stale closures (dependencies don't include currentIndex)
   * - Cleanup ensures timer is cancelled when dependencies change or component unmounts
   */
  useEffect(() => {
    if (!autoplay || slideCount <= responsivePerPage) return;
    if (autoplay === 'pause') return;

    const list = listRef.current;
    const getIntervalForSlide = (index) => {
      const listItem = list?.children[index];
      const override = listItem?.querySelector('[data-splide-interval]');
      const value = override ? Number(override.getAttribute('data-splide-interval')) : undefined;
      return (value && !Number.isNaN(value)) ? value : interval;
    };

    let cancelled = false;
    let timerId;
    const tick = () => {
      if (cancelled) return;
      if ((pauseOnHover && isHovered) || (pauseOnFocus && isFocused) || isDragging) {
        timerId = window.setTimeout(tick, Math.max(200, interval));
        return;
      }
      const current = indexRef.current;
      const moveAmount = Math.max(1, perMove);

      if (!loop) {
        const maxIndex = slideCount - responsivePerPage;
        if (current >= maxIndex) {
          return;
        }
        const nextIndex = Math.min(maxIndex, current + moveAmount);
        const duration = Math.max(200, getIntervalForSlide(current));
        timerId = window.setTimeout(() => { setCurrentIndex(nextIndex); tick(); }, duration);
      } else {
        const duration = Math.max(200, getIntervalForSlide(current));
        timerId = window.setTimeout(() => { setCurrentIndex((i) => i + moveAmount); tick(); }, duration);
      }
    };
    tick();
    return () => { cancelled = true; if (timerId) clearTimeout(timerId); };
  }, [autoplay, interval, pauseOnHover, pauseOnFocus, isHovered, isFocused, isDragging, slideCount, perPage, perMove, loop, responsivePerPage]);

  const jumpSilently = (target) => {
    const element = listRef.current;
    if (!element) return;
    isNormalizing.current = true;
    setHasAnimation(false);
    setCurrentIndex(target);
    requestAnimationFrame(() => {
      element.getBoundingClientRect();
      requestAnimationFrame(() => { setHasAnimation(true); isNormalizing.current = false; });
    });
  }

  /**
   * Infinite loop: Creates seamless looping by jumping between clones and real slides
   * - When transition reaches a clone slide, instantly jump to corresponding real slide
   * - Example: If user slides past last real slide into tail clones, jump back to first real slide
   * - jumpSilently() disables animation temporarily to make the jump invisible
   * - isNormalizing flag prevents recursive transition events during the jump
   * - This creates the illusion of infinite content without actually duplicating everything
   */
  useEffect(() => {
    const element = listRef.current;
    if (!element) return;
    const handleTransitionEnd = (event) => {
      if (event.target !== element || event.propertyName !== 'transform') return;
      if (!loop || !clonesPerSide || isNormalizing.current) return;
      const firstRealIndex = clonesPerSide;
      const lastRealIndex = clonesPerSide + slideCount - 1;
      if (currentIndex > lastRealIndex) jumpSilently(currentIndex - slideCount);
      else if (currentIndex < firstRealIndex) jumpSilently(currentIndex + slideCount);
    };
    element.addEventListener('transitionend', handleTransitionEnd);
    return () => element.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, loop, clonesPerSide, slideCount]);

  const canSlide = slideCount > responsivePerPage;

  const isAtStart = !loop && currentIndex <= 0;
  const isAtEnd = !loop && currentIndex >= slideCount - responsivePerPage;

  const goToSlide = (index) => {
    if (!canSlide) return;

    if (!loop) {
      const minIndex = 0;
      const maxIndex = slideCount - responsivePerPage;
      const clampedIndex = Math.max(minIndex, Math.min(maxIndex, index));
      setCurrentIndex(clampedIndex);
    } else {
      setCurrentIndex(index);
    }
  };

  const goToNext = () => {
    if (!loop) {
      const maxIndex = slideCount - responsivePerPage;
      if (currentIndex >= maxIndex) return;

      const moveAmount = Math.max(1, perMove);
      const nextIndex = Math.min(maxIndex, currentIndex + moveAmount);

      goToSlide(nextIndex);
    } else {
      goToSlide(currentIndex + Math.max(1, perMove));
    }
  };

  const goToPrevious = () => {
    if (!loop) {
      const minIndex = 0;
      if (currentIndex <= minIndex) return;

      const moveAmount = Math.max(1, perMove);
      const prevIndex = Math.max(minIndex, currentIndex - moveAmount);

      goToSlide(prevIndex);
    } else {
      goToSlide(currentIndex - Math.max(1, perMove));
    }
  };

  const handleKeyDown = (event) => {
    if (!canSlide) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); goToNext(); }
    if (event.key === 'ArrowLeft')  { event.preventDefault(); goToPrevious(); }
  };

  const calculateAngle = (deltaX, deltaY) => Math.abs(Math.atan2(Math.abs(deltaY), Math.abs(deltaX)) * 180 / Math.PI);
  const getThreshold = (pointerType) => pointerType === 'touch' ? (dragMinThreshold?.touch ?? 10) : (dragMinThreshold?.mouse ?? 0);

  const handlePointerDown = (event) => {
    if (!drag || !canSlide) return;
    if (event.button != null && event.button !== 0) return;

    const state = dragStateRef.current;
    setIsDragging(true);
    setDragLockedAxis(null);
    state.pointerId = event.pointerId != null ? event.pointerId : 'mouse';
    state.capturedPointerId = event.pointerId ?? null;
    state.hasPointerCapture = false;
    state.startX = event.clientX;
    state.startY = event.clientY;
    state.lastX = event.clientX;
    state.lastTimestamp = performance.now();
    state.startTranslate = -(currentIndex * slideSizeInPixels);
    state.moved = false;
    state.suppressClick = false;

    setHasAnimation(false);
    setDragOffset(0);
  };

  const handlePointerMove = (event) => {
    const state = dragStateRef.current;
    if (!isDragging || (state.pointerId !== (event.pointerId != null ? event.pointerId : 'mouse'))) return;

    const deltaX = event.clientX - state.startX;
    const deltaY = event.clientY - state.startY;

    if (!dragLockedAxis) {
      const angle = calculateAngle(deltaX, deltaY);
      if (deltaX === 0 && deltaY === 0) return;
      const lockedAxis = angle <= swipeAngle ? 'x' : 'y';
      setDragLockedAxis(lockedAxis);

      // If locked to vertical axis, stop dragging and allow normal scroll
      if (lockedAxis === 'y') {
        setIsDragging(false);
        state.pointerId = null;
        state.capturedPointerId = null;
      }
      return;
    }

    if (dragLockedAxis === 'x') {
      const threshold = getThreshold(event.pointerType);
      if (Math.abs(deltaX) > threshold) {
        state.moved = true;
        state.suppressClick = true;
        if (!state.hasPointerCapture && state.capturedPointerId != null) {
          try {
            event.currentTarget.setPointerCapture?.(state.capturedPointerId);
            state.hasPointerCapture = true;
          } catch (_) {}
        }
        event.preventDefault();
        setDragOffset(deltaX);
      }
      const now = performance.now();
      if (now - state.lastTimestamp > 16) {
        state.lastX = event.clientX;
        state.lastTimestamp = now;
      }
    }
  };

  const handlePointerUp = (event) => {
    const state = dragStateRef.current;
    if (!isDragging || (state.pointerId !== (event.pointerId != null ? event.pointerId : 'mouse'))) return;

    if (state.hasPointerCapture && state.capturedPointerId != null) {
      try {
        event.currentTarget.releasePointerCapture?.(state.capturedPointerId);
      } catch (_) {}
      state.hasPointerCapture = false;
    }

    const deltaX = event.clientX - state.startX;
    const deltaTime = Math.max(1, performance.now() - state.lastTimestamp);
    const velocityX = (event.clientX - state.lastX) / deltaTime;

    const wasDragged = state.suppressClick;

    setIsDragging(false);
    state.pointerId = null;
    state.capturedPointerId = null;

    const absoluteDeltaX = Math.abs(deltaX);
    const direction = deltaX < 0 ? 1 : -1;

    const threshold = getThreshold(event.pointerType);
    const isFlick = Math.abs(velocityX) > flickVelocityThreshold;

    let shouldMove = false;
    if (absoluteDeltaX > threshold || isFlick) {
      shouldMove = true;
    }

    setHasAnimation(true);
    setDragOffset(0);

    // If there was no drag movement, allow clicks to work normally
    if (!wasDragged) {
      state.suppressClick = false;
    }

    if (!shouldMove) {
      setCurrentIndex(currentIndex);
      return;
    }

    const moveAmount = Math.max(1, perMove);
    const baseIndex = currentIndex;
    let targetIndex = baseIndex + direction * moveAmount;

    if (!loop) {
      const minIndex = 0;
      const maxIndex = slideCount - responsivePerPage;
      targetIndex = Math.max(minIndex, Math.min(maxIndex, targetIndex));
    }

    setCurrentIndex(targetIndex);
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const handleClickCapture = (event) => {
      const shouldSuppress = dragStateRef.current.suppressClick;
      if (shouldSuppress) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        dragStateRef.current.suppressClick = false;
      }
    };
    list.addEventListener('click', handleClickCapture, true);
    return () => list.removeEventListener('click', handleClickCapture, true);
  }, []);

  const screenReaderOnlyStyles = {
    position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0,
  };

  const realSlideIndex = loop
    ? (slideCount ? ((currentIndex - clonesPerSide) % slideCount + slideCount) % slideCount : 0)
    : currentIndex;

  let baseTranslate = -(currentIndex * slideSizeInPixels);

  if (!loop && isAtEnd) {
    const paddingRightPx = px(paddingValues.right, rootRef.current);
    baseTranslate += paddingRightPx - gapInPixels;
  }

  const currentTranslate = isDragging && dragLockedAxis === 'x'
    ? baseTranslate + dragOffset
    : baseTranslate;

  const gapCSS = unit(gap) || '0px';
  const paddingLeftCSS = unit(paddingValues.left) || '0px';
  const paddingRightCSS = unit(paddingValues.right) || '0px';

  const slideWidthStyle = fixedWidth != null
    ? unit(fixedWidth)
    : `calc((100% - (var(--gap) * (${responsivePerPage} - 1))) / ${responsivePerPage})`;

  return (
    <div
      ref={rootRef}
      className={`relative select-none ${className}`}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={() => setIsFocused(false)}
    >
      <div aria-live="polite" style={screenReaderOnlyStyles}>Slide {realSlideIndex + 1} of {slideCount}</div>

      <div ref={trackRef} className="overflow-hidden" style={{ paddingLeft: paddingLeftCSS, paddingRight: paddingRightCSS }}>
        <ul
          ref={listRef}
          className="flex items-stretch"
          style={{
            gap: gapCSS,
            '--gap': gapCSS,
            transform: `translate3d(${currentTranslate}px,0,0)`,
            transition: hasAnimation && !(isDragging && dragLockedAxis === 'x') ? `transform ${transitionMs}ms ease` : 'none',
            willChange: 'transform',
            touchAction: 'pan-y',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {headClones.map((node, i) => (
            <li key={node.key || `h-${i}`} className="shrink-0" style={{ width: slideWidthStyle }} aria-hidden>
              <div className="h-full w-full">{node}</div>
            </li>
          ))}

          {slides.map((node, i) => (
            <li key={node.key || `r-${i}`} id={`slide-real-${i}`} data-role="real" role="group" aria-roledescription="slide" aria-label={`Slide ${i + 1} of ${slideCount}`} className="shrink-0" style={{ width: slideWidthStyle }}>
              <div className="h-full w-full" onDragStart={(e) => e.preventDefault()}>{asElement(node)}</div>
            </li>
          ))}

          {tailClones.map((node, i) => (
            <li key={node.key || `t-${i}`} className="shrink-0" style={{ width: slideWidthStyle }} aria-hidden>
              <div className="h-full w-full">{node}</div>
            </li>
          ))}
        </ul>
      </div>

      {responsiveNavigation && canSlide && !isAtStart && (
        renderPrevArrow ? (
          renderPrevArrow({ onClick: goToPrevious, onPointerDown: (e) => e.stopPropagation() })
        ) : (
          <button
            onClick={goToPrevious}
            onPointerDown={(e) => e.stopPropagation()}
            className={`flex absolute left-0 top-1/2 -translate-y-1/2 text-black border-none rounded-full w-12 h-12 items-center justify-center cursor-pointer z-10 transition-all ${navigationClassName}`}
            aria-label="Previous items"
          >
            <svg className="w-2 xl:w-4" viewBox="0 0 17 34" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6625 0.670328C15.2077 0.669263 15.736 0.85914 16.1558 1.20699L16.1558 1.20699C17.1479 2.02947 17.2854 3.50045 16.4629 4.49252C16.4617 4.49401 16.4604 4.49551 16.4592 4.497L6.00583 17.0037L16.0858 29.5337L16.0858 29.5337C16.8982 30.534 16.7458 32.0035 15.7455 32.8159C15.7423 32.8185 15.739 32.8211 15.7358 32.8237L15.7358 32.8237C14.7684 33.6749 13.294 33.5807 12.4427 32.6132C12.4031 32.5682 12.3652 32.5217 12.3292 32.4737L1.05917 18.4737C0.351436 17.6127 0.351436 16.3713 1.05918 15.5103L12.7258 1.51034L12.7258 1.51034C13.2006 0.937627 13.92 0.625612 14.6625 0.670335L14.6625 0.670328Z" fill="currentColor"/>
            </svg>
          </button>
        )
      )}

      {responsiveNavigation && canSlide && !isAtEnd && (
        renderNextArrow ? (
          renderNextArrow({ onClick: goToNext, onPointerDown: (e) => e.stopPropagation() })
        ) : (
          <button
            onClick={goToNext}
            onPointerDown={(e) => e.stopPropagation()}
            className={`flex absolute right-0 top-1/2 -translate-y-1/2 border-none rounded-full w-12 h-12 items-center justify-center cursor-pointer z-10 transition-all ${navigationClassName}`}
            aria-label="Next items"
          >
            <svg className="w-2 xl:w-4" viewBox="0 0 17 34" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.3375 33.3297C1.79232 33.3307 1.26396 33.1409 0.84417 32.793H0.84417C-0.147894 31.9705 -0.285369 30.4996 0.537107 29.5075C0.538348 29.506 0.539591 29.5045 0.540836 29.503L10.9942 16.9963L0.91417 4.46631L0.914169 4.46631C0.101801 3.46596 0.254193 1.99646 1.25455 1.18408C1.25775 1.18148 1.26096 1.17889 1.26417 1.17631V1.17631C2.23165 0.325055 3.70603 0.419272 4.55727 1.38675C4.5969 1.4318 4.63478 1.47835 4.67083 1.52631L15.9408 15.5263C16.6486 16.3873 16.6486 17.6287 15.9408 18.4897L4.27416 32.4897H4.27416C3.79941 33.0624 3.08004 33.3744 2.33749 33.3297L2.3375 33.3297Z" fill="currentColor"/>
            </svg>
          </button>
        )
      )}

      {canSlide && pagination && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Page navigation">
          {Array.from({ length: Math.ceil(slideCount / responsivePerPage) }).map((_, pageIndex) => {
            const pageStartIndex = pageIndex * responsivePerPage;
            const isLastPage = pageIndex === Math.ceil(slideCount / responsivePerPage) - 1;

            let isActive;
            if (loop) {
              isActive = Math.floor(realSlideIndex / responsivePerPage) === pageIndex;
            } else {
              const maxIndex = slideCount - responsivePerPage;
              if (currentIndex >= maxIndex) {
                isActive = isLastPage;
              } else {
                const currentPage = Math.floor(currentIndex / responsivePerPage);
                isActive = currentPage === pageIndex;
              }
            }

            return (
              <button
                key={pageIndex}
                role="tab"
                onClick={() => goToSlide(loop ? clonesPerSide + pageStartIndex : pageStartIndex)}
                aria-label={`Go to page ${pageIndex + 1}`}
                aria-selected={isActive}
                onPointerDown={(e) => { e.stopPropagation(); }}
                {...(isActive ? { 'aria-current': 'true' } : {})}
                className={`h-2 w-2 rounded-full ${isActive ? 'bg-white' : 'bg-white/50'}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

/**
 * Icon button displayed to navigate to the previous set of carousel items.
 *
 * @param {Object} props
 * @param {() => void} props.onClick - Click handler invoked when arrow is pressed.
 * @returns {JSX.Element} Left arrow button.
 */
const LeftArrow = ({ id, onClick, onPointerDown }) => (
  <button
    onClick={onClick}
    onPointerDown={onPointerDown}
    className={`flex absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 ${id}-carousel-navigation-background-color border-none rounded-full w-12 h-12 items-center justify-center cursor-pointer z-10 shadow-md hover:shadow-lg active:shadow transition-all`}
    aria-label="Previous items"
  >
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
);

/**
 * Icon button displayed to navigate to the next set of carousel items.
 *
 * @param {Object} props
 * @param {() => void} props.onClick - Click handler invoked when arrow is pressed.
 * @returns {JSX.Element} Right arrow button.
 */
const RightArrow = ({ id, onClick, onPointerDown }) => {
  console.log(onPointerDown)
  return (
    <button
      onClick={onClick}
      onPointerDown={onPointerDown}
      className={`flex absolute right-4 translate-x-1/2 top-1/2 -translate-y-1/2 ${id}-carousel-navigation-background-color border-none rounded-full w-12 h-12 items-center justify-center cursor-pointer z-10 shadow-md hover:shadow-lg active:shadow transition-all`}
      aria-label="Next items"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  );
};

/**
 * Represents a single carousel card. Uses SafeLink to make the whole card clickable,
 * and PictureResponsiveImage to provide responsive sources for the artwork.
 *
 * @param {Object} props
 * @param {string} props.id - Unique id used to scope CSS custom properties and helper classes.
 * @param {Object} props.image - Image descriptor for the card.
 * @param {string} props.image.slug - Scene7 image slug.
 * @param {string} [props.image.altText] - Alt text for the image.
 * @param {string} props.image.preset - Scene7 preset string.
 * @param {Object} props.cta - CTA descriptor for the card link.
 * @param {string} props.cta.url - Href for the card link.
 * @param {string} [props.cta.adobeTag] - Optional tracking tag.
 * @param {Object} props.textBelow - Descriptor for text rendered beneath the image.
 * @param {string} [props.textBelow.content] - Text content shown below the image.
 * @param {string} [props.imageSlugVarName] - Template variable name for the card image slug (bildit-var).
 * @param {string} [props.textBelowVarName] - Template variable name for the card text below (bildit-var).
 * @returns {JSX.Element} Rendered card element.
 */
const Card = ({ id, image, cta, textBelow, imageSlugVarName, textBelowVarName }) => {
  const imageClasses = `flex w-full relative ${id}-aspect-[mobile-card] md:${id}-aspect-[tablet-card] xl:${id}-aspect-[desktop-card]`;
  const hasValidSlug = image.slug && image.preset && isValidImageUrl(buildImageUrl(image.slug, 'm', image.preset));
  const imageWrapperProps = imageSlugVarName ? { 'data-bildit-var-name': imageSlugVarName, 'data-bildit-var-type': 'String' } : {};
  return (
    <SafeLink className={`flex-none snap-start cursor-pointer`} href={cta.url} data-aali={cta.adobeTag}>
      <div className={`overflow-hidden ${cardRoundedCorners}`}>
        <div className={imageClasses} {...imageWrapperProps}>
          {hasValidSlug ? (
            <PictureResponsiveImage
              images={{
                mobile: buildImageUrl(image.slug, 'm', image.preset),
                tablet: buildImageUrl(image.slug, 't', image.preset),
                desktop: buildImageUrl(image.slug, 'd', image.preset),
                largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
              }}
              alt={image.altText ?? ''}
              imageClassName="z-10 object-cover object-center"
              className="absolute inset-0 w-full h-full"
            >
            </PictureResponsiveImage>
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gray-100" aria-hidden="true" />
          )}
        </div>
        {textBelow.content != null && (
          <div className="bg-white h-20 flex items-center justify-center px-4">
            <p
              className={`${id}-belk-text-clamp-text-below font-bold text-center line-clamp-3`}
              {...(textBelowVarName ? { 'data-bildit-var-name': textBelowVarName, 'data-bildit-var-type': 'RichText' } : {})}
            >
              {textBelow.content}
            </p>
          </div>
        )}
      </div>
    </SafeLink>
  );
};

/**
 * Style fragment that defines CSS custom properties (variables) scoped to the
 * provided id namespace so multiple instances can coexist without collisions.
 *
 * @param {Object} props
 * @param {string} props.id - Unique namespace identifier for the CSS custom properties.  It is used as a unique namespace for the CSS custom properties (CSS variables) created by this component. By scoping variable names with this id you avoid collisions when multiple banner instances are rendered on the same page (for example, two carousels each get their own set of CSS variables).
 * @returns {JSX.Element} <style> tag containing global JSX styles.
 */
const ProductStoryCarouselStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-outer-container-background-color: ${outerContainerBackgroundColor};
          --${id}-inner-container-background-color: ${innerContainerBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
          --${id}-desktop-inner-container-aspect-ratio: ${desktopInnerContainerAspectRatioWidth} / ${desktopInnerContainerAspectRatioHeight};
          --${id}-tablet-inner-container-aspect-ratio: ${tabletInnerContainerAspectRatioWidth} / ${tabletInnerContainerAspectRatioHeight};
          --${id}-mobile-inner-container-aspect-ratio: ${mobileInnerContainerAspectRatioWidth} / ${mobileInnerContainerAspectRatioHeight};
        }
        @layer eyebrow {
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}, 1.8dvw, ${eyebrowMaximumFontSize});
        }

        @layer headline {
          --${id}-headline-font-size: clamp(${headlineMinimumFontSize}, 2.8dvw, ${headlineMaximumFontSize});
        }

        @layer subhead {
          --${id}-subhead-font-size: clamp(${subheadMinimumFontSize}, 2.2dvw, ${subheadMaximumFontSize});
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 1.8dvw, ${ctaMaximumFontSize});
        }

        @layer cards {
          --${id}-mobile-card-aspect-ratio: ${mobileCardAspectRatioWidth} / ${mobileCardAspectRatioHeight};
          --${id}-tablet-card-aspect-ratio: ${tabletCardAspectRatioHeight} / ${tabletCardAspectRatioWidth};
          --${id}-desktop-card-aspect-ratio: ${desktopCardAspectRatioWidth} / ${desktopCardAspectRatioHeight};
        }
        @layer carousel {
          --${id}-carousel-navigation-background-color: ${navigationBackgroundColor};
        }
      }
    }
  `}</style>
)

/**
 * Small collection of layout-related helper classes and radius utilities
 * required by the banner. These are not scoped to a specific id since they
 * represent shared utilities.
 *
 * @param {Object} props
 * @param {string} props.id - Instance id (not always used directly inside this fragment).
 * @returns {JSX.Element} <style> tag containing layout CSS.
 */
const SectionLayoutStyles = ({ id }) => (
  <style>{`
    /* Container background color - uses variable */
    .${id}-inner-container-color {
      background-color: var(--${id}-inner-container-background-color);
    }

    .${id}-outer-container-color {
      background-color: var(--${id}-outer-container-background-color);
    }

    /* Border radius utilities - top */
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

    .mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] {
      margin-left: max(36px, (100vw - 1560px) / 2);
      margin-right: max(36px, (100vw - 1560px) / 2);
    }

    /* Child selector utilities for container behavior */
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

    @media (min-width: 40rem) {
      .\\[\\&\\>div\\]\\:sm\\:mx-8 > div {
        margin-left: calc(var(--spacing) * 8);
        margin-right: calc(var(--spacing) * 8);
      }
    }

    @media (min-width: 48rem) {
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
    }
  `}</style>
);

const CarouselStyles = ({ id }) => (
  <style>{`
    .${id}-carousel-navigation-background-color {
      background-color: var(--${id}-carousel-navigation-background-color);
    }
  `}</style>
);

/**
 * Styles that set aspect-ratio rules for cards across breakpoints, scoped by id,
 * and styles that determine the width of carousel items across breakpoints.
 *
 * @param {Object} props
 * @param {string} props.id - Unique instance id used to scope class names.
 * @returns {JSX.Element} <style> tag containing card CSS.
 */
const CardStyles = ({ id }) => (
  <style>{`
    /* Card aspect ratios - uses variables, scoped to prevent conflicts */
    .${id}-aspect-\\[mobile-card\\] {
      aspect-ratio: var(--${id}-mobile-card-aspect-ratio);
    }
    .${id}-carousel-item {
      width: calc((100% - (2.5 * var(--spacing) * 4)) / 0.9);
    }

    @media (width >= 48rem) {
      .md\\:${id}-aspect-\\[tablet-card\\] {
        aspect-ratio: var(--${id}-tablet-card-aspect-ratio);
      }
      .${id}-carousel-item {
        width: calc((100% - (0.5 * var(--spacing) * 4)) / 1.2);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[desktop-card\\] {
        aspect-ratio: var(--${id}-desktop-card-aspect-ratio);
      }
      .${id}-carousel-item {
        width: calc((100% - (2.5 * var(--spacing) * 4)) / 3.38);
      }
    }
  `}</style>
)

/**
 * Common utility classes used throughout the component markup (scrollbar hiding,
 * whitespace handling, object-fit helpers, etc.).
 *
 * @returns {JSX.Element} <style> tag containing utility CSS.
 */
const UtilityStyles = () => (
  <style>{`
    .whitespace-pre {
      white-space: pre;
    }
    .flex-2 {
      flex: 2;
    }
    .flex-col {
      flex-direction: column;
    }
    .flex-nowrap {
      flex-wrap: nowrap;
    }
    @media (min-width: 768px) {
      .md\\:flex-row {
        flex-direction: row;
      }
    }
    // @media (min-width: 768px) and (max-width: 1279px) {
    //   .flex-2 {
    //       flex: 1.5;
    //   }
    // }
    .h-min {
      height: min-content;
    }
    .h-0\\.5 {
      height: 0.125rem;
    }
    .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    .max-w-fit {
      max-width: fit-content;
    }

    .translate-x-1\\/2 {
      transform: translateX(50%);
    }

    .object-cover {
      object-fit: cover;
    }
    .object-center {
      object-position: center;
    }

    /* Overflow utilities */
    .overflow-visible {
      overflow: visible;
    }
    .overflow-x-auto {
      overflow-x: auto;
    }
    .overflow-y-visible {
      overflow-y: visible;
    }

    /* Z-index utilities */
    .z-100 {
      z-index: 100;
    }

    /* Shadow utilities */
    .shadow-md {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .shadow-lg {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .shadow {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    @media (width >= 48rem) {
      .md\\:p-4 {
        padding: calc(var(--spacing) * 4);
      }
      .md\\:pl-8 {
        padding-left: calc(var(--spacing) * 8);
      }
    }

    @media (width >= 80rem) {
      .xl\\:flex {
        display: flex;
      }
      .xl\\:p-10 {
        padding: calc(var(--spacing) * 10);
      }
      .xl\\:rounded-2xl {
        border-radius: var(--radius-2xl);
      }
      .xl\\:rounded-t-2xl {
        border-top-left-radius: var(--radius-2xl);
        border-top-right-radius: var(--radius-2xl);
      }
      .xl\\:rounded-b-2xl {
        border-bottom-left-radius: var(--radius-2xl);
        border-bottom-right-radius: var(--radius-2xl);
      }
    }
  `}</style>
);

/**
 * Styles that map CSS custom properties to utility classes for container color,
 * text color and font-family (scoped by id).
 *
 * @param {Object} props
 * @param {string} props.id - Unique instance id used to scope class names.
 * @returns {JSX.Element} <style> tag containing container CSS.
 */

const ContainerStyles = ({ id }) => (
  <style>{`
    /* Container colors and font - uses variables, scoped to prevent conflicts */
    .${id}-container-background-color {
      background-color: var(--${id}-container-background-color);
    }
    .${id}-container-title-color {
      color: var(--${id}-container-title-color);
    }
    .${id}-container-font-family {
      font-family: var(--${id}-container-font-family);
    }
  `}</style>
);

/**
 * Styles which bind CTA and section color variables to utility classes used in
 * the content area.
 *
 * @param {Object} props
 * @param {string} props.id - Unique instance id used to scope class names.
 * @returns {JSX.Element} <style> tag containing section content CSS.
 */
const ButtonStyles = ({ id }) => (
  <style>{`
    .${id}-cta-background-color {
      background-color: var(--${id}-cta-background-color);
    }
  `}</style>
);

/**
 * Font sizing utilities that use CSS variables to enable fluid type scaling.
 *
 * @param {Object} props
 * @param {string} props.id - Unique instance id used to scope class names.
 * @returns {JSX.Element} <style> tag containing typography CSS.
 */
const TypographyStyles = ({ id }) => (
  <style>{`
    /* Typography with fluid sizing - uses variables, scoped to prevent conflicts */
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
  `}</style>
);

/**
 * Styles that apply aspect-ratio rules to container and column classes at
 * different breakpoints.
 *
 * @param {Object} props
 * @param {string} props.id - Unique instance id used to scope class names.
 * @returns {JSX.Element} <style> tag containing responsive aspect-ratio CSS.
 */
const ResponsiveAspectRatioStyles = ({ id }) => (
  <style>{`
    .${id}-aspect-\\[mobile-container\\] {
      aspect-ratio: var(--${id}-mobile-container-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-inner-container\\] {
      aspect-ratio: var(--${id}-mobile-inner-container-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-column\\] {
      aspect-ratio: var(--${id}-mobile-card-aspect-ratio);
    }

    @media (width >= 48rem) {
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
      }
       .md\\:${id}-aspect-\\[tablet-inner-container\\] {
        aspect-ratio: var(--${id}-tablet-inner-container-aspect-ratio);
      }
      .md\\:${id}-aspect-\\[tablet-column\\] {
        aspect-ratio: var(--${id}-tablet-card-aspect-ratio);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
       .xl\\:${id}-aspect-\\[desktop-inner-container\\] {
        aspect-ratio: var(--${id}-desktop-inner-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-card-aspect-ratio);
      }
    }
  `}</style>
)

/**
 * Main carousel component that renders an optional outer background image,
 * inner colored content area, a left content column (eyebrow, headline, subhead, CTA),
 * and a horizontally scrollable carousel of cards on the right.
 *
 * Props are intentionally minimal as the outer scope of the module provides the
 * content configuration via constants at the top of the file.
 *
 * @param {Object} props
 * @param {string} props.id - Unique id used to scope CSS variables and class names.
 * @returns {JSX.Element} Complete carousel banner instance.
 */
const DualBackground = ({ id }) => {
  const cardData = [
    [firstCardBackgroundImage, firstCardBackgroundImageAltText, firstCardBackgroundImagePreset, firstCardCtaUrl, firstCardCtaAdobeTag, firstCardTextBelow],
    [secondCardBackgroundImage, secondCardBackgroundImageAltText, secondCardBackgroundImagePreset, secondCardCtaUrl, secondCardCtaAdobeTag, secondCardTextBelow],
    [thirdCardBackgroundImage, thirdCardBackgroundImageAltText, thirdCardBackgroundImagePreset, thirdCardCtaUrl, thirdCardCtaAdobeTag, thirdCardTextBelow],
    [fourthCardBackgroundImage, fourthCardBackgroundImageAltText, fourthCardBackgroundImagePreset, fourthCardCtaUrl, fourthCardCtaAdobeTag, fourthCardTextBelow],
    [fifthCardBackgroundImage, fifthCardBackgroundImageAltText, fifthCardBackgroundImagePreset, fifthCardCtaUrl, fifthCardCtaAdobeTag, fifthCardTextBelow],
    [sixthCardBackgroundImage, sixthCardBackgroundImageAltText, sixthCardBackgroundImagePreset, sixthCardCtaUrl, sixthCardCtaAdobeTag, sixthCardTextBelow],
    [seventhCardBackgroundImage, seventhCardBackgroundImageAltText, seventhCardBackgroundImagePreset, seventhCardCtaUrl, seventhCardCtaAdobeTag, seventhCardTextBelow],
    [eighthCardBackgroundImage, eighthCardBackgroundImageAltText, eighthCardBackgroundImagePreset, eighthCardCtaUrl, eighthCardCtaAdobeTag, eighthCardTextBelow],
    [ninthCardBackgroundImage, ninthCardBackgroundImageAltText, ninthCardBackgroundImagePreset, ninthCardCtaUrl, ninthCardCtaAdobeTag, ninthCardTextBelow],
    [tenthCardBackgroundImage, tenthCardBackgroundImageAltText, tenthCardBackgroundImagePreset, tenthCardCtaUrl, tenthCardCtaAdobeTag, tenthCardTextBelow],
    [eleventhCardBackgroundImage, eleventhCardBackgroundImageAltText, eleventhCardBackgroundImagePreset, eleventhCardCtaUrl, eleventhCardCtaAdobeTag, eleventhCardTextBelow],
    [twelfthCardBackgroundImage, twelfthCardBackgroundImageAltText, twelfthCardBackgroundImagePreset, twelfthCardCtaUrl, twelfthCardCtaAdobeTag, twelfthCardTextBelow],
    [thirteenthCardBackgroundImage, thirteenthCardBackgroundImageAltText, thirteenthCardBackgroundImagePreset, thirteenthCardCtaUrl, thirteenthCardCtaAdobeTag, thirteenthCardTextBelow],
    [fourteenthCardBackgroundImage, fourteenthCardBackgroundImageAltText, fourteenthCardBackgroundImagePreset, fourteenthCardCtaUrl, fourteenthCardCtaAdobeTag, fourteenthCardTextBelow],
    [fifteenthCardBackgroundImage, fifteenthCardBackgroundImageAltText, fifteenthCardBackgroundImagePreset, fifteenthCardCtaUrl, fifteenthCardCtaAdobeTag, fifteenthCardTextBelow],
    [sixteenthCardBackgroundImage, sixteenthCardBackgroundImageAltText, sixteenthCardBackgroundImagePreset, sixteenthCardCtaUrl, sixteenthCardCtaAdobeTag, sixteenthCardTextBelow],
    [seventeenthCardBackgroundImage, seventeenthCardBackgroundImageAltText, seventeenthCardBackgroundImagePreset, seventeenthCardCtaUrl, seventeenthCardCtaAdobeTag, seventeenthCardTextBelow],
    [eighteenthCardBackgroundImage, eighteenthCardBackgroundImageAltText, eighteenthCardBackgroundImagePreset, eighteenthCardCtaUrl, eighteenthCardCtaAdobeTag, eighteenthCardTextBelow],
  ];

  const cardSlugVarNames = ['firstCardBackgroundImage', 'secondCardBackgroundImage', 'thirdCardBackgroundImage', 'fourthCardBackgroundImage', 'fifthCardBackgroundImage', 'sixthCardBackgroundImage', 'seventhCardBackgroundImage', 'eighthCardBackgroundImage', 'ninthCardBackgroundImage', 'tenthCardBackgroundImage', 'eleventhCardBackgroundImage', 'twelfthCardBackgroundImage', 'thirteenthCardBackgroundImage', 'fourteenthCardBackgroundImage', 'fifteenthCardBackgroundImage', 'sixteenthCardBackgroundImage', 'seventeenthCardBackgroundImage', 'eighteenthCardBackgroundImage'];
  const cardTextBelowVarNames = ['firstCardTextBelow', 'secondCardTextBelow', 'thirdCardTextBelow', 'fourthCardTextBelow', 'fifthCardTextBelow', 'sixthCardTextBelow', 'seventhCardTextBelow', 'eighthCardTextBelow', 'ninthCardTextBelow', 'tenthCardTextBelow', 'eleventhCardTextBelow', 'twelfthCardTextBelow', 'thirteenthCardTextBelow', 'fourteenthCardTextBelow', 'fifteenthCardTextBelow', 'sixteenthCardTextBelow', 'seventeenthCardTextBelow', 'eighteenthCardTextBelow'];

  const cardItems = cardData
    .map((row, index) => ({ slug: row[0], altText: row[1], preset: row[2], url: row[3], adobeTag: row[4], textBelow: row[5], index }))
    .filter((item) => item.slug);
  const cards = cardItems.map((item) => ({
    image: { slug: item.slug, altText: item.altText, preset: item.preset },
    cta: { url: item.url, adobeTag: item.adobeTag },
    textBelow: { content: item.textBelow },
    imageSlugVarName: cardSlugVarNames[item.index],
    textBelowVarName: cardTextBelowVarNames[item.index],
  }));

  const outerClasses = `relative justify-center ${id}-outer-container-color ${roundedCornersTop} ${roundedCornersBottom} p-4 md:p-6 xl:p-10`;
  const innerClasses = `w-full ${innerContainerRoundedCorners} ${id}-aspect-[mobile-inner-container] md:${id}-aspect-[tablet-inner-container] xl:${id}-aspect-[desktop-inner-container] ${id}-inner-container-color ${id}-inner-container-font-family relative justify-center py-4 md:py-8 pl-4 md:pl-8 overflow-visible`;
  const hasValidOuterImage = outerContainerBackgroundImage && isValidImageUrl(buildImageUrl(outerContainerBackgroundImage, 'm', outerContainerBackgroundImagePreset));
  const hasValidInnerImage = innerContainerBackgroundImage && isValidImageUrl(buildImageUrl(innerContainerBackgroundImage, 'm', innerContainerBackgroundImagePreset));

  const innerContent = (
    <div className="flex flex-col md:flex-row md:overflow-hidden lg:overflow-visible h-full">
      <div className={`flex flex-1 flex-col ${innerCopyVerticalAlign} ${innerCopyHorizontalAlign} ${textAlignment[innerCopyHorizontalAlign]} mb-3 md:mb-0`}>
        <p className={`${id}-belk-text-clamp-eyebrow mb-1 font-bold`} data-bildit-var-name="eyebrowContent" data-bildit-var-type="RichText">{eyebrowContent}</p>
        <h2 className={`${id}-belk-text-clamp-headline mb-1 font-bold`} data-bildit-var-name="headlineContent" data-bildit-var-type="RichText">{headlineContent}</h2>
        <h3 className={`${id}-belk-text-clamp-subhead mb-4`} data-bildit-var-name="subheadContent" data-bildit-var-type="RichText">{subheadContent}</h3>
        <SafeLink href={ctaUrl} data-aali={ctaAdobeTag}>
          <Button
            className={`${id}-belk-text-clamp-cta ${id}-cta-background-color cursor-pointer`}
            variant={ctaVariant}
            data-bildit-var-name="ctaContent"
            data-bildit-var-type="RichText"
          >
            {ctaContent}
          </Button>
        </SafeLink>
      </div>
      <style>{`
        @media (min-width: 768px) and (max-width: 1279px) {
          :root { --carousel-flex: 1.5; }
        }
        @media (min-width: 1280px) {
          :root { --carousel-flex: 2; }
        }
      `}</style>
      <div className="relative flex flex-2  lg:flex-2 min-w-0 h-full">
        <Carousel
          interval={interval * 1000}
          autoplay={Boolean(autoplay)}
          loop={Boolean(loop)}
          perPage={{ xs: 1, md: 1, lg: 1, xl: 3 }}
          pagination={Boolean(pagination)}
          navigation={{ xs: false, lg: true }}
          perMove={1}
          gap={16}
          padding={{ xs: { right: 50 }, md: { right: 100 } }}
          renderPrevArrow={({ onClick, onPointerDown }) => <LeftArrow id={id} onClick={onClick} onPointerDown={onPointerDown} />}
          renderNextArrow={({ onClick, onPointerDown }) => <RightArrow id={id} onClick={onClick} onPointerDown={onPointerDown} />}
          className="w-full"
        >
          {cards.map(({ image, cta, textBelow, imageSlugVarName, textBelowVarName }, index) => (
            <Card
              id={id}
              key={index}
              image={image}
              cta={cta}
              textBelow={textBelow}
              imageSlugVarName={imageSlugVarName}
              textBelowVarName={textBelowVarName}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );

  const innerPart = (
    <div data-bildit-var-name="innerContainerBackgroundImage" data-bildit-var-type="String" className={innerClasses}>
      {hasValidInnerImage ? (
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(innerContainerBackgroundImage, 'm', innerContainerBackgroundImagePreset),
            tablet: buildImageUrl(innerContainerBackgroundImage, 't', innerContainerBackgroundImagePreset),
            desktop: buildImageUrl(innerContainerBackgroundImage, 'd', innerContainerBackgroundImagePreset),
            largeDesktop: buildImageUrl(innerContainerBackgroundImage, 'l', innerContainerBackgroundImagePreset),
          }}
          alt={innerContainerBackgroundAlt ?? ''}
          imageClassName="object-cover object-center"
          className="absolute inset-0 -z-10"
        />
      ) : null}
      {innerContent}
    </div>
  );

  return (
    <>
      <ProductStoryCarouselStyleVars id={id} />
      <UtilityStyles />
      <SectionLayoutStyles id={id} />
      <CarouselStyles id={id} />
      <ContainerStyles id={id} />
      <ButtonStyles id={id} />
      <TypographyStyles id={id} />
      <CardStyles id={id} />
      <ResponsiveAspectRatioStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div data-bildit-var-name="outerContainerBackgroundImage" data-bildit-var-type="String" className={outerClasses}>
          {hasValidOuterImage ? (
            <PictureResponsiveImage
              images={{
                mobile: buildImageUrl(outerContainerBackgroundImage, 'm', outerContainerBackgroundImagePreset),
                tablet: buildImageUrl(outerContainerBackgroundImage, 't', outerContainerBackgroundImagePreset),
                desktop: buildImageUrl(outerContainerBackgroundImage, 'd', outerContainerBackgroundImagePreset),
                largeDesktop: buildImageUrl(outerContainerBackgroundImage, 'l', outerContainerBackgroundImagePreset),
              }}
              alt={outerContainerBackgroundAlt ?? ''}
              imageClassName="object-cover object-center"
              className="absolute inset-0 -z-10"
            />
          ) : null}
          {innerPart}
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default DualBackground;