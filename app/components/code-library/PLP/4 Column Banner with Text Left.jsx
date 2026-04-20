"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group { Section Settings }
const sectionTitle = $(sectionTitle:RichText="";color="#000000");
const sectionAlignment = $(sectionAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#FFFFFF");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-8");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const width = $(width:Dropdown[Full Width|full,Inset|max-w-inset]="full");
// endgroup

// group { Column Settings }
const columnWidth = $(columnWidth:String="4");
const columnHeight = $(columnHeight:String="5");
const columnAlignment = $(columnAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
// endgroup

// group { Image Settings }
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

// group { Font Settings }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:String="14");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:String="16");
const headlineMinimumFontSize = $(headlineMinimumFontSize:String="24");
const headlineMaximumFontSize = $(headlineMaximumFontSize:String="54");
const subheadMinimumFontSize = $(subheadMinimumFontSize:String="16");
const subheadMaximumFontSize = $(subheadMaximumFontSize:String="28");
const ctaMinimumFontSize = $(ctaMinimumFontSize:String="16");
const ctaMaximumFontSize = $(ctaMaximumFontSize:String="20");
const categoryMinimumFontSize = $(categoryMinimumFontSize:String="16");
const categoryMaximumFontSize = $(categoryMaximumFontSize:String="28");
// endgroup

// group { CTA Settings }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#000000");
// endgroup

// group { First Column Background }
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#E07B5B");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup

// group { First Column Eyebrow }
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="LOREM IPSUM DOLOR";color="#FFFFFF");
// endgroup

// group { First Column Headline }
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="Lorem 29.99";color="#FFFFFF");
// endgroup

// group { First Column Subhead }
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="Lorem ipsum dolor sit";color="#FFFFFF");
// endgroup

// group { First Column CTA }
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="Shop Now";color="#FFFFFF");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { First Column Category }
const firstColumnCategory = $(firstColumnCategory:RichText="";color="#FFFFFF");
// endgroup

// group { Second Column Background }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#E07B5B");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup

// group { Second Column Eyebrow }
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="LOREM IPSUM DOLOR";color="#FFFFFF");
// endgroup

// group { Second Column Headline }
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="Lorem 29.99";color="#FFFFFF");
// endgroup

// group { Second Column Subhead }
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="Lorem ipsum dolor sit";color="#FFFFFF");
// endgroup

// group { Second Column CTA }
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop Now";color="#FFFFFF");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { Second Column Category }
const secondColumnCategory = $(secondColumnCategory:RichText="";color="#FFFFFF");
// endgroup

// group { Third Column Background }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color="#E07B5B");
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup

// group { Third Column Eyebrow }
const thirdColumnEyebrowImage = $(thirdColumnEyebrowImage:String="");
const thirdColumnEyebrowImageAltText = $(thirdColumnEyebrowImageAltText:String="");
const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText="LOREM IPSUM DOLOR";color="#FFFFFF");
// endgroup

// group { Third Column Headline }
const thirdColumnHeadlineImage = $(thirdColumnHeadlineImage:String="");
const thirdColumnHeadlineImageAltText = $(thirdColumnHeadlineImageAltText:String="");
const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText="Lorem 29.99";color="#FFFFFF");
// endgroup

// group { Third Column Subhead }
const thirdColumnSubheadImage = $(thirdColumnSubheadImage:String="");
const thirdColumnSubheadImageAltText = $(thirdColumnSubheadImageAltText:String="");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText="Lorem ipsum dolor sit";color="#FFFFFF");
// endgroup

// group { Third Column CTA }
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText="Shop Now";color="#FFFFFF");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { Third Column Category }
const thirdColumnCategory = $(thirdColumnCategory:RichText="";color="#FFFFFF");
// endgroup

// group { Fourth Column Background }
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color="#E07B5B");
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup

// group { Fourth Column Eyebrow }
const fourthColumnEyebrowImage = $(fourthColumnEyebrowImage:String="");
const fourthColumnEyebrowImageAltText = $(fourthColumnEyebrowImageAltText:String="");
const fourthColumnEyebrowContent = $(fourthColumnEyebrowContent:RichText="LOREM IPSUM DOLOR";color="#FFFFFF");
// endgroup

// group { Fourth Column Headline }
const fourthColumnHeadlineImage = $(fourthColumnHeadlineImage:String="");
const fourthColumnHeadlineImageAltText = $(fourthColumnHeadlineImageAltText:String="");
const fourthColumnHeadlineContent = $(fourthColumnHeadlineContent:RichText="Lorem 29.99";color="#FFFFFF");
// endgroup

