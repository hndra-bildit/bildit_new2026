"use client";
import React from "react";
import Link from "next/link";

// group: {Global}
const fontFamily = "proxima-nova"
const imagePreset = "$DWP_PHOTO$"
// endgroup

// group: {Spacing}
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
const marginHorizontalTablet = "32px";
// endgroup

// group: {Title}
const title = $(title:RichText="Up to 75% Off , Fresh Finds";color="#0076BE");
// endgroup

const columns = [
  {
    // group: {First Slot}
    imageSlug: $(firstImageSlug:String="wk26_080125_newcms_homepage_freshfinds_3c_1"),
    headline: $(firstHeadline:RichText="UP TO 60% OFF";color="#0076BE"),
    description: $(firstDescription:RichText="accessories & handbags*";color="#0076BE"),
    ctaText: $(firstCTAText:RichText="Shop Now";color="#0076BE"),
    ctaLink: $(firstCTALink:String="";required=true),
    ctaAdobeTag: $(firstCTAAdobeTag:String="";required=true),
    // endgroup
  },
  {
    // group: {Second Slot}
    imageSlug: $(secondImageSlug:String="wk26_080125_newcms_homepage_freshfinds_3c_2"),
    headline: $(secondHeadline:RichText="UP TO 75% OFF";color="#0076BE"),
    description: $(secondDescription:RichText="fine jewelry & Belk Sterling Silver*";color="#0076BE"),
    ctaText: $(secondCTAText:RichText="Shop Now";color="#0076BE"),
    ctaLink: $(secondCTALink:String="";required=true),
    ctaAdobeTag: $(secondCTAAdobeTag:String="";required=true),
    // endgroup
  },
  {
    // group: {Third Slot}
    imageSlug: $(thirdImageSlug:String="wk26_080125_newcms_homepage_freshfinds_3c_3"),
    headline: $(thirdHeadline:RichText="UP TO 60% OFF";color="#0076BE"),
    description: $(thirdDescription:RichText="home favorites*";color="#0076BE"),
    ctaText: $(thirdCTAText:RichText="Shop Now";color="#0076BE"),
    ctaLink: $(thirdCTALink:String="";required=true),
    ctaAdobeTag: $(thirdCTAAdobeTag:String="";required=true),
    // endgroup
  },
];

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: "8px",
    tablet: "8px",
    desktop: "18px",
  },
};

const typoStyles = `
  @media (min-width: 40.001rem) {
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
    .sm\\:belk-text-4xl {
      font-size: var(--text-4xl);
      line-height: var(--text-4xl--line-height);
      letter-spacing: var(--text-4xl--letter-spacing);
    }
  }

  @media (min-width: 64.001rem) {
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
      font-weight: 700;
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

const genMediaStyles = (property, { mobile, tablet, desktop }) => {
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
    max-width: 1600px;

    ${genMediaStyles("padding", {
      mobile: "0 16px",
      tablet: "0 32px",
      desktop: "0 32px",
    })}

    ${genMediaStyles("margin", {
      mobile: `${marginTop}px ${marginHorizontalMobile} ${marginBottom}px`,
      tablet: `${marginTop}px ${marginHorizontalTablet} ${marginBottom}px`,
      desktop: `${marginTop}px ${marginHorizontal} ${marginBottom}px`,
    })}

    .tablet-hidden {
      @media (min-width: 40.001rem) and (max-width: 64rem) {
        display: none;
      }
    }
    .tablet-only {
      padding: 0 35px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      @media (max-width: 40rem) {
        display: none;
      }
      @media (min-width: 64.001rem) {
        display: none;
      }
    }

    h2 {
      font-family: ${fontFamily};
      white-space: pre-line;
      text-align: center;
      ${genMediaStyles("margin-bottom", {
        mobile: "10px",
        tablet: "16px",
        desktop: "20px",
      })}
    }

    .${cn("columns")} {
      display: flex;

      ${genMediaStyles("flex-direction", {
        mobile: "column",
        tablet: "row",
        desktop: "row",
      })}

      ${genMediaStyles("gap", {
        mobile: "16px",
        tablet: "16px",
        desktop: "32px",
      })}

      a {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 32px;
        text-decoration: none;

        .${cn("content")} {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          text-decoration: none;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          ${genMediaStyles("border-radius", {
            mobile: cfg.radius.mobile,
            tablet: cfg.radius.tablet,
            desktop: cfg.radius.desktop,
          })}

          ${genMediaStyles("padding", {
            mobile: "8px",
            tablet: "0",
            desktop: "32px",
          })}

          * {
            @media (max-width: 40rem) {
              max-width: 48%;
            }
          }
        }
        
        .${cn("content-image")}-1 {
          ${genMediaStyles("background-image", {
            mobile: `url(${buildImageUrl(
              columns[0].imageSlug,
              imagePreset,
              true,
            )})`,
            tablet: `url(${buildImageUrl(
              columns[0].imageSlug,
              imagePreset,
              false,
              true
            )})`,
            desktop: `url(${buildImageUrl(
              columns[0].imageSlug,
              imagePreset,
              false
            )})`,
          })}
        }
        .${cn("content-image")}-2 {
          ${genMediaStyles("background-image", {
            mobile: `url(${buildImageUrl(
              columns[1].imageSlug,
              imagePreset,
              true,
            )})`,
            tablet: `url(${buildImageUrl(
              columns[1].imageSlug,
              imagePreset,
              false,
              true
            )})`,
            desktop: `url(${buildImageUrl(
              columns[1].imageSlug,
              imagePreset,
              false
            )})`,
          })}
        }
        .${cn("content-image")}-3 {
          ${genMediaStyles("background-image", {
            mobile: `url(${buildImageUrl(
              columns[2].imageSlug,
              imagePreset,
              true,
            )})`,
            tablet: `url(${buildImageUrl(
              columns[2].imageSlug,
              imagePreset,
              false,
              true
            )})`,
            desktop: `url(${buildImageUrl(
              columns[2].imageSlug,
              imagePreset,
              false
            )})`,
          })}
        }

        * {
          font-family: ${fontFamily};
          white-space: pre-line;
        }

        p {
          ${genMediaStyles("margin", {
            mobile: "4px 0 16px",
            tablet: "6px 0 16px",
            desktop: "6px 0 16px",
          })}
        }

        .${cn("cta")} {
          padding: 0 0 6px;
          border-bottom: 1px solid currentColor;
        }
      }
    }
  }
`;

