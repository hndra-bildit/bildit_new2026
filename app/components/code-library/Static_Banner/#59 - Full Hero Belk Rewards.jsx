"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
function AspectRatioStyles() {
  return (
    <style jsx>{`
      .aspect-\\[20\\/7\\] {
        aspect-ratio: 20 / 7;
      }

      .aspect-\\[4\\/9\\] {
        aspect-ratio: 4 / 9;
      }

      /* Medium breakpoint and up (768px+) */
      @media (min-width: 768px) {
        .md\\:aspect-\\[20\\/7\\] {
          aspect-ratio: 20 / 7;
        }

        .md\\:aspect-\\[4\\/9\\] {
          aspect-ratio: 4 / 9;
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
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .justify-start {
        justify-content: flex-start;
      }
      .justify-end {
        justify-content: flex-end;
      }
      .items-start {
        align-items: flex-start;
      }
      .items-end {
        align-items: flex-end;
      }
      .items-center {
        align-items: center;
      }

      @media (width >= 48rem) {
        .md\\:items-start {
          align-items: flex-start;
        }
        .md\\:items-end {
          align-items: flex-end;
        }
        .md\\:items-center {
          align-items: center;
        }
        .md\\:justify-start {
          justify-content: flex-start;
        }
        .md\\:justify-end {
          justify-content: flex-end;
        }
      }
    `}</style>
  );
}

function ColorStyles({ id }) {
  return (
    <style jsx>{`
      /* Background colors - using scoped CSS variables */
      .bg-gray-200 {
        background-color: var(--${id}-background-gray-secondary, #e5e7eb);
      }

      /* Text colors - using scoped CSS variables */
      .text-gray-500 {
        color: var(--${id}-text-gray, #6b7280);
      }

      /* Dark background color - using scoped CSS variable */
      .bg-dark {
        background-color: var(--${id}-background-dark, #2d2d2d);
      }
    `}</style>
  );
}

/**
 * FullHeroBelkRewards59StyleVars - Defines CSS custom properties for dynamic styling with ID scoping
 * @returns {JSX.Element} Style element with scoped CSS variables
 */
const FullHeroBelkRewards59StyleVars = ({ id }) => (
  <style jsx>{`
    :root {
      --${id}-background-gray-secondary: #e5e7eb;
      --${id}-background-dark: #2d2d2d;
      --${id}-text-gray: #6b7280;
    }
  `}</style>
);

/**
 * FullHeroBelkRewards59Styles - Defines utility CSS classes for dynamic content with ID scoping
 * @returns {JSX.Element} Style element with scoped utility classes
 */
const FullHeroBelkRewards59Styles = ({ id }) => (
  <style jsx>{`
    .${id}-bg-gray-secondary {
      background-color: var(--${id}-background-gray-secondary);
    }

    .${id}-bg-dark {
      background-color: var(--${id}-background-dark);
    }

    .${id}-text-gray {
      color: var(--${id}-text-gray);
    }
  `}</style>
);

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
        className={`${id}-bg-gray-secondary flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt || "Image placeholder"}
      >
        <span className={`${id}-text-gray text-sm`}>No image available</span>
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

const FiftyNineStaticTemplate = ({ id }) => {
  // group { Outer Container }
  const containerBackgroundImageSlug = $(containerBackgroundImageSlug:String="wk24_071725_homepage_lastchance_premier_days_fh");
  const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-8");
  const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
  // endgroup

  // group { CTA }
  const ctaLink = $(ctaLink:Link="https://www.belk.com");
  const ctaAdobeTag = $(ctaAdobeTag:String);
  // endgroup

  const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;
  const backgroundImage = isValidImageUrl(containerBackgroundImageSlug) ? buildImageUrl(containerBackgroundImageSlug, "$DWP_PHOTO$") : null;
  const mobileBackgroundImage = isValidImageUrl(containerBackgroundImageSlug) ? buildImageUrl(`${containerBackgroundImageSlug}_m`, "$DWP_PHOTO$") : null;

  return (
    <>
      <AspectRatioStyles />
      <LayoutStyles />
      <ColorStyles id={id} />
      <FullHeroBelkRewards59StyleVars id={id} />
      <FullHeroBelkRewards59Styles id={id} />
      <Link
        href={ctaLink}
        data-aali={ctaAdobeTag}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`flex w-full mx-auto ${topMargin} ${bottomMargin}`}>
          <PictureResponsiveImage
            className="z-10 w-full items-center aspect-[4/9] md:aspect-[20/7] mx-auto object-contain"
            alt="Background Image"
            imageClassName="object-contain"
            fill
            desktopSrc={backgroundImage}
            mobileSrc={mobileBackgroundImage}
          />
        </div>
      </Link>
    </>
  );
};

export default FiftyNineStaticTemplate;