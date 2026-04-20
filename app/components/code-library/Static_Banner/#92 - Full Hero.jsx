"use client";
import React from "react";
import Link from "next/link";

// group {Spacing}
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
const marginHorizontalTablet = "32px";
// endgroup

// group {Text}
const fontFamily = "proxima-nova";
const headline = $(headline:RichText="ONE DAY SALE!");
const description = $(description:RichText="UP TO 70% OFF");
const fontColor = $(fontColor:Color="#FFFFFF");
// endgroup

// group {CTA}
const ctaTextDesktop = $(ctaTextDesktop:RichText="Shop All Deals");
const ctaTextMobile = $(ctaTextMobile:RichText="Shop Now");
const ctaUrl = $(ctaUrl:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
const ctaFontColor = $(ctaFontColor:Color="#171717");
// endgroup

// group {Global}
const backgroundImageSlug = $(backgroundImageSlug:String="wk26_080125_newcms_homepage_ods_fh_1");
const imagePreset = "$DWP_PHOTO$";
// endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const cn = (className) => `${className}-${createStaticId()}`;

const typoStyles = `
  @media (min-width: 40.001rem) and (max-width: 64rem) {
    .sm\\:belk-text-m {
      font-size: var(--text-base);
      line-height: var(--text-base--line-height);
      letter-spacing: var(--text-base--letter-spacing);
    }
    .sm\\:belk-text-l {
      font-size: var(--text-lg);
      line-height: var(--text-lg--line-height);
      letter-spacing: var(--text-lg--letter-spacing);
    }
    .sm\\:belk-text-xl {
      font-size: var(--text-xl);
      line-height: var(--text-xl--line-height);
      letter-spacing: var(--text-xl--letter-spacing);
    }
    .sm\\:belk-text-2xl {
      font-size: var(--text-2xl);
      line-height: var(--text-2xl--line-height);
      letter-spacing: var(--text-2xl--letter-spacing);
    }
    .sm\\:belk-text-4xl {
      font-size: var(--text-4xl);
      line-height: var(--text-4xl--line-height);
      letter-spacing: var(--text-4xl--letter-spacing);
    }
    .sm\\:belk-text-6xl {
      font-size: var(--text-6xl);
      line-height: var(--text-6xl--line-height);
      letter-spacing: var(--text-6xl--letter-spacing);
    }
    .sm\\:belk-text-7xl {
      font-size: var(--text-7xl);
      line-height: var(--text-7xl--line-height);
      letter-spacing: var(--text-7xl--letter-spacing);
    }
    .sm\\:belk-text-75px {
      font-size: 75px;
      line-height: 80px;
      letter-spacing: normal;
      height: 106px;
    }
  }

  @media (min-width: 64.001rem) {
    .lg\\:belk-text-l {
      font-size: var(--text-lg);
      line-height: var(--text-lg--line-height);
      letter-spacing: var(--text-lg--letter-spacing);
    }
    .lg\\:belk-text-xl {
      font-size: var(--text-xl);
      line-height: var(--text-xl--line-height);
      letter-spacing: var(--text-xl--letter-spacing);
    }
    .lg\\:belk-text-3xl {
      font-size: var(--text-3xl);
      line-height: var(--text-3xl--line-height);
      letter-spacing: var(--text-3xl--letter-spacing);
    }
    .lg\\:belk-text-4xl {
      font-size: var(--text-4xl);
      line-height: var(--text-4xl--line-height);
      letter-spacing: var(--text-4xl--letter-spacing);
    }
    .lg\\:belk-text-8xl {
      font-size: var(--text-8xl);
      line-height: var(--text-8xl--line-height);
      letter-spacing: var(--text-8xl--letter-spacing);
    }
    .lg\\:belk-text-9xl {
      font-size: var(--text-9xl);
      line-height: var(--text-9xl--line-height);
      letter-spacing: var(--text-9xl--letter-spacing);
    }
    .lg\\:belk-text-64px {
      font-size: 64px;
      line-height: 80px;
      letter-spacing: normal;
    }
    .lg\\:belk-text-80px {
      font-size: 80px;
      line-height: 84px;
      letter-spacing: normal;
    }
    .lg\\:belk-text-128px {
      font-size: 128px;
      line-height: 136px;
      letter-spacing: normal;
    }
  }

  @media (min-width: 64.001rem) and (max-width: 93rem) {
    .mlg\\:belk-text-xl {
      font-size: var(--text-xl);
      line-height: var(--text-xl--line-height);
      letter-spacing: var(--text-xl--letter-spacing);
    }
    .mlg\\:belk-text-6xl {
      font-size: var(--text-6xl);
      line-height: var(--text-6xl--line-height);
      letter-spacing: var(--text-6xl--letter-spacing);
    }
    .mlg\\:belk-text-100px {
      font-size: 100px;
      line-height: 102px;
      letter-spacing: normal;
    }
  }
`;

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
    @media (max-width: 40rem) {
      .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] {
        aspect-ratio: ${mobileWidth} / ${mobileHeight};
      }
    }

    @media (min-width: 40.001rem) and (max-width: 64rem) {
      .sm\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
        aspect-ratio: ${tabletWidth} / ${tabletHeight};
      }
    }

    @media (min-width: 64.001rem) {
      .lg\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
        aspect-ratio: ${desktopWidth} / ${desktopHeight};
      }
    }
  `;
}

const genMediaStyles = (property, { mobile, tablet, desktop}) => {
  return `
    @media (max-width: 40rem) {
      ${property}: ${mobile};
    }
    @media (min-width: 40.001rem) and (max-width: 64rem) {
      ${property}: ${tablet};
    }
    @media (min-width: 64.001rem) {
      ${property}: ${desktop};
    }
  `;
};

const styles = `
  .${cn("wrapper")} {
    width: 100%;
    display: flex;
  }

  .${cn("container")} {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    ${genMediaStyles("margin", {
      mobile: `${marginTop}px ${marginHorizontalMobile} ${marginBottom}px`,
      tablet: `${marginTop}px ${marginHorizontalTablet} ${marginBottom}px`,
      desktop: `${marginTop}px ${marginHorizontal} ${marginBottom}px`,
    })}

    ${genMediaStyles("background-image", {
      mobile: isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, true)})` : "none",
      tablet: isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, false, true)})` : "none",
      desktop: isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, false)})` : "none",
    })}

    .${cn("copy")} {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;

      ${genMediaStyles("justify-content", {
        mobile: "space-between",
        tablet: "space-between",
        desktop: "space-between",
      })}

      ${genMediaStyles("gap", {
        mobile: "0",
        tablet: "0",
        desktop: "0",
      })}

      ${genMediaStyles("padding", {
        mobile: "9.5% 0 4.5%",
        tablet: "9% 0 6%",
        desktop: "2.7% 0",
      })}

      * {
        color: ${fontColor};
        font-family: ${fontFamily};
        white-space: pre-line;
        text-align: center;
      }

      .desktop-only {
        @media (max-width: 64rem) {
          display: none;
        }
      }

      .desktop-hidden {
        @media (min-width: 64.001rem) {
          display: none;
        }
      }

      div {
        border-radius: 4px;
        ${genMediaStyles("padding", {
          mobile: "6px 35px",
          tablet: "6px 40px",
          desktop: "10px 40px",
        })}
        color: ${ctaFontColor};
        background-color: ${fontColor};
      }
    }
  }
`;

