"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";


// group { Background Settings }
const backgroundDesktopImageSlug = $(backgroundDesktopImageSlug:String="wk23_070725_newcms_homepage_coupon_banner_fh_1")
const backgroundMobileImageSlug = $(backgroundMobileImageSlug:String="wk23_070725_newcms_homepage_coupon_banner_fh_1_m")
// endgroup


// group { Text }
const sectionTitle = $(sectionTitle:RichText="Today's Coupon";color="#000000");
const eyebrowText = $(eyebrowText:RichText="UP TO";color="#ffffff");
const sublineText = $(sublineText:RichText="50% OFF";color="#000000");
// endgroup

// group { CTA }
const ctaText = $(ctaText:RichText="Get Coupon";color="#171717");
const ctaLink = $(ctaLink:String="https://www.belk.com/clearance";required=true);
const ctaAdobeTag = $(ctaAdobeTag:String="";required=true);
//endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
function AspectRatioStyles() {
  return (
    <style jsx global>{`
      .aspect-\\[32\\/18\\] {
        aspect-ratio: 32 / 18;
        padding-top: ${(18 / 32) * 100}%;
        position: relative;
      }

      .aspect-\\[32\\/3\\] {
        aspect-ratio: 32 / 3;
        padding-top: ${(3 / 32) * 100}%;
        position: relative;
      }

      @media (min-width: 768px) {
        .md\\:aspect-\\[32\\/3\\] {
          aspect-ratio: 32 / 3;
          padding-top: ${(3 / 32) * 100}%;
        }

        .md\\:aspect-\\[32\\/18\\] {
          aspect-ratio: 32 / 18;
          padding-top: ${(18 / 32) * 100}%;
        }
      }

      @media (min-width: 1024px) {
        .lg\\:aspect-\\[32\\/3\\] {
          aspect-ratio: 32 / 3;
          padding-top: ${(3 / 32) * 100}%;
        }
      }

      @supports (aspect-ratio: 1) {
        .aspect-\\[32\\/18\\],
        .aspect-\\[32\\/3\\],
        .md\\:aspect-\\[32\\/3\\],
        .md\\:aspect-\\[32\\/18\\],
        .lg\\:aspect-\\[32\\/3\\] {
          padding-top: 0;
        }
      }

      .aspect-\\[32\\/18\\] > *,
      .aspect-\\[32\\/3\\] > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      @media (min-width: 768px) {
        .md\\:aspect-\\[32\\/3\\] > *,
        .md\\:aspect-\\[32\\/18\\] > * {
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
      .flex {
        display: flex;
      }
      .flex-col {
        flex-direction: column;
      }
      .flex-nowrap {
        flex-wrap: nowrap;
      }
      .max-w-\\[1600px\\] {
        max-width: 1600px;
      }
      @media (min-width: 768px) {
        .md\\:mr-auto {
          margin-right: auto;
        }
        .md\\:items-center {
          align-items: center;
        }
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
    <div
      className={`relative overflow-hidden aspect-[32/18] md:aspect-[32/3] ${className}`}
    >
      <picture className={className}>
        {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
        {desktopSrc && (
          <source media="(min-width: 768px)" srcSet={desktopSrc} />
        )}
        <Image
          className="object-cover object-center -z-1"
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

const TwentyNineStaticTemplate = () => {
  const imageConfig = useMemo(
    () => ({
      primary: {
        desktop: {
          slug: backgroundDesktopImageSlug,
          preset: "$DWP_PHOTO$",
        },
        mobile: {
          slug: backgroundMobileImageSlug,
          preset: "$DWP_PHOTO$",
        },
      },
    }),
    [],
  );

  const skinnyCouponConfig = {
    image: {
      desktop: isValidImageUrl(imageConfig.primary.desktop.slug) ? buildImageUrl(imageConfig.primary.desktop.slug, imageConfig.primary.desktop.preset) : null,
      mobile: isValidImageUrl(imageConfig.primary.mobile.slug) ? buildImageUrl(imageConfig.primary.mobile.slug, imageConfig.primary.mobile.preset) : null,
    },
    cta: {
      text: ctaText,
      url: ctaLink,
      adobeTag: ctaAdobeTag,
    },
  };

  const hasLink = skinnyCouponConfig.cta.url && skinnyCouponConfig.cta.url.length > 0

  const content = (
    <div className="flex-1 mb-8">
      <div data-bildit-var-name="backgroundDesktopImageSlug" data-bildit-var-type="String">
        <PictureResponsiveImage
          desktopSrc={skinnyCouponConfig.image.desktop}
          mobileSrc={skinnyCouponConfig.image.mobile}
          alt={sublineText}
          className="rounded-2xl"
        >
          <div className="hidden md:flex items-center justify-center w-full h-full text-white px-6 gap-12">
            <div className="belk-text-5xl font-regular" data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">
              {sectionTitle}
            </div>
            <div className="flex flex-row items-center justify-center gap-4" data-bildit-var-name="eyebrowText" data-bildit-var-type="RichText">
              <div className="flex flex-col justify-center">
                {eyebrowText?.split(" ").map((word, index) => (
                  <div
                    key={index}
                    className="belk-text-l font-regular text-center"
                  >
                    {word}
                  </div>
                ))}
              </div>
              {!!sublineText && (
                <h3 className="font-regular leading-none" style={{ fontSize: "75px" }} data-bildit-var-name="sublineText" data-bildit-var-type="RichText">
                  {sublineText}
                </h3>
              )}
            </div>
            <div
              className="bg-white rounded-md px-6 py-3 belk-text-l font-bold shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              data-bildit-var-name="ctaText"
              data-bildit-var-type="RichText"
            >
              {ctaText}
            </div>
          </div>

          <div className="flex md:hidden flex-col items-center justify-center w-full h-full text-white px-4 gap-2">
            {!!sectionTitle && (
              <h4 className="belk-text-xl font-bold" data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">
                {sectionTitle}
              </h4>
            )}
            
            <div className="flex flex-row items-center justify-center gap-2" data-bildit-var-name="eyebrowText" data-bildit-var-type="RichText">
              <div className="flex flex-col justify-center">
                {eyebrowText?.split(" ").map((word, index) => (
                  <div
                    key={index}
                    className="belk-text-s font-regular text-center"
                  >
                    {word}
                  </div>
                ))}
              </div>
              {!!sublineText && (
                <h3 className="belk-text-7xl font-regular" data-bildit-var-name="sublineText" data-bildit-var-type="RichText">
                  {sublineText}
                </h3>
              )}
            </div>
            
            <div className="mt-2">
              <div
                className="bg-white rounded-md px-6 py-3 belk-text-l font-bold shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                data-bildit-var-name="ctaText"
                data-bildit-var-type="RichText"
              >
                {ctaText}
              </div>
            </div>
          </div>
        </PictureResponsiveImage>
      </div>
    </div>
  )

  const alignStyle = {
    margin: "0 max(36px, (100vw - 1560px) / 2)"
  }

  return (
    <>
      <AspectRatioStyles />
      <LayoutStyles />
      <div className="max-w-[1600px] mt-4 mb-4" style={alignStyle}>
        {hasLink
          ? <Link href={skinnyCouponConfig.cta.url} data-aali={skinnyCouponConfig.cta.adobeTag}>{content}</Link>
          : content}
      </div>
    </>
  );
};

export default TwentyNineStaticTemplate;