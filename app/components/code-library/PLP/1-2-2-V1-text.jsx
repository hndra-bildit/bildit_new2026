import React from "react";
import Image from 'next/image';
import Link from 'next/link';

function buildImageUrl(slug, preset = '$DWP_PHOTO$', isMobile = false, withTablet = false) {
    if (!slug || !preset) {
      return undefined;
    }

    const contentType = preset.includes("RAW") ? "content" : "image";

    slug = withTablet ? `${slug}_t` : isMobile ? `${slug}_m` : slug;

    return `https://belk.scene7.com/is/${contentType}/Belk/${slug}?${preset}`;
}

// group { Slot 1 Image }
const slot1ImagePreset = $(slot1ImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const slot1ImageAemSlug = $(slot1ImageAemSlug:String="wkxx_2025_test_1_2_2_p1");
const slot1ImageAltText = $(slot1ImageAltText:String="");
const slot1ImageAdobeTag = $(slot1ImageAdobeTag:String="";required=true);
const slot1ImageLinkText = $(slot1ImageLinkText:RichText="");
const slot1ImageLink = $(slot1ImageLink:String="/";required=true);
// endgroup

// group { Slot 2 }
const slot2ImagePreset = $(slot2ImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const slot2ImageAemSlug = $(slot2ImageAemSlug:String="wkxx_2025_test_1_2_2_p2");
const slot2ImageAltText = $(slot2ImageAltText:String="");
const slot2ImageAdobeTag = $(slot2ImageAdobeTag:String="";required=true);
const slot2ImageLinkText = $(slot2ImageLinkText:RichText="");
const slot2ImageLink = $(slot2ImageLink:String="/";required=true);
const slot2Eyebrow = $(slot2Eyebrow:RichText="");
const slot2Header = $(slot2Header:RichText="");
const slot2Subheader = $(slot2Subheader:RichText="");
// endgroup

// group { Slot 3 }
const slot3ImagePreset = $(slot3ImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const slot3ImageAemSlug = $(slot3ImageAemSlug:String="wkxx_2025_test_1_2_2_p3");
const slot3ImageAltText = $(slot3ImageAltText:String="");
const slot3ImageAdobeTag = $(slot3ImageAdobeTag:String="";required=true);
const slot3ImageLinkText = $(slot3ImageLinkText:RichText="");
const slot3ImageLink = $(slot3ImageLink:String="/";required=true);
const slot3Eyebrow = $(slot3Eyebrow:RichText="");
const slot3Header = $(slot3Header:RichText="");
const slot3Subheader = $(slot3Subheader:RichText="");
// endgroup

// group { Slot 4 }
const slot4ImagePreset = $(slot4ImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const slot4ImageAemSlug = $(slot4ImageAemSlug:String="wkxx_2025_test_1_2_2_p4");
const slot4ImageAltText = $(slot4ImageAltText:String="");
const slot4ImageAdobeTag = $(slot4ImageAdobeTag:String="";required=true);
const slot4ImageLinkText = $(slot4ImageLinkText:RichText="");
const slot4ImageLink = $(slot4ImageLink:String="/";required=true);
const slot4Eyebrow = $(slot4Eyebrow:RichText="");
const slot4Header = $(slot4Header:RichText="");
const slot4Subheader = $(slot4Subheader:RichText="");
// endgroup

// group { Slot 5 }
const slot5ImagePreset = $(slot5ImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const slot5ImageAemSlug = $(slot5ImageAemSlug:String="wkxx_2025_test_1_2_2_p5");
const slot5ImageAltText = $(slot5ImageAltText:String="");
const slot5ImageAdobeTag = $(slot5ImageAdobeTag:String="";required=true);
const slot5ImageLinkText = $(slot5ImageLinkText:RichText="");
const slot5ImageLink = $(slot5ImageLink:String="/";required=true);
const slot5Eyebrow = $(slot5Eyebrow:RichText="");
const slot5Header = $(slot5Header:RichText="");
const slot5Subheader = $(slot5Subheader:RichText="");
// endgroup

/// group { Layout }
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-8");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const horizontalGutterSize = $(horizontalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Medium|24,Regular|32,Big|48,Huge|64,Mega|80]="16");
const verticalGutterSize = $(verticalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Medium|24,Regular|32,Big|48,Huge|64,Mega|80]="24");
// endgroup

function createStaticId() {
    const propsString = [
      slot1ImageAemSlug,
      slot2ImageAemSlug,
      slot3ImageAemSlug,
      slot4ImageAemSlug,
      slot5ImageAemSlug,
      slot1ImageLink,
      slot2ImageLink,
      slot3ImageLink,
      slot4ImageLink,
      slot5ImageLink,
      topMargin,
      bottomMargin,
      horizontalGutterSize,
      verticalGutterSize,
    ]
      .filter(Boolean)
      .join("-");

    let hash = 0;
    for (let i = 0; i < propsString.length; i++) {
      const char = propsString.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }

    return Math.abs(hash).toString(16).padStart(8, "0");
}

const cn = (className) => `B-${className ?? ''}-${createStaticId()}`;

const StyleTag = () => (
  <style>
    {`
      /* Tailwind fallback (combinedv1plan §1.5) */
      .flex { display: flex; }
      .flex-col { flex-direction: column; }
      .flex-row { flex-direction: row; }
      .flex-wrap { flex-wrap: wrap; }
      .flex-nowrap { flex-wrap: nowrap; }

      .${cn("container")} {
        .eyebrow,
        .header,
        .subheader {
          letter-spacing: -.025em;
          line-height: 1.15;
        }

        .cta {
          border-bottom: 1px solid currentColor;
          padding-bottom: .35em;
        }
      }

      @media (max-width: 767px) {
        .${cn("container")} {
          .eyebrow {
            font-size: .875rem;
          }
          .header {
            font-size: 1.125rem;
          }
          .subheader {
            font-size: 1rem;
          }
          .cta {
            font-size: .9375rem;
          }
        }
      }

      @media (min-width: 40.001rem) and (max-width: 64rem) {
        .${cn("container")} {
          .eyebrow {
            font-size: 1rem;
          }
          .header {
            font-size: 2rem;
          }
          .subheader {
            font-size: 1.25rem;
          }
          .cta {
            font-size: 1.125rem;
          }
        }
      }

      @media (min-width: 64.001rem) and (pointer: coarse) {
        .${cn("container")} {
          .eyebrow {
            font-size: 1rem;
          }
          .header {
            font-size: clamp(1.5rem, -.2826rem + 2.7826vw, 1.75rem);
          }
          .subheader {
            font-size: clamp(1rem, .1087rem + 1.3913vw, 1.5rem);
          }
          .cta {
            font-size: clamp(.875rem, 2.5vw, 1rem);
          }
        }
      }

      @media (min-width: 64.001rem) and (pointer: fine) {
        .${cn("container")} {
          .imageCopy { max-width: 60%; }
          .eyebrow {
            font-size: clamp(1rem, .7778rem + .3472vw, 1.125rem);
          }
          .header {
            font-size: clamp(1.5rem, -.2826rem + 2.7826vw, 1.75rem);
          }
          .subheader {
            font-size: clamp(1rem, .1087rem + 1.3913vw, 1.5rem);
          }
          .cta {
            font-size: clamp(.875rem, .6522rem + .3478vw, 1.25rem);
          }
        }
      }

      @media (max-width: 64rem) and (min-resolution: 2x) {
        .tb-flex-wrap {
          flex-wrap: wrap;
        }
        .tb-flex {
          flex-direction: row;
        }
        .tb-basis-full {
          flex-basis: 100%;
        }
      }

      @media (min-width: 64.001rem) {
        .lg-flex-nowrap {
          flex-wrap: nowrap;
        }
        .lg-flex-col {
          flex-direction: column;
        }
        .lg-basis-one-third {
          flex-basis: 33.333333%;
        }
      }
    `}
  </style>
);

const Slot = ({ className = '', data, imageSlugVarName, linkTextVarName, eyebrowVarName, headerVarName, subheaderVarName }) => {
  const { alt, eyebrow, header, href, link, preset, slug, subheader, tag } = data
  const mobileImage = buildImageUrl(slug, preset, true)
  const tabletImage = buildImageUrl(slug, preset, false, true)
  const destkopImage = buildImageUrl(slug, preset)
  const hasLink = href?.length > 0
  const imgOnlyClass = !header && !subheader ? 'imgOnly' : ''
  const content = (
    <div className={`${className} relative flex overflow-clip`} {...(imageSlugVarName ? { 'data-bildit-var-name': imageSlugVarName, 'data-bildit-var-type': 'String' } : {})}>
      <picture>
          {mobileImage && <source media="(max-width: 40rem)" srcSet={mobileImage} />}
          {tabletImage && <source media="(min-width: 40rem) and (max-width: 64rem)" srcSet={tabletImage} />}
          {tabletImage && <source media="(max-width: 64rem) and (min-resolution: 2x)" srcSet={destkopImage} />}
          {tabletImage && <source media="(min-width: 64.001rem) and (pointer: coarse)" srcSet={tabletImage} />}
          {destkopImage && <source media="(min-width: 64.001rem) and (pointer: fine)" srcSet={destkopImage} />}
          <img
            alt={alt}
            className={`${imgOnlyClass} block h-max w-full object-cover rounded-2xl`}
            src={mobileImage || tabletImage || destkopImage || ''}
          />
      </picture>
      {imgOnlyClass === '' && <div className={`w-full imageCopy absolute flex flex-col top-0 left-0 p-4`}>
        {eyebrow?.length > 0 && <h4 className='eyebrow font-bold' {...(eyebrowVarName ? { 'data-bildit-var-name': eyebrowVarName, 'data-bildit-var-type': 'RichText' } : {})}>{eyebrow}</h4>}
        {header?.length > 0 && <h2 className='header whitespace-pre-line font-bold' {...(headerVarName ? { 'data-bildit-var-name': headerVarName, 'data-bildit-var-type': 'RichText' } : {})}>{header}</h2>}
        {subheader?.length > 0 && <h3 className='subheader whitespace-pre-line' {...(subheaderVarName ? { 'data-bildit-var-name': subheaderVarName, 'data-bildit-var-type': 'RichText' } : {})}>{subheader}</h3>}
        {hasLink && <div><span className="cta belk-text-s md:belk-text-m font-bold" {...(linkTextVarName ? { 'data-bildit-var-name': linkTextVarName, 'data-bildit-var-type': 'RichText' } : {})}>{link || 'Shop Now'}</span></div>}
      </div>}
    </div>
  )

  return hasLink
    ? <Link className='contents' data-aali={tag} href={href} title={link}>{content}</Link>
    : content
}

const OneTwoTwo = () => {
  const horizGapClass = `gap-${+horizontalGutterSize / 4}`;
  const vertGapClass = `gap-${+verticalGutterSize / 4}`;

  return (
    <>
      <StyleTag />
      <div className={`relative w-full ${cn("container")} flex flex-wrap tb-flex-wrap lg-flex-nowrap mx-auto px-4 gap-4 md:${vertGapClass} ${topMargin} ${bottomMargin} [&>div]:md:max-w-[var(--breakpoint-3xl)] overflow-hidden`}>
        <div className={`${cn("container")} flex flex-row tb-flex lg-flex-col basis-full tb-basis-full lg-basis-one-third justify-center`}>
          <Slot
            data={{
              alt: slot1ImageAltText,
              href: slot1ImageLink,
              link: slot1ImageLinkText,
              preset: slot1ImagePreset,
              slug: slot1ImageAemSlug,
              tag: slot1ImageAdobeTag,
            }}
            imageSlugVarName="slot1ImageAemSlug"
            linkTextVarName="slot1ImageLinkText"
          />
        </div>
        <div className={`flex flex-row tb-flex lg-flex-col basis-full tb-basis-full lg-basis-one-third gap-4 md:${horizGapClass} self-center`}>
            <div className="basis-1/2">
                <Slot data={{
                  alt: slot2ImageAltText,
                  eyebrow: slot2Eyebrow,
                  href: slot2ImageLink,
                  link: slot2ImageLinkText,
                  preset: slot2ImagePreset,
                  slug: slot2ImageAemSlug,
                  tag: slot2ImageAdobeTag,
                  header: slot2Header,
                  subheader: slot2Subheader,
                }} imageSlugVarName="slot2ImageAemSlug" linkTextVarName="slot2ImageLinkText" eyebrowVarName="slot2Eyebrow" headerVarName="slot2Header" subheaderVarName="slot2Subheader" />
            </div>
            <div className="basis-1/2">
                <Slot data={{
                  alt: slot3ImageAltText,
                  eyebrow: slot3Eyebrow,
                  href: slot3ImageLink,
                  link: slot3ImageLinkText,
                  preset: slot3ImagePreset,
                  slug: slot3ImageAemSlug,
                  tag: slot3ImageAdobeTag,
                  header: slot3Header,
                  subheader: slot3Subheader,
                }} imageSlugVarName="slot3ImageAemSlug" linkTextVarName="slot3ImageLinkText" eyebrowVarName="slot3Eyebrow" headerVarName="slot3Header" subheaderVarName="slot3Subheader" />
            </div>
        </div>
        <div className={`flex flex-row tb-flex lg-flex-col basis-full tb-basis-full lg-basis-one-third gap-4 md:${horizGapClass} self-center`}>
            <div className="basis-1/2">
                <Slot data={{
                  alt: slot4ImageAltText,
                  eyebrow: slot4Eyebrow,
                  href: slot4ImageLink,
                  link: slot4ImageLinkText,
                  preset: slot4ImagePreset,
                  slug: slot4ImageAemSlug,
                  tag: slot4ImageAdobeTag,
                  header: slot4Header,
                  subheader: slot4Subheader,
                }} imageSlugVarName="slot4ImageAemSlug" linkTextVarName="slot4ImageLinkText" eyebrowVarName="slot4Eyebrow" headerVarName="slot4Header" subheaderVarName="slot4Subheader" />
            </div>
            <div className="basis-1/2">
                <Slot data={{
                  alt: slot5ImageAltText,
                  eyebrow: slot5Eyebrow,
                  href: slot5ImageLink,
                  link: slot5ImageLinkText,
                  preset: slot5ImagePreset,
                  slug: slot5ImageAemSlug,
                  tag: slot5ImageAdobeTag,
                  header: slot5Header,
                  subheader: slot5Subheader,
                }} imageSlugVarName="slot5ImageAemSlug" linkTextVarName="slot5ImageLinkText" eyebrowVarName="slot5Eyebrow" headerVarName="slot5Header" subheaderVarName="slot5Subheader" />
            </div>
        </div>
      </div>
    </>
  );
};

export default OneTwoTwo;