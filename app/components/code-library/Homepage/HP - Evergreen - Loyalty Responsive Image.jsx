import React from 'react';
import Link from 'next/link';

// Default fallback hook
const defaultUseUserData = () => ({ userData: null, loading: false });

// Try to import useUserData hook safely
let useUserDataHook = defaultUseUserData;

// Use try-catch for dynamic import or require
if (typeof require !== 'undefined') {
  try {
    const hooksModule = require('@hooks');
    if (hooksModule && typeof hooksModule.useUserData === 'function') {
      useUserDataHook = hooksModule.useUserData;
    }
  } catch (e) {
    // Keep default fallback
  }
}

// Final safety: ensure it's always a function
if (typeof useUserDataHook !== 'function') {
  useUserDataHook = defaultUseUserData;
}

const buildS7Image = (slug, preset) => {
  if (!slug || !preset) {
    return null;
  }
  // Ensure preset is a string before calling includes
  const presetString = String(preset || "");
  const contentType = presetString.includes('RAW') ? 'content' : 'image';
  return `https://belk.scene7.com/is/${contentType}/Belk/${slug}?${presetString}`;
}

const TieredResponsiveImage = () => {
  // Call hook unconditionally (React requirement) with safe fallback
  let hookResult;
  try {
    if (typeof useUserDataHook === 'function') {
      hookResult = useUserDataHook();
    } else {
      hookResult = { userData: null, loading: false };
    }
  } catch (error) {
    console.warn('useUserDataHook error:', error);
    hookResult = { userData: null, loading: false };
  }
  const { userData, loading } = hookResult ?? { userData: null, loading: false };
  const { userDetails } = userData ?? {};
  const { customerType } = userDetails ?? {};

  const aemPreset = $(aemPreset:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
  const desktopAemSlug = $(desktopAemSlug:String="new_wk50_2026_wknd_homepage_giftcard_fh");
  const mobileAemSlug = $(mobileAemSlug:String="");
  const alt = $(altText:String="Loyalty offer");
  const aali = $(adobeTag:String="";required=true);
  const title = $(linkText:RichText="Shop Now");
  const url = $(link:String="/";required=true);
  const linkTypeRaw = $(linkType:Dropdown[_blank|_blank,_self|_self]="_self");
  const height = $(height:Number="300");
  const width = $(width:Number);
  const tierRaw = $(tier:Dropdown[Elite|Elite,Premier|Premier,Standard|Standard]="Elite");
  const target = (linkTypeRaw === '_blank' || linkTypeRaw === '_self') ? linkTypeRaw : '_self';
  const tier = ['Elite', 'Premier', 'Standard'].includes(tierRaw) ? tierRaw : (String(tierRaw).toUpperCase() === 'ELITE' ? 'Elite' : String(tierRaw).toUpperCase() === 'PREMIER' ? 'Premier' : 'Standard');

  const verticalGutterSize = $(verticalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="0");
  const horizontalGutterSize = $(horizontalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="32");

  const isValidHeight = Number.isFinite(+height) && +height > 0;
  const isValidWidth = Number.isFinite(+width) && +width > 0;
  const imagePadding = [
    `flex justify-center mx-auto mb-${(horizontalGutterSize / 4)}`,
    `pl-${(verticalGutterSize / 4)}`,
    `pr-${(verticalGutterSize / 4)}`
  ].join(' ');
  const mobileImage = buildS7Image(mobileAemSlug, aemPreset);
  const desktopImage = buildS7Image(desktopAemSlug, aemPreset);
  const hasValidImage = Boolean(desktopImage);
  const imgDims = {
    ...(isValidHeight && { height }),
    ...(isValidWidth && { width })
  };
  const imgStyle = {
    ...(isValidHeight && { maxHeight: `${height}px` }),
    ...(isValidWidth && { maxWidth: `${width}px` }),
    minHeight: isValidHeight ? undefined : 200,
  };

  const content = hasValidImage ? (
    <picture data-bildit-var-name="desktopAemSlug" data-bildit-var-type="String">
      {mobileAemSlug && mobileImage ? <source srcSet={mobileImage} media="(max-width: 767px)" data-bildit-var-name="mobileAemSlug" data-bildit-var-type="String" /> : null}
      <img
        alt={alt ?? ''}
        className='block max-w-fit w-full h-auto object-contain object-center'
        decoding="async"
        loading="lazy"
        src={desktopImage}
        style={imgStyle}
        {...imgDims}
      />
    </picture>
  ) : null;

  // Only hide by tier when we have a loaded user and their tier doesn't match (show in preview when customerType is undefined)
  if (loading) return null;
  if (customerType != null && customerType !== tier) return null;
  if (!content) return null;

  return (
    <div className={imagePadding}>
      {url && url.length > 0
        ? <Link className={`contents link-${target === '_blank' ? 'external' : 'internal'}`} data-aali={aali} href={url} title={title} prefetch={false} target={target} data-bildit-var-name="linkText" data-bildit-var-type="RichText">{content}</Link>
        : content}
    </div>
  );
};

export default TieredResponsiveImage;