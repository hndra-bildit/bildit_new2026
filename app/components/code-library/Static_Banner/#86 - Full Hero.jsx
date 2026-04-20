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
const headline = $(headline:String="SEMI-ANNUAL INTIMATES SALE");
const description = $(description:String="From 14.99 Bras");
const fontColor = $(fontColor:Color="#9B9DC6");
// endgroup

// group {CTA}
const ctaText = $(ctaText:String="Shop Now");
const ctaUrl = $(ctaUrl:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
const ctaFontColor = $(ctaFontColor:Color="#FFFFFF");
// endgroup

// group {Global}
const backgroundImageSlug = $(backgroundImageSlug:String="wk26_072825_newcms_homepage_semi_annual_background_fh_1");
const innerBackgroundImageSlug = $(innerBackgroundImageSlug:String="wk26_072825_newcms_homepage_semi_annual_image_fh_1");
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
      tablet: "32px",
      desktop: "54px",
    },
    lineHeight: {
      mobile: "22px",
      tablet: "37px",
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
      tablet: "16px",
      desktop: "48px",
    },
    lineHeight: {
      mobile: "18px",
      tablet: "20px",
      desktop: "32px",
    },
    fontWeight: {
      mobile: "400",
      tablet: "400",
      desktop: "400",
    },
  },
  cta: {
    fontSize: {
      mobile: "16px",
      tablet: "16px",
      desktop: "18px",
    },
    lineHeight: {
      mobile: "19px",
      tablet: "19px",
      desktop: "22px",
    },
    fontWeight: {
      mobile: "700",
      tablet: "700",
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
        border-radius: ${cfg.radius.mobile};
        background-image: ${isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, true)})` : "none"};
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        margin: ${marginTop}px ${marginHorizontal} ${marginBottom}px;
        border-radius: ${cfg.radius.tablet};
        background-image: ${isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, false, true)})` : "none"};
        border-radius: ${cfg.radius.tablet};
      }
      @media (min-width: 1100px) {
        margin: ${marginTop}px ${marginHorizontal} ${marginBottom}px;
        border-radius: ${cfg.radius.desktop};
        background-image: ${isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, false)})` : "none"};
      }

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        overflow: hidden;
        background-size: cover;
    
        @media (max-width: 767px) {
          margin: 16px;
          border-radius: ${cfg.radius.mobile};
          align-items: flex-end;
          background-image: ${isValidImageUrl(innerBackgroundImageSlug) ? `url(${buildImageUrl(innerBackgroundImageSlug, imagePreset, true)})` : "none"};
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          margin: 32px;
          padding-right: 45px;
          border-radius: ${cfg.radius.tablet};
          align-items: flex-end;
          background-image: ${isValidImageUrl(innerBackgroundImageSlug) ? `url(${buildImageUrl(innerBackgroundImageSlug, imagePreset, false, true)})` : "none"};
        }

        @media (min-width: 1100px) {
          margin: 26px 32px;
          border-radius: ${cfg.radius.desktop};
          align-items: center;
          background-image: ${isValidImageUrl(innerBackgroundImageSlug) ? `url(${buildImageUrl(innerBackgroundImageSlug, imagePreset, false)})` : "none"};
        }
        
        * {
          text-align: center;
        }
    
        .copy {
          display: flex;
          flex-direction: column;

          @media (max-width: 767px) {
            width: 54%;
            padding: 31px 0;
          }
          @media (min-width: 768px) and (max-width: 1099px) { 
            width: 38%;
            padding: 40px 0;
          }
          @media (min-width: 1100px) {
            width: 360px;
            padding: 100px 0 84px 0;
          }

          h3 {
            color: ${fontColor};
            font-family: ${fontFamily};
            margin: 0;
            white-space: pre-line;
            @media (max-width: 767px) {
              font-size: ${cfg.headline.fontSize.mobile};
              line-height: ${cfg.headline.lineHeight.mobile};
              font-weight: ${cfg.headline.fontWeight.mobile};
              margin-bottom: 4px;
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
              margin-bottom: 6px;
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
              margin: 4px 0 20px;
              font-size: ${cfg.description.fontSize.tablet};
              line-height: ${cfg.description.lineHeight.tablet};
              font-weight: ${cfg.description.fontWeight.tablet};
            }
            @media (min-width: 1100px) {
              margin: 6px 0 20px;
              font-size: ${cfg.description.fontSize.desktop};
              line-height: ${cfg.description.lineHeight.desktop};
              font-weight: ${cfg.description.fontWeight.desktop};
            }
          }
          span {
            background-color: #9B9DC6;
            border-radius: 6px;
            color: ${ctaFontColor};
            font-family: ${fontFamily};
            white-space: pre-line;
            border-bottom: 1px solid ${fontColor};
            padding: 0 0 6px;

            @media (max-width: 767px) {
              padding: 6.5px 35px;
              font-size: ${cfg.cta.fontSize.mobile};
              line-height: ${cfg.cta.lineHeight.mobile};
              font-weight: ${cfg.cta.fontWeight.mobile};
            }
            @media (min-width: 768px) and (max-width: 1099px) { 
              padding: 6.5px 35px;
              font-size: ${cfg.cta.fontSize.tablet};
              line-height: ${cfg.cta.lineHeight.tablet};
              font-weight: ${cfg.cta.fontWeight.tablet};
            }
            @media (min-width: 1100px) {
              padding: 6.5px 35px;
              font-size: ${cfg.cta.fontSize.desktop};
              line-height: ${cfg.cta.lineHeight.desktop};
              font-weight: ${cfg.cta.fontWeight.desktop};
            }
            
          }
        }
      }
    }
  }
`;

const FullHero86StaticTemplate = () => {
  return (
    <>
      <style>{styles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 1536,
          desktopHeight: 490,
          tabletWidth: 640,
          tabletHeight: 248,
          mobileWidth: 311,
          mobileHeight: 240,
        })}
      </style>
      <div className={cn("wrapper")}>
        <div className="container">
          <Link href={ctaUrl || "#"} data-aali={ctaAdobeTag} className="aspect-[311/240] md:aspect-[640/248] lg:aspect-[1536/490]">
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

export default FullHero86StaticTemplate;