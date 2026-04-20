"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// group { Wrapper }
const containerBackgroundImageSlug = $(containerBackgroundImageSlug:String="wk22_063025_homepage_shoes_backgroundplate_3c");
// endgroup

// group { Logo }
const imageSlug = $(imageSlug:String="wk22_063025_homepage_adidas_logo_png");
// endgroup

// group { Headline }
const headlineText = $(headlineText:RichText="Up to 25% Off");
const headlineSummary = $(headlineSummary:RichText="shoes & apparel for men, women & kids");
const headlineFont = $(headlineFont:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const headlineFontColor = $(headlineFontColor:Color="#000");
// endgroup

// group { CTA }
const ctaText = $(ctaText:RichText="Shop Now");
const ctaLink = $(ctaLink:String="https://www.belk.com";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="";required=true);
// endgroup

/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
function AspectRatioStyles() {
  return (
    <style jsx>{`
      /* Tailwind fallback (combinedv1plan §1.5) */
      .flex {
        display: flex;
      }
      .flex-col {
        flex-direction: column;
      }
      .flex-1 {
        flex: 1 1 0%;
      }
      .aspect-\\[16\\/3\\] {
        aspect-ratio: 16 / 3;
        /* Fallback for older browsers */
        padding-top: ${(3 / 16) * 100}%;
        position: relative;
      }

      .aspect-\\[18\\/9\\] {
        aspect-ratio: 18 / 9;
        /* Fallback for older browsers */
        padding-top: ${(9 / 18) * 100}%;
        position: relative;
      }

      .aspect-\\[6\\/4\\] {
        aspect-ratio: 6 / 4;
        /* Fallback for older browsers */
        padding-top: ${(4 / 6) * 100}%;
        position: relative;
      }

      /* Medium breakpoint and up (768px+) */
      @media (min-width: 768px) {
        .md\\:aspect-\\[16\\/3\\] {
          aspect-ratio: 16 / 3;
          padding-top: ${(3 / 16) * 100}%;
        }

        .md\\:aspect-\\[18\\/9\\] {
          aspect-ratio: 18 / 9;
          padding-top: ${(9 / 18) * 100}%;
        }

        .md\\:aspect-\\[6\\/4\\] {
          aspect-ratio: 6 / 4;
          padding-top: ${(4 / 6) * 100}%;
        }
      }

      /* Reset padding when aspect-ratio is supported */
      @supports (aspect-ratio: 1) {
        .aspect-\\[16\\/3\\],
        .md\\:aspect-\\[16\\/3\\],
        .aspect-\\[18\\/9\\],
        .md\\:aspect-\\[18\\/9\\],
        .aspect-\\[6\\/4\\],
        .md\\:aspect-\\[6\\/4\\] {
          padding-top: 0;
        }
      }

      /* Ensure children of aspect ratio containers are positioned correctly */
      .aspect-\\[16\\/3\\] > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .aspect-\\[18\\/9\\] > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .aspect-\\[6\\/4\\] > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      @media (min-width: 768px) {
        .md\\:aspect-\\[16\\/3\\] > * {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .md\\:aspect-\\[18\\/9\\] > * {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .md\\:aspect-\\[6\\/4\\] > * {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    `}</style>
  );
}

function LayoutStyles() {
  return (
    <style jsx>{`
      .max-w-\\[1600px\\] {
        max-width: 1600px;
      }
      .min-w-\\[69px\\] {
        min-width: 69px;
      }
      .max-w-\\[123px\\] {
        max-width: 123px;
      }
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    `}</style>
  );
}

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} preset - The Scene7 preset to apply
 * @returns {string|null} The constructed image URL or null if parameters are missing
 */
function buildImageUrl(slug, preset) {
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }

  const baseUrl = "https://belk.scene7.com/is";
  const contentType = preset.includes("RAW") ? "content" : "image";

  // Build query string manually to avoid URL encoding the preset parameter
  const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
  });

  return `${baseUrl}/${contentType}/Belk/${slug}?${preset}&${otherParams.toString()}`;
}

/**
 * Picture-based responsive image component using HTML picture element
 */
function PictureResponsiveImage({
  desktopSrc,
  mobileSrc,
  alt,
  width,
  height,
  className = "",
  imageClassName = "object-cover object-center",
  children,
}) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  if (!desktopSrc && !mobileSrc) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt || "Image placeholder"}
      >
        <span className="text-gray-500 text-sm">No image available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <picture>
        {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
        {desktopSrc && (
          <source media="(min-width: 768px)" srcSet={desktopSrc} />
        )}
        <Image
          className={`-z-1 ${imageClassName}`}
          src={desktopSrc || mobileSrc}
          alt={alt}
          fill
          onError={handleError}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R6i+95XGJMWI2M="
        />
      </picture>
      {children}
    </div>
  );
}

