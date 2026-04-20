import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Utility class mappers
const getFontSizeClass = (size) =>
  size ? `belk-text-${size.toLowerCase()}` : "";
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

// group {Settings}
const backgroundColor = $(backgroundColor:Color="#FFFFFF");
const innerBackgroundColor = "transparent";
const fontColor = $(fontColor:Color="#14377D");
const roundedCorners = $(roundedCorners:Boolean="false");
// endgroup

const containerBackgroundImage = ""
const itemHeight = "544";
const itemHeightMobile = "160";
const fontFamily = "proxima-nova";
const desktopHorizontalGutter = "16";
const mobileHorizontalGutter = "8";

const isValidImageUrl = (v) => typeof v === "string" && v.length > 0;

function buildImage(slug, isMobile, preset = "$DWP_PHOTO$") {
  return slug && preset
    ? `https://belk.scene7.com/is/${
        preset.includes("RAW") ? "content" : "image"
      }/Belk/${slug}${isMobile ? "_m" : ""}?${preset}&bgc=0,0,0&color=0,0,0,0&fmt=png-alpha&opac=100`
    : null;
}

const getContentAlignmentStyles = (align) => {
  return {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: align.includes("center")
      ? "center"
      : align.includes("right")
      ? "right"
      : "left",
    alignItems: align.includes("right")
      ? "flex-end"
      : align.includes("left")
      ? "flex-start"
      : "center",
    justifyContent: align.includes("top")
      ? "flex-start"
      : align.includes("bottom")
      ? "flex-end"
      : "center",
  };
};

const Sample = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: 308,
    height: 420,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767);

      // Update dimensions based on screen width
      if (width <= 767) {
        setDimensions({ width: 328, height: 270 });
      } else if (width <= 1440) {
        setDimensions({ width: 416, height: 480 });
      } else if (width <= 1600) {
        setDimensions({ width: 523, height: 540 });
      } else {
        setDimensions({ width: 523, height: 540 });
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slots = [
    {
      // group {Slot 1}
      backgroundImage: (() => { const s = $(first1BackgroundImageSlug:String="wk22_063025_homepage_trend_3c_1"); return isValidImageUrl(s) ? buildImage(s, isMobile) : null; })(),
      // endgroup
    },
    {
      // group {Text}
      eyebrow: $(eyebrow:RichText="FASHION MOMENT:"),
      headline: $(headline:RichText="Vibrant Vacation"),
      ctaText: $(ctaText:RichText="Shop Now"),
      ctaLink: $(ctaLink:Link="https://belk.com/mens"),
      ctaAdobeTag: $(ctaAdobeTag:String),
      // endgroup
      // group {Slot 2}
      backgroundImage: (() => { const s = $(second2BackgroundImageSlug:String="wk22_063025_homepage_trend_3c_2"); return isValidImageUrl(s) ? buildImage(s, isMobile) : null; })(),
      // endgroup
    },
    {
      // group {Slot 3}
      backgroundImage: (() => { const s = $(third3BackgroundImageSlug:String="wk22_063025_homepage_trend_3c_3"); return isValidImageUrl(s) ? buildImage(s, isMobile) : null; })(),
      // endgroup
    },
  ];

  const horizontalGutter = isMobile
    ? mobileHorizontalGutter
    : desktopHorizontalGutter;

  const containerStyle = {
    ...(containerBackgroundImage
      ? {
          backgroundImage: `url(${buildImage(
            containerBackgroundImage,
            isMobile
          )})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {
          backgroundColor: backgroundColor,
        }),
  };

  // Inject responsive CSS for mobile gutters
  const styles = `
  .inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: ${isMobile ? itemHeightMobile : itemHeight}px;
    column-gap: ${horizontalGutter}px;
    cursor: pointer;
    max-width: 1600px;
    margin: 0 auto;
    padding: ${isMobile ? 24 : 32}px ${horizontalGutter}px;
    text-decoration: none;
  }
  @media screen and (max-width: 767px) {
    h2 {
      margin: 4px 0 8px !important;
    }
  }
  @media screen and (min-width: 768px) {
    h2 {
      margin: 4px 0 12px !important;
    }
  }
  `;

  return (
    <>
      <style>{styles}</style>
      <div style={containerStyle}>
        <Link
          href={slots[1].ctaLink || "#"}
          data-aali={slots[1].ctaAdobeTag || ""}
          className="inner"
        >
          {slots.map((slot, idx) => {
            const borderRadiusStyle = {
              borderRadius: roundedCorners && !isMobile ? 16 : 0,
            };

            const backgroundSlugVar = idx === 0 ? "first1BackgroundImageSlug" : idx === 1 ? "second2BackgroundImageSlug" : "third3BackgroundImageSlug";
            return (
              <div
                key={idx}
                style={{
                  flex: 1,
                  maxWidth: "100%",
                }}
              >
                  <div
                data-bildit-var-name={backgroundSlugVar}
                data-bildit-var-type="String"
                style={{
                  backgroundColor: innerBackgroundColor,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  ...borderRadiusStyle,
                  ...(slot.backgroundImage && {
                    backgroundImage: `url(${slot.backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }),
                }}
              >
                <div
                  className="textStack"
                  style={{
                    ...getContentAlignmentStyles("middle-center"),
                    padding: isMobile ? "0 16px" : "0 32px",
                  }}
                >
                  {slot.eyebrow && (
                    <div
                      data-bildit-var-name="eyebrow"
                      data-bildit-var-type="RichText"
                      className={isMobile 
                      ? `${getFontSizeClass('s')} ${getFontWeightClass('regular')}` 
                      : `${getFontSizeClass('l')} ${getFontWeightClass('medium')}`}
                      style={{
                        color: fontColor,
                        fontFamily: fontFamily,
                        textAlign: "center",
                      }}
                    >
                      {slot.eyebrow}
                    </div>
                  )}

                  {slot.headline && (
                    <h2
                      data-bildit-var-name="headline"
                      data-bildit-var-type="RichText"
                      className={isMobile 
                      ? `${getFontSizeClass('s')} ${getFontWeightClass('bold')}` 
                      : `${getFontSizeClass('8xl')} ${getFontWeightClass('bold')}`}
                      style={{
                        color: fontColor,
                        fontFamily: fontFamily,
                        textAlign: "center",
                        margin: "0",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      {slot.headline.split(" ").map((word, wordIdx) => (
                        <span key={wordIdx}>{word}</span>
                      ))}
                    </h2>
                  )}

                  {slot.ctaText && slot.ctaLink && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      style={{ display: "inline-block" }}
                    >
                      <span
                        data-bildit-var-name="ctaText"
                        data-bildit-var-type="RichText"
                        className={isMobile 
                        ? `${getFontSizeClass('s')} ${getFontWeightClass('bold')}` 
                        : `${getFontSizeClass('l')} ${getFontWeightClass('bold')}`}
                        style={{
                          color: fontColor,
                          fontFamily: fontFamily,
                          textAlign: "center",
                          display: "inline-block",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        {slot.ctaText}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              </div>
            );
          })}
        </Link>
      </div>
    </>
  );
};

export default Sample;