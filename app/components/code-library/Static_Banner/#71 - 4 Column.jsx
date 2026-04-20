"use client";
import React from "react";
import Link from "next/link";

// group {Global}
const fontColor = $(fontColor:Color="#171717");
const backgroundImage = $(backgroundImage:String="wk25_072125_newcms_homepage_summer_savings_4c_background");
const fontFamily = "proxima-nova"
const imagePreset = "$DWP_PHOTO$"
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
// endgroup

// group {Skinny Coupon}
const skinnyCoupon = {
  headline: $(skinnyCouponHeadline:String="Summer's Hottest Savings are Here"),
  cta: {
    text: $(skinnyCouponCTAText:String="Shop Now"),
    url: $(skinnyCouponCTALink:String),
    adobeTag: $(skinnyCouponCTAAdobeTag:String),
  },
}
// endgroup

const columns = [
  {
    // group {First Slot Text}
    headline: $(firstHeadline:String="From 14.99"),
    headlineMobile: $(firstHeadlineMobile:String="From 14.99"),
    description: $(firstDescription:String="women’s shorts from Kim Rogers® & more"),
    descriptionMobile: $(firstDescriptionMobile:String="women’s shorts\nfrom Kim Rogers®\n& more"),
    // endgroup

    // group {First Slot CTA}
    cta: {
      text: $(firstCTAText:String="Shop Now"),
      url: $(firstCTALink:String),
      adobeTag: $(firstCTAAdobeTag:String),
    },
    // endgroup
    // group {First Slot Image}
    imageSlug: $(firstImageSlug:String="wk25_072125_newcms_homepage_summer_savings_4c_1"),
    // endgroup
  },
  {
    // group {Second Slot Text}
    headline: $(secondHeadline:String="60% Off"),
    headlineMobile: $(secondHeadlineMobile:String="60% Off"),
    description: $(secondDescription:String="women’s swim"),
    descriptionMobile: $(secondDescriptionMobile:String="women’s swim"),
    // endgroup

    // group {Second Slot CTA}
    cta: {
      text: $(secondCTAText:String="Shop Now"),
      url: $(secondCTALink:String),
      adobeTag: $(secondCTAAdobeTag:String),
    },
    // endgroup
    // group {Second Slot Image}
    imageSlug: $(secondImageSlug:String="wk25_072125_newcms_homepage_summer_savings_4c_2"),
    // endgroup
  },
  {
    // group {Third Slot Text}
    headline: $(thirdHeadline:String="Up to\n 65% Off"),
    headlineMobile: $(thirdHeadlineMobile:String="Up to 65% Off"),
    description: $(thirdDescription:String="men’s apparel"),
    descriptionMobile: $(thirdDescriptionMobile:String="men’s apparel"),
    // endgroup

    // group {Third Slot CTA}
    cta: {
      text: $(thirdCTAText:String="Shop Now"),
      url: $(thirdCTALink:String),
      adobeTag: $(thirdCTAAdobeTag:String),
    },
    // endgroup
    // group {Third Slot Image}
    imageSlug: $(thirdImageSlug:String="wk25_072125_newcms_homepage_summer_savings_4c_3"),
    // endgroup
  },
  {
    // group {Fourth Slot Text}
    headline: $(fourthHeadline:String="Up to\n 70% Off"),
    headlineMobile: $(fourthHeadlineMobile:String="Up to 70% Off"),
    description: $(fourthDescription:String="sandals & accessories"),
    descriptionMobile: $(fourthDescriptionMobile:String="sandals &\naccessories"),
    // endgroup

    // group {Fourth Slot CTA}
    cta: {
      text: $(fourthCTAText:String="Shop Now"),
      url: $(fourthCTALink:String),
      adobeTag: $(fourthCTAAdobeTag:String),
    },
    // endgroup
    // group {Fourth Slot Image}
    imageSlug: $(fourthImageSlug:String="wk25_072125_newcms_homepage_summer_savings_4c_4"),
    // endgroup
  },
];

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: "8px",
    tablet: "8px",
    desktop: "16px",
  },
  skinny: {
    fontSize: {
      mobile: "20px",
      tablet: "24px",
      desktop: "32px",
    },
    lineHeight: {
      mobile: "24px",
      tablet: "24px",
      desktop: "36px",
    },
    fontWeight: {
      mobile: "700",
      tablet: "700",
      desktop: "700",
    },
  },
  headline: {
    fontSize: {
      mobile: "18px",
      tablet: "32px",
      desktopSmall: "42px",
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
      desktopSmall: "24px",
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
      desktop: "400",
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
    width: 100%;
    display: flex;
  }

  .${cn("container")} {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    @media (max-width: 767px) {
      margin: ${marginTop}px ${marginHorizontalMobile} ${marginBottom}px;
      background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, true)})` : "none"};
      border-radius: ${cfg.radius.mobile};
    }
    @media (min-width: 768px) and (max-width: 1099px) {
      margin: ${marginTop}px ${marginHorizontal} ${marginBottom}px;
      background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, false, true)})` : "none"};
      border-radius: ${cfg.radius.tablet};
    }
    @media (min-width: 1100px) {  
      margin: ${marginTop}px ${marginHorizontal} ${marginBottom}px;
      background-image: ${isValidImageUrl(backgroundImage) ? `url(${buildImageUrl(backgroundImage, imagePreset, false)})` : "none"};
      border-radius: ${cfg.radius.desktop};
    }
  }

  .${cn("skinny")} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    text-decoration: none;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 8px;
    }
    @media (min-width: 768px) and (max-width: 1099px) {
      flex-direction: row;
      gap: 26px;
    }
    @media (min-width: 1100px) {  
      flex-direction: row;
      gap: 26px;
    }

    h3 {
      color: ${fontColor};
      font-family: ${fontFamily};
      white-space: pre-line;
      margin: 0;
      @media (max-width: 767px) {
        font-size: ${cfg.skinny.fontSize.mobile};
        line-height: ${cfg.skinny.lineHeight.mobile};
        font-weight: ${cfg.skinny.fontWeight.mobile};
      }
      @media (min-width: 768px) and (max-width: 1099px) { 
        font-size: ${cfg.skinny.fontSize.tablet};
        line-height: ${cfg.skinny.lineHeight.tablet};
        font-weight: ${cfg.skinny.fontWeight.tablet};
      }
      @media (min-width: 1100px) {
        font-size: ${cfg.skinny.fontSize.desktop};
        line-height: ${cfg.skinny.lineHeight.desktop};
        font-weight: ${cfg.skinny.fontWeight.desktop};
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

  .${cn("grid")} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width: 1099px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 16px;
    }
    @media (max-width: 767px) {
      padding: 0 16px 16px;
    }
    @media (min-width: 768px) {
      padding: 0 32px 32px;
    }
      
    .item:nth-child(1) {
      background-image: ${isValidImageUrl(columns[0].imageSlug) ? `url(${buildImageUrl(columns[0].imageSlug, imagePreset, false)})` : "none"};
      @media (max-width: 767px) {
        background-image: ${isValidImageUrl(columns[0].imageSlug) ? `url(${buildImageUrl(columns[0].imageSlug, imagePreset, true)})` : "none"};
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        background-image: ${isValidImageUrl(columns[0].imageSlug) ? `url(${buildImageUrl(columns[0].imageSlug, imagePreset, false, true)})` : "none"};
      }
    }
    .item:nth-child(2) {
      background-image: ${isValidImageUrl(columns[1].imageSlug) ? `url(${buildImageUrl(columns[1].imageSlug, imagePreset, false)})` : "none"};
      @media (max-width: 767px) {
        background-image: ${isValidImageUrl(columns[1].imageSlug) ? `url(${buildImageUrl(columns[1].imageSlug, imagePreset, true)})` : "none"};
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        background-image: ${isValidImageUrl(columns[1].imageSlug) ? `url(${buildImageUrl(columns[1].imageSlug, imagePreset, false, true)})` : "none"};
      }
    }
    .item:nth-child(3) {
      background-image: ${isValidImageUrl(columns[2].imageSlug) ? `url(${buildImageUrl(columns[2].imageSlug, imagePreset, false)})` : "none"};
      @media (max-width: 767px) {
        background-image: ${isValidImageUrl(columns[2].imageSlug) ? `url(${buildImageUrl(columns[2].imageSlug, imagePreset, true)})` : "none"};
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        background-image: ${isValidImageUrl(columns[2].imageSlug) ? `url(${buildImageUrl(columns[2].imageSlug, imagePreset, false, true)})` : "none"};
      }
    }
    .item:nth-child(4) {
      background-image: ${isValidImageUrl(columns[3].imageSlug) ? `url(${buildImageUrl(columns[3].imageSlug, imagePreset, false)})` : "none"};
      @media (max-width: 767px) {
        background-image: ${isValidImageUrl(columns[3].imageSlug) ? `url(${buildImageUrl(columns[3].imageSlug, imagePreset, true)})` : "none"};
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        background-image: ${isValidImageUrl(columns[3].imageSlug) ? `url(${buildImageUrl(columns[3].imageSlug, imagePreset, false, true)})` : "none"};
      }
    }

    .item {
      background-color: #ffffff;
      background-size: cover;
      background-repeat: no-repeat;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      @media (max-width: 767px) {
        padding: 8px 10px;
        border-radius: ${cfg.radius.mobile};
      }
      @media (min-width: 768px) and (max-width: 1099px) {
        padding: 32px 16px 16px 32px;
        border-radius: ${cfg.radius.tablet};
      }
      @media (min-width: 1100px) {
        padding: 32px 16px 16px 32px;
        border-radius: ${cfg.radius.desktop};
      }

      .desktop-none {
        @media (min-width: 1100px) {
          display: none;
        }
      }
      .tablet-none {
        @media (min-width: 768px) and (max-width: 1099px) {
          display: none;
        }
      }
      .mobile-none {
        @media (max-width: 767px) {
          display: none;
        }
      }
    
      .copy {
        display: flex;
        flex-direction: column;
        h3 {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          margin: 0;
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
          @media (min-width: 1100px) and (max-width: 1479px) {
            font-size: ${cfg.headline.fontSize.desktopSmall};
            line-height: ${cfg.headline.lineHeight.desktop};
            font-weight: ${cfg.headline.fontWeight.desktop};
          }
        }
        p {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          @media (max-width: 767px) {
            margin: 4px 0 16px;
            font-size: ${cfg.description.fontSize.mobile};
            line-height: ${cfg.description.lineHeight.mobile};
            font-weight: ${cfg.description.fontWeight.mobile};
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            margin: 6px 0 16px;
            font-size: ${cfg.description.fontSize.tablet};
            line-height: ${cfg.description.lineHeight.tablet};
            font-weight: ${cfg.description.fontWeight.tablet};
          }
          @media (min-width: 1100px) {
            margin: 6px 0 16px;
            font-size: ${cfg.description.fontSize.desktop};
            line-height: ${cfg.description.lineHeight.desktop};
            font-weight: ${cfg.description.fontWeight.desktop};
          }
          @media (min-width: 1100px) and (max-width: 1479px) {
            font-size: ${cfg.description.fontSize.desktopSmall};
            line-height: ${cfg.description.lineHeight.desktop};
            font-weight: ${cfg.description.fontWeight.desktop};
          }
        }
        div>span {
          color: ${fontColor};
          font-family: ${fontFamily};
          padding: 0 0 4px;
          border-bottom: 1px solid ${fontColor};
          white-space: pre-line;
        }
      } 
    }
  }
