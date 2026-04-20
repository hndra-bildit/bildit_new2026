"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// group {Spacing}
const referenceWidth = {
  desktop: 1560,
  tablet: 768,
  mobile: 375,
};
const desktopMinHorizontalMargin = 36;

const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontalMobile = "16px";
const marginHorizontalTablet = "32px";
const marginHorizontal = `max(${desktopMinHorizontalMargin}px, (100vw - ${referenceWidth.desktop}px) / 2)`; // belk logo alignment
// endgroup

// group {Text}
const fontFamily = "proxima-nova"
const headline = $(headline:RichText="Deals on Styles to Wear Now";color="#171717");
const subline = $(subline:RichText="from 9.99";color="#171717");
// endgroup

// group {CTA}
const ctaText = $(ctaText:RichText="Shop Now";color="#171717");
const ctaUrl = $(ctaUrl:String="/";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="";required=true);
// endgroup

// group {Images}
const imageSlug1 = $(imageSlug1:String="wk28_081125_newcms_homepage_deals_slide_1");
const imageSlug2 = $(imageSlug2:String="wk28_081125_newcms_homepage_deals_slide_2");
const imageSlug3 = $(imageSlug3:String="wk28_081125_newcms_homepage_deals_slide_3");
const imageSlug4 = $(imageSlug4:String="wk28_081125_newcms_homepage_deals_slide_4");
const imageSlug5 = $(imageSlug5:String="wk28_081125_newcms_homepage_deals_slide_5");
const imagePreset = "$DWP_PHOTO$";
// endgroup

// group {Background}
const outerBgColor = $(outerBgColor:Color="#E3E0CD");
const innerBgColor = $(innerBgColor:Color="#EEEBDA");
// endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: "8px",
    tablet: "8px",
    desktop: "16px",
  },
  tabletScale: 1,
};

const sliderContainerDesktop = 982;
const sliderItemDesktop = 296;
const sliderContainerTablet = 640;
const sliderItemTablet = 288;
const sliderContainerMobile = 306;
const sliderItemMobile = 270;
const slideGap = 16;

