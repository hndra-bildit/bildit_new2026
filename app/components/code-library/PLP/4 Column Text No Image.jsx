// Modified CMS: Text-only 4-column layout with template variables and responsive support
"use client"
import React from 'react';
import Link from 'next/link';

// group { Section Settings }
const sectionTitle = $(sectionTitle:RichText="Deals You Need Now";color="#000000");
const sectionAlignment = $(sectionAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#264547");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-8");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
const width = $(width:Dropdown[Full Width|full,Inset|max-w-inset]="full");
const sectionCtaContent = $(sectionCtaContent:RichText="Shop All";color="#000000");
const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
// endgroup

// group { Column Settings }
const columnAlignment = $(columnAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-center");
// endgroup

// group { Font Settings }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:String="14");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:String="16");
const headlineMinimumFontSize = $(headlineMinimumFontSize:String="24");
const headlineMaximumFontSize = $(headlineMaximumFontSize:String="54");
const subheadMinimumFontSize = $(subheadMinimumFontSize:String="16");
const subheadMaximumFontSize = $(subheadMaximumFontSize:String="28");
const ctaMinimumFontSize = $(ctaMinimumFontSize:String="16");
const ctaMaximumFontSize = $(ctaMaximumFontSize:String="20");
const categoryMinimumFontSize = $(categoryMinimumFontSize:String="16");
const categoryMaximumFontSize = $(categoryMaximumFontSize:String="28");
// endgroup

// group { CTA Settings }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
// endgroup

// group { First Column Content }
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="";color="#000000");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="Up to 60% Off";color="#000000");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="Luggage*";color="#000000");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="Shop Now";color="#000000");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
const firstColumnCategory = $(firstColumnCategory:RichText="";color="#000000");
// endgroup

// group { Second Column Content }
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="";color="#000000");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="Up to 60% Off";color="#000000");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="Women's Apparel*";color="#000000");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop Now";color="#000000");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
const secondColumnCategory = $(secondColumnCategory:RichText="";color="#000000");
// endgroup

// group { Third Column Content }
const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText="";color="#000000");
const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText="Up to 65% Off";color="#000000");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText="Men's & Kids' Apparel*";color="#000000");
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText="Shop Now";color="#000000");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
const thirdColumnCategory = $(thirdColumnCategory:RichText="";color="#000000");
// endgroup

// group { Fourth Column Content }
const fourthColumnEyebrowContent = $(fourthColumnEyebrowContent:RichText="";color="#000000");
const fourthColumnHeadlineContent = $(fourthColumnHeadlineContent:RichText="Up to 50% Off";color="#000000");
const fourthColumnSubheadContent = $(fourthColumnSubheadContent:RichText="Shoes & Accessories*";color="#000000");
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText="Shop Now";color="#000000");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
const fourthColumnCategory = $(fourthColumnCategory:RichText="";color="#000000");
// endgroup

const columns = [
  {
    eyebrow: firstColumnEyebrowContent,
    headline: firstColumnHeadlineContent,
    subhead: firstColumnSubheadContent,
    cta: {
      content: firstColumnCtaContent,
      url: firstColumnCtaUrl,
      adobeTag: firstColumnCtaAdobeTag
    },
    category: firstColumnCategory
  },
  {
    eyebrow: secondColumnEyebrowContent,
    headline: secondColumnHeadlineContent,
    subhead: secondColumnSubheadContent,
    cta: {
      content: secondColumnCtaContent,
      url: secondColumnCtaUrl,
      adobeTag: secondColumnCtaAdobeTag
    },
    category: secondColumnCategory
  },
  {
    eyebrow: thirdColumnEyebrowContent,
    headline: thirdColumnHeadlineContent,
    subhead: thirdColumnSubheadContent,
    cta: {
      content: thirdColumnCtaContent,
      url: thirdColumnCtaUrl,
      adobeTag: thirdColumnCtaAdobeTag
    },
    category: thirdColumnCategory
  },
  {
    eyebrow: fourthColumnEyebrowContent,
    headline: fourthColumnHeadlineContent,
    subhead: fourthColumnSubheadContent,
    cta: {
      content: fourthColumnCtaContent,
      url: fourthColumnCtaUrl,
      adobeTag: fourthColumnCtaAdobeTag
    },
    category: fourthColumnCategory
  }
];

const textAlignment = {
  'items-start': 'text-left',
  'items-center': 'text-center',
  'items-end': 'text-right',
};

