"use client";
// @version v1
import React, { useMemo, useState } from 'react';
import Link from 'next/link';

// group { 1. Container }
const containerBackgroundColor = $(containerBackgroundColor:Color="#EBEBEB");
const containerBackgroundImageDesktopSlug = $(containerBackgroundImageDesktopSlug:String="");
const containerBackgroundImageMobileSlug = $(containerBackgroundImageMobileSlug:String="");
const bannerHeight = $(bannerHeight:String="");
const layoutMode = $(layoutMode:Dropdown[Inset|inset,Full Width|full]="inset";required=true);
const dismissible = $(dismissible:Boolean=false);
// endgroup

// group { 2. Headlines }
const smallHeadline = $(smallHeadline:RichText="SMALL HEADLINE");
const largeHeadline = $(largeHeadline:RichText="HEADLINE");
const smallHeadlineFontSize = $(smallHeadlineFontSize:Dropdown[XS|"24px",SM|"36px",MD|"48px",LG|"18px"]="24px");
const largeHeadlineFontSize = $(largeHeadlineFontSize:Dropdown[LG|"82px",XL|"120px",XXL|"180px",XXXL|"64px"]="120px");
const largeHeadlineLetterSpacing = $(largeHeadlineLetterSpacing:String="-2.5%");
const largeHeadlineLineHeight = $(largeHeadlineLineHeight:String="1");
const largeHeadlineTransform = $(largeHeadlineTransform:Dropdown[Uppercase|uppercase,Normal|none]="uppercase");
// endgroup

// group { 3. CTA Labels & Links }
const cta1Label = $(cta1Label:RichText="Label");
const cta1Link = $(cta1Link:String="/example";required=true);
const cta2Label = $(cta2Label:RichText="Label");
const cta2Link = $(cta2Link:String="/example";required=true);
const cta3Label = $(cta3Label:RichText="Label");
const cta3Link = $(cta3Link:String="/example";required=true);
const cta4Label = $(cta4Label:RichText="Label");
const cta4Link = $(cta4Link:String="/example";required=true);
const cta5Label = $(cta5Label:RichText="");
const cta5Link = $(cta5Link:String="";required=true);
const cta6Label = $(cta6Label:RichText="");
const cta6Link = $(cta6Link:String="";required=true);
const cta7Label = $(cta7Label:RichText="");
const cta7Link = $(cta7Link:String="";required=true);
const cta8Label = $(cta8Label:RichText="");
const cta8Link = $(cta8Link:String="";required=true);
// endgroup

// group { 4. Typography & alignment }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|Proxima Nova,Roboto|Roboto]="Proxima Nova");
const textAlign = $(textAlign:Dropdown[Center|center,Left|left,Right|right]="center");
const ctaAlignment = $(ctaAlignment:Dropdown[Center|center,Left|left,Right|right,Justify|justify]="center");
const alignmentMap = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
  justify: 'space-between'
};
const arrangement = (typeof ctaAlignment === 'string' ? ctaAlignment : 'center') || 'center';
const alignmentClass = alignmentMap[arrangement] ?? alignmentMap.center;
const mobileTextAlign = $(mobileTextAlign:Dropdown[Center|center,Left|left,Right|right]="center");
// endgroup

// group { 5. Button styling }
const buttonBackgroundColor = $(buttonBackgroundColor:Color="#FFFFFF");
const buttonBorderColor = $(buttonBorderColor:Color="#d1d5db");
const borderRadius = $(borderRadius:String="4px");
const buttonStyle = $(buttonStyle:Dropdown[Button|button,Underline|underline]="button");
// endgroup

// group { 6. Spacing }
const paddingTopDesktop = $(paddingTopDesktop:String="32px");
const paddingBottomDesktop = $(paddingBottomDesktop:String="32px");
const paddingTopMobile = $(paddingTopMobile:String="16px");
const paddingBottomMobile = $(paddingBottomMobile:String="16px");
const verticalAlignOption = $(verticalAlignOption:Dropdown[Top|top,Center|center,Bottom|bottom]="center");
const verticalAlignMap = { top: 'flex-start', center: 'center', bottom: 'flex-end' };
const verticalAlign = verticalAlignMap[(typeof verticalAlignOption === 'string' ? verticalAlignOption : 'center') || 'center'];
// endgroup

