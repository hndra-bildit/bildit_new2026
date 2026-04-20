"use client";
import React from "react";
import Link from "next/link";

// group {Spacing}
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
// endgroup

// group {Text}
const fontFamily = "proxima-nova";
const headline = $(headline:String="End of Season Sale!");
const description = $(description:String="Up to 65% Off Last Chance Deals");
const fontColor = $(fontColor:Color="#14377D");
// endgroup

// group {CTA}
const ctaText = $(ctaText:String="Shop Now");
const ctaUrl = $(ctaUrl:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
// endgroup

// group {Global}
const backgroundColor = "rgba(245, 245, 245, 0.6)"
const backgroundImage = $(backgroundImage:String="wk25_072125_newcms_homepage_eos_fh_1");
const imagePreset = "$DWP_PHOTO$";
// endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: "8px",
    tablet: "8px",
    desktop: "16px",
  },
  headline: {
    fontSize: {
      mobile: "18px",
      tablet: "36px",
      desktop: "54px",
    },
    lineHeight: {
      mobile: "22px",
      tablet: "38px",
      desktop: "58px",
    },
    fontWeight: {
      mobile: "700",
      tablet: "700",
      desktop: "700",
    },
  },
  description: {
    fontSize: {
      mobile: "16px",
      tablet: "20px",
      desktop: "28px",
    },
    lineHeight: {
      mobile: "18px",
      tablet: "24px",
      desktop: "32px",
    },
    fontWeight: {
      mobile: "400",
      tablet: "400",
      desktop: "700",
    },
  },
};

function generateAspectRatioStyles({
  desktopWidth,
  desktopHeight,
  tabletWidth,
  tabletHeight,
  mobileWidth,
  mobileHeight,
}) {
  tabletWidth = tabletWidth || desktopWidth;
  tabletHeight = tabletHeight || desktopHeight;
  return `
    @media (max-width: 767px) {
      .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] {
        aspect-ratio: ${mobileWidth} / ${mobileHeight};
      }
    }

    @media (min-width: 768px) and (max-width: 1099px) {
      .md\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
        aspect-ratio: ${tabletWidth} / ${tabletHeight};
      }
    }

    @media (min-width: 1100px) {
      .lg\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
        aspect-ratio: ${desktopWidth} / ${desktopHeight};
      }
    }
  `;
}

const styles = `
  .${cn("wrapper")} {
    display: flex;
    width: 100%;

    .container {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 1600px;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      @media (max-width: 767px) {
        margin: ${marginTop}px ${marginHorizontalMobile} ${marginBottom}px;
        background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, true)})` : "none"};
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        margin: ${marginTop}px ${marginHorizontal} ${marginBottom}px;
        background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, false, true)})` : "none"};
        border-radius: ${cfg.radius.tablet};
      }
      @media (min-width: 1100px) {
        margin: ${marginTop}px ${marginHorizontal} ${marginBottom}px;
        background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, false)})` : "none"};
      }

      a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background-color: ${backgroundColor};
        overflow: hidden;
    
        @media (max-width: 767px) {
          margin: 16px;
          border-radius: ${cfg.radius.mobile};
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          margin: 32px;
          border-radius: ${cfg.radius.tablet};
        }
        @media (min-width: 1100px) {
          margin: 24px 32px;
          border-radius: ${cfg.radius.desktop};
        }
        
        * {
          text-align: center;
        }
    
        .copy {
          display: flex;
          flex-direction: column;
          h3 {
            color: ${fontColor};
            font-family: ${fontFamily};
            margin: 0;
            white-space: pre-line;
            @media (max-width: 767px) {
              font-size: ${cfg.headline.fontSize.mobile};
              line-height: ${cfg.headline.lineHeight.mobile};
              font-weight: ${cfg.headline.fontWeight.mobile};
            }
            @media (min-width: 768px) and (max-width: 1099px) { 
              font-size: ${cfg.headline.fontSize.tablet};
              line-height: ${cfg.headline.lineHeight.tablet};
              font-weight: ${cfg.headline.fontWeight.tablet};
            }
            @media (min-width: 1100px) {
              font-size: ${cfg.headline.fontSize.desktop};
              line-height: ${cfg.headline.lineHeight.desktop};
              font-weight: ${cfg.headline.fontWeight.desktop};
            }
          }
          p {
            color: ${fontColor};
            font-family: ${fontFamily};
            white-space: pre-line;
    
            @media (max-width: 767px) {
              margin: 4px 0 10px;
              font-size: ${cfg.description.fontSize.mobile};
              line-height: ${cfg.description.lineHeight.mobile};
              font-weight: ${cfg.description.fontWeight.mobile};
            }
            @media (min-width: 768px) and (max-width: 1099px) { 
              margin: 10px 0 20px;
              font-size: ${cfg.description.fontSize.tablet};
              line-height: ${cfg.description.lineHeight.tablet};
              font-weight: ${cfg.description.fontWeight.tablet};
            }
            @media (min-width: 1100px) {
              margin: 10px 0 20px;
              font-size: ${cfg.description.fontSize.desktop};
              line-height: ${cfg.description.lineHeight.desktop};
              font-weight: ${cfg.description.fontWeight.desktop};
            }
          }
          span {
            color: ${fontColor};
            font-family: ${fontFamily};
            white-space: pre-line;
            border-bottom: 1px solid ${fontColor};
            padding: 0 0 6px;
            @media (max-width: 767px) {
              padding: 0 0 4px;
            }
          }
        }
      }
    }
  }
`;

const FullHero47StaticTemplate = () => {
  return (
    <>
      <style>{styles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 1600,
          desktopHeight: 360,
          tabletWidth: 704,
          tabletHeight: 312,
          mobileWidth: 343,
          mobileHeight: 152,
        })}
      </style>
      <div className={cn("wrapper")}>
        <div className="container aspect-[343/152] md:aspect-[704/312] lg:aspect-[1600/360]">
          <Link href={ctaUrl || "#"} data-aali={ctaAdobeTag}>
            <div className="copy">
              <h3>{headline}</h3>
              <p>{description}</p>
              <div>
                <span className={`belk-text-s md:belk-text-xl font-bold`}>
                  {ctaText}
                </span>
              </div>
            </div>
          </Link>
        </div>
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
  const propsString = [
    backgroundColor,
    headline,
    description,
    ctaText,
    ctaUrl,
    ctaAdobeTag,
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

function buildImageUrl(slug, preset, isMobile = false, withTablet = false) {
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }

  const baseUrl = "https://belk.scene7.com/is";
  const contentType = preset.includes("RAW") ? "content" : "image";

  slug = withTablet ? `${slug}_t` : isMobile ? `${slug}_m` : slug;

  return `${baseUrl}/${contentType}/Belk/${slug}?${preset}&bgc=0,0,0&color=0,0,0,0&fmt=png-alpha&opac=100`;
}

export default FullHero47StaticTemplate;