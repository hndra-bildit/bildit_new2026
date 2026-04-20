"use client";
import React from "react";
import Link from "next/link";

// group {Spacing}
const referenceWidth = {
  desktop: 1560,
  tablet: 768,
  mobile: 375,
};

const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="0");
const marginHorizontalMobile = "0";
const marginHorizontalTablet = "32px";
const desktopMinHorizontalMargin = 36;
const marginHorizontal = `max(${desktopMinHorizontalMargin}px, (100vw - ${referenceWidth.desktop}px) / 2)`; // belk logo alignment
// endgroup

// group { Wrapper }
const containerBackgroundColor = $(containerBackgroundColor:Color="#e01a2c");
// endgroup

// group { Text }
const fontFamily = "proxima-nova";
const headline = $(headline:String="Get the best deals now! CLEARANCE");
const eyebrow = $(eyebrow:String="UP\nTO");
const title = $(title:String="80% OFF*");
const fontColor = $(fontColor:Color="#FFFFFF");
// endgroup

// group { CTA }
const ctaText = $(ctaText:String="Shop Now");
const ctaFontColor = $(ctaFontColor:Color="#171717");
const ctaLink = $(ctaLink:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
//endgroup

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: "0",
    tablet: "0",
    desktop: "0",
  },
  tabletScale: (window.innerWidth / 768).toFixed(2),
};

const genTypoStyles = (size, withScale = false) => `
  font-size: ${
    withScale
      ? `calc(var(--text-${size}) * ${cfg.tabletScale})`
      : `var(--text-${size})`
  };
  line-height: ${
    withScale
      ? `calc(var(--text-${size}--line-height) * ${cfg.tabletScale})`
      : `var(--text-${size}--line-height)`
  };
  letter-spacing: var(--text-${size}--letter-spacing);
`;

