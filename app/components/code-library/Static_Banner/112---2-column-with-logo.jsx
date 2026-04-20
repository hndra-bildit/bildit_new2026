"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";


// group {Global}
const fontColor = $(fontColor:Color="#171717");
const fontFamily = "proxima-nova"
const headlineImageHeight = 24;
const headlineImageHeightTablet = 17;
const headlineImageHeightMobile = 10;
const headlineImagePreset = "$DWP_GRAPHIC$"
const imagePreset = "$DWP_PHOTO$"
// endgroup

// group {Spacing}
const referenceWidth = {
  desktop: 1560,
  tablet: 768,
  mobile: 375,
};

const desktopGap = $(desktopGap:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const mobileGap = $(mobileGap:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");

const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontalMobile = "16px";
const marginHorizontalTablet = "32px";
const desktopMinHorizontalMargin = 36;
const marginHorizontal = `max(${desktopMinHorizontalMargin}px, (100vw - ${referenceWidth.desktop}px) / 2)`; // belk logo alignment
// endgroup

const columns = [
  {
    // group {First Slot Text}
    copy: {
      eyebrow: $(firstEyebrow:RichText),
      headline: $(firstHeadlineText:RichText),
      summary: $(firstDescriptionText:RichText="select eye makeup, lipstick, and more"),
    },
    // endgroup

    // group {First Slot CTA}
    cta: {
      text: $(firstCTAText:RichText="Shop Now"),
      url: $(firstCTALink:String),
      adobeTag: $(firstCTAAdobeTag:String),
    },
    // endgroup

    // group {First Slot Headline Image}
    headlineImage: $(firstHeadlineImage:String),
    // endgroup

    // group {First Slot Image}
    imageSlug: $(firstImageSlug:String="wk30_082825_newcms_homepage_mac_promo_2c_1"),
    // endgroup
  },
  {
    // group {Second Slot Text}
    copy: {
      eyebrow: $(secondEyebrow:RichText),
      headline: $(secondHeadline:RichText),
      summary: $(secondDescription:RichText="Perfect Absolute"),
    },
    // endgroup

    // group {Second Slot CTA}
    cta: {
      text: $(secondCTAText:RichText="Shop Fragrances"),
      url: $(secondCTALink:String),
      adobeTag: $(secondCTAAdobeTag:String),
    },
    // endgroup

    // group {Second Slot Headline Image}
    headlineImage: $(secondHeadlineImage:String),
    // endgroup

    // group {Second Slot Image}
    imageSlug: $(secondImageSlug:String="wk30_082525_newcms_homepage_marcjacobs_2c_2"),
    // endgroup
  },
];

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const cn = (className) => `${className}-${createStaticId()}`;

const genTypoStyles = (size) => `
  font-size: var(--text-${size});
  line-height: var(--text-${size}--line-height);
  letter-spacing: var(--text-${size}--letter-spacing);
`;

const genTypoClassSet = (prefix) => `
  .${prefix}\\:belk-text-2xs {${genTypoStyles("2xs")}}
  .${prefix}\\:belk-text-xs {${genTypoStyles("xs")}}
  .${prefix}\\:belk-text-s {${genTypoStyles("sm")}}
  .${prefix}\\:belk-text-m {${genTypoStyles("base")}}
  .${prefix}\\:belk-text-l {${genTypoStyles("lg")}}
  .${prefix}\\:belk-text-xl {${genTypoStyles("xl")}}
  .${prefix}\\:belk-text-2xl {${genTypoStyles("2xl")}}
  .${prefix}\\:belk-text-3xl {${genTypoStyles("3xl")}}
  .${prefix}\\:belk-text-4xl {${genTypoStyles("4xl")}}
  .${prefix}\\:belk-text-5xl {${genTypoStyles("5xl")}}
  .${prefix}\\:belk-text-6xl {${genTypoStyles("6xl")}}
  .${prefix}\\:belk-text-7xl {${genTypoStyles("7xl")}}
  .${prefix}\\:belk-text-8xl {${genTypoStyles("8xl")}}
  .${prefix}\\:belk-text-9xl {${genTypoStyles("9xl")}}
  .${prefix}\\:belk-text-10xl {${genTypoStyles("10xl")}}
  .${prefix}\\:belk-text-64px {
    font-size: 64px;
    line-height: 80px;
    letter-spacing: normal;
  }
  .${prefix}\\:belk-text-80px {
    font-size: 80px;
    line-height: 84px;
    letter-spacing: normal;
  }
  .${prefix}\\:belk-text-100px {
    font-size: 100px;
    line-height: 102px;
    letter-spacing: normal;
  }
  .${prefix}\\:belk-text-128px {
    font-size: 128px;
    line-height: 136px;
    letter-spacing: normal;
  }
`;

const typoStyles = `
  @media (min-width: 40.001rem) {
    ${genTypoClassSet("sm")}
  }

  @media (min-width: 64.001rem) {
    ${genTypoClassSet("lg")}
  }

  @media (min-width: 64.001rem) and (max-width: 93rem) {
    ${genTypoClassSet("mlg")}
  }
`;

function generateAspectRatioStyles({
  desktopWidth,
  desktopHeight,
  tabletWidth,
  tabletHeight,
  mobileWidth,
  mobileHeight,
  includeSafari = false,
}) {
  tabletWidth = tabletWidth || desktopWidth;
  tabletHeight = tabletHeight || desktopHeight;

  let safariFallback = "";
  if (includeSafari) {
    const desktopRatio = desktopWidth / desktopHeight;
    let adjustedDesktopWidth = desktopWidth,
      adjustedDesktopHeight = desktopHeight;
    if (desktopWidth > referenceWidth.desktop) {
      adjustedDesktopWidth = referenceWidth.desktop;
      adjustedDesktopHeight = adjustedDesktopWidth / desktopRatio;
    }
    safariFallback = `
      /* Safari fallback - using window.innerHeight calculations */
    @supports (-webkit-hyphens:none) {
      .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] {
          height: calc(100vw * ${
            mobileHeight / referenceWidth.mobile
          }) !important;
          aspect-ratio: unset !important;
        }

      @media (min-width: 40.001rem) {
        .sm\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
          height: calc(100vw * ${
            tabletHeight / referenceWidth.tablet
          }) !important;
          aspect-ratio: unset !important;
        }
      }

      @media (min-width: 68.75rem) {
        .lg\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
          height: calc(min(100vw - ${desktopMinHorizontalMargin * 2}px, ${
      referenceWidth.desktop
    }px) * ${adjustedDesktopHeight / referenceWidth.desktop}) !important;
          width: calc(min(100vw - ${desktopMinHorizontalMargin * 2}px, ${
      referenceWidth.desktop
    }px) * ${adjustedDesktopWidth / referenceWidth.desktop}) !important;
          aspect-ratio: unset !important;
        }
      }

    }
    `;
  }

  return `
    .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] {
        aspect-ratio: ${mobileWidth} / ${mobileHeight};
      }

    @media (min-width: 40.001rem) {
      .sm\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
        aspect-ratio: ${tabletWidth} / ${tabletHeight};
      }
    }

    @media (min-width: 68.75rem) {
      .lg\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
        aspect-ratio: ${desktopWidth} / ${desktopHeight};
      }
    }


    ${safariFallback}
  `;
}

const genMediaStyles = (property, { mobile, tablet, desktop }) => {
  return `
    ${property}: ${mobile};

    @media (min-width: 40.001rem) {
      ${property}: ${tablet};
    }

    @media (min-width: 68.75rem) {
      ${property}: ${desktop};
    }
  `;
};

const pictureStyles = `
  .${cn("container")} {
    .${cn("picture-wrapper")} {
      &.${cn("overflow-hidden")} {
        overflow: hidden;
      }
      position: relative;
      display: flex;
      width: 100%;
      border-radius: 16px;
      @media (max-width: 767px) {
        border-radius: 8px;
      }
      
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
function PictureResponsiveImage({ slug, alt, width, height }) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  if (!slug || !isValidImageUrl(slug)) {
    return (
      <div
        className={`${cn("picture-wrapper")} ${cn("placeholder-wrapper")}`}
        style={{ width, height }}
        role="img"
        aria-label={alt || "Image placeholder"}
      >
        <span className="text-gray-500 text-sm">No image available</span>
      </div>
    );
  }

  const mobileSrc = buildImageUrl(slug, imagePreset, true);
  const desktopSrc = buildImageUrl(slug, imagePreset, false);

  return (
    <div
      className={`${cn(
        "picture-wrapper"
      )} overflow-hidden aspect-[147/120] lg:aspect-[752/600]`}
    >
      <picture className={cn("picture-wrapper")}>
      {mobileSrc && <source media="(max-width: 768px)" srcSet={mobileSrc} />}
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
    display: flex;
    padding: 16px 0;
    max-width: 1600px;
    ${genMediaStyles("margin", {
      mobile: `${marginTop}px ${marginHorizontalMobile} ${marginBottom}px;`,
      tablet: `${marginTop}px ${marginHorizontalTablet} ${marginBottom}px;`,
      desktop: `${marginTop}px ${marginHorizontal} ${marginBottom}px;`,
    })}
    ${genMediaStyles("gap", {
      mobile: `${mobileGap}px`,
      tablet: `${mobileGap}px`,
      desktop: `${desktopGap}px`,
    })}

    a {
      text-decoration: none;
      display: flex;
      flex: 1;

      &:nth-child(1) {
        .${cn("copy")} {
          right: 0;
        }
      }
    }
    .${cn("column")} {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;

      .${cn("copy")} {
        ${genMediaStyles("margin", {
          mobile: `2px 8px 0`,
          tablet: `12px 38px 0`,
          desktop: `10px 32px 0`,
        })}

        .${cn("headlineImage")} {
          object-fit: contain;
          ${genMediaStyles("height", {
            mobile: `${headlineImageHeightMobile}px`,
            tablet: `${headlineImageHeightTablet}px`,
            desktop: `${headlineImageHeight}px`,
          })}
        }

        .whitespace-pre-line {
          white-space: pre-line;
        }

        h5, h3 {
          color: ${fontColor};
          font-family: ${fontFamily};
        }
        p {
          color: ${fontColor};
          font-family: ${fontFamily};
          ${genMediaStyles("margin", {
            mobile: `0 0 8px`,
            tablet: `0 0 16px`,
            desktop: `0 0 16px`,
          })}
        }
        .${cn("cta")} {
          border-bottom: 1px solid ${fontColor};
          padding-bottom: 6px;
        }
      }
    }
  }
`;

// Extract content to conditionally wrap with Link (colIndex 0 = first, 1 = second for bildit-var names)
const renderContent = ({ imageSlug, headlineImage, copy, cta }, isMobile, colIndex = 0) => {
  const imageSlugVar = colIndex === 0 ? "firstImageSlug" : "secondImageSlug";
  const eyebrowVar = colIndex === 0 ? "firstEyebrow" : "secondEyebrow";
  const headlineVar = colIndex === 0 ? "firstHeadlineText" : "secondHeadline";
  const summaryVar = colIndex === 0 ? "firstDescriptionText" : "secondDescription";
  const ctaTextVar = colIndex === 0 ? "firstCTAText" : "secondCTAText";
  return (
  <div className={cn("column")}>
    <div data-bildit-var-name={imageSlugVar} data-bildit-var-type="String">
      <PictureResponsiveImage slug={imageSlug} alt={copy.headline} />
    </div>
    <div className={`${cn("copy")}`}>
      {copy.eyebrow && (
        <h5 data-bildit-var-name={eyebrowVar} data-bildit-var-type="RichText" className="font-bold belk-text-3xs sm:belk-text-s lg:belk-text-l mb-1">
          {copy.eyebrow}
        </h5>
      )}
      {copy.headline && (
        <h3
          data-bildit-var-name={headlineVar}
          data-bildit-var-type="RichText"
          className={`belk-text-l sm:belk-text-5xl lg:belk-text-8xl mb-1 ${getFontWeightClass(
            "bold"
          )}`}
        >
          {copy.headline}
        </h3>
      )}
      {headlineImage && isValidImageUrl(headlineImage) && (
        <Image
          src={buildImageUrl(headlineImage, headlineImagePreset, isMobile)}
          alt={copy.headline}
          className={`${cn("headlineImage")} mb-1`}
        />
      )}
      <p
        data-bildit-var-name={summaryVar}
        data-bildit-var-type="RichText"
        className={`whitespace-pre-line belk-text-base sm:belk-text-xl lg:belk-text-3xl leading-tight ${getFontWeightClass(
          "regular"
        )}`}
      >
        {copy.summary}
      </p>
      {cta.text && (
        <div>
          <span
            data-bildit-var-name={ctaTextVar}
            data-bildit-var-type="RichText"
            className={`${cn(
              "cta"
            )} belk-text-s sm:belk-text-l lg:belk-text-xl ${getFontWeightClass(
              "bold"
            )}`}
          >
            {cta.text}
          </span>
        </div>
      )}
    </div>
  </div>
  );
};

const TwoColumn112Template = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{typoStyles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 752,
          desktopHeight: 600,
          tabletWidth: 312,
          tabletHeight: 248,
          mobileWidth: 147,
          mobileHeight: 120,
        })}
      </style>
      <style>{pictureStyles}</style>
      <style>{styles}</style>
      <div className={cn("container")}>
        {columns.map((column, index) => (
          <Link
            href={column.cta.url || ""}
            data-aali={column.cta.adobeTag}
            key={index}
          >
            {renderContent(column, isMobile, index)}
          </Link>
        ))}
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
    ...columns.flatMap((column) => [
      column.headlineImage,
      column.imageSlug,
      column.copy.headline,
      column.copy.summary,
      column.cta.text,
      column.cta.url,
      column.cta.adobeTag,
    ]),
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

  // Build query string manually to avoid URL encoding the preset parameter
  const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
  });

  return `${baseUrl}/${contentType}/Belk/${slug}${
    isMobile ? "_m" : ""
  }?${preset}&${otherParams.toString()}`;
}

export default TwoColumn112Template;