const FullHeroLink = () => {
  const safeHeadlineFont =
    typeof headlineFont === "string" && headlineFont.trim()
      ? headlineFont
      : "proxima-nova";
  const safeHeadlineFontColor =
    typeof headlineFontColor === "string" && headlineFontColor.trim()
      ? headlineFontColor
      : "#000";
  const safeCtaLink = typeof ctaLink === "string" ? ctaLink : "";
  const safeCtaAdobeTag =
    ctaAdobeTag == null ? "" : typeof ctaAdobeTag === "string" ? ctaAdobeTag : "";

  const image = buildImageUrl(imageSlug, "$DWP_PHOTO$");
  const mobileImage = buildImageUrl(`${imageSlug}_m`, "$DWP_PHOTO$");
  const backgroundImage = buildImageUrl(
    containerBackgroundImageSlug,
    "$DWP_PHOTO$",
  );
  const mobileBackgroundImage = buildImageUrl(
    `${containerBackgroundImageSlug}_m`,
    "$DWP_PHOTO$",
  );

  return (
    <>
      <AspectRatioStyles />
      <LayoutStyles />
      <PictureResponsiveImage
        className="rounded-lg md:rounded-2xl w-full max-w-[1600px] aspect-[18/9] md:aspect-[16/3] mx-auto mt-8 mb-8"
        alt=""
        desktopSrc={
          backgroundImage && backgroundImage?.length > 0
            ? backgroundImage
            : null
        }
        mobileSrc={
          mobileBackgroundImage && mobileBackgroundImage?.length > 0
            ? mobileBackgroundImage
            : null
        }
        fill
      >
        <div
          className="flex flex-col justify-center h-full items-center p-4"
          data-bildit-var-name="containerBackgroundImageSlug"
          data-bildit-var-type="String"
          data-bildit-var-default={containerBackgroundImageSlug}
        >
          <div
            data-bildit-var-name="imageSlug"
            data-bildit-var-type="String"
            data-bildit-var-default={imageSlug}
          >
            <PictureResponsiveImage
              className="flex aspect-[6/4] min-w-[69px] max-w-[123px] mx-auto object-contain"
              alt={headlineText}
              imageClassName="object-contain"
              fill
              desktopSrc={image}
              mobileSrc={mobileImage}
            />
          </div>
          <span
            className="sr-only"
            data-bildit-var-name="headlineFont"
            data-bildit-var-type="Dropdown"
            data-bildit-var-default="proxima-nova"
            data-bildit-var-options='[{"label":"Proxima Nova","value":"proxima-nova"},{"label":"Roboto","value":"Roboto"},{"label":"Bakersfield","value":"Bakersfield"}]'
          >
            {safeHeadlineFont}
          </span>
          <span
            className="sr-only"
            data-bildit-var-name="headlineFontColor"
            data-bildit-var-type="Color"
            data-bildit-var-default="#000000"
          >
            {safeHeadlineFontColor}
          </span>
          {headlineText && (
            <h2
              className="belk-text-xl text-3xl md:belk-text-7xl md:text-5xl font-bold belk-font-sans mt-4 mb-2"
              style={{
                color: safeHeadlineFontColor,
                fontFamily: safeHeadlineFont,
              }}
              data-bildit-var-name="headlineText"
              data-bildit-var-type="RichText"
              data-bildit-var-default={headlineText}
            >
              {headlineText}
            </h2>
          )}

          {headlineSummary && (
            <p
              className="belk-text-base"
              style={{
                color: safeHeadlineFontColor,
                fontFamily: safeHeadlineFont,
              }}
              data-bildit-var-name="headlineSummary"
              data-bildit-var-type="RichText"
              data-bildit-var-default={headlineSummary}
            >
              {headlineSummary}
            </p>
          )}

          {ctaText && safeCtaLink && (
            <Link
              href={safeCtaLink}
              data-aali={safeCtaAdobeTag}
              data-bildit-var-name="ctaLink"
              data-bildit-var-type="String"
              data-bildit-var-default={ctaLink}
            >
              <button className="flex-1 flex flex-col font-bold cursor-pointer belk-button gap-1.5 belk-font-sans">
                <span
                  data-bildit-var-name="ctaText"
                  data-bildit-var-type="RichText"
                  data-bildit-var-default={ctaText}
                >
                  {ctaText}
                </span>
                <span
                  className="sr-only"
                  data-bildit-var-name="ctaAdobeTag"
                  data-bildit-var-type="String"
                  data-bildit-var-default=""
                >
                  {safeCtaAdobeTag}
                </span>
                <div
                  style={{ height: "2px" }}
                  className="h-0.5 w-full bg-black"
                ></div>
              </button>
            </Link>
          )}
        </div>
      </PictureResponsiveImage>
    </>
  );
};

export default FullHeroLink;