const TailwindFallbackStyles = () => (
  <style>{`
    /* Tailwind fallback (combinedv1plan §1.5) */
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .flex-row { flex-direction: row; }
    .flex-wrap { flex-wrap: wrap; }
    .flex-nowrap { flex-wrap: nowrap; }
    @media (min-width: 48rem) {
      .md\\:flex-row { flex-direction: row; }
      .md\\:flex-col { flex-direction: column; }
      .md\\:flex { display: flex; }
    }
  `}</style>
);

const FourColumnTextOnlyCMS = () => {
  const alignment = typeof sectionAlignment === 'string' ? sectionAlignment : 'items-center';
  return (
  <>
  <TailwindFallbackStyles />
  <div className={`w-full ${width} ${topMargin} ${bottomMargin} mx-auto px-4 py-8`} style={{ backgroundColor: sectionBackgroundColor }}>
    <div className="flex flex-row flex-wrap items-center justify-between gap-4 mb-6">
      {sectionTitle && (
        <h2
          className="flex-1 text-center text-2xl md:text-3xl font-bold min-w-0"
          data-bildit-var-name="sectionTitle"
          data-bildit-var-type="RichText"
        >
          {sectionTitle}
        </h2>
      )}
      {sectionCtaContent && sectionCtaUrl && (
        <Link
          href={sectionCtaUrl}
          data-aali={sectionCtaAdobeTag}
          className="shrink-0 px-5 py-2.5 rounded-lg font-normal border border-gray-800 bg-white text-gray-900 hover:opacity-90 transition-opacity"
          data-bildit-var-name="sectionCtaContent"
          data-bildit-var-type="RichText"
        >
          {sectionCtaContent}
        </Link>
      )}
    </div>
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${textAlignment[columnAlignment]}`} style={{ fontFamily: fontFamily ? `"${fontFamily}"` : undefined }}>
      {columns.map((col, idx) => {
        const eyebrowVars = ['firstColumnEyebrowContent', 'secondColumnEyebrowContent', 'thirdColumnEyebrowContent', 'fourthColumnEyebrowContent'];
        const headlineVars = ['firstColumnHeadlineContent', 'secondColumnHeadlineContent', 'thirdColumnHeadlineContent', 'fourthColumnHeadlineContent'];
        const subheadVars = ['firstColumnSubheadContent', 'secondColumnSubheadContent', 'thirdColumnSubheadContent', 'fourthColumnSubheadContent'];
        const ctaContentVars = ['firstColumnCtaContent', 'secondColumnCtaContent', 'thirdColumnCtaContent', 'fourthColumnCtaContent'];
        const categoryVars = ['firstColumnCategory', 'secondColumnCategory', 'thirdColumnCategory', 'fourthColumnCategory'];
        return (
        <Link
          key={idx}
          href={col.cta.url}
          data-aali={col.cta.adobeTag}
          className={`flex flex-col justify-center ${columnAlignment} ${textAlignment[columnAlignment]} p-4 md:p-6 rounded-xl bg-white shadow-sm min-h-[140px] md:min-h-[200px]`}
        >
          {col.eyebrow && (
            <p className="font-bold text-sm mb-1" style={{ fontSize: `clamp(${eyebrowMinimumFontSize}px, 1.5vw, ${eyebrowMaximumFontSize}px)` }} data-bildit-var-name={eyebrowVars[idx]} data-bildit-var-type="RichText">{col.eyebrow}</p>
          )}
          <h2 className="my-1 font-bold" style={{ fontSize: `clamp(${headlineMinimumFontSize}px, 1.5vw, ${headlineMaximumFontSize}px)` }} data-bildit-var-name={headlineVars[idx]} data-bildit-var-type="RichText">{col.headline}</h2>
          <p className="my-1 font-normal" style={{ fontSize: `clamp(${subheadMinimumFontSize}px, 1.5vw, ${subheadMaximumFontSize}px)` }} data-bildit-var-name={subheadVars[idx]} data-bildit-var-type="RichText">{col.subhead}</p>
          {col.cta.content && (
            <span className="mt-2 underline font-normal" style={{ fontSize: `clamp(${ctaMinimumFontSize}px, 1.5vw, ${ctaMaximumFontSize}px)` }} data-bildit-var-name={ctaContentVars[idx]} data-bildit-var-type="RichText">
              {col.cta.content}
            </span>
          )}
          {col.category && (
            <p className="mt-2 font-medium" style={{ fontSize: `clamp(${categoryMinimumFontSize}px, 1vw, ${categoryMaximumFontSize}px)` }} data-bildit-var-name={categoryVars[idx]} data-bildit-var-type="RichText">{col.category}</p>
          )}
        </Link>
      );})}
    </div>
  </div>
  </>
  );
};

export default FourColumnTextOnlyCMS;