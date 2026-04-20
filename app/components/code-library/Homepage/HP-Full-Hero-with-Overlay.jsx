"use client";
import React from "react";
import Link from "next/link";

// group: {Spacing}
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
const marginHorizontalTablet = "32px";
// endgroup

// group: {Global}
const fontFamily = "proxima-nova";
const backgroundImage = $(backgroundImage:String="wk27_080425_newcms_homepage_abercrombie_fh_1");
const imagePreset = "$DWP_PHOTO$"
const headlineImage = $(headlineImage:String="wk25_072125_abercrombie_logo");
const headlineImagePreset = "$DWP_GRAPHIC$"
// endgroup

// group: {Text}
const eyebrow = $(eyebrow:RichText="NEW AT BELK!");
const headline = $(headline:RichText="30% OFF");
const ctaText = $(ctaText:RichText="Shop Now");
const ctaLink = $(ctaLink:String="/";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="";required=true);
// endgroup

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: "8px",
    tablet: "8px",
    desktop: "16px",
  },
};

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
    .lg\\:belk-text-7xl {
      font-size: var(--text-7xl);
      line-height: var(--text-7xl--line-height);
      letter-spacing: var(--text-7xl--letter-spacing);
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

    @media (min-width: 64.001rem) and (pointer: coarse) {
      .sm\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
        aspect-ratio: ${tabletWidth} / ${tabletHeight};
      }
    }

    @media (min-width: 64.001rem) and (pointer: fine) {
      .lg\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
        aspect-ratio: ${desktopWidth} / ${desktopHeight};
      }
    }
  `;
}

const genMediaStyles = (property, { mobile, tablet, desktop }) => {
  return `
    @media (max-width: 40rem) {
      ${property}: ${mobile};
    }
    @media (min-width: 40.001rem) and (max-width: 64rem) {
      ${property}: ${tablet};
    }
    @media (min-width: 64.001rem) and (pointer: coarse) {
      ${property}: ${tablet};
    }
    @media (min-width: 64.001rem) and (pointer: fine) {
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
    ${genMediaStyles("max-width", {
      mobile: "100%",
      tablet: "100%",
      desktop: "1600px",
    })}
    overflow: hidden;
    text-decoration: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    ${genMediaStyles("margin", {
      mobile: `${marginTop}px ${marginHorizontalMobile} ${marginBottom}px`,
      tablet: `${marginTop}px ${marginHorizontalTablet} ${marginBottom}px`,
      desktop: `${marginTop}px ${marginHorizontal} ${marginBottom}px`,
    })}

    ${genMediaStyles("justify-content", {
      mobile: "flex-end",
      tablet: "flex-end",
      desktop: "flex-end",
    })}

    ${genMediaStyles("border-radius", {
      mobile: cfg.radius.mobile,
      tablet: cfg.radius.tablet,
      desktop: cfg.radius.desktop,
    })}

    ${genMediaStyles("background-image", {
      mobile: `url(${buildImageUrl(backgroundImage, imagePreset, true)})`,
      tablet: `url(${buildImageUrl(
        backgroundImage,
        imagePreset,
        false,
        true
      )})`,
      desktop: `url(${buildImageUrl(backgroundImage, imagePreset, false)})`,
    })}

    .${cn("copy")} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${genMediaStyles("margin", {
        mobile: "0 0 4%",
        tablet: "0 0 3%",
        desktop: "0 0 2%",
      })}

      * {
        font-family: ${fontFamily};
        white-space: pre-line;
        text-align: center;
      }

      .${cn("headline-image")} {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        ${genMediaStyles("width", {
          mobile: "57%",
          tablet: "45%",
          desktop: "36%",
        })}

        ${genMediaStyles("background-image", {
          mobile: `url(${buildImageUrl(
            headlineImage,
            headlineImagePreset,
            true
          )})`,
          tablet: `url(${buildImageUrl(
            headlineImage,
            headlineImagePreset,
            false,
            true
          )})`,
          desktop: `url(${buildImageUrl(
            headlineImage,
            headlineImagePreset,
            false
          )})`,
        })}

        ${genMediaStyles("margin", {
          mobile: "4px 0",
          tablet: "6px 0",
          desktop: "6px 0",
        })}
      }

      .${cn("cta")} {
        padding: 0 0 6px;
        border-bottom: 1px solid currentColor;

        ${genMediaStyles("margin", {
          mobile: "10px 0 0",
          tablet: "16px 0 0",
          desktop: "16px 0 0",
        })}
      }
    }
  }
`;

const FortyEightStaticTemplate = () => {
  return (
    <>
      <style>{styles}</style>
      <style>{typoStyles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 1600,
          desktopHeight: 608,
          tabletWidth: 704,
          tabletHeight: 264,
          mobileWidth: 343,
          mobileHeight: 272,
        })}
      </style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 548,
          desktopHeight: 61,
          tabletWidth: 319,
          tabletHeight: 35,
          mobileWidth: 196,
          mobileHeight: 22,
        })}
      </style>
      <div className={cn("wrapper")}>
        <Link
          className={`${cn(
            "container"
          )} aspect-[343/272] sm:aspect-[704/264] lg:aspect-[1600/608]`}
          href={ctaLink || "#"}
          data-aali={ctaAdobeTag}
        >
          <div className={cn("copy")}>
            <h4 data-bildit-var-name="eyebrow" data-bildit-var-type="RichText" className="font-bold belk-text-2xs sm:belk-text-l lg:belk-text-l">
              {eyebrow}
            </h4>
            <div
              className={`${cn(
                "headline-image"
              )} aspect-[196/22] sm:aspect-[319/35] lg:aspect-[548/61]`}
            />
            <h3 data-bildit-var-name="headline" data-bildit-var-type="RichText" className="font-bold belk-text-l sm:belk-text-7xl lg:belk-text-7xl">
              {headline}
            </h3>
            <div
              data-bildit-var-name="ctaText"
              data-bildit-var-type="RichText"
              className={`${cn(
                "cta"
              )} font-bold belk-text-s sm:belk-text-l lg:belk-text-l`}
            >
              {ctaText}
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
  const propsString = [eyebrow, headline, ctaText, ctaLink, ctaAdobeTag]
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

export default FortyEightStaticTemplate;