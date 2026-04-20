"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// group: { 1. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-none");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-none");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="1600");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="112");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="704");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="152");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="343");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="212");
// endgroup

// group: { 2. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#FFFFFF");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="Section background");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const eyebrowText = $(eyebrowText:RichText="eyebrow";color="#000000");
const headlineText = $(headlineText:RichText="Fashion Jewelry";color="#000000");
const subheadText = $(subheadText:RichText="Upto 50% Off";color="#000000");
const ctaContent = $(ctaContent:RichText="Shop Now";color="#000000");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaAlignment = $(ctaAlignment:Dropdown[Left|left,Middle|center,Right|right]="left");
const ctaUrl = $(ctaUrl:String="/";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="sale-divider-cta";required=true);
// endgroup

// group: { 3. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.75rem");
const eyebrowMaximumFontSize  =  $(eyebrowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.75rem");
const headlineMinimumFontSize = $(headlineMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.5rem");
const headlineMaximumFontSize = $(headlineMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.5rem");
const subheadMinimumFontSize = $(subheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.938rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.938rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
// endgroup




const MOBILE_TO_DESKTOP_RATIO = 3.159;

/**
 * Truncates text to a maximum of 11 characters
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length (default 11)
 * @returns {string} The truncated text
 */
function truncateText(text, maxLength = 11) {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength)
}

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
        <picture>
          {isValidImageUrl(mobile) && <source media="(max-width: 767px)" srcSet={mobile} />}
          {isValidImageUrl(tablet) && <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
          {isValidImageUrl(desktop) && <source media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
          {isValidImageUrl(largeDesktop) && <source media="(min-width: 1920px)" srcSet={largeDesktop} />}
          <Image
            className={imageClassName}
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

const SaleDividerStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-aspect-ratio: ${containerAspectRatioWidth} / ${containerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
        }

         @layer typography {
             --${id}-container-font-family: ${fontFamily};
               --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}, 2vw, ${eyebrowMaximumFontSize});
           --${id}-headline-font-size: clamp(${headlineMinimumFontSize}, 2vw, ${headlineMaximumFontSize});
           --${id}-subhead-font-size: clamp(${subheadMinimumFontSize}, 2vw, ${subheadMaximumFontSize});
            --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 3vw, ${ctaMaximumFontSize});
            --${id}-cta-background-color: ${ctaBackgroundColor};
         }
         

      }
    }
  `}</style>
)


const SaleDividerStyles = ({ id }) => (
   <style>{`

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

     .${id}-container-background-color {
      background-color: var(--${id}-container-background-color);
    }
    .${id}-container-font-family {
      font-family: var(--${id}-container-font-family);
    }
       .${id}-belk-text-clamp-eyebrow {
      font-size: var(--${id}-eyebrow-font-size);
      letter-spacing: 0.02em;
    }

   
    .${id}-belk-text-clamp-headline {
      font-size: var(--${id}-headline-font-size);
      letter-spacing: 0.02em;
    }

    .${id}-belk-text-clamp-subhead {
      font-size: var(--${id}-subhead-font-size);
      letter-spacing: 0.02em;
    }

     .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-cta-font-size);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }
    
    .${id}-cta-background-color {
      background-color: var(--${id}-cta-background-color);
    }

     @media (width >= 48rem) {
     }

  
    @media (width >= 40rem) {
      .\\[\\&\\>div\\]\\:sm\\:mx-8 > div {
        margin-left: calc(var(--spacing) * 8);
        margin-right: calc(var(--spacing) * 8);
      }
    }
   
  @media (width < 48rem) {
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

    }


    @media (width >= 64rem) {
     .lg\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }


    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[column\\] {
        aspect-ratio: var(--${id}-column-aspect-ratio);
      }

    }

  @media (width >=80rem) and (width <96rem)
  {
  }

  @media (width >=96rem){
  }

  /* Added specific media query for 1024px-1280px range to ensure grid-cols-4 with 2 rows */
    @media (min-width: 1024px) and (max-width: 1279px) {
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

    .whitespace-wrap {
      white-space: nowrap;
    }
      
  `}</style>
)

const WrapperComponent = ({ href, children, ...props }) =>
  href ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  )

const ResponsiveContainer = ({ containerBehavior, className = "", children }) => {
  // Standardized container behavior logic
  const containerClasses = (() => {
    switch (containerBehavior) {
      case "max-w-full":
        return "[&>div]:md:max-w-full [&>div]:w-full [&>div]:px-8"
      case "max-w-inset":
        return "px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:mx-auto [&>div]:md:px-8 [&>div]:w-full"
       case "max-w-centered":
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5"
      default:
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5" // Default to centered
    }
  })()

  return <div className={`${containerClasses} ${className}`}>{children}</div>
}
/*
  Derived from alignment constants for text alignment.
*/
const textAlignment = {
  "items-start": "text-left",
  "items-center": "text-center",
  "items-end": "text-right",
}

const SaleDivider = ({ id }) => {
  const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : 'items-center') || 'items-center';
  const textClass = textAlignment[alignment] ?? 'text-center';
  const bgImages = {
    mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
    tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
    desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
    largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
  };
  const hasValidBgImage = isValidImageUrl(bgImages.mobile) || isValidImageUrl(bgImages.tablet) || isValidImageUrl(bgImages.desktop) || isValidImageUrl(bgImages.largeDesktop);
  const contentWrapperClass = `relative flex flex-col ${alignment} ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color py-6 px-5`;

  const innerContent = (
    <div className={`inset-0 h-fit ${id}-cta-container-px ${id}-container-font-family flex flex-col ${alignment}`} data-bildit-var-name="ctaUrl" data-bildit-var-type="String">
      <WrapperComponent
        href={ctaUrl}
        data-aali={ctaAdobeTag}
        className="flex flex-shrink-0"
      >
        <span
          data-bildit-var-name="ctaAdobeTag"
          data-bildit-var-type="String"
          style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}
          aria-hidden
        />
        <div className={textClass}>
          {eyebrowText != null && eyebrowText !== '' && (
            <p
              className={`${id}-belk-text-clamp-eyebrow uppercase mb-1`}
              data-bildit-var-name="eyebrowText"
              data-bildit-var-type="RichText"
            >
              {eyebrowText}
            </p>
          )}
          <h1
            className={`${id}-belk-text-clamp-headline`}
            data-bildit-var-name="headlineText"
            data-bildit-var-type="RichText"
          >
            {headlineText}
          </h1>
          <h3
            className={`${id}-belk-text-clamp-subhead`}
            data-bildit-var-name="subheadText"
            data-bildit-var-type="RichText"
          >
            {subheadText}
          </h3>
          {ctaContent != null && ctaContent !== '' && (
            <Button
              className={`cursor-pointer ${id}-belk-text-clamp-cta ${ctaVariant === 'solid' ? `${id}-cta-background-color` : ''}`}
              variant={ctaVariant}
            >
              <span data-bildit-var-name="ctaContent" data-bildit-var-type="RichText">{ctaContent}</span>
            </Button>
          )}
        </div>
      </WrapperComponent>
    </div>
  );

  return (
    <>
      <SaleDividerStyleVars id={id} />
      <SaleDividerStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div
          className="w-auto h-px"
          style={{ backgroundColor: 'currentColor' }}
        />
        {hasValidBgImage ? (
          <div data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
            <PictureResponsiveImage
              images={bgImages}
              alt={sectionBackgroundAlt}
              imageClassName="-z-1 object-cover object-center relative"
              className={contentWrapperClass}
            >
              {innerContent}
            </PictureResponsiveImage>
          </div>
        ) : (
          <div className={contentWrapperClass} data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
            {innerContent}
          </div>
        )}
        <div className="w-auto h-px" style={{ backgroundColor: 'currentColor' }} />
      </ResponsiveContainer>
    </>
  );
};

export default SaleDivider