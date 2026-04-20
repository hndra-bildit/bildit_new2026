"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// group {Spacing}
const marginTopDesktop = $(marginTopDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomDesktop = $(marginBottomDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginTopMobile = $(marginTopMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomMobile = $(marginBottomMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "16px";
// endgroup

// group {Global}
const fontFamily = "proxima-nova"
const imagePreset = "$DWP_PHOTO$";
const fontColor = $(fontColor:Color="#FFFFFF");
// endgroup

// group {First Banner}
const columns1 = [
  {
    imageSlug: $(firstImageLeft:String="wk25_072125_newcms_homepage_trends_a_2c_1"),
  },
  {
    imageSlug: $(firstImageRight:String="wk25_072125_newcms_homepage_trends_a_2c_2"),
    eyebrow: $(firstEyebrow:String),
    headline: $(firstHeadline:String),
    description: $(firstDescription:String),
    descriptionTablet: $(firstDescriptionTablet:String),
    descriptionMobile: $(firstDescriptionMobile:String),
    ctaText: $(firstCtaText:String),
    ctaUrl: $(firstCtaUrl:String),
    ctaAdobeTag: $(firstCtaAdobeTag:String),
  }
]
// endgroup

// group {Second Banner}
const columns2 = [
  {
    imageSlug: $(secondImageLeft:String="wk25_072125_newcms_homepage_trends_b_2c_1"),
  },
  {
    imageSlug: $(secondImageRight:String="wk25_072125_newcms_homepage_trends_b_2c_2"),
    eyebrow: $(secondEyebrow:String),
    headline: $(secondHeadline:String),
    description: $(secondDescription:String),
    descriptionTablet: $(secondDescriptionTablet:String),
    descriptionMobile: $(secondDescriptionMobile:String),
    ctaText: $(secondCtaText:String),
    ctaUrl: $(secondCtaUrl:String),
    ctaAdobeTag: $(secondCtaAdobeTag:String),
  }
]
// endgroup

const config = {
  eyebrow: {
    fontSize: {
      mobile: "xs",
      desktop: "l",
    },
    fontWeight: "bold",
  },
  cta: {
    fontSize: {
      mobile: "l",
      desktop: "l",
    },
    fontWeight: "bold",
  },
  borderRadius: {
    mobile: "8px",
    desktop: "16px",
  },
};

const cn = (className) => `${className}-${createStaticId()}`;

/**
 * Component that generates CSS for Tailwind-like aspect ratio classes
 */
function generateAspectRatioStyles({
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
}) {
  return `
    @media (max-width: 767px) {
      .aspect-\\[${mobileWidth}\\/${mobileHeight}\\] {
        aspect-ratio: ${mobileWidth} / ${mobileHeight};
        /* Fallback for older browsers */
        padding-top: ${(mobileHeight / mobileWidth) * 100}%;
        position: relative;
      }
    }

    @media (min-width: 768px) {
      .md\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
        aspect-ratio: ${desktopWidth} / ${desktopHeight};
        padding-top: ${(desktopHeight / desktopWidth) * 100}%;
      }
    }

    /* Reset padding when aspect-ratio is supported */
    @supports (aspect-ratio: 1) {
      .aspect-\\[${mobileWidth}\\/${mobileHeight}\\],
      .md\\:aspect-\\[${desktopWidth}\\/${desktopHeight}\\] {
        padding-top: 0;
      }
    }
  `;
}

const styles = `
  .${cn("wrapper")} {
    display: flex;
    width: 100%;
    position: relative;
    
    .${cn("carousel-container")} {
      flex: 1;
      display: flex;
      text-decoration: none;
      max-width: 1600px;
      overflow: hidden;
      position: relative;
      
      @media (max-width: 767px) {
        margin: ${marginTopMobile}px ${marginHorizontalMobile} ${marginBottomMobile}px;
        border-radius: ${config.borderRadius.mobile};
      }
      @media (min-width: 768px) {
        margin: ${marginTopDesktop}px ${marginHorizontal} ${marginBottomDesktop}px;
        border-radius: ${config.borderRadius.desktop};
      }

      .${cn("carousel-track")} {
        display: grid;
        grid-template-columns: repeat(4, 100%);
        grid-template-rows: 1fr;
        column-gap: 16px;
        width: calc(400% + 48px);
      }

      .${cn("banner")} {
        width: 100%;
        display: grid;
        gap: 0;
        flex-shrink: 0;
        text-decoration: none;
        overflow: hidden;
        
        @media (max-width: 767px) {
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr;
          border-radius: ${config.borderRadius.mobile};
        }
        @media (min-width: 768px) {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          border-radius: ${config.borderRadius.desktop};
        }
      }

      .desktop-only {
        @media (max-width: 1099px) {
          display: none;
        }
      }
      .tablet-only {
        @media (max-width: 767px) {
          display: none;
        }
        @media (min-width: 1100px) {
          display: none;
        }
      }
      .mobile-only {
        @media (min-width: 768px) {
          display: none;
        }
      }

      .${cn("column")} {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .${cn("column-1-1")} {
        @media (max-width: 767px) {
          background-image: url(${buildImageUrl(
            columns1[0].imageSlug,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) {
          background-image: url(${buildImageUrl(
            columns1[0].imageSlug,
            imagePreset,
            false
          )});
        }
      }

      .${cn("column-1-2")} {
        @media (max-width: 767px) {
          background-image: url(${buildImageUrl(
            columns1[1].imageSlug,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) {
          background-image: url(${buildImageUrl(
            columns1[1].imageSlug,
            imagePreset,
            false
          )});
        }
      }

      .${cn("column-2-1")} {
        @media (max-width: 767px) {
          background-image: url(${buildImageUrl(
            columns2[0].imageSlug,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) {
          background-image: url(${buildImageUrl(
            columns2[0].imageSlug,
            imagePreset,
            false
          )});
        }
      }

      .${cn("column-2-2")} {
        @media (max-width: 767px) {
          background-image: url(${buildImageUrl(
            columns2[1].imageSlug,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) {
          background-image: url(${buildImageUrl(
            columns2[1].imageSlug,
            imagePreset,
            false
          )});
        }
      }
  
      .${cn("copy")} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;

        * {
          text-align: center;
        }

        h4 {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          margin: 0 0 4px;
        }
        h2 {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          margin: 0;
          @media (max-width: 767px) {
            font-size: 24px;
            font-weight: 700;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            font-size: 32px;
            font-weight: 700;
          }
          @media (min-width: 1100px) {
            font-size: 54px;
            font-weight: 600;
          }
        }
        p {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          @media (max-width: 767px) {
            margin: 4px 0 8px;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
          }
          @media (min-width: 768px) and (max-width: 1099px) {
            margin: 4px 0 12px;
            font-size: 24px;
            line-height: 28px;
            font-weight: 400;
          }
          @media (min-width: 1100px) {
            margin: 8px 0 12px;
            opacity: 0.8;
            font-size: 18px;
            line-height: 22px;
            font-weight: 400;
          }
        }
        span {
          color: ${fontColor};
          font-family: ${fontFamily};
          white-space: pre-line;
          border-bottom: 1px solid ${fontColor};
          padding: 0 0 6px;
        }
      }
    }

    .${cn("progress-bar-container")} {
      cursor: pointer;
      position: absolute;
      bottom: ${Number(marginBottomDesktop) + 32}px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 8px;
      z-index: 10;

      @media (max-width: 767px) {
        display: none;
      }
    }

    .${cn("progress-bar")} {
      width: 16px;
      height: 16px;
      background-color: #BDBDBD;
      border-radius: 16px;
      transition: background-color 0.3s ease;

      @media (max-width: 767px) {
        width: 8px;
        height: 8px;
      }

      &.active {
        background-color: #14377D;
      }

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

const totalSlides = 2;

const TwoColumnCarousel76StaticTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef(null);
  const reenableTimeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => prev + 1);
      }, 4000); // 4 seconds per slide
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Handle infinite loop transition
  useEffect(() => {
    if (currentSlide === totalSlides) {
      // We're at the duplicate of banner 1, transition to original banner 1
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
        // Re-enable transition after position reset
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }
        transitionTimeoutRef.current = setTimeout(() => setIsTransitioning(true), 50);
      }, 500); // Wait for transition to complete

      return () => {
        clearTimeout(timer);
      };
    } else if (currentSlide === -1) {
      // We're at the duplicate of banner 2, transition to original banner 2
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides - 1);
        // Re-enable transition after position reset
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }
        transitionTimeoutRef.current = setTimeout(() => setIsTransitioning(true), 50);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentSlide]);

  // Handle progress bar click
  const handleProgressClick = (index) => {
    if (reenableTimeoutRef.current) {
      clearTimeout(reenableTimeoutRef.current);
    }

    setCurrentSlide(index);
    setIsAutoPlaying(false);

    // Restart auto-play after 10 seconds of inactivity
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    reenableTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (reenableTimeoutRef.current) {
      clearTimeout(reenableTimeoutRef.current);
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => prev + 1);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => prev - 1);
    }

    // Pause auto-play on swipe
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    reenableTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Pause auto-play on hover (desktop)
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const getTransformStyles = () => {
    // Start from index 1 (second banner) since we added a duplicate at the beginning
    const slideIndex = currentSlide + 1;
    const transition = isTransitioning
      ? "transition: transform 0.5s ease-in-out;"
      : "";

    return `
      .${cn("carousel-track")} {
        ${transition}
        transform: translateX(calc(-${slideIndex * 100}% - ${
      slideIndex * 16
    }px));
      }
    `;
  };

  const renderColumns = (columns, itemNumber) => {
    return columns.map((column, index) => (
      <div
        key={index}
        className={`${cn("column")} ${cn(
          `column-${itemNumber + 1}-${index + 1}`
        )} aspect-[343/201] md:aspect-[800/544]`}
      >
        {column.eyebrow && (
          <div className={cn("copy")}>
            <h4
              className={`${getFontSizeClass(
                config.eyebrow.fontSize.desktop,
                config.eyebrow.fontSize.mobile
              )} ${getFontWeightClass(config.eyebrow.fontWeight)}`}
            >
              {column.eyebrow}
            </h4>
            <h2>{column.headline}</h2>
            <p className={`desktop-only`}>{column.description}</p>
            <p className={`tablet-only`}>{column.descriptionTablet}</p>
            <p className={`mobile-only`}>{column.descriptionMobile}</p>
            <div className={cn("cta")}>
              <span
                className={`${getFontSizeClass(
                  config.cta.fontSize.desktop,
                  config.cta.fontSize.mobile
                )} ${getFontWeightClass(config.cta.fontWeight)}`}
              >
                {column.ctaText}
              </span>
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 800,
          desktopHeight: 544,
          mobileWidth: 343,
          mobileHeight: 201,
        })}
      </style>
      <style>{styles}</style>
      <style>{getTransformStyles()}</style>
      <div
        className={cn("wrapper")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cn("carousel-container")}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={cn("carousel-track")}>
            {/* Duplicate for circular effect - last banner before first */}
            <Link
              href={columns2[1].ctaUrl || "#"}
              data-aali={columns2[1].ctaAdobeTag}
              className={cn("banner")}
            >
              {renderColumns(columns2, 1)}
            </Link>

            {/* Main sequence */}
            <Link
              href={columns1[1].ctaUrl || "#"}
              data-aali={columns1[1].ctaAdobeTag}
              className={cn("banner")}
            >
              {renderColumns(columns1, 0)}
            </Link>
            <Link
              href={columns2[1].ctaUrl || "#"}
              data-aali={columns2[1].ctaAdobeTag}
              className={cn("banner")}
            >
              {renderColumns(columns2, 1)}
            </Link>

            {/* Duplicate for circular effect - first banner after last */}
            <Link
              href={columns1[1].ctaUrl || "#"}
              data-aali={columns1[1].ctaAdobeTag}
              className={cn("banner")}
            >
              {renderColumns(columns1, 0)}
            </Link>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={cn("progress-bar-container")}>
          {[0, 1].map((index) => {
            // Normalize currentSlide to be within 0-1 range for progress bar
            const normalizedSlide =
              ((currentSlide % totalSlides) + totalSlides) % totalSlides;
            return (
              <div
                key={index}
                className={`${cn("progress-bar")} ${
                  normalizedSlide === index ? "active" : ""
                }`}
                onClick={() => handleProgressClick(index)}
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
  // Create a deterministic ID based on the component's unique props
  const propsString = [
    ...columns1.flatMap((column) => [
      column.imageSlug,
      column.eyebrow,
      column.headline,
      column.description,
      column.ctaText,
      column.ctaUrl,
      column.ctaAdobeTag,
    ]),
    ...columns2.flatMap((column) => [
      column.imageSlug,
      column.eyebrow,
      column.headline,
      column.description,
      column.ctaText,
      column.ctaUrl,
      column.ctaAdobeTag,
    ]),
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

const getFontSizeClass = (desktopSize, mobileSize) => {
  let className = "";
  if (mobileSize) {
    className = `${className} belk-text-${mobileSize.toLowerCase()}`;
  }
  if (desktopSize) {
    className = `${className} md:belk-text-${desktopSize.toLowerCase()}`;
  }
  return className;
};

const getFontWeightClass = (weight) => {
  switch (weight) {
    case "bold":
      return "font-bold";
    case "semibold":
      return "font-semibold";
    case "medium":
      return "font-medium";
    case "regular":
      return "font-normal";
    default:
      return "";
  }
};

function buildImageUrl(slug, preset, isMobile = false) {
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }

  const baseUrl = "https://belk.scene7.com/is";
  const contentType = preset.includes("RAW") ? "content" : "image";

  return `${baseUrl}/${contentType}/Belk/${slug}${
    isMobile ? "_m" : ""
  }?${preset}&bgc=0,0,0&color=0,0,0,0&fmt=png-alpha&opac=100`;
}

export default TwoColumnCarousel76StaticTemplate;