const FullHero92StaticTemplate = () => {
  return (
    <>
      <style>{styles}</style>
      <style>{typoStyles}</style>
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
        <Link
          className={`${cn(
            "container"
          )} aspect-[343/152] sm:aspect-[704/312] lg:aspect-[1600/360]`}
          href={ctaUrl || "#"}
          data-aali={ctaAdobeTag}
          data-bildit-var-name="backgroundImageSlug"
          data-bildit-var-type="String"
        >
          <div className={cn("copy")}>
            <p data-bildit-var-name="description" data-bildit-var-type="RichText" className="font-bold belk-text-m sm:belk-text-7xl lg:belk-text-9xl">
              {description}
            </p>
            <h3 data-bildit-var-name="headline" data-bildit-var-type="RichText" className="font-bold belk-text-m sm:belk-text-75px mlg:belk-text-100px lg:belk-text-128px">
              {headline}
            </h3>
            <div data-bildit-var-name="ctaTextDesktop" data-bildit-var-type="RichText" className="font-bold lg:belk-text-l desktop-only">
              {ctaTextDesktop}
            </div>
            <div data-bildit-var-name="ctaTextMobile" data-bildit-var-type="RichText" className="font-bold belk-text-m desktop-hidden">
              {ctaTextMobile}
            </div>
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
    headline,
    fontColor,
    description,
    ctaTextDesktop,
    ctaTextMobile,
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

export default FullHero92StaticTemplate;