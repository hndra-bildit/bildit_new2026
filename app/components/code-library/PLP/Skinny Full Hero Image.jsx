"use client"
import { useState } from "react"
import Image from 'next/image';
import Link from 'next/link';

// group { 1. Section Layout }
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="4");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="3");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
//endgroup

// group { 2. Section Background }
const sectionBackgroundImage = $(sectionBackgroundImage:String="wk32_2025_newcms_homepage_coupon_fh_1");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup


// group { 3. CTA Styling }
const ctaUrl = $(ctaUrl:String="/";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="";required=true);
// endgroup

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} suffix - The device suffix for the image
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

  const baseUrl = "https://belk.scene7.com/is";
  const contentType = preset.includes("RAW") ? "content" : "image";

  // Build query string manually to avoid URL encoding the preset parameter
  const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
  })

  return `${baseUrl}/${contentType}/Belk/${deviceSlug}?${preset}&${otherParams.toString()}`
}

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

const SkinnyFullHeroImageStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
       @layer container {
          --${id}-container-aspect-ratio: ${containerAspectRatioWidth || '16'} / ${containerAspectRatioHeight || '3'};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth || '4'} / ${mobileContainerAspectRatioHeight || '3'};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth || '704'} / ${tabletContainerAspectRatioHeight || '200'};
        }
      }
    }
  `}</style>
)

const SkinnyFullHeroImageColumnStyles = ({ id }) => (
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
  
    .${id}-aspect-\\[desktop-container\\] {
      aspect-ratio: var(--${id}-container-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-container\\] {
      aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-container\\] {
      aspect-ratio: var(--${id}-mobile-container-aspect-ratio);
    }
   
    @media (width >= 48rem) and (width < 80rem) {
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
    }
    @media (width >= 80rem) {
      .lg\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
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

  

const SkinnyFullHeroImage = ({ id }) => (
  <>
    <SkinnyFullHeroImageStyleVars id={id}/>
    <SkinnyFullHeroImageColumnStyles id={id}/>
    <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
      <WrapperComponent className="w-full cursor-pointer" href={ctaUrl} data-aali={ctaAdobeTag}>
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(sectionBackgroundImage, "m", sectionBackgroundImagePreset),
            tablet: buildImageUrl(sectionBackgroundImage, "t", sectionBackgroundImagePreset),
            desktop: buildImageUrl(sectionBackgroundImage, "d", sectionBackgroundImagePreset),
            largeDesktop: buildImageUrl(sectionBackgroundImage, "l", sectionBackgroundImagePreset),
          }}
          alt={sectionBackgroundAlt}
          imageClassName="-z-1 object-cover object-center"
          className={`flex w-full relative ${id}-aspect-[mobile-container] md:${id}-aspect-[tablet-container]  xl:${id}-aspect-[desktop-container] ${roundedCornersTop} ${roundedCornersBottom}`}
          data-bildit-var-name="sectionBackgroundImage"
          data-bildit-var-type="String"
        >
        </PictureResponsiveImage>
      </WrapperComponent>
    </ResponsiveContainer>
  </>
)

export default SkinnyFullHeroImage