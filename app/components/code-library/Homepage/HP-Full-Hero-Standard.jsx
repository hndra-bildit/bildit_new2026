"use client";
import React from "react";
import Link from "next/link";

// group: {Spacing}
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="0");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true);
// endgroup

// group: {Global}
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const backgroundImage = $(backgroundImage:String="wk27_080425_newcms_homepage_clinique");
const imagePreset = $(imagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const headlineImage = $(headlineImage:String="");
const headlineImagePreset = $(headlineImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$,Graphic|$DWP_GRAPHIC$]="$DWP_GRAPHIC$");
// endgroup

// group: {Text}
const eyebrow = $(eyebrow:RichText);
const eyebrowMinFontSize = $(eyebrowMinFontSize:Dropdown[Small|10,Medium|14,Large|18,XLarge|24]="14");
const eyebrowMaxFontSize = $(eyebrowMaxFontSize:Dropdown[Small|18,Medium|24,Large|28,XLarge|36]="24");
const headline = $(headline:RichText);
const headlineMinFontSize = $(headlineMinFontSize:Dropdown[Small|18,Medium|24,Large|32,XLarge|40]="24");
const headlineMaxFontSize = $(headlineMaxFontSize:Dropdown[Small|48,Medium|64,Large|80,XLarge|96,XXLarge|128]="80");
const ctaText = $(ctaText:RichText);
const ctaMinFontSize = $(ctaMinFontSize:Dropdown[Small|10,Medium|14,Large|18,XLarge|24]="14");
const ctaMaxFontSize = $(ctaMaxFontSize:Dropdown[Small|18,Medium|24,Large|28,XLarge|32]="24");
const ctaLink = $(ctaLink:String="";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="";required=true);
// endgroup

// group: {Rounded Corners}
const roundedCorners = $(roundedCorners:Dropdown[None|0,Small|8px,Medium|12px,Large|16px,Extra Large|24px]="0");
// endgroup

// group: {Aspect Ratio - Hero}
const heroMobileAspectWidth = $(heroMobileAspectWidth:String="343");
const heroMobileAspectHeight = $(heroMobileAspectHeight:String="272");
const heroTabletAspectWidth = $(heroTabletAspectWidth:String="800");
const heroTabletAspectHeight = $(heroTabletAspectHeight:String="240");
const heroDesktopAspectWidth = $(heroDesktopAspectWidth:String="800");
const heroDesktopAspectHeight = $(heroDesktopAspectHeight:String="240");
// endgroup

// group: {Aspect Ratio - Headline Image}
const headlineMobileAspectWidth = $(headlineMobileAspectWidth:String="196");
const headlineMobileAspectHeight = $(headlineMobileAspectHeight:String="22");
const headlineTabletAspectWidth = $(headlineTabletAspectWidth:String="319");
const headlineTabletAspectHeight = $(headlineTabletAspectHeight:String="35");
const headlineDesktopAspectWidth = $(headlineDesktopAspectWidth:String="548");
const headlineDesktopAspectHeight = $(headlineDesktopAspectHeight:String="61");
// endgroup

const cn = (className) => `${className}-${createStaticId()}`;

