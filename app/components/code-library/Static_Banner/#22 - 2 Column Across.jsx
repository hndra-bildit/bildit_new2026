import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Utility class mappers
const getFontSizeClass = (size) =>
  size ? `belk-text-${size.toLowerCase()}` : ''
const getFontWeightClass = (weight) => {
  switch (weight) {
    case 'bold':
      return 'font-bold'
    case 'semibold':
      return 'font-semibold'
    case 'medium':
      return 'font-medium'
    case 'regular':
      return 'font-normal'
    default:
      return ''
  }
}

// group {Settings}
const fontColor = $(fontColor:Color="#14377D");
const secondFontColor = $(secondFontColor:Color="#000000");
const roundedCorners = $(roundedCorners:Boolean="true");
// endgroup

const itemHeight = "440";
const itemHeightMobile = "215";
const stripHeightDesktop = "30";
const stripHeightMobile = "20";

const fontFamily = "proxima-nova";

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

const TwoSlotStackedPromoBanner = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: 308,
    height: 420,
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width <= 767)

      // Update dimensions based on screen width
      if (width <= 767) {
        setDimensions({ width: 328, height: 270 })
      } else if (width <= 1440) {
        setDimensions({ width: 308, height: 420 })
      } else if (width <= 1600) {
        setDimensions({ width: 308, height: 420 })
      } else {
        setDimensions({ width: 388, height: 460 })
      }
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slots = [
    {
      // group {Text}
      headlineText: $(headlineText:String="Red, White & New"),
      headlineDesktopImage: $(headlineDesktopImage:String="wk22_063025_homepage_july4thlockup_pngimage"),
      headlineMobileImage: $(headlineMobileImage:String="wk22_063025_homepage_july4thlockup_pngimage_m.png"),
      headlineImageWidth: $(headlineImageWidth:Number=800),
      headlineImageHeight: $(headlineImageHeight:Number=600),
      headlineImageWidthMobile: $(headlineImageWidthMobile:Number=328),
      headlineImageHeightMobile: $(headlineImageHeightMobile:Number=200),
      descriptionText: $(descriptionText:String="for the whole crew!"),
      ctaText: $(ctaText:String="Get Coupon"),
      ctaLink: $(ctaLink:Link="https://www.belk.com/coupons-online-and-in-store"),
      ctaAdobeTag: $(ctaAdobeTag:String),
      // endgroup
      // group {First Background Setting Desktop}
      first1BackgroundImageSlug: $(first1BackgroundImageSlug:String="wk22_063025_homepage_clouds_2c_1"),
      // endgroup
      backgroundImage: buildImage($(first1BackgroundImageSlug:String="wk22_063025_homepage_clouds_2c_1"), isMobile),
    },
    {
      // group {Second Background Setting Desktop}
      second2BackgroundImageSlug: $(second2BackgroundImageSlug:String="wk22_063025_homepage_laydowns_2c_1"),
      // endgroup
      backgroundImage: buildImage($(second2BackgroundImageSlug:String="wk22_063025_homepage_laydowns_2c_1"), isMobile),
    },
  ]

  // Inject responsive CSS for mobile gutters
  const styles = `
  .wrapper {
    width: 100%;
  }
  .inner {
    display: grid;
    column-gap: 0;
    row-gap: 0;
    cursor: pointer;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0;
    text-decoration: none;

    .headlineImage {
      margin-bottom: 10px;
    }

    h2 {
      margin: 0;
    }

    p {
      margin: 0;
    }
  }
  .strip {
    height: ${isMobile ? stripHeightMobile : stripHeightDesktop}px;
    background-image: url(${buildImage("wk22_063025_homepage_stars_fh_1", isMobile)});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
  }
  @media screen and (max-width: 767px) {
    .inner {
      grid-template-columns: 1fr;
      grid-template-rows: ${itemHeightMobile}px ${itemHeightMobile}px;

      >div:first-child {
        border-top-left-radius: ${roundedCorners ? "16px" : "0px"};
        border-top-right-radius: ${roundedCorners ? "16px" : "0px"};
        overflow: hidden;
      }

      h2 {
        margin: 0 16px; 
      }

      p {
        margin: 4px 16px 8px !important;
      }
    }
    .headlineImage {
      object-fit: contain;
      width: ${slots[0].headlineImageWidthMobile}px;
      height: ${slots[0].headlineImageHeightMobile}px;
    }
  }
  @media screen and (min-width: 768px) {
    .inner {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: ${itemHeight}px;
      border-top-left-radius: ${roundedCorners ? "16px" : "0px"};
      border-top-right-radius: ${roundedCorners ? "16px" : "0px"};
      overflow: hidden;

      h2 {
        margin: 0 32px;
      }

      p {
        margin: 8px 32px 16px !important;
      }
    }
    .headlineImage {
      object-fit: contain;
      width: ${slots[0].headlineImageWidth}px;
      height: ${slots[0].headlineImageHeight}px;
    }
  }
  `;

  // Extract content as suggested by coworker
  const content = slots.map((slot, idx) => {
    return (
      <div key={idx} style={{
        ...getContentAlignmentStyles("middle-center"),
        backgroundImage: `url(${slot.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center top",
        backgroundSize: 'cover',
      }}>
        {slot.headlineDesktopImage && (
          <Image
            alt={slot.headlineDesktopImage}
            src={buildImage(
              slot.headlineDesktopImage,
              isMobile,
              slot.headlineMobileImage
            )}
            width={slot.headlineImageWidth ?? 800}
            height={slot.headlineImageHeight ?? 600}
            className="headlineImage"
          />
        )}
        {slot.headlineText && (
          <h2
            className={isMobile 
            ? `${getFontSizeClass('xl')} ${getFontWeightClass('bold')}` 
            : `${getFontSizeClass('7xl')} ${getFontWeightClass('bold')}`}
            style={{
              color: fontColor,
              fontFamily: fontFamily,
              textAlign: "center",
            }}
          >
            {slot.headlineText}
          </h2>
        )}

        {slot.descriptionText && (
          <p
            className={isMobile 
            ? `${getFontSizeClass('m')} ${getFontWeightClass('regular')}` 
            : `${getFontSizeClass('2xl')} ${getFontWeightClass('medium')}`}
            style={{
              color: secondFontColor,
              fontFamily: fontFamily,
              textAlign: "center",
            }}
          >
            {slot.descriptionText}
          </p>
        )}

        {slot.ctaText && slot.ctaLink && (
          <Link
            href={slot.ctaLink}
            data-aali={slot.ctaAdobeTag}
            className={isMobile 
            ? `${getFontSizeClass('m')} ${getFontWeightClass('bold')}` 
            : `${getFontSizeClass('l')} ${getFontWeightClass('bold')}`}
            style={{
              color: secondFontColor,
              fontFamily: fontFamily,
              textAlign: "center",
              display: 'inline-block',
              textDecoration: 'none',
              paddingBottom: '6px',
              borderBottom: `1px solid ${secondFontColor}`,
            }}
          >
            {slot.ctaText}
          </Link>
        )}
      </div>
    )
  });

  return (
    <>
      <style>{styles}</style>
      <div className='wrapper'>
        {slots[0].ctaLink ? (
          <Link
            href={slots[0].ctaLink}
            data-aali={slots[0].ctaAdobeTag}
            className='inner'>
            {content}
          </Link>
        ) : (
          <div className='inner'>
            {content}
          </div>
        )}
        <div className='strip' />
      </div>
    </>
  )
}

export default TwoSlotStackedPromoBanner;