"use client";
import React from "react";
import Link from "next/link";

//group {Global}
const containerBackgroundColor = $(containerBackgroundColor:Color="#e01a2c");
const preset = "$DWP_RAW$";
//endgroup

// group {Spacing}
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="0");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "0";
const marginHorizontalTablet = "0";
// endgroup

//group {Image}
const desktopImageSlug = $(desktopImageSlug:String="mrf3_wk25_2025_newcms_80clearanceoffers")
//endgroup

//group {CTA}
const ctaUrl = $(url:String="https://www.belk.com/clearance");
const ctaAdobeTag = $(adobeTag:String);
//endgroup

const cn = (className) => `${className}-${createStaticId()}`;

const styles = `
  .aspect-\\[15\\/11\\] {
    aspect-ratio: 15 / 11;
  }

  .aspect-\\[152\\/120\\] {
    aspect-ratio: 152 / 120;
  }

  .aspect-\\[768\\/268\\] {
    aspect-ratio: 768 / 268;
  }

  @media (min-width: 768px) {
    .md\\:aspect-\\[1600\\/125\\] {
      aspect-ratio: 1600 / 125;
    }
    .md\\:aspect-\\[15\\/11\\] {
      aspect-ratio: 15 / 11;
    }
  }

  .${cn("wrapper")} {
    width: 100%;
    display: flex;
  }

  .${cn("container")} {
    flex: 1;
    display: flex;
    background-color: ${containerBackgroundColor};

    @media (max-width: 40rem) {
      max-width: 100%;
      padding: 0 16px;
      margin: ${marginTop}px ${marginHorizontalMobile} ${marginBottom}px;
    }
    @media (min-width: 40.001rem) and (max-width: 64rem) {
      max-width: 100%;
      padding: 0 32px;
      margin: ${marginTop}px ${marginHorizontalTablet} ${marginBottom}px;
    }
    @media (min-width: 64.001rem) and (pointer: coarse) {
      max-width: 100%;
      padding: 0 32px;
      margin: ${marginTop}px ${marginHorizontalTablet} ${marginBottom}px;
    }
    @media (min-width: 64.001rem) and (pointer: fine) {
      max-width: 1600px;
      padding: 0 32px;
      margin: ${marginTop}px ${marginHorizontal} ${marginBottom}px;
    }

    a {
    flex: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    @media (min-width: 768px) {
      background-image: url(${buildImageUrl(desktopImageSlug, preset)});
    }

    @media (max-width: 767px) {
      background-image: url(${buildImageUrl(desktopImageSlug, preset, true)});
    }
  }
  }
`

export default function ClearanceGifTemplate() {
  return (
    <>
      <style>{styles}</style>
      <div className={cn("wrapper")}>
        <div className={cn("container")}>
          <Link
            href={ctaUrl}
            data-aali={ctaAdobeTag}
            className={"aspect-[768/268] md:aspect-[1600/125]"}
          />
        </div>
      </div>
    </>
  );
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

function createStaticId() {
  // Create a deterministic ID based on the component's unique props
  const propsString = [
    desktopImageSlug,
    ctaUrl,
    ctaAdobeTag,
    containerBackgroundColor,
    marginTop,
    marginBottom,
    marginHorizontal,
    marginHorizontalMobile,
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