const sliderContainerWidth = {
  desktop: (sliderItemDesktop * 5 + slideGap * 4) / sliderContainerDesktop,
  tablet: (sliderItemTablet * 5 + slideGap * 4) / sliderContainerTablet,
  mobile: (sliderItemMobile * 5 + slideGap * 4) / sliderContainerMobile,
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

    > div {
      ${genMediaStyles("margin", {
        mobile: `${marginTop}px ${marginHorizontalMobile} ${marginBottom}px`,
        tablet: `${marginTop}px ${marginHorizontalTablet} ${marginBottom}px`,
        desktop: `${marginTop}px ${marginHorizontal} ${marginBottom}px`,
      })}
    }
    
    a {
      flex: 1;
      display: flex;
      text-decoration: none;
      overflow: hidden;
      background-color: ${outerBgColor};

      ${genMediaStyles("border-radius", {
        mobile: cfg.radius.mobile,
        tablet: cfg.radius.tablet,
        desktop: cfg.radius.desktop,
      })}

      .${cn("inner")} {
        flex: 1;
        display: flex;
        justify-content: space-between;
        overflow: hidden;

        ${genMediaStyles("flex-direction", {
          mobile: "column",
          tablet: "column",
          desktop: "row",
        })}

        ${genMediaStyles("gap", {
          mobile: "16px",
          tablet: 40 * cfg.tabletScale + "px",
          desktop: "0",
        })}

        ${genMediaStyles("background-color", {
          mobile: outerBgColor,
          tablet: outerBgColor,
          desktop: innerBgColor,
        })}

        ${genMediaStyles("margin", {
          mobile: "16px",
          tablet: 32 * cfg.tabletScale + "px",
          desktop: "56px",
        })}
      }

      .${cn("copy")} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        ${genMediaStyles("justify-content", {
          mobile: "flex-start",
          tablet: "flex-start",
          desktop: "center",
        })}

        ${genMediaStyles("flex", {
          mobile: "1",
          tablet: "1",
          desktop: "unset",
        })}

        ${genMediaStyles("width", {
          mobile: "100%",
          tablet: "100%",
          desktop: "28%",
        })}

        ${genMediaStyles("background-color", {
          mobile: innerBgColor,
          tablet: innerBgColor,
          desktop: "transparent",
        })}

        ${genMediaStyles("padding", {
          mobile: "14px 0 16px 16px",
          tablet: `${24 * cfg.tabletScale}px 0 ${40 * cfg.tabletScale}px ${
            60 * cfg.tabletScale
          }px`,
          desktop: "0 48px",
        })}

        * {
          font-family: ${fontFamily};
          white-space: pre-line;
        }

        p {
          ${genMediaStyles("padding", {
            mobile: "4px 0 14px",
            tablet: "4px 0 16px",
            desktop: "4px 0 24px",
          })}
        }

        .${cn("cta")} {
          text-decoration: none;
          padding: 0 0 6px;
          border-bottom: 1px solid currentColor;
        }
      }

      .${cn("carousel-wrapper")} {
        ${genMediaStyles("margin", {
          mobile: "0",
          tablet: "0",
          desktop: "4.8% 0",
        })}

        ${genMediaStyles("width", {
          mobile: "100%",
          tablet: "100%",
          desktop: "66%",
        })}
      }

      .${cn("carousel-container")} {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        z-index: 2;
        transition: transform 0.5s ease-in-out;
        gap: ${slideGap}px;

        ${genMediaStyles("width", {
          mobile: 100 * sliderContainerWidth.mobile + "%",
          tablet: 100 * sliderContainerWidth.tablet + "%",
          desktop: 100 * sliderContainerWidth.desktop + "%",
        })}

        > div {
          width: calc((100% - ${slideGap * 4}px) / 5);
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }

        .${cn("bg-image-1")} {
          ${genMediaStyles("background-image", {
            mobile: isValidImageUrl(imageSlug1) ? `url(${buildImageUrl(imageSlug1, imagePreset, true)})` : "none",
            tablet: isValidImageUrl(imageSlug1) ? `url(${buildImageUrl(imageSlug1, imagePreset, false, true)})` : "none",
            desktop: isValidImageUrl(imageSlug1) ? `url(${buildImageUrl(imageSlug1, imagePreset, false)})` : "none",
          })}
        }

        .${cn("bg-image-2")} {
          ${genMediaStyles("background-image", {
            mobile: isValidImageUrl(imageSlug2) ? `url(${buildImageUrl(imageSlug2, imagePreset, true)})` : "none",
            tablet: isValidImageUrl(imageSlug2) ? `url(${buildImageUrl(imageSlug2, imagePreset, false, true)})` : "none",
            desktop: isValidImageUrl(imageSlug2) ? `url(${buildImageUrl(imageSlug2, imagePreset, false)})` : "none",
          })}
        }

        .${cn("bg-image-3")} {
          ${genMediaStyles("background-image", {
            mobile: isValidImageUrl(imageSlug3) ? `url(${buildImageUrl(imageSlug3, imagePreset, true)})` : "none",
            tablet: isValidImageUrl(imageSlug3) ? `url(${buildImageUrl(imageSlug3, imagePreset, false, true)})` : "none",
            desktop: isValidImageUrl(imageSlug3) ? `url(${buildImageUrl(imageSlug3, imagePreset, false)})` : "none",
          })}
        }

        .${cn("bg-image-4")} {
          ${genMediaStyles("background-image", {
            mobile: isValidImageUrl(imageSlug4) ? `url(${buildImageUrl(imageSlug4, imagePreset, true)})` : "none",
            tablet: isValidImageUrl(imageSlug4) ? `url(${buildImageUrl(imageSlug4, imagePreset, false, true)})` : "none",
            desktop: isValidImageUrl(imageSlug4) ? `url(${buildImageUrl(imageSlug4, imagePreset, false)})` : "none",
          })}
        }

        .${cn("bg-image-5")} {
          ${genMediaStyles("background-image", {
            mobile: isValidImageUrl(imageSlug5) ? `url(${buildImageUrl(imageSlug5, imagePreset, true)})` : "none",
            tablet: isValidImageUrl(imageSlug5) ? `url(${buildImageUrl(imageSlug5, imagePreset, false, true)})` : "none",
            desktop: isValidImageUrl(imageSlug5) ? `url(${buildImageUrl(imageSlug5, imagePreset, false)})` : "none",
          })}
        }
      }
    }

    .${cn("arrow-button")} {
      position: absolute;
      ${genMediaStyles("top", {
        mobile: "60%",
        tablet: "64%",
        desktop: "49%",
      })}
      ${genMediaStyles("width", {
        mobile: "40px",
        tablet: 40 * cfg.tabletScale + "px",
        desktop: "54px",
      })}
      ${genMediaStyles("height", {
        mobile: "40px",
        tablet: 40 * cfg.tabletScale + "px",
        desktop: "54px",
      })}
      background-color: rgba(0, 0, 0);
      border: none;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 10;
      transition: background-color 0.3s ease;
      display: flex;

      &:hover {
        background-color: rgba(0, 0, 0, 1);
      }

      svg {
        ${genMediaStyles("width", {
          mobile: "8px",
          tablet: 8 * cfg.tabletScale + "px",
          desktop: "10px",
        })}
        ${genMediaStyles("height", {
          mobile: "14px",
          tablet: 14 * cfg.tabletScale + "px",
          desktop: "18px",
        })}
      }
    }

    .${cn("arrow-left")} {
      ${genMediaStyles("left", {
        mobile: "36px",
        tablet: "60px",
        desktop: "37%",
      })}
      
      svg {
        transform: rotate(180deg);
      }
    }

    .${cn("arrow-right")} {
      ${genMediaStyles("right", {
        mobile: "36px",
        tablet: "60px",
        desktop: "6.5%",
      })}
    }

    .${cn("arrow-hidden")} {
      display: none;
    }

    .${cn("arrow-mobile-hidden")} {
      ${genMediaStyles("display", {
        mobile: "none",
        tablet: "flex",
        desktop: "flex",
      })}
    }
    .${cn("arrow-tablet-hidden")} {
      ${genMediaStyles("display", {
        mobile: "flex",
        tablet: "none",
        desktop: "flex",
      })}
    }
    .${cn("arrow-desktop-hidden")} {
      ${genMediaStyles("display", {
        mobile: "flex",
        tablet: "flex",
        desktop: "none",
      })}
    }
  }