const genTypoClassSet = (prefix, withScale = false) => `
  .${prefix}\\:belk-text-2xs {${genTypoStyles("2xs", withScale)}}
  .${prefix}\\:belk-text-xs {${genTypoStyles("xs", withScale)}}
  .${prefix}\\:belk-text-s {${genTypoStyles("sm", withScale)}}
  .${prefix}\\:belk-text-m {${genTypoStyles("base", withScale)}}
  .${prefix}\\:belk-text-l {${genTypoStyles("lg", withScale)}}
  .${prefix}\\:belk-text-xl {${genTypoStyles("xl", withScale)}}
  .${prefix}\\:belk-text-2xl {${genTypoStyles("2xl", withScale)}}
  .${prefix}\\:belk-text-3xl {${genTypoStyles("3xl", withScale)}}
  .${prefix}\\:belk-text-4xl {${genTypoStyles("4xl", withScale)}}
  .${prefix}\\:belk-text-5xl {${genTypoStyles("5xl", withScale)}}
  .${prefix}\\:belk-text-6xl {${genTypoStyles("6xl", withScale)}}
  .${prefix}\\:belk-text-7xl {${genTypoStyles("7xl", withScale)}}
  .${prefix}\\:belk-text-8xl {${genTypoStyles("8xl", withScale)}}
  .${prefix}\\:belk-text-9xl {${genTypoStyles("9xl", withScale)}}
  .${prefix}\\:belk-text-10xl {${genTypoStyles("10xl", withScale)}}
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
  @media (min-width: 40.001rem) and (max-width: 64rem) {
    ${genTypoClassSet("sm", false)}
  }

  @media (min-width: 64.001rem) and (pointer: coarse) {
    ${genTypoClassSet("sm", true)}
  }

  @media (min-width: 64.001rem) and (pointer: fine) {
    ${genTypoClassSet("lg", false)}
  }

  @media (min-width: 64.001rem) and (max-width: 93rem) and (pointer: fine) {
    ${genTypoClassSet("mlg", false)}
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

    ${safariFallback}
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
    display: flex;
    width: 100%;

    .${cn("container")} {
      flex: 1;
      display: flex;
      max-width: 1600px;
      background-color: ${containerBackgroundColor};
      overflow: hidden;

      ${genMediaStyles("margin", {
        mobile: `${marginTop}px ${marginHorizontalMobile} ${marginBottom}px`,
        tablet: `${marginTop}px ${marginHorizontalTablet} ${marginBottom}px`,
        desktop: `${marginTop}px ${marginHorizontal} ${marginBottom}px`,
      })}

      ${genMediaStyles("border-radius", {
        mobile: cfg.radius.mobile,
        tablet: cfg.radius.tablet,
        desktop: cfg.radius.desktop,
      })}

      a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        overflow: hidden;

        ${genMediaStyles("margin", {
          mobile: "0",
          tablet: "16px 20px",
          desktop: "24px 32px",
        })}

        ${genMediaStyles("border-radius", {
          mobile: "0",
          tablet: cfg.radius.tablet,
          desktop: cfg.radius.desktop,
        })}

        .${cn("copy")} {
          display: flex;
          align-items: center;

          ${genMediaStyles("flex-direction", {
            mobile: "column",
            tablet: "column",
            desktop: "row",
          })}

          ${genMediaStyles("gap", {
            mobile: "unset",
            tablet: "8px",
            desktop: "32px",
          })}

          ${genMediaStyles("justify-content", {
            mobile: "center",
            tablet: "space-evenly",
            desktop: "space-between",
          })}

          ${genMediaStyles("min-width", {
            mobile: "unset",
            tablet: "77%",
            desktop: "71%",
          })}

          * {
            font-family: ${fontFamily};
            white-space: pre-line;
            color: ${fontColor};
            text-align: center;
          }

          .${cn("rowText")} {
            display: flex;
            align-items: center;
            justify-content: center;

            ${genMediaStyles("margin", {
              mobile: "3px 0 10px",
              tablet: "0",
              desktop: "0",
            })}

            ${genMediaStyles("gap", {
              mobile: "4px",
              tablet: "6px",
              desktop: "8px",
            })}
          }

          .${cn("tablet-visible")} {
            ${genMediaStyles("display", {
              mobile: "none",
              tablet: "flex",
              desktop: "none",
            })}
          }

          .${cn("tablet-hidden")} {
            ${genMediaStyles("display", {
              mobile: "flex",
              tablet: "none",
              desktop: "flex",
            })}
          }

          .${cn("cta")} {
            border-radius: 4px;
            font-family: ${fontFamily};

            ${genMediaStyles("background-color", {
              mobile: "#ffffff",
              tablet: fontColor,
              desktop: fontColor,
            })}

            ${genMediaStyles("color", {
              mobile: "#000000",
              tablet: ctaFontColor,
              desktop: ctaFontColor,
            })}

            ${genMediaStyles("padding", {
              mobile: "6px 35px",
              tablet: "10px 35px",
              desktop: "10px 35px",
            })}
          }
        }
      }
    }
  }
`;

const SkinnyCoupon106StaticTemplate = () => {
  return (
    <>
      <style>{styles}</style>
      <style>{typoStyles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 1600,
          desktopHeight: 264,
          tabletWidth: 704,
          tabletHeight: 120,
          mobileWidth: 343,
          mobileHeight: 184,
        })}
      </style>
      <div className={cn("wrapper")}>
        <div
          className={`${cn(
            "container"
          )} aspect-[343/184] sm:aspect-[704/120] lg:aspect-[1600/264]`}
        >
          <Link href={ctaLink || "#"} data-aali={ctaAdobeTag}>
            <div className={cn("copy")}>
              <h3 className="font-bold belk-text-xl sm:belk-text-2xl mlg:belk-text-3xl lg:belk-text-6xl">
                {headline}
              </h3>
              <div className={cn("rowText")}>
                <h5 className="font-regular belk-text-l sm:belk-text-m lg:belk-text-4xl">
                  {eyebrow}
                </h5>
                <h2 className="font-bold belk-text-7xl sm:belk-text-6xl lg:belk-text-80px">
                  {title}
                </h2>
                <div
                  className={`${cn("cta")} ${cn(
                    "tablet-visible"
                  )} font-bold belk-text-m sm:belk-text-m lg:belk-text-xl`}
                >
                  {ctaText}
                </div>
              </div>
              <div
                className={`${cn("cta")} ${cn(
                  "tablet-hidden"
                )} font-bold belk-text-m sm:belk-text-m lg:belk-text-xl`}
              >
                {ctaText}
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
    containerBackgroundColor,
    headline,
    eyebrow,
    title,
    ctaText,
    ctaLink,
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

export default SkinnyCoupon106StaticTemplate;