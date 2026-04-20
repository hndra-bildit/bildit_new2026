import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DesktopTextStack, MobileTextStack } from '@theme/text';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from '@/app/components/Carousel'

const desktopSlideCount = "1";
const mobileSlideCount = "1";
const sliderOrientation = $(sliderOrientation:Dropdown[Horizontal|horizontal,Vertical|vertical]="horizontal");
const sliderDots = $(sliderDots:Boolean="false");
const desktopSlideGap = $(desktopSlideGap:Dropdown[0|0,XXS|8,XS|16,S|24,M|32,40|40,L|48,56|56,XL|64,72|72,80|80,88|88,XXL|96,104|104,112|112,120|120,Super|128]="8");
const mobileSlideGap = $(mobileSlideGap:Dropdown[0|0,XXS|8,XS|16,S|24,M|32,40|40,L|48,56|56,XL|64,72|72,80|80,88|88,XXL|96,104|104,112|112,120|120,Super|128]="8");
const sliderHeight = $(sliderHeight:Number);
const mobileSliderHeight = $(mobileSliderHeight:Number="600");

const aemPreset1 =
$(aemPreset1:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug1 = $(desktopSlug1:String="");
const mobileSlug1 = $(mobileSlug1:String="");
const altText1 = $(altText1:String="");
const adobeTag1 = $(adobeTag1:String="");
const title1 = $(title1:String="");
const url1 = $(url1:String="/";required=true);
const linkStyle1 = $(linkStyle1:Dropdown[Button|button,Link|link]="link");
const backgroundColor1 = $(backgroundColor1:Color='#f0f3f5');
const backgroundImageSlug1 = $(backgroundImageSlug1:String);
const backgroundImagePreset1 = $(backgroundImagePreset1:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target1 = $(target1:Dropdown[External|_blank,Internal|_self]);
const textAlign1 = $(textAlign1:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign1 = $(imageAlign1:Dropdown[Left|start,Center|center,Right|end]="end");
const eyebrow1 = $(eyebrow1:String);
const eyebrow1Color = $(eyebrow1Color:Color="#1F55C1");
const eyebrow1ImageSlug = $(eyebrow1ImageSlug:String);
const eyebrow1ImageSlugPreset = $(eyebrow1ImageSlugPreset:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const eyebrow1ImageHeight = $(eyebrow1ImageHeight:Number);
const eyebrow1ImageWidth = $(eyebrow1ImageWidth:Number);
const eyebrow1ImageAlt = $(eyebrow1ImageAlt:String);
const headline1 = $(headline1:String="");
const headline1Color = $(headline1Color:Color="#14377D");
const subLine1 = $(subLine1:String="");
const subLineColor1 = $(subLineColor1:Color="#000");
const slot1DesktopAlignment = $(slot1DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot1MobileAlignment = $(slot1MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot1Font = $(slot1Font:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Baskerville|Baskerville]="proxima-nova");
const slot1Typography = $(slot1Typography:Dropdown[3XL|XXXL,2XL|XXL,XL|XL,L|L,M|M,S|S,XS|XS]="L");
const slot1Weight = $(slot1Weight:Dropdown[Bold|font-bold,SemiBold|font-semibold,Medium|font-medium,Regular|font-normal]="font-normal");
const slot1GlassEffect = $(slot1GlassEffect:Boolean="false");
const slot1DesktopRoundedCornerTopLeft = $(slot1DesktopRoundedCornerTopLeft:Boolean="true");
const slot1DesktopRoundedCornerTopRight = $(slot1DesktopRoundedCornerTopRight:Boolean="true");
const slot1DesktopRoundedCornerBottomLeft = $(slot1DesktopRoundedCornerBottomLeft:Boolean="true");
const slot1DesktopRoundedCornerBottomRight = $(slot1DesktopRoundedCornerBottomRight:Boolean="true");
const slot1MobileRoundedCornerTopLeft = $(slot1MobileRoundedCornerTopLeft:Boolean="true");
const slot1MobileRoundedCornerTopRight = $(slot1MobileRoundedCornerTopRight:Boolean="true");
const slot1MobileRoundedCornerBottomLeft = $(slot1MobileRoundedCornerBottomLeft:Boolean="true");
const slot1MobileRoundedCornerBottomRight = $(slot1MobileRoundedCornerBottomRight:Boolean="true");
const slot1DesktopFlow = $(slot1DesktopFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="row-reversed");
const slot1MobileFlow = $(slot1MobileFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="column-reversed");

const aemPreset2 =
$(aemPreset2:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug2 = $(desktopSlug2:String="");
const mobileSlug2 = $(mobileSlug2:String);
const altText2 = $(altText2:String="");
const adobeTag2 = $(adobeTag2:String);
const title2 = $(title2:String);
const url2 = $(url2:String);
const linkStyle2 = $(linkStyle2:Dropdown[Button|button,Link|link]="link");
const backgroundColor2 = $(backgroundColor2:Color='#f0f3f5');
const backgroundImageSlug2 = $(backgroundImageSlug2:String);
const backgroundImagePreset2 = $(backgroundImagePreset2:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target2 = $(target2:Dropdown[External|_blank,Internal|_self]);
const textAlign2 = $(textAlign2:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign2 = $(imageAlign2:Dropdown[Left|start,Center|center,Right|end]="end");
const eyebrow2 = $(eyebrow2:String);
const eyebrow2Color = $(eyebrow1Color:Color="#1F55C1");
const eyebrow2ImageSlug = $(eyebrow2ImageSlug:String);
const eyebrow2ImageSlugPreset = $(eyebrow2ImageSlugPreset:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const eyebrow2ImageHeight = $(eyebrow2ImageHeight:Number);
const eyebrow2ImageWidth = $(eyebrow2ImageWidth:Number);
const eyebrow2ImageAlt = $(eyebrow2ImageAlt:String);
const headline2 = $(headline2:String="");
const headline2Color = $(headline2Color:Color="#14377D");
const subLine2 = $(subLine2:String="");
const subLineColor2 = $(subLineColor2:Color="#000");
const slot2DesktopAlignment = $(slot2DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot2MobileAlignment = $(slot2MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot2Color = $(slot2Color:Color="#000");
const slot2Font = $(slot2Font:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Baskerville|Baskerville]="proxima-nova");
const slot2Typography = $(slot2Typography:Dropdown[3XL|XXXL,2XL|XXL,XL|XL,L|L,M|M,S|S,XS|XS]="L");
const slot2Weight = $(slot2Weight:Dropdown[Bold|font-bold,SemiBold|font-semibold,Medium|font-medium,Regular|font-normal]="font-normal");
const slot2GlassEffect = $(slot2GlassEffect:Boolean="false");
const slot2DesktopRoundedCornerTopLeft = $(slot2DesktopRoundedCornerTopLeft:Boolean="true");
const slot2DesktopRoundedCornerTopRight = $(slot2DesktopRoundedCornerTopRight:Boolean="true");
const slot2DesktopRoundedCornerBottomLeft = $(slot2DesktopRoundedCornerBottomLeft:Boolean="true");
const slot2DesktopRoundedCornerBottomRight = $(slot2DesktopRoundedCornerBottomRight:Boolean="true");
const slot2MobileRoundedCornerTopLeft = $(slot2MobileRoundedCornerTopLeft:Boolean="true");
const slot2MobileRoundedCornerTopRight = $(slot2MobileRoundedCornerTopRight:Boolean="true");
const slot2MobileRoundedCornerBottomLeft = $(slot2MobileRoundedCornerBottomLeft:Boolean="true");
const slot2MobileRoundedCornerBottomRight = $(slot2MobileRoundedCornerBottomRight:Boolean="true");
const slot2DesktopFlow = $(slot2DesktopFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="row-reversed");
const slot2MobileFlow = $(slot2MobileFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="column-reversed");

const aemPreset3=$(aemPreset3:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug3=$(desktopSlug3:String="");
const mobileSlug3=$(mobileSlug3:String);
const altText3=$(altText3:String="");
const adobeTag3=$(adobeTag3:String);
const title3=$(title3:String);
const url3=$(url3:String);
const linkStyle3=$(linkStyle3:Dropdown[Button|button,Link|link]="link");
const backgroundColor3=$(backgroundColor3:Color='#f0f3f5');
const backgroundImageSlug3=$(backgroundImageSlug3:String);
const backgroundImagePreset3=$(backgroundImagePreset3:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target3=$(target3:Dropdown[External|_blank,Internal|_self]);
const textAlign3=$(textAlign3:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign3=$(imageAlign3:Dropdown[Left|start,Center|center,Right|end]="end");
const eyebrow3=$(eyebrow3:String);
const eyebrow3Color=$(eyebrow3Color:Color="#1F55C1");
const eyebrow3ImageSlug=$(eyebrow3ImageSlug:String);
const eyebrow3ImageSlugPreset=$(eyebrow3ImageSlugPreset:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const eyebrow3ImageHeight=$(eyebrow3ImageHeight:Number);
const eyebrow3ImageWidth=$(eyebrow3ImageWidth:Number);
const eyebrow3ImageAlt=$(eyebrow3ImageAlt:String);
const headline3=$(headline3:String="");
const headline3Color=$(headline3Color:Color="#14377D");
const subLine3=$(subLine3:String="");
const subLineColor3=$(subLineColor3:Color="#000");
const slot3DesktopAlignment=$(slot3DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot3MobileAlignment=$(slot3MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot3Color=$(slot3Color:Color="#000");
const slot3Font=$(slot3Font:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Baskerville|Baskerville]="proxima-nova");
const slot3Typography=$(slot3Typography:Dropdown[3XL|XXXL,2XL|XXL,XL|XL,L|L,M|M,S|S,XS|XS]="L");
const slot3Weight=$(slot3Weight:Dropdown[Bold|font-bold,SemiBold|font-semibold,Medium|font-medium,Regular|font-normal]="font-normal");
const slot3GlassEffect=$(slot3GlassEffect:Boolean="false");
const slot3DesktopRoundedCornerTopLeft=$(slot3DesktopRoundedCornerTopLeft:Boolean="true");
const slot3DesktopRoundedCornerTopRight=$(slot3DesktopRoundedCornerTopRight:Boolean="true");
const slot3DesktopRoundedCornerBottomLeft=$(slot3DesktopRoundedCornerBottomLeft:Boolean="true");
const slot3DesktopRoundedCornerBottomRight=$(slot3DesktopRoundedCornerBottomRight:Boolean="true");
const slot3MobileRoundedCornerTopLeft=$(slot3MobileRoundedCornerTopLeft:Boolean="true");
const slot3MobileRoundedCornerTopRight=$(slot3MobileRoundedCornerTopRight:Boolean="true");
const slot3MobileRoundedCornerBottomLeft=$(slot3MobileRoundedCornerBottomLeft:Boolean="true");
const slot3MobileRoundedCornerBottomRight=$(slot3MobileRoundedCornerBottomRight:Boolean="true");
const slot3DesktopFlow=$(slot3DesktopFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="row-reversed");
const slot3MobileFlow=$(slot3MobileFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="column-reversed");

const aemPreset4=$(aemPreset4:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug4=$(desktopSlug4:String="");
const mobileSlug4=$(mobileSlug4:String);
const altText4=$(altText4:String="");
const adobeTag4=$(adobeTag4:String);
const title4=$(title4:String);
const url4=$(url4:String);
const linkStyle4=$(linkStyle4:Dropdown[Button|button,Link|link]="link");
const backgroundColor4=$(backgroundColor4:Color='#f0f3f5');
const backgroundImageSlug4=$(backgroundImageSlug4:String);
const backgroundImagePreset4=$(backgroundImagePreset4:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target4=$(target4:Dropdown[External|_blank,Internal|_self]);
const textAlign4=$(textAlign4:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign4=$(imageAlign4:Dropdown[Left|start,Center|center,Right|end]="end");
const eyebrow4=$(eyebrow4:String);
const eyebrow4Color=$(eyebrow4Color:Color="#1F55C1");
const eyebrow4ImageSlug=$(eyebrow4ImageSlug:String);
const eyebrow4ImageSlugPreset=$(eyebrow4ImageSlugPreset:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const eyebrow4ImageHeight=$(eyebrow4ImageHeight:Number);
const eyebrow4ImageWidth=$(eyebrow4ImageWidth:Number);
const eyebrow4ImageAlt=$(eyebrow4ImageAlt:String);
const headline4=$(headline4:String="");
const headline4Color=$(headline4Color:Color="#14377D");
const subLine4=$(subLine4:String="");
const subLineColor4=$(subLineColor4:Color="#000");
const slot4DesktopAlignment=$(slot4DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot4MobileAlignment=$(slot4MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot4Color=$(slot4Color:Color="#000");
const slot4Font=$(slot4Font:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Baskerville|Baskerville]="proxima-nova");
const slot4Typography=$(slot4Typography:Dropdown[4XL|XXXL,2XL|XXL,XL|XL,L|L,M|M,S|S,XS|XS]="L");
const slot4Weight=$(slot4Weight:Dropdown[Bold|font-bold,SemiBold|font-semibold,Medium|font-medium,Regular|font-normal]="font-normal");
const slot4GlassEffect=$(slot4GlassEffect:Boolean="false");
const slot4DesktopRoundedCornerTopLeft=$(slot4DesktopRoundedCornerTopLeft:Boolean="true");
const slot4DesktopRoundedCornerTopRight=$(slot4DesktopRoundedCornerTopRight:Boolean="true");
const slot4DesktopRoundedCornerBottomLeft=$(slot4DesktopRoundedCornerBottomLeft:Boolean="true");
const slot4DesktopRoundedCornerBottomRight=$(slot4DesktopRoundedCornerBottomRight:Boolean="true");
const slot4MobileRoundedCornerTopLeft=$(slot4MobileRoundedCornerTopLeft:Boolean="true");
const slot4MobileRoundedCornerTopRight=$(slot4MobileRoundedCornerTopRight:Boolean="true");
const slot4MobileRoundedCornerBottomLeft=$(slot4MobileRoundedCornerBottomLeft:Boolean="true");
const slot4MobileRoundedCornerBottomRight=$(slot4MobileRoundedCornerBottomRight:Boolean="true");
const slot4DesktopFlow=$(slot4DesktopFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="row-reversed");
const slot4MobileFlow=$(slot4MobileFlow:Dropdown[Image Bottom|column,Image Right|row,Image Top|column-reversed,Image Left|row-reversed]="column-reversed");

const desktopSlotHeightOverride = $(desktopSlotHeightOverride:Number);
const mobileSlotHeightOverride = $(mobileSlotHeightOverride:Number);
const linkColor = $(linkColor:Color="#000");
const buttonBackground = $(buttonBackground:Color="#f9f9f9");

const mainBackground = $(background:Color="#f9f9f9");
const mainBackgroundImageSlug = $(backgroundImage:String);
const mainBackgroundImagePreset = $(backgroundImagePreset:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const mainBannerWidth = $(bannerWidth:Dropdown[Inset|inset,Full Width|full]="full");
const sectionTitle = $(sectionTitle:String);
const sectionColor = $(sectionColor:Color);

const mobileBottomHorizontalGutterSize = $(mobileBottomHorizontalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="32");
const mobileVerticalGutterSize = $(mobileVerticalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="4");
const desktopBottomHorizontalGutterSize = $(desktopBottomHorizontalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="32");
const desktopVerticalGutterSize = $(desktopVerticalGutterSize:Dropdown[None|0,Atomic|4,Micro|8,Little|16,Regular|32,Big|48,Huge|64,Mega|80]="16");

const generateId = (length = 10) => {
    const chars = 'ABCDEFGHIJKLMNOPQRTSUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}
const buildS7Image = (slug, preset) => {
  return slug && preset
    ? `https://belk.scene7.com/is/${preset.includes('RAW') ? 'content' : 'image'}/Belk/${slug}?${preset}`
    : null ;
}
const getTextAlignmentClasses = (slotAlignment, flow, prefix = '') => {
  const [JIS, JIC, JIE] = ['justify-items-start', 'justify-items-center', 'justify-items-end']
  const [TL, TC, TR] = ['text-left', 'text-center', 'text-right']
  const [CS, CC, CE] = ['content-start', 'content-center', 'content-end']

  let flowClass = ''
  switch (flow) {
    case 'flex-col-reverse':
      flowClass = 'pb-0 md:pb-0'
      break;
    case 'flex-col':
      flowClass = ''
      break;
    case 'flex-row-reverse':
      flowClass = ''
      break;
    case 'flex-row':
      flowClass = ''
      break;
  }
  switch (slotAlignment) {
    case 'topLeft':
      return [flowClass, JIS, CS, TL].map((val) => `${prefix}${val}`).join(' ')
    case 'topCenter':
      return [flowClass, JIC, CS, TC].map((val) => `${prefix}${val}`).join(' ')
    case 'topRight':
      return [flowClass, JIE, CS, TR].map((val) => `${prefix}${val}`).join(' ')
    case 'midLeft':
      return [flowClass, JIS, CC, TL].map((val) => `${prefix}${val}`).join(' ')
    case 'midCenter':
      return [flowClass, JIC, CC, TC].map((val) => `${prefix}${val}`).join(' ')
    case 'midRight':
      return [flowClass, JIE, CC, TR].map((val) => `${prefix}${val}`).join(' ')
    case 'bottomLeft':
      return [flowClass, JIS, CE, TL].map((val) => `${prefix}${val}`).join(' ')
    case 'bottomCenter':
      return [flowClass, JIC, CE, TC].map((val) => `${prefix}${val}`).join(' ')
    case 'bottomRight':
      return [flowClass, JIE, CE, TR].map((val) => `${prefix}${val}`).join(' ')
  }
}
const getFlexFlowStyle = (flow) => {
  switch (flow) {
    case 'column':
      return 'flex-col';
    case 'column-reversed':
      return 'flex-col-reverse'
    case 'row':
      return 'flex-row';
    case 'row-reversed':
      return 'flex-row-reverse';
    default:
      return '';
  }
}
const getCornerStyles = (corners) => {
    const classes = []
    const { desktop: desktopCorners, mobile: mobileCorners } = corners
    for (const key of Object.keys(desktopCorners)) {
      if (!desktopCorners[key]) continue;
      switch (key) {
        case 'topLeft':
          classes.push('md:rounded-tl-2xl')
          break;
        case 'topRight':
          classes.push('md:rounded-tr-2xl')
          break;
        case 'bottomLeft':
          classes.push('md:rounded-bl-2xl')
          break;
        case 'bottomRight':
          classes.push('md:rounded-br-2xl')
          break;
      }
    }
    for (const key of Object.keys(mobileCorners)) {
      if (!mobileCorners[key]) continue;
      switch (key) {
        case 'topLeft':
          classes.push('rounded-tl-2xl')
          if (classes.some((c) => c.startsWith('md:rounded-tl'))) {
            classes.push('md:rounded-tl-none')
          }
          break;
        case 'topRight':
          classes.push('rounded-tr-2xl')
          if (classes.some((c) => c.startsWith('md:rounded-tr'))) {
            classes.push('md:rounded-tr-none')
          }
          break;
        case 'bottomLeft':
          classes.push('rounded-bl-2xl')
          if (classes.some((c) => c.startsWith('md:rounded-bl'))) {
            classes.push('md:rounded-bl-none')
          }
          break;
        case 'bottomRight':
          classes.push('rounded-br-2xl')
          if (classes.some((c) => c.startsWith('md:rounded-br'))) {
            classes.push('md:rounded-br-none')
          }
          break;
      }
    }

    return classes.join(' ')
}


const StyleTag = ({ id }) => (
    <style>
      {`
        .basis-3\\/4 { flex-basis: 75%; }
        .md\:basis-1\/2 { flex-basis: 50%!important; }
        .md\:m-0 { margin: 0; }
        .rounded-tl-2xl { border-top-left-radius: var(--radius-2xl); }
        .rounded-tr-2xl { border-top-right-radius: var(--radius-2xl); }
        .rounded-br-2xl { border-bottom-right-radius: var(--radius-2xl); }
        .rounded-tl-2xl { border-bottom-left-radius: var(--radius-2xl); }

        #${id} .carousel-container {
          --sliderMaxOffset: 2rem;
          --sliderOffset: calc((100% - 80rem) / 2);
        }

        @media (min-width: 120rem) {
          #${id} .carousel-container {
            --sliderOffset: calc((100% - 120rem) / 2);
          }
        }

        #${id} .carousel-prev {
          left: max(var(--sliderMaxOffset), var(--sliderOffset));
        }

        #${id} .carousel-next {
          right: max(var(--sliderMaxOffset), var(--sliderOffset));
        }

        #${id} .textStack {
          --rightOffset: max(var(--sliderMaxOffset), var(--sliderOffset));
          padding-right: calc(var(--sliderMaxOffset) + var(--rightOffset));
        }

        @media (min-width: 768px) {
          #${id} picture {
            flex-basis: 50%;
          }

          #${id} picture img {
            position: static!important;
          }
        }

        @media (max-width: 767px) {
          #${id} picture {
            flex-basis: 75%;
          }

          #${id} .carousel-container  {
            --sliderOffset: calc((100% - 48rem) / 2);
          }

          #${id} .carousel-prev {
            left: min(var(--sliderMaxOffset), var(--sliderOffset));
          }

          #${id} .carousel-next {
            right: min(var(--sliderMaxOffset), var(--sliderOffset));
          }
        }
      `}
    </style>
  )

const Slot = ({ id, data }) => {
  const {
      adobeTag,
      altText,
      backgroundColor,
      backgroundImage,
      imageDT,
      imageMB,
      eyebrowColor, eyebrowText, eyebrowImage, eyebrowAlt, eyebrowDims,
      headline, headlineColor,
      subLine, subLineColor,
      target,
      textAlign,
      imageAlign,
      title,
      url,
      glassEffect,
      corners,
      linkColor, linkFont,
      slotDesktopAlignment, slotMobileAlignment, slotFont, slotTypography,
      index, isMobile, desktopFlow, mobileFlow,
      desktopHeight, mobileHeight, maxHeight,
      className, orientation, sliderPrevClass, sliderNextClass
  } = data

  const bg = () => {
      if (backgroundImage) return `bottom / contain no-repeat url(${backgroundImage}) ${backgroundColor ?? ''}`
      if (backgroundColor) return backgroundColor
      return 'none'
  }
  const bgStyle = { background: bg(), height: 'auto', maxHeight: 'none', textAlign: textAlign }
  if (glassEffect) {
      const hexLen = backgroundColor.length - 1
        /* color has no alpha, force 95% opacity so the effect can work */
      if (hexLen === 3 || hexLen === 6) {
        bgStyle.background += 'F3'
      }
  }
  const roundedClasses = getCornerStyles(corners)
  const glassClass = glassEffect ? 'backdrop-blur' : ''
  const imgJustifyClass = `justify-${imageAlign}`
  const DesktopTypography = DesktopTextStack[slotTypography]
  const MobileTypography = MobileTextStack[slotTypography] ?? MobileTextStack.L /* undefined sizes may exist if XXL picked, but we are mobile */
  const eyebrowClass = `belk-text-${MobileTypography.eyebrow.size} md:belk-text-${DesktopTypography.eyebrow.size} font-${MobileTypography.eyebrow.weight} md:font-${DesktopTypography.eyebrow.weight}`
  const headlineClass = `belk-text-${MobileTypography.headline.size} md:belk-text-${DesktopTypography.headline.size} font-${MobileTypography.headline.weight} md:font-${DesktopTypography.headline.weight}`
  const descriptionClass = `belk-text-${MobileTypography.subLine.size} md:belk-text-${DesktopTypography.subLine.size} font-${MobileTypography.subLine.weight} md:font-${DesktopTypography.subLine.weight}`
  const linkClass = `belk-text-${MobileTypography.link.size} md:belk-text-${DesktopTypography.link.size} font-${MobileTypography.link.weight} md:font-${DesktopTypography.link.weight}`
  const desktopFlexFlow = getFlexFlowStyle(desktopFlow)
  const mobileFlexFlow = index % 2 === 0
    ? getFlexFlowStyle(mobileFlow.replace('row', 'column')?.replace('reverse', ''))
    : getFlexFlowStyle(mobileFlow.replace('row', 'column'))
  const flexFlowStyle = `${mobileFlexFlow} md:${desktopFlexFlow}`
  const textAlignmentClasses = `${getTextAlignmentClasses(slotMobileAlignment, flexFlowStyle)} ${getTextAlignmentClasses(slotDesktopAlignment, flexFlowStyle, 'md:')}`
  const imgSelfAlign = flexFlowStyle?.includes('-row') ? 'self-center items-center' : 'self-center items-end';
  const textStackPadding = flexFlowStyle === 'flex-col' ? 'mb-2 md:mb-4' : '';
  const eyebrowImg = eyebrowImage ? (<Image
    alt={eyebrowAlt}
    className="eyebrowImage my-1 md:my-2 img object-contain"
    src={eyebrowImage}
    {...eyebrowDims} /* dimensions or fill: true */
    unoptimized
  />) : null

  const imgStyle = {}
  const hasLink = url?.length > 0 && title?.length > 0

  const overrideHeight = isMobile ? mobileHeight : desktopHeight
  if (overrideHeight) {
    bgStyle.height = `${overrideHeight}px`
    bgStyle.maxHeight = `${Math.floor(overrideHeight * .45)}px`
    imgStyle.maxHeight = `${Math.floor(overrideHeight * .45)}px`;
  }
  if (sliderHeight && !Number.isNaN(+sliderHeight) && +sliderHeight > 0) {
    bgStyle.maxHeight = `${sliderHeight}px`
  }
  if (isMobile && orientation === 'vertical') {
    bgStyle.height = `${maxHeight}px`
    bgStyle.maxHeight = 'none'
    // imgStyle.maxHeight = `${mobileSliderHeight / 2}px`
  }

  const img = imageDT || imageMB ? (<Image
    alt={altText}
    className="img object-contain grow max-w-fit mx-auto md:m-0"
    style={imgStyle}
    fill={true}
    loader={({ width }) => width > 767 ? imageDT : imageMB}
    src={imageDT || imageMB}
    unoptimized
  />) : null

  return (
    <>
      <div className={`slot w-full flex flex-col relative overflow-hidden ${roundedClasses}`} style={bgStyle}>
          <div className={`w-full flex ${flexFlowStyle} relative overflow-hidden slot${index} ${glassClass} ${roundedClasses} ${className}`} style={bgStyle}>
            <div className={`textStack relative basis-1/4 md:basis-1/2 grow-0 shrink-0 ${textStackPadding} py-4 md:py-8 px-16 md:px-4 ${textAlignmentClasses}`}>
              {eyebrowText ? <div className={`eyebrow pb-1 md:pb-2 ${eyebrowClass}`} style={{ color: eyebrowColor, fontFamily: slotFont }}>{eyebrowText}</div> : null}
              {eyebrowImage ? eyebrowImg : null}
              <h2 className={`headline max-w-100 ${headlineClass}`} style={{ color: headlineColor, fontFamily: slotFont }}>{headline}</h2>
              <p className={`description ${descriptionClass}`} style={{ color: subLineColor, fontFamily: slotFont }}>{subLine}</p>
              {hasLink &&
                (<div className="mt-2">
                  <Link className={`contents link ${linkClass} link-${target === '_blank' ? 'external' : 'internal'} border-b border-black mt-2 mb-2 md:mb-4`}
                    data-aali={adobeTag}
                    href={url}
                    style={{ color: linkColor, fontFamily: linkFont }}
                    title={title}
                    target={target}>
                      {/* this needs to be <button> or <a> */}
                      {title}
                    </Link>
                </div>)}
            </div>
            {(imageDT || imageMB) && hasLink
              ? (<picture className={`w-full bottom flex relative h-full grow-0 shrink-0 ${imgJustifyClass} ${imgSelfAlign}`}>
                    <Link className={`${linkClass} contents link-${target === '_blank' ? 'external' : 'internal'}`}
                      data-aali={adobeTag}
                      href={url}
                      title={title}
                      target={target}>
                    {img}
                    </Link>
                  </picture>)
              : (<picture className={`bottom flex relative h-auto ${imgJustifyClass}`}>{img}</picture>)
            }
          </div>
      </div>
  </>
  )
}

const slots = [
  {
      adobeTag: adobeTag1,
      altText: altText1,
      backgroundColor: backgroundColor1,
      backgroundImage: buildS7Image(backgroundImageSlug1, backgroundImagePreset1),
      imageAlign: imageAlign1,
      imageDT: buildS7Image(desktopSlug1, aemPreset1),
      imageMB: buildS7Image(mobileSlug1, aemPreset1),
      eyebrowColor: eyebrow1Color,
      eyebrowText: eyebrow1,
      eyebrowImage: buildS7Image(eyebrow1ImageSlug, eyebrow1ImageSlugPreset),
      eyebrowAlt: eyebrow1ImageAlt,
      eyebrowDims: eyebrow1ImageHeight && eyebrow1ImageWidth
        ? {
          height: eyebrow1ImageHeight,
          width: eyebrow1ImageWidth
        }
        : { fill: true },
      headline: headline1,
      headlineColor: headline1Color,
      subLine: subLine1,
      subLineColor: subLineColor1,
      target: target1,
      textAlign: textAlign1,
      title: title1,
      url: url1,
      glassEffect: slot1GlassEffect,
      corners: {
        desktop: {
          topLeft: slot1DesktopRoundedCornerTopLeft,
          topRight: slot1DesktopRoundedCornerTopRight,
          bottomLeft: slot1DesktopRoundedCornerBottomLeft,
          bottomRight: slot1DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot1MobileRoundedCornerTopLeft,
          topRight: slot1MobileRoundedCornerTopRight,
          bottomLeft: slot1MobileRoundedCornerBottomLeft,
          bottomRight: slot1MobileRoundedCornerBottomRight
        }
      },
      slotDesktopAlignment: slot1DesktopAlignment, slotMobileAlignment: slot1MobileAlignment,
      slotFont: slot1Font, slotTypography: slot1Typography, slotWeight: slot1Weight,
      linkColor, linkStyle: linkStyle1,
      desktopFlow: slot1DesktopFlow, mobileFlow: slot1MobileFlow
  },
  {
      adobeTag: adobeTag2,
      altText: altText2,
      backgroundColor: backgroundColor2,
      backgroundImage: buildS7Image(backgroundImageSlug2, backgroundImagePreset2),
      imageAlign: imageAlign2,
      imageDT: buildS7Image(desktopSlug2, aemPreset2),
      imageMB: buildS7Image(mobileSlug2, aemPreset2),
      eyebrowColor: eyebrow2Color,
      eyebrowText: eyebrow2,
      eyebrowImage: buildS7Image(eyebrow2ImageSlug, eyebrow2ImageSlugPreset),
      eyebrowAlt: eyebrow2ImageAlt,
      eyebrowDims: eyebrow2ImageHeight && eyebrow2ImageWidth
        ? {
          height: eyebrow2ImageHeight,
          width: eyebrow2ImageWidth
        }
        : { fill: true },
      headline: headline2,
      headlineColor: headline2Color,
      subLine: subLine2,
      subLineColor: subLineColor2,
      target: target2,
      textAlign: textAlign2,
      title: title2,
      url: url2,
      glassEffect: slot2GlassEffect,
      corners: {
        desktop: {
          topLeft: slot2DesktopRoundedCornerTopLeft,
          topRight: slot2DesktopRoundedCornerTopRight,
          bottomLeft: slot2DesktopRoundedCornerBottomLeft,
          bottomRight: slot2DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot2MobileRoundedCornerTopLeft,
          topRight: slot2MobileRoundedCornerTopRight,
          bottomLeft: slot2MobileRoundedCornerBottomLeft,
          bottomRight: slot2MobileRoundedCornerBottomRight
        }
      },
      slotDesktopAlignment: slot2DesktopAlignment, slotMobileAlignment: slot2MobileAlignment,
      slotFont: slot2Font, slotTypography: slot2Typography, slotWeight: slot2Weight,
      linkColor, linkStyle: linkStyle2,
      desktopFlow: slot2DesktopFlow, mobileFlow: slot2MobileFlow
  },
  {
      adobeTag: adobeTag3,
      altText: altText3,
      backgroundColor: backgroundColor3,
      backgroundImage: buildS7Image(backgroundImageSlug3, backgroundImagePreset3),
      imageAlign: imageAlign3,
      imageDT: buildS7Image(desktopSlug3, aemPreset3),
      imageMB: buildS7Image(mobileSlug3, aemPreset3),
      eyebrowColor: eyebrow3Color,
      eyebrowText: eyebrow3,
      eyebrowImage: buildS7Image(eyebrow3ImageSlug, eyebrow3ImageSlugPreset),
      eyebrowAlt: eyebrow3ImageAlt,
      eyebrowDims: eyebrow3ImageHeight && eyebrow3ImageWidth
        ? {
          height: eyebrow3ImageHeight,
          width: eyebrow3ImageWidth
        }
        : { fill: true },
      headline: headline3,
      headlineColor: headline3Color,
      subLine: subLine3,
      subLineColor: subLineColor3,
      target: target3,
      textAlign: textAlign3,
      title: title3,
      url: url3,
      glassEffect: slot3GlassEffect,
      corners: {
        desktop: {
          topLeft: slot3DesktopRoundedCornerTopLeft,
          topRight: slot3DesktopRoundedCornerTopRight,
          bottomLeft: slot3DesktopRoundedCornerBottomLeft,
          bottomRight: slot3DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot3MobileRoundedCornerTopLeft,
          topRight: slot3MobileRoundedCornerTopRight,
          bottomLeft: slot3MobileRoundedCornerBottomLeft,
          bottomRight: slot3MobileRoundedCornerBottomRight
        }
      },
      slotDesktopAlignment: slot3DesktopAlignment, slotMobileAlignment: slot3MobileAlignment,
      slotFont: slot3Font, slotTypography: slot3Typography, slotWeight: slot3Weight,
      linkColor, linkStyle: linkStyle3,
      desktopFlow: slot3DesktopFlow, mobileFlow: slot3MobileFlow
  },
  {
      adobeTag: adobeTag4,
      altText: altText4,
      backgroundColor: backgroundColor4,
      backgroundImage: buildS7Image(backgroundImageSlug4, backgroundImagePreset4),
      imageAlign: imageAlign4,
      imageDT: buildS7Image(desktopSlug4, aemPreset4),
      imageMB: buildS7Image(mobileSlug4, aemPreset4),
      eyebrowColor: eyebrow4Color,
      eyebrowText: eyebrow4,
      eyebrowImage: buildS7Image(eyebrow4ImageSlug, eyebrow4ImageSlugPreset),
      eyebrowAlt: eyebrow4ImageAlt,
      eyebrowDims: eyebrow4ImageHeight && eyebrow4ImageWidth
        ? {
          height: eyebrow4ImageHeight,
          width: eyebrow4ImageWidth
        }
        : { fill: true },
      headline: headline4,
      headlineColor: headline4Color,
      subLine: subLine4,
      subLineColor: subLineColor4,
      target: target4,
      textAlign: textAlign4,
      title: title4,
      url: url4,
      glassEffect: slot4GlassEffect,
      corners: {
        desktop: {
          topLeft: slot4DesktopRoundedCornerTopLeft,
          topRight: slot4DesktopRoundedCornerTopRight,
          bottomLeft: slot4DesktopRoundedCornerBottomLeft,
          bottomRight: slot4DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot4MobileRoundedCornerTopLeft,
          topRight: slot4MobileRoundedCornerTopRight,
          bottomLeft: slot4MobileRoundedCornerBottomLeft,
          bottomRight: slot4MobileRoundedCornerBottomRight
        }
      },
      slotDesktopAlignment: slot4DesktopAlignment, slotMobileAlignment: slot4MobileAlignment,
      slotFont: slot4Font, slotTypography: slot4Typography, slotWeight: slot4Weight,
      linkColor, linkStyle: linkStyle4,
      desktopFlow: slot4DesktopFlow, mobileFlow: slot4MobileFlow
  }
]

function chunkArray(arr, size) {
  if (size <= 0) throw new Error('Chunk size must be a positive integer');
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
}

const BILDITCarousel = ({
  isMobile,
  maxHeight,
  orientation = 'horizontal',
  dotOrientation = 'horizontal'
}) => {
  const gapClass = `gap-${(orientation === 'vertical' ? 0 : mobileSlideGap) / 4} md:gap-${desktopSlideGap / 4}`
  const sliderPrevClass = isMobile
    ? 'static! mx-auto rotate-90'
    : orientation === 'vertical'
      ? 'absolute left-0 right-0 mx-auto -bottom-2'
      : 'absolute left-4'
  const sliderNextClass = isMobile
    ? 'static! mx-auto rotate-90'
    : orientation === 'vertical'
      ? 'absolute left-0 right-0 mx-auto -top-2'
      : 'absolute right-4'
  const orientationClass = orientation === 'vertical' ? 'flex-col' : ''

  const slideCount = useMemo(() => isMobile ? +mobileSlideCount : +desktopSlideCount, [isMobile])
  const listCopy = useMemo(() => ([...slots]), []);
  const list = useMemo(() => chunkArray(listCopy, slideCount), [listCopy, slideCount])
  const mappedSlots = useMemo(() => (list ?? []).map((slide, index) => (
    <CarouselItem className={`flex overflow-hidden relative pl-0 pt-0 ${orientationClass} ${gapClass}`} key={index}>
      {slide.map((slot, index) => {
        return (
          <Slot key={`slot${index}`} data={{
            ...slot,
            className: 'basis-full',
            index: index + 1,
            isMobile,
            desktopHeight: !Number.isNaN(desktopSlotHeightOverride) ? desktopSlotHeightOverride : null,
            mobileHeight: !Number.isNaN(mobileSlotHeightOverride) ? mobileSlotHeightOverride : null,
            orientation, sliderPrevClass, sliderNextClass, maxHeight
          }} />
        )
      })}
    </CarouselItem>
  )), [gapClass, isMobile, list, maxHeight, orientation, orientationClass, sliderNextClass, sliderPrevClass])

  const dots = useMemo(() => {
    const marginClass = dotOrientation === 'vertical' ? 'mx-auto' : 'ml-2'
    if (sliderDots) return <CarouselDots className={`${marginClass} md:max-w-7xl 2xl:max-w-[100rem]`} orientation={dotOrientation} />
    if (isMobile) return null
  }, [isMobile, dotOrientation])
  const strMaxHeight = `${maxHeight}px`

  return (
    <Carousel className={`carousel-container w-full h-min flex overflow-hidden justify-center ${isMobile ? 'flex-col' : ''}`} orientation={isMobile ? 'vertical' : orientation}>
      <CarouselPrevious className={`carousel-prev bg-black my-2 absolute size-8 z-1 disabled:pointer-events-auto ${sliderPrevClass}`} />
      <CarouselContent className={`carousel-content flex relative h-min ml-0 mt-0 ${gapClass}`} style={{ maxHeight: strMaxHeight, height: isMobile ? strMaxHeight : 'auto' }}>
        {mappedSlots}
      </CarouselContent>
      <CarouselNext className={`carousel-next bg-black my-2 absolute size-8 z-1 disabled:pointer-events-auto ${sliderNextClass}`} />
      {dots}
    </Carousel>
  )
}

const FullwidthSlider = (props) => {
    const id = typeof props?.id === 'string' ? props.id : generateId()
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      if (typeof window === 'undefined') return
      try {
        const mediaWatcher = window?.matchMedia("(max-width: 767px)")
        const updateIsMobile = (e) => { setIsMobile(e.matches) }
  
        updateIsMobile(mediaWatcher)
  
        mediaWatcher.addEventListener('change', updateIsMobile)
        return () => {
          mediaWatcher.removeEventListener('change', updateIsMobile)
        }        
      } catch (e) {
        return null
      }
    }, [])

    const mobileBottomMargin = +mobileBottomHorizontalGutterSize / 4
    const desktopBottomMargin = +desktopBottomHorizontalGutterSize / 4
    const marginClass = `mb-${Math.ceil(Math.min(8, mobileBottomMargin))} md:mb-${Math.ceil(Math.min(8, desktopBottomMargin))}`
    const mainBg = buildS7Image(mainBackgroundImageSlug, mainBackgroundImagePreset)
    const overrideSlideHeight = sliderHeight && !Number.isNaN(+sliderHeight) && +sliderHeight > 0
    let maxHeight = overrideSlideHeight ? `${sliderHeight}px` : 'none'
    const containerClass = mainBannerWidth === 'full' ? '' : 'w-full md:max-w-7xl 2xl:max-w-[100rem]'
    if (isMobile) {
      maxHeight = String(mobileSliderHeight)
    }

    return (
      <>
        <StyleTag id={id} />
        <div
          id={id}
          className={`w-full bg-no-repeat bg-center bg-cover ${marginClass}`}
          style={{
            background: mainBg
              ? `url(${mainBg}) center center / cover no-repeat`
              : mainBackground,
            maxHeight,
          }}
        >
          <section className={`mx-auto section carousel ${containerClass}`}>
            <BILDITCarousel
              orientation={isMobile ? 'vertical' : sliderOrientation}
              dotOrientation='horizontal'
              isMobile={isMobile}
              maxHeight={maxHeight} />
          </section>
        </div>
      </>
    );
};

export default FullwidthSlider;