"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//group {Section}
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-8");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
//endgroup

//group {Image}
const mobileImageSlug = $(mobileImageSlug:String="transparent_insider_brpluscards_stacked_2025")
const desktopImageSlug = $(desktopImageSlug:String="transparent_insider_brpluscards_stacked_2025")
//endgroup

//group {Copy}
const headline = $(headline:String="Open a Belk Rewards+ Credit Card Today and Save");
const description = $(description:String="All day, after discounts when you open a Belk Rewards+ credit card account, in store & online. Coupon required.");
const emphasisLabel = $(emphasisLabel:String="EXTRA");
const emphasisContent = $(emphasisContent:String="25% OFF");
const emphasisSubtext = $(emphasisSubtext:String="ALMOST EVERYTHING");
//endgroup

//group {CTA}
const ctaUrl = $(url:String="");
const ctaText = $(text:String="See If You Prequalify");
const ctaAdobeTag = $(adobeTag:String);
//endgroup

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

const SafeLink = ({ href, children, ...props }) =>
  href ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );


/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
function AspectRatioStyles() {
  return (
    <style jsx global>{`
      .aspect-\\[15\\/11\\] {
        aspect-ratio: 15 / 11;
      }

      .aspect-\\[152\\/120\\] {
        aspect-ratio: 152 / 120;
      }

      @media (min-width: 768px) {
        .md\\:aspect-\\[15\\/11\\] {
          aspect-ratio: 15 / 11;
        }
      }
    `}</style>
  );
}

function LayoutStyles() {
  return (
    <style jsx>{`
      /* Base utilities */
      .custom-hidden-112ffsaas {
        display: none;
      }
      .flex {
        display: flex;
      }
      .flex-row {
        flex-direction: row;
      }
      .flex-col {
        flex-direction: column;
      }
      .flex-1 {
        flex: 1 1 0%;
      }
      .items-center {
        align-items: center;
      }
      .items-end {
        align-items: flex-end;
      }
      .items-start {
        align-items: flex-start;
      }
      .justify-center {
        justify-content: center;
      }
      .relative {
        position: relative;
      }
      .w-full {
        width: 100%;
      }
      .w-\\[48\\%\\] {
        width: 48%;
      }
      .min-w-48 {
        min-width: 12rem;
      }
      .min-w-56 {
        min-width: 14rem;
      }
      .min-w-72 {
        min-width: 18rem;
      }
      .max-w-\\[302px\\] {
        max-width: 302px;
      }
      .max-w-\\[419px\\] {
        max-width: 419px;
      }
      .max-w-\\[1280px\\] {
        max-width: 1280px;
      }
      .max-w-\\[1600px\\] {
        max-width: 1600px;
      }
      .max-w-\\[var\\(--breakpoint-3xl\\)\\] {
        max-width: var(--breakpoint-3xl);
      }
      .max-w-sm {
        max-width: 24rem;
      }
      .max-w-3xs {
        max-width: 16rem;
      }
      .h-full {
        height: 100%;
      }
      .h-0\\.5 {
        height: 0.125rem;
      }
      .h-40 {
        height: 10rem;
      }
      .p-7 {
        padding: 1.75rem;
      }
      .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      .px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .py-5 {
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
      }
      .py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
      .px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .mt-3 {
        margin-top: 0.75rem;
      }
      .mt-5 {
        margin-top: 1.25rem;
      }
      .mb-3 {
        margin-bottom: 0.75rem;
      }
      .mb-4 {
        margin-bottom: 1rem;
      }
      .ml-8 {
        margin-left: 2rem;
      }
      .ml-16 {
        margin-left: 4rem;
      }
      .mr-12 {
        margin-right: 3rem;
      }
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
      .space-x-1 > * + * {
        margin-left: 0.25rem;
      }
      .z-50 {
        z-index: 50;
      }
      .rounded-2xl {
        border-radius: 1rem;
      }
      .rounded-sm {
        border-radius: 0.125rem;
      }
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .overflow-hidden {
        overflow: hidden;
      }
      .object-cover {
        object-fit: cover;
      }
      .object-center {
        object-position: center;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .text-center {
        text-align: center;
      }
      .text-left {
        text-align: left;
      }
      .font-bold {
        font-weight: 700;
      }
      .font-medium {
        font-weight: 500;
      }
      .m-0 {
        margin: 0;
      }
      .block {
        display: block;
      }

      /* Small screens (640px and up) */
      @media (width >= 40rem) {
        .sm\\:custom-hidden-112ffsaas {
          display: none;
        }
        .sm\\:flex {
          display: flex;
        }
        .sm\\:mt-0 {
          margin-top: 0;
        }
        .sm\\:mt-3 {
          margin-top: 0.75rem;
        }
        .sm\\:-mb-8 {
          margin-bottom: -2rem;
        }
        .sm\\:items-end {
          align-items: flex-end;
        }
        .sm\\:items-start {
          align-items: flex-start;
        }
        .sm\\:text-left {
          text-align: left;
        }
        .sm\\:max-w-3xs {
          max-width: 16rem;
        }
        .sm\\:min-w-sm {
          min-width: 24rem;
        }
        .sm\\:rounded-lg {
          border-radius: var(--radius-lg);
        }
        .sm\\:flex-row {
          flex-direction: row;
        }
      }

      /* Medium screens (768px and up) */
      @media (width >= 48rem) {
        .md\\:custom-hidden-112ffsaas {
          display: none;
        }
        .md\\:mr-auto {
          margin-right: auto;
        }
        .md\\:ml-auto {
          margin-left: auto;
        }
        .md\\:mr-8 {
          margin-right: 2rem;
        }
        .md\\:mt-0 {
          margin-top: 0;
        }
        .md\\:mb-0 {
          margin-bottom: 0;
        }
        .md\\:order-3 {
          order: 3;
        }
        .md\\:order-1 {
          order: 1;
        }
        .md\\:items-center {
          align-items: center;
        }
        .md\\:items-end {
          align-items: flex-end;
        }
        .md\\:w-px {
          width: 1px;
        }
        .md\\:h-40 {
          height: 10rem;
        }
        .md\\:max-w-sm {
          max-width: 24rem;
        }
        .md\\:max-w-\\[var\\(--breakpoint-3xl\\)\\] {
          max-width: var(--breakpoint-3xl);
        }
        .md\\:min-w-72 {
          min-width: 18rem;
        }
        .md\\:px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .md\\:px-5 {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .md\\:px-7 {
          padding-inline: calc(var(--spacing) * 7);
        }
        .md\\:pr-0 {
          padding-right: 0;
        }
        .md\\:-mb-8 {
          margin-bottom: -2rem;
        }
        .md\\:text-left {
          text-align: left;
        }
        .md\\:ml-8 {
          margin-left: 2rem;
        }
        .md\\:ml-16 {
          margin-left: 4rem;
        }
        .md\\:-mt-12 {
          margin-top: -3rem;
        }
        .md\\:flex-row {
          flex-direction: row;
        }
      }

      /* Large screens (1024px and up) */
      @media (width >= 64rem) {
        .lg\\:custom-hidden-112ffsaas {
          display: none;
        }
        .lg\\:flex {
          display: flex;
        }
        .lg\\:flex-row {
          flex-direction: row;
        }
        .lg\\:items-center {
          align-items: center;
        }
        .lg\\:ml-6 {
          margin-left: 1.5rem;
        }
        .lg\\:ml-16 {
          margin-left: 4rem;
        }
        .lg\\:mr-12 {
          margin-right: 3rem;
        }
        .lg\\:-mt-12 {
          margin-top: -3rem;
        }
        .lg\\:w-px {
          width: 1px;
        }
        .lg\\:h-40 {
          height: 10rem;
        }
        .lg\\:max-w-\\[419px\\] {
          max-width: 419px;
        }
        .lg\\:text-left {
          text-align: left;
        }
        .lg\\:font-medium {
          font-weight: 500;
        }
        .lg\\:px-5 {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .lg\\:justify-center {
          justify-content: center;
        }
        .lg\\:text-center {
          text-align: center;
        }
        .lg\\:mt-0 {
          margin-top: 0;
        }
        .lg\\:-mb-8 {
          margin-bottom: -2rem;
        }
        .lg\\:min-w-sm {
          min-width: 24rem;
        }
        .lg\\:mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
      }

      /* Extra large screens (1280px and up) */
      @media (width >= 80rem) {
        .xl\\:-mt-6 {
          margin-top: -1.5rem;
        }
        .xl\\:-ml-12 {
          margin-left: -3rem;
        }
        .xl\\:min-w-72 {
          min-width: 18rem;
        }
        .xl\\:w-72 {
          width: 18rem;
        }
        .xl\\:z-10 {
          z-index: 10;
        }
      }
    `}</style>
  );
}

