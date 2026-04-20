"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#f5f9fc");
const sectionBackgroundImage = $(sectionBackgroundImage:String="");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String);
// endgroup

// group: { 2. Section Header }
const sectionTitle = $(sectionTitle:RichText);
const sectionTitleColor = $(sectionTitleColor:Color="#000000");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:String="18");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:String="24");
const sectionCtaContent = $(sectionCtaContent:RichText);
const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const sectionCtaColor = $(sectionCtaColor:Color="#000000");
const sectionCtaBackgroundColor = $(sectionCtaBackgroundColor:Color="#FFFFFF");
const sectionCtaUrl = $(sectionCtaUrl:String="/");
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String);
const headerContentArrangement = $(headerContentArrangement:Dropdown[Stacked|flex-col,Side by Side|flex-row]="flex-col");
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="left");
// endgroup

// group: { 3. Margins }
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16]="mb-8");
// endgroup

// group: { 4. Layout }
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered");
// endgroup

// group: { 5. Grid }
const gridGap = $(gridGap:Dropdown[None|0,Small|8px,Large|15px]="15px");
const slot1Height = $(slot1Height:Dropdown[Small|120,Medium|180,Large|250,XLarge|320,Auto|auto]="180");
const slot2Height = $(slot2Height:Dropdown[Small|120,Medium|180,Large|250,XLarge|320,Auto|auto]="180");
const slot3Height = $(slot3Height:Dropdown[Small|120,Medium|180,Large|250,XLarge|320,Auto|auto]="180");
// endgroup

// group: { 6. Rounded Corners }
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-none");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-none");
const slotRoundedCorners = $(slotRoundedCorners:Dropdown[None|0,Small|4px,Medium|8px,Large|12px]="4px");
// endgroup


function buildImageUrl(slug, suffix = null, preset) {
  if (typeof slug !== 'string') return null;
  const s = String(slug || "").trim();
  if (!s || s.startsWith('$' + '(')) return null;
  const presetString = String(preset || "").trim() || "$DWP_PHOTO$";
  let deviceSlug = suffix && suffix !== 'd' && suffix !== 'l' ? `${s}_${suffix}` : s;
  const baseUrl = "https://belk.scene7.com/is";
  const contentType = presetString.includes("RAW") ? "content" : "image";
  const otherParams = new URLSearchParams({ bgc: "0,0,0", color: "0,0,0,0", fmt: "png-alpha", opac: "100" });
  return `${baseUrl}/${contentType}/Belk/${deviceSlug}?${presetString}&${otherParams.toString()}`;
}

const SectionCtaButton = ({ variant, className, href, children, 'data-aali': dataAali }) => {
  const content = (
    variant === "solid"
      ? <span className={`flex-col font-bold gap-1.5 belk-button cursor-pointer inline-flex ${className} px-8 py-2 rounded-md`}><span className="relative inline-block">{children}</span></span>
      : <span className={`flex-col font-bold gap-1.5 belk-button cursor-pointer inline-flex ${className}`}>
          <span className="relative inline-block">
            {children}
            <span className="block relative h-0.5 mt-1">
              <svg className="absolute bottom-0 left-0 h-full w-full" viewBox="0 0 100 1" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1"><path d="M0 0.5 H100" /></svg>
            </span>
          </span>
        </span>
  );
  if (href) return <Link href={href || '#'} data-aali={dataAali} className="inline-flex">{content}</Link>;
  return content;
};

const PictureResponsiveImage = ({ images, alt, className = "", imageClassName = "-z-1 object-cover object-center", children, backgroundLayer = false, useNativeImg = false }) => {
  const [hasError, setHasError] = useState(false);
  const { mobile, tablet, desktop, largeDesktop } = images || {};
  const hasAnyImage = mobile || tablet || desktop || largeDesktop;
  const pictureWrapperClass = backgroundLayer ? "absolute inset-0 w-full h-full z-0" : "";
  const fallbackSrc = desktop || tablet || largeDesktop || mobile;
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {hasAnyImage && (
        <picture className={pictureWrapperClass}>
          {mobile && <source media="(max-width: 767px)" srcSet={mobile} />}
          {tablet && <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
          {desktop && <source media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
          {largeDesktop && <source media="(min-width: 1920px)" srcSet={largeDesktop} />}
          {useNativeImg ? (
            <img src={fallbackSrc} alt={alt || ''} className={imageClassName} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} onError={() => { if (!hasError) setHasError(true); }} />
          ) : (
            <Image className={imageClassName} src={fallbackSrc} alt={alt || ''} fill onError={() => { if (!hasError) setHasError(true); }} />
          )}
        </picture>
      )}
      {children}
    </div>
  );
};

