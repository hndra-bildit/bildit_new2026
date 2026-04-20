import React from 'react'

function buildImageUrl(slug, preset = '$DWP_PHOTO$', isMobile = false, withTablet = false) {
    if (!slug || !preset) return null;

    const baseUrl = "https://belk.scene7.com/is";
    const contentType = preset.includes("RAW") ? "content" : "image";

    slug = withTablet ? `${slug}_t` : isMobile ? `${slug}_m` : slug;

    return `${baseUrl}/${contentType}/Belk/${slug}?${preset}`;
}

const bgColor = $(backgroundColor:Color="#fcf4ed");
const textBlockBackground = $(textBlockBackground:Color="#D3A295");
const textBlockForeground = $(textBlockForeground:Color="#ffffff");
const image = $(breadcrumbImage:String="wk31_2025_chan_handbags_header_1");
const imageHeight = $(imageHeight:Number="272";required=true);
const altText = $(imageAlt:String="");

const StyleTag = () => (
    <style>
      {`
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

        nav[aria-label="breadcrumb"].text-muted-foreground {
            display: none;
        }
        .bildit-bc-outer {
            background-color: ${bgColor};
        }
        .bildit-bc-text-block {
            background-color: ${textBlockBackground};
            color: ${textBlockForeground};
        }
        .bildit-bc-text-block .bildit-bc-link {
            color: inherit;
            text-decoration: none;
            outline: none;
        }
        .bildit-bc-text-block .bildit-bc-link:focus,
        .bildit-bc-text-block .bildit-bc-link:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 2px;
        }
        .bildit-bc-text-block .bildit-bc-link:hover span {
            text-decoration: underline;
            text-decoration-color: currentColor;
        }
        .crumb-container {
            min-height: ${imageHeight / 1.5}px;
        }
        .bildit-bc-col-half {
            width: 100%;
        }
        .bildit-bc-image {
            background-image: url('${buildImageUrl(image, '$DWP_PHOTO$', true)}');
            background-position: center center;
            background-size: cover;
            min-height: ${Math.max(200, imageHeight / 2)}px;
            width: 100%;
        }
        @media (min-width: 48rem) {
            .bildit-bc-col-half {
                flex: 1 1 0;
                min-width: 0;
                max-width: 50%;
                width: 50%;
            }
            .bildit-bc-image {
                background-image: url('${buildImageUrl(image, '$DWP_PHOTO$', false, true)}');
                background-position: center center;
                min-height: 0;
                height: 100%;
            }
            .crumb-container {
                min-height: ${imageHeight / 1.25}px;
                height: ${imageHeight / 1.25}px;
            }
        }
        @media (min-width: 80rem) {
            .bildit-bc-image {
                background-image: url('${buildImageUrl(image)}');
                background-position: center center;
            }
            .crumb-container {
                min-height: ${imageHeight}px;
                height: ${imageHeight}px;
            }
        }
      `}
    </style>
  )

  const Breadcrumbs = ({ breadcrumbs = [], cgid }) => {
    const crumbLen = breadcrumbs.length
    const finalCrumb = breadcrumbs.at(-1)
    const category = finalCrumb?.name

    return (
        <>
            <StyleTag />
            <div className='crumb-container bildit-bc-outer flex flex-col md:flex-row md:items-stretch mx-auto max-w-[var(--breakpoint-3xl)] overflow-hidden'>
                <div className='bildit-bc-text-block bildit-bc-col-half flex min-h-0 w-full flex-col justify-center gap-2 px-6 py-8 md:px-12 lg:px-20 md:py-6'>
                    {category && <h1 className='belk-text-6xl font-bold'>{category}</h1>}
                    {crumbLen > 0 && (
                    <nav aria-label='breadcrumb' className='contents' data-cgid={cgid}>
                        <ol
                            className='flex flex-wrap items-center gap-1.5'
                            itemScope itemType='http://schema.org/BreadcrumbList'
                        >
                            {breadcrumbs.map((breadcrumb, index) => {
                                const isLast = index === crumbLen - 1
                                const { href, name } = breadcrumb

                                if (isLast) {
                                    return <span
                                        key={href}
                                        aria-current='page'
                                        className='belk-text-xs font-normal'
                                    >
                                        {name}
                                    </span>
                                }

                                return (
                                    <li
                                        key={href}
                                        className='inline-flex gap-1'
                                        itemProp='itemListElement'
                                        itemScope
                                        itemType='http://schema.org/ListItem'
                                    >
                                        <a
                                            href={href}
                                            className='contents belk-text-xs bildit-bc-link'
                                            itemScope
                                            itemType='http://schema.org/Thing'
                                            itemProp='item'
                                        >
                                            <span
                                                title={`Go to ${name}`}
                                                className='flex pr-1'
                                                itemProp='name'
                                            >
                                                {name}
                                            </span>
                                        </a>
                                        <span
                                            role='presentation'
                                            aria-hidden='true'
                                            className='leading-none'
                                        >
                                            <span>/</span>
                                        </span>
                                    </li>
                                )
                            })}
                        </ol>
                    </nav>
                    )}
                </div>
                {image && (
                    <div
                        aria-label={altText}
                        role="img"
                        className='bildit-bc-image bildit-bc-col-half min-h-0 bg-no-repeat md:min-h-0'
                        data-bildit-var-name="breadcrumbImage"
                        data-bildit-var-type="String"
                    />
                )}
            </div>
        </>
    );
};

export default Breadcrumbs;