const getContainerBehaviorClasses = () => {
  switch (containerBehavior) {
    case "max-w-full":
      return "[&>div]:md:max-w-full [&>div]:w-full";
    case "max-w-inset":
      return "px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full";
    case "max-w-centered":
      return "px-4 sm:px-8 md:px-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:w-full [&>div]:px-5 [&>div]:md:px-5";
    default:
      return "px-4 sm:px-8 md:px-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:w-full [&>div]:px-5 [&>div]:md:px-5";
  }
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

const marginTopPx = Number(marginTop) || 0;
const marginBottomPx = Number(marginBottom) || 0;

const getAspectRatioFallbackStyles = () => {
  const hMw = heroMobileAspectWidth || "343";
  const hMh = heroMobileAspectHeight || "272";
  const hTw = heroTabletAspectWidth || "704";
  const hTh = heroTabletAspectHeight || "264";
  const hDw = heroDesktopAspectWidth || "1600";
  const hDh = heroDesktopAspectHeight || "608";
  const dMw = headlineMobileAspectWidth || "196";
  const dMh = headlineMobileAspectHeight || "22";
  const dTw = headlineTabletAspectWidth || "319";
  const dTh = headlineTabletAspectHeight || "35";
  const dDw = headlineDesktopAspectWidth || "548";
  const dDh = headlineDesktopAspectHeight || "61";
  return `
  /* Aspect ratio fallback (no Tailwind required) */
  @media (max-width: 40rem) {
    .${cn("hero-aspect")} {
      aspect-ratio: ${hMw} / ${hMh};
    }
    .${cn("headline-aspect")} {
      aspect-ratio: ${dMw} / ${dMh};
    }
  }
  @media (min-width: 40.001rem) and (max-width: 64rem) {
    .${cn("hero-aspect")} {
      aspect-ratio: ${hTw} / ${hTh};
    }
    .${cn("headline-aspect")} {
      aspect-ratio: ${dTw} / ${dTh};
    }
  }
  @media (min-width: 64.001rem) and (pointer: coarse) {
    .${cn("hero-aspect")} {
      aspect-ratio: ${hTw} / ${hTh};
    }
    .${cn("headline-aspect")} {
      aspect-ratio: ${dTw} / ${dTh};
    }
  }
  @media (min-width: 64.001rem) and (pointer: fine) {
    .${cn("hero-aspect")} {
      aspect-ratio: ${hDw} / ${hDh};
    }
    .${cn("headline-aspect")} {
      aspect-ratio: ${dDw} / ${dDh};
    }
  }
`;
};

const styles = `
  .${cn("wrapper")} {
    width: 100%;
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    box-sizing: border-box;
  }

  .${cn("container")} {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    margin: ${marginTopPx}px 0 ${marginBottomPx}px;
    padding-top: 0;
    padding-bottom: 0;
    box-sizing: border-box;

    ${genMediaStyles("justify-content", {
      mobile: "flex-end",
      tablet: "flex-end",
      desktop: "flex-end",
    })}

    ${genMediaStyles("border-radius", {
      mobile: roundedCorners,
      tablet: roundedCorners,
      desktop: roundedCorners,
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

      .${cn("eyebrow")} {
        font-size: clamp(${Number(eyebrowMinFontSize) || 12}px, 3vw + 0.5rem, ${Number(eyebrowMaxFontSize) || 24}px);
      }

      .${cn("headline")} {
        font-size: clamp(${Number(headlineMinFontSize) || 24}px, 8vw + 1rem, ${Number(headlineMaxFontSize) || 80}px);
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
        font-size: clamp(${Number(ctaMinFontSize) || 14}px, 2.5vw + 0.5rem, ${Number(ctaMaxFontSize) || 24}px);

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
      <style>{getAspectRatioFallbackStyles()}</style>
      <div className={`${getContainerBehaviorClasses()} w-full py-0 pt-0 pb-0 mt-0 mb-0`}>
        <div className={`${cn("wrapper")} pt-0 pb-0`}>
          <Link
          className={`${cn("container")} ${cn("hero-aspect")} pt-0 pb-0`}
          href={ctaLink || "#"}
          data-aali={ctaAdobeTag}
          data-bildit-var-name="backgroundImage"
          data-bildit-var-type="String"
        >
          <div className={cn("copy")}>
            <h4 data-bildit-var-name="eyebrow" data-bildit-var-type="RichText" className={`${cn("eyebrow")} font-bold`}>
              {eyebrow}
            </h4>
            <div
              className={`${cn("headline-image")} ${cn("headline-aspect")}`}
              data-bildit-var-name="headlineImage"
              data-bildit-var-type="String"
            />
            <h3 data-bildit-var-name="headline" data-bildit-var-type="RichText" className={`${cn("headline")} font-bold`}>
              {headline}
            </h3>
            <div
              data-bildit-var-name="ctaText"
              data-bildit-var-type="RichText"
              className={`${cn("cta")} font-bold`}
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
  const presetString = String(preset || "");
  const contentType = presetString.includes("RAW") ? "content" : "image";

  slug = withTablet ? `${slug}_t` : isMobile ? `${slug}_m` : slug;

  return `${baseUrl}/${contentType}/Belk/${slug}?${presetString}&bgc=0,0,0&color=0,0,0,0&fmt=png-alpha&opac=100`;
}

export default FortyEightStaticTemplate;