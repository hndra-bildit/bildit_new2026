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
const fontColor = $(fontColor:Color="#203048");
const headline = $(headline:RichText="Up to 70% off");
const subline = $(subline:RichText="Fresh Essentials");
// endgroup

// group {CTA}
const ctaText = $(ctaText:RichText="Shop Deals");
const ctaUrl = $(ctaUrl:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
const buttonTextColor = $(buttonTextColor:Color="#ffffff");
const buttonBgColor = $(buttonBgColor:Color="#203048");
// endgroup

// group {Images}
const imageSlug1 = $(imageSlug1:String="wk29_081825_newcms_homepage_essentials_slide_1");
const imageSlug1Alt = $(imageSlug1Alt:String="The Active Shop");
const imageSlug1Url = $(imageSlug1Url:String="/");
const imageSlug2 = $(imageSlug2:String="wk29_081825_newcms_homepage_essentials_slide_2");
const imageSlug2Alt = $(imageSlug2Alt:String="The Active Shop");
const imageSlug2Url = $(imageSlug2Url:String="/");
const imageSlug3 = $(imageSlug3:String="wk29_081825_newcms_homepage_essentials_slide_3");
const imageSlug3Alt = $(imageSlug3Alt:String="The Active Shop");
const imageSlug3Url = $(imageSlug3Url:String="/");
const imageSlug4 = $(imageSlug4:String="wk29_081825_newcms_homepage_essentials_slide_4");
const imageSlug4Alt = $(imageSlug4Alt:String="The Active Shop");
const imageSlug4Url = $(imageSlug4Url:String="/");
const imagePreset = "$DWP_PHOTO$";
// endgroup

// group {Background}
const innerBgColor = $(innerBgColor:Color="#FCF4ED");
// endgroup

// group {Background Images}
const backgroundImageSlug = $(backgroundImageSlug:String="wk29_081825_newcms_homepage_essentials_background");
const backgroundImageSlugAlt = $(backgroundImageSlugAlt:String="Background Image");
// endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const cn = (className) => `${className}-${createStaticId()}`;

const Wrapper = ({ children, href, ...props }) => {
  if (href) {
    return <Link href={href} {...props}>{children}</Link>;
  }
  return <div {...props}>{children}</div>;
};

const cfg = {
  radius: {
    mobile: "8px",
    tablet: "8px",
    desktop: "16px",
  },
};

const sliderContainerDesktop = 982;
const sliderItemDesktop = 296;
const sliderContainerTablet = 640;
const sliderItemTablet = 288;
const sliderContainerMobile = 306;
const sliderItemMobile = 270;
const slideGap = 16;
const slideAmount = 5;
const slideGapAmount = slideAmount - 1;

const sliderContainerWidth = {
  desktop: (sliderItemDesktop * slideAmount + slideGap * slideGapAmount) / sliderContainerDesktop,
  tablet: (sliderItemTablet * slideAmount + slideGap * slideGapAmount) / sliderContainerTablet,
  mobile: (sliderItemMobile * slideAmount + slideGap * slideGapAmount) / sliderContainerMobile,
};

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

    
    a , .${cn("linkFallbackClass")} {
      flex: 1;
      display: flex;
      text-decoration: none;
      overflow: hidden;      

      ${genMediaStyles("background-image", {
        mobile: isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, true, false)})` : "none",
        tablet: isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, false, true)})` : "none",
        desktop: isValidImageUrl(backgroundImageSlug) ? `url(${buildImageUrl(backgroundImageSlug, imagePreset, false)})` : "none",
      })}

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;


      ${genMediaStyles("border-radius", {
        mobile: cfg.radius.mobile,
        tablet: cfg.radius.tablet,
        desktop: cfg.radius.desktop,
      })}

      .${cn("inner")} {
        display: flex;
        flex: 1;
        justify-content: space-between;
        overflow: hidden;

        ${genMediaStyles("flex-direction", {
          mobile: "column",
          tablet: "column",
          desktop: "row",
        })}

        ${genMediaStyles("gap", {
          mobile: "16px",
          tablet: "40px",
          desktop: "0",
        })}

        ${genMediaStyles("background-color", {
          mobile: "transparent",
          tablet: "transparent",
          desktop: innerBgColor,
        })}

        ${genMediaStyles("border-radius", {
          mobile: "none",
          tablet: "none",
          desktop: cfg.radius.desktop,
        })}

        ${genMediaStyles("margin", {
          mobile: "16px",
          tablet: "28px",
          desktop: "48px",
        })}
      }

      .${cn("copy")} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

          ${genMediaStyles("margin-bottom", {
          mobile: "0",
          tablet: "0",
          desktop: "135px",
        })}

        ${genMediaStyles("justify-content", {
          mobile: "flex-start",
          tablet: "flex-start",
          desktop: "center",
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

         ${genMediaStyles("border-radius", {
          mobile: cfg.radius.mobile,
          tablet: cfg.radius.tablet,
          desktop: cfg.radius.desktop,
        })}

        ${genMediaStyles("padding", {
          mobile: "14px 0 16px 0px",
          tablet: "7% 0",
          desktop: "0 48px",
        })}

         ${genMediaStyles("align-items", {
          mobile: "center",
          tablet: "center",
          desktop: "flex-start",
        })}

        * {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
        }

        p {
          ${genMediaStyles("padding", {
            mobile: "4px 0 14px",
            tablet: "4px 0 16px",
            desktop: "4px 0 14px",
          })}
        }

        .${cn("cta")} {
          text-decoration: none;
          border-radius: 4px;
          background-color: ${buttonBgColor};
          color: ${buttonTextColor};
          height: 36px;
          width: 121px;
   ${genMediaStyles("font-size", {
          mobile: "",
          tablet: "",
          desktop: "0.9rem",
        })}
        }
            .${cn("headline")} {
        ${genMediaStyles("width", {
          mobile: "auto",
          tablet: "auto",
          desktop: "108%",
        })}
       
        ${genMediaStyles("text-wrap", {
          mobile: "wrap",
          tablet: "wrap",
          desktop: "nowrap",
        })}
      }
      }

           .${cn("subline")} {
          ${genMediaStyles("font-size", {
            desktop: "1.22rem",
          })}
        }
    

      .${cn("carousel-wrapper")} {
        ${genMediaStyles("margin", {
          mobile: "0",
          tablet: "-23px 0 -10px 0",
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
          width: calc((100% - ${slideGap * slideGapAmount}px) / ${slideAmount});
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
        tablet: "40px",
        desktop: "45px",
      })}
      ${genMediaStyles("height", {
        mobile: "40px",
        tablet: "40px",
        desktop: "45px",
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
          tablet: "8px",
          desktop: "10px",
        })}
        ${genMediaStyles("height", {
          mobile: "14px",
          tablet: "14px",
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
        desktop: "5.5%",
      })}
    }

    .${cn("arrow-hidden")} {
      display: none;
    }

    .${cn("arrow-mobile-hidden")} {
      ${genMediaStyles("display", {
        mobile: "none",
        tablet: "none",
        desktop: "flex",
      })}
    }
    .${cn("arrow-tablet-hidden")} {
      ${genMediaStyles("display", {
        mobile: "none",
        tablet: "none",
        desktop: "flex",
      })}
    }
    .${cn("arrow-desktop-hidden")} {
      ${genMediaStyles("display", {
        mobile: "none",
        tablet: "none",
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
    (sliderItemMobile * slideAmount + slideGap * slideGapAmount),
  tablet:
    (100 *
      (Math.floor(sliderContainerTablet / (sliderItemTablet + slideGap)) *
        (sliderItemTablet + slideGap))) /
    (sliderItemTablet * slideAmount + slideGap * slideGapAmount),
  desktop:
    (100 *
      (Math.floor(sliderContainerDesktop / (sliderItemDesktop + slideGap)) *
        (sliderItemDesktop + slideGap))) /
    (sliderItemDesktop * slideAmount + slideGap * slideGapAmount),
};

const extremeSlides = {
  mobile: 100 * (1 - 1 / sliderContainerWidth.mobile),
  tablet: 100 * (1 - 1 / sliderContainerWidth.tablet),
  desktop: 100 * (1 - 1 / sliderContainerWidth.desktop),
};

const FullHeroCarousel111StaticTemplate = () => {
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
      if (window.innerWidth < 641 && currentSlide === maxSlides.mobile) {
        return;
      }
      if (window.innerWidth >= 641 && currentSlide === maxSlides.tablet) {
        return;
      }
      // Mobile view: block right swipe when last slide (slide 4) is visible
      if (window.innerWidth < 641 && currentSlide === 4) {
        return;
      }
      // Tablet view: block right swipe when second last slide (slide 3) is visible
      if (window.innerWidth >= 641 && window.innerWidth < 1100 && currentSlide === 2) {
        return;
      }

       // Desktop view: block right swipe when last slide (slide 4) is visible
       if (window.innerWidth >= 1100 && currentSlide === 2) {
        return;
      }
      // Move to next position
      setCurrentSlide((prev) => prev + 1);
    } else if (isRightSwipe) {
      if (window.innerWidth < 641 && currentSlide === 1) {
        return;
      }
      if (window.innerWidth >= 641 && currentSlide === 1) {
        return;
      }
    
   
     
      // Move to previous position
      setCurrentSlide((prev) => prev - 1);
    }
  };
  
    const handleImageClick = (url) => {
    if (url) {
      window.location.href = url
    }
  }


  const getTransformStyles = () => {
    // For mobile and tablet: show 2 images per slide with 5% peek of next slide
    const peekAmount = 5; 
    const peekAmountTablet = 4; 

    
    const transformMobile = (() => {
      if (currentSlide === 1) return (currentSlide - 1) * normalSlides.mobile
      if (currentSlide === 2) return (currentSlide - 1) * normalSlides.mobile
      if (currentSlide === 3) return (currentSlide - 1) * normalSlides.mobile
      if (currentSlide === 4) return (currentSlide * 3) * peekAmount -2 
      return extremeSlides.mobile;
    })();
    
    const transformTablet = (() => {
      if (currentSlide === 1) return 0;
      if (currentSlide === 2) return normalSlides.tablet - peekAmountTablet;
      if (currentSlide === 3) return normalSlides.tablet * 2 - peekAmountTablet;
      return extremeSlides.tablet;
    })();
    
    const transformDesktop = (() => {
      if (currentSlide === 1) return (currentSlide - 1) * normalSlides.desktop
      if (currentSlide === 2) return  (currentSlide * 2) * peekAmount 
      return extremeSlides.desktop;
    })();

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
          mobileWidth: 375,
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
          <Wrapper
            href={ctaUrl}
            aria-label={backgroundImageSlugAlt}
            data-aali={ctaAdobeTag}
            data-bildit-var-name="backgroundImageSlug"
            data-bildit-var-type="String"
            className={`${cn(
              "linkFallbackClass"
            )} aspect-[343/446] sm:aspect-[704/624] lg:aspect-[1600/664]`}
          >
            <div className={cn("inner")}>
              <div className={`${cn("copy")}`}>
                <h3
                  data-bildit-var-name="headline"
                  data-bildit-var-type="RichText"
                  className={`${cn(
                    "headline"
                  )} font-bold belk-text-2xl md:belk-text-4xl lg:belk-text-5xl`}
                >
                  {headline}
                </h3>
                <p
                  data-bildit-var-name="subline"
                  data-bildit-var-type="RichText"
                  className={`${cn(
                    "subline"
                  )} belk-text-m md:belk-text-xl lg:belk-text-xl`}
                >
                  {subline}
                </p>
                <button
                  data-bildit-var-name="ctaText"
                  data-bildit-var-type="RichText"
                  className={`${cn(
                    "cta"
                  )} cursor-pointer font-bold belk-text-l`}
                >
                  {ctaText}
                </button>
              </div>
              <div
                className={`${cn(
                  "carousel-wrapper"
                )} relative overflow-hidden aspect-[306/264] md:aspect-[704/264] lg:aspect-[982/408]`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
               <div className={`${cn("carousel-container")}`}>
                  <div
                    onClick={() => handleImageClick(imageSlug1Url)}
                    aria-label={imageSlug1Alt}
                    data-aali={imageSlug1Url}
                    data-bildit-var-name="imageSlug1"
                    data-bildit-var-type="String"
                    className={`${cn("bg-image-1")} sm:aspect-[270/264] mlg:aspect-[296/408] lg:aspect-[296/408] relative cursor-pointer`}
                  />

                  <div
                    onClick={() => handleImageClick(imageSlug2Url)}
                    aria-label={imageSlug2Alt}
                    data-aali={imageSlug2Url}
                    data-bildit-var-name="imageSlug2"
                    data-bildit-var-type="String"
                    className={`${cn("bg-image-2")} sm:aspect-[270/264] mlg:aspect-[296/408] lg:aspect-[296/408] relative cursor-pointer`}
                  />

                  <div
                    onClick={() => handleImageClick(imageSlug3Url)}
                    aria-label={imageSlug3Alt}
                    data-aali={imageSlug3Url}
                    data-bildit-var-name="imageSlug3"
                    data-bildit-var-type="String"
                    className={`${cn("bg-image-3")} sm:aspect-[270/264] mlg:aspect-[296/408] lg:aspect-[296/408] relative cursor-pointer`}
                  />

                  <div
                    onClick={() => handleImageClick(imageSlug4Url)}
                    aria-label={imageSlug4Alt}
                    data-aali={imageSlug4Url}
                    data-bildit-var-name="imageSlug4"
                    data-bildit-var-type="String"
                    className={`${cn("bg-image-4")} sm:aspect-[270/264] mlg:aspect-[296/408] lg:aspect-[296/408] relative cursor-pointer`}
                  />
                </div>
              </div>
            </div>
          </Wrapper>

          {/* Arrow Navigation - Desktop Only */}
          <button
            className={`${cn("arrow-button")} ${cn("arrow-left")} ${cn(
              "arrow-mobile-hidden"
            )} ${currentSlide === 1 ? cn("arrow-desktop-hidden") : ""}`}
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
            className={`${cn("arrow-button")} ${cn("arrow-right")} ${cn(
              "arrow-mobile-hidden"
            )} ${
              currentSlide === maxSlides.desktop
                ? cn("arrow-desktop-hidden")
                : ""
            }`}
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
    imageSlug1Alt,
    imageSlug2Alt,
    imageSlug3Alt,
    imageSlug4Alt,
    imageSlug1Url,
    imageSlug2Url,
    imageSlug3Url,
    imageSlug4Url,
    backgroundImageSlug,
    backgroundImageSlugAlt,
    innerBgColor,
    buttonTextColor,
    buttonBgColor,
    fontColor,
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

export default FullHeroCarousel111StaticTemplate;