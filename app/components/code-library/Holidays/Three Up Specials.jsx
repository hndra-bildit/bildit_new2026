"use client"
  // @version v1
  import React, { useState, useRef, useEffect, useCallback, useLayoutEffect, useMemo, Fragment } from 'react';
  import Image from 'next/image';
  import Link from 'next/link';
  import VideoPlayer from '@/app/components/s7-video-player';
  const hasVideoPlayer = typeof VideoPlayer === 'function';

  // group: { 1. Section Layout }
  const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
  const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
  const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
  // endgroup

  // group: { 2. Static Column Background }
  const staticColumnBackgroundColor = $(staticColumnBackgroundColor:Color="#DDC8B2");
  const staticColumnBackgroundImage = $(staticColumnBackgroundImage:String="");
  const staticColumnBackgroundImagePreset = $(staticColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const staticColumnBackgroundAlt = $(staticColumnBackgroundAlt:String="");
  const staticColumnVideoSlug = $(staticColumnVideoSlug:String="");
  // endgroup

  // group: { 2.1 Static Column Layout }
  const desktopStaticColumnAspectRatioWidth = $(desktopStaticColumnAspectRatioWidth:String="800";required=true);
  const desktopStaticColumnAspectRatioHeight = $(desktopStaticColumnAspectRatioHeight:String="600";required=true);
  const tabletStaticColumnAspectRatioWidth = $(tabletStaticColumnAspectRatioWidth:String="288";required=true);
  const tabletStaticColumnAspectRatioHeight = $(tabletStaticColumnAspectRatioHeight:String="286";required=true);
  const mobileStaticColumnAspectRatioWidth = $(mobileStaticColumnAspectRatioWidth:String="352";required=true);
  const mobileStaticColumnAspectRatioHeight = $(mobileStaticColumnAspectRatioHeight:String="204";required=true);
  // endgroup

  // group: { 2.2 Static Column Content }
  const eyebrowContent = $(eyebrowContent:RichText="BOO-TIFUL FINDS AWAIT";color="#000000");
  const headlineContent = $(headlineContent:RichText="Decorate If You Dare";color="#000000");
  const subheadContent = $(subheadContent:RichText="Spooky, silly, or stylish—everything you need to turn your home into Halloween headquarters.";color="#000000");
  const ctaContent = $(ctaContent:RichText="Shop All";color="#000000");
  const ctaUrl = $(ctaUrl:String="/";required=true);
  const ctaAdobeTag = $(ctaAdobeTag:String="static-cta";required=true);
  // endgroup

  // group: { 3. Card Layout }
  const desktopCardAspectRatioWidth = $(desktopCardAspectRatioWidth:String="400");
  const desktopCardAspectRatioHeight = $(desktopCardAspectRatioHeight:String="600");
  const tabletCardAspectRatioWidth = $(tabletCardAspectRatioWidth:String="176");
  const tabletCardAspectRatioHeight = $(tabletCardAspectRatioHeight:String="350");
  const mobileCardAspectRatioWidth = $(mobileCardAspectRatioWidth:String="176");
  const mobileCardAspectRatioHeight = $(mobileCardAspectRatioHeight:String="204");
  // endgroup

  // group: { 4. Typography }
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

  // group: { 5. CTA Styling }
  const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
  const ctaBackgroundColor = $(ctaBackgroundColor:Color);
  // endgroup

  // group: { 6.1 Card 1 }
  const firstCardBackgroundImage = $(firstCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p1a");
  const firstCardBackgroundImageAltText = $(firstCardBackgroundImageAltText:String="");
  const firstCardBackgroundImagePreset = $(firstCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const firstCardCtaContent = $(firstCardCtaContent:RichText="";color="#000000");
  const firstCardCtaUrl = $(firstCardCtaUrl:String="/";required=true);
  const firstCardCtaAdobeTag = $(firstCardCtaAdobeTag:String="";required=true);
  const firstCardEyebrow = $(firstCardEyebrow:RichText="";color="#000000");
  const firstCardHeadline = $(firstCardHeadline:RichText="";color="#000000");
  const firstCardSubhead = $(firstCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.2 Card 2 }
  const secondCardBackgroundImage = $(secondCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p2a");
  const secondCardBackgroundImageAltText = $(secondCardBackgroundImageAltText:String="");
  const secondCardBackgroundImagePreset = $(secondCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const secondCardCtaContent = $(secondCardCtaContent:RichText="";color="#000000");
  const secondCardCtaUrl = $(secondCardCtaUrl:String="/";required=true);
  const secondCardCtaAdobeTag = $(secondCardCtaAdobeTag:String="";required=true);
  const secondCardEyebrow = $(secondCardEyebrow:RichText="";color="#000000");
  const secondCardHeadline = $(secondCardHeadline:RichText="";color="#000000");
  const secondCardSubhead = $(secondCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.3 Card 3 }
  const thirdCardBackgroundImage = $(thirdCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p1b");
  const thirdCardBackgroundImageAltText = $(thirdCardBackgroundImageAltText:String="");
  const thirdCardBackgroundImagePreset = $(thirdCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const thirdCardCtaContent = $(thirdCardCtaContent:RichText="";color="#000000");
  const thirdCardCtaUrl = $(thirdCardCtaUrl:String="/";required=true);
  const thirdCardCtaAdobeTag = $(thirdCardCtaAdobeTag:String="";required=true);
  const thirdCardEyebrow = $(thirdCardEyebrow:RichText="";color="#000000");
  const thirdCardHeadline = $(thirdCardHeadline:RichText="";color="#000000");
  const thirdCardSubhead = $(thirdCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.4 Card 4 }
  const fourthCardBackgroundImage = $(fourthCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p2b");
  const fourthCardBackgroundImageAltText = $(fourthCardBackgroundImageAltText:String="");
  const fourthCardBackgroundImagePreset = $(fourthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const fourthCardCtaContent = $(fourthCardCtaContent:RichText="";color="#000000");
  const fourthCardCtaUrl = $(fourthCardCtaUrl:String="/";required=true);
  const fourthCardCtaAdobeTag = $(fourthCardCtaAdobeTag:String="";required=true);
  const fourthCardEyebrow = $(fourthCardEyebrow:RichText="";color="#000000");
  const fourthCardHeadline = $(fourthCardHeadline:RichText="";color="#000000");
  const fourthCardSubhead = $(fourthCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.5 Card 5 }
  const fifthCardBackgroundImage = $(fifthCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p1c");
  const fifthCardBackgroundImageAltText = $(fifthCardBackgroundImageAltText:String="");
  const fifthCardBackgroundImagePreset = $(fifthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const fifthCardCtaContent = $(fifthCardCtaContent:RichText="";color="#000000");
  const fifthCardCtaUrl = $(fifthCardCtaUrl:String="/";required=true);
  const fifthCardCtaAdobeTag = $(fifthCardCtaAdobeTag:String="";required=true);
  const fifthCardEyebrow = $(fifthCardEyebrow:RichText="";color="#000000");
  const fifthCardHeadline = $(fifthCardHeadline:RichText="";color="#000000");
  const fifthCardSubhead = $(fifthCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.6 Card 6 }
  const sixthCardBackgroundImage = $(sixthCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p2c");
  const sixthCardBackgroundImageAltText = $(sixthCardBackgroundImageAltText:String="");
  const sixthCardBackgroundImagePreset = $(sixthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const sixthCardCtaContent = $(sixthCardCtaContent:RichText="";color="#000000");
  const sixthCardCtaUrl = $(sixthCardCtaUrl:String="/";required=true);
  const sixthCardCtaAdobeTag = $(sixthCardCtaAdobeTag:String="";required=true);
  const sixthCardEyebrow = $(sixthCardEyebrow:RichText="";color="#000000");
  const sixthCardHeadline = $(sixthCardHeadline:RichText="";color="#000000");
  const sixthCardSubhead = $(sixthCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.7 Card 7 }
  const seventhCardBackgroundImage = $(seventhCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p1b");
  const seventhCardBackgroundImageAltText = $(seventhCardBackgroundImageAltText:String="");
  const seventhCardBackgroundImagePreset = $(seventhCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const seventhCardCtaContent = $(seventhCardCtaContent:RichText="";color="#000000");
  const seventhCardCtaUrl = $(seventhCardCtaUrl:String="/";required=true);
  const seventhCardCtaAdobeTag = $(seventhCardCtaAdobeTag:String="";required=true);
  const seventhCardEyebrow = $(seventhCardEyebrow:RichText="";color="#000000");
  const seventhCardHeadline = $(seventhCardHeadline:RichText="";color="#000000");
  const seventhCardSubhead = $(seventhCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.8 Card 8 }
  const eighthCardBackgroundImage = $(eighthCardBackgroundImage:String="wkxx_2025_test_rlgcarousel_p1a");
  const eighthCardBackgroundImageAltText = $(eighthCardBackgroundImageAltText:String="");
  const eighthCardBackgroundImagePreset = $(eighthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const eighthCardCtaContent = $(eighthCardCtaContent:RichText="";color="#000000");
  const eighthCardCtaUrl = $(eighthCardCtaUrl:String="/";required=true);
  const eighthCardCtaAdobeTag = $(eighthCardCtaAdobeTag:String="";required=true);
  const eighthCardEyebrow = $(eighthCardEyebrow:RichText="";color="#000000");
  const eighthCardHeadline = $(eighthCardHeadline:RichText="";color="#000000");
  const eighthCardSubhead = $(eighthCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.9 Card 9 }
  const ninthCardBackgroundImage = $(ninthCardBackgroundImage:String="");
  const ninthCardBackgroundImageAltText = $(ninthCardBackgroundImageAltText:String="");
  const ninthCardBackgroundImagePreset = $(ninthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const ninthCardCtaContent = $(ninthCardCtaContent:RichText="";color="#000000");
  const ninthCardCtaUrl = $(ninthCardCtaUrl:String="/";required=true);
  const ninthCardCtaAdobeTag = $(ninthCardCtaAdobeTag:String="";required=true);
  const ninthCardEyebrow = $(ninthCardEyebrow:RichText="";color="#000000");
  const ninthCardHeadline = $(ninthCardHeadline:RichText="";color="#000000");
  const ninthCardSubhead = $(ninthCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.10 Card 10 }
  const tenthCardBackgroundImage = $(tenthCardBackgroundImage:String="");
  const tenthCardBackgroundImageAltText = $(tenthCardBackgroundImageAltText:String="");
  const tenthCardBackgroundImagePreset = $(tenthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const tenthCardCtaContent = $(tenthCardCtaContent:RichText="";color="#000000");
  const tenthCardCtaUrl = $(tenthCardCtaUrl:String="/";required=true);
  const tenthCardCtaAdobeTag = $(tenthCardCtaAdobeTag:String="";required=true);
  const tenthCardEyebrow = $(tenthCardEyebrow:RichText="";color="#000000");
  const tenthCardHeadline = $(tenthCardHeadline:RichText="";color="#000000");
  const tenthCardSubhead = $(tenthCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.11 Card 11 }
  const eleventhCardBackgroundImage = $(eleventhCardBackgroundImage:String="");
  const eleventhCardBackgroundImageAltText = $(eleventhCardBackgroundImageAltText:String="");
  const eleventhCardBackgroundImagePreset = $(eleventhCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const eleventhCardCtaContent = $(eleventhCardCtaContent:RichText="";color="#000000");
  const eleventhCardCtaUrl = $(eleventhCardCtaUrl:String="/";required=true);
  const eleventhCardCtaAdobeTag = $(eleventhCardCtaAdobeTag:String="";required=true);
  const eleventhCardEyebrow = $(eleventhCardEyebrow:RichText="";color="#000000");
  const eleventhCardHeadline = $(eleventhCardHeadline:RichText="";color="#000000");
  const eleventhCardSubhead = $(eleventhCardSubhead:RichText="";color="#000000");
  // endgroup

  // group: { 6.12 Card 12 }
  const twelfthCardBackgroundImage = $(twelfthCardBackgroundImage:String="");
  const twelfthCardBackgroundImageAltText = $(twelfthCardBackgroundImageAltText:String="");
  const twelfthCardBackgroundImagePreset = $(twelfthCardBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const twelfthCardCtaContent = $(twelfthCardCtaContent:RichText="";color="#000000");
  const twelfthCardCtaUrl = $(twelfthCardCtaUrl:String="/";required=true);
  const twelfthCardCtaAdobeTag = $(twelfthCardCtaAdobeTag:String="";required=true);
  const twelfthCardEyebrow = $(twelfthCardEyebrow:RichText="";color="#000000");
  const twelfthCardHeadline = $(twelfthCardHeadline:RichText="";color="#000000");
  const twelfthCardSubhead = $(twelfthCardSubhead:RichText="";color="#000000");
  // endgroup

  // group {7. Carousel Settings}
  const interval = $(interval:String="3");
  const autoplay = $(autoplay:Boolean="true");
  const itemsPerPage = $(itemsPerPage:String="2");
  const itemsPerMove = $(itemsPerMove:String="2");
  const navigation = $(navigation:Boolean="true");
  const pagination = $(pagination:Boolean="false");
  const loop = $(loop:Boolean="false");
  // endgroup

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
   * Picture-based responsive image component using HTML picture element.
   * Renders image behind content (absolute z-0); content in relative z-10.
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
              <Image
                className={`object-cover object-center ${imageClassName}`}
                src={fallbackSrc}
                alt={alt ?? ''}
                fill
                onError={handleError}
              />
            </picture>
          </div>
        )}
        {children ? <div className="relative z-10 flex flex-col flex-1">{children}</div> : null}
      </div>
    );
  }

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

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
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
   *
   * @param {id} It is used as a unique namespace for the CSS custom properties (CSS variables) created by this component. By scoping variable names with this id you avoid collisions when multiple banner instances are rendered on the same page (for example, two carousels each get their own set of CSS variables).
   *
   * Use cases and notes:
   * - Type: string (unique identifier per banner instance).
   * - Purpose: prefixes generated CSS custom property names (e.g. --{id}-container-background-color) so styles are isolated to that banner instance.
   * - Typical source: the id is normally provided by the rendering platform or server-side integration (see: https://www.npmjs.com/package/@bildit-platform/nextjs).
   *
   * The component returns a JSX fragment containing <style> tags that define these scoped CSS variables and related helper classes for the banner instance.
   * @returns
   */
  const ThreeUpSpecialsStyleVars = ({ id }) => (
    <style global jsx>{`
      @layer template {
        :host, :root {
          @layer ${id} {
            @layer container {
              --${id}-container-font-family: ${fontFamily};
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
              --${id}-column-horizontal-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
              --${id}-column-vertical-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
              --${id}-mobile-column-aspect-ratio: ${mobileCardAspectRatioWidth} / ${mobileCardAspectRatioHeight};
              --${id}-tablet-column-aspect-ratio: ${tabletCardAspectRatioWidth} / ${tabletCardAspectRatioHeight};
              --${id}-desktop-column-aspect-ratio: ${desktopCardAspectRatioWidth} / ${desktopCardAspectRatioHeight};
            }

            @layer static-column {
              --${id}-static-column-background-color: ${staticColumnBackgroundColor};
              --${id}-mobile-static-column-aspect-ratio: ${mobileStaticColumnAspectRatioWidth} / ${mobileStaticColumnAspectRatioHeight};
              --${id}-tablet-static-column-aspect-ratio: ${tabletStaticColumnAspectRatioWidth} / ${tabletStaticColumnAspectRatioHeight};
              --${id}-desktop-static-column-aspect-ratio: ${desktopStaticColumnAspectRatioWidth} / ${desktopStaticColumnAspectRatioHeight};
            }
            
          }
        }
      }
    `}</style>
  )

  const SectionLayoutStyles = ({ id }) => (
    <style>{`
      /* Container background color - uses variable */
      .${id}-static-column-background-color {
        background-color: var(--${id}-static-column-background-color);
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

      /* Border radius utilities - bottom */
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

      /* Responsive container margins */
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

      /* Responsive child selector utilities */
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
      /* Hide scrollbar for carousel container */
      .carousel-container {
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      .carousel-container::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  );

  const CardStyles = ({ id }) => (
    <style>{`
      /* Card aspect ratios - uses variables, scoped to prevent conflicts */
      .${id}-aspect-\\[mobile-card\\] {
        aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
      }

      @media (width >= 48rem) {
        .md\\:${id}-aspect-\\[tablet-card\\] {
          aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
        }
      }

      @media (width >= 80rem) {
        .xl\\:${id}-aspect-\\[desktop-card\\] {
          aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
        }
      }
    `}</style>
  )

  const UtilityStyles = () => (
    <style>{`
      /* Whitespace utilities */
      .whitespace-pre {
        white-space: pre;
      }

      /* Layout utilities */
      .w-min {
        width: min-content;
      }
      .w-12 {
        width: 3rem;
      }
      .w-6 {
        width: 1.5rem;
      }
      .h-6 {
        height: 1.5rem;
      }
      .h-min {
        height: min-content;
      }
      .h-0\\.5 {
        height: 0.125rem;
      }

      /* Max width utilities */
      .max-w-inset {
        max-width: var(--breakpoint-3xl);
      }
      // .max-w-fit {
      //   max-width: fit-content;
      // }
      // .max-w-none {
      //   max-width: none;
      // }

      /* Border utilities */
      .border-px {
        border-width: 1px;
      }

      /* Border radius */
      .rounded-full {
        border-radius: 9999px;
      }
      .rounded-t-lg {
        border-top-left-radius: var(--radius-lg);
        border-top-right-radius: var(--radius-lg);
      }
      .rounded-b-lg {
        border-bottom-left-radius: var(--radius-lg);
        border-bottom-right-radius: var(--radius-lg);
      }

      /* Flex utilities */
      .flex-1 {
        flex: 1 1 0%;
      }
      .flex-2 {
        flex: 2 1 0%;
      }

      /* Position utilities */
      .top-1\\/2 {
        top: 50%;
      }

      /* Transform utilities */
      .-translate-x-4 {
        translate: calc(var(--spacing) * -4) var(--tw-translate-y);
      }
      .translate-x-4 {
        translate: calc(var(--spacing) * 4) var(--tw-translate-y);
      }

      /* Spacing utilities */
      .pl-4 {
        padding-left: 1rem;
      }

      /* Object fit */
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

      /* Scroll utilities */
      .scroll-smooth {
        scroll-behavior: smooth;
      }
      .snap-x {
        scroll-snap-type: x mandatory;
      }
      .snap-mandatory {
        scroll-snap-type: x mandatory;
      }
      .snap-start {
        scroll-snap-align: start;
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

      /* Hover utilities */
      .hover\\:bg-white\\:hover {
        background-color: #ffffff;
      }
      .hover\\:shadow-lg\\:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }

      /* Active utilities */
      .active\\:shadow\\:active {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }

      /* Transition utilities */
      .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }

      /* Responsive utilities for md breakpoint */
      @media (width >= 48rem) {
        .md\\:flex-row {
          flex-direction: row;
        }
        .md\\:mb-0 {
          margin-bottom: 0;
        }
        .md\\:rounded-t-2xl {
          border-top-left-radius: var(--radius-2xl);
          border-top-right-radius: var(--radius-2xl);
        }
        .md\\:rounded-b-2xl {
          border-bottom-left-radius: var(--radius-2xl);
          border-bottom-right-radius: var(--radius-2xl);
        }
        .md\\:order-1 {
          order: 1;
        }
        .md\\:order-2 {
          order: 2;
        }
      }

      /* Responsive utilities for xl breakpoint */
      @media (width >= 80rem) {
        .xl\\:flex {
          display: flex;
        }
        .xl\\:w-4 {
          width: calc(var(--spacing) * 4);
        }
        .xl\\:pl-8 {
          padding-left: calc(var(--spacing) * 8);
        }
        .xl\\:rounded-2xl {
          border-radius: var(--radius-2xl);
        }
      }
    `}</style>
  );

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

  const ColumnPaddingStyles = ({ id }) => (
    <style>{`
      /* Column padding - uses fixed variable names, scoped to prevent conflicts */
      .${id}-column-horizontal-padding {
        padding-left: var(--${id}-column-horizontal-padding);
        padding-right: var(--${id}-column-horizontal-padding);
      }
      .${id}-column-vertical-padding {
        padding-top: var(--${id}-column-vertical-padding);
        padding-bottom: var(--${id}-column-vertical-padding);
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

  const ContentSizingStyles = ({ id }) => (
    <style>{`
      /* Eyebrow sizing - uses variables, scoped to prevent conflicts */
      .${id}-max-w-\\[eyebrow\\] {
        max-width: var(--${id}-eyebrow-max-width);
      }
      .${id}-h-\\[eyebrow\\] {
        max-height: var(--${id}-eyebrow-max-height);
      }

      /* Headline sizing - uses variables, scoped to prevent conflicts */
      .${id}-max-w-\\[headline\\] {
        max-width: var(--${id}-headline-max-width);
      }
      .${id}-h-\\[headline\\] {
        max-height: var(--${id}-headline-max-height);
      }

      /* Subhead sizing - uses variables, scoped to prevent conflicts */
      .${id}-max-w-\\[subhead\\] {
        max-width: var(--${id}-subhead-max-width);
      }
      .${id}-max-h-\\[subhead\\] {
        max-height: var(--${id}-subhead-max-height);
      }
    `}</style>
  );

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

  const ResponsiveUtilityStyles = () => (
    <style>{`
      /* Responsive spacing utilities */
      @media (width >= 48rem) {
        .md\\:px-8 {
          padding-left: calc(var(--spacing) * 8);
          padding-right: calc(var(--spacing) * 8);
        }
        .md\\:py-8 {
          padding-top: calc(var(--spacing) * 8);
          padding-bottom: calc(var(--spacing) * 8);
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
        .md\\:rounded-2xl {
          border-radius: var(--radius-2xl);
        }
      }
    `}</style>
  );

  const ResponsiveAspectRatioStyles = ({ id }) => (
    <style>{`
      .${id}-aspect-\\[mobile-column\\] {
        aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
      }
      .${id}-aspect-\\[mobile-static-column\\] {
        aspect-ratio: var(--${id}-mobile-static-column-aspect-ratio);
      }
      @media (width >= 48rem) {
        .md\\:${id}-aspect-\\[tablet-column\\] {
          aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
        }
        .md\\:${id}-aspect-\\[tablet-static-column\\] {
          aspect-ratio: var(--${id}-tablet-static-column-aspect-ratio);
        }
      }

      @media (width >= 80rem) {
        .xl\\:${id}-aspect-\\[desktop-column\\] {
          aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
        }
        .xl\\:${id}-aspect-\\[desktop-static-column\\] {
          aspect-ratio: var(--${id}-desktop-static-column-aspect-ratio);
        }
      }
    `}</style>
  )

  const SafeLink = ({ href, children, ...props }) => (
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

  const StaticColumnContent = ({ id }) => {
    return (
      <div className="flex flex-col justify-stretch items-stretch py-4 py-10 px-4 text-center">
        <p data-testid={`${id}-static-column-eyebrow`} data-bildit-var-name="eyebrowContent" data-bildit-var-type="RichText" className={`${id}-belk-text-clamp-eyebrow mb-1 font-bold`}>{eyebrowContent}</p>
        <h2 data-testid={`${id}-static-column-headline`} data-bildit-var-name="headlineContent" data-bildit-var-type="RichText" className={`${id}-belk-text-clamp-headline mb-1`}>{headlineContent}</h2>
        <h3 data-testid={`${id}-static-column-subhead`} data-bildit-var-name="subheadContent" data-bildit-var-type="RichText" className={`${id}-belk-text-clamp-subhead mb-1`}>{subheadContent}</h3>
        <Button
          data-testid={`${id}-static-column-button`}
          className={`${id}-belk-text-clamp-cta ${id}-cta-background-color cursor-pointer`}
          variant={ctaVariant}
        >
          <span data-bildit-var-name="ctaContent" data-bildit-var-type="RichText">{ctaContent}</span>
        </Button>
      </div>
    );
  };

  const ThreeUpSpecials = ({ id }) => {
    const cardData = [
      [firstCardBackgroundImage, firstCardBackgroundImageAltText, firstCardBackgroundImagePreset, firstCardCtaContent, firstCardCtaUrl, firstCardCtaAdobeTag, firstCardEyebrow, firstCardHeadline, firstCardSubhead],
      [secondCardBackgroundImage, secondCardBackgroundImageAltText, secondCardBackgroundImagePreset, secondCardCtaContent, secondCardCtaUrl, secondCardCtaAdobeTag, secondCardEyebrow, secondCardHeadline, secondCardSubhead],
      [thirdCardBackgroundImage, thirdCardBackgroundImageAltText, thirdCardBackgroundImagePreset, thirdCardCtaContent, thirdCardCtaUrl, thirdCardCtaAdobeTag, thirdCardEyebrow, thirdCardHeadline, thirdCardSubhead],
      [fourthCardBackgroundImage, fourthCardBackgroundImageAltText, fourthCardBackgroundImagePreset, fourthCardCtaContent, fourthCardCtaUrl, fourthCardCtaAdobeTag, fourthCardEyebrow, fourthCardHeadline, fourthCardSubhead],
      [fifthCardBackgroundImage, fifthCardBackgroundImageAltText, fifthCardBackgroundImagePreset, fifthCardCtaContent, fifthCardCtaUrl, fifthCardCtaAdobeTag, fifthCardEyebrow, fifthCardHeadline, fifthCardSubhead],
      [sixthCardBackgroundImage, sixthCardBackgroundImageAltText, sixthCardBackgroundImagePreset, sixthCardCtaContent, sixthCardCtaUrl, sixthCardCtaAdobeTag, sixthCardEyebrow, sixthCardHeadline, sixthCardSubhead],
      [seventhCardBackgroundImage, seventhCardBackgroundImageAltText, seventhCardBackgroundImagePreset, seventhCardCtaContent, seventhCardCtaUrl, seventhCardCtaAdobeTag, seventhCardEyebrow, seventhCardHeadline, seventhCardSubhead],
      [eighthCardBackgroundImage, eighthCardBackgroundImageAltText, eighthCardBackgroundImagePreset, eighthCardCtaContent, eighthCardCtaUrl, eighthCardCtaAdobeTag, eighthCardEyebrow, eighthCardHeadline, eighthCardSubhead],
      [ninthCardBackgroundImage, ninthCardBackgroundImageAltText, ninthCardBackgroundImagePreset, ninthCardCtaContent, ninthCardCtaUrl, ninthCardCtaAdobeTag, ninthCardEyebrow, ninthCardHeadline, ninthCardSubhead],
      [tenthCardBackgroundImage, tenthCardBackgroundImageAltText, tenthCardBackgroundImagePreset, tenthCardCtaContent, tenthCardCtaUrl, tenthCardCtaAdobeTag, tenthCardEyebrow, tenthCardHeadline, tenthCardSubhead],
      [eleventhCardBackgroundImage, eleventhCardBackgroundImageAltText, eleventhCardBackgroundImagePreset, eleventhCardCtaContent, eleventhCardCtaUrl, eleventhCardCtaAdobeTag, eleventhCardEyebrow, eleventhCardHeadline, eleventhCardSubhead],
      [twelfthCardBackgroundImage, twelfthCardBackgroundImageAltText, twelfthCardBackgroundImagePreset, twelfthCardCtaContent, twelfthCardCtaUrl, twelfthCardCtaAdobeTag, twelfthCardEyebrow, twelfthCardHeadline, twelfthCardSubhead],
    ];

    const cards = cardData
      .filter(([slug]) => slug)
      .map(([slug, altText, preset, ctaContent, url, adobeTag, eyebrow, headline, subhead, textBelow]) => ({
        image: { slug, altText, preset },
        cta: { ctaContent, url, adobeTag },
        copy: { eyebrow, headline, subhead, textBelow }
      }));

    const staticColumnBgImages = {
      mobile: buildImageUrl(staticColumnBackgroundImage, 'm', staticColumnBackgroundImagePreset),
      tablet: buildImageUrl(staticColumnBackgroundImage, 't', staticColumnBackgroundImagePreset),
      desktop: buildImageUrl(staticColumnBackgroundImage, 'd', staticColumnBackgroundImagePreset),
      largeDesktop: buildImageUrl(staticColumnBackgroundImage, 'l', staticColumnBackgroundImagePreset),
    };
    const hasValidStaticBg = isValidImageUrl(staticColumnBgImages.mobile) || isValidImageUrl(staticColumnBgImages.tablet) || isValidImageUrl(staticColumnBgImages.desktop) || isValidImageUrl(staticColumnBgImages.largeDesktop);

    return (
      <>
        <ThreeUpSpecialsStyleVars id={id} />
        <UtilityStyles />
        <SectionLayoutStyles id={id} />
        <ContainerStyles id={id} />
        <ColumnPaddingStyles id={id} />
        <ButtonStyles id={id} />
        <ContentSizingStyles id={id} />
        <TypographyStyles id={id} />
        <CarouselStyles id={id} />
        <CardStyles id={id} />
        <ResponsiveUtilityStyles />
        <ResponsiveAspectRatioStyles id={id} />
        <ResponsiveContainer
          containerBehavior={containerBehavior}
          className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
        >
          <div>
            <div className={`flex flex-col w-full md:flex-row items-stretch ${id}-container-font-family`}>
              <div className={`flex flex-1 text-center md:order-2 ${!staticColumnVideoSlug && !hasValidStaticBg ? `${id}-static-column-background-color` : ''}`}>
                {staticColumnVideoSlug && hasVideoPlayer ? (
                  <VideoPlayer
                    id={id}
                    video={staticColumnVideoSlug}
                    Overlay={StaticColumnContent}
                    OverlayDuringPlay={StaticColumnContent}
                  />
                ) : staticColumnVideoSlug && !hasVideoPlayer ? (
                  <SafeLink href={ctaUrl} data-aali={ctaAdobeTag} data-bildit-var-name="ctaUrl" data-bildit-var-type="String" className={`w-full cursor-pointer flex flex-col justify-center ${id}-aspect-[mobile-static-column] md:${id}-aspect-[tablet-static-column] xl:${id}-aspect-[desktop-static-column] ${id}-static-column-background-color`}>
                    <StaticColumnContent id={id} />
                  </SafeLink>
                ) : hasValidStaticBg ? (
                  <SafeLink href={ctaUrl} data-aali={ctaAdobeTag} data-bildit-var-name="ctaUrl" data-bildit-var-type="String" className="w-full cursor-pointer" data-testid={`${id}-static-image`}>
                    <div data-bildit-var-name="staticColumnBackgroundImage" data-bildit-var-type="String">
                    <PictureResponsiveImage
                      images={staticColumnBgImages}
                      alt={staticColumnBackgroundAlt ?? ''}
                      className={`flex flex-col items-stretch w-full h-full justify-center ${id}-aspect-[mobile-static-column] md:${id}-aspect-[tablet-static-column] xl:${id}-aspect-[desktop-static-column]`}
                    >
                      <StaticColumnContent id={id} />
                    </PictureResponsiveImage>
                    </div>
                  </SafeLink>
                ) : (
                  <SafeLink href={ctaUrl} data-aali={ctaAdobeTag} data-bildit-var-name="ctaUrl" data-bildit-var-type="String" className={`w-full cursor-pointer flex flex-col justify-center ${id}-aspect-[mobile-static-column] md:${id}-aspect-[tablet-static-column] xl:${id}-aspect-[desktop-static-column]`}>
                    <StaticColumnContent id={id} />
                  </SafeLink>
                )}
              </div>

              <div className="flex flex-1 w-full relative overflow-visible md:order-1">
                <Carousel 
                  className='w-full' 
                  autoplay={Boolean(autoplay)}
                  loop={Boolean(loop)}
                  perPage={itemsPerPage}
                  perMove={itemsPerMove}
                  navigation={Boolean(navigation)}
                  pagination={Boolean(pagination)}
                  interval={interval * 1000}
                >
                  {cards.map(({image, cta, copy}, index) => (
                    <SafeLink
                      key={index}
                      className="flex-1 flex flex-col h-full cursor-pointer min-w-0"
                      href={cta.url}
                      data-aali={cta.adobeTag}
                    >
                      <div data-bildit-var-name={['firstCardBackgroundImage','secondCardBackgroundImage'][index]} data-bildit-var-type="String">
                      <PictureResponsiveImage
                        images={{
                          mobile: buildImageUrl(image.slug, 'm', image.preset),
                          tablet: buildImageUrl(image.slug, 't', image.preset),
                          desktop: buildImageUrl(image.slug, 'd', image.preset),
                          largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                        }}
                        alt={image.altText}
                        imageClassName="z-10 object-cover object-center"
                        className={`flex w-full relative ${id}-aspect-[mobile-card] md:${id}-aspect-[tablet-card] xl:${id}-aspect-[desktop-card] overflow-hidden`}
                      >
                        <div className="z-20 flex flex-col justify-center items-center w-full px-4 py-6 text-center">
                          {copy.eyebrow && (
                            <p className={`font-bold ${id}-belk-text-clamp-eyebrow`}>{copy.eyebrow}</p>
                          )}
                          {copy.headline && (
                            <h2 className={`font-medium ${id}-belk-text-clamp-headline`}>{copy.headline}</h2>
                          )}
                          {copy.subhead && (
                            <h3 className={`font-medium ${id}-belk-text-clamp-subhead`}>{copy.subhead}</h3>
                          )}
                          {cta.ctaContent && (
                            <Button data-testid={`${id}-cta-button`} variant={ctaVariant}>
                              {cta.ctaContent}
                            </Button>
                          )}
                        </div>
                      </PictureResponsiveImage>
                      </div>
                    </SafeLink>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </>
    );
  };

  export default ThreeUpSpecials;