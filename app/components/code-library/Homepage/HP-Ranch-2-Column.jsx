"use client";
import React from "react";
import Link from "next/link";

// group: {Spacing}
const referenceWidth = {
  desktop: 1560,
  tablet: 768,
  mobile: 375,
};

const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontalMobile = "16px";
const marginHorizontalTablet = "32px";
const desktopMinHorizontalMargin = 36;
const marginHorizontal = `max(${desktopMinHorizontalMargin}px, (100vw - ${referenceWidth.desktop}px) / 2)`; // belk logo alignment
// endgroup

// group: {Global}
const fontFamily = "proxima-nova";
const backgroundImage = $(backgroundImage:String="wk26_072825_newcms_homepage_fh_1");
const backgroundColor = $(backgroundColor:Color="#203048");
const imagePreset = "$DWP_PHOTO$"
// endgroup

// group: {Skinny Coupon}
const skinnyCoupon = {
  headline: $(skinnyCouponHeadline:RichText="TODAY ONLY! Back To School Deals";color="#FFFFFF"),
  cta: {
    text: $(skinnyCouponCTAText:RichText="Shop All";color="#0076BE"),
    url: $(skinnyCouponCTALink:String="";required=true),
    adobeTag: $(skinnyCouponCTAAdobeTag:String="";required=true),
  },
}
// endgroup

// group: {Left Text}
const leftHeadline = $(leftHeadline:RichText="21.99");
const leftDescription = $(leftDescription:RichText="active sets*");
const leftCTA = $(leftCTA:RichText="Shop Now";color="#0076BE");
const leftCTALink = $(leftCTALink:String="";required=true);
const leftCTAAdobeTag = $(leftCTAAdobeTag:String="";required=true);
// endgroup

// group: {Right Text}
const rightHeadline = $(rightHeadline:RichText="30% OFF";color="#0076BE");
const rightDescription = $(rightDescription:RichText="adidas shoes*";color="#0076BE");
const rightCTA = $(rightCTA:RichText="Shop Now");
const rightCTALink = $(rightCTALink:String="";required=true);
const rightCTAAdobeTag = $(rightCTAAdobeTag:String="";required=true);
// endgroup

