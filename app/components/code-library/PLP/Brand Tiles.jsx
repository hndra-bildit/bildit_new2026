import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

const BrandTilesStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-margin-top: ${marginTop}px;
          --${id}-margin-bottom: ${marginBottom}px;
          --${id}-max-width: ${Number.isSafeInteger(+maxWidth) && +maxWidth > 0 ? `${maxWidth}px` : 'none'};
        }
      }
    }
  `}</style>
);

function buildImageUrl(slug, preset = '$DWP_PHOTO$', isMobile = false, withTablet = false) {
    if (!slug || !preset) {
      console.warn("Missing slug or preset for image URL construction");
      return null;
    }

    const contentType = preset.includes("RAW") ? "content" : "image";

    slug = withTablet ? `${slug}_t` : isMobile ? `${slug}_m` : slug;

    return `https://belk.scene7.com/is/${contentType}/Belk/${slug}?${preset}`;
}

// I suspect logos will be flattened into image and not separate, then we can kill logoAlt + logoImage

// group {Layout}
const marginTop = $(marginTop:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const marginBottom = $(marginBottom:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");
const maxWidth = $(maxWidth:Number);
// endgroup

// group {Brand 1}
const image1 = $(brandImage1:String='wk25_072125_newcms_homepage_fob_1');
const imageAlt1 = $(brandImageAlt1:String="");
const link1 = $(brandLink1:String='/';required=true);
const linkTag1 = $(brandAdobeTag1:String="";required=true);
const label1 = $(brandLabel1:RichText="Fan Gear";color="#000000");
// endgroup

// group {Brand 2}
const image2 = $(brandImage2:String='wk25_072125_newcms_homepage_fob_2');
const imageAlt2 = $(brandImageAlt2:String="");
const link2 = $(brandLink2:String='/';required=true);
const linkTag2 = $(brandAdobeTag2:String="";required=true);
const label2 = $(brandLabel2:RichText="Denim";color="#000000");
// endgroup

// group {Brand 3}
const image3 = $(brandImage3:String='wk25_072125_newcms_homepage_fob_3');
const imageAlt3 = $(brandImageAlt3:String="");
const link3 = $(brandLink3:String='/';required=true);
const linkTag3 = $(brandAdobeTag3:String="";required=true);
const label3 = $(brandLabel3:RichText="Boots";color="#000000");
// endgroup

// group {Brand 4}
const image4 = $(brandImage4:String='wk25_072125_newcms_homepage_fob_4');
const imageAlt4 = $(brandImageAlt4:String="");
const link4 = $(brandLink4:String='/';required=true);
const linkTag4 = $(brandAdobeTag4:String="";required=true);
const label4 = $(brandLabel4:RichText="Dresses";color="#000000");
// endgroup

// group {Brand 5}
const image5 = $(brandImage5:String='wk25_072125_newcms_homepage_fob_5');
const imageAlt5 = $(brandImageAlt5:String="");
const link5 = $(brandLink5:String='/';required=true);
const linkTag5 = $(brandAdobeTag5:String="";required=true);
const label5 = $(brandLabel5:RichText="Women";color="#000000");
// endgroup

// group {Brand 6}
const image6 = $(brandImage6:String='wk25_072125_newcms_homepage_fob_6');
const imageAlt6 = $(brandImageAlt6:String="");
const link6 = $(brandLink6:String='/';required=true);
const linkTag6 = $(brandAdobeTag6:String="";required=true);
const label6 = $(brandLabel6:RichText="Handbags";color="#000000");
// endgroup

const brandTiles = [
  { brandImage: image1, brandImageAlt: imageAlt1, brandLink: link1, brandLinkTag: linkTag1, imageSlugVarName: 'brandImage1', label: label1, labelVarName: 'brandLabel1' },
  { brandImage: image2, brandImageAlt: imageAlt2, brandLink: link2, brandLinkTag: linkTag2, imageSlugVarName: 'brandImage2', label: label2, labelVarName: 'brandLabel2' },
  { brandImage: image3, brandImageAlt: imageAlt3, brandLink: link3, brandLinkTag: linkTag3, imageSlugVarName: 'brandImage3', label: label3, labelVarName: 'brandLabel3' },
  { brandImage: image4, brandImageAlt: imageAlt4, brandLink: link4, brandLinkTag: linkTag4, imageSlugVarName: 'brandImage4', label: label4, labelVarName: 'brandLabel4' },
  { brandImage: image5, brandImageAlt: imageAlt5, brandLink: link5, brandLinkTag: linkTag5, imageSlugVarName: 'brandImage5', label: label5, labelVarName: 'brandLabel5' },
  { brandImage: image6, brandImageAlt: imageAlt6, brandLink: link6, brandLinkTag: linkTag6, imageSlugVarName: 'brandImage6', label: label6, labelVarName: 'brandLabel6' }
]

const BrandTile = ({ data, index, count, id }) => {
  const {
    brandImage,
    brandImageAlt,
    brandLink,
    brandLinkTag,
    imageSlugVarName,
    label,
    labelVarName
  } = data
  const bgImage = buildImageUrl(brandImage)
  const bgImageMobile = buildImageUrl(brandImage, undefined, true)
  const bgImageTablet = buildImageUrl(brandImage, undefined, false, true)

  if (!bgImage) return null

  const mobileSpan = index === count - 1 && count % 2 === 1
  const spanClass = mobileSpan ? `${id}-brand-end-tile-center` : ''

  return (
    <SafeLink className="flex flex-col items-center justify-self-center w-full" data-aali={brandLinkTag} href={brandLink}>
      <div
        className={`${id}-brand-tile aspect-square w-full relative justify-self-center ${spanClass}`}
        {...(imageSlugVarName ? { 'data-bildit-var-name': imageSlugVarName, 'data-bildit-var-type': 'String' } : {})}
      >
        <picture>
          <source media="(max-width: 40rem)" srcSet={bgImageMobile} />
          <source media="(min-width: 40.001rem) and (max-width: 64rem)" srcSet={bgImageTablet} />
          <source media="(min-width: 64.001rem) and (pointer: coarse)" srcSet={bgImageTablet} />
          <source media="(min-width: 64.001rem) and (pointer: fine)" srcSet={bgImage} />
          <Image className='rounded-2xl' fill={true} src={bgImageMobile || bgImageTablet || bgImage} alt={brandImageAlt} />
        </picture>
      </div>
      {label != null && String(label).trim() !== '' && (
        <p
          className={`mt-2 text-center font-bold text-black text-sm md:text-base ${id}-brand-label`}
          data-bildit-var-name={labelVarName}
          data-bildit-var-type="RichText"
        >
          {label}
        </p>
      )}
    </SafeLink>
  )
}

const BrandTiles = ({ id }) => {
  const mtClass = `mt-${+marginTop / 4}`
  const mbClass = `mb-${+marginBottom / 4}`
  const filteredTiles = brandTiles.filter((tile) =>
    tile.brandImage?.length > 0
  )
  const tilesCount = filteredTiles.length
  const tilesToRender = filteredTiles.map((tile, index) =>
    <BrandTile key={`${tile.brandLink}-${index}`} index={index} count={tilesCount} data={tile} id={id} />
  )

  return <>
    <BrandTilesStyleVars id={id} />
    <style>{`
        /* Tailwind fallback (combinedv1plan §1.5) */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-row { flex-direction: row; }
        .flex-wrap { flex-wrap: wrap; }
        .flex-nowrap { flex-wrap: nowrap; }
        .grid { display: grid; }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
        @media (min-width: 48rem) {
          .md\\:flex-row { flex-direction: row; }
          .md\\:flex-col { flex-direction: column; }
          .md\\:flex { display: flex; }
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (min-width: 64rem) {
          .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .lg\\:grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)); }
          .lg\\:grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
        }

        .${id}-brand-tile {
            max-height: var(--${id}-max-width);
            max-width: var(--${id}-max-width);
        }
        .${id}-brand-label {
            color: #000;
            font-weight: 700;
        }

        @media (max-width: 48rem) {
            .${id}-brand-tile {
                max-height: none;
                max-width: none;
            }
            .${id}-brand-end-tile-center {
                left: 50%;
            }
        }
    `}</style>
    <div className={`w-full mx-auto px-2 md:px-0 py-4 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-5 ${mtClass} ${mbClass}`}>
      <div className='mx-auto'>
        <div className={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${tilesCount} gap-4 relative`}>
          {tilesToRender}
        </div>
      </div>
    </div>
  </>
};

export default BrandTiles;