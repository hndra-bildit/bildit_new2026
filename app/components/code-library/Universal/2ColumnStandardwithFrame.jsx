"use client";
import React from "react";
import Link from "next/link";

// group: { Global}
const backgroundColor = $(backgroundColor:Color="#14377D");
const fontFamily = "proxima-nova"
const imagePreset = "$DWP_PHOTO$"
// endgroup

// group: { Typography}
const headlineFontSize = $(headlineFontSize:Dropdown[Small|m,Medium|l,Large|xl,XL|2xl,XXL|4xl]="xl");
const summaryFontSize = $(summaryFontSize:Dropdown[Small|m,Medium|l,Large|xl,XL|2xl,XXL|4xl]="l");
const ctaFontSize = $(ctaFontSize:Dropdown[Small|m,Medium|l,Large|xl,XL|2xl,XXL|4xl]="l");
// endgroup

const fontSizeToPx = { m: "14px", l: "16px", xl: "18px", "2xl": "20px", "4xl": "24px" };
const headlineFontSizePx = fontSizeToPx[headlineFontSize] ?? "18px";
const summaryFontSizePx = fontSizeToPx[summaryFontSize] ?? "16px";
const ctaFontSizePx = fontSizeToPx[ctaFontSize] ?? "16px";

// group: { Spacing}
const marginTopDesktop = $(marginTopDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomDesktop = $(marginBottomDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginTopMobile = $(marginTopMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomMobile = $(marginBottomMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "32px";

const columns = [
  {
// group: { First Slot Text}
    copy: {
      headline: $(firstHeadlineText:RichText="TRENDING ON SOCIAL"),
      summary: $(firstDescriptionText:RichText="Spotted on your feed & ready for your closet"),
      summaryMobile: $(firstDescriptionTextMobile:RichText="Spotted on your feed & \n ready for your closet"),
    },
    // endgroup

// group: { First Slot CTA}
    cta: {
      text: $(firstCTAText:RichText="Shop Now"),
      url: $(firstCTALink:String="";required=true),
      adobeTag: $(firstCTAAdobeTag:String="";required=true),
    },
    // endgroup

// group: { First Slot Image}
    imageSlug: $(firstImageSlug:String="wk25_072125_newcms_homepage_trend_2c_1"),
    imageSlugAlt: $(firstImageSlugAlt:String="image banner"),
    // endgroup
  },
  {
// group: { Second Slot Text}
    copy: {
      headline: $(secondHeadline:RichText="INFLUENCER PICKS"),
      summary: $(secondDescriptionText:RichText="Make our most-wanted styles yours"),
      summaryMobile: $(secondDescriptionTextMobile:RichText="Make our most-wanted \n styles yours"),
    },
    // endgroup

// group: { Second Slot CTA}
    cta: {
      text: $(secondCTAText:RichText="Shop Now"),
      url: $(secondCTALink:String="";required=true),
      adobeTag: $(secondCTAAdobeTag:String="";required=true),
    },
    // endgroup

// group: { Second Slot Image}
    imageSlug: $(secondImageSlug:String="wk25_072125_newcms_homepage_trend_2c_2"),
    imageSlugAlt: $(secondImageSlugAlt:String="image banner2"),
    // endgroup
  },
];

  const slotVarNames = [
    { headline: 'firstHeadlineText', summary: 'firstDescriptionText', summaryMobile: 'firstDescriptionTextMobile', cta: 'firstCTAText', imageAlt: 'firstImageSlugAlt' },
    { headline: 'secondHeadline', summary: 'secondDescriptionText', summaryMobile: 'secondDescriptionTextMobile', cta: 'secondCTAText', imageAlt: 'secondImageSlugAlt' },
  ];

const borderRadius = {
  mobile: "8px",
  desktop: "16px",
};

const cn = (className) => `${className}-${createStaticId()}`;

/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
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
        padding-top: ${(mobileHeight / mobileWidth) * 100}%;
        position: relative;
      }
    }

    @media (min-width: 768px) and (max-width: 1099px) {
      .md\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
        aspect-ratio: ${tabletWidth} / ${tabletHeight};
        padding-top: ${(tabletHeight / tabletWidth) * 100}%;
      }
    }

    @media (min-width: 1100px) {
      .lg\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
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
    width: 100%;
    display: flex;
  }
  .${cn("container")} {
    flex: 1;
    display: flex;
    max-width: 1600px;

    @media (max-width: 767px) {
      margin: ${marginTopMobile}px ${marginHorizontalMobile} ${marginBottomMobile}px;
      flex-direction: column;
      gap: 16px;
    }
    @media (min-width: 768px) and (max-width: 1099px) {
      margin: ${marginTopMobile}px ${marginHorizontalMobile} ${marginBottomMobile}px;
      flex-direction: column;
      gap: 32px;
    }
    @media (min-width: 1100px) {
      margin: ${marginTopDesktop}px ${marginHorizontal} ${marginBottomDesktop}px;
      flex-direction: row;
      gap: 16px;
    }

    a {
      background-color: ${backgroundColor};
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 32px;
      text-decoration: none;
      overflow: hidden;
      @media (max-width: 767px) {
        border-radius: ${borderRadius.mobile};
        gap: 16px;
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        border-radius: ${borderRadius.desktop};
        gap: 64px;
      }
      @media (min-width: 1100px) {
        border-radius: ${borderRadius.desktop};
        gap: 16px;
      }

      .mobile-only {
        @media (min-width: 768px) {
          display: none;
        }
      }
      .desktop-only {
        @media (max-width: 767px) {
          display: none;
        }
      }

      .image-1 {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        @media (max-width: 767px) {
          border-radius: ${borderRadius.mobile};
          background-image: url(${buildImageUrl(
            columns[0].imageSlug,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          border-radius: ${borderRadius.desktop};
          background-image: url(${buildImageUrl(
            columns[0].imageSlug,
            imagePreset,
            false,
            true
          )});
        }
        @media (min-width: 1100px) {
          border-radius: ${borderRadius.desktop};
          background-image: url(${buildImageUrl(
            columns[0].imageSlug,
            imagePreset,
            false
          )});
        }
      }
      .image-2 {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        @media (max-width: 767px) {
          border-radius: ${borderRadius.mobile};
          background-image: url(${buildImageUrl(
            columns[1].imageSlug,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) and (max-width: 1099px) {
          border-radius: ${borderRadius.desktop};
          background-image: url(${buildImageUrl(
            columns[1].imageSlug,
            imagePreset,
            false,
            true
          )});
        }
        @media (min-width: 1100px) {
          border-radius: ${borderRadius.desktop};
          background-image: url(${buildImageUrl(
            columns[1].imageSlug,
            imagePreset,
            false
          )});
        }
      }

      .copy {
        display: flex;
        flex-direction: column;
        * {
          @media (max-width: 1099px) {
            text-align: center;
          }
        }
        h3 {
          font-family: ${fontFamily};
          margin: 0;
          white-space: pre-line;
          font-size: ${headlineFontSizePx};
        }
        p {
          font-family: ${fontFamily};
          margin: 4px 0 12px;
          white-space: pre-line;
          font-size: ${summaryFontSizePx};
          @media (min-width: 1100px) {
            opacity: 0.9;
          }
        }
        div>span {
          font-family: ${fontFamily};
          padding: 0 0 6px;
          border-bottom: 1px solid currentColor;
          white-space: pre-line;
          font-size: ${ctaFontSizePx};
        }
      }
    }
  }
`;

const FortySixStaticTemplate = () => {
  return (
    <>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 724,
          desktopHeight: 464,
          tabletWidth: 576,
          tabletHeight: 440,
          mobileWidth: 279,
          mobileHeight: 200,
        })}
      </style>
      <style>{styles}</style>
      <div className={cn("wrapper")}>
        <div className={cn("container")}>
          {columns.map((column, index) => {
            const slot = slotVarNames[index];
            return (
            <Link
              href={column.cta.url || ""}
              data-aali={column.cta.adobeTag}
              key={index}
            >
              <div className="contents">
                <div
                  aria-label={column.imageSlugAlt}
                  className={`image-${
                    index + 1
                  } aspect-[279/200] md:aspect-[576/440] lg:aspect-[724/464]`}
                  data-bildit-var-name={['firstColumnBackgroundImage', 'secondColumnBackgroundImage'][index]}
                  data-bildit-var-type="String"
                ></div>
              </div>
              <div className="copy">
                <h3
                  className={getFontWeightClass("bold")}
                  data-bildit-var-name={slot.headline}
                  data-bildit-var-type="RichText"
                >
                  {column.copy.headline}
                </h3>
                <p
                  className={`desktop-only ${getFontWeightClass("medium")}`}
                  data-bildit-var-name={slot.summary}
                  data-bildit-var-type="RichText"
                >
                  {column.copy.summary}
                </p>
                <p
                  className={`mobile-only ${getFontWeightClass("medium")}`}
                  data-bildit-var-name={slot.summaryMobile}
                  data-bildit-var-type="RichText"
                >
                  {column.copy.summaryMobile}
                </p>
                <div>
                  <span
                    className={getFontWeightClass("bold")}
                    data-bildit-var-name={slot.cta}
                    data-bildit-var-type="RichText"
                  >
                    {column.cta.text}
                  </span>
                </div>
              </div>
            </Link>
          );
          })}
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
    ...columns.flatMap((column) => [
      column.imageSlug,
      column.imageSlugAlt,
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


export default FortySixStaticTemplate;