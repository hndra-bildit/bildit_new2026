"use client";
  import React, { useState, useEffect, useRef, useCallback, useLayoutEffect, useMemo } from "react";
  import Link from "next/link";


  // group {1. Section Layout}
  const containerBehavior = $(containerBehavior:Dropdown[Full container width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-inset";required=true);
const topMargin = $(topMargin:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="32");
const bottomMargin = $(bottomMargin:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="32");
  const cardCornerRadius = $(cardCornerRadius:Dropdown[None|none,Small|small,Large|large]="none");
  // endgroup

  // group  {2. Section Title}
const showSectionTitle = $(showSectionTitle:Dropdown[Show|true,Hide|false]="true");
const sectionTitle = $(sectionTitle:String="Shop the Burgundy Collection");
const sectionTitleAlignment = $(sectionTitleAlignment:Dropdown[Left|left,Center|center]="left");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
  // endgroup

  // group  {3. Section CTA}
  const showSectionCta = $(showSectionCta:Dropdown[Show|true,Hide|false]="false");
  const sectionCtaText = $(sectionCtaText:String="Shop Now");
  const sectionCtaUrl = $(sectionCtaUrl:String="/";required=true);
  const sectionCtaAdobeTag = $(sectionCtaAdobeTag:String="";required=true);
  const sectionCtaVariant = $(sectionCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
  const sectionCtaBackgroundColor = $(sectionCtaBackgroundColor:Color="#000000");
  const sectionCtaMinimumFontSize = $(sectionCtaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
  const sectionCtaMaximumFontSize = $(sectionCtaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
  // endgroup

  // group  {4. Typography}
  const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
  const cardEyebrowMinimumFontSize = $(cardEyebrowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.75rem");
  const cardEyebrowMaximumFontSize = $(cardEyebrowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
  const cardHeadlineMinimumFontSize = $(cardHeadlineMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
  const cardHeadlineMaximumFontSize = $(cardHeadlineMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.125rem");
  const cardSubheadMinimumFontSize = $(cardSubheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
  const cardSubheadMaximumFontSize = $(cardSubheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
  const cardCtaMinimumFontSize = $(cardCtaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
  const cardCtaMaximumFontSize = $(cardCtaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
  const cardCtaVariant = $(cardCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
  const cardCtaBackgroundColor = $(cardCtaBackgroundColor:Color="#000000");
  // endgroup



  // group  {6. Card Image Aspect Ratios}
  const imagePreset = $(imagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
  const desktopCardImageAspectRatioWidth = $(desktopCardImageAspectRatioWidth:String="236.8");
  const desktopCardImageAspectRatioHeight = $(desktopCardImageAspectRatioHeight:String="389");
  const tabletCardImageAspectRatioWidth = $(tabletCardImageAspectRatioWidth:String="280");
  const tabletCardImageAspectRatioHeight = $(tabletCardImageAspectRatioHeight:String="350");
  const mobileCardImageAspectRatioWidth = $(mobileCardImageAspectRatioWidth:String="274");
  const mobileCardImageAspectRatioHeight = $(mobileCardImageAspectRatioHeight:String="260");
  const largeDesktopCardImageAspectRatioWidth = $(largeDesktopCardImageAspectRatioWidth:String="282.2");
  const largeDesktopCardImageAspectRatioHeight = $(largeDesktopCardImageAspectRatioHeight:String="401");
  // endgroup

  // group {7. Product Card 1}
const product1Image = $(product1Image:String="wkxx_2025_test_productcarousel_p1.jpg");
const product1ImageAlt = $(product1ImageAlt:String="Burgundy satchel, wallet, and accessories");
const product1Eyebrow = $(product1Eyebrow:String="Eyebrow");
const product1Headline = $(product1Headline:String="Headline / % Off");
const product1Subhead = $(product1Subhead:String="Sub-line");
const product1CtaText = $(product1CtaText:String="Shop Now");
const product1CtaUrl = $(product1CtaUrl:String="/";required=true);
const product1CtaAdobeTag = $(product1CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {8. Product Card 2}
const product2Image = $(product2Image:String="wkxx_2025_test_productcarousel_p2.jpg");
const product2ImageAlt = $(product2ImageAlt:String="Pointed burgundy heels on white background");
const product2Eyebrow = $(product2Eyebrow:String="Eyebrow");
const product2Headline = $(product2Headline:String="Headline / % Off");
const product2Subhead = $(product2Subhead:String="Sub-line");
const product2CtaText = $(product2CtaText:String="Shop Now");
const product2CtaUrl = $(product2CtaUrl:String="/";required=true);
const product2CtaAdobeTag = $(product2CtaAdobeTag:String="";required=true);
  // endgroup

  // group {9. Product Card 3}
const product3Image = $(product3Image:String="wkxx_2025_test_productcarousel_p3.jpg");
const product3ImageAlt = $(product3ImageAlt:String="Model wearing a burgundy dress and jacket");
const product3Eyebrow = $(product3Eyebrow:String="Eyebrow");
const product3Headline = $(product3Headline:String="Headline / % Off");
const product3Subhead = $(product3Subhead:String="Sub-line");
const product3CtaText = $(product3CtaText:String="Shop Now");
const product3CtaUrl = $(product3CtaUrl:String="/";required=true);
const product3CtaAdobeTag = $(product3CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {10. Product Card 4}
const product4Image = $(product4Image:String="wkxx_2025_test_productcarousel_p4.jpg");
const product4ImageAlt = $(product4ImageAlt:String="Burgundy flats on a cream backdrop");
const product4Eyebrow = $(product4Eyebrow:String="Eyebrow");
const product4Headline = $(product4Headline:String="Headline / % Off");
const product4Subhead = $(product4Subhead:String="Sub-line");
const product4CtaText = $(product4CtaText:String="Shop Now");
const product4CtaUrl = $(product4CtaUrl:String="/";required=true);
const product4CtaAdobeTag = $(product4CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {11. Product Card 5}
const product5Image = $(product5Image:String="wkxx_2025_test_productcarousel_p5.jpg");
const product5ImageAlt = $(product5ImageAlt:String="Close-up of burgundy crossbody bag with scarf");
const product5Eyebrow = $(product5Eyebrow:String="Eyebrow");
const product5Headline = $(product5Headline:String="Headline / % Off");
const product5Subhead = $(product5Subhead:String="Sub-line");
const product5CtaText = $(product5CtaText:String="Shop Now");
const product5CtaUrl = $(product5CtaUrl:String="/";required=true);
const product5CtaAdobeTag = $(product5CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {12. Product Card 6}
const product6Image = $(product6Image:String="wkxx_2025_test_productcarousel_p6.jpg");
const product6ImageAlt = $(product6ImageAlt:String="Detail of dusty rose heels with ankle strap");
const product6Eyebrow = $(product6Eyebrow:String="Eyebrow");
const product6Headline = $(product6Headline:String="Headline / % Off");
const product6Subhead = $(product6Subhead:String="Sub-line");
const product6CtaText = $(product6CtaText:String="Shop Now");
const product6CtaUrl = $(product6CtaUrl:String="/";required=true);
const product6CtaAdobeTag = $(product6CtaAdobeTag:String="";required=true);
  // endgroup

  // group {13. Product Card 7}
  const product7Image = $(product7Image:String="");
  const product7ImageAlt = $(product7ImageAlt:String="");
  const product7Eyebrow = $(product7Eyebrow:String="");
  const product7Headline = $(product7Headline:String="");
  const product7Subhead = $(product7Subhead:String="");
  const product7CtaText = $(product7CtaText:String="");
  const product7CtaUrl = $(product7CtaUrl:String="/";required=true);
  const product7CtaAdobeTag = $(product7CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {14. Product Card 8}
  const product8Image = $(product8Image:String="");
  const product8ImageAlt = $(product8ImageAlt:String="");
  const product8Eyebrow = $(product8Eyebrow:String="");
  const product8Headline = $(product8Headline:String="");
  const product8Subhead = $(product8Subhead:String="");
  const product8CtaText = $(product8CtaText:String="");
  const product8CtaUrl = $(product8CtaUrl:String="/";required=true);
  const product8CtaAdobeTag = $(product8CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {15. Product Card 9}
  const product9Image = $(product9Image:String="");
  const product9ImageAlt = $(product9ImageAlt:String="");
  const product9Eyebrow = $(product9Eyebrow:String="");
  const product9Headline = $(product9Headline:String="");
  const product9Subhead = $(product9Subhead:String="");
  const product9CtaText = $(product9CtaText:String="");
  const product9CtaUrl = $(product9CtaUrl:String="/";required=true);
  const product9CtaAdobeTag = $(product9CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {16. Product Card 10}
  const product10Image = $(product10Image:String="");
  const product10ImageAlt = $(product10ImageAlt:String="");
  const product10Eyebrow = $(product10Eyebrow:String="");
  const product10Headline = $(product10Headline:String="");
  const product10Subhead = $(product10Subhead:String="");
  const product10CtaText = $(product10CtaText:String="");
  const product10CtaUrl = $(product10CtaUrl:String="/";required=true);
  const product10CtaAdobeTag = $(product10CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {17. Product Card 11}
  const product11Image = $(product11Image:String="");
  const product11ImageAlt = $(product11ImageAlt:String="");
  const product11Eyebrow = $(product11Eyebrow:String="");
  const product11Headline = $(product11Headline:String="");
  const product11Subhead = $(product11Subhead:String="");
  const product11CtaText = $(product11CtaText:String="");
  const product11CtaUrl = $(product11CtaUrl:String="/";required=true);
  const product11CtaAdobeTag = $(product11CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {18. Product Card 12}
  const product12Image = $(product12Image:String="");
  const product12ImageAlt = $(product12ImageAlt:String="");
  const product12Eyebrow = $(product12Eyebrow:String="");
  const product12Headline = $(product12Headline:String="");
  const product12Subhead = $(product12Subhead:String="");
  const product12CtaText = $(product12CtaText:String="");
  const product12CtaUrl = $(product12CtaUrl:String="/";required=true);
  const product12CtaAdobeTag = $(product12CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {19. Product Card 13}
  const product13Image = $(product13Image:String="");
  const product13ImageAlt = $(product13ImageAlt:String="");
  const product13Eyebrow = $(product13Eyebrow:String="");
  const product13Headline = $(product13Headline:String="");
  const product13Subhead = $(product13Subhead:String="");
  const product13CtaText = $(product13CtaText:String="");
  const product13CtaUrl = $(product13CtaUrl:String="/";required=true);
  const product13CtaAdobeTag = $(product13CtaAdobeTag:String="";required=true);
  // endgroup

  // group {20. Product Card 14}
  const product14Image = $(product14Image:String="");
  const product14ImageAlt = $(product14ImageAlt:String="");
  const product14Eyebrow = $(product14Eyebrow:String="");
  const product14Headline = $(product14Headline:String="");
  const product14Subhead = $(product14Subhead:String="");
  const product14CtaText = $(product14CtaText:String="");
  const product14CtaUrl = $(product14CtaUrl:String="/";required=true);
  const product14CtaAdobeTag = $(product14CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {21. Product Card 15}
  const product15Image = $(product15Image:String="");
  const product15ImageAlt = $(product15ImageAlt:String="");
  const product15Eyebrow = $(product15Eyebrow:String="");
  const product15Headline = $(product15Headline:String="");
  const product15Subhead = $(product15Subhead:String="");
  const product15CtaText = $(product15CtaText:String="");
  const product15CtaUrl = $(product15CtaUrl:String="/";required=true);
  const product15CtaAdobeTag = $(product15CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {22. Product Card 16}
  const product16Image = $(product16Image:String="");
  const product16ImageAlt = $(product16ImageAlt:String="");
  const product16Eyebrow = $(product16Eyebrow:String="");
  const product16Headline = $(product16Headline:String="");
  const product16Subhead = $(product16Subhead:String="");
  const product16CtaText = $(product16CtaText:String="");
  const product16CtaUrl = $(product16CtaUrl:String="/";required=true);
  const product16CtaAdobeTag = $(product16CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {23. Product Card 17}
  const product17Image = $(product17Image:String="");
  const product17ImageAlt = $(product17ImageAlt:String="");
  const product17Eyebrow = $(product17Eyebrow:String="");
  const product17Headline = $(product17Headline:String="");
  const product17Subhead = $(product17Subhead:String="");
  const product17CtaText = $(product17CtaText:String="");
  const product17CtaUrl = $(product17CtaUrl:String="/";required=true);
  const product17CtaAdobeTag = $(product17CtaAdobeTag:String="";required=true);
  // endgroup

  // group  {24. Product Card 18}
  const product18Image = $(product18Image:String="");
  const product18ImageAlt = $(product18ImageAlt:String="");
  const product18Eyebrow = $(product18Eyebrow:String="");
  const product18Headline = $(product18Headline:String="");
  const product18Subhead = $(product18Subhead:String="");
  const product18CtaText = $(product18CtaText:String="");
  const product18CtaUrl = $(product18CtaUrl:String="/";required=true);
  const product18CtaAdobeTag = $(product18CtaAdobeTag:String="";required=true);
  // endgroup



  /**
   * ResponsiveContainer - Handles container behavior and responsive layout logic
   * @param {Object} props - Component props
   * @param {'max-w-full' | 'max-w-inset' | 'max-w-centered'} props.containerBehavior - Container width behavior
   * @param {string} [props.className=""] - Additional CSS classes
   * @param {React.ReactNode} props.children - Child components to render
   * @returns {JSX.Element} Container with responsive behavior applied
   */
  const ResponsiveContainer = ({ 
  containerBehavior, 
  className = "", 
  children 
  }) => {
  const containerClasses = (() => {
      switch (containerBehavior) {
      case 'max-w-full':
          return '[&>div]:w-full [&>div]:max-w-full [&>div]:mx-0 [&>div]:px-0'; // Full container width, no margins
      case 'max-w-inset':
          return 'px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full';
      case 'max-w-centered':
          return '[&>div]:mx-4 [&>div]:sm:mx-8   [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] ';
      default:
          return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem]';
      }
  })();

  return (
      <div className={`${containerClasses} ${className}`}>
      {children}
      </div>
  );
  };

  /**
   * PictureResponsiveImage - Handles responsive image loading with proper fallbacks
   * @param {Object} props - Component props
  * @param {Object} props.images - Image URLs for different breakpoints
  * @param {string} [props.images.mobile] - Mobile image URL (max-width: 767px)
  * @param {string} [props.images.tablet] - Tablet image URL (768px - 1279px)
  * @param {string} [props.images.desktop] - Desktop image URL (1280px - 1600px)
  * @param {string} [props.images.largeDesktop] - Large desktop image URL (min-width: 1601px)
  * @param {string} props.alt - Alt text for accessibility
  * @param {string} [props.className=""] - Additional CSS classes for container
  * @param {string} [props.imageClassName="-z-1 object-cover object-center"] - CSS classes for image element
  * @param {React.ReactNode} [props.children] - Child components to overlay on image
  * @returns {JSX.Element} Responsive picture element with fallback support
  */
  const PictureResponsiveImage = ({
  images,
  alt,
  className = "",
  imageClassName = "-z-1 object-cover object-center",
  children,
  }) => {
  const { mobile, tablet, desktop, largeDesktop } = images || {}


  return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <picture className="w-full h-full block">
          {mobile && <source media="(max-width: 767px)" srcSet={mobile} />}
          {tablet && <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
          {desktop && <source media="(min-width: 1280px) and (max-width: 1600px)" srcSet={desktop} />}  
          {largeDesktop && <source media="(min-width: 1601px)" srcSet={largeDesktop} />}
          <img
          className={imageClassName}
          src={mobile || tablet || desktop || largeDesktop}
          alt={alt}
          />
      </picture>
      {children}
      </div>
  );
  };

  /**
   * Button - Handles CTA styling with solid and underline variants
   * @param {Object} props - Component props
   * @param {'solid' | 'underline'} [props.variant="underline"] - Button style variant
   * @param {string} [props.className="relative flex cursor-pointer"] - Additional CSS classes
   * @param {string} [props.color] - Text color for the button
   * @param {string} [props.backgroundColor] - Background color for solid variant
   * @param {boolean} [props.isLinkChild=false] - Whether button is a child of a Link (renders as span instead of button)
   * @param {string} [props.id] - Unique identifier for styling
   * @param {React.ReactNode} props.children - Button content
   * @returns {JSX.Element} Styled button with appropriate variant
   */
  const Button = ({
  variant = "underline",
  className = "relative flex cursor-pointer",
  color,
  backgroundColor,
  isLinkChild = false,
  id,
  children
  }) => {
  const colorStyle = color ? { color } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const combinedStyle = { ...colorStyle, ...backgroundColorStyle };

  // Render as span when inside a Link (to avoid invalid HTML: button inside link)
  if (isLinkChild) {
      if (variant === "solid") {
          return (
              <span 
                  className={`flex-col font-bold gap-1.5 belk-button ${className} ${id ? `${id}-bg-solid-button` : ''} px-8 py-2 rounded-md`}
                  style={combinedStyle}
              >
                  <span className="relative inline-block">
                      {children}
                  </span>
              </span>
          )
      }
      return (
          <span 
              className={`flex-col font-bold gap-1.5 belk-button ${className}`}
              style={combinedStyle}
          >
              <span className="relative inline-block" style={colorStyle}>
                  {children}
                  <span className="block relative h-0.5 mt-1" >
                      <svg
                          className="absolute bottom-0 left-0 h-full w-full"
                          viewBox="0 0 100 1"
                          preserveAspectRatio="none"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                      >
                          <path d="M0 0.5 H100" />
                      </svg>
                  </span>
              </span>
          </span>
      )
  }

  // Render as button when not inside a Link
  if (variant === "solid") {
      return (
          <button 
              className={`flex-col font-bold gap-1.5 belk-button ${className} ${id ? `${id}-bg-solid-button` : ''} px-8 py-2 rounded-md`}
              style={combinedStyle}
          >
              <span className="relative inline-block">
                  {children}
              </span>
          </button>
      )
  }
  return (
      <button 
          className={`flex-col font-bold gap-1.5 belk-button ${className}`}
          style={combinedStyle}
      >
          <span className="relative inline-block" style={colorStyle}>
              {children}
              <span className="block relative h-0.5 mt-1" style={{ height: '1px' }}>
                  <svg
                      className="absolute bottom-0 left-0 h-full w-full"
                      viewBox="0 0 100 1"
                      preserveAspectRatio="none"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                  >
                      <path d="M0 0.5 H100" />
                  </svg>
              </span>
          </span>
      </button>
  )
  };

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
   * Carousel Component - Reusable carousel with drag, swipe, and responsive support
   */
  export const Carousel = ({
    children,
    loop = false,
    perPage = 1,
    perMove = 1,
    gap = 0,
    padding = 0,
    clones: clonesOption,
    fixedWidth,
    autoWidth = false,
    autoplay = false,
    interval = 3000,
    pauseOnHover = true,
    pauseOnFocus = true,
    drag = true,
    swipeAngle = 45,
    dragMinThreshold = { mouse: 10, touch: 10 },
    flickVelocityThreshold = 0.1,
    className = '',
    transitionMs = 400,
    ariaLabel = 'Carousel',
    navigation = true,
    renderPrevArrow,
    renderNextArrow,
    pagination = false
  }) => {
    const MULTIPLIER = 2;
    const CLASS_CLONE = 'is-clone';

    const isNum = useCallback((value) => typeof value === 'number' && !Number.isNaN(value), []);

    const unit = useCallback((value) => {
      if (value == null) return null;
      return isNum(value) ? `${value}px` : String(value);
    }, [isNum]);

    const px = useCallback((length, context) => {
      if (length == null) return 0;
      if (isNum(length)) return length;
      const str = String(length).trim();
      if (str.endsWith('px')) return parseFloat(str);
      const element = document.createElement('div');
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.width = str;
      element.style.height = '0';
      (context || document.body).appendChild(element);
      const width = element.getBoundingClientRect().width;
      element.remove();
      return width || 0;
    }, [isNum])

    const getResponsiveValue = useCallback((value, windowWidth) => {
      if (typeof value !== 'object' || value === null || isNum(value) || typeof value === 'string') {
        return value;
      }

      if ('left' in value || 'right' in value) {
        return value;
      }

      const breakpoints = [
        { key: 'xs', min: 0 },
        { key: 'sm', min: 768 },
        { key: 'md', min: 1280 },
        { key: 'lg', min: 1601 },
      ];

      let matchedValue = value.xs ?? value.default ?? 0;

      for (const bp of breakpoints) {
        if (windowWidth >= bp.min && value[bp.key] !== undefined) {
          matchedValue = value[bp.key];
        }
      }

      return matchedValue;
    }, [isNum]);

    const normalizePadding = useCallback((padding) => {
      if (isNum(padding) || typeof padding === 'string') return { left: padding, right: padding };
      return { left: padding?.left ?? 0, right: padding?.right ?? 0 };
    }, [isNum])

    const asElement = useCallback((node) => {
      return React.isValidElement(node) ? node : <span>{node}</span>;
    }, [])

    const rootRef = useRef(null);
    const trackRef = useRef(null);
    const listRef = useRef(null);
    const isNormalizing = useRef(false);

    const slides = useMemo(() => React.Children.toArray(children), [children]);
    const slideCount = slides.length;

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    const [slideSizeInPixels, setSlideSizeInPixels] = useState(0);
    const [gapInPixels, setGapInPixels] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [desktopPeekPadding, setDesktopPeekPadding] = useState(null);
    const [mobilePeekPadding, setMobilePeekPadding] = useState(null);
    const [tabletPeekPadding, setTabletPeekPadding] = useState(null);

    const responsivePadding = useMemo(() => getResponsiveValue(padding, windowWidth), [padding, windowWidth, getResponsiveValue]);
    const paddingValues = normalizePadding(responsivePadding);

    const responsiveGap = useMemo(() => getResponsiveValue(gap, windowWidth), [gap, windowWidth, getResponsiveValue]);

    const responsivePerPage = useMemo(() => {
      const value = getResponsiveValue(perPage, windowWidth);
      return Math.max(1, Number(value) || 1);
    }, [perPage, windowWidth, getResponsiveValue]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasAnimation, setHasAnimation] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const dragStateRef = useRef({
      pointerId: null,
      startX: 0,
      startY: 0,
      lastX: 0,
      lastTimestamp: 0,
      startTranslate: 0,
      moved: false,
      suppressClick: false,
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragLockedAxis, setDragLockedAxis] = useState(null);
    const [dragOffset, setDragOffset] = useState(0);

    const computeCloneCount = useCallback(() => {
      if (!loop) return 0;
      if (isNum(clonesOption)) return Math.max(0, clonesOption);
      const track = trackRef.current;
      if (!track || slideCount === 0) return responsivePerPage * MULTIPLIER;
      const trackWidth = track.getBoundingClientRect().width;
      const gapSize = px(responsiveGap, rootRef.current);
      if (fixedWidth != null) {
        const fixedWidthValue = px(fixedWidth, rootRef.current);
        const fixedSize = fixedWidthValue + gapSize;
        const fixedCount = fixedSize > 0 ? Math.ceil(trackWidth / fixedSize) : 0;
        if (fixedCount) return fixedCount;
      }
      if (autoWidth) return slideCount;
      return responsivePerPage * MULTIPLIER;
    }, [autoWidth, fixedWidth, clonesOption, loop, responsivePerPage, slideCount, responsiveGap, isNum, px]);

    const [clonesPerSide, setClonesPerSide] = useState(0);

    const measure = useCallback(() => {
      const root = rootRef.current;
      const list = listRef.current;
      if (!root || !list) return;
      
      // Measure container width
      const rootRect = root.getBoundingClientRect();
      setContainerWidth(rootRect.width);
      
      const gapSize = px(responsiveGap, root);
      setGapInPixels(gapSize);
      const firstRealSlide = list.querySelector('li[data-role="real"]') || list.children[0];
      if (firstRealSlide) {
        const rect = firstRealSlide.getBoundingClientRect();
        setSlideSizeInPixels(rect.width + gapSize);
      }
      setClonesPerSide(computeCloneCount());
    }, [responsiveGap, computeCloneCount, px]);

    // Initial measurement on mount and whenever measure function changes
    useLayoutEffect(() => { measure(); }, [measure]);

    // Track window width for responsive values and re-measure on resize
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        measure();
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [measure]);

    // Re-measure slides when list or slide dimensions change
    useEffect(() => {
      const root = rootRef.current;
      const list = listRef.current;
      if (!root || !list || typeof ResizeObserver === 'undefined') return;
      const resizeObserver = new ResizeObserver(() => measure());
      resizeObserver.observe(root); // Observe root for container width changes
      resizeObserver.observe(list);
      const firstRealSlide = list.querySelector('li[data-role="real"]');
      if (firstRealSlide) resizeObserver.observe(firstRealSlide);
      return () => resizeObserver.disconnect();
    }, [measure]);

    // Calculate desktop peek padding based on container width
    // The peek padding will be applied as track padding (left or right), so track content = containerWidth - peekPadding
    useEffect(() => {
      if (windowWidth >= 1280 && gapInPixels >= 0 && containerWidth > 0 && responsivePerPage > 0) {
        // Track content width when peek is active = containerWidth - peekPadding
        // We need: trackContent = (cards * cardWidth) + (gaps * gap) + peekPadding
        // But trackContent = containerWidth - peekPadding
        // So: containerWidth - peekPadding = (cards * cardWidth) + (gaps * gap) + peekPadding
        // containerWidth = (cards * cardWidth) + (gaps * gap) + 2*peekPadding
        // Where peekPadding = 0.20 * cardWidth
        // containerWidth = (cards * cardWidth) + (gaps * gap) + 2*(0.20 * cardWidth)
        // containerWidth = cardWidth * (cards + 0.40) + (gaps * gap)
        // cardWidth = (containerWidth - gaps * gap) / (cards + 0.40)
        const numGaps = Math.max(0, responsivePerPage - 1);
        const totalGapWidth = numGaps * gapInPixels;
        const cardWidth = (containerWidth - totalGapWidth) / (responsivePerPage + 0.40);
        
        // Compute 20% of card width for peek
        const rawPeekPadding = cardWidth * 0.20;
        
        // Ensure peek padding is positive
        const clampedPeekPadding = Math.max(0, rawPeekPadding);
        
        setDesktopPeekPadding(clampedPeekPadding);
      } else {
        setDesktopPeekPadding(null);
      }
    }, [windowWidth, gapInPixels, containerWidth, responsivePerPage]);

    // Calculate mobile peek padding based on container width
    // The peek padding will be applied as track padding (left or right), so track content = containerWidth - peekPadding
    useEffect(() => {
      if (windowWidth < 768 && gapInPixels >= 0 && containerWidth > 0 && responsivePerPage > 0) {
        // Track content width when peek is active = containerWidth - peekPadding
        // We need: trackContent = (1 * cardWidth) + (0 * gap) + peekPadding
        // But trackContent = containerWidth - peekPadding
        // So: containerWidth - peekPadding = cardWidth + peekPadding
        // containerWidth = cardWidth + 2*peekPadding
        // Where peekPadding = 0.10 * cardWidth
        // containerWidth = cardWidth + 2*(0.10 * cardWidth)
        // containerWidth = cardWidth * 1.20
        // cardWidth = containerWidth / 1.20
        const cardWidth = containerWidth / 1.20;
        
        // Compute 10% of card width for peek
        const rawPeekPadding = cardWidth * 0.10;
        
        // Ensure peek padding is positive
        const clampedPeekPadding = Math.max(0, rawPeekPadding);
        
        setMobilePeekPadding(clampedPeekPadding);
      } else {
        setMobilePeekPadding(null);
      }
    }, [windowWidth, gapInPixels, containerWidth, responsivePerPage]);

    // Calculate tablet peek padding based on container width
    // The peek padding will be applied as track padding (left or right), so track content = containerWidth - peekPadding
    useEffect(() => {
      if (windowWidth >= 768 && windowWidth < 1280 && gapInPixels >= 0 && containerWidth > 0 && responsivePerPage > 0) {
        // Track content width when peek is active = containerWidth - peekPadding
        // We need: trackContent = (2 * cardWidth) + (1 * gap) + peekPadding
        // But trackContent = containerWidth - peekPadding
        // So: containerWidth - peekPadding = (2 * cardWidth) + gap + peekPadding
        // containerWidth = (2 * cardWidth) + gap + 2*peekPadding
        // Where peekPadding = 0.18 * cardWidth
        // containerWidth = (2 * cardWidth) + gap + 2*(0.18 * cardWidth)
        // containerWidth = cardWidth * (2 + 0.36) + gap
        // containerWidth = cardWidth * 2.36 + gap
        // cardWidth = (containerWidth - gap) / 2.36
        const numGaps = Math.max(0, responsivePerPage - 1);
        const totalGapWidth = numGaps * gapInPixels;
        const cardWidth = (containerWidth - totalGapWidth) / (responsivePerPage + 0.36);
        
        // Compute 18% of card width for peek
        const rawPeekPadding = cardWidth * 0.18;
        
        // Ensure peek padding is positive
        const clampedPeekPadding = Math.max(0, rawPeekPadding);
        
        setTabletPeekPadding(clampedPeekPadding);
      } else {
        setTabletPeekPadding(null);
      }
    }, [windowWidth, gapInPixels, containerWidth, responsivePerPage]);

    const headClones = useMemo(() => {
      const count = clonesPerSide;
      if (!count) return [];
      const array = [];
      for (let i = 0; i < count; i++) {
        const realIndex = (slideCount - 1 - i + slideCount) % slideCount;
        const node = asElement(slides[realIndex]);
        const classes = (node.props?.className || '') + ' ' + CLASS_CLONE;
        array.push(React.cloneElement(node, { key: `h-${i}-${realIndex}`, 'data-clone': '', className: classes }));
      }
      return array.reverse();
    }, [clonesPerSide, slideCount, asElement, slides]);

    const tailClones = useMemo(() => {
      const count = clonesPerSide;
      if (!count) return [];
      const array = [];
      for (let i = 0; i < count; i++) {
        const realIndex = i % slideCount;
        const node = asElement(slides[realIndex]);
        const classes = (node.props?.className || '') + ' ' + CLASS_CLONE;
        array.push(React.cloneElement(node, { key: `t-${i}-${realIndex}`, 'data-clone': '', className: classes }));
      }
      return array;
    }, [clonesPerSide, slideCount, asElement, slides]);

    const extendedSlides = useMemo(() => [...headClones, ...slides, ...tailClones], [headClones, slides, tailClones]);

    // Initialize carousel to start at the first real slide (after head clones)
    useEffect(() => {
      if (extendedSlides.length && clonesPerSide) {
        setCurrentIndex(clonesPerSide);
        setHasAnimation(false);
      }
    }, [extendedSlides.length, clonesPerSide]);

    // Re-enable animation after it's been disabled
    useEffect(() => {
      if (!hasAnimation) requestAnimationFrame(() => setHasAnimation(true));
    }, [hasAnimation]);

    // Keep a ref of current index for autoplay to avoid stale closures
    const indexRef = useRef(currentIndex);
    useEffect(() => { indexRef.current = currentIndex; }, [currentIndex]);

    /**
     * Autoplay: Automatically advances slides at specified intervals
     */
    useEffect(() => {
      if (!autoplay || slideCount <= responsivePerPage) return;
      if (autoplay === 'pause') return;

      const list = listRef.current;
      const getIntervalForSlide = (index) => {
        const listItem = list?.children[index];
        const override = listItem?.querySelector('[data-splide-interval]');
        const value = override ? Number(override.getAttribute('data-splide-interval')) : undefined;
        return (value && !Number.isNaN(value)) ? value : interval;
      };

      let cancelled = false;
      let timerId;
      const tick = () => {
        if (cancelled) return;
        if ((pauseOnHover && isHovered) || (pauseOnFocus && isFocused) || isDragging) {
          timerId = window.setTimeout(tick, Math.max(200, interval));
          return;
        }
        const current = indexRef.current;
        const moveAmount = Math.max(1, perMove);

        if (!loop) {
          const maxIndex = slideCount - responsivePerPage;
          if (current >= maxIndex) {
            return;
          }
          const nextIndex = Math.min(maxIndex, current + moveAmount);
          const duration = Math.max(200, getIntervalForSlide(current));
          timerId = window.setTimeout(() => { setCurrentIndex(nextIndex); tick(); }, duration);
        } else {
          const duration = Math.max(200, getIntervalForSlide(current));
          timerId = window.setTimeout(() => { setCurrentIndex((i) => i + moveAmount); tick(); }, duration);
        }
      };
      tick();
      return () => { cancelled = true; if (timerId) clearTimeout(timerId); };
    }, [autoplay, interval, pauseOnHover, pauseOnFocus, isHovered, isFocused, isDragging, slideCount, perPage, perMove, loop, responsivePerPage]);

    const jumpSilently = (target) => {
      const element = listRef.current;
      if (!element) return;
      isNormalizing.current = true;
      setHasAnimation(false);
      setCurrentIndex(target);
      requestAnimationFrame(() => {
        element.getBoundingClientRect();
        requestAnimationFrame(() => { setHasAnimation(true); isNormalizing.current = false; });
      });
    }

    /**
     * Infinite loop: Creates seamless looping by jumping between clones and real slides
     */
    useEffect(() => {
      const element = listRef.current;
      if (!element) return;
      const handleTransitionEnd = (event) => {
        if (event.target !== element || event.propertyName !== 'transform') return;
        if (!loop || !clonesPerSide || isNormalizing.current) return;
        const firstRealIndex = clonesPerSide;
        const lastRealIndex = clonesPerSide + slideCount - 1;
        if (currentIndex > lastRealIndex) jumpSilently(currentIndex - slideCount);
        else if (currentIndex < firstRealIndex) jumpSilently(currentIndex + slideCount);
      };
      element.addEventListener('transitionend', handleTransitionEnd);
      return () => element.removeEventListener('transitionend', handleTransitionEnd);
    }, [currentIndex, loop, clonesPerSide, slideCount]);

    const canSlide = slideCount > responsivePerPage;

    const isAtStart = !loop && currentIndex <= 0;
    const isAtEnd = !loop && currentIndex >= slideCount - responsivePerPage;

    const goToSlide = (index) => {
      if (!canSlide) return;

      if (!loop) {
        const minIndex = 0;
        const maxIndex = slideCount - responsivePerPage;
        const clampedIndex = Math.max(minIndex, Math.min(maxIndex, index));
        setCurrentIndex(clampedIndex);
      } else {
        setCurrentIndex(index);
      }
    };

    const goToNext = () => {
      if (!loop) {
        const maxIndex = slideCount - responsivePerPage;
        if (currentIndex >= maxIndex) return;

        const moveAmount = Math.max(1, perMove);
        const nextIndex = Math.min(maxIndex, currentIndex + moveAmount);

        goToSlide(nextIndex);
      } else {
        goToSlide(currentIndex + Math.max(1, perMove));
      }
    };

    const goToPrevious = () => {
      if (!loop) {
        const minIndex = 0;
        if (currentIndex <= minIndex) return;

        const moveAmount = Math.max(1, perMove);
        const prevIndex = Math.max(minIndex, currentIndex - moveAmount);

        goToSlide(prevIndex);
      } else {
        goToSlide(currentIndex - Math.max(1, perMove));
      }
    };

    const handleKeyDown = (event) => {
      if (!canSlide) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); goToNext(); }
      if (event.key === 'ArrowLeft')  { event.preventDefault(); goToPrevious(); }
    };

    const calculateAngle = (deltaX, deltaY) => Math.abs(Math.atan2(Math.abs(deltaY), Math.abs(deltaX)) * 180 / Math.PI);
    const getThreshold = (pointerType) => pointerType === 'touch' ? (dragMinThreshold?.touch ?? 10) : (dragMinThreshold?.mouse ?? 0);

    const handlePointerDown = (event) => {
      if (!drag || !canSlide) return;
      if (event.button != null && event.button !== 0) return;
      
      // Disable drag on desktop (windowWidth >= 1280)
      if (windowWidth >= 1280) return;

      const state = dragStateRef.current;
      setIsDragging(true);
      setDragLockedAxis(null);
      state.pointerId = event.pointerId != null ? event.pointerId : 'mouse';
      state.startX = event.clientX;
      state.startY = event.clientY;
      state.lastX = event.clientX;
      state.lastTimestamp = performance.now();
      state.startTranslate = -(currentIndex * slideSizeInPixels);
      state.moved = false;
      state.suppressClick = false;

      try { event.currentTarget.setPointerCapture?.(event.pointerId); } catch (_) {}

      setHasAnimation(false);
      setDragOffset(0);
    };

    const handlePointerMove = (event) => {
      const state = dragStateRef.current;
      if (!isDragging || (state.pointerId !== (event.pointerId != null ? event.pointerId : 'mouse'))) return;

      const deltaX = event.clientX - state.startX;
      const deltaY = event.clientY - state.startY;

      if (!dragLockedAxis) {
        const angle = calculateAngle(deltaX, deltaY);
        if (deltaX === 0 && deltaY === 0) return;
        setDragLockedAxis(angle <= swipeAngle ? 'x' : 'y');
        return;
      }

      // Only allow horizontal dragging when axis is locked to 'x'
      // When axis is locked to 'y', allow vertical scrolling to pass through
      if (dragLockedAxis === 'x') {
        const threshold = getThreshold(event.pointerType);
        if (Math.abs(deltaX) > threshold) {
          state.moved = true;
          state.suppressClick = true;
          event.preventDefault();
          setDragOffset(deltaX);
        }
        const now = performance.now();
        if (now - state.lastTimestamp > 16) {
          state.lastX = event.clientX;
          state.lastTimestamp = now;
        }
      }
      // If dragLockedAxis === 'y', do nothing - allow vertical scrolling
    };

    const handlePointerUp = (event) => {
      const state = dragStateRef.current;
      if (!isDragging || (state.pointerId !== (event.pointerId != null ? event.pointerId : 'mouse'))) return;

      const deltaX = event.clientX - state.startX;
      const deltaY = event.clientY - state.startY;
      const deltaTime = Math.max(1, performance.now() - state.lastTimestamp);
      const velocityX = (event.clientX - state.lastX) / deltaTime;

      setIsDragging(false);
      state.pointerId = null;

      // Only process carousel movement if axis was locked to 'x' (horizontal)
      // If axis was locked to 'y' (vertical), don't trigger carousel navigation
      if (dragLockedAxis !== 'x') {
        setDragLockedAxis(null);
        setHasAnimation(true);
        setDragOffset(0);
        return;
      }

      const absoluteDeltaX = Math.abs(deltaX);
      const direction = deltaX < 0 ? 1 : -1;

      const threshold = getThreshold(event.pointerType);
      const isFlick = Math.abs(velocityX) > flickVelocityThreshold;

      if (absoluteDeltaX > 5 || Math.abs(deltaY) > 5) {
        state.suppressClick = true;
      }

      let shouldMove = false;
      if (absoluteDeltaX > threshold || isFlick) {
        shouldMove = true;
      }

      setHasAnimation(true);
      setDragOffset(0);
      setDragLockedAxis(null);

      if (!shouldMove) {
        setCurrentIndex(currentIndex);
        return;
      }

      const moveAmount = Math.max(1, perMove);
      const baseIndex = currentIndex;
      let targetIndex = baseIndex + direction * moveAmount;

      if (!loop) {
        const minIndex = 0;
        const maxIndex = slideCount - responsivePerPage;
        targetIndex = Math.max(minIndex, Math.min(maxIndex, targetIndex));
      }

      setCurrentIndex(targetIndex);
    };

    // Suppress click events on links/images after dragging to prevent unwanted navigation
    useEffect(() => {
      const root = rootRef.current;
      if (!root) return;
      const handleClickCapture = (event) => {
        if (dragStateRef.current.suppressClick) {
          // Allow clicks on links, buttons, and elements with data-aali (CTA elements)
          const target = event.target;
          const isClickableElement = target.closest('a, button, [data-aali], [role="button"]');
          
          if (!isClickableElement) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
          }
          setTimeout(() => {
            dragStateRef.current.suppressClick = false;
          }, 10);
        }
      };
      root.addEventListener('click', handleClickCapture, true);
      return () => root.removeEventListener('click', handleClickCapture, true);
    }, []);

    const screenReaderOnlyStyles = {
      position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0,
    };

    const realSlideIndex = loop
      ? (slideCount ? ((currentIndex - clonesPerSide) % slideCount + slideCount) % slideCount : 0)
      : currentIndex;

    // Mobile, tablet, and desktop peek padding are calculated independently
    // The padding prop is used as fallback
    const isMobileViewport = windowWidth < 768;
    const isTabletViewport = windowWidth >= 768 && windowWidth < 1280;
    const isDesktopViewport = windowWidth >= 1280;
    const mobilePeekActive = isMobileViewport && mobilePeekPadding != null;
    const tabletPeekActive = isTabletViewport && tabletPeekPadding != null;
    const desktopPeekActive = isDesktopViewport && desktopPeekPadding != null;
    
    // Determine if any peek is active
    const anyPeekActive = mobilePeekActive || tabletPeekActive || desktopPeekActive;
    
    // Resolve peek padding value (same for left and right, depends on position)
    const resolvedPeekPaddingValue = mobilePeekActive
      ? mobilePeekPadding
      : tabletPeekActive
      ? tabletPeekPadding
      : desktopPeekActive
      ? desktopPeekPadding
      : null;
    const resolvedPeekPaddingPx = resolvedPeekPaddingValue != null
      ? resolvedPeekPaddingValue
      : 0;
    
    // Calculate consistent card width using the right peek padding
    // This ensures card width (and height) remains the same whether at end or not
    // When not at end: containerWidth = (cards * cardWidth) + (gaps * gap) + rightPeekPadding
    // Where rightPeekPadding = peekPercent * cardWidth
    // So: containerWidth = (cards * cardWidth) + (gaps * gap) + (peekPercent * cardWidth)
    // containerWidth = cardWidth * (cards + peekPercent) + (gaps * gap)
    // cardWidth = (containerWidth - gaps * gap) / (cards + peekPercent)
    // The peekPercent depends on viewport: 0.20 (desktop), 0.18 (tablet), 0.10 (mobile)
    const peekPercent = mobilePeekActive ? 0.10 : tabletPeekActive ? 0.18 : desktopPeekActive ? 0.20 : 0;
    const consistentCardWidth = containerWidth > 0 && gapInPixels >= 0 && responsivePerPage > 0 && anyPeekActive
      ? (() => {
          const numGaps = Math.max(0, responsivePerPage - 1);
          const totalGapWidth = numGaps * gapInPixels;
          // Calculate card width from container width using the peek percentage
          // containerWidth = cardWidth * (cards + peekPercent) + gaps
          // cardWidth = (containerWidth - gaps) / (cards + peekPercent)
          return (containerWidth - totalGapWidth) / (responsivePerPage + peekPercent);
        })()
      : 0;
    
    // Calculate left peek when at end: 10% of the consistent card width
    const leftPeekAtEnd = consistentCardWidth > 0 ? consistentCardWidth * 0.10 : 0;
    
    // Calculate right peek from consistent card width (for arrow positioning)
    // This ensures the peek padding matches the actual card width
    const rightPeekFromConsistentWidth = consistentCardWidth > 0 && anyPeekActive
      ? consistentCardWidth * peekPercent
      : 0;
    
    // Resolve left padding: use 10% peek when at end, otherwise use regular left padding
    const resolvedLeftPaddingValue = isAtEnd && anyPeekActive
      ? leftPeekAtEnd
      : (paddingValues.left ?? 0);
    const resolvedLeftPaddingPx = typeof resolvedLeftPaddingValue === 'number'
      ? resolvedLeftPaddingValue
      : px(resolvedLeftPaddingValue, rootRef.current);
    
    // Resolve right padding: use peek when not at end, otherwise 0
    // Use the peek calculated from consistent card width to ensure alignment
    const resolvedRightPaddingValue = !isAtEnd && anyPeekActive
      ? rightPeekFromConsistentWidth
      : (paddingValues.right ?? 0);
    const resolvedRightPaddingPx = typeof resolvedRightPaddingValue === 'number'
      ? resolvedRightPaddingValue
      : px(resolvedRightPaddingValue, rootRef.current);

    // Calculate base translate
    // When at end, we need to align cards to the right edge
    // The total track width = slideCount * slideSizeInPixels
    // Visible cards width = responsivePerPage * slideSizeInPixels
    // To align to right: translateX = -(totalTrackWidth - visibleCardsWidth)
    // But we also need to account for the left peek padding
    let baseTranslate = -(currentIndex * slideSizeInPixels);

    if (!loop && isAtEnd && anyPeekActive && resolvedLeftPaddingPx > 0) {
      // When at end with left peek, calculate the translate to align cards to right edge
      // Total track width = slideCount * slideSizeInPixels
      // Visible area = responsivePerPage * slideSizeInPixels
      // Max translate (without peek) = -(totalTrackWidth - visibleArea)
      // With left peek, we shift left by the left peek amount to show the peek
      const totalTrackWidth = slideCount * slideSizeInPixels;
      const visibleCardsWidth = responsivePerPage * slideSizeInPixels;
      const maxTranslateWithoutPeek = -(totalTrackWidth - visibleCardsWidth);
      // Shift left by left peek to show the peek on the left
      baseTranslate = maxTranslateWithoutPeek + resolvedLeftPaddingPx;
    }

    const currentTranslate = isDragging && dragLockedAxis === 'x'
      ? baseTranslate + dragOffset
      : baseTranslate;
    
    // Calculate arrow offset: positioned at the boundary between last full card and peek card
    // Only show arrow offset when not at end (right peek active)
    // The arrow should be positioned at the start of the peek card, which is peek padding - gap from the right
    const nextArrowOffsetPx = !isAtEnd && anyPeekActive
      ? Math.max(0, resolvedRightPaddingPx - gapInPixels)
      : undefined;

    const gapCSS = unit(responsiveGap) || '0px';
    // Left padding: use peek padding when at end, otherwise use regular left padding
    const paddingLeftCSS = unit(resolvedLeftPaddingValue ?? 0) || '0px';
    // Right padding: use peek padding when not at end, otherwise 0
    const paddingRightCSS = (!loop && isAtEnd) 
      ? '0px'
      : unit(resolvedRightPaddingValue ?? 0) || '0px';

    // Calculate slide width
    // To ensure consistent card width (and height), we use the consistent card width
    // Slide width = card width (the gap is handled by the flex container's gap property)
    // Using a fixed pixel width ensures the same card width regardless of track content width changes
    const slideWidthStyle = fixedWidth != null
      ? unit(fixedWidth)
      : anyPeekActive && consistentCardWidth > 0
      ? `${consistentCardWidth}px`
      : anyPeekActive && resolvedPeekPaddingPx > 0
      ? `calc((100% - (${gapInPixels}px * (${responsivePerPage} - 1)) - ${resolvedPeekPaddingPx}px) / ${responsivePerPage})`
      : `calc((100% - (${gapInPixels}px * (${responsivePerPage} - 1))) / ${responsivePerPage})`;

    return (
      <div
        ref={rootRef}
        className={`relative select-none ${className}`}
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={() => setIsFocused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDragStart={(e) => e.preventDefault()}
      >
        <div aria-live="polite" style={screenReaderOnlyStyles}>Slide {realSlideIndex + 1} of {slideCount}</div>

        <div 
          ref={trackRef} 
          className="overflow-hidden" 
          style={{ 
            paddingLeft: paddingLeftCSS, 
            paddingRight: paddingRightCSS,
            // Store peek padding as CSS variable for consistent calculations
            '--peek-padding': resolvedPeekPaddingPx > 0 ? `${resolvedPeekPaddingPx}px` : '0px'
          }}
        >
          <ul
            ref={listRef}
            className="flex items-start"
            style={{
              gap: gapCSS,
              transform: `translate3d(${currentTranslate}px,0,0)`,
              transition: hasAnimation && !(isDragging && dragLockedAxis === 'x') ? `transform ${transitionMs}ms ease` : 'none',
              willChange: 'transform',
              touchAction: windowWidth >= 1280 ? 'none' : (dragLockedAxis === 'x' ? 'pan-x' : 'pan-y'),
            }}
          >
            {headClones.map((node, i) => (
              <li key={node.key || `h-${i}`} className="shrink-0" style={{ width: slideWidthStyle }} aria-hidden>
                <div className="w-full">{node}</div>
              </li>
            ))}

            {slides.map((node, i) => (
              <li key={node.key || `r-${i}`} id={`slide-real-${i}`} data-role="real" role="group" aria-roledescription="slide" aria-label={`Slide ${i + 1} of ${slideCount}`} className="shrink-0" style={{ width: slideWidthStyle }}>
                <div className="w-full">{asElement(node)}</div>
              </li>
            ))}

            {tailClones.map((node, i) => (
              <li key={node.key || `t-${i}`} className="shrink-0" style={{ width: slideWidthStyle }} aria-hidden>
                <div className="w-full">{node}</div>
              </li>
            ))}
          </ul>
        </div>

        {navigation && canSlide && !isAtStart && windowWidth >= 1023 && (
          renderPrevArrow ? (
            renderPrevArrow({ onClick: goToPrevious, onPointerDown: (e) => e.stopPropagation() })
          ) : (
            <button
              type="button"
              aria-label="Previous"
              onClick={goToPrevious}
              onPointerDown={(e) => e.stopPropagation()}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-2xl bg-black/40 text-white px-3 py-2 hover:bg-black/60"
            >◀</button>
          )
        )}

        {navigation && canSlide && !isAtEnd && windowWidth >= 1023 && (
          renderNextArrow ? (
            renderNextArrow({ 
              onClick: goToNext, 
              onPointerDown: (e) => e.stopPropagation(),
              peekOffset: nextArrowOffsetPx
            })
          ) : (
            <button
              type="button"
              aria-label="Next"
              onClick={goToNext}
              onPointerDown={(e) => e.stopPropagation()}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-2xl bg-black/40 text-white px-3 py-2 hover:bg-black/60"
            >▶</button>
          )
        )}

        {canSlide && pagination && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Page navigation">
            {Array.from({ length: Math.ceil(slideCount / responsivePerPage) }).map((_, pageIndex) => {
              const pageStartIndex = pageIndex * responsivePerPage;
              const isLastPage = pageIndex === Math.ceil(slideCount / responsivePerPage) - 1;

              let isActive;
              if (loop) {
                isActive = Math.floor(realSlideIndex / responsivePerPage) === pageIndex;
              } else {
                const maxIndex = slideCount - responsivePerPage;
                if (currentIndex >= maxIndex) {
                  isActive = isLastPage;
                } else {
                  const currentPage = Math.floor(currentIndex / responsivePerPage);
                  isActive = currentPage === pageIndex;
                }
              }

              return (
                <button
                  key={pageIndex}
                  role="tab"
                  onClick={() => goToSlide(loop ? clonesPerSide + pageStartIndex : pageStartIndex)}
                  aria-label={`Go to page ${pageIndex + 1}`}
                  aria-selected={isActive}
                  onPointerDown={(e) => { e.stopPropagation(); }}
                  {...(isActive ? { 'aria-current': 'true' } : {})}
                  className={`h-2 w-2 rounded-full ${isActive ? 'bg-white' : 'bg-white/50'}`}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }

  /**
   * LeftArrow - Custom arrow component matching current nav-arrow styling
   */
  const LeftArrow = ({ onClick, onPointerDown }) => (
    <button
      onClick={onClick}
      onPointerDown={onPointerDown}
      className="nav-arrow nav-arrow-left"
      aria-label="Previous products"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </button>
  );

  /**
   * RightArrow - Custom arrow component matching current nav-arrow styling
   */
  const RightArrow = ({ onClick, onPointerDown, peekOffset }) => (
    <button
      onClick={onClick}
      onPointerDown={onPointerDown}
      className="nav-arrow nav-arrow-right"
      aria-label="Next products"
      style={peekOffset !== undefined ? { right: `${Math.max(16, peekOffset)}px` } : undefined}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    </button>
  );

  /**
   * ProductCard - Individual product card component with image and text content
   * @param {Object} props - Component props
   * @param {Object} props.product - Product data object
   * @param {string} props.id - Unique identifier for styling
   * @param {'solid' | 'underline'} [props.cardCtaVariant="underline"] - CTA style variant
   * @param {string} [props.cardCtaColor] - CTA text color
   * @param {string} [props.cardCtaBackgroundColor] - CTA background color for solid variant
   * @returns {JSX.Element} Product card component
   */
  const ProductCard = ({ product, id, cardCtaVariant = "underline", cardCtaColor, cardCtaBackgroundColor }) => {
  if (!product.image) return null;

  const cardImages = {
      mobile: buildImageUrl(product.image, 'm', imagePreset),
      tablet: buildImageUrl(product.image, 't', imagePreset),
      desktop: buildImageUrl(product.image, 'd', imagePreset),
      largeDesktop: buildImageUrl(product.image, 'l', imagePreset),
  };

  return (
      <div className={`${id}-product-card`}>
      <SafeLink href={product.ctaUrl} data-aali={product.ctaAdobeTag}>
          <div className="card-container">
          {/* Product Image - fully contained within card */}
          <div className={`${id}-card-image-container`}>
              <PictureResponsiveImage
              images={cardImages}
              alt={product.imageAlt || ''}
              className="card-image"
              imageClassName="object-cover w-full h-full"
              />
          </div>
          </div>
      </SafeLink>
      
      {/* Product Text Content - outside card container */}
      <div className="card-text-content">
          {product.eyebrow && (
          <div 
              className={`${id}-card-eyebrow`}
          >
              {product.eyebrow}
          </div>
          )}
          
          {product.headline && (
          <div 
              className={`${id}-card-headline`}
          >
              {product.headline}
          </div>
          )}
          
          {product.subhead && (
          <div 
              className={`${id}-card-subhead`}
          >
              {product.subhead}
          </div>
          )}
          
          {product.ctaText && (
          <SafeLink href={product.ctaUrl} data-aali={product.ctaAdobeTag}>
              <Button
                  variant={cardCtaVariant}
                  className={`${id}-card-cta ${cardCtaVariant === 'solid' ? `${id}-card-cta-button` : `${id}-card-cta-underline`}`}
                  color={cardCtaColor ?? "#1F1F1F"}
                  backgroundColor={cardCtaVariant === 'solid' ? cardCtaBackgroundColor : undefined}
                  isLinkChild={!!product.ctaUrl}
                  id={id}
              >
                  {product.ctaText}
              </Button>
          </SafeLink>
          )}
      </div>
      </div>
  );
  };


  /**
   * ProductCarouselStyleVars - Defines CSS custom properties for dynamic styling
   * @param {string} id - Unique identifier for scoping CSS variables
   * @returns {JSX.Element} Style element with CSS variables
   * @description Injects CSS custom properties into :root for use throughout the component
   */
  const ProductCarouselStyleVars = ({ id }) => (
  <style global jsx>{`
      @layer template {
      :host, :root {
          @layer container {
          --${id}-font-family: ${fontFamily};
        --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}, 1.8dvw, ${sectionTitleMaximumFontSize});
        --${id}-section-cta-background-color: ${sectionCtaBackgroundColor};
        --${id}-section-cta-font-size: clamp(${sectionCtaMinimumFontSize}, 1.8dvw, ${sectionCtaMaximumFontSize});
        --${id}-card-eyebrow-font-size: clamp(${cardEyebrowMinimumFontSize}, 1.8dvw, ${cardEyebrowMaximumFontSize});
        --${id}-card-headline-font-size: clamp(${cardHeadlineMinimumFontSize}, 1.8dvw, ${cardHeadlineMaximumFontSize});
        --${id}-card-subhead-font-size: clamp(${cardSubheadMinimumFontSize}, 1.8dvw, ${cardSubheadMaximumFontSize});
        --${id}-card-cta-font-size: clamp(${cardCtaMinimumFontSize}, 1.8dvw, ${cardCtaMaximumFontSize});
          --${id}-mobile-card-image-aspect-ratio: ${mobileCardImageAspectRatioWidth} / ${mobileCardImageAspectRatioHeight};
          --${id}-tablet-card-image-aspect-ratio: ${tabletCardImageAspectRatioWidth} / ${tabletCardImageAspectRatioHeight};
          --${id}-desktop-card-image-aspect-ratio: ${desktopCardImageAspectRatioWidth} / ${desktopCardImageAspectRatioHeight};
          --${id}-large-desktop-card-image-aspect-ratio: ${largeDesktopCardImageAspectRatioWidth} / ${largeDesktopCardImageAspectRatioHeight};
          --${id}-top-margin: ${topMargin}px;
          --${id}-bottom-margin: ${bottomMargin}px;
          --${id}-card-gap: 13px;
          --${id}-card-corner-radius: ${getCardCornerRadius(cardCornerRadius)};
          --${id}-desktop-peek-pct: 0.23;
          --${id}-desktop-cards-to-show: 5;
          --${id}-tablet-viewport-width: auto;
          }
      }
      }
  `}</style>
  );

  /**
   * ProductCarouselStyles - Defines utility CSS classes for product carousel
   * @param {string} id - Unique identifier for scoping CSS classes
   * @param {'max-w-full' | 'max-w-inset' | 'max-w-centered'} containerBehavior - Container width behavior
   * @returns {JSX.Element} Style element with utility classes
   * @description Creates CSS classes for product carousel layout and behavior
   */
  const ProductCarouselStyles = ({ id, containerBehavior }) => {
  return (
  <style>{`
      .h-0\\.5 {
        height: 0.125rem;
      }
      
      /* Section Title Styles */
      .${id}-section-title {
      font-family: var(--${id}-font-family);
      font-size: var(--${id}-section-title-font-size);
      font-weight: 600;
      }
      
      .section-title-left {
      text-align: left;
      }
      
      .section-title-center {
      text-align: center;
      }
      
      /* Section CTA Styles */
      .${id}-section-cta {
      font-family: var(--${id}-font-family);
      font-size: var(--${id}-section-cta-font-size);
      font-weight: 700;
      cursor: pointer;
      display: inline-block;
      margin-left: 1rem;
      }
      
      .${id}-section-cta-underline {
      text-decoration: none;
      }
      
      .${id}-section-cta-button {
      padding: 0.5rem 2rem;
      border-radius: 0.375rem;
      background-color: var(--${id}-section-cta-background-color);
      text-decoration: none;
      }
      
      .${id}-section-cta:hover {
      opacity: 0.7;
      }
      
      .section-header {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      margin-bottom: 2rem;
      gap: 1.25rem;
      padding-left: 0;
      }
      
      .section-header-center {
      justify-content: center;
      }
      
      .section-header-left {
      justify-content: flex-start;
      }
      
      /* Carousel Container */
      .${id}-carousel-container {
      position: relative;
      overflow: hidden;
      width: 100%;
      padding: 0;
      max-height: 100vh;
      }
      
      /* Product Card Styles */
      .${id}-product-card {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      }
      
      .card-container {
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
      transition: none;
      overflow: hidden;
      cursor: pointer;
      width: 100%;
      /* Height is auto - determined by image + text content */
      }
      
      .${id}-card-image-container {
      width: 100%;
      /* Height is determined by aspect ratio */
      overflow: hidden;
      position: relative;
      border-radius: var(--${id}-card-corner-radius);
      }
      
      .card-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      }
      
      .card-text-content {
      padding: 0.75rem 0 0 0;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      width: 100%;
      height: auto; /* Height based on content */
      position: relative;
      pointer-events: auto;
      }
      
      .${id}-card-eyebrow {
      font-family: var(--${id}-font-family);
      font-size: var(--${id}-card-eyebrow-font-size);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      line-height: 1.2;
      }
      
      .${id}-card-headline {
      font-family: var(--${id}-font-family);
      font-size: var(--${id}-card-headline-font-size);
      font-weight: 600;
      line-height: 1.3;
      }
      
      .${id}-card-subhead {
      font-family: var(--${id}-font-family);
      font-size: var(--${id}-card-subhead-font-size);
      font-weight: 400;
      line-height: 1.4;
      }
      
      .${id}-card-cta {
      font-family: var(--${id}-font-family);
      font-size: var(--${id}-card-cta-font-size);
      margin-top: auto;
      padding-top: 0.5rem;
      cursor: pointer;
      display: inline-block;
      position: relative;
      z-index: 10;
      pointer-events: auto;
      }
      
      .${id}-card-cta-underline {
      text-decoration: none;
      align-self: flex-start;
      text-align: left;
      }
      
      .${id}-card-cta-button {
      padding: 0.5rem 2rem;
      border-radius: 0.375rem;
      text-decoration: none;
      }
      
      .${id}-card-cta:hover {
      opacity: 0.7;
      }
      
      /* Navigation Arrows */
      .${id}-carousel-container .nav-arrow {
      position: absolute;
      top: 46%;
      transform: translateY(-50%);
      z-index: 20;
      background: var(--${id}-accent-color);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 999px;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
      box-shadow: 0 10px 24px rgba(140, 29, 61, 0.25);
      opacity: 1;
      visibility: visible;
      color: #fff;
      }
      
      .${id}-carousel-container .nav-arrow svg {
      stroke-linecap: round;
      stroke-linejoin: round;
      }
      
      .${id}-carousel-container .nav-arrow:hover {
      background: #a3284d;
      transform: translateY(-50%) scale(1.04);
      box-shadow: 0 14px 28px rgba(140, 29, 61, 0.35);
      }
      
      .${id}-carousel-container .nav-arrow:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
      }
      
      .${id}-carousel-container .nav-arrow-left {
      left: 0.75rem;
      }
      
      .${id}-carousel-container .nav-arrow-right {
      right: 1.75rem;
      }
      
      /* Responsive Card Dimensions - Using aspect ratios */
      /* Card width is controlled by slide width, not fixed widths */
      .${id}-product-card {
      width: 100%;
      /* Height is auto - determined by image + text content */
      }
      
      .${id}-card-image-container {
      width: 100%;
      aspect-ratio: var(--${id}-mobile-card-image-aspect-ratio);
      }
      
      @media (min-width: 768px) and (max-width: 1279px) {
      .${id}-card-image-container {
      aspect-ratio: var(--${id}-tablet-card-image-aspect-ratio);
      }
      }
      
      @media (min-width: 1280px) and (max-width: 1600px) {
      .${id}-card-image-container {
      aspect-ratio: var(--${id}-desktop-card-image-aspect-ratio);
      }
      }
      
      @media (min-width: 1601px) {
      .${id}-card-image-container {
      aspect-ratio: var(--${id}-large-desktop-card-image-aspect-ratio);
      }
      }
      
      /* Card Gap - Responsive */
      @media (min-width: 768px) {
      :host, :root {
          --${id}-card-gap: 16px;
      }
      }
      
      /* Touch/Swipe Support */
      .${id}-carousel-container {
      touch-action: pan-x pan-y;
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
      overflow: hidden;
      max-height: 100vh;
      }
      
      .${id}-carousel-wrapper {
      touch-action: pan-x pan-y;
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
      }
      
      /* Utility Classes */
      .${id}-top-margin {
      margin-top: var(--${id}-top-margin);
      }
      
      .${id}-bottom-margin {
      margin-bottom: var(--${id}-bottom-margin);
      }
      
      .${id}-font-family {
      font-family: var(--${id}-font-family);
      }
  `}</style>
  );
  };



  /**
   * getCardCornerRadius - Converts card corner radius dropdown value to pixel value
   * @param {string} radiusValue - Corner radius value from dropdown (none, small, large)
   * @returns {string} Corner radius value in pixels (e.g., "0px", "8px", "16px")
   */
  const getCardCornerRadius = (radiusValue) => {
      const radiusMap = {
          none: "0px",
          small: "8px",
          large: "16px"
      };
      return radiusMap[radiusValue] || radiusMap.none;
  };

  /**
   * getResponsivePaddingForPeek - Calculates responsive padding values for peek behavior
   * @returns {Object} Responsive padding map where each breakpoint resolves to { left, right }
   */
  const getResponsivePaddingForPeek = () => {
      // Card widths in pixels
      const mobileCardWidth = parseFloat(mobileCardImageAspectRatioWidth) || 274;
      const tabletCardWidth = parseFloat(tabletCardImageAspectRatioWidth) || 280;
      const desktopCardWidth = parseFloat(desktopCardImageAspectRatioWidth) || 236.8;
      const largeDesktopCardWidth = parseFloat(largeDesktopCardImageAspectRatioWidth) || 282.2;
      
      // Peek percentages: mobile (18%), tablet (40%), desktop (23%)
      const mobilePeekPercent = 0.18;
      const tabletPeekPercent = 0.40;
      const desktopPeekPercent = 0.23;
      
      // Calculate padding.right for each breakpoint
      const mobilePadding = Math.round(mobileCardWidth * mobilePeekPercent);
      const tabletPadding = Math.round(tabletCardWidth * tabletPeekPercent);
      const desktopPadding = Math.round(desktopCardWidth * desktopPeekPercent);
      const largeDesktopPadding = Math.round(largeDesktopCardWidth * desktopPeekPercent);
      
      return {
          xs: { left: 0, right: mobilePadding },
          sm: { left: 0, right: tabletPadding },
          md: { left: 0, right: desktopPadding },
          lg: { left: 0, right: largeDesktopPadding }
      };
  };

  /**
   * createProduct - Normalizes product data and prevents blank slides when the slug is missing
   * @param {Object} config - Raw product config
   * @returns {Object|null} Normalized product or null if the slug is empty
   */
  const createProduct = (config) => {
      const normalizedImage = typeof config.image === 'string' ? config.image.trim() : '';
      if (!normalizedImage) {
          return null;
      }
      const normalizedUrl = typeof config.ctaUrl === 'string' ? config.ctaUrl.trim() : config.ctaUrl;
      return {
          image: normalizedImage,
          imageAlt: config.imageAlt,
          eyebrow: config.eyebrow,
          headline: config.headline,
          subhead: config.subhead,
          ctaText: config.ctaText,
          ctaUrl: normalizedUrl || undefined,
          ctaAdobeTag: config.ctaAdobeTag,
      };
  };

  // Product data configuration
  const ProductCarouselPeekaboo = ({ id }) => {
  // Card gap: 13px for mobile, 16px for tablet and above
  const cardGap = { xs: 13, sm: 16, md: 16, lg: 16 };

  // Calculate responsive padding for peek behavior
  const peekPadding = getResponsivePaddingForPeek();

  // Product data - filter out products without images
  const products = [
      createProduct({
          image: product1Image,
          imageAlt: product1ImageAlt,
          eyebrow: product1Eyebrow,
          headline: product1Headline,
          subhead: product1Subhead,
          ctaText: product1CtaText,
          ctaUrl: product1CtaUrl,
          ctaAdobeTag: product1CtaAdobeTag,
      }),
      createProduct({
          image: product2Image,
          imageAlt: product2ImageAlt,
          eyebrow: product2Eyebrow,
          headline: product2Headline,
          subhead: product2Subhead,
          ctaText: product2CtaText,
          ctaUrl: product2CtaUrl,
          ctaAdobeTag: product2CtaAdobeTag,
      }),
      createProduct({
          image: product3Image,
          imageAlt: product3ImageAlt,
          eyebrow: product3Eyebrow,
          headline: product3Headline,
          subhead: product3Subhead,
          ctaText: product3CtaText,
          ctaUrl: product3CtaUrl,
          ctaAdobeTag: product3CtaAdobeTag,
      }),
      createProduct({
          image: product4Image,
          imageAlt: product4ImageAlt,
          eyebrow: product4Eyebrow,
          headline: product4Headline,
          subhead: product4Subhead,
          ctaText: product4CtaText,
          ctaUrl: product4CtaUrl,
          ctaAdobeTag: product4CtaAdobeTag,
      }),
      createProduct({
          image: product5Image,
          imageAlt: product5ImageAlt,
          eyebrow: product5Eyebrow,
          headline: product5Headline,
          subhead: product5Subhead,
          ctaText: product5CtaText,
          ctaUrl: product5CtaUrl,
          ctaAdobeTag: product5CtaAdobeTag,
      }),
      createProduct({
          image: product6Image,
          imageAlt: product6ImageAlt,
          eyebrow: product6Eyebrow,
          headline: product6Headline,
          subhead: product6Subhead,
          ctaText: product6CtaText,
          ctaUrl: product6CtaUrl,
          ctaAdobeTag: product6CtaAdobeTag,
      }),
      createProduct({
          image: product7Image,
          imageAlt: product7ImageAlt,
          eyebrow: product7Eyebrow,
          headline: product7Headline,
          subhead: product7Subhead,
          ctaText: product7CtaText,
          ctaUrl: product7CtaUrl,
          ctaAdobeTag: product7CtaAdobeTag,
      }),
      createProduct({
          image: product8Image,
          imageAlt: product8ImageAlt,
          eyebrow: product8Eyebrow,
          headline: product8Headline,
          subhead: product8Subhead,
          ctaText: product8CtaText,
          ctaUrl: product8CtaUrl,
          ctaAdobeTag: product8CtaAdobeTag,
      }),
      createProduct({
          image: product9Image,
          imageAlt: product9ImageAlt,
          eyebrow: product9Eyebrow,
          headline: product9Headline,
          subhead: product9Subhead,
          ctaText: product9CtaText,
          ctaUrl: product9CtaUrl,
          ctaAdobeTag: product9CtaAdobeTag,
      }),
      createProduct({
          image: product10Image,
          imageAlt: product10ImageAlt,
          eyebrow: product10Eyebrow,
          headline: product10Headline,
          subhead: product10Subhead,
          ctaText: product10CtaText,
          ctaUrl: product10CtaUrl,
          ctaAdobeTag: product10CtaAdobeTag,
      }),
      createProduct({
          image: product11Image,
          imageAlt: product11ImageAlt,
          eyebrow: product11Eyebrow,
          headline: product11Headline,
          subhead: product11Subhead,
          ctaText: product11CtaText,
          ctaUrl: product11CtaUrl,
          ctaAdobeTag: product11CtaAdobeTag,
      }),
      createProduct({
          image: product12Image,
          imageAlt: product12ImageAlt,
          eyebrow: product12Eyebrow,
          headline: product12Headline,
          subhead: product12Subhead,
          ctaText: product12CtaText,
          ctaUrl: product12CtaUrl,
          ctaAdobeTag: product12CtaAdobeTag,
      }),
      createProduct({
          image: product13Image,
          imageAlt: product13ImageAlt,
          eyebrow: product13Eyebrow,
          headline: product13Headline,
          subhead: product13Subhead,
          ctaText: product13CtaText,
          ctaUrl: product13CtaUrl,
          ctaAdobeTag: product13CtaAdobeTag,
      }),
      createProduct({
          image: product14Image,
          imageAlt: product14ImageAlt,
          eyebrow: product14Eyebrow,
          headline: product14Headline,
          subhead: product14Subhead,
          ctaText: product14CtaText,
          ctaUrl: product14CtaUrl,
          ctaAdobeTag: product14CtaAdobeTag,
      }),
      createProduct({
          image: product15Image,
          imageAlt: product15ImageAlt,
          eyebrow: product15Eyebrow,
          headline: product15Headline,
          subhead: product15Subhead,
          ctaText: product15CtaText,
          ctaUrl: product15CtaUrl,
          ctaAdobeTag: product15CtaAdobeTag,
      }),
      createProduct({
          image: product16Image,
          imageAlt: product16ImageAlt,
          eyebrow: product16Eyebrow,
          headline: product16Headline,
          subhead: product16Subhead,
          ctaText: product16CtaText,
          ctaUrl: product16CtaUrl,
          ctaAdobeTag: product16CtaAdobeTag,
      }),
      createProduct({
          image: product17Image,
          imageAlt: product17ImageAlt,
          eyebrow: product17Eyebrow,
          headline: product17Headline,
          subhead: product17Subhead,
          ctaText: product17CtaText,
          ctaUrl: product17CtaUrl,
          ctaAdobeTag: product17CtaAdobeTag,
      }),
      createProduct({
          image: product18Image,
          imageAlt: product18ImageAlt,
          eyebrow: product18Eyebrow,
          headline: product18Headline,
          subhead: product18Subhead,
          ctaText: product18CtaText,
          ctaUrl: product18CtaUrl,
          ctaAdobeTag: product18CtaAdobeTag,
      })
  ].filter(Boolean); // Remove falsy values

  const totalProducts = products.length;

  if (totalProducts === 0) {
      return (
      <>
          <ProductCarouselStyleVars id={id} />
          <ProductCarouselStyles id={id} containerBehavior={containerBehavior} />
          
          <ResponsiveContainer containerBehavior={containerBehavior}>
          <div className={`${id}-top-margin ${id}-bottom-margin`}>
              {showSectionTitle === "true" && (
              <div className={`section-header section-header-${sectionTitleAlignment}`}>
                  <div className={`${id}-section-title`}>
                  {sectionTitle}
                  </div>
                  {showSectionCta === "true" && sectionCtaText && (
                  <SafeLink href={sectionCtaUrl} data-aali={sectionCtaAdobeTag}>
                      <Button
                          variant={sectionCtaVariant}
                          className={`${id}-section-cta ${sectionCtaVariant === 'solid' ? `${id}-section-cta-button` : `${id}-section-cta-underline`}`}
                          color="#171717"
                          backgroundColor={sectionCtaVariant === 'solid' ? sectionCtaBackgroundColor : undefined}
                          isLinkChild={!!sectionCtaUrl}
                          id={id}
                      >
                          {sectionCtaText}
                      </Button>
                  </SafeLink>
                  )}
              </div>
              )}
              <div className="text-center py-8">
              <p className="text-gray-500">No products available</p>
              </div>
          </div>
          </ResponsiveContainer>
      </>
      );
  }

  return (
      <>
      <ProductCarouselStyleVars id={id} />
      <ProductCarouselStyles id={id} containerBehavior={containerBehavior} />

      <ResponsiveContainer   containerBehavior={containerBehavior}>
          <div className={`${id}-top-margin ${id}-bottom-margin`}>
          {/* Section Title */}
          {showSectionTitle === "true" && (
              <div className={`section-header section-header-${sectionTitleAlignment}`}>
              <div className={`${id}-section-title`}>
                  {sectionTitle}
              </div>
              {showSectionCta === "true" && sectionCtaText && (
                  <SafeLink href={sectionCtaUrl} data-aali={sectionCtaAdobeTag}>
                  <Button
                      variant={sectionCtaVariant}
                      className={`${id}-section-cta ${sectionCtaVariant === 'solid' ? `${id}-section-cta-button` : `${id}-section-cta-underline`}`}
                      color="#171717"
                      backgroundColor={sectionCtaVariant === 'solid' ? sectionCtaBackgroundColor : undefined}
                      isLinkChild={!!sectionCtaUrl}
                      id={id}
                  >
                      {sectionCtaText}
                  </Button>
                  </SafeLink>
              )}
              </div>
          )}

          {/* Product Carousel */}
          <div className={`${id}-carousel-container`}>
              <Carousel
                  loop={false}
                  perPage={{ xs: 1, sm: 2, md: 5, lg: 5 }}
                  perMove={1}
                  gap={cardGap}
                  padding={peekPadding}
                  renderPrevArrow={LeftArrow}
                  renderNextArrow={RightArrow}
                  navigation={true}
                  drag={true}
                  className={`${id}-carousel-wrapper`}
                  ariaLabel="Product carousel"
              >
                  {products.map((product, index) => (
                      <ProductCard
                          key={index}
                          product={product}
                          id={id}
                          cardCtaVariant={cardCtaVariant}
                          cardCtaColor="#1F1F1F"
                          cardCtaBackgroundColor={cardCtaBackgroundColor}
                      />
                  ))}
              </Carousel>
          </div>
          </div>
      </ResponsiveContainer>
      </>
  );
  };

  /**
   * buildImageUrl - Constructs Scene7 image URLs for responsive images
   * @param {string} slug - Image slug identifier
   * @param {string|null} [suffix=null] - Device suffix ('m', 't', 'd', 'l') or null
   * @param {string} preset - Image preset (e.g., "$DWP_PHOTO$", "$DWP_RAW$")
   * @returns {string|null} Complete Scene7 image URL or null if invalid parameters
   * @throws {Error} Logs warning to console if slug or preset is missing
   */
function buildImageUrl(slug, suffix = null, preset) {
if (typeof slug !== 'string') {
    return null;
}

const trimmedSlug = slug.trim();
if (!trimmedSlug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
}

let baseSlug = trimmedSlug;
const extensionMatch = baseSlug.match(/\.(?:jpe?g|png|gif|webp)$/i);
if (extensionMatch) {
    baseSlug = baseSlug.slice(0, -extensionMatch[0].length);
}

const shouldAppendSuffix = suffix && !['d', 'l'].includes(suffix);
const deviceSlug = shouldAppendSuffix ? `${baseSlug}_${suffix}` : baseSlug;

const baseUrl = "https://belk.scene7.com/is";
// Ensure preset is a string before calling includes
const presetString = String(preset || "");
const contentType = presetString.includes("RAW") ? "content" : "image";

const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
});

return `${baseUrl}/${contentType}/Belk/${deviceSlug}?${presetString}&${otherParams.toString()}`;
}

  export default ProductCarouselPeekaboo;