function ColorStyles({ id }) {
  return (
    <style jsx>{`
      /* Background colors - using scoped CSS variables */
      .bg-gray-100 {
        background-color: var(--${id}-background-primary, #f3f4f6);
      }
      .bg-gray-200 {
        background-color: var(--${id}-background-secondary, #e5e7eb);
      }
      .bg-white {
        background-color: var(--${id}-background-white, #ffffff);
      }
      .bg-black {
        background-color: var(--${id}-background-black, #000000);
      }
      .bg-\\[\\#0076BE\\] {
        background-color: var(--${id}-background-accent, #0076be);
      }

      /* Text colors - using scoped CSS variables */
      .text-black {
        color: var(--${id}-text-primary, #000000);
      }
      .text-white {
        color: var(--${id}-text-white, #ffffff);
      }
      .text-gray-500 {
        color: var(--${id}-text-gray, #6b7280);
      }
      @media (width > 40rem) {
        sm\\:bg-gray-\\[\\#eeeeee\\] {
          background-color: var(--${id}-background-gray-custom, #eeeeee);
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
  id,
  desktopSrc,
  mobileSrc,
  alt,
  width,
  height,
  className = "",
  imageClassName = "-z-1 object-cover object-center",
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
          id={id}
          className={`${imageClassName}`}
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

/**
 * CardBannerStyleVars - Defines CSS custom properties for dynamic styling with ID scoping
 * @returns {JSX.Element} Style element with scoped CSS variables
 */
const CardBannerStyleVars = ({ id }) => (
  <style jsx>{`
    :root {
      --${id}-background-primary: #f3f4f6;
      --${id}-background-secondary: #e5e7eb;
      --${id}-background-white: #ffffff;
      --${id}-background-black: #000000;
      --${id}-background-accent: #0076be;
      --${id}-background-gray-custom: #eeeeee;

      --${id}-text-primary: #000000;
      --${id}-text-white: #ffffff;
      --${id}-text-gray: #6b7280;
    }
  `}</style>
);

/**
 * CardBannerStyles - Defines utility CSS classes for dynamic content with ID scoping
 * @returns {JSX.Element} Style element with scoped utility classes
 */
const CardBannerStyles = ({ id }) => (
  <style jsx>{`
    .${id}-bg-primary {
      background-color: var(--${id}-background-primary);
    }
    .${id}-bg-secondary {
      background-color: var(--${id}-background-secondary);
    }
    .${id}-bg-white {
      background-color: var(--${id}-background-white);
    }
    .${id}-bg-black {
      background-color: var(--${id}-background-black);
    }
    .${id}-bg-accent {
      background-color: var(--${id}-background-accent);
    }
    .${id}-bg-gray-custom {
      background-color: var(--${id}-background-gray-custom);
    }

    .${id}-text-primary {
      color: var(--${id}-text-primary);
    }
    .${id}-text-white {
      color: var(--${id}-text-white);
    }
    .${id}-text-gray {
      color: var(--${id}-text-gray);
    }
  `}</style>
);

const ThirtyTwoStaticTemplate = ({ id }) => {
  const imageConfig = useMemo(
    () => ({
      primary: {
        desktop: {
          slug: desktopImageSlug,
          preset: "$DWP_PHOTO$",
        },
        mobile: {
          slug: mobileImageSlug,
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
    copy: {
      headline,
      description,
      emphasisLabel,
      emphasisContent,
      emphasisSubtext,
    },
    cta: {
      text: ctaText,
      url: ctaUrl,
      adobeTag: ctaAdobeTag,
    },
  };

  return (
    <>
      <AspectRatioStyles />
      <LayoutStyles />
      <ColorStyles id={id} />
      <CardBannerStyleVars id={id} />
      <CardBannerStyles id={id} />
      <div
        className={`w-full px-2 md:px-4 md:pr-0 py-4 z-50 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-5 [&>div]:md:pr-0 ${topMargin} ${bottomMargin}`}
      >
        <div className="mx-auto">
          <SafeLink
            href={skinnyCouponConfig.cta.url}
            data-aali={skinnyCouponConfig.cta.adobeTag}
          >
            <div className={`w-full flex-1 ${id}-bg-primary sm:${id}-bg-gray-custom p-7 md:pr-0`}>
              <div className={`flex flex-col lg:flex-row items-center w-full h-full max-w-[1280px] mx-auto ${id}-text-primary ${id}-bg-white py-5 px-6 md:px-4 md:pr-0 rounded-2xl relative md:flex-row md:items-end`}>
                <PictureResponsiveImage
                  id="responsive-image-1"
                  desktopSrc={skinnyCouponConfig.image.desktop}
                  mobileSrc={skinnyCouponConfig.image.mobile}
                  alt={skinnyCouponConfig.copy.headline}
                  imageClassName="object-cover object-center"
                  className="flex w-[48%] relative aspect-[152/120] -mt-9 sm:custom-hidden-112ffsaas sm:mt-0 -mb-4 min-w-48 md:min-w-72 md:order-3 md:ml-auto"
                />
                <div className="flex flex-row sm:items-end lg:items-center md:mr-auto md:ml-auto md:order-1 md:flex-1">
                  <div className="flex flex-col lg:flex-row sm:items-start lg:items-center lg:justify-center lg:text-center">
                    <div className="flex flex-col mt-3 mb-3 md:mr-0 md:mt-0 md:mb-0 text-center md:text-left lg:text-center lg:max-w-[419px] md:ml-8">
                      <h3 className="belk-text-l md:belk-text-2xl lg:belk-text-3xl font-bold md:mb-4">
                        {skinnyCouponConfig.copy.headline}
                      </h3>
                      <h4 className="belk-text-base md:belk-text-l">
                        {skinnyCouponConfig.copy.description}
                      </h4>
                    </div>
                    <div className={`h-0.5 w-full sm:max-w-3xs lg:w-px lg:h-40 sm:mt-3 md:mr-12 ${id}-bg-black md:ml-8`}></div>
                    <div className="flex w-full items-center flex-col sm:flex-row min-w-56 md:ml-8">
                    <div>
                    <div className="mt-5 mb-3 text-center md:text-left lg:text-center">
                        <h4 className="belk-text-base text-center md:text-left lg:text-center">
                          {skinnyCouponConfig.copy.emphasisLabel}
                        </h4>
												<div className="flex justify-center items-center mx-auto space-x-1 md:justify-start md:mx-0 lg:justify-center lg:mx-auto">
												<h2 className="belk-text-6xl font-bold md:font-medium m-0">
														{skinnyCouponConfig.copy.emphasisContent}
													</h2>
													<sup className="text-[0.6rem] mb-[8px] block">†</sup>
												</div>
                        <p className="belk-text-base text-center md:text-left lg:text-center">
                          {skinnyCouponConfig.copy.emphasisSubtext}
                        </p>
                      </div>
                      <button className={`${id}-bg-accent rounded-sm sm:rounded-lg px-6 py-2 belk-text-base font-bold ${id}-text-white cursor-pointer`}>
                        {ctaText}
                      </button>
                    </div>
                      <PictureResponsiveImage
                      id="responsive-image-2"
                      desktopSrc={skinnyCouponConfig.image.desktop}
                      mobileSrc={skinnyCouponConfig.image.mobile}
                      alt={skinnyCouponConfig.copy.headline}
                      imageClassName="object-cover object-center"
                      className="custom-hidden-112ffsaas w-full max-w-[302px] sm:flex lg:custom-hidden-112ffsaas relative aspect-[152/120] lg:mt-0 lg:-mb-8 min-w-48 md:-mt-12 md:ml-16 lg:min-w-sm md:ml-auto"
                    />
                    </div>
                  </div>
                  <PictureResponsiveImage
                    id="responsive-image-3"
                    desktopSrc={skinnyCouponConfig.image.desktop}
                    mobileSrc={skinnyCouponConfig.image.mobile}
                    alt={skinnyCouponConfig.copy.headline}
                    imageClassName="object-cover object-center"
                    className="custom-hidden-112ffsaas lg:flex relative aspect-[152/120] lg:mt-0 lg:-mb-8 min-w-48 md:-mt-12 md:ml-16 lg:min-w-sm md:ml-auto"
                  />
                </div>
              </div>
            </div>
          </SafeLink>
        </div>
      </div>
    </>
  );
};

export default ThirtyTwoStaticTemplate;