`;

const FortyEightStaticTemplate = () => {
  return (
    <>
      <style>{styles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 360,
          desktopHeight: 600,
          tabletWidth: 311,
          tabletHeight: 520,
          mobileWidth: 146,
          mobileHeight: 240,
        })}
      </style>
      <div className={cn("wrapper")}>
        <div className={cn("container")}>
          <Link
            className={cn("skinny")}
            href={skinnyCoupon.cta.url || "#"}
            data-aali={skinnyCoupon.cta.adobeTag}
          >
            <h3>{skinnyCoupon.headline}</h3>
            <div>
              <span className={`belk-text-l font-bold`}>
                {skinnyCoupon.cta.text}
              </span>
            </div>
          </Link>
          <div className={cn("grid")}>
            {columns.map((column, index) => (
              <Link
                className={
                  "item aspect-[146/240] md:aspect-[311/520] lg:aspect-[360/600]"
                }
                key={index}
                href={column.cta.url || "#"}
                data-aali={column.cta.adobeTag}
              >
                <div className={"copy"}>
                  <h3 className={"tablet-none mobile-none"}>
                    {column.headline}
                  </h3>
                  <h3 className={"desktop-none"}>{column.headlineMobile}</h3>
                  <p className={"mobile-none"}>{column.description}</p>
                  <p className={"desktop-none tablet-none"}>
                    {column.descriptionMobile}
                  </p>
                  {column.cta.text && (
                    <div>
                      <span
                        className={`${getFontSizeClass(
                          "l",
                          "m"
                        )} ${getFontWeightClass("bold")}`}
                      >
                        {column.cta.text}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
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
      column.headline,
      column.description,
      column.cta.text,
      column.cta.url,
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