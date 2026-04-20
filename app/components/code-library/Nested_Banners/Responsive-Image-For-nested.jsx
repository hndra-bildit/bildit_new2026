"use client";
import React from "react";
import Link from "next/link";

// group: {Dimensions}
const desktopWidth = $(desktopWidth:String="1600");
const desktopHeight = $(desktopHeight:String="608");
const tabletWidth = $(tabletWidth:String="");
const tabletHeight = $(tabletHeight:String="");
const mobileWidth = $(mobileWidth:String="");
const mobileHeight = $(mobileHeight:String="");
// endgroup

// group: {Global}
const backgroundImage = $(backgroundImage:String="wk27_080425_newcms_homepage_abercrombie_fh_1");
const imagePreset = $(imagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const roundedCorners = $(roundedCorners:Dropdown[None|none,Small|small,Medium|medium,Large|large]="none");
const ctaLink = $(ctaLink:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
// endgroup

const createStaticId = () => {
  const propsString = [backgroundImage, imagePreset, ctaLink, ctaAdobeTag]
    .filter(Boolean)
    .join("-");
  let hash = 0;
  for (let i = 0; i < propsString.length; i++) {
    const char = propsString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
};

const getRadiusByOption = (option) => {
  const o = String(option ?? "").toLowerCase().trim();
  if (o === "small") return { mobile: "4px", tablet: "4px", desktop: "8px" };
  if (o === "medium") return { mobile: "8px", tablet: "8px", desktop: "16px" };
  if (o === "large") return { mobile: "12px", tablet: "12px", desktop: "24px" };
  return { mobile: "0", tablet: "0", desktop: "0" };
};

// Default aspect ratios (same as FullHeroV1-test) so image shows on first load when dimensions are empty
const DEFAULT_MOBILE = { w: "343", h: "272" };
const DEFAULT_TABLET = { w: "704", h: "264" };
const DEFAULT_DESKTOP = { w: "1600", h: "608" };

function generateAspectRatioStyles({
  id,
  desktopWidth,
  desktopHeight,
  tabletWidth,
  tabletHeight,
  mobileWidth,
  mobileHeight,
}) {
  const mw = mobileWidth || DEFAULT_MOBILE.w;
  const mh = mobileHeight || DEFAULT_MOBILE.h;
  const tw = tabletWidth || DEFAULT_TABLET.w;
  const th = tabletHeight || DEFAULT_TABLET.h;
  const dw = desktopWidth || DEFAULT_DESKTOP.w;
  const dh = desktopHeight || DEFAULT_DESKTOP.h;

  return `
    @media (max-width: 40rem) {
      .${id}-aspect-\\[${mw}\\/${mh}\\] {
        aspect-ratio: ${mw} / ${mh};
      }
    }

    @media (min-width: 40.001rem) and (max-width: 64rem) {
      .sm\\:${id}-aspect-\\[${tw}\\/${th}\\] {
        aspect-ratio: ${tw} / ${th};
      }
    }

    @media (min-width: 64.001rem) and (pointer: coarse) {
      .sm\\:${id}-aspect-\\[${tw}\\/${th}\\] {
        aspect-ratio: ${tw} / ${th};
      }
    }

    @media (min-width: 64.001rem) and (pointer: fine) {
      .lg\\:${id}-aspect-\\[${dw}\\/${dh}\\] {
        aspect-ratio: ${dw} / ${dh};
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

const getStyles = (id, radiusCfg) => `
  .${id}-container {
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0;

    /* Default to full height/width if no aspect ratio overrides it */
    height: 100%;
    min-height: 100%;

    ${genMediaStyles("border-radius", {
      mobile: radiusCfg.mobile,
      tablet: radiusCfg.tablet,
      desktop: radiusCfg.desktop,
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
`;

const ResponsiveFullResponsive = ({ id: propsId }) => {
  const id = propsId ?? `rfr-${createStaticId()}`;
  const mw = mobileWidth || DEFAULT_MOBILE.w;
  const mh = mobileHeight || DEFAULT_MOBILE.h;
  const tw = tabletWidth || DEFAULT_TABLET.w;
  const th = tabletHeight || DEFAULT_TABLET.h;
  const dw = desktopWidth || DEFAULT_DESKTOP.w;
  const dh = desktopHeight || DEFAULT_DESKTOP.h;
  const aspectClasses = `${id}-aspect-[${mw}/${mh}] sm:${id}-aspect-[${tw}/${th}] lg:${id}-aspect-[${dw}/${dh}]`;
  const radiusCfg = getRadiusByOption(roundedCorners);

  return (
    <>
      <style>{getStyles(id, radiusCfg)}</style>
      <style>
        {generateAspectRatioStyles({
          id,
          desktopWidth,
          desktopHeight,
          tabletWidth,
          tabletHeight,
          mobileWidth,
          mobileHeight,
        })}
      </style>
      <Link
        className={`${id}-container w-full ${aspectClasses}`}
        href={ctaLink || "#"}
        data-aali={ctaAdobeTag}
      />
    </>
  );
};

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

export default ResponsiveFullResponsive;