const columns = [
  {
    headline: leftHeadline,
    description: leftDescription,
    cta: {
      text: leftCTA,
      url: leftCTALink,
      adobeTag: leftCTAAdobeTag,
    },
  },
  {
    headline: rightHeadline,
    description: rightDescription,
    cta: {
      text: rightCTA,
      url: rightCTALink,
      adobeTag: rightCTAAdobeTag,
    },
  },
];

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: "8px",
    tablet: "18px",
    desktop: "18px",
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
  const desktopRatio = desktopWidth / desktopHeight;

  let adjustedDesktopWidth = desktopWidth,
    adjustedDesktopHeight = desktopHeight;
  if (desktopWidth > referenceWidth.desktop) {
    adjustedDesktopWidth = referenceWidth.desktop;
    adjustedDesktopHeight = adjustedDesktopWidth / desktopRatio;
  }

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

    /* Safari fallback - using window.innerHeight calculations */
    @supports (-webkit-hyphens:none) {
      @media (max-width: 40rem) {
        .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] {
          height: calc(100vw * ${
            mobileHeight / referenceWidth.mobile
          }) !important;
          aspect-ratio: unset !important;
        }
      }

      @media (min-width: 40.001rem) and (max-width: 64rem) {
        .sm\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
          height: calc(100vw * ${
            tabletHeight / referenceWidth.tablet
          }) !important;
          aspect-ratio: unset !important;
        }
      }

      @media (min-width: 64.001rem) and (pointer: coarse) {
        .sm\\:aspect-\\[${tabletWidth}\\/${tabletHeight}\\] {
          height: calc(100vw * ${
            tabletHeight / referenceWidth.tablet
          }) !important;
          aspect-ratio: unset !important;
        }
      }

      @media (min-width: 64.001rem) and (pointer: fine) {
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
      desktop: "1560px",
    })}
    background-color: ${backgroundColor};

    ${genMediaStyles("margin", {
      mobile: `${marginTop}px ${marginHorizontalMobile} ${marginBottom}px`,
      tablet: `${marginTop}px ${marginHorizontalTablet} ${marginBottom}px`,
      desktop: `${marginTop}px ${marginHorizontal} ${marginBottom}px`,
    })}

    ${genMediaStyles("padding", {
      mobile: "0 0 16px",
      tablet: "0 0 32px",
      desktop: "0 0 48px",
    })}
  }

  .${cn("skinny")} {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    ${genMediaStyles("flex-direction", {
      mobile: "column",
      tablet: "row",
      desktop: "row",
    })}

    ${genMediaStyles("gap", {
      mobile: "8px",
      tablet: "26px",
      desktop: "36px",
    })}

    ${genMediaStyles("padding", {
      mobile: "16px 8px",
      tablet: "24px 0 28px",
      desktop: "24px 0",
    })}

    h3 {
      font-family: ${fontFamily};
      white-space: pre-line;
      margin: 0;
      text-align: center;
    }
    div>span {
      font-family: ${fontFamily};
      padding: 0 0 6px;
      border-bottom: 1px solid currentColor;
      white-space: pre-line;
    }
  }

  .${cn("full-hero")} {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    ${genMediaStyles("flex-direction", {
      mobile: "column",
      tablet: "column",
      desktop: "row",
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
  }

  .${cn("grid")} {
    display: flex;

    ${genMediaStyles("gap", {
      mobile: "16px",
      tablet: "16px",
      desktop: "32px",
    })}

    ${genMediaStyles("width", {
      mobile: "100%",
      tablet: "100%",
      desktop: "unset",
    })}

    ${genMediaStyles("height", {
      mobile: "unset",
      tablet: "unset",
      desktop: "100%",
    })}

    ${genMediaStyles("padding", {
      mobile: "0 16px 16px",
      tablet: "0 32px 28px",
      desktop: "0 32px",
    })}
    
    .${cn("item")} {
      background-color: #FCFCFCE6;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;

      ${genMediaStyles("border-radius", {
        mobile: cfg.radius.mobile,
        tablet: cfg.radius.tablet,
        desktop: cfg.radius.desktop,
      })}

      ${genMediaStyles("border", {
        mobile: `2px solid ${backgroundColor}`,
        tablet: `3px solid ${backgroundColor}`,
        desktop: `3px solid ${backgroundColor}`,
      })}

      ${genMediaStyles("margin", {
        mobile: "0",
        tablet: "0",
        desktop: "32px 0",
      })}
    
      .${cn("copy")} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3 {
          font-family: ${fontFamily};
          white-space: pre-line;
          margin: 0;
        }
        p {
          font-family: ${fontFamily};
          white-space: pre-line;

          ${genMediaStyles("margin", {
            mobile: "4px 0 16px",
            tablet: "6px 0 16px",
            desktop: "6px 0 16px",
          })}
        }
        div>span {
          font-family: ${fontFamily};
          padding: 0 0 4px;
          border-bottom: 1px solid currentColor;
          white-space: pre-line;
        }
      } 
    }
  }
`;

const RanchTwoColumn = () => {
  return (
    <>
      <style>{styles}</style>
      <style>{typoStyles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 1600,
          desktopHeight: 391,
          tabletWidth: 704,
          tabletHeight: 524,
          mobileWidth: 343,
          mobileHeight: 348,
        })}
      </style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 360,
          desktopHeight: 324,
          tabletWidth: 312,
          tabletHeight: 205,
          mobileWidth: 148,
          mobileHeight: 112,
        })}
      </style>
      <div className={cn("wrapper")}>
        <div className={cn("container")} data-bildit-var-name="backgroundImage" data-bildit-var-type="String">
          <Link
            className={cn("skinny")}
            href={skinnyCoupon.cta.url || "#"}
            data-aali={skinnyCoupon.cta.adobeTag}
          >
            <h3 data-bildit-var-name="skinnyCouponHeadline" data-bildit-var-type="RichText" className="font-bold belk-text-xl mlg:belk-text-6xl lg:belk-text-64px">
              {skinnyCoupon.headline}
            </h3>
            <div>
              <span data-bildit-var-name="skinnyCouponCTAText" data-bildit-var-type="RichText" className={"font-bold belk-text-l"}>
                {skinnyCoupon.cta.text}
              </span>
            </div>
          </Link>
          <div
            className={`${cn(
              "full-hero"
            )} aspect-[343/348] sm:aspect-[704/524] lg:aspect-[1600/391]`}
          >
            <div className={cn("grid")}>
              {columns.map((column, index) => (
                <Link
                  className={`${cn(
                    "item"
                  )} aspect-[148/112] sm:aspect-[312/205] lg:aspect-[360/324]`}
                  key={index}
                  href={column.cta.url || "#"}
                  data-aali={column.cta.adobeTag}
                >
                  <div className={cn("copy")}>
                    <h3 data-bildit-var-name={index === 0 ? "leftHeadline" : "rightHeadline"} data-bildit-var-type="RichText" className="font-bold belk-text-l sm:belk-text-4xl lg:belk-text-8xl">
                      {column.headline}
                    </h3>
                    <p data-bildit-var-name={index === 0 ? "leftDescription" : "rightDescription"} data-bildit-var-type="RichText" className="font-regular belk-text-m sm:belk-text-xl lg:belk-text-3xl">
                      {column.description}
                    </p>
                    <div>
                      <span data-bildit-var-name={index === 0 ? "leftCTA" : "rightCTA"} data-bildit-var-type="RichText" className={`belk-text-s sm:belk-text-l font-bold`}>
                        {column.cta.text}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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

export default RanchTwoColumn;