`;

const maxSlides = {
  mobile: Math.ceil(sliderContainerWidth.mobile),
  tablet: Math.ceil(sliderContainerWidth.tablet),
  desktop: Math.ceil(sliderContainerWidth.desktop),
};

const normalSlides = {
  mobile:
    (100 *
      (Math.floor(sliderContainerMobile / (sliderItemMobile + slideGap)) *
        (sliderItemMobile + slideGap))) /
    (sliderItemMobile * 5 + slideGap * 4),
  tablet:
    (100 *
      (Math.floor(sliderContainerTablet / (sliderItemTablet + slideGap)) *
        (sliderItemTablet + slideGap))) /
    (sliderItemTablet * 5 + slideGap * 4),
  desktop:
    (100 *
      (Math.floor(sliderContainerDesktop / (sliderItemDesktop + slideGap)) *
        (sliderItemDesktop + slideGap))) /
    (sliderItemDesktop * 5 + slideGap * 4),
};

const extremeSlides = {
  mobile: 100 * (1 - 1 / sliderContainerWidth.mobile),
  tablet: 100 * (1 - 1 / sliderContainerWidth.tablet),
  desktop: 100 * (1 - 1 / sliderContainerWidth.desktop),
};

const FullHeroCarousel98StaticTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Arrow navigation handlers
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      if (window.innerWidth < 640 && currentSlide === maxSlides.mobile) {
        return;
      }
      if (window.innerWidth >= 640 && currentSlide === maxSlides.tablet) {
        return;
      }
      // Move to next position
      setCurrentSlide((prev) => prev + 1);
    } else if (isRightSwipe) {
      if (window.innerWidth < 640 && currentSlide === 1) {
        return;
      }
      if (window.innerWidth >= 640 && currentSlide === 1) {
        return;
      }
      // Move to previous position
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const getTransformStyles = () => {
    const transformMobile =
      currentSlide === maxSlides.mobile
        ? extremeSlides.mobile
        : (currentSlide - 1) * normalSlides.mobile;
    const transformTablet =
      currentSlide === maxSlides.tablet
        ? extremeSlides.tablet
        : (currentSlide - 1) * normalSlides.tablet;
    const transformDesktop =
      currentSlide === maxSlides.desktop
        ? extremeSlides.desktop
        : (currentSlide - 1) * normalSlides.desktop;

    return `
      .${cn("carousel-container")} {
        ${genMediaStyles("transform", {
          mobile: `translateX(-${transformMobile}%)`,
          tablet: `translateX(-${transformTablet}%)`,
          desktop: `translateX(-${transformDesktop}%)`,
        })}
      }
    `;
  };

  return (
    <>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 1600,
          desktopHeight: 664,
          tabletWidth: 704,
          tabletHeight: 624,
          mobileWidth: 343,
          mobileHeight: 446,
        })}
      </style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: sliderContainerDesktop,
          desktopHeight: 408,
          tabletWidth: sliderContainerTablet,
          tabletHeight: 344,
          mobileWidth: sliderContainerMobile,
          mobileHeight: 264,
        })}
      </style>
      <style>{typoStyles}</style>
      <style>{styles}</style>
      <style>{getTransformStyles()}</style>
      <div className={cn("wrapper")}>
        <div className={"flex flex-1 relative"}>
          <Link
            href={ctaUrl || "#"}
            data-aali={ctaAdobeTag}
            className={
              "aspect-[343/446] sm:aspect-[704/624] lg:aspect-[1600/664]"
            }
          >
            <div className={cn("inner")}>
              <div className={cn("copy")}>
                <h3
                  data-bildit-var-name="headline"
                  data-bildit-var-type="RichText"
                  className={
                    "font-bold belk-text-l sm:belk-text-4xl mlg:belk-text-5xl lg:belk-text-8xl"
                  }
                >
                  {headline}
                </h3>
                <p data-bildit-var-name="subline" data-bildit-var-type="RichText" className={"belk-text-m sm:belk-text-xl lg:belk-text-3xl"}>
                  {subline}
                </p>
                <div
                  data-bildit-var-name="ctaText"
                  data-bildit-var-type="RichText"
                  className={`${cn(
                    "cta"
                  )} font-bold belk-text-s sm:belk-text-l lg:belk-text-xl`}
                >
                  {ctaText}
                </div>
              </div>
              <div
                className={`${cn(
                  "carousel-wrapper"
                )} relative overflow-hidden aspect-[306/264] sm:aspect-[640/344] lg:aspect-[982/408]`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className={`${cn("carousel-container")}`}>
                  <div className={`${cn("bg-image-1")}`} data-bildit-var-name="imageSlug1" data-bildit-var-type="String"></div>
                  <div className={`${cn("bg-image-2")}`} data-bildit-var-name="imageSlug2" data-bildit-var-type="String"></div>
                  <div className={`${cn("bg-image-3")}`} data-bildit-var-name="imageSlug3" data-bildit-var-type="String"></div>
                  <div className={`${cn("bg-image-4")}`} data-bildit-var-name="imageSlug4" data-bildit-var-type="String"></div>
                  <div className={`${cn("bg-image-5")}`} data-bildit-var-name="imageSlug5" data-bildit-var-type="String"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Arrow Navigation - Desktop Only */}
          <button
            className={`${cn("arrow-button")} ${cn("arrow-left")} ${
              currentSlide === 1 ? cn("arrow-hidden") : ""
            }`}
            onClick={handlePrevSlide}
          >
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.5L9.5 10L2 17.5"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`
            ${cn("arrow-button")} 
            ${cn("arrow-right")}
            ${
              currentSlide === maxSlides.desktop
                ? cn("arrow-desktop-hidden")
                : ""
            }
            ${
              currentSlide === maxSlides.tablet ? cn("arrow-tablet-hidden") : ""
            }
            ${
              currentSlide === maxSlides.mobile ? cn("arrow-mobile-hidden") : ""
            }
          `}
            onClick={handleNextSlide}
          >
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2.5L9.5 10L2 17.5"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
    imageSlug1,
    imageSlug2,
    imageSlug3,
    imageSlug4,
    imageSlug5,
    outerBgColor,
    innerBgColor,
    headline,
    subline,
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

export default FullHeroCarousel98StaticTemplate;