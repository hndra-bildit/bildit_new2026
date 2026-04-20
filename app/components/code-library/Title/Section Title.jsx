import React from 'react';

const titleText = $(titleText:RichText='Section Title');
const textColor = $(textColor:Color="#000000");
const backgroundColor = $(backgroundColor:Color="#f0f0f0");
const fontFamily = $(fontFamily:Dropdown[Arial|Arial,Verdana|Verdana,TimesNewRoman|TimesNewRoman,Georgia|Georgia]="Arial");
const padding = $(padding:Dropdown[None|0px,Small|8px,Medium|16px,Large|32px]="32px");
const textAlign = $(textAlign:Dropdown[Left|left,Center|center,Right|right]="center");
const textSize = $(textSize:Dropdown[XXXL|XXXL,XXL|XXL,XL|XL,L|L,M|M,S|S,XS|XS]="XXL");

const DesktopTextStack = {
  XXXL: { size: '8xl', weight: 'font-semibold' },
  XXL: { size: '7xl', weight: 'font-semibold' },
  XL: { size: '6xl', weight: 'font-semibold' },
  L: { size: '4xl', weight: 'font-semibold' },
  M: { size: '2xl', weight: 'font-semibold' },
  S: { size: 'xl', weight: 'font-semibold' },
  XS: { size: 'lg', weight: 'font-semibold' }
};

const MobileTextStack = {
  L: { size: '2xl', weight: 'font-semibold' },
  M: { size: 'xl', weight: 'font-semibold' },
  S: { size: 'lg', weight: 'font-semibold' },
  XS: { size: 'base', weight: 'font-semibold' }
};

const desktopToMobileSizeMap = {
  'XXXL': 'L',
  'XXL': 'L',
  'XL': 'L',
  'L': 'M',
  'M': 'S',
  'S': 'XS',
  'XS': 'XS'
};

const Banner = () => {
  let size = 'XXL';
  const templateStart = '$' + '(';
  if (
    textSize &&
    typeof textSize === 'string' &&
    !textSize.startsWith(templateStart) &&
    DesktopTextStack[textSize]
  ) {
    size = textSize;
  }

  const mobileSize = desktopToMobileSizeMap[size] || 'L';
  const desktopConfig = DesktopTextStack[size] || DesktopTextStack['XXL'];
  const mobileConfig = MobileTextStack[mobileSize] || MobileTextStack['L'];

  const safeTextAlign = typeof textAlign === 'string' ? textAlign : 'center';
  const safePadding = typeof padding === 'string' ? padding : '16px';
  const safeFontFamily = typeof fontFamily === 'string' ? fontFamily : 'Arial';
  const safeBackgroundColor = backgroundColor != null && typeof backgroundColor === 'string' ? backgroundColor : '#f0f0f0';
  const safeColor = textColor != null && typeof textColor === 'string' ? textColor : '#000000';

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: safeBackgroundColor,
        padding: safePadding,
        fontFamily: safeFontFamily,
        textAlign: safeTextAlign,
        color: safeColor,
      }}
    >
      <span
        className={`belk-text-${mobileConfig.size} md:belk-text-${desktopConfig.size} ${mobileConfig.weight} md:${desktopConfig.weight} leading-tight m-0`}
        data-bildit-var-name="titleText"
        data-bildit-var-type="RichText"
      >
        {titleText}
      </span>
    </section>
  );
};

export default Banner;