const TwoColumn94StaticTemplate = () => {
  return (
    <>
      <style>{styles}</style>
      <style>{typoStyles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 490,
          desktopHeight: 600,
          tabletWidth: 202,
          tabletHeight: 248,
          mobileWidth: 311,
          mobileHeight: 248,
        })}
      </style>
      <div className={cn("wrapper")}>
        <div className={cn("container")}>
          <h2 data-bildit-var-name="title" data-bildit-var-type="RichText" className="font-bold belk-text-xl sm:belk-text-4xl lg:belk-text-64px">
            {title}
          </h2>
          <div className={cn("columns")}>
            {columns.map((column, index) => {
              const slugVarName = index === 0 ? 'firstImageSlug' : index === 1 ? 'secondImageSlug' : 'thirdImageSlug';
              return (
              <Link
                key={index}
                href={column.ctaLink || "#"}
                data-aali={column.ctaAdobeTag}
              >
                <div
                  className={`${cn("content")} ${cn("content-image")}-${index + 1} aspect-[311/248] sm:aspect-[202/248] lg:aspect-[490/600]`}
                  data-bildit-var-name={slugVarName}
                  data-bildit-var-type="String"
                >
                  <h3 data-bildit-var-name={index === 0 ? "firstHeadline" : index === 1 ? "secondHeadline" : "thirdHeadline"} data-bildit-var-type="RichText" className="font-bold belk-text-l mlg:belk-text-6xl lg:belk-text-8xl tablet-hidden">
                    {column.headline}
                  </h3>
                  <p data-bildit-var-name={index === 0 ? "firstDescription" : index === 1 ? "secondDescription" : "thirdDescription"} data-bildit-var-type="RichText" className="font-regular belk-text-m mlg:belk-text-xl lg:belk-text-3xl tablet-hidden">
                    {column.description}
                  </p>
                  <div data-bildit-var-name={index === 0 ? "firstCTAText" : index === 1 ? "secondCTAText" : "thirdCTAText"} data-bildit-var-type="RichText" className={`${cn("cta")} font-bold belk-text-s lg:belk-text-xl tablet-hidden`}>
                    {column.ctaText}
                  </div>
                </div>
                <div className={"tablet-only"}>
                  <h3 className="font-bold sm:belk-text-4xl">
                    {column.headline}
                  </h3>
                  <p className="font-regular sm:belk-text-xl">
                    {column.description}
                  </p>
                  <div className={`${cn("cta")} font-bold sm:belk-text-l`}>
                    {column.ctaText}
                  </div>
                </div>
              </Link>
            );})}
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
      column.ctaText,
      column.ctaLink,
      column.ctaAdobeTag,
    ]),
    fontFamily,
    title,
    marginTop,
    marginBottom,
    marginHorizontal,
    marginHorizontalMobile,
    marginHorizontalTablet,
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

export default TwoColumn94StaticTemplate;