// group { Fourth Column Subhead }
const fourthColumnSubheadImage = $(fourthColumnSubheadImage:String="");
const fourthColumnSubheadImageAltText = $(fourthColumnSubheadImageAltText:String="");
const fourthColumnSubheadContent = $(fourthColumnSubheadContent:RichText="Lorem ipsum dolor sit";color="#FFFFFF");
// endgroup

// group { Fourth Column CTA }
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText="Shop Now";color="#FFFFFF");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
// endgroup

// group { Fourth Column Category }
const fourthColumnCategory = $(fourthColumnCategory:RichText="";color="#FFFFFF");
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
    category: firstColumnCategory
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
    category: secondColumnCategory
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
    category: thirdColumnCategory
  },
  {
    backgroundColor: 'fourth-column-background-color',
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
    category: fourthColumnCategory
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
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }
  
  let deviceSlug = slug;
  
  if (suffix) {
    deviceSlug = `${slug}_${suffix}`;
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
          {isValidImageUrl(tablet) && <source alt={alt ?? ''} media="(min-width: 768px)" srcSet={tablet} />}
          {isValidImageUrl(desktop) && <source alt={alt ?? ''} media="(min-width: 1440px)" srcSet={desktop} />}
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

const FourColumnStandardShortStyleVars = () => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        --container-background-color: ${sectionBackgroundColor};
        --container-font-family: ${fontFamily};
        --column-aspect-ratio: ${columnWidth || '4'} / ${columnHeight || '5'};
        --eyebrow-aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
        --headline-aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
        --subhead-aspect-ratio: ${subheadImageWidth} / ${subheadImageHeight};
        --cta-background-color: ${ctaBackgroundColor};
        --eyebrow-font-size: clamp(${eyebrowMinimumFontSize}px, 1.5vw, ${eyebrowMaximumFontSize}px);
        --eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
        --eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        --headline-font-size: clamp(${headlineMinimumFontSize}px, 1.5vw, ${headlineMaximumFontSize}px);
        --headline-max-width: clamp(${headlineImageWidth}px, 50vw, ${headlineImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
        --headline-max-height: clamp(${headlineImageHeight}px, 50vw, ${headlineImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        --subhead-font-size: clamp(${subheadMinimumFontSize}px, 1.5vw, ${subheadMaximumFontSize}px);
        --subhead-max-width: clamp(${subheadImageWidth}px, 50vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
        --subhead-max-height: clamp(${subheadImageHeight}px, 50vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
        --category-font-size: clamp(${categoryMinimumFontSize}px, 1vw, ${categoryMaximumFontSize}px);
        --cta-font-size: clamp(${ctaMinimumFontSize}px, 2vw, ${ctaMaximumFontSize}px);

        --column-horizontal-padding: clamp(10px, 3vw, 40px);
        --first-column-background-color: ${firstColumnBackgroundColor};
        --second-column-background-color: ${secondColumnBackgroundColor};
        --third-column-background-color: ${thirdColumnBackgroundColor};
        --fourth-column-background-color: ${fourthColumnBackgroundColor};
      }
    }
  `}</style>
)

const FourColumnStandardShortStyles = () => (
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
    .first-column-background-color {
      background-color: var(--first-column-background-color);
    }
    .second-column-background-color {
      background-color: var(--second-column-background-color);
    }
    .third-column-background-color {
      background-color: var(--third-column-background-color);
    }
    .fourth-column-background-color {
      background-color: var(--fourth-column-background-color);
    }
    .container-background-color {
      background-color: var(--container-background-color);
    }
    .container-font-family {
      font-family: var(--container-font-family);
    }
    .column-horizontal-padding {
      padding-left: var(--column-horizontal-padding);
      padding-right: var(--column-horizontal-padding);
    }
    .aspect-\\[343\\/160\\] {
      aspect-ratio: 343 / 160;
    }
    .aspect-\\[column\\] {
      aspect-ratio: var(--column-aspect-ratio);
    }
    .aspect-\\[column\\] picture {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .aspect-\\[column\\] picture img {
      object-fit: cover;
      object-position: center;
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
    .belk-text-clamp-category {
      font-size: var(--category-font-size);
      line-height: 1.3;
      letter-spacing: 0.01em;
    }
    @media (width >= 48rem) {
      .tablet\\:px-8 {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .tablet\\:rounded-2xl {
        border-radius: var(--radius-2xl);
      }
      .tablet\\:aspect-\\[704\\/200\\] {
        aspect-ratio: 704 / 200;
      }
      .tablet\\:my-2 {
        margin-top: calc(var(--spacing) * 2);
        margin-bottom: calc(var(--spacing) * 2);
      }
      .tablet\\:my-4 {
        margin-top: calc(var(--spacing) * 4);
        margin-bottom: calc(var(--spacing) * 4);
      }
      .tablet\\:my-8 {
        margin-top: calc(var(--spacing) * 8);
        margin-bottom: calc(var(--spacing) * 8);
      }
      .tablet\\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
    .eyebrow-spacing {
      margin-bottom: 0.25rem;
    }
    .headline-spacing {
      margin-bottom: 0.375rem;
    }
    .subhead-spacing {
      margin-bottom: 0.375rem;
    }
    .cta-spacing {
      margin-top: 0.25rem;
    }
    .column-content-padding {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  `}</style>
)

const WrapperComponent = ({ href, children, ...props }) => (
  href ? <Link {...props} href={href}>{children}</Link> : <>{children}</>
)
/*
  Derived from alignment constants for text alignment.
*/
const textAlignment = {
  'items-start': 'text-left',
  'items-center': 'text-center',
  'items-end': 'text-right',
};

const columnBackgroundImageVars = ['firstColumnBackgroundImage', 'secondColumnBackgroundImage', 'thirdColumnBackgroundImage', 'fourthColumnBackgroundImage'];
const columnEyebrowImageVars = ['firstColumnEyebrowImage', 'secondColumnEyebrowImage', 'thirdColumnEyebrowImage', 'fourthColumnEyebrowImage'];
const columnHeadlineImageVars = ['firstColumnHeadlineImage', 'secondColumnHeadlineImage', 'thirdColumnHeadlineImage', 'fourthColumnHeadlineImage'];
const columnSubheadImageVars = ['firstColumnSubheadImage', 'secondColumnSubheadImage', 'thirdColumnSubheadImage', 'fourthColumnSubheadImage'];
const columnEyebrowContentVars = ['firstColumnEyebrowContent', 'secondColumnEyebrowContent', 'thirdColumnEyebrowContent', 'fourthColumnEyebrowContent'];
const columnHeadlineContentVars = ['firstColumnHeadlineContent', 'secondColumnHeadlineContent', 'thirdColumnHeadlineContent', 'fourthColumnHeadlineContent'];
const columnSubheadContentVars = ['firstColumnSubheadContent', 'secondColumnSubheadContent', 'thirdColumnSubheadContent', 'fourthColumnSubheadContent'];
const columnCtaContentVars = ['firstColumnCtaContent', 'secondColumnCtaContent', 'thirdColumnCtaContent', 'fourthColumnCtaContent'];
const columnCategoryVars = ['firstColumnCategory', 'secondColumnCategory', 'thirdColumnCategory', 'fourthColumnCategory'];

const FourColumnStandardShort = () => {
  const alignment = typeof sectionAlignment === 'string' ? sectionAlignment : 'items-start';
  return (
  <>
    <FourColumnStandardShortStyleVars />
    <FourColumnStandardShortStyles />
    <PictureResponsiveImage
      images={{
        mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
        tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
        desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
        largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
      }}
      alt={sectionBackgroundAlt}
      imageClassName="-z-10 object-cover object-center"
      className={`w-full relative container-background-color overflow-hidden ${alignment} ${width} ${topMargin} ${bottomMargin} mx-auto px-4 py-4`}
      data-bildit-var-name="sectionBackgroundImage"
      data-bildit-var-type="String"
    >
      {sectionTitle && <h2 className={`flex flex-col relative w-full text-2xl font-bold mb-4 ${alignment} ${width} ${topMargin} mb-4`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</h2>}
      <div className={`relative w-full grid grid-cols-2 tablet:grid-cols-4 gap-4 overflow-hidden container-font-family`}>
        {columns.map(({backgroundColor, image, eyebrow, headline, subhead, cta, category}, index) => (
          <WrapperComponent key={index} className="w-full cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
            <div className={`relative w-full rounded-lg tablet:rounded-2xl overflow-hidden ${backgroundColor} ${(typeof image.slug === 'string' && image.slug.trim()) ? 'aspect-[column] min-h-[120px]' : 'column-content-padding'}`}>
              {(typeof image.slug === 'string' && image.slug.trim()) ? (
                <div className="absolute inset-0 z-0">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(image.slug, 'm', image.preset),
                      tablet: buildImageUrl(image.slug, 't', image.preset),
                      desktop: buildImageUrl(image.slug, 'd', image.preset),
                      largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                    }}
                    alt={image.altText}
                    imageClassName="object-cover object-center w-full h-full"
                    className="absolute inset-0 w-full h-full"
                    data-bildit-var-name={columnBackgroundImageVars[index]}
                    data-bildit-var-type="String"
                  />
                </div>
              ) : null}
              <div className={`${(typeof image.slug === 'string' && image.slug.trim()) ? 'absolute inset-0 z-10' : 'relative'} flex flex-col justify-center ${columnAlignment} ${textAlignment[columnAlignment]} column-horizontal-padding overflow-hidden`}>
                {eyebrow?.image?.slug && eyebrow?.image?.slug?.length > 0 ? (
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset),
                      tablet: buildImageUrl(eyebrow.image.slug, 't', eyebrow.image.preset),
                      desktop: buildImageUrl(eyebrow.image.slug, 'd', eyebrow.image.preset),
                      largeDesktop: buildImageUrl(eyebrow.image.slug, 'l', eyebrow.image.preset),
                    }}
                    alt={eyebrow.image.altText}
                    className="my-2 aspect-[eyebrow] w-full max-w-[eyebrow] h-[eyebrow]"
                    imageClassName="object-contain object-center"
                    data-bildit-var-name={columnEyebrowImageVars[index]}
                    data-bildit-var-type="String"
                  />
                ) : (
                  eyebrow.content && <p className="belk-text-clamp-eyebrow font-bold eyebrow-spacing" data-bildit-var-name={columnEyebrowContentVars[index]} data-bildit-var-type="RichText">{eyebrow.content}</p>
                )}

                {headline?.image?.slug && headline?.image?.slug?.length > 0 ? (
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(headline.image.slug, 'm', headline.image.preset),
                      tablet: buildImageUrl(headline.image.slug, 't', headline.image.preset),
                      desktop: buildImageUrl(headline.image.slug, 'd', headline.image.preset),
                      largeDesktop: buildImageUrl(headline.image.slug, 'l', headline.image.preset),
                    }}
                    alt={headline.image.altText}
                    className="my-2 tablet:my-4 aspect-[headline] w-full max-w-[headline] h-[headline]"
                    imageClassName="object-contain object-center"
                    data-bildit-var-name={columnHeadlineImageVars[index]}
                    data-bildit-var-type="String"
                  />
                ) : (
                  headline?.content && <h2 className="my-1 font-bold belk-text-clamp-headline headline-spacing" data-bildit-var-name={columnHeadlineContentVars[index]} data-bildit-var-type="RichText">{headline.content}</h2>
                )}

                {subhead?.image?.slug && subhead?.image?.slug?.length > 0 ? (
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(subhead.image.slug, 'm', subhead.image.preset),
                      tablet: buildImageUrl(subhead.image.slug, 't', subhead.image.preset),
                      desktop: buildImageUrl(subhead.image.slug, 'd', subhead.image.preset),
                      largeDesktop: buildImageUrl(subhead.image.slug, 'l', subhead.image.preset),
                    }}
                    alt={subhead.image.altText}
                    className="my-1 tablet:my-2 aspect-[subhead] w-full h-full max-w-[subhead] max-h-[subhead]"
                    imageClassName="object-contain object-center"
                    data-bildit-var-name={columnSubheadImageVars[index]}
                    data-bildit-var-type="String"
                  />
                ) : (
                  subhead.content && <h3 className="my-1 belk-text-clamp-subhead subhead-spacing" data-bildit-var-name={columnSubheadContentVars[index]} data-bildit-var-type="RichText">{subhead.content}</h3>
                )}

                {cta.content && (
                  <Button className="my-1 belk-text-clamp-cta cta-spacing" variant={ctaVariant} data-bildit-var-name={columnCtaContentVars[index]} data-bildit-var-type="RichText">{cta.content}</Button>
                )}
                {category && (
                  <p className="belk-text-clamp-category font-bold my-2 px-2" data-bildit-var-name={columnCategoryVars[index]} data-bildit-var-type="RichText">{category}</p>
                )}
              </div>
            </div>
          </WrapperComponent>
        ))}
      </div>
    </PictureResponsiveImage>
  </>
  );
};

export default FourColumnStandardShort;