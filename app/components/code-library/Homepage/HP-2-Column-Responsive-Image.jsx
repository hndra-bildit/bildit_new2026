"use client";
import React from "react";
import Link from "next/link";

// group {Main Image}
const imagePreset = "$DWP_PHOTO$"
// endgroup

// group {Main Image Resolution}
const imageWidth = $(imageWidth:Number="752")
const imageHeight = $(imageHeight:Number="800")
// endgroup

// group {Tablet Image Resolution}
const imageWidthTablet = $(imageWidthTablet:Number="312")
const imageHeightTablet = $(imageHeightTablet:Number="416")
// endgroup

// group {Mobile Image Resolution}
const imageWidthMobile = $(imageWidthMobile:Number="147")
const imageHeightMobile = $(imageHeightMobile:Number="250")
// endgroup

// group {Layout}
const layoutMode = $(layoutMode:Dropdown[Full|full,Inset|inset]="inset";required=true);
const layoutModeMobile = $(layoutModeMobile:Dropdown[Full|full,Inset|inset]="full";required=true);
const roundedCorners = $(roundedCorners:Boolean="true")
// endgroup

// group {Columns}
const columns = [
  {
    // group {First Slot}
    imageSlug: $(firstImageSlug:String="wk29_081825_newcms_homepage_clinique_2c_1"),
    imageSlugAltText: $(firstImageSlugAltText:String="Clinique"),
    ctaLink: $(firstCTALink:String="";required=true),
    ctaAdobeTag: $(firstCTAAdobeTag:String="";required=true),
    // endgroup
  },
  {
    // group {Second Slot}
    imageSlug: $(secondImageSlug:String="wk29_081825_newcms_homepage_coach_2c_2"),
    imageSlugAltText: $(secondImageSlugAltText:String="Coach"),
    ctaLink: $(secondCTALink:String="";required=true),
    ctaAdobeTag: $(secondCTAAdobeTag:String="";required=true),
    // endgroup
  },
];
// endgroup

// group {Spacing}
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

const Wrapper = ({ children, href, ...props }) => {
  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return <div {...props}>{children}</div>;
};

const cn = (className) => `${className}-${createStaticId()}`;

const cfg = {
  radius: {
    mobile: roundedCorners ? "8px" : "0",
    tablet: roundedCorners ? "8px" : "0",
    desktop: roundedCorners ? "16px" : "0",
  },
};

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
    width: 100%;
    display: flex;

    .${cn("container")}{
      flex: 1;
      display: flex;

      ${genMediaStyles("margin", {
        mobile: `${marginTop}px ${
          layoutModeMobile === "inset" ? marginHorizontalMobile : "0"
        } ${marginBottom}px`,
        tablet: `${marginTop}px ${
          layoutMode === "inset" ? marginHorizontalTablet : "0"
        } ${marginBottom}px`,
        desktop: `${marginTop}px ${
          layoutMode === "inset" ? marginHorizontal : "0"
        } ${marginBottom}px`,
      })}

      ${genMediaStyles("gap", {
        mobile: "16px",
        tablet: "16px",
        desktop: "32px",
      })}

      .${cn("link")} {
        flex: 1;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        ${genMediaStyles("border-radius", {
          mobile: cfg.radius.mobile,
          tablet: cfg.radius.tablet,
          desktop: cfg.radius.desktop,
        })}
      }

      .${cn("content-image")}-1 {
        ${genMediaStyles("background-image", {
          mobile: `url(${buildImageUrl(
            columns[0].imageSlug,
            imagePreset,
            true
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
            true
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
    }
  }
`;

const TwoColumnResponsiveImage = () => {
  return (
    <>
      <style>{styles}</style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: imageWidth,
          desktopHeight: imageHeight,
          tabletWidth: imageWidthTablet,
          tabletHeight: imageHeightTablet,
          mobileWidth: imageWidthMobile,
          mobileHeight: imageHeightMobile,
        })}
      </style>
      <div className={cn("wrapper")}>
        <div className={cn("container")}>
          {columns.map((column, index) => {
            const slugVarName = index === 0 ? 'firstImageSlug' : 'secondImageSlug';
            return (
              <Wrapper
                aria-label={`${column.imageSlugAltText}`}
                href={column.ctaLink}
                data-aali={column.ctaAdobeTag}
                className={`${cn(
                  "link"
                )} aspect-[${imageWidthMobile}/${imageHeightMobile}] sm:aspect-[${imageWidthTablet}/${imageHeightTablet}] lg:aspect-[${imageWidth}/${imageHeight}] ${cn(
                  "content-image"
                )}-${index + 1}`}
                data-bildit-var-name={slugVarName}
                data-bildit-var-type="String"
              />
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
  const propsString = [
    imagePreset,
    imageWidth,
    imageHeight,
    imageWidthTablet,
    imageHeightTablet,
    imageWidthMobile,
    imageHeightMobile,
    roundedCorners,
    marginTop,
    marginBottom,
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

export default TwoColumnResponsiveImage;