"use client"
// @version v26
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// group: { 1. Section Layout }
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true); // Options: max-w-full, max-w-inset, max-w-centered
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-xl");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-xl");
const containerAspectRatioWidth = $(containerAspectRatioWidth:String="");
const containerAspectRatioHeight = $(containerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
// endgroup

// group: { 2. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#e0e0e0");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
// endgroup

// group: { 3. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
// endgroup

// group: { 4. CTA Styling }
const ctaButtonCount = $(ctaButtonCount:Dropdown[4 Buttons|4,6 Buttons|6,8 Buttons|8]="8");
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const ctaButtonBackgroundColor = $(ctaButtonBackgroundColor:Color="#000000");
// endgroup

// group: { 5. CTA 1 }
const firstCtaContent = $(firstCtaContent:RichText="Shop Now";color="#FFFFFF");
const firstCtaUrl = $(firstCtaUrl:String="/";required=true);
const firstCtaAdobeTag = $(firstCtaAdobeTag:String="";required=true);
// endgroup

// group: { 6. CTA 2 }
const secondCtaContent = $(secondCtaContent:RichText="Learn More";color="#FFFFFF");
const secondCtaUrl = $(secondCtaUrl:String="/";required=true);
const secondCtaAdobeTag = $(secondCtaAdobeTag:String="";required=true);
// endgroup

// group: { 7. CTA 3 }
const thirdCtaContent = $(thirdCtaContent:RichText="See Deals";color="#FFFFFF");
const thirdCtaUrl = $(thirdCtaUrl:String="/";required=true);
const thirdCtaAdobeTag = $(thirdCtaAdobeTag:String="";required=true);
// endgroup

// group: { 8. CTA 4 }
const fourthCtaContent = $(fourthCtaContent:RichText="Explore";color="#FFFFFF");
const fourthCtaUrl = $(fourthCtaUrl:String="/";required=true);
const fourthCtaAdobeTag = $(fourthCtaAdobeTag:String="";required=true);
// endgroup

// group: { 9. CTA 5 }
const fifthCtaContent = $(fifthCtaContent:RichText="Shop Sale";color="#FFFFFF");
const fifthCtaUrl = $(fifthCtaUrl:String="/";required=true);
const fifthCtaAdobeTag = $(fifthCtaAdobeTag:String="";required=true);
// endgroup

// group: { 10. CTA 6 }
const sixthCtaContent = $(sixthCtaContent:RichText="View All";color="#FFFFFF");
const sixthCtaUrl = $(sixthCtaUrl:String="/";required=true);
const sixthCtaAdobeTag = $(sixthCtaAdobeTag:String="";required=true);
// endgroup

// group: { 11. CTA 7 }
const seventhCtaContent = $(seventhCtaContent:RichText="Get Offers";color="#FFFFFF");
const seventhCtaUrl = $(seventhCtaUrl:String="/";required=true);
const seventhCtaAdobeTag = $(seventhCtaAdobeTag:String="";required=true);
// endgroup

// group: { 12. CTA 8 }
const eighthCtaContent = $(eighthCtaContent:RichText="Discover";color="#FFFFFF");
const eigthCtaUrl = $(eigthCtaUrl:String="/";required=true);
const eigthCtaAdobeTag = $(eigthCtaAdobeTag:String="";required=true);
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

const Button = ({ variant = "underline", className = "relative flex cursor-pointer", children }) => {
  if (variant === "solid") {
    return (
      <button
        className={`flex-col font-bold gap-1.5 belk-button ${className}  rounded-md flex-shrink-0 text-center`}
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
}
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

const CtaBarStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-font-family: ${fontFamily};
          --${id}-container-aspect-ratio: ${containerAspectRatioWidth} / ${containerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaButtonBackgroundColor};
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 2vw, ${ctaMaximumFontSize});
        }
      }
    }
  `}</style>
)


const CtaBarStyles = ({ id }) => (
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
   
    .${id}-bg-solid-button {
      background-color: var(--${id}-cta-background-color);
    }
    .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-cta-font-size);
      letter-spacing: 0.02em;
    }

    
    /* Added custom class for CTA grid container with proper breakpoint handling */
    .${id}-cta-grid-container {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 4 buttons layout:  */
    .${id}-cta-grid-container-4 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 6 buttons layout:  */
    .${id}-cta-grid-container-6 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* 8 buttons layout */
    .${id}-cta-grid-container-8 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

     @media (width >= 48rem) {
         /* Tablet button dimensions: 97px width, 16px height, 8px padding */
      .${id}-cta-button-width {
        min-width: 113px;
        min-height: 32px;
        height:100%;
        width:100%;
       // padding:8px;
      }

     /* 4 buttons: 1 row x 4 columns on tablet/desktop */
      .${id}-cta-grid-container-4 {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 6 buttons: 2 rows x 3 columns on tablet */
      .${id}-cta-grid-container-6 {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      /* 8 buttons: Keep existing 4 column grid */
      .${id}-cta-grid-container-8 {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
     }

  
    @media (width >= 40rem) {
      .\\[\\&\\>div\\]\\:sm\\:mx-8 > div {
        margin-left: calc(var(--spacing) * 8);
        margin-right: calc(var(--spacing) * 8);
      }
    }
   
  @media (width < 48rem) {
       .${id}-cta-button-width {
        min-width: 104px;
        min-height: 32px;
        height:100%;
        width:100%;
       // padding:8px;
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
      .md\\:rounded-2xl {
        border-radius: var(--radius-2xl);
      }

      .cta-cont-px{
         padding-left: max(36px, (100vw - 1560px) / 2);
         padding-right: max(36px, (100vw - 1560px) / 2);
      }

    }


    @media (width >= 64rem) {
     .lg\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }

      .${id}-cta-button-width {
         min-width: 113px;
        min-height: 32px;
        height:100%;
        width:100%;
       // padding:8px;
      }

    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[container\\] {
        aspect-ratio: var(--${id}-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[column\\] {
        aspect-ratio: var(--${id}-column-aspect-ratio);
      }
      .xl\\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 4 buttons: flex layout with 4 buttons in a row */
      .${id}-cta-grid-container-4 {
           display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      /* 6 buttons: flex layout with wrapping */
      .${id}-cta-grid-container-6 {
           display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
      }

      /* 8 buttons: flex layout (existing behavior) */
      .${id}-cta-grid-container-8 {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
      }

    }

  @media (width >=80rem) and (width <96rem)
  {
    /* Desktop button dimensions: 108px width, 20px height, 8px 16px padding */
      .${id}-cta-button-width {
        min-width: 126px;
        min-height: 48px;
        height:100%;
        width:100%;
        //padding:8px 16px;
      }
  }

  @media (width >=96rem){
     .${id}-cta-button-width {
        min-width: 140px;
        min-height: 48px;
        height:100%;
        width:100%;
       //padding:8px 16px;
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
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px5"
      default:
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px5" // Default to centered
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

const CtaBar = ({ id }) => {
  const ctas = [
    {
      content: firstCtaContent,
      url: firstCtaUrl,
      adobeTag: firstCtaAdobeTag,
    },
    {
      content: secondCtaContent,
      url: secondCtaUrl,
      adobeTag: secondCtaAdobeTag,
    },
    {
      content: thirdCtaContent,
      url: thirdCtaUrl,
      adobeTag: thirdCtaAdobeTag,
    },
    {
      content: fourthCtaContent,
      url: fourthCtaUrl,
      adobeTag: fourthCtaAdobeTag,
    },
    {
      content: fifthCtaContent,
      url: fifthCtaUrl,
      adobeTag: fifthCtaAdobeTag,
    },
    {
      content: sixthCtaContent,
      url: sixthCtaUrl,
      adobeTag: sixthCtaAdobeTag,
    },
    {
      content: seventhCtaContent,
      url: seventhCtaUrl,
      adobeTag: seventhCtaAdobeTag,
    },
    {
      content: eighthCtaContent,
      url: eigthCtaUrl,
      adobeTag: eigthCtaAdobeTag,
    },
  ]

  const displayedCtas = ctas.filter((cta) => cta.content).slice(0, Number.parseInt(ctaButtonCount))
  const gridClassName = `${id}-cta-grid-container-${ctaButtonCount}`
  const ctaVarNames = ['firstCtaContent', 'secondCtaContent', 'thirdCtaContent', 'fourthCtaContent', 'fifthCtaContent', 'sixthCtaContent', 'seventhCtaContent', 'eighthCtaContent']

  return (
    <>
      <CtaBarStyleVars id={id} />
      <CtaBarStyles id={id} />
      <ResponsiveContainer
        containerBehavior={containerBehavior}
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div className="contents">
        <div data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(sectionBackgroundImage, "m", sectionBackgroundImagePreset),
            tablet: buildImageUrl(sectionBackgroundImage, "t", sectionBackgroundImagePreset),
            desktop: buildImageUrl(sectionBackgroundImage, "d", sectionBackgroundImagePreset),
            largeDesktop: buildImageUrl(sectionBackgroundImage, "l", sectionBackgroundImagePreset),
          }}
          alt={sectionBackgroundAlt}
          imageClassName="-z-1 object-cover object-center relative"
          className={`relative justify-center ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color py-6 px-5`}
        >
          <div
            className={`inset-0 h-fit m-auto px-12 md:px-20   ${gridClassName}
              justify-center gap-3 md:gap-3 lg:gap-2 ${id}-container-font-family `}
          >
            {displayedCtas.map(
              (cta, index) =>
                cta.content && (
                  <WrapperComponent
                    key={index}
                    href={cta.url}
                    data-aali={cta.adobeTag}
                    className="flex flex-shrink-0"
                  >
                    <Button
                      className={`text-center whitespace-wrap py-3 md:py-3 ${id}-cta-button-width ${id}-belk-text-clamp-cta cursor-pointer  ${ctaVariant === "solid" ? `${id}-bg-solid-button` : ""}`}
                      variant={ctaVariant}
                    >
                       <span data-bildit-var-name={ctaVarNames[index]} data-bildit-var-type="RichText">{truncateText(cta.content)}</span>
                    </Button>
                  </WrapperComponent>
                ),
            )}
          </div>
        </PictureResponsiveImage>
        </div>
        </div>
      </ResponsiveContainer>
    </>
  )
}

export default CtaBar