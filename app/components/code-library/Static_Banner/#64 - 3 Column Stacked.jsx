"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// group {Global}
const fontColor = $(fontColor:Color="#ffffff");
const fontFamily = "proxima-nova"
const imagePreset = "$DWP_PHOTO$"
const marginTopDesktop = $(marginTopDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomDesktop = $(marginBottomDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginTopMobile = $(marginTopMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomMobile = $(marginBottomMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
const headlineImagePreset = "$DWP_GRAPHIC$"
// endgroup

const columns = [
  {
    // group {First Slot Image}
     imageSlug: $(firstImageSlug:String="wk25_072125_newcms_homepage_4c_2"),
  },
  {
     imageSlug: $(firstImageSlugPart2:String="wk25_072125_newcms_homepage_4c_1"),
    // endgroup
  },
  {
    // group {Second Slot Text}
     headline: $(headline:String="Up to 30% Off"),
     headlineTablet: $(headlineTablet:String="Up to\n30% Off"),
     description: $(description:String),
    // endgroup

    // group {Second Slot CTA}
    cta: {
       text: $(ctaText:String="Shop Now"),
       url: $(ctaLink:String),
       adobeTag: $(ctaAdobeTag:String),
    },
    // endgroup
    // group {Second Slot Image}
     imageSlug: $(secondImageSlug:String="wk25_072125_newcms_homepage_4c_3"),
     headlineImageSlug: $(headlineImageSlug:String="wk25_072125_newcms_homepage_4c_levilogo"),
    // endgroup
  },
  {
    // group {Third Slot Image}
     imageSlug: $(thirdImageSlug:String="wk25_072125_newcms_homepage_4c_4"),
    // endgroup
  },
];

const cn = (className) => `${className}-${createStaticId()}`;

/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
function generateAspectRatioStyles({
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
}) {
  return `
      @media (max-width: 767px) {
        .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] {
          aspect-ratio: ${mobileWidth} / ${mobileHeight};
          /* Fallback for older browsers */
          padding-top: ${(mobileHeight / mobileWidth) * 100}%;
          position: relative;
        }
      }
      
      @media (min-width: 768px) {
        .md\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
          aspect-ratio: ${desktopWidth} / ${desktopHeight};
          padding-top: ${(desktopHeight / desktopWidth) * 100}%;
        }
      }

      /* Reset padding when aspect-ratio is supported */
      @supports (aspect-ratio: 1) {
        .aspect-\\[${mobileWidth}\\/${mobileHeight}\\],
        .md\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
          padding-top: 0;
        }
      }

      /* Ensure children of aspect ratio containers are positioned correctly */
      .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] > *,
      .md\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `
}

const pictureStyles = `
  .${cn("container")} {
    .${cn("picture-wrapper")} {
      &.${cn("overflow-hidden")} {
        overflow: hidden;
      }
      position: relative;
      display: flex;
      width: 100%;
      
      .${cn("image")} { 
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .${cn("placeholder-wrapper")} {
      align-items: center;
      justify-content: center;
      background-color: #f0f0f0;
    }
  }
`;
/**
 * Picture-based responsive image component using HTML picture element
 */
function PictureResponsiveImage({ slug, preset, alt, className }) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;
  if (!slug || !isValidImageUrl(slug)) {
    return (
      <div
        className={`${cn("picture-wrapper")} ${cn("placeholder-wrapper")}`}
        role="img"
        aria-label={alt || "Image placeholder"}
      >
        <span className="text-gray-500 text-sm">No image available</span>
      </div>
    );
  }

  const mobileSrc = buildImageUrl(slug, preset, true);
  const desktopSrc = buildImageUrl(slug, preset, false);

  return (
    <div
      className={`${cn(
        "picture-wrapper"
      )} overflow-hidden ${className}`}
    >
      <picture className={cn("picture-wrapper")}>
        {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
        {desktopSrc && (
          <source media="(min-width: 768px)" srcSet={desktopSrc} />
        )}
        <Image
          className={cn("image")}
          src={desktopSrc || mobileSrc}
          alt={alt}
          fill
          onError={handleError}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R6i+95XGJMWI2M="
        />
      </picture>
    </div>
  );
}

const styles = `
  .${cn("container")} {
    display: grid;
    gap: 0;
    max-width: 1600px;
    text-decoration: none;
    overflow: hidden;
    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      border-radius: 16px;
      margin: ${marginTopDesktop}px ${marginHorizontal} ${marginBottomDesktop}px;
    }
    @media (max-width: 767px) {
      margin: ${marginTopMobile}px ${marginHorizontalMobile} ${marginBottomMobile}px;
      grid-template-columns: 1fr;
      grid-template-rows: 224fr auto 312fr;
      border-radius: 8px;
    }

    .desktop-only {
      @media (max-width: 767px) {
        display: none;
      }
    }

    .tablet-only {
      @media (max-width: 767px) {
        display: none;
      }
      @media (min-width: 1099px) {
        display: none;
      }
    }

    .tablet-hidden {
      @media (min-width: 768px) and (max-width: 1099px) {
        display: none;
      }
    }

    .${cn("copy")} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      * {
        text-align: center;
      }
      @media (max-width: 767px) {
        padding: 50px 0;
        background-image: url(${buildImageUrl(
          columns[2].imageSlug,
          imagePreset,
          true
        )});
      }
      @media (min-width: 767px) {
        background-image: url(${buildImageUrl(
          columns[2].imageSlug,
          imagePreset,
          false
        )});
      }

      .${cn("headline-image")} {
        width: 40%;
      }
      h3 {
        color: ${fontColor};
        font-family: ${fontFamily};
        white-space: pre-line;
        @media (max-width: 767px) {
          margin: 16px 0 8px;
          font-size: 20px;
          line-height: 24px;
          font-weight: 700;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          ${columns[2].description ? "" : "margin: 32px 0 12px;"}
          font-size: 30px;
          line-height: 34px;
          font-weight: 700;          
        }
        @media (min-width: 1024px) {
          margin: 32px 0 12px;
          font-size: 48px;
          line-height: 48px;
          font-weight: 700;
        }
      }
      p {
        color: ${fontColor};
        font-family: ${fontFamily};
        white-space: pre-line;
        margin: 4px 0 8px;
        @media (max-width: 767px) {
          font-size: 20px;
          line-height: 24px;
          font-weight: 400;
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          font-size: 24px;
          line-height: 28px;
          font-weight: 400;
        }
        @media (min-width: 1100px) {
          font-size: 20px;
          line-height: 24px;
          font-weight: 400;
        }
      }
      div>span {
        color: ${fontColor};
        font-family: ${fontFamily};
        border-bottom: 1px solid ${fontColor};
        white-space: pre-line;
        padding: 0 0 6px;
        @media (max-width: 767px) {
          padding: 0 0 4px;
        }
      }
    }
  }
`;

const SixtyFourStaticTemplate = () => {
  return (
    <>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 400,
          desktopHeight: 544,
          mobileWidth: 343,
          mobileHeight: 312,
        })}
      </style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 400,
          desktopHeight: 544,
          mobileWidth: 343,
          mobileHeight: 224,
        })}
      </style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 160,
          desktopHeight: 65,
          mobileWidth: 124,
          mobileHeight: 51,
        })}
      </style>
      <style>{pictureStyles}</style>
      <style>{styles}</style>
      <Link 
        className={cn("container")}
        href={columns[2].cta.url || "#"}
        data-aali={columns[2].cta.adobeTag}
      >
        {columns.map((column, index) => (
          !column.headline 
            ? <PictureResponsiveImage 
                slug={column.imageSlug} 
                preset={imagePreset}
                alt={column.headline} 
                key={index} 
                className={`
                  md:aspect-[400/544]
                  ${index === 0 ? "desktop-only" : index === 1 ? "aspect-[343/224]" : "aspect-[343/312]"}
                `} 
              />
            : (
              <div className={cn("copy")} key={column.headline}>
                <div className={cn("headline-image")}>
                  <PictureResponsiveImage 
                    slug={column.headlineImageSlug} 
                    preset={headlineImagePreset}
                    alt={column.headline} 
                    key={index} 
                    className={`aspect-[124/51] md:aspect-[160/65]`} 
                  />
                </div>
                <h3 className="tablet-hidden">
                  {column.headline}
                </h3>
                <h3 className="tablet-only">
                  {column.headlineTablet}
                </h3>
                {column.description && <p>
                  {column.description}
                </p>}
                <div>
                  <span
                    className={`${getFontSizeClass("l", "m")} ${getFontWeightClass(
                      "bold"
                    )}`}
                  >
                    {column.cta.text}
                  </span>
                </div>
              </div>
            )
        ))}
      </Link>
    </>
  );
};

/**
 * Creates a deterministic ID based on component props
 * @returns {string} A stable ID string
 */
function createStaticId() {
  // Create a deterministic ID based on the component's unique props
  const propsString = [
    columns[0].imageSlug,
    columns[1].imageSlug,
    columns[2].imageSlug,
    columns[3].imageSlug,
    columns[2].headline,
    columns[2].cta.text,
    columns[2].cta.url,
    columns[2].cta.adobeTag,
    columns[2].headlineImageSlug,

  ]
    .filter(Boolean)
    .join("-");

  // Create a simple hash of the props string
  let hash = 0;
  for (let i = 0; i < propsString.length; i++) {
    const char = propsString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Convert to positive hex string and ensure it's always 8 chars
  return Math.abs(hash).toString(16).padStart(8, "0");
}

const getFontSizeClass = (desktopSize, mobileSize) => {
  let className = "";
  if (mobileSize) {
    className = `${className} belk-text-${mobileSize.toLowerCase()}`;
  }
  if (desktopSize) {
    className = `${className} md:belk-text-${desktopSize.toLowerCase()}`;
  }
  return className;
};
const getFontWeightClass = (weight) => {
  switch (weight) {
    case "bold":
      return "font-bold";
    case "semibold":
      return "font-semibold";
    case "medium":
      return "font-medium";
    case "regular":
      return "font-normal";
    default:
      return "";
  }
};

function buildImageUrl(slug, preset, isMobile = false) {
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }

  const baseUrl = "https://belk.scene7.com/is";
  const contentType = preset.includes("RAW") ? "content" : "image";

  return `${baseUrl}/${contentType}/Belk/${slug}${isMobile ? "_m" : ""}?${preset}&bgc=0,0,0&color=0,0,0,0&fmt=png-alpha&opac=100`;
}

export default SixtyFourStaticTemplate;