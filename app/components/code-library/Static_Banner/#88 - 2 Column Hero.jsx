"use client";
import React from "react";
import Link from "next/link";

// group {Spacing}
const marginTopDesktop = $(marginTopDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomDesktop = $(marginBottomDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginTopMobile = $(marginTopMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomMobile = $(marginBottomMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
// endgroup

// group {Global}
const fontFamily = "proxima-nova"
const imagePreset = "$DWP_PHOTO$";
const fontColor = $(fontColor:Color="#FFFFFF");
// endgroup

// group {Banner}
const columns = [
  {
    imageSlug: $(imageLeft:String="wk25_072125_newcms_homepage_trends_b_2c_1"),
  },
  {
    imageSlug: $(imageRight:String="wk25_072125_newcms_homepage_trends_b_2c_2"),
    eyebrow: $(eyebrow:String="FASHION MOMENT:"),
    headline: $(headline:String="Meet Your New Blues"),
    description: $(description:String="It's time to reimagine your denim collection"),
    descriptionTablet: $(descriptionTablet:String="It's time to reimagine\nyour denim collection"),
    descriptionMobile: $(descriptionMobile:String="It's time to reimagine\nyour denim collection"),
    ctaText: $(ctaText:String="Shop Now"),
    ctaUrl: $(ctaUrl:String),
    ctaAdobeTag: $(ctaAdobeTag:String),
  }
]
// endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const config = {
  eyebrow: {
    fontSize: {
      mobile: "xs",
      desktop: "l",
    },
    fontWeight: "bold",
  },
  cta: {
    fontSize: {
      mobile: "l",
      desktop: "l",
    },
    fontWeight: "bold",
  },
  borderRadius: {
    mobile: "8px",
    desktop: "16px",
  },
};

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
  `;
}

const styles = `
  .${cn("wrapper")} {
    display: flex;
    width: 100%;
    position: relative;
    
    .${cn("banner-container")} {
      flex: 1;
      display: flex;
      text-decoration: none;
      max-width: 1600px;
      overflow: hidden;
      position: relative;
      
      @media (max-width: 767px) {
        margin: ${marginTopMobile}px ${marginHorizontalMobile} ${marginBottomMobile}px;
        border-radius: ${config.borderRadius.mobile};
      }
      @media (min-width: 768px) {
        margin: ${marginTopDesktop}px ${marginHorizontal} ${marginBottomDesktop}px;
        border-radius: ${config.borderRadius.desktop};
      }

      .${cn("banner")} {
        width: 100%;
        display: grid;
        gap: 0;
        flex-shrink: 0;
        text-decoration: none;
        overflow: hidden;
        
        @media (max-width: 767px) {
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr;
          border-radius: ${config.borderRadius.mobile};
        }
        @media (min-width: 768px) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          border-radius: ${config.borderRadius.desktop};
        }
      }

      .desktop-only {
        @media (max-width: 1099px) {
          display: none;
        }
      }
      .tablet-only {
        @media (max-width: 767px) {
          display: none;
        }
        @media (min-width: 1100px) {
          display: none;
        }
      }
      .mobile-only {
        @media (min-width: 768px) {
          display: none;
        }
      }

      .${cn("column")} {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .${cn("column-1")} {
        @media (max-width: 767px) {
          background-image: ${isValidImageUrl(columns[0].imageSlug) ? `url(${buildImageUrl(columns[0].imageSlug, imagePreset, true)})` : "none"};
        }
        @media (min-width: 768px) {
          background-image: ${isValidImageUrl(columns[0].imageSlug) ? `url(${buildImageUrl(columns[0].imageSlug, imagePreset, false)})` : "none"};
        }
      }

      .${cn("column-2")} {
        @media (max-width: 767px) {
          background-image: ${isValidImageUrl(columns[1].imageSlug) ? `url(${buildImageUrl(columns[1].imageSlug, imagePreset, true)})` : "none"};
        }
        @media (min-width: 768px) {
          background-image: ${isValidImageUrl(columns[1].imageSlug) ? `url(${buildImageUrl(columns[1].imageSlug, imagePreset, false)})` : "none"};
        }
      }
  
      .${cn("copy")} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;

        * {
          text-align: center;
        }

        h4 {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          margin: 0 0 4px;
        }
        h2 {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          margin: 0;
          @media (max-width: 767px) {
            font-size: 24px;
            font-weight: 700;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            font-size: 32px;
            font-weight: 700;
          }
          @media (min-width: 1100px) {
            font-size: 54px;
            font-weight: 600;
          }
        }
        p {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          @media (max-width: 767px) {
            margin: 4px 0 8px;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            margin: 4px 0 12px;
            font-size: 24px;
            line-height: 28px;
            font-weight: 400;
          }
          @media (min-width: 1100px) {
            margin: 8px 0 12px;
            opacity: 0.8;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
          }
        }
        span {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          border-bottom: 1px solid ${fontColor};
          padding: 0 0 6px;
        }
      }
    }
  }
`;

const TwoColumnStaticTemplate = () => {
  const renderColumns = (columns) => {
    return columns.map((column, index) => (
      <div
        key={index}
        className={`${cn("column")} ${cn(`column-${index + 1}`)} aspect-[343/201] md:aspect-[800/544]`}
      >
        {column.eyebrow && (
          <div className={cn("copy")}>
            <h4
              className={`${getFontSizeClass(
                config.eyebrow.fontSize.desktop,
                config.eyebrow.fontSize.mobile
              )} ${getFontWeightClass(config.eyebrow.fontWeight)}`}
            >
              {column.eyebrow}
            </h4>
            <h2>{column.headline}</h2>
            <p className={`desktop-only`}>{column.description}</p>
            <p className={`tablet-only`}>{column.descriptionTablet}</p>
            <p className={`mobile-only`}>{column.descriptionMobile}</p>
            <div className={cn("cta")}>
              <span
                className={`${getFontSizeClass(
                  config.cta.fontSize.desktop,
                  config.cta.fontSize.mobile
                )} ${getFontWeightClass(config.cta.fontWeight)}`}
              >
                {column.ctaText}
              </span>
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 800,
          desktopHeight: 544,
          mobileWidth: 343,
          mobileHeight: 201,
        })}
      </style>
      <style>{styles}</style>
      <div className={cn("wrapper")}>
        <Link
          href={columns[1].ctaUrl || "#"}
          data-aali={columns[1].ctaAdobeTag}
          className={cn("banner-container")}
        >
          <div className={cn("banner")}>
            {renderColumns(columns)}
          </div>
        </Link>
      </div>
    </>
  );
};

/**
 * Creates a deterministic ID based on component props
 * @returns {string} A stable ID string
 */
function createStaticId() {
  // Create a deterministic ID based on the component's unique props
  const propsString = columns
    .flatMap((column) => [
      column.imageSlug,
      column.eyebrow,
      column.headline,
      column.description,
      column.ctaText,
      column.ctaUrl,
      column.ctaAdobeTag,
    ])
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

  return `${baseUrl}/${contentType}/Belk/${slug}${
    isMobile ? "_m" : ""
  }?${preset}&bgc=0,0,0&color=0,0,0,0&fmt=png-alpha&opac=100`;
}

export default TwoColumnStaticTemplate;