const ResponsiveContainer = ({ containerBehavior, className = "", children }) => {
  const containerClasses = (() => {
    switch (containerBehavior) {
      case 'max-w-full': return '[&>div]:md:max-w-full [&>div]:w-full';
      case 'max-w-inset': return 'px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full';
      case 'max-w-centered': return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5';
      default: return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5';
    }
  })();
  return <div className={`${containerClasses} ${className}`}>{children}</div>;
};

const alignmentMap = {
  'flex-col': { 'left': 'items-start', 'center': 'items-center', 'right': 'items-end' },
  'flex-row': { 'left': 'justify-start', 'center': 'justify-center', 'right': 'justify-end' }
};
function getAlignmentClass() {
  const arrangement = (typeof headerContentArrangement === 'string' ? headerContentArrangement : 'flex-col') || 'flex-col';
  const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : String(sectionAlignment || 'left')) || 'left';
  return alignmentMap[arrangement]?.[alignment] || alignmentMap['flex-col']['left'];
}

const Nested3RowStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-container-background-color: ${sectionBackgroundColor};
          --${id}-container-title-color: ${sectionTitleColor};
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}px, 3vw, ${sectionTitleMaximumFontSize}px);
          --${id}-section-cta-color: ${sectionCtaColor};
          --${id}-section-cta-background-color: ${sectionCtaBackgroundColor};
        }
      }
    }
  `}</style>
);

function getSectionBgSlug() {
  const v = sectionBackgroundImage;
  const s = typeof v === 'string' ? v : (v && (v.value ?? v.url ?? v.slug));
  return typeof s === 'string' ? s.trim() : '';
}

const slot1HeightPx = slot1Height === 'auto' ? null : (Number(slot1Height) || 180);
const slot2HeightPx = slot2Height === 'auto' ? null : (Number(slot2Height) || 180);
const slot3HeightPx = slot3Height === 'auto' ? null : (Number(slot3Height) || 180);

export default function Nested3Row({id}) {
  const sectionBgSlug = getSectionBgSlug();
  const sectionBgImages = sectionBgSlug && !sectionBgSlug.startsWith('$' + '(') ? {
    mobile: buildImageUrl(sectionBgSlug, 'm', sectionBackgroundImagePreset),
    tablet: buildImageUrl(sectionBgSlug, 't', sectionBackgroundImagePreset),
    desktop: buildImageUrl(sectionBgSlug, 'd', sectionBackgroundImagePreset),
    largeDesktop: buildImageUrl(sectionBgSlug, 'l', sectionBackgroundImagePreset),
  } : {};
  return (
    <>
      <style>{`
        :root {
          --breakpoint-3xl: 80rem;
          --spacing: 4px;
        }
        .max-w-inset { max-width: var(--breakpoint-3xl); }
        .\\[\\&\\>div\\]\\:max-w-\\[100rem\\] > div { max-width: 100rem; }
        .\\[\\&\\>div\\]\\:w-full > div { width: 100%; }
        .\\[\\&\\>div\\]\\:mx-4 > div { margin-left: calc(var(--spacing) * 4); margin-right: calc(var(--spacing) * 4); }
        .\\[\\&\\>div\\]\\:px-5 > div { padding-left: calc(var(--spacing) * 5); padding-right: calc(var(--spacing) * 5); }
        @media (width >= 40rem) {
          .\\[\\&\\>div\\]\\:sm\\:mx-8 > div { margin-left: calc(var(--spacing) * 8); margin-right: calc(var(--spacing) * 8); }
        }
        @media (width >= 48rem) {
          .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\\(--breakpoint-3xl\\)\\] > div { max-width: var(--breakpoint-3xl); }
          .\\[\\&\\>div\\]\\:md\\:px-8 > div { padding-left: calc(var(--spacing) * 8); padding-right: calc(var(--spacing) * 8); }
          .\\[\\&\\>div\\]\\:md\\:mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] > div { margin-left: max(36px, (100vw - 1560px) / 2); margin-right: max(36px, (100vw - 1560px) / 2); }
          .\\[\\&\\>div\\]\\:md\\:max-w-full > div { max-width: 100%; }
          .\\[\\&\\>div\\]\\:md\\:px-5 > div { padding-left: calc(var(--spacing) * 5); padding-right: calc(var(--spacing) * 5); }
        }
        .${id}-container-background-color { background-color: var(--${id}-container-background-color); }
        .${id}-container-title-color { color: var(--${id}-container-title-color); }
        .${id}-section-cta-color { color: var(--${id}-section-cta-color); }
        .${id}-section-cta-background-color { background-color: var(--${id}-section-cta-background-color); }
        .${id}-belk-text-clamp-section-title { font-size: var(--${id}-section-title-font-size); line-height: 1.2; letter-spacing: -0.01em; }
      `}</style>
      <Nested3RowStyleVars id={id} />
      <ResponsiveContainer containerBehavior={containerBehavior} className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}>
        <div className="contents">
          <PictureResponsiveImage
            images={sectionBgImages}
            alt={sectionBackgroundAlt}
            imageClassName="object-cover object-center"
            className={`relative justify-center overflow-hidden ${roundedCornersTop} ${roundedCornersBottom} ${id}-container-background-color py-4 md:py-8 min-h-[200px]`}
            backgroundLayer
            useNativeImg
          >
            <div className={`relative z-10 ${id}-shop-container`}>
              <style>{`
                .${id}-shop-container { container-type: inline-size; padding: 20px; font-family: sans-serif; }
                .${id}-shop-title { margin: 0 0 20px 0; font-weight: bold; }
                .${id}-shop-grid { display: grid; grid-template-columns: 1fr; grid-template-rows: auto auto auto; gap: ${gridGap}; min-height: 250px; }
                .${id}-slot { background-color: #f5f9fc; border-radius: ${slotRoundedCorners}; min-height: 0; overflow: hidden; }
                .${id}-slot-auto { min-height: 120px; }
                .${id}-slot-inner { height: 100%; overflow: hidden; }
                @container (max-width: 500px) { .${id}-shop-grid { min-height: auto; } .${id}-slot-auto { min-height: 100px; } }
              `}</style>
              {(sectionTitle || sectionCtaContent) && (
                <div className={`flex ${typeof headerContentArrangement === 'string' ? headerContentArrangement : 'flex-col'} w-full font-bold mb-4 ${getAlignmentClass()} items-center ${id}-container-title-color`}>
                  {sectionTitle && <span className={`flex flex-inline ${id}-belk-text-clamp-section-title`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">{sectionTitle}</span>}
                  {sectionCtaContent && (
                    <SectionCtaButton variant={sectionCtaVariant} href={sectionCtaUrl} data-aali={sectionCtaAdobeTag} className={`ml-auto ${id}-belk-text-clamp-section-title ${id}-section-cta-color ${sectionCtaVariant === 'solid' ? `${id}-section-cta-background-color` : ''}`}>
                      <span data-bildit-var-name="sectionCtaContent" data-bildit-var-type="RichText">{sectionCtaContent}</span>
                    </SectionCtaButton>
                  )}
                </div>
              )}
              <div className={`${id}-shop-grid`}>
                <div className={`${id}-slot ${slot1HeightPx == null ? `${id}-slot-auto` : ''}`} style={slot1HeightPx != null ? { height: `${slot1HeightPx}px` } : undefined}><div className={`${id}-slot-inner`}><Slot1 /></div></div>
                <div className={`${id}-slot ${slot2HeightPx == null ? `${id}-slot-auto` : ''}`} style={slot2HeightPx != null ? { height: `${slot2HeightPx}px` } : undefined}><div className={`${id}-slot-inner`}><Slot2 /></div></div>
                <div className={`${id}-slot ${slot3HeightPx == null ? `${id}-slot-auto` : ''}`} style={slot3HeightPx != null ? { height: `${slot3HeightPx}px` } : undefined}><div className={`${id}-slot-inner`}><Slot3 /></div></div>
              </div>
            </div>
          </PictureResponsiveImage>
        </div>
      </ResponsiveContainer>
    </>
  );
}

const Slot1 = $(slot1:BannerId)
const Slot2 = $(slot2:BannerId)
const Slot3 = $(slot3:BannerId)