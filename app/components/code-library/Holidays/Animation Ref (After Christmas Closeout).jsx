"use client"
// @version v1
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Header }
const sectionTitle = $(sectionTitle:RichText="After Christmas Closeout";color="#ffffff");
const sectionTitleImage = $(sectionTitleImage:String="");
const sectionTitleImageAltText = $(sectionTitleImageAltText:String="");
const sectionTitleImagePreset = $(sectionTitleImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionTitleHighlight = $(sectionTitleHighlight:String="");
const sectionTitleMarginTop = $(sectionTitleMarginTop:Dropdown[None|mt-0,Small|mt-4,Medium|mt-8,Large|mt-12]="mt-0");
const sectionTitleMarginBottom = $(sectionTitleMarginBottom:Dropdown[None|mb-0,Small|mb-4,Medium|mb-8,Large|mb-12]="mb-0");
const sectionSubhead = $(sectionSubhead:RichText="Keep the holidays going with deals from 7.99";color="#ffffff");
const sectionTitleAspectRatioDesktopWidth = $(sectionTitleAspectRatioDesktopWidth:String="");
const sectionTitleAspectRatioDesktopHeight = $(sectionTitleAspectRatioDesktopHeight:String="");
const sectionTitleAspectRatioTabletWidth = $(sectionTitleAspectRatioTabletWidth:String="");
const sectionTitleAspectRatioTabletHeight = $(sectionTitleAspectRatioTabletHeight:String="");
const sectionTitleAspectRatioMobileWidth = $(sectionTitleAspectRatioMobileWidth:String="");
const sectionTitleAspectRatioMobileHeight = $(sectionTitleAspectRatioMobileHeight:String="");
const sectionTitleImageMaxWidth = $(sectionTitleImageMaxWidth:String="");
const sectionTitleImageMaxHeight = $(sectionTitleImageMaxHeight:String="");
// endgroup

// group: { 2. Section Layout }
const sectionAlignment = $(sectionAlignment:Dropdown[Left|left,Center|center,Right|right]="center");
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-20");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-0");
const containerBehavior = $(containerBehavior:Dropdown[Full browser width|max-w-full,Limit to container|max-w-inset,Centered|max-w-centered]="max-w-centered";required=true);
const roundedCornersTop = $(roundedCornersTop:Dropdown[None|rounded-t-none,Small|rounded-t-sm,Medium|rounded-t-md,Large|rounded-t-lg,Extra Large|rounded-t-xl]="rounded-t-md");
const roundedCornersBottom = $(roundedCornersBottom:Dropdown[None|rounded-b-none,Small|rounded-b-sm,Medium|rounded-b-md,Large|rounded-b-lg,Extra Large|rounded-b-xl]="rounded-b-md");
const desktopContainerAspectRatioWidth = $(desktopContainerAspectRatioWidth:String="");
const desktopContainerAspectRatioHeight = $(desktopContainerAspectRatioHeight:String="");
const tabletContainerAspectRatioWidth = $(tabletContainerAspectRatioWidth:String="");
const tabletContainerAspectRatioHeight = $(tabletContainerAspectRatioHeight:String="");
const mobileContainerAspectRatioWidth = $(mobileContainerAspectRatioWidth:String="");
const mobileContainerAspectRatioHeight = $(mobileContainerAspectRatioHeight:String="");
const sectionPaddingDesktop = $(sectionPaddingDesktop:Dropdown[None|none,Small|small,Medium|medium,Large|large]="medium");
const sectionPaddingMobile = $(sectionPaddingMobile:Dropdown[None|none,Small|small,Medium|medium,Large|large]="medium");
// endgroup

// group: { 3. Section Background }
const sectionBackgroundColor = $(sectionBackgroundColor:Color="#B71C1C");
const sectionBackgroundImage = $(sectionBackgroundImage:String="wkxx_2025_test_afterchristmas_twinklelights2");
const sectionBackgroundImagePreset = $(sectionBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sectionBackgroundAlt = $(sectionBackgroundAlt:String="");
const sectionBorderRadius = $(sectionBorderRadius:Dropdown[None|rounded-none,Small|rounded-sm,Medium|rounded-md,Large|rounded-lg]="rounded-md");
// endgroup

// group: { 4. Typography }
const fontFamily = $(fontFamily:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Bakersfield|Bakersfield]="proxima-nova");
const sectionTitleMinimumFontSize = $(sectionTitleMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="2rem");
const sectionTitleMaximumFontSize = $(sectionTitleMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="3.75rem");
const sectionSubheadMinimumFontSize = $(sectionSubheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const sectionSubheadMaximumFontSize = $(sectionSubheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
const eyebrowMinimumFontSize = $(eyebrowMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const eyebrowMaximumFontSize = $(eyebrowMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const headlineMinimumFontSize = $(headlineMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.5rem");
const headlineMaximumFontSize = $(headlineMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="3.375rem");
const subheadMinimumFontSize = $(subheadMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const subheadMaximumFontSize = $(subheadMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.75rem");
const ctaMinimumFontSize = $(ctaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaMaximumFontSize = $(ctaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.25rem");
const highlightFontFamily = $(highlightFontFamily:String="roslindale-variable");
// endgroup

// group: { 5. CTA Styling }
const ctaVariant = $(ctaVariant:Dropdown[Solid|solid,Underline|underline]="solid");
const ctaBackgroundColor = $(ctaBackgroundColor:Color="#FFFFFF");
// endgroup

// group: { 6. CTA Buttons Configuration }
const ctaButtonCount = $(ctaButtonCount:Dropdown[3 Buttons|3,4 Buttons|4,5 Buttons|5,6 Buttons|6,7 Buttons|7,8 Buttons|8]="6");
const ctaButtonBackgroundColor = $(ctaButtonBackgroundColor:Color="#ffffff");
const ctaButtonBackgroundColorHover = $(ctaButtonBackgroundColorHover:Color="#f5f5f5");
const ctaButtonBorderRadius = $(ctaButtonBorderRadius:String="4");
const ctaButtonFontSizeDesktop = $(ctaButtonFontSizeDesktop:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaButtonFontSizeMobile = $(ctaButtonFontSizeMobile:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const ctaButtonGap = $(ctaButtonGap:String="16");
const ctaButtonWidth = $(ctaButtonWidth:String="140");
// endgroup

// group: { 7. CTA Button 1 }
const firstCtaContent = $(firstCtaContent:RichText="Women";color="#000000");
const firstCtaUrl = $(firstCtaUrl:String="/";required=true);
const firstCtaAdobeTag = $(firstCtaAdobeTag:String="";required=true);
// endgroup

// group: { 8. CTA Button 2 }
const secondCtaContent = $(secondCtaContent:RichText="Men";color="#000000");
const secondCtaUrl = $(secondCtaUrl:String="/";required=true);
const secondCtaAdobeTag = $(secondCtaAdobeTag:String="";required=true);
// endgroup

// group: { 9. CTA Button 3 }
const thirdCtaContent = $(thirdCtaContent:RichText="Kids";color="#000000");
const thirdCtaUrl = $(thirdCtaUrl:String="/";required=true);
const thirdCtaAdobeTag = $(thirdCtaAdobeTag:String="";required=true);
// endgroup

// group: { 10. CTA Button 4 }
const fourthCtaContent = $(fourthCtaContent:RichText="Holiday Decor";color="#000000");
const fourthCtaUrl = $(fourthCtaUrl:String="/";required=true);
const fourthCtaAdobeTag = $(fourthCtaAdobeTag:String="";required=true);
// endgroup

// group: { 11. CTA Button 5 }
const fifthCtaContent = $(fifthCtaContent:RichText="Cozy";color="#000000");
const fifthCtaUrl = $(fifthCtaUrl:String="/";required=true);
const fifthCtaAdobeTag = $(fifthCtaAdobeTag:String="";required=true);
// endgroup

// group: { 12. CTA Button 6 }
const sixthCtaContent = $(sixthCtaContent:RichText="Outerwear";color="#000000");
const sixthCtaUrl = $(sixthCtaUrl:String="/";required=true);
const sixthCtaAdobeTag = $(sixthCtaAdobeTag:String="";required=true);
// endgroup

// group: { 12.1. CTA Button 7 }
const seventhCtaContent = $(seventhCtaContent:RichText="";color="#000000");
const seventhCtaUrl = $(seventhCtaUrl:String="/";required=true);
const seventhCtaAdobeTag = $(seventhCtaAdobeTag:String="";required=true);
// endgroup

// group: { 12.2. CTA Button 8 }
const eighthCtaContent = $(eighthCtaContent:RichText="";color="#000000");
const eighthCtaUrl = $(eighthCtaUrl:String="/";required=true);
const eighthCtaAdobeTag = $(eighthCtaAdobeTag:String="";required=true);
// endgroup

// group: { 13. Column Layout }
const desktopColumnAspectRatioWidth = $(desktopColumnAspectRatioWidth:String="";required=true);
const desktopColumnAspectRatioHeight = $(desktopColumnAspectRatioHeight:String="";required=true);
const tabletColumnAspectRatioWidth = $(tabletColumnAspectRatioWidth:String="";required=true);
const tabletColumnAspectRatioHeight = $(tabletColumnAspectRatioHeight:String="";required=true);
const mobileColumnAspectRatioWidth = $(mobileColumnAspectRatioWidth:String="";required=true);
const mobileColumnAspectRatioHeight = $(mobileColumnAspectRatioHeight:String="";required=true);
const columnHorizontalAlignment = $(columnHorizontalAlignment:Dropdown[Left|items-start,Center|items-center,Right|items-end]="items-start");
const columnVerticalAlignment = $(columnVerticalAlignment:Dropdown[Top|justify-start,Center|justify-center,Bottom|justify-end]="justify-start");
// endgroup

// group: { 13.1. Responsive Grid Configuration }
const mobileGridLayout = $(mobileGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,4 Columns|grid-cols-4]="grid-cols-2");
const tabletGridLayout = $(tabletGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-2");
const desktopGridLayout = $(desktopGridLayout:Dropdown[1 Column|grid-cols-1,2 Columns|grid-cols-2,3 Columns|grid-cols-3,4 Columns|grid-cols-4]="grid-cols-4");
const gridGap = $(gridGap:Dropdown[Tight|gap-2,Regular|gap-4,Wide|gap-6,Extra Wide|gap-8]="gap-4");
// endgroup

// group: { 14. Column Styling }
const columnCtaVariant = $(columnCtaVariant:Dropdown[Solid|solid,Underline|underline]="underline");
const columnCtaBackgroundColor = $(columnCtaBackgroundColor:Color="#FFFFFF");
const columnCtaBorderRadius = $(columnCtaBorderRadius:String="4");
const columnRoundedCorners = $(columnRoundedCorners:Dropdown[None|rounded-none,Small|rounded-sm,Medium|rounded-md,Large|rounded-2xl]="rounded-2xl");
const columnCtaFontSizeDesktop = $(columnCtaFontSizeDesktop:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1rem");
const columnCtaFontSizeMobile = $(columnCtaFontSizeMobile:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const columnCtaMinimumFontSize = $(columnCtaMinimumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="0.875rem");
const columnCtaMaximumFontSize = $(columnCtaMaximumFontSize:Dropdown[3xs|0.75rem,2xs|0.813rem,xs|0.875rem,s|0.938rem,m|1rem,l|1.125rem,xl|1.25rem,2xl|1.5rem,3xl|1.75rem,4xl|2rem,5xl|2.25rem,6xl|2.5rem,7xl|3rem,8xl|3.375rem,9xl|3.75rem,10xl|5rem]="1.125rem");
const eyebrowImageWidth = $(eyebrowImageWidth:String="");
const eyebrowImageHeight = $(eyebrowImageHeight:String="");
const eyebrowImagePreset = $(eyebrowImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const headlineImageWidth = $(headlineImageWidth:String="");
const headlineImageHeight = $(headlineImageHeight:String="");
const headlineImagePreset = $(headlineImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const subheadImageWidth = $(subheadImageWidth:String="");
const subheadImageHeight = $(subheadImageHeight:String="");
const subheadImagePreset = $(subheadImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
// endgroup



// group: { 15. Column 1 }
const firstColumnBackgroundColor = $(firstColumnBackgroundColor:Color="#FFFFFF");
const firstColumnBackgroundImage = $(firstColumnBackgroundImage:String="");
const firstColumnBackgroundImageAltText = $(firstColumnBackgroundImageAltText:String="");
const firstColumnBackgroundImagePreset = $(firstColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstColumnEyebrowImage = $(firstColumnEyebrowImage:String="");
const firstColumnEyebrowImageAltText = $(firstColumnEyebrowImageAltText:String="");
const firstColumnEyebrowContent = $(firstColumnEyebrowContent:RichText="EYEBROW";color="#000000");
const firstColumnHeadlineImage = $(firstColumnHeadlineImage:String="");
const firstColumnHeadlineImageAltText = $(firstColumnHeadlineImageAltText:String="");
const firstColumnHeadlineContent = $(firstColumnHeadlineContent:RichText="Headline / % Off";color="#000000");
const firstColumnSubheadImage = $(firstColumnSubheadImage:String="");
const firstColumnSubheadImageAltText = $(firstColumnSubheadImageAltText:String="");
const firstColumnSubheadContent = $(firstColumnSubheadContent:RichText="Sub-line";color="#000000");
const firstColumnCtaContent = $(firstColumnCtaContent:RichText="Shop Now";color="#000000");
const firstColumnCtaUrl = $(firstColumnCtaUrl:String="/";required=true);
const firstColumnCtaAdobeTag = $(firstColumnCtaAdobeTag:String="";required=true);
// endgroup

// group: { 16. Column 2 }
const secondColumnBackgroundColor = $(secondColumnBackgroundColor:Color="#FFFFFF");
const secondColumnBackgroundImage = $(secondColumnBackgroundImage:String="");
const secondColumnBackgroundImageAltText = $(secondColumnBackgroundImageAltText:String="");
const secondColumnBackgroundImagePreset = $(secondColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondColumnEyebrowImage = $(secondColumnEyebrowImage:String="");
const secondColumnEyebrowImageAltText = $(secondColumnEyebrowImageAltText:String="");
const secondColumnEyebrowContent = $(secondColumnEyebrowContent:RichText="EYEBROW";color="#000000");
const secondColumnHeadlineImage = $(secondColumnHeadlineImage:String="");
const secondColumnHeadlineImageAltText = $(secondColumnHeadlineImageAltText:String="");
const secondColumnHeadlineContent = $(secondColumnHeadlineContent:RichText="Headline / % Off";color="#000000");
const secondColumnSubheadImage = $(secondColumnSubheadImage:String="");
const secondColumnSubheadImageAltText = $(secondColumnSubheadImageAltText:String="");
const secondColumnSubheadContent = $(secondColumnSubheadContent:RichText="Sub-line";color="#000000");
const secondColumnCtaContent = $(secondColumnCtaContent:RichText="Shop Now";color="#000000");
const secondColumnCtaUrl = $(secondColumnCtaUrl:String="/";required=true);
const secondColumnCtaAdobeTag = $(secondColumnCtaAdobeTag:String="";required=true);
// endgroup

// group: { 17. Column 3 }
const thirdColumnBackgroundColor = $(thirdColumnBackgroundColor:Color="#FFFFFF");
const thirdColumnBackgroundImage = $(thirdColumnBackgroundImage:String="");
const thirdColumnBackgroundImageAltText = $(thirdColumnBackgroundImageAltText:String="");
const thirdColumnBackgroundImagePreset = $(thirdColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdColumnEyebrowImage = $(thirdColumnEyebrowImage:String="");
const thirdColumnEyebrowImageAltText = $(thirdColumnEyebrowImageAltText:String="");
const thirdColumnEyebrowContent = $(thirdColumnEyebrowContent:RichText="EYEBROW";color="#000000");
const thirdColumnHeadlineImage = $(thirdColumnHeadlineImage:String="");
const thirdColumnHeadlineImageAltText = $(thirdColumnHeadlineImageAltText:String="");
const thirdColumnHeadlineContent = $(thirdColumnHeadlineContent:RichText="Headline / % Off";color="#000000");
const thirdColumnSubheadImage = $(thirdColumnSubheadImage:String="");
const thirdColumnSubheadImageAltText = $(thirdColumnSubheadImageAltText:String="");
const thirdColumnSubheadContent = $(thirdColumnSubheadContent:RichText="Sub-line";color="#000000");
const thirdColumnCtaContent = $(thirdColumnCtaContent:RichText="Shop Now";color="#000000");
const thirdColumnCtaUrl = $(thirdColumnCtaUrl:String="/";required=true);
const thirdColumnCtaAdobeTag = $(thirdColumnCtaAdobeTag:String="";required=true);
// endgroup

// group: { 18. Column 4 }
const fourthColumnBackgroundColor = $(fourthColumnBackgroundColor:Color="#FFFFFF");
const fourthColumnBackgroundImage = $(fourthColumnBackgroundImage:String="");
const fourthColumnBackgroundImageAltText = $(fourthColumnBackgroundImageAltText:String="");
const fourthColumnBackgroundImagePreset = $(fourthColumnBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthColumnEyebrowImage = $(fourthColumnEyebrowImage:String="");
const fourthColumnEyebrowImageAltText = $(fourthColumnEyebrowImageAltText:String="");
const fourthColumnEyebrowContent = $(fourthColumnEyebrowContent:RichText="EYEBROW";color="#000000");
const fourthColumnHeadlineImage = $(fourthColumnHeadlineImage:String="");
const fourthColumnHeadlineImageAltText = $(fourthColumnHeadlineImageAltText:String="");
const fourthColumnHeadlineContent = $(fourthColumnHeadlineContent:RichText="Headline / % Off";color="#000000");
const fourthColumnSubheadImage = $(fourthColumnSubheadImage:String="");
const fourthColumnSubheadImageAltText = $(fourthColumnSubheadImageAltText:String="");
const fourthColumnSubheadContent = $(fourthColumnSubheadContent:RichText="Sub-line";color="#000000");
const fourthColumnCtaContent = $(fourthColumnCtaContent:RichText="Shop Now";color="#000000");
const fourthColumnCtaUrl = $(fourthColumnCtaUrl:String="/";required=true);
const fourthColumnCtaAdobeTag = $(fourthColumnCtaAdobeTag:String="";required=true);
// endgroup

const MOBILE_TO_DESKTOP_RATIO = 3.159;

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
 * @param {string} suffix - The device suffix ('m', 't', 'd', 'l') or null
 * @param {string} preset - The Scene7 preset to apply
 * @returns {string|null} The constructed image URL or null if parameters are missing
 */
function buildImageUrl(slug, suffix = null, preset) {
  if (typeof slug !== 'string') {
    return null;
  }
  if (!slug || !preset) {
    console.warn("Missing slug or preset for image URL construction");
    return null;
  }

  let deviceSlug = slug;

  if (suffix) {
    deviceSlug = `${slug}_${suffix}`;
  }

  // Reset to the original slug if suffix is 'd' or 'l' because the original slug is more appropriate for these cases
  if (suffix === 'd' || suffix === 'l') {
    deviceSlug = slug;
  }

  const baseUrl = "https://belk.scene7.com/is";
  // Ensure preset is a string before calling includes
  const presetString = String(preset || "");
  const contentType = presetString.includes("RAW") ? "content" : "image";

  // Build query string manually to avoid URL encoding the preset parameter
  const otherParams = new URLSearchParams({
    bgc: "0,0,0",
    color: "0,0,0,0",
    fmt: "png-alpha",
    opac: "100",
  });

  return `${baseUrl}/${contentType}/Belk/${deviceSlug}?${presetString}&${otherParams.toString()}`;
}

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;

const Button = ({
  variant = "underline",
  className = "relative flex cursor-pointer",
  children,
  ...props
}) => {
  if (variant === "solid") {
    return (
      <button className={`flex-col font-bold gap-1.5 belk-button ${className} px-8 py-2 rounded-md`} {...props}>
        <span className="relative inline-block">
          {children}
        </span>
      </button>
    )
  }
  return (
    <button className={`flex-col font-bold gap-1.5 belk-button ${className}`} {...props}>
      <span className="relative inline-block">
        {children}
        <span className="block relative h-0.5 mt-1">
          <svg
            className={`absolute bottom-0 left-0 h-full w-full`}
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
 * Picture-based responsive image component using HTML picture element
 */
const PictureResponsiveImage = ({
  images,
  alt,
  className = "",
  imageClassName = "-z-1 object-cover object-center",
  children,
}) => {
  const [hasError, setHasError] = useState(false);
  const { mobile, tablet, desktop, largeDesktop } = images || {};
  const fallbackSrc = mobile || tablet || desktop || largeDesktop;
  const hasAnyImage = mobile || tablet || desktop || largeDesktop;
  const showPicture = hasAnyImage && isValidImageUrl(fallbackSrc);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showPicture && (
        <div className="relative w-full h-full min-h-full">
          <picture className="block relative w-full h-full">
            {mobile && isValidImageUrl(mobile) && <source alt={alt ?? ''} media="(max-width: 767px)" srcSet={mobile} />}
            {tablet && isValidImageUrl(tablet) && <source alt={alt ?? ''} media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
            {desktop && isValidImageUrl(desktop) && <source alt={alt ?? ''} media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
            {largeDesktop && isValidImageUrl(largeDesktop) && <source alt={alt ?? ''} media="(min-width: 1920px)" srcSet={largeDesktop} />}
            <Image
              className={`${imageClassName}`}
              src={fallbackSrc}
              alt={alt ?? ''}
              fill
              onError={handleError}
            />
          </picture>
        </div>
      )}
      {children}
    </div>
  );
}

const FourColumnCTAAnimationRefStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer container {
          --${id}-section-background-color: ${sectionBackgroundColor || 'transparent'};
          --${id}-section-padding-mobile: ${sectionPaddingMobile === 'none' ? '0' : sectionPaddingMobile === 'small' ? '1rem' : sectionPaddingMobile === 'medium' ? '1.5rem' : '2rem'};
          --${id}-section-padding-desktop: ${sectionPaddingDesktop === 'none' ? '0' : sectionPaddingDesktop === 'small' ? '1rem' : sectionPaddingDesktop === 'medium' ? '2rem' : '3rem'};
          --${id}-font-family: ${fontFamily};
          --${id}-highlight-font-family: ${highlightFontFamily};
          --${id}-desktop-container-aspect-ratio: ${desktopContainerAspectRatioWidth} / ${desktopContainerAspectRatioHeight};
          --${id}-tablet-container-aspect-ratio: ${tabletContainerAspectRatioWidth} / ${tabletContainerAspectRatioHeight};
          --${id}-mobile-container-aspect-ratio: ${mobileContainerAspectRatioWidth} / ${mobileContainerAspectRatioHeight};
        }

        @layer typography {
          --${id}-section-title-font-size: clamp(${sectionTitleMinimumFontSize}, 2vw, ${sectionTitleMaximumFontSize});
          --${id}-section-subhead-font-size: clamp(${sectionSubheadMinimumFontSize}, 1.5vw, ${sectionSubheadMaximumFontSize});
          --${id}-eyebrow-font-size: clamp(${eyebrowMinimumFontSize}, 1.5vw, ${eyebrowMaximumFontSize});
          --${id}-eyebrow-max-width: clamp(${eyebrowImageWidth}px, 50vw, ${eyebrowImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-eyebrow-max-height: clamp(${eyebrowImageHeight}px, 50vw, ${eyebrowImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-headline-font-size: clamp(${headlineMinimumFontSize}, 2vw, ${headlineMaximumFontSize});
          --${id}-headline-max-width: clamp(${headlineImageWidth}px, 50vw, ${headlineImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-headline-max-height: clamp(${headlineImageHeight}px, 50vw, ${headlineImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-subhead-font-size: clamp(${subheadMinimumFontSize}, 1.5vw, ${subheadMaximumFontSize});
          --${id}-subhead-max-width: clamp(${subheadImageWidth}px, 50vw, ${subheadImageWidth * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-subhead-max-height: clamp(${subheadImageHeight}px, 50vw, ${subheadImageHeight * MOBILE_TO_DESKTOP_RATIO}px);
          --${id}-cta-font-size: clamp(${ctaMinimumFontSize}, 1.5vw, ${ctaMaximumFontSize});
          --${id}-section-title-image-mobile-aspect-ratio: ${sectionTitleAspectRatioMobileWidth && sectionTitleAspectRatioMobileHeight ? `${sectionTitleAspectRatioMobileWidth} / ${sectionTitleAspectRatioMobileHeight}` : 'auto'};
          --${id}-section-title-image-tablet-aspect-ratio: ${sectionTitleAspectRatioTabletWidth && sectionTitleAspectRatioTabletHeight ? `${sectionTitleAspectRatioTabletWidth} / ${sectionTitleAspectRatioTabletHeight}` : 'auto'};
          --${id}-section-title-image-desktop-aspect-ratio: ${sectionTitleAspectRatioDesktopWidth && sectionTitleAspectRatioDesktopHeight ? `${sectionTitleAspectRatioDesktopWidth} / ${sectionTitleAspectRatioDesktopHeight}` : 'auto'};
          --${id}-section-title-image-max-width: ${sectionTitleImageMaxWidth ? `${sectionTitleImageMaxWidth}px` : 'none'};
          --${id}-section-title-image-max-height: ${sectionTitleImageMaxHeight ? `${sectionTitleImageMaxHeight}px` : 'none'};
        }

        @layer cta {
          --${id}-cta-background-color: ${ctaBackgroundColor};
          --${id}-cta-button-bg: ${ctaButtonBackgroundColor};
          --${id}-cta-button-bg-hover: ${ctaButtonBackgroundColorHover};
          --${id}-cta-button-border-radius: ${ctaButtonBorderRadius}px;
          --${id}-cta-button-font-size-desktop: ${ctaButtonFontSizeDesktop};
          --${id}-cta-button-font-size-mobile: clamp(0.7rem, 2.5vw, ${ctaButtonFontSizeMobile});
          --${id}-cta-button-gap: ${ctaButtonGap}px;
          --${id}-cta-button-width: ${ctaButtonWidth}px;
        }

        @layer columns {
          --${id}-column-horizontal-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
          --${id}-column-vertical-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
          --${id}-desktop-column-aspect-ratio: ${desktopColumnAspectRatioWidth && desktopColumnAspectRatioHeight ? `${desktopColumnAspectRatioWidth} / ${desktopColumnAspectRatioHeight}` : 'auto'};
          --${id}-tablet-column-aspect-ratio: ${tabletColumnAspectRatioWidth && tabletColumnAspectRatioHeight ? `${tabletColumnAspectRatioWidth} / ${tabletColumnAspectRatioHeight}` : 'auto'};
          --${id}-mobile-column-aspect-ratio: ${mobileColumnAspectRatioWidth && mobileColumnAspectRatioHeight ? `${mobileColumnAspectRatioWidth} / ${mobileColumnAspectRatioHeight}` : 'auto'};
          --${id}-mobile-grid-layout: ${mobileGridLayout};
          --${id}-tablet-grid-layout: ${tabletGridLayout};
          --${id}-desktop-grid-layout: ${desktopGridLayout};
          --${id}-grid-gap: ${gridGap};
          --${id}-first-column-background-color: ${firstColumnBackgroundColor};
          --${id}-second-column-background-color: ${secondColumnBackgroundColor};
          --${id}-third-column-background-color: ${thirdColumnBackgroundColor};
          --${id}-fourth-column-background-color: ${fourthColumnBackgroundColor};
          --${id}-column-cta-background-color: ${columnCtaBackgroundColor};
          --${id}-column-cta-border-radius: ${columnCtaBorderRadius}px;
          --${id}-column-cta-font-size-desktop: ${columnCtaFontSizeDesktop};
          --${id}-column-cta-font-size-mobile: ${columnCtaFontSizeMobile};
          --${id}-column-cta-font-size: clamp(${columnCtaMinimumFontSize}, 1.5vw, ${columnCtaMaximumFontSize});
        }
      }
    }
  `}</style>
);

const FourColumnCTAAnimationRefStyles = ({ id }) => (
  <style>{`
    .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    .h-0\\.5 {
      height: 0.125rem;
    }
    .border-px {
      border-width: 1px;
    }
    .px-2 {
      padding-left: calc(var(--spacing) * 2);
      padding-right: calc(var(--spacing) * 2);
    }
    .mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] {
      margin-left: max(36px, (100vw - 1560px) / 2);
      margin-right: max(36px, (100vw - 1560px) / 2);
    }
    .\\[\\&\\>div\\]\\:max-w-\\[100rem\\] > div {
      max-width: 100rem;
    }
    .\\[\\&\\>div\\]\\:w-full > div {
      width: 100%;
    }
    .\\[\\&\\>div\\]\\:mx-4 > div {
      margin-left: calc(var(--spacing) * 4);
      margin-right: calc(var(--spacing) * 4);
    }
    .\\[\\&\\>div\\]\\:px-5 > div {
      padding-left: calc(var(--spacing) * 5);
      padding-right: calc(var(--spacing) * 5);
    }
    @media (width >= 40rem) {
      .\\[\\&\\>div\\]\\:sm\\:mx-8 > div {
        margin-left: calc(var(--spacing) * 8);
        margin-right: calc(var(--spacing) * 8);
      }
    }
    @media (width >= 48rem) {
      .\\[\\&\\>div\\]\\:md\\:max-w-\\[var\\(--breakpoint-3xl\\)\\] > div {
        max-width: var(--breakpoint-3xl);
      }
      .\\[\\&\\>div\\]\\:md\\:px-8 > div {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .\\[\\&\\>div\\]\\:md\\:mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] > div {
        margin-left: max(36px, (100vw - 1560px) / 2);
        margin-right: max(36px, (100vw - 1560px) / 2);
      }
      .\\[\\&\\>div\\]\\:md\\:max-w-full > div {
        max-width: 100%;
      }
      .\\[\\&\\>div\\]\\:md\\:px-5 > div {
        padding-left: calc(var(--spacing) * 5);
        padding-right: calc(var(--spacing) * 5);
      }
      .md\\:px-8 {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
    }

    /* Background and content layout - CSS Grid stacking */
    .${id}-container-background-color {
      background-color: var(--${id}-section-background-color);
    }
    .${id}-section-bg-grid {
      display: grid;
      grid-template-areas: "stack";
    }
    .${id}-section-bg-grid > * {
      grid-area: stack;
    }
    .${id}-section-bg-layer {
      z-index: 0;
      min-height: 100%;
    }
    .${id}-section-content-layer {
      position: relative;
      z-index: 10;
    }
    .${id}-container-font-family {
      font-family: var(--${id}-font-family);
    }
    .text-left { text-align: left; }
    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .${id}-belk-text-clamp-section-title {
      font-size: var(--${id}-section-title-font-size);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    .closeout {
      font-family: var(--${id}-highlight-font-family);
    }
    .${id}-column-horizontal-padding {
      padding-left: var(--${id}-column-horizontal-padding);
      padding-right: var(--${id}-column-horizontal-padding);
    }
    .${id}-column-vertical-padding {
      padding-top: var(--${id}-column-vertical-padding);
      padding-bottom: var(--${id}-column-vertical-padding);
    }
    .${id}-aspect-\\[eyebrow\\] {
      aspect-ratio: ${eyebrowImageWidth} / ${eyebrowImageHeight};
    }
    .${id}-max-w-\\[eyebrow\\] {
      max-width: var(--${id}-eyebrow-max-width);
    }
    .${id}-h-\\[eyebrow\\] {
      max-height: var(--${id}-eyebrow-max-height);
    }
    .${id}-max-w-\\[headline\\] {
      max-width: var(--${id}-headline-max-width);
    }
    .${id}-h-\\[headline\\] {
      max-height: var(--${id}-headline-max-height);
    }
    .${id}-aspect-\\[headline\\] {
      aspect-ratio: ${headlineImageWidth} / ${headlineImageHeight};
    }
    .${id}-max-w-\\[subhead\\] {
      max-width: var(--${id}-subhead-max-width);
    }
    .${id}-max-h-\\[subhead\\] {
      max-height: var(--${id}-subhead-max-height);
    }
    .${id}-aspect-\\[subhead\\] {
      aspect-ratio: ${subheadImageWidth} / ${subheadImageHeight};
    }
    .${id}-aspect-\\[section-title-image-mobile\\] {
      aspect-ratio: var(--${id}-section-title-image-mobile-aspect-ratio);
    }
    @media (min-width: 768px) {
      .${id}-aspect-\\[section-title-image-tablet\\] {
        aspect-ratio: var(--${id}-section-title-image-tablet-aspect-ratio);
      }
    }
    @media (min-width: 1280px) {
      .${id}-aspect-\\[section-title-image-desktop\\] {
        aspect-ratio: var(--${id}-section-title-image-desktop-aspect-ratio);
      }
    }
    .${id}-max-w-\\[section-title-image\\] {
      max-width: var(--${id}-section-title-image-max-width);
    }
    .${id}-max-h-\\[section-title-image\\] {
      max-height: var(--${id}-section-title-image-max-height);
    }
    .${id}-section-title-image {
      position: relative;
      z-index: 1;
      display: block;
      width: 100%;
    }
    .${id}-bg-solid-button {
      background-color: var(--${id}-cta-background-color);
    }
    .${id}-belk-text-clamp-eyebrow {
      font-size: var(--${id}-eyebrow-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    .${id}-belk-text-clamp-headline {
      font-size: var(--${id}-headline-font-size);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    .${id}-belk-text-clamp-subhead {
      font-size: var(--${id}-section-subhead-font-size);
      line-height: 1.2;
      letter-spacing: 0;
    }
    .${id}-belk-text-clamp-cta {
      font-size: var(--${id}-cta-font-size);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    .${id}-aspect-\\[desktop-container\\] {
      aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-container\\] {
      aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-container\\] {
      aspect-ratio: var(--${id}-mobile-container-aspect-ratio);
    }
    .${id}-section-padding {
      padding: var(--${id}-section-padding-mobile);
    }
    @media (min-width: 1280px) {
      .${id}-section-padding {
        padding: var(--${id}-section-padding-desktop);
      }
    }

    @media (min-width: 768px) {
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
      }
      .md\\:${id}-aspect-auto {
        aspect-ratio: auto;
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
    }

    /* CTA Button Grid Styles */
    .${id}-cta-grid-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      // margin-top: 24px;
      // margin-bottom: 32px;
      width: 100%;
      max-width: 100%;
    }

    /* Mobile: All buttons same width, 3 per row */
    .${id}-cta-grid-container > * {
       flex: 0 0 calc((100% - 24px) / 3);
       max-width: calc((100% - 24px) / 3);
       box-sizing: border-box;
    }

    /* Reset margin hacks */
    .${id}-cta-grid-container > *:nth-child(n) {
       margin-left: 0;
       margin-right: 0;
    }

    @media (min-width: 48rem) {
        .${id}-cta-grid-container {
           display: flex;
           flex-wrap: wrap;
           gap: var(--${id}-cta-button-gap);
           justify-content: center;
           width: 100%;
           max-width: calc(4 * var(--${id}-cta-button-width) + 3 * var(--${id}-cta-button-gap) + 8rem);
           margin-left: auto;
           margin-right: auto;
        }
        .${id}-cta-grid-container > * {
           width: auto;
           max-width: none;
           flex: 0 0 auto;
        }
    }

    @media (min-width: 80rem) {
       .${id}-cta-grid-container {
          display: flex;
          flex-wrap: nowrap;
          width: 100%;
          max-width: none;
       }
        .${id}-cta-grid-container > * {
           flex: 0 0 auto;
           max-width: none;
        }
    }

    .${id}-cta-button-width {
      min-width: 0;
      height: 100%;
      width: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 10px 2px;
      font-size: var(--${id}-cta-button-font-size-mobile);
    }

    @media (width >= 48rem) {
      .${id}-cta-button-width {
        min-width: 6rem;
        min-height: 14px;
        height: 100%;
        width: var(--${id}-cta-button-width); /* Apply fixed width globally */
        padding: 8px 12px;
        font-size: var(--${id}-cta-button-font-size-desktop);
        text-align: center;
      }
    }

    @media (width >= 80rem) {
      .${id}-cta-button-width {
        width: var(--${id}-cta-button-width);
        height: auto;
        padding: 10px 16px;
        display: inline-flex;
        text-align: center;
      }
    }

    /* Responsive Grid Layout Classes */
    .${id}-grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .${id}-grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .${id}-grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .${id}-grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .${id}-gap-2 {
      gap: calc(var(--spacing) * 2);
    }
    .${id}-gap-4 {
      gap: calc(var(--spacing) * 4);
    }
    .${id}-gap-6 {
      gap: calc(var(--spacing) * 6);
    }
    .${id}-gap-8 {
      gap: calc(var(--spacing) * 8);
    }

    .${id}-aspect-\\[mobile-column\\] {
      aspect-ratio: var(--${id}-mobile-column-aspect-ratio);
    }

    @media (width >= 48rem) {
      .md\\:${id}-grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .md\\:${id}-grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .md\\:${id}-grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .md\\:${id}-grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .md\\:${id}-aspect-\\[tablet-column\\] {
        aspect-ratio: var(--${id}-tablet-column-aspect-ratio);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      .xl\\:${id}-grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .xl\\:${id}-grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
      .xl\\:${id}-grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
      .xl\\:${id}-aspect-\\[desktop-column\\] {
        aspect-ratio: var(--${id}-desktop-column-aspect-ratio);
      }
    }

    .${id}-first-column-background-color {
      background-color: var(--${id}-first-column-background-color);
    }
    .${id}-second-column-background-color {
      background-color: var(--${id}-second-column-background-color);
    }
    .${id}-third-column-background-color {
      background-color: var(--${id}-third-column-background-color);
    }
    .${id}-fourth-column-background-color {
      background-color: var(--${id}-fourth-column-background-color);
    }
    .${id}-belk-text-clamp-column-cta {
      font-size: var(--${id}-column-cta-font-size-mobile);
      line-height: 1.2;
      letter-spacing: 0.02em;
    }
    @media (min-width: 768px) {
      .${id}-belk-text-clamp-column-cta {
        font-size: var(--${id}-column-cta-font-size-desktop);
      }
    }
    .${id}-bg-solid-column-cta-button {
      background-color: var(--${id}-column-cta-background-color);
      border-radius: var(--${id}-column-cta-border-radius);
    }
    .rounded-t-none {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .rounded-t-sm {
      border-top-left-radius: var(--radius-sm);
      border-top-right-radius: var(--radius-sm);
    }
    .rounded-t-md {
      border-top-left-radius: var(--radius-md);
      border-top-right-radius: var(--radius-md);
    }
    .rounded-t-lg {
      border-top-left-radius: var(--radius-lg);
      border-top-right-radius: var(--radius-lg);
    }
    .rounded-t-xl {
      border-top-left-radius: var(--radius-xl);
      border-top-right-radius: var(--radius-xl);
    }
    .rounded-b-none {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .rounded-b-sm {
      border-bottom-left-radius: var(--radius-sm);
      border-bottom-right-radius: var(--radius-sm);
    }
    .rounded-b-md {
      border-bottom-left-radius: var(--radius-md);
      border-bottom-right-radius: var(--radius-md);
    }
    .rounded-b-lg {
      border-bottom-left-radius: var(--radius-lg);
      border-bottom-right-radius: var(--radius-lg);
    }
    .rounded-b-xl {
      border-bottom-left-radius: var(--radius-xl);
      border-bottom-right-radius: var(--radius-xl);
    }
  `}</style>
);

const WrapperComponent = ({ href, children, ...props }) =>
  href ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );

const ResponsiveContainer = ({ containerBehavior, className = "", children }) => {
  const containerClasses = (() => {
    switch (containerBehavior) {
      case "max-w-full":
        return "[&>div]:md:max-w-full [&>div]:w-full";
      case "max-w-inset":
        return "px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full";
      case "max-w-centered":
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5";
      default:
        return "[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem] [&>div]:px-5 [&>div]:md:px-5";
    }
  })();

  return <div className={`${containerClasses} ${className}`}>{children}</div>;
};

/*
  Derived from alignment constants for text alignment.
*/
const textAlignment = {
  'items-start': 'text-left',
  'items-center': 'text-center',
  'items-end': 'text-right',
};

const columnTextAlignStyle = {
  'items-start': 'left',
  'items-center': 'center',
  'items-end': 'right',
};

const FourColumnCTAAnimationRef = ({ id }) => {
  const ctas = [
    {
      content: firstCtaContent,
      url: firstCtaUrl,
      adobeTag: firstCtaAdobeTag,
    },
    {
      content: secondCtaContent,
      url: secondCtaUrl,
      adobeTag: secondCtaAdobeTag,
    },
    {
      content: thirdCtaContent,
      url: thirdCtaUrl,
      adobeTag: thirdCtaAdobeTag,
    },
    {
      content: fourthCtaContent,
      url: fourthCtaUrl,
      adobeTag: fourthCtaAdobeTag,
    },
    {
      content: fifthCtaContent,
      url: fifthCtaUrl,
      adobeTag: fifthCtaAdobeTag,
    },
    {
      content: sixthCtaContent,
      url: sixthCtaUrl,
      adobeTag: sixthCtaAdobeTag,
    },
    {
      content: seventhCtaContent,
      url: seventhCtaUrl,
      adobeTag: seventhCtaAdobeTag,
    },
    {
      content: eighthCtaContent,
      url: eighthCtaUrl,
      adobeTag: eighthCtaAdobeTag,
    },
  ];

  const displayedCtas = ctas.filter((cta) => cta.content).slice(0, Number.parseInt(ctaButtonCount));
  const gridClassName = `${id}-cta-grid-container`;

  const columns = [
    {
      backgroundColor: `${id}-first-column-background-color`,
      image: {
        slug: firstColumnBackgroundImage,
        altText: firstColumnBackgroundImageAltText,
        preset: firstColumnBackgroundImagePreset
      },
      eyebrow: {
        content: firstColumnEyebrowContent,
        image: {
          slug: firstColumnEyebrowImage,
          altText: firstColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: firstColumnHeadlineContent,
        image: {
          slug: firstColumnHeadlineImage,
          altText: firstColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: firstColumnSubheadContent,
        image: {
          slug: firstColumnSubheadImage,
          altText: firstColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: firstColumnCtaContent,
        url: firstColumnCtaUrl,
        adobeTag: firstColumnCtaAdobeTag
      }
    },
    {
      backgroundColor: `${id}-second-column-background-color`,
      image: {
        slug: secondColumnBackgroundImage,
        altText: secondColumnBackgroundImageAltText,
        preset: secondColumnBackgroundImagePreset
      },
      eyebrow: {
        content: secondColumnEyebrowContent,
        image: {
          slug: secondColumnEyebrowImage,
          altText: secondColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: secondColumnHeadlineContent,
        image: {
          slug: secondColumnHeadlineImage,
          altText: secondColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: secondColumnSubheadContent,
        image: {
          slug: secondColumnSubheadImage,
          altText: secondColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: secondColumnCtaContent,
        url: secondColumnCtaUrl,
        adobeTag: secondColumnCtaAdobeTag
      }
    },
    {
      backgroundColor: `${id}-third-column-background-color`,
      image: {
        slug: thirdColumnBackgroundImage,
        altText: thirdColumnBackgroundImageAltText,
        preset: thirdColumnBackgroundImagePreset
      },
      eyebrow: {
        content: thirdColumnEyebrowContent,
        image: {
          slug: thirdColumnEyebrowImage,
          altText: thirdColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: thirdColumnHeadlineContent,
        image: {
          slug: thirdColumnHeadlineImage,
          altText: thirdColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: thirdColumnSubheadContent,
        image: {
          slug: thirdColumnSubheadImage,
          altText: thirdColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: thirdColumnCtaContent,
        url: thirdColumnCtaUrl,
        adobeTag: thirdColumnCtaAdobeTag
      }
    },
    {
      backgroundColor: `${id}-fourth-column-background-color`,
      image: {
        slug: fourthColumnBackgroundImage,
        altText: fourthColumnBackgroundImageAltText,
        preset: fourthColumnBackgroundImagePreset
      },
      eyebrow: {
        content: fourthColumnEyebrowContent,
        image: {
          slug: fourthColumnEyebrowImage,
          altText: fourthColumnEyebrowImageAltText,
          width: eyebrowImageWidth,
          height: eyebrowImageHeight,
          preset: eyebrowImagePreset
        }
      },
      headline: {
        content: fourthColumnHeadlineContent,
        image: {
          slug: fourthColumnHeadlineImage,
          altText: fourthColumnHeadlineImageAltText,
          width: headlineImageWidth,
          height: headlineImageHeight,
          preset: headlineImagePreset
        }
      },
      subhead: {
        content: fourthColumnSubheadContent,
        image: {
          slug: fourthColumnSubheadImage,
          altText: fourthColumnSubheadImageAltText,
          width: subheadImageWidth,
          height: subheadImageHeight,
          preset: subheadImagePreset
        }
      },
      cta: {
        content: fourthColumnCtaContent,
        url: fourthColumnCtaUrl,
        adobeTag: fourthColumnCtaAdobeTag
      }
    }
  ];

  const alignment = (typeof sectionAlignment === 'string' ? sectionAlignment : String(sectionAlignment ?? 'center')) || 'center';

  const alignStyle = { textAlign: columnTextAlignStyle[columnHorizontalAlignment] || 'left' };
  const columnEyebrowVars = ['firstColumnEyebrowContent','secondColumnEyebrowContent','thirdColumnEyebrowContent','fourthColumnEyebrowContent'];
  const columnHeadlineVars = ['firstColumnHeadlineContent','secondColumnHeadlineContent','thirdColumnHeadlineContent','fourthColumnHeadlineContent'];
  const columnSubheadVars = ['firstColumnSubheadContent','secondColumnSubheadContent','thirdColumnSubheadContent','fourthColumnSubheadContent'];
  const columnCtaVars = ['firstColumnCtaContent','secondColumnCtaContent','thirdColumnCtaContent','fourthColumnCtaContent'];

  const renderColumnContent = (eyebrow, headline, subhead, cta, colIndex) => (
    <div
      className={`w-full flex flex-col z-10 overflow-visible min-h-0 ${columnVerticalAlignment} ${columnHorizontalAlignment} ${textAlignment[columnHorizontalAlignment]} ${id}-column-horizontal-padding ${id}-column-vertical-padding`}
      style={alignStyle}
    >
      {eyebrow?.image?.slug && isValidImageUrl(buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset)) ? (
        <div data-bildit-var-name={['firstColumnEyebrowImage','secondColumnEyebrowImage','thirdColumnEyebrowImage','fourthColumnEyebrowImage'][colIndex]} data-bildit-var-type="String">
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(eyebrow.image.slug, 'm', eyebrow.image.preset),
            tablet: buildImageUrl(eyebrow.image.slug, 't', eyebrow.image.preset),
            desktop: buildImageUrl(eyebrow.image.slug, 'd', eyebrow.image.preset),
            largeDesktop: buildImageUrl(eyebrow.image.slug, 'l', eyebrow.image.preset),
          }}
          alt={eyebrow.image.altText}
          className={`my-2 ${id}-aspect-[eyebrow] w-full ${id}-max-w-[eyebrow] ${id}-h-[eyebrow]`}
          imageClassName="-z-1 object-contain object-center"
        />
        </div>
      ) : (
        <p className={`my-1 ${id}-belk-text-clamp-eyebrow font-bold`} data-bildit-var-name={columnEyebrowVars[colIndex]} data-bildit-var-type="RichText">{String(eyebrow.content ?? '')}</p>
      )}

      {headline?.image?.slug && isValidImageUrl(buildImageUrl(headline.image.slug, 'm', headline.image.preset)) ? (
        <div data-bildit-var-name={['firstColumnHeadlineImage','secondColumnHeadlineImage','thirdColumnHeadlineImage','fourthColumnHeadlineImage'][colIndex]} data-bildit-var-type="String">
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(headline.image.slug, 'm', headline.image.preset),
            tablet: buildImageUrl(headline.image.slug, 't', headline.image.preset),
            desktop: buildImageUrl(headline.image.slug, 'd', headline.image.preset),
            largeDesktop: buildImageUrl(headline.image.slug, 'l', headline.image.preset),
          }}
          alt={headline.image.altText}
          className={`my-2 md:my-4 ${id}-aspect-[headline] w-full ${id}-max-w-[headline] ${id}-h-[headline]`}
          imageClassName="-z-1 object-contain object-center"
        />
        </div>
      ) : (
        <h2 className={`my-1 font-bold ${id}-belk-text-clamp-headline`} data-bildit-var-name={columnHeadlineVars[colIndex]} data-bildit-var-type="RichText">{String(headline.content ?? '')}</h2>
      )}

      {subhead?.image?.slug && isValidImageUrl(buildImageUrl(subhead.image.slug, 'm', subhead.image.preset)) ? (
        <div data-bildit-var-name={['firstColumnSubheadImage','secondColumnSubheadImage','thirdColumnSubheadImage','fourthColumnSubheadImage'][colIndex]} data-bildit-var-type="String">
        <PictureResponsiveImage
          images={{
            mobile: buildImageUrl(subhead.image.slug, 'm', subhead.image.preset),
            tablet: buildImageUrl(subhead.image.slug, 't', subhead.image.preset),
            desktop: buildImageUrl(subhead.image.slug, 'd', subhead.image.preset),
            largeDesktop: buildImageUrl(subhead.image.slug, 'l', subhead.image.preset),
          }}
          alt={subhead.image.altText}
          className={`my-1 md:my-2 ${id}-aspect-[subhead] w-full h-full ${id}-max-w-[subhead] ${id}-max-h-[subhead]`}
          imageClassName="-z-1 object-contain object-center"
        />
        </div>
      ) : (
        <h3 className={`my-1 ${id}-belk-text-clamp-subhead`} data-bildit-var-name={columnSubheadVars[colIndex]} data-bildit-var-type="RichText">{String(subhead.content ?? '')}</h3>
      )}

      <Button className={`mt-2 mb-1 ${id}-belk-text-clamp-column-cta cursor-pointer ${columnCtaVariant === 'solid' ? `${id}-bg-solid-column-cta-button` : ''} ${textAlignment[columnHorizontalAlignment]}`} variant={columnCtaVariant} data-bildit-var-name={columnCtaVars[colIndex]} data-bildit-var-type="RichText">{String(cta.content ?? '')}</Button>
    </div>
  );

  return (
    <>
      <FourColumnCTAAnimationRefStyleVars id={id} />
      <FourColumnCTAAnimationRefStyles id={id} />
      <div className={`w-full relative overflow-hidden ${topMargin} ${bottomMargin} ${roundedCornersTop} ${roundedCornersBottom} ${sectionBorderRadius} ${id}-container-background-color`}>
        <div className={`${id}-section-bg-grid`}>
          {sectionBackgroundImage && isValidImageUrl(buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset)) && (
            <div className={`${id}-section-bg-layer`} data-bildit-var-name="sectionBackgroundImage" data-bildit-var-type="String">
              <PictureResponsiveImage
                images={{
                  mobile: buildImageUrl(sectionBackgroundImage, 'm', sectionBackgroundImagePreset),
                  tablet: buildImageUrl(sectionBackgroundImage, 't', sectionBackgroundImagePreset),
                  desktop: buildImageUrl(sectionBackgroundImage, 'd', sectionBackgroundImagePreset),
                  largeDesktop: buildImageUrl(sectionBackgroundImage, 'l', sectionBackgroundImagePreset),
                }}
                alt={sectionBackgroundAlt}
                imageClassName="object-cover object-center"
                className="w-full h-full"
              />
            </div>
          )}
          <div className={`${id}-section-content-layer ${id}-section-padding`}>
          <ResponsiveContainer
          containerBehavior={containerBehavior}
          className={`w-full ${containerBehavior === 'max-w-full' ? 'px-4' : ''}`}
        >
          {(sectionTitle || sectionTitleImage || sectionSubhead) && (
            <div className={`flex flex-col relative z-10 w-full font-bold ${sectionTitleMarginTop} ${sectionTitleMarginBottom} px-4 pt-4 ${alignment === 'center' ? 'items-center text-center' : alignment === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
              {sectionTitleImage && isValidImageUrl(buildImageUrl(sectionTitleImage, 'm', sectionTitleImagePreset)) ? (
                <div data-bildit-var-name="sectionTitleImage" data-bildit-var-type="String">
                <PictureResponsiveImage
                  images={{
                    mobile: buildImageUrl(sectionTitleImage, 'm', sectionTitleImagePreset),
                    tablet: buildImageUrl(sectionTitleImage, 't', sectionTitleImagePreset),
                    desktop: buildImageUrl(sectionTitleImage, 'd', sectionTitleImagePreset),
                    largeDesktop: buildImageUrl(sectionTitleImage, 'l', sectionTitleImagePreset),
                  }}
                  alt={sectionTitleImageAltText}
                  className={`${id}-section-title-image mt-8 ${sectionTitleAspectRatioMobileWidth && sectionTitleAspectRatioMobileHeight ? `${id}-aspect-[section-title-image-mobile]` : ''} ${sectionTitleAspectRatioTabletWidth && sectionTitleAspectRatioTabletHeight ? `${id}-aspect-[section-title-image-tablet]` : ''} ${sectionTitleAspectRatioDesktopWidth && sectionTitleAspectRatioDesktopHeight ? `${id}-aspect-[section-title-image-desktop]` : ''} ${sectionTitleImageMaxWidth ? `${id}-max-w-[section-title-image]` : ''} ${sectionTitleImageMaxHeight ? `${id}-max-h-[section-title-image]` : ''}`}
                  imageClassName="object-contain object-center"
                />
                </div>
              ) : (
                <h1 className={`${id}-belk-text-clamp-section-title mb-2 block`} data-bildit-var-name="sectionTitle" data-bildit-var-type="RichText">
                  {sectionTitle || 'After Christmas Closeout'} {sectionTitleHighlight && <span className="closeout" data-bildit-var-name="sectionTitleHighlight" data-bildit-var-type="String">{sectionTitleHighlight}</span>}
                </h1>
              )}
              {sectionSubhead && (
                <p className={`my-0 ${id}-belk-text-clamp-subhead`} data-bildit-var-name="sectionSubhead" data-bildit-var-type="RichText">{sectionSubhead}</p>
              )}
            </div>
          )}

          {displayedCtas.length > 0 && (
            <div className={`relative z-10 w-fit mx-auto ${gridClassName} justify-center gap-2 md:gap-3 lg:gap-2 px-4 md:px-8 lg:px-12 py-6 ${id}-container-font-family`}>
              {displayedCtas.map((cta, index) =>
                cta.content && (
                  <WrapperComponent
                    key={index}
                    href={cta.url}
                    data-aali={cta.adobeTag}
                    className="flex items-stretch"
                  >
                    <Button
                      className={`text-center ${id}-cta-button-width ${id}-belk-text-clamp-cta cursor-pointer ${ctaVariant === "solid" ? `${id}-bg-solid-button` : ""}`}
                      variant={ctaVariant}
                      data-bildit-var-name={['firstCtaContent','secondCtaContent','thirdCtaContent','fourthCtaContent','fifthCtaContent','sixthCtaContent','seventhCtaContent','eighthCtaContent'][index]}
                      data-bildit-var-type="RichText"
                    >
                      {cta.content}
                    </Button>
                  </WrapperComponent>
                ),
              )}
            </div>
          )}

          <div className={`relative z-10 w-full grid ${id}-${mobileGridLayout} md:${id}-${tabletGridLayout} xl:${id}-${desktopGridLayout} ${id}-${gridGap} overflow-visible ${id}-container-font-family`}>
            {columns.map(({ backgroundColor, image, eyebrow, headline, subhead, cta }, index) => (
              <WrapperComponent key={index} className="w-full cursor-pointer" href={cta.url} data-aali={cta.adobeTag}>
                {image.slug && isValidImageUrl(buildImageUrl(image.slug, 'm', image.preset)) ? (
                  <div data-bildit-var-name={['firstColumnBackgroundImage','secondColumnBackgroundImage','thirdColumnBackgroundImage','fourthColumnBackgroundImage'][index]} data-bildit-var-type="String">
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(image.slug, 'm', image.preset),
                      tablet: buildImageUrl(image.slug, 't', image.preset),
                      desktop: buildImageUrl(image.slug, 'd', image.preset),
                      largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                    }}
                    alt={image.altText}
                    imageClassName="z-10 object-cover object-center"
                    className={`flex w-full relative ${id}-aspect-[mobile-column] md:${id}-aspect-[tablet-column] xl:${id}-aspect-[desktop-column] ${columnRoundedCorners} ${backgroundColor}`}
                  >
                    {renderColumnContent(eyebrow, headline, subhead, cta, index)}
                  </PictureResponsiveImage>
                  </div>
                ) : (
                  <div className={`flex w-full relative min-h-[180px] overflow-visible ${columnRoundedCorners} ${backgroundColor}`}>
                    {renderColumnContent(eyebrow, headline, subhead, cta, index)}
                  </div>
                )}
              </WrapperComponent>
            ))}
          </div>
        </ResponsiveContainer>
        </div>
        </div>
      </div>
    </>
  );
};

export default FourColumnCTAAnimationRef;