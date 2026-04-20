import React from "react";
import Link from "next/link";

// group {Logo Image}
const logoImageSlug = $(logoImageSlug:String="test_2025_holiday_logo");
const logoAlt = $(logoAlt:String="");
const logoImagePreset = $(logoImagePreset:Dropdown[Image|$DWP_PHOTO$,Graphic|$DWP_GRAPHIC$,Raw|$DWP_RAW$]="$DWP_RAW$");
const logoCtaUrl = $(logoCtaUrl:String="/";required=true);
const logoCtaAdobeTag = $(logoCtaAdobeTag:String="";required=true);
// endgroup

// group {Logo Aspect Ratio}
const logoAspectRatioWidth = $(logoAspectRatioWidth:String="");
const logoAspectRatioHeight = $(logoAspectRatioHeight:String="");
// endgroup

// group {Logo Dimensions}
const logoWidthMobile = $(logoWidthMobile:String="");
const logoHeightMobile = $(logoHeightMobile:String="");
const logoWidthDesktop = $(logoWidthDesktop:String="");
const logoHeightDesktop = $(logoHeightDesktop:String="");
// endgroup

/**
 * buildImageUrl - Constructs Scene7 image URLs for responsive images
 * @param {string} slug - Image slug identifier
 * @param {string|null} [suffix=null] - Device suffix ('m', 't', 'd', 'l') or null
 * @param {string} preset - Image preset (e.g., "$DWP_PHOTO$", "$DWP_RAW$")
 * @returns {string|null} Complete Scene7 image URL or null if invalid parameters
 * @throws {Error} Logs warning to console if slug or preset is missing
 */
function buildImageUrl(slug, suffix = null, preset) {
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }

  let deviceSlug = slug;
  if (suffix) {
    deviceSlug = `${slug}_${suffix}`;
  }
  
  // Reset to original slug for desktop/large desktop
  if (suffix === 'd' || suffix === 'l') {
    deviceSlug = slug;
  }

  const baseUrl = "https://belk.scene7.com/is";
  const contentType = preset.includes("RAW") ? "content" : "image";
  
  const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
  });

  return `${baseUrl}/${contentType}/Belk/${deviceSlug}?${preset}&${otherParams.toString()}`;
}

/**
 * SafeLink - Conditionally renders a Link component or fragment based on href presence
 * @param {Object} props - Component props
 * @param {string} [props.href] - URL for navigation (optional)
 * @param {React.ReactNode} props.children - Content to render
 * @param {...any} props - Additional props passed to Link component
 * @returns {JSX.Element} Link component if href provided, otherwise fragment
 */
const SafeLink = ({ href, children, ...props }) => (
  href ? <Link {...props} href={href}>{children}</Link> : <>{children}</>
);

/**
 * LogoStyles - Generates CSS with media queries for responsive logo sizing
 * @param {string} id - Unique identifier for scoping styles
 * @returns {JSX.Element} Style element with responsive CSS
 */
const LogoStyles = ({ id }) => {
  const containerClass = `logo-container-${id}`;
  
  // Determine mobile styles
  const hasMobileDimensions = logoWidthMobile && logoHeightMobile;
  const mobileStyles = hasMobileDimensions
    ? `width: ${logoWidthMobile}px; height: ${logoHeightMobile}px;`
    : `aspect-ratio: ${logoAspectRatioWidth} / ${logoAspectRatioHeight};`;
  
  // Determine desktop styles
  const hasDesktopDimensions = logoWidthDesktop && logoHeightDesktop;
  const desktopStyles = hasDesktopDimensions
    ? `width: ${logoWidthDesktop}px; height: ${logoHeightDesktop}px;`
    : `aspect-ratio: ${logoAspectRatioWidth} / ${logoAspectRatioHeight};`;
  
  // Tablet: use mobile dimensions if available, otherwise desktop dimensions, otherwise aspect ratio
  const tabletStyles = hasMobileDimensions
    ? mobileStyles
    : (hasDesktopDimensions ? desktopStyles : `aspect-ratio: ${logoAspectRatioWidth} / ${logoAspectRatioHeight};`);
  
  return (
    <style>{`
      .${containerClass} {
        position: relative;
        overflow: hidden;
        ${mobileStyles}
      }
      
      @media (min-width: 768px) and (max-width: 1023px) {
        .${containerClass} {
          ${tabletStyles}
        }
      }
      
      @media (min-width: 1024px) {
        .${containerClass} {
          ${desktopStyles}
        }
      }
      
      .${containerClass} img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `}</style>
  );
};

/**
 * LogoImageSlot - Simple logo component with aspect ratio
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the component instance
 * @returns {JSX.Element} Logo image component
 */
const LogoImageSlot = ({ id }) => {
  if (!logoImageSlug) {
    return null;
  }

  const imageUrl = buildImageUrl(logoImageSlug, null, logoImagePreset);

  if (!imageUrl) {
    return null;
  }

  const containerClass = `logo-container-${id}`;

  return (
    <>
      <LogoStyles id={id} />
      <SafeLink href={logoCtaUrl} data-aali={logoCtaAdobeTag}>
        <div className={containerClass} data-bildit-var-name="logoImageSlug" data-bildit-var-type="String">
          <img
            src={imageUrl}
            alt={logoAlt}
          />
        </div>
      </SafeLink>
    </>
  );
};

export default LogoImageSlot;