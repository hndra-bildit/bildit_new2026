"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group { 2. Section Layout }
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true);
// endgroup

// group { 3. Column Layout }
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="4";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="1";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="4";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="3";required=true);
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="4";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="3";required=true);
const columnRoundedCornersTop = $(columnRoundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const columnRoundedCornersBottom = $(columnRoundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
// endgroup

// group { 3.1. Responsive Grid Configuration }
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-2");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-1");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-1");
const gridGap = $(gridGap:Dropdown[None|gap-0,Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-0");
// endgroup

// group { 4. Column 1 }
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="flat_wk32_090825_spec_wacoal_fh_1");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { 5. Column 2 }
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { 6. Column 3 }
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { 7. Column 4 }
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
// endgroup

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} suffix - Device suffix ('m', 't', 'd', 'l') or null
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
  if (suffix === 'd' || suffix === 'l') {
    deviceSlug = slug;
  }

  const baseUrl = "https://belk.scene7.com/is";
  const contentType = preset.includes("RAW") ? "content" : "image";
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
 * PictureResponsiveImage - Handles responsive image loading with proper fallbacks
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
      {showImage && <picture>
        {isValidImageUrl(mobile) && <source media="(max-width: 767px)" srcSet={mobile} />}
        {isValidImageUrl(tablet) && <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={tablet} />}
        {isValidImageUrl(desktop) && <source media="(min-width: 1024px) and (max-width: 1279px)" srcSet={desktop} />}
        {isValidImageUrl(largeDesktop) && <source media="(min-width: 1280px)" srcSet={largeDesktop} />}
        <Image
          className={`${imageClassName}`}
          src={fallbackSrc}
          alt={alt ?? ''}
          fill
          sizes="100vw"
          onError={handleError}
        />
      </picture>}
      {children}
    </div>
  );
}

/**
 * SafeLink - Conditionally renders a Link component or fragment based on href presence
 */
const SafeLink = ({ href, children, ...props }) => (
  href ? <Link {...props} href={href}>{children}</Link> : <>{children}</>
);

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
        return '[&>div]:mx-4 [&>div]:sm:mx-4 [&>div]:md:mx-auto [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5';
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

/**
 * TwoFourUpColumnStyleVars - Defines CSS custom properties for dynamic styling
 */
const TwoFourUpColumnStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer columns {
          --${id}-desktop-column-aspect-ratio: ${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight};
          --${id}-tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight};
          --${id}-mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight};
          --${id}-mobile-grid-layout: ${mobileGridLayout};
          --${id}-tablet-grid-layout: ${tabletGridLayout};
          --${id}-desktop-grid-layout: ${desktopGridLayout};
          --${id}-grid-gap: ${gridGap};
        }
      }
    }
  `}</style>
)

/**
 * TwoFourUpColumnStyles - Defines utility CSS classes for dynamic content
 */
const TwoFourUpColumnStyles = ({ id }) => (
  <style>{`
    .${id}-aspect-\\[desktop-column\\] {
      aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-column\\] {
      aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-column\\] {
      aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
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
    .${id}-gap-0 {
      gap: 0;
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
      .md\\:${id}-aspect-\\[tablet-column\\] {
        aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
      }
      .md\\:rounded-2xl {
        border-radius: var(--radius-2xl);
      }
    }
    @media (width >= 64rem) {
      .lg\\:${id}-grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .lg\\:${id}-grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .lg\\:${id}-grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .lg\\:${id}-grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .lg\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
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
      .xl\\:${id}-grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
      }
      .${id}-text-fallback-center{
        text-align:center;
         text-align:-webkit-center;
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

    /* Tailwind purging prevention */
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
    @media (width >= 48rem) {
      .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\\(--breakpoint-3xl\\)\\] > div {
        max-width: var(--breakpoint-3xl);
      }
      .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
    //  .\\[\\&\\>div\\]\\:md\\:mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] > div {
    //     margin-left: max(36px, (100vw - 1560px) / 2);
    //     margin-right: max(36px, (100vw - 1560px) / 2);
    //   }
      .\\[\\&\\>div\\]\\:md\\:max-w-full > div {
        max-width: 100%;
      }
      .\\[\\&\\>div\\]\\:md\\:px-5 > div {
        padding-left: calc(var(--spacing) * 5);
        padding-right: calc(var(--spacing) * 5);
      }
    }
  `}</style>
)

const TwoFourUpColumn = ({ id }) => {
  const columns = [
    {
      image: {
        slug: firstColumnBackgroundImage,
        altText: firstColumnBackgroundImageAltText,
        preset: firstColumnBackgroundImagePreset
      },
      url: firstColumnCtaUrl,
      adobeTag: firstColumnCtaAdobeTag
    },
    {
      image: {
        slug: secondColumnBackgroundImage,
        altText: secondColumnBackgroundImageAltText,
        preset: secondColumnBackgroundImagePreset
      },
      url: secondColumnCtaUrl,
      adobeTag: secondColumnCtaAdobeTag
    },
    {
      image: {
        slug: thirdColumnBackgroundImage,
        altText: thirdColumnBackgroundImageAltText,
        preset: thirdColumnBackgroundImagePreset
      },
      url: thirdColumnCtaUrl,
      adobeTag: thirdColumnCtaAdobeTag
    },
    {
      image: {
        slug: fourthColumnBackgroundImage,
        altText: fourthColumnBackgroundImageAltText,
        preset: fourthColumnBackgroundImagePreset
      },
      url: fourthColumnCtaUrl,
      adobeTag: fourthColumnCtaAdobeTag
    }
  ];
  
  // Filter out columns without a valid image slug (trim + valid URL)
  const activeColumns = columns.filter((col) => {
    const slug = col?.image?.slug;
    if (!slug || typeof slug !== 'string' || !slug.trim()) return false;
    const url = buildImageUrl(slug.trim(), 'm', col.image.preset);
    return isValidImageUrl(url);
  });

  if (activeColumns.length === 0) return null;

  // Use user's grid layout choice; only override when column count is 0 or 1
  const getGridLayout = (columnCount, userLayout) => {
    if (columnCount === 0) return 'grid-cols-1';
    if (columnCount === 1) return 'grid-cols-1';
    return userLayout;
  };

  const effectiveMobileGridLayout = getGridLayout(activeColumns.length, mobileGridLayout);
  const effectiveTabletGridLayout = getGridLayout(activeColumns.length, tabletGridLayout);
  const effectiveDesktopGridLayout = getGridLayout(activeColumns.length, desktopGridLayout);

  const columnRoundedTop = (columnRoundedCornersTop === 'None' || !columnRoundedCornersTop) ? 'rounded-t-none' : columnRoundedCornersTop;
  const columnRoundedBottom = (columnRoundedCornersBottom === 'None' || !columnRoundedCornersBottom) ? 'rounded-b-none' : columnRoundedCornersBottom;

  return (
    <>
      <TwoFourUpColumnStyleVars id={id} />
      <TwoFourUpColumnStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full ${id}-text-fallback-center relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div className={`relative grid ${id}-${effectiveMobileGridLayout} md:${id}-${effectiveTabletGridLayout} lg:${id}-${effectiveDesktopGridLayout} xl:${id}-${effectiveDesktopGridLayout} ${id}-${gridGap} overflow-hidden`}>
          {activeColumns.map(({image, url, adobeTag}, index) => (
            <div key={index} className="w-full">
              <SafeLink href={url} data-aali={adobeTag} className="w-full cursor-pointer">
                <div data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage','thirdColumnBackgroundImage','fourthColumnBackgroundImage'][index]} data-bildit-var-type="String">
                <PictureResponsiveImage
                  images={{
                    mobile: buildImageUrl(image.slug, 'm', image.preset),
                    tablet: buildImageUrl(image.slug, 't', image.preset),
                    desktop: buildImageUrl(image.slug, 'd', image.preset),
                    largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                  }}
                  alt={image.altText}
                  imageClassName="object-cover object-center"
                  className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] lg:${id}-aspect-[desktop-column] xl:${id}-aspect-[desktop-column] ${columnRoundedTop} ${columnRoundedBottom}`}
                />
                </div>
              </SafeLink>
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default TwoFourUpColumn;