"use client";
import React from "react";
import Link from "next/link";

// group {Text}
const fontFamily = "proxima-nova";
const fontColor = $(fontColor:Color="#ffffff");
const headline = $(headline:String="50% Off");
const summary = $(description:String="Pool Day Picks");
// endgroup

// group {CTA}
const ctaText = $(ctaText:String="Shop Now");
const ctaUrl = $(ctaUrl:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
// endgroup

// group {Image}
const backgroundImage = $(backgroundImage:String="wk23_070725_newcms_homepage_sds_fh_1_background");
const imageSlug = $(imageSlug:String="wk23_070725_newcms_homepage_sds_fh_1");
const imagePreset = "$DWP_PHOTO$";
// endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const borderRadius = {
  mobile: "8px",
  desktop: "16px",
};

/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
function AspectRatioStyles() {
  return (
    <style>{`
      /* Base aspect ratio classes */
      .aspect-\\[125\\/152\\] {
        aspect-ratio: 125 / 152;
        /* Fallback for older browsers */
        padding-top: ${(152 / 125) * 100}%;
        position: relative;
      }

      /* Medium breakpoint and up (768px+) */
      @media (min-width: 768px) {
        .md\\:aspect-\\[40\\/11\\] {
          aspect-ratio: 40 / 11;
          padding-top: ${(11 / 40) * 100}%;
        }
      }

      /* Reset padding when aspect-ratio is supported */
      @supports (aspect-ratio: 1) {
        .aspect-\\[125\\/152\\],
        .md\\:aspect-\\[40\\/11\\] {
          padding-top: 0;
        }
      }
    `}</style>
  );
}

const cn = (className) => `${className}-${createStaticId()}`;

const styles = `
  .${cn("container")} {
    display: flex;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 2rem;
    @media (max-width: 767px) {
      background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, true)})` : "none"};
    }
    @media (min-width: 767px) {
      background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, false)})` : "none"};
    }

    a {
      display: flex;
      text-decoration: none;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      max-width: 1600px;
      @media (max-width: 767px) {
        background-image: ${isValidImageUrl(imageSlug) ? `url(${buildImageUrl(imageSlug, imagePreset, true)})` : "none"};
        border-radius: ${borderRadius.mobile};
        margin: 32px 24px;
      }
      @media (min-width: 768px) {
        background-image: ${isValidImageUrl(imageSlug) ? `url(${buildImageUrl(imageSlug, imagePreset, false)})` : "none"};
        border-radius: ${borderRadius.desktop};
        margin: 40px max(36px, (100vw - 1560px) / 2);
      }
      .${cn("copy")} {
        flex: 1;
        display: flex;
        flex-direction: column;
        @media (max-width: 767px) {
          margin: 32px;
          align-items: center;
          justify-content: flex-end;
        }
        @media (min-width: 768px) {
          margin: 0 40px;
          width: 20%;
          align-items: flex-start;
          justify-content: center;
        }
        * {
          @media (max-width: 767px) {
            text-align: center;
          }
        }
        h3 {
          color: ${fontColor};
          font-family: ${fontFamily};
          margin: 0;
          white-space: pre-line;
        }
        p {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          @media (max-width: 767px) {
            margin: 4px 0 8px;
          }
          @media (min-width: 768px) {
            margin: 8px 0 16px;
          }
        }
        div>span {
          color: ${fontColor};
          font-family: ${fontFamily};
          padding: 0 0 6px;
          border-bottom: 1px solid ${fontColor};
          white-space: pre-line;
        }
      }
    }
  }
`;

const FortyStaticTemplate = () => {
  return (
    <>
      <AspectRatioStyles />
      <style>{styles}</style>
      <div className={cn("container")}>
        <Link
          href={ctaUrl || "#"}
          data-aali={ctaAdobeTag}
          className="aspect-[125/152] md:aspect-[40/11]"
        >
          <div className={cn("copy")}>
            <h3
              className={`${getFontSizeClass("7xl", "xl")} ${getFontWeightClass(
                "bold"
              )}`}
            >
              {headline}
            </h3>
            <p
              className={`${getFontSizeClass("2xl", "m")} ${getFontWeightClass(
                "medium"
              )}`}
            >
              {summary}
            </p>
            {ctaText && (
              <div>
                <span
                  className={`${getFontSizeClass(
                    "l",
                    "m"
                  )} ${getFontWeightClass("bold")}`}
                >
                  {ctaText}
                </span>
              </div>
            )}
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
  const propsString = [
    backgroundImage,
    imageSlug,
    headline,
    summary,
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

export default FortyStaticTemplate;