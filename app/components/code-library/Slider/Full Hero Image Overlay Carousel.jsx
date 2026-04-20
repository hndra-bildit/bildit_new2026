"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// group {Spacing}
const marginTopDesktop = $(marginTopDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomDesktop = $(marginBottomDesktop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginTopMobile = $(marginTopMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottomMobile = $(marginBottomMobile:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginHorizontal = "max(36px, (100vw - 1560px) / 2)"; // belk logo alignment
const marginHorizontalMobile = "0";
// endgroup

// group {CTA}
const fontFamily = "proxima-nova"
const fontColor = $(fontColor:Color="#171717");
const ctaBgColor = $(ctaBgColor:Color="#FFFFFF");
const ctaText = $(ctaText:String);
const ctaUrl = $(ctaUrl:String);
const ctaAdobeTag = $(ctaAdobeTag:String);
// endgroup

// group {Images}
const imageSlug = $(imageSlug:String="wk27_080425_newcmshomepage_bts_slide_1");
const imageSlug2 = $(imageSlug2:String="wk27_080425_newcmshomepage_bts_slide_2");
const imageSlug3 = $(imageSlug3:String="wk27_080425_newcmshomepage_bts_slide_3");
const imagePreset = "$DWP_PHOTO$";
const headlineImage = $(headlineImage:String="wk27_080425_newcmshomepage_bts_slide_headline");
const headlineImagePreset = "$DWP_GRAPHIC$";
// endgroup

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
    overflow-x: hidden;
    
    .${cn("carousel-link")} {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      text-decoration: none;
      max-width: 1600px;
      position: relative;
      
      @media (max-width: 767px) {
        margin: ${marginTopMobile}px ${marginHorizontalMobile} ${marginBottomMobile}px;
        overflow-x: hidden;
      }
      @media (min-width: 768px) {
        margin: ${marginTopDesktop}px ${marginHorizontal} ${marginBottomDesktop}px;
      }

      .${cn("carousel-container")} {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        z-index: -1;
        width: 600%;

        @media (min-width: 768px) {
          gap: 32px;
        }
      }
      
      .${cn("bg-image")} {
        width: 16.666%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        flex-shrink: 0;
        
        @media (max-width: 767px) {
          background-position: left center;
          background-size: 102%;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          background-position: left center;
          background-size: 102%;
        }
        @media (min-width: 1024px) {
          background-position: center;
          background-size: cover;
        }
      }

      .${cn("bg-image-1")} {
        @media (max-width: 767px) {
          background-image: url(${buildImageUrl(imageSlug, imagePreset, true)});
        }
        @media (min-width: 768px) {
          background-image: url(${buildImageUrl(
            imageSlug,
            imagePreset,
            false
          )});
        }
      }

      .${cn("bg-image-2")} {
        @media (max-width: 767px) {
          background-image: url(${buildImageUrl(
            imageSlug2,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) {
          background-image: url(${buildImageUrl(
            imageSlug2,
            imagePreset,
            false
          )});
        }
      }

      .${cn("bg-image-3")} {
        @media (max-width: 767px) {
          background-image: url(${buildImageUrl(
            imageSlug3,
            imagePreset,
            true
          )});
        }
        @media (min-width: 768px) {
          background-image: url(${buildImageUrl(
            imageSlug3,
            imagePreset,
            false
          )});
        }
      }
  
      .${cn("copy")} {
        width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 2;
        position: absolute;
        bottom: 0;
        left: 0;

        @media (max-width: 767px) {
          align-items: center;
          justify-content: flex-end;
          margin: 0 0 41px 0;
          text-align: center;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          align-items: flex-start;
          justify-content: flex-end;
          margin: 0 0 40px 16px;
        }
        @media (min-width: 1024px) {
          align-items: flex-start;
          justify-content: flex-end;
          margin: 0 0 48px 32px;
        }

        .${cn("headlineImage")} {
          background-size: contain;
          background-repeat: no-repeat;
          margin-bottom: 28px;
          
          @media (max-width: 767px) {
            width: 70%;
            background-position: left bottom;
            background-image: url(${buildImageUrl(
              headlineImage,
              headlineImagePreset,
              true
            )});
            margin-bottom: 6px;
            margin-right: 92px;
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            width: 50%;
            background-position: left bottom;
            background-image: url(${buildImageUrl(
              headlineImage,
              headlineImagePreset,
              false
            )});
            margin-bottom: 18px; 
          }
          @media (min-width: 1024px) {
            width: 48%;
            background-position: left bottom;
            background-image: url(${buildImageUrl(
              headlineImage,
              headlineImagePreset,
              false
            )});
            margin-bottom: 18px; // Only desktop gets 18px margin
          }
        }

        .${cn("cta")} {
          background-color: ${ctaBgColor};
          border-radius: 4px;
          color: ${fontColor};
          font-family: ${fontFamily};
          display: inline-block;
          text-decoration: none;

          @media (max-width: 767px) {
            padding: 6px 24px;
            align-self: center;
            margin-right: 250px;
            margin-bottom: 16px;
          }
          @media (min-width: 768px) and (max-width: 1023px) {
            padding: 4px 26px;
            align-self: flex-start;
            margin-left: 12px;
            margin-bottom: 60px;
          }
          @media (min-width: 1024px) {
            padding: 8px 32px;
            align-self: flex-start;
            margin-left: 80px;
            margin-bottom: 150px;
          }
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
        bottom: ${Number(marginBottomMobile) + 16}px;
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

const FullHeroCarousel98StaticTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef(null);
  const reenableTimeoutRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  const slides = [
    { image: imageSlug, className: cn("bg-image-1") },
    { image: imageSlug2, className: cn("bg-image-2") },
    { image: imageSlug3, className: cn("bg-image-3") },
  ];

  const totalSlides = slides.length;

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
  }, [isAutoPlaying, totalSlides]);

  // Handle infinite loop transition
  useEffect(() => {
    if (currentSlide === totalSlides) {
      // We're at the duplicate of image 1, transition to original image 1
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
      // We're at the duplicate of image 3, transition to original image 3
      const timer = setTimeout(()   => {
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
  }, [currentSlide, totalSlides]);

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
    // Start from index 1 (second image) since we added a duplicate at the beginning
    const slideIndex = currentSlide + 1;
    const transition = isTransitioning
      ? "transition: transform 0.5s ease-in-out;"
      : "";

    return `
      .${cn("carousel-container")} {
        ${transition}
        @media (max-width: 767px) {
          transform: translateX(-${slideIndex * 16.666}%);
        }
        
        @media (min-width: 768px) {
          transform: translateX(calc(-${slideIndex * 16.666}% - ${
      slideIndex * 32
    }px));
        }
      }
    `;
  };

  return (
    <>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 1600,
          desktopHeight: 888,
          mobileWidth: 375,
          mobileHeight: 208,
        })}
      </style>
      <style>
        {generateAspectRatioStyles({
          desktopWidth: 936,
          desktopHeight: 295,
          mobileWidth: 226,
          mobileHeight: 72,
        })}
      </style>
      <style>{styles}</style>
      <style>{getTransformStyles()}</style>
      <div
        className={cn("wrapper")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={ctaUrl || "#"}
          data-aali={ctaAdobeTag}
          className={`${cn(
            "carousel-link"
          )} aspect-[375/208] md:aspect-[1600/888]`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={cn("carousel-container")}>
            {/* Duplicate for circular effect - last image before first */}
            <div className={`${cn("bg-image")} ${cn("bg-image-3")}`}></div>

            {/* Main sequence */}
            <div className={`${cn("bg-image")} ${cn("bg-image-1")}`}></div>
            <div className={`${cn("bg-image")} ${cn("bg-image-2")}`}></div>
            <div className={`${cn("bg-image")} ${cn("bg-image-3")}`}></div>

            {/* Duplicates for circular effect - first and second images after last */}
            <div className={`${cn("bg-image")} ${cn("bg-image-1")}`}></div>
            <div className={`${cn("bg-image")} ${cn("bg-image-2")}`}></div>
          </div>
          <div className={cn("copy")} style={{ width: "100%", height: "100%" }}>
            <div
              className={`${cn(
                "headlineImage"
              )}`}
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
        </Link>

        {/* Progress Bar */}
        <div className={cn("progress-bar-container")}>
          {[0, 1, 2].map((index) => {
            // Normalize currentSlide to be within 0-2 range for progress bar
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
    imageSlug,
    headlineImage,
    headlineImagePreset,
    ctaText,
    ctaUrl,
    ctaAdobeTag,
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

export default FullHeroCarousel98StaticTemplate;