// group { 7. Brand logo }
const brandLogoSlug = $(brandLogoSlug:String);
const brandLogoAlt = $(brandLogoAlt:String="Brand Logo");
// endgroup

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;

function buildImage(slug, preset) {
  if (!slug || !preset) return null;
  return `https://belk.scene7.com/is/${preset.includes('RAW') ? 'content' : 'image'}/Belk/${slug}?${preset}&bgc=0,0,0&color=0,0,0,0&fmt=png-alpha&opac=100`;
}

function createStaticId() {
  const propsString = [
    smallHeadline,
    largeHeadline,
    cta1Label,
    cta1Link,
    containerBackgroundColor,
    containerBackgroundImageDesktopSlug,
    containerBackgroundImageMobileSlug,
    fontFamily,
    textAlign,
  ].filter(Boolean).join('-');
  let hash = 0;
  for (let i = 0; i < propsString.length; i++) {
    hash = ((hash << 5) - hash) + propsString.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

const HeadlineFullHero = () => {
  const [dismissed, setDismissed] = useState(false);
  const componentId = useMemo(() => createStaticId(), []);

  const desktopBgUrl = buildImage(containerBackgroundImageDesktopSlug, '$DWP_GRAPHIC$');
  const mobileBgUrl = buildImage(containerBackgroundImageMobileSlug, '$DWP_GRAPHIC$');
  const hasValidDesktopBg = isValidImageUrl(desktopBgUrl);
  const hasValidMobileBg = isValidImageUrl(mobileBgUrl);
  const bgColor = containerBackgroundColor || '#EBEBEB';

  const buttons = [
    { label: cta1Label, link: cta1Link },
    { label: cta2Label, link: cta2Link },
    { label: cta3Label, link: cta3Link },
    { label: cta4Label, link: cta4Link },
    { label: cta5Label, link: cta5Link },
    { label: cta6Label, link: cta6Link },
    { label: cta7Label, link: cta7Link },
    { label: cta8Label, link: cta8Link },
  ].filter((btn) => btn.label);

  const containerVars = {
    '--headline-bg-color': bgColor,
    '--headline-bg-image-desk': hasValidDesktopBg ? `url("${desktopBgUrl}")` : 'none',
    '--headline-bg-image-mob': hasValidMobileBg ? `url("${mobileBgUrl}")` : 'none',
    '--headline-pt-desk': paddingTopDesktop,
    '--headline-pb-desk': paddingBottomDesktop,
    '--headline-pt-mob': paddingTopMobile,
    '--headline-pb-mob': paddingBottomMobile,
    '--headline-small-fs': (smallHeadlineFontSize || '24px').replace(/px$/, '') + 'px',
    '--headline-large-fs': (largeHeadlineFontSize || '150px').replace(/px$/, '') + 'px',
    '--headline-large-ls': largeHeadlineLetterSpacing,
    '--headline-text-align': textAlign,
    '--headline-text-align-mob': mobileTextAlign,
    '--headline-height': bannerHeight || 'auto',
    '--headline-font': fontFamily === 'Proxima Nova' ? 'Proxima Nova, sans-serif' : fontFamily,
    '--headline-max-w': layoutMode === 'inset' ? '1600px' : '100%',
    '--headline-margin': layoutMode === 'inset' ? '0 auto' : '0',
    '--headline-bg-size': layoutMode === 'full' ? 'cover' : 'contain',
    '--headline-justify': verticalAlign,
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: verticalAlign,
    gap: 8,
    maxWidth: 1440,
    margin: '0 auto',
  };

  const ctaContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: alignmentClass,
    marginTop: 8,
  };

  const buttonStyleObj = {
    borderRadius: borderRadius || 4,
    textDecoration: buttonStyle === 'underline' ? 'underline' : 'none',
    backgroundColor: buttonStyle === 'underline' ? 'transparent' : buttonBackgroundColor,
    padding: '8px 16px',
    fontWeight: 600,
    fontSize: 14,
    border: buttonStyle === 'button' ? `1px solid ${buttonBorderColor || '#d1d5db'}` : 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  };

  if (dismissible && dismissed) return null;

  const scope = `headline-full-hero-${componentId}`;

  return (
    <>
      <style>{`
        .${scope} {
          position: relative;
          background-color: var(--headline-bg-color);
          background-image: var(--headline-bg-image-desk);
          background-repeat: no-repeat;
          background-position: center;
          background-size: var(--headline-bg-size);
          padding-top: var(--headline-pt-desk);
          padding-bottom: var(--headline-pb-desk);
          height: var(--headline-height);
          font-family: var(--headline-font);
          max-width: var(--headline-max-w);
          margin: var(--headline-margin);
          box-sizing: border-box;
          padding-left: 16px;
          padding-right: 16px;
        }
        @media (max-width: 767px) {
          .${scope} {
            padding-top: var(--headline-pt-mob);
            padding-bottom: var(--headline-pb-mob);
            background-image: var(--headline-bg-image-mob, var(--headline-bg-image-desk));
          }
        }
        .${scope} .headline-full-hero__content {
          text-align: var(--headline-text-align);
        }
        @media (max-width: 767px) {
          .${scope} .headline-full-hero__content {
            text-align: var(--headline-text-align-mob);
          }
        }
        .${scope} .headline-full-hero__small {
          font-size: var(--headline-small-fs);
          font-weight: 400;
          text-transform: ${largeHeadlineTransform};
          margin: 0;
          letter-spacing: 0.02em;
        }
        @media (max-width: 767px) {
          .${scope} .headline-full-hero__small {
            font-size: 24px;
          }
        }
        .${scope} .headline-full-hero__large {
          font-size: var(--headline-large-fs);
          font-weight: 700;
          line-height: ${largeHeadlineLineHeight || 1};
          letter-spacing: var(--headline-large-ls);
          text-transform: ${largeHeadlineTransform};
          margin: 0;
        }
        @media (max-width: 767px) {
          .${scope} .headline-full-hero__large {
            font-size: 44px;
            letter-spacing: -1px;
          }
        }
      `}</style>
      <div
        id={componentId}
        className={scope}
        style={containerVars}
        data-bildit-var-name="containerBackgroundImageDesktopSlug"
        data-bildit-var-type="String"
      >
      {dismissible && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close banner"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: '#ec4899',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            lineHeight: 1,
            zIndex: 10,
          }}
        >
          ×
        </button>
      )}

      <div style={{ width: '100%', padding: '24px 16px' }}>
        <div style={contentStyle} className="headline-full-hero__content">
          {brandLogoSlug && isValidImageUrl(buildImage(brandLogoSlug, '$DWP_GRAPHIC$')) && (
            <div data-bildit-var-name="brandLogoSlug" data-bildit-var-type="String">
              <img
                src={buildImage(brandLogoSlug, '$DWP_GRAPHIC$')}
                alt={brandLogoAlt ?? ''}
                style={{ maxWidth: 150, marginBottom: 12 }}
              />
            </div>
          )}

          <div
            className="headline-full-hero__small"
            data-bildit-var-name="smallHeadline"
            data-bildit-var-type="RichText"
          >
            {smallHeadline}
          </div>
          <div
            className="headline-full-hero__large"
            data-bildit-var-name="largeHeadline"
            data-bildit-var-type="RichText"
          >
            {largeHeadline}
          </div>

          <div style={ctaContainerStyle}>
            {buttons.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.link || '#'}
                style={buttonStyleObj}
                data-bildit-var-name={`cta${idx + 1}Link`}
                data-bildit-var-type="String"
              >
                <span data-bildit-var-name={`cta${idx + 1}Label`} data-bildit-var-type="RichText">
                  {btn.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeadlineFullHero;