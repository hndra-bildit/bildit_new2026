import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '@/app/components/Carousel'


const desktopSlideCount = $(desktopSlideCount:Dropdown[1|1,2|2,3|3,4|4,5|5,6|6,7|7,8|8]="2");
const mobileSlideCount = $(mobileSlideCount:Dropdown[1|1,2|2,3|3,4|4,5|5,6|6,7|7,8|8]="2");
const sliderOrientation = $(sliderOrientation:Dropdown[Horizontal|horizontal,Vertical|vertical]="horizontal");
const sliderDots = $(sliderDots:Boolean="false");
const desktopSlideGap = $(desktopSlideGap:Dropdown[0|0,XXS|8,XS|16,S|24,M|32,40|40,L|48,56|56,XL|64,72|72,80|80,88|88,XXL|96,104|104,112|112,120|120,Super|128]="8");
const mobileSlideGap = $(mobileSlideGap:Dropdown[0|0,XXS|8,XS|16,S|24,M|32,40|40,L|48,56|56,XL|64,72|72,80|80,88|88,XXL|96,104|104,112|112,120|120,Super|128]="8");
const sliderHeight = $(sliderHeight:Number);
const mobileSliderHeight = $(mobileSliderHeight:Number="600");
const carouselButtonColor = $(carouselButtonColor:Color="#fff");

const aemPreset1 =
$(aemPreset1:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug1 = $(desktopSlug1:String="");
const mobileSlug1 = $(mobileSlug1:String);
const altText1 = $(altText1:String="");
const adobeTag1 = $(adobeTag1:String);
const title1 = $(title1:String);
const url1 = $(url1:String);
const backgroundColor1 = $(backgroundColor1:Color='#f0f3f5');
const backgroundImageSlug1 = $(backgroundImageSlug1:String);
const backgroundImagePreset1 = $(backgroundImagePreset1:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target1 = $(target1:Dropdown[External|_blank,Internal|_self]);
const slot1DesktopAlignment = $(slot1DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot1MobileAlignment = $(slot1MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot1GlassEffect = $(slot1GlassEffect:Boolean="false");
const slot1DesktopRoundedCornerTopLeft = $(slot1DesktopRoundedCornerTopLeft:Boolean="true");
const slot1DesktopRoundedCornerTopRight = $(slot1DesktopRoundedCornerTopRight:Boolean="true");
const slot1DesktopRoundedCornerBottomLeft = $(slot1DesktopRoundedCornerBottomLeft:Boolean="true");
const slot1DesktopRoundedCornerBottomRight = $(slot1DesktopRoundedCornerBottomRight:Boolean="true");
const slot1MobileRoundedCornerTopLeft = $(slot1MobileRoundedCornerTopLeft:Boolean="true");
const slot1MobileRoundedCornerTopRight = $(slot1MobileRoundedCornerTopRight:Boolean="true");
const slot1MobileRoundedCornerBottomLeft = $(slot1MobileRoundedCornerBottomLeft:Boolean="true");
const slot1MobileRoundedCornerBottomRight = $(slot1MobileRoundedCornerBottomRight:Boolean="true");

const aemPreset2 =
$(aemPreset2:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug2 = $(desktopSlug2:String="");
const mobileSlug2 = $(mobileSlug2:String);
const altText2 = $(altText2:String="");
const adobeTag2 = $(adobeTag2:String);
const title2 = $(title2:String);
const url2 = $(url2:String);
const backgroundColor2 = $(backgroundColor2:Color='#f0f3f5');
const backgroundImageSlug2 = $(backgroundImageSlug2:String);
const backgroundImagePreset2 = '$DWP_GRAPHIC';
const target2 = $(target2:Dropdown[External|_blank,Internal|_self]);
const slot2DesktopAlignment = $(slot2DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot2MobileAlignment = $(slot2MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot2GlassEffect = $(slot2GlassEffect:Boolean="false");
const slot2DesktopRoundedCornerTopLeft = $(slot2DesktopRoundedCornerTopLeft:Boolean="true");
const slot2DesktopRoundedCornerTopRight = $(slot2DesktopRoundedCornerTopRight:Boolean="true");
const slot2DesktopRoundedCornerBottomLeft = $(slot2DesktopRoundedCornerBottomLeft:Boolean="true");
const slot2DesktopRoundedCornerBottomRight = $(slot2DesktopRoundedCornerBottomRight:Boolean="true");
const slot2MobileRoundedCornerTopLeft = $(slot2MobileRoundedCornerTopLeft:Boolean="true");
const slot2MobileRoundedCornerTopRight = $(slot2MobileRoundedCornerTopRight:Boolean="true");
const slot2MobileRoundedCornerBottomLeft = $(slot2MobileRoundedCornerBottomLeft:Boolean="true");
const slot2MobileRoundedCornerBottomRight = $(slot2MobileRoundedCornerBottomRight:Boolean="true");

const aemPreset3 =
$(aemPreset3:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug3 = $(desktopSlug3:String="");
const mobileSlug3 = $(mobileSlug3:String);
const altText3 = $(altText3:String="");
const adobeTag3 = $(adobeTag3:String);
const title3 = $(title3:String);
const url3 = $(url3:String);
const backgroundColor3 = $(backgroundColor3:Color='#f0f3f5');
const backgroundImageSlug3 = $(backgroundImageSlug3:String);
const backgroundImagePreset3 = $(backgroundImagePreset3:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target3 = $(target3:Dropdown[External|_blank,Internal|_self]);
const slot3DesktopAlignment = $(slot3DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot3MobileAlignment = $(slot3MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot3GlassEffect = $(slot3GlassEffect:Boolean="false");
const slot3DesktopRoundedCornerTopLeft = $(slot3DesktopRoundedCornerTopLeft:Boolean="true");
const slot3DesktopRoundedCornerTopRight = $(slot3DesktopRoundedCornerTopRight:Boolean="true");
const slot3DesktopRoundedCornerBottomLeft = $(slot3DesktopRoundedCornerBottomLeft:Boolean="true");
const slot3DesktopRoundedCornerBottomRight = $(slot3DesktopRoundedCornerBottomRight:Boolean="true");
const slot3MobileRoundedCornerTopLeft = $(slot3MobileRoundedCornerTopLeft:Boolean="true");
const slot3MobileRoundedCornerTopRight = $(slot3MobileRoundedCornerTopRight:Boolean="true");
const slot3MobileRoundedCornerBottomLeft = $(slot3MobileRoundedCornerBottomLeft:Boolean="true");
const slot3MobileRoundedCornerBottomRight = $(slot3MobileRoundedCornerBottomRight:Boolean="true");

const aemPreset4 =
$(aemPreset4:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug4 = $(desktopSlug4:String="");
const mobileSlug4 = $(mobileSlug4:String);
const altText4 = $(altText4:String="");
const adobeTag4 = $(adobeTag4:String);
const title4 = $(title4:String);
const url4 = $(url4:String);
const backgroundColor4 = $(backgroundColor4:Color='#f0f3f5');
const backgroundImageSlug4 = $(backgroundImageSlug4:String);
const backgroundImagePreset4 = $(backgroundImagePreset4:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target4 = $(target4:Dropdown[External|_blank,Internal|_self]="_self");
const slot4DesktopAlignment = $(slot3DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot4MobileAlignment = $(slot3MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot4GlassEffect = $(slot3GlassEffect:Boolean="false");
const slot4DesktopRoundedCornerTopLeft = $(slot4DesktopRoundedCornerTopLeft:Boolean="true");
const slot4DesktopRoundedCornerTopRight = $(slot4DesktopRoundedCornerTopRight:Boolean="true");
const slot4DesktopRoundedCornerBottomLeft = $(slot4DesktopRoundedCornerBottomLeft:Boolean="true");
const slot4DesktopRoundedCornerBottomRight = $(slot4DesktopRoundedCornerBottomRight:Boolean="true");
const slot4MobileRoundedCornerTopLeft = $(slot4MobileRoundedCornerTopLeft:Boolean="true");
const slot4MobileRoundedCornerTopRight = $(slot4MobileRoundedCornerTopRight:Boolean="true");
const slot4MobileRoundedCornerBottomLeft = $(slot4MobileRoundedCornerBottomLeft:Boolean="true");
const slot4MobileRoundedCornerBottomRight = $(slot4MobileRoundedCornerBottomRight:Boolean="true");

const aemPreset5=$(aemPreset5:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug5=$(desktopSlug5:String="");
const mobileSlug5=$(mobileSlug5:String);
const altText5=$(altText5:String="");
const adobeTag5=$(adobeTag5:String);
const title5=$(title5:String);
const url5=$(url5:String);
const backgroundColor5=$(backgroundColor5:Color='#f0f3f5');
const backgroundImageSlug5=$(backgroundImageSlug5:String);
const backgroundImagePreset5=$(backgroundImagePreset5:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target5=$(target5:Dropdown[External|_blank,Internal|_self]);
const textAlign5=$(textAlign5:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign5=$(imageAlign5:Dropdown[Left|start,Center|center,Right|end]="end");
const slot5DesktopAlignment=$(slot5DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot5MobileAlignment=$(slot5MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot5GlassEffect=$(slot5GlassEffect:Boolean="false");
const slot5DesktopRoundedCornerTopLeft=$(slot5DesktopRoundedCornerTopLeft:Boolean="true");
const slot5DesktopRoundedCornerTopRight=$(slot5DesktopRoundedCornerTopRight:Boolean="true");
const slot5DesktopRoundedCornerBottomLeft=$(slot5DesktopRoundedCornerBottomLeft:Boolean="true");
const slot5DesktopRoundedCornerBottomRight=$(slot5DesktopRoundedCornerBottomRight:Boolean="true");
const slot5MobileRoundedCornerTopLeft=$(slot5MobileRoundedCornerTopLeft:Boolean="true");
const slot5MobileRoundedCornerTopRight=$(slot5MobileRoundedCornerTopRight:Boolean="true");
const slot5MobileRoundedCornerBottomLeft=$(slot5MobileRoundedCornerBottomLeft:Boolean="true");
const slot5MobileRoundedCornerBottomRight=$(slot5MobileRoundedCornerBottomRight:Boolean="true");

const aemPreset6=$(aemPreset6:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug6=$(desktopSlug6:String="");
const mobileSlug6=$(mobileSlug6:String);
const altText6=$(altText6:String="");
const adobeTag6=$(adobeTag6:String);
const title6=$(title6:String);
const url6=$(url6:String);
const backgroundColor6=$(backgroundColor6:Color='#f0f3f5');
const backgroundImageSlug6=$(backgroundImageSlug6:String);
const backgroundImagePreset6=$(backgroundImagePreset6:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target6=$(target6:Dropdown[External|_blank,Internal|_self]);
const textAlign6=$(textAlign6:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign6=$(imageAlign6:Dropdown[Left|start,Center|center,Right|end]="end");
const slot6DesktopAlignment=$(slot6DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot6MobileAlignment=$(slot6MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot6GlassEffect=$(slot6GlassEffect:Boolean="false");
const slot6DesktopRoundedCornerTopLeft=$(slot6DesktopRoundedCornerTopLeft:Boolean="true");
const slot6DesktopRoundedCornerTopRight=$(slot6DesktopRoundedCornerTopRight:Boolean="true");
const slot6DesktopRoundedCornerBottomLeft=$(slot6DesktopRoundedCornerBottomLeft:Boolean="true");
const slot6DesktopRoundedCornerBottomRight=$(slot6DesktopRoundedCornerBottomRight:Boolean="true");
const slot6MobileRoundedCornerTopLeft=$(slot6MobileRoundedCornerTopLeft:Boolean="true");
const slot6MobileRoundedCornerTopRight=$(slot6MobileRoundedCornerTopRight:Boolean="true");
const slot6MobileRoundedCornerBottomLeft=$(slot6MobileRoundedCornerBottomLeft:Boolean="true");
const slot6MobileRoundedCornerBottomRight=$(slot6MobileRoundedCornerBottomRight:Boolean="true");

const aemPreset7=$(aemPreset7:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug7=$(desktopSlug7:String="");
const mobileSlug7=$(mobileSlug7:String);
const altText7=$(altText7:String="");
const adobeTag7=$(adobeTag7:String);
const title7=$(title7:String);
const url7=$(url7:String);
const backgroundColor7=$(backgroundColor7:Color='#f0f3f5');
const backgroundImageSlug7=$(backgroundImageSlug7:String);
const backgroundImagePreset7=$(backgroundImagePreset7:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target7=$(target7:Dropdown[External|_blank,Internal|_self]);
const textAlign7=$(textAlign7:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign7=$(imageAlign7:Dropdown[Left|start,Center|center,Right|end]="end");
const slot7DesktopAlignment=$(slot7DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot7MobileAlignment=$(slot7MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot7GlassEffect=$(slot7GlassEffect:Boolean="false");
const slot7DesktopRoundedCornerTopLeft=$(slot7DesktopRoundedCornerTopLeft:Boolean="true");
const slot7DesktopRoundedCornerTopRight=$(slot7DesktopRoundedCornerTopRight:Boolean="true");
const slot7DesktopRoundedCornerBottomLeft=$(slot7DesktopRoundedCornerBottomLeft:Boolean="true");
const slot7DesktopRoundedCornerBottomRight=$(slot7DesktopRoundedCornerBottomRight:Boolean="true");
const slot7MobileRoundedCornerTopLeft=$(slot7MobileRoundedCornerTopLeft:Boolean="true");
const slot7MobileRoundedCornerTopRight=$(slot7MobileRoundedCornerTopRight:Boolean="true");
const slot7MobileRoundedCornerBottomLeft=$(slot7MobileRoundedCornerBottomLeft:Boolean="true");
const slot7MobileRoundedCornerBottomRight=$(slot7MobileRoundedCornerBottomRight:Boolean="true");

const aemPreset8=$(aemPreset8:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const desktopSlug8=$(desktopSlug8:String="");
const mobileSlug8=$(mobileSlug8:String);
const altText8=$(altText8:String="");
const adobeTag8=$(adobeTag8:String);
const title8=$(title8:String);
const url8=$(url8:String);
const backgroundColor8=$(backgroundColor8:Color='#f0f3f5');
const backgroundImageSlug8=$(backgroundImageSlug8:String);
const backgroundImagePreset8=$(backgroundImagePreset8:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const target8=$(target8:Dropdown[External|_blank,Internal|_self]);
const textAlign8=$(textAlign8:Dropdown[Left|left,Center|center,Right|right]="left");
const imageAlign8=$(imageAlign8:Dropdown[Left|start,Center|center,Right|end]="end");
const slot8DesktopAlignment=$(slot8DesktopAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot8MobileAlignment=$(slot8MobileAlignment:Dropdown[Top Left|topLeft,Top Center|topCenter,Top Right|topRight,Middle Left|midLeft,Middle Center|midCenter,Middle Right|midRight,Bottom Left|bottomLeft,Bottom Center|bottomCenter,Bottom Right|bottomRight]="midLeft");
const slot8GlassEffect=$(slot8GlassEffect:Boolean="false");
const slot8DesktopRoundedCornerTopLeft=$(slot8DesktopRoundedCornerTopLeft:Boolean="true");
const slot8DesktopRoundedCornerTopRight=$(slot8DesktopRoundedCornerTopRight:Boolean="true");
const slot8DesktopRoundedCornerBottomLeft=$(slot8DesktopRoundedCornerBottomLeft:Boolean="true");
const slot8DesktopRoundedCornerBottomRight=$(slot8DesktopRoundedCornerBottomRight:Boolean="true");
const slot8MobileRoundedCornerTopLeft=$(slot8MobileRoundedCornerTopLeft:Boolean="true");
const slot8MobileRoundedCornerTopRight=$(slot8MobileRoundedCornerTopRight:Boolean="true");
const slot8MobileRoundedCornerBottomLeft=$(slot8MobileRoundedCornerBottomLeft:Boolean="true");
const slot8MobileRoundedCornerBottomRight=$(slot8MobileRoundedCornerBottomRight:Boolean="true");

const mainBackground = $(background:Color="#f9f9f9");
const mainBackgroundImageSlug = $(backgroundImage:String);
const mainBackgroundImagePreset = $(backgroundImagePreset:Dropdown[DWP_PHOTO|$DWP_PHOTO$,DWP_RAW|$DWP_RAW$,DWP_PRODUCT_REC_DESKTOP|$DWP_PRODUCT_REC_DESKTOP$,DWP_PRODUCT_REC_MOBILE|$DWP_PRODUCT_REC_MOBILE$,DWP_PRODUCT_PLP_DESKTOP|$DWP_PRODUCT_PLP_DESKTOP$,DWP_PRODUCT_PLP_MOBILE|$DWP_PRODUCT_PLP_MOBILE$,DWP_PRODUCT_PDP_DESKTOP|$DWP_PRODUCT_PDP_DESKTOP$,DWP_PRODUCT_PDP_MOBILE|$DWP_PRODUCT_PDP_MOBILE$,DWP_THUMB_PDP_DESKTOP|$DWP_THUMB_PDP_DESKTOP$,DWP_THUMB_PDP_MOBILE|$DWP_THUMB_PDP_MOBILE$,DWP_COLOR_PDP_DESKTOP|$DWP_COLOR_PDP_DESKTOP$,DWP_COLOR_PDP_MOBILE|$DWP_COLOR_PDP_MOBILE$,DWP_PRODUCT_ZOOM_DESKTOP|$DWP_PRODUCT_ZOOM_DESKTOP$,DWP_PRODUCT_ZOOM_MOBILE|$DWP_PRODUCT_ZOOM_MOBILE$]="$DWP_PHOTO$");
const mainBannerWidth = $(bannerWidth:Dropdown[Inset|inset,Full Width|full]="full");
const sectionTitle = $(sectionTitle:String);
const sectionColor = $(sectionColor:Color);
const sectionFont = $(sectionFont:Dropdown[Proxima Nova|proxima-nova,Roboto|Roboto,Baskerville|Baskerville]="proxima-nova");

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
          classes.push('rounded-tl')
          if (classes.some((c) => c.startsWith('md:rounded-tl'))) {
            classes.push('md:rounded-tl-none')
          }
          break;
        case 'topRight':
          classes.push('rounded-tr')
          if (classes.some((c) => c.startsWith('md:rounded-tr'))) {
            classes.push('md:rounded-tr-none')
          }
          break;
        case 'bottomLeft':
          classes.push('rounded-bl')
          if (classes.some((c) => c.startsWith('md:rounded-bl'))) {
            classes.push('md:rounded-bl-none')
          }
          break;
        case 'bottomRight':
          classes.push('rounded-br')
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
        #${id} .img-carousel [data-slot="carousel-content"] {
          margin: 0 auto;
        }

        #${id} .img-carousel-next,
        #${id} .img-carousel-prev {
          svg {
            height: 3rem;
            color: ${carouselButtonColor};
            width: 3rem;
          }
        }

        @media (max-width: 767px) {
          #${id} .carousel-content {
            /* add height of nav buttons */
            height: calc(8rem + ${mobileSliderHeight}px);
          }

          #${id} .img-carousel-next {
            bottom: 0;
            translate: 0 -1rem !important;
            top: auto;
          }

          #${id} .img-carousel-prev {
            translate: 0 4rem !important;
          }

          #${id} .img-carousel-next,
          #${id} .img-carousel-prev {
            left: 0;
            margin: 0 auto;
            right: 0;
          }
        }
      `}
    </style>
  )

const Slot = ({ data }) => {
  const {
      adobeTag,
      altText,
      backgroundColor,
      backgroundImage,
      imageDT,
      imageMB,
      target,
      title,
      url,
      glassEffect,
      corners,
      index, isMobile,
      maxHeight,
      className, orientation
  } = data

  const bg = () => {
      if (backgroundImage) return `bottom / contain no-repeat url(${backgroundImage}) ${backgroundColor ?? ''}`
      if (backgroundColor) return backgroundColor
      return 'none'
  }
  const bgStyle = { background: bg(), height: 'auto', maxHeight: 'none' }
  if (glassEffect) {
      const hexLen = backgroundColor.length - 1
        /* color has no alpha, force 95% opacity so the effect can work */
      if (hexLen === 3 || hexLen === 6) {
        bgStyle.background += 'F3'
      }
  }
  const roundedClasses = getCornerStyles(corners)
  const glassClass = glassEffect ? 'backdrop-blur' : ''

  const imgStyle = {}
  const hasLink = url?.length > 0 && title?.length > 0

  if (sliderHeight && !Number.isNaN(+sliderHeight) && +sliderHeight > 0) {
    bgStyle.maxHeight = `${sliderHeight}px`
  }
  if (orientation === 'vertical') {
    bgStyle.maxHeight = `${maxHeight}px`
  }

  const img = imageDT || imageMB ? (<img
    alt={altText}
    className="img object-contain grow max-w-full"
    style={imgStyle}
    src={isMobile ? imageMB : imageDT}
  />) : null

  return (
    <>
      <div className='slot w-full flex flex-col relative overflow-hidden justify-center' style={bgStyle}>
        <div className={`flex relative overflow-hidden slot${index} ${glassClass} ${roundedClasses} ${className}`} style={bgStyle}>
          {(imageDT || imageMB) && hasLink
            ? (<Link className={`contents link-${target === '_blank' ? 'external' : 'internal'}`}
                  data-aali={adobeTag}
                  href={url}
                  title={title}
                  target={target}>
                {img}
                </Link>)
            : img
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
      imageDT: buildS7Image(desktopSlug1, aemPreset1),
      imageMB: buildS7Image(mobileSlug1, aemPreset1),
      target: target1,
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
  },
  {
      adobeTag: adobeTag2,
      altText: altText2,
      backgroundColor: backgroundColor2,
      backgroundImage: buildS7Image(backgroundImageSlug2, backgroundImagePreset2),
      imageDT: buildS7Image(desktopSlug2, aemPreset2),
      imageMB: buildS7Image(mobileSlug2, aemPreset2),
      target: target2,
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
  },
  {
      adobeTag: adobeTag3,
      altText: altText3,
      backgroundColor: backgroundColor3,
      backgroundImage: buildS7Image(backgroundImageSlug3, backgroundImagePreset3),
      imageDT: buildS7Image(desktopSlug3, aemPreset3),
      imageMB: buildS7Image(mobileSlug3, aemPreset3),
      target: target3,
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
  },
  {
      adobeTag: adobeTag4,
      altText: altText4,
      backgroundColor: backgroundColor4,
      backgroundImage: buildS7Image(backgroundImageSlug4, backgroundImagePreset4),
      imageDT: buildS7Image(desktopSlug4, aemPreset4),
      imageMB: buildS7Image(mobileSlug4, aemPreset4),
      target: target4,
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
  },
  {
      adobeTag: adobeTag5,
      altText: altText5,
      backgroundColor: backgroundColor5,
      backgroundImage: buildS7Image(backgroundImageSlug5, backgroundImagePreset5),
      imageDT: buildS7Image(desktopSlug5, aemPreset5),
      imageMB: buildS7Image(mobileSlug5, aemPreset5),
      target: target5,
      title: title5,
      url: url5,
      glassEffect: slot5GlassEffect,
      corners: {
        desktop: {
          topLeft: slot5DesktopRoundedCornerTopLeft,
          topRight: slot5DesktopRoundedCornerTopRight,
          bottomLeft: slot5DesktopRoundedCornerBottomLeft,
          bottomRight: slot5DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot5MobileRoundedCornerTopLeft,
          topRight: slot5MobileRoundedCornerTopRight,
          bottomLeft: slot5MobileRoundedCornerBottomLeft,
          bottomRight: slot5MobileRoundedCornerBottomRight
        }
      },
  },
  {
      adobeTag: adobeTag6,
      altText: altText6,
      backgroundColor: backgroundColor6,
      backgroundImage: buildS7Image(backgroundImageSlug6, backgroundImagePreset6),
      imageDT: buildS7Image(desktopSlug6, aemPreset6),
      imageMB: buildS7Image(mobileSlug6, aemPreset6),
      target: target6,
      title: title6,
      url: url6,
      glassEffect: slot6GlassEffect,
      corners: {
        desktop: {
          topLeft: slot6DesktopRoundedCornerTopLeft,
          topRight: slot6DesktopRoundedCornerTopRight,
          bottomLeft: slot6DesktopRoundedCornerBottomLeft,
          bottomRight: slot6DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot6MobileRoundedCornerTopLeft,
          topRight: slot6MobileRoundedCornerTopRight,
          bottomLeft: slot6MobileRoundedCornerBottomLeft,
          bottomRight: slot6MobileRoundedCornerBottomRight
        }
      },
  },
  {
      adobeTag: adobeTag7,
      altText: altText7,
      backgroundColor: backgroundColor7,
      backgroundImage: buildS7Image(backgroundImageSlug7, backgroundImagePreset7),
      imageDT: buildS7Image(desktopSlug7, aemPreset7),
      imageMB: buildS7Image(mobileSlug7, aemPreset7),
      target: target7,
      title: title7,
      url: url7,
      glassEffect: slot7GlassEffect,
      corners: {
        desktop: {
          topLeft: slot7DesktopRoundedCornerTopLeft,
          topRight: slot7DesktopRoundedCornerTopRight,
          bottomLeft: slot7DesktopRoundedCornerBottomLeft,
          bottomRight: slot7DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot7MobileRoundedCornerTopLeft,
          topRight: slot7MobileRoundedCornerTopRight,
          bottomLeft: slot7MobileRoundedCornerBottomLeft,
          bottomRight: slot7MobileRoundedCornerBottomRight
        }
      },
  },
  {
      adobeTag: adobeTag8,
      altText: altText8,
      backgroundColor: backgroundColor8,
      backgroundImage: buildS7Image(backgroundImageSlug8, backgroundImagePreset8),
      imageDT: buildS7Image(desktopSlug8, aemPreset8),
      imageMB: buildS7Image(mobileSlug8, aemPreset8),
      target: target8,
      title: title8,
      url: url8,
      glassEffect: slot8GlassEffect,
      corners: {
        desktop: {
          topLeft: slot8DesktopRoundedCornerTopLeft,
          topRight: slot8DesktopRoundedCornerTopRight,
          bottomLeft: slot8DesktopRoundedCornerBottomLeft,
          bottomRight: slot8DesktopRoundedCornerBottomRight
        },
        mobile: {
          topLeft: slot8MobileRoundedCornerTopLeft,
          topRight: slot8MobileRoundedCornerTopRight,
          bottomLeft: slot8MobileRoundedCornerBottomLeft,
          bottomRight: slot8MobileRoundedCornerBottomRight
        }
      },
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
  const gapClass = `gap-${mobileSlideGap / 4} lg:gap-${desktopSlideGap / 4}`
  const isVertical = orientation === 'vertical'
  const sliderPrevClass = isVertical
      ? 'absolute left-0 right-0 mx-auto -bottom-4 rotate-90'
      : 'absolute left-4'
  const sliderNextClass = isVertical
      ? 'absolute left-0 right-0 mx-auto -top-4 rotate-90'
      : 'absolute right-4'
  const orientationClass = isVertical ? 'flex-col' : ''

  const slideCount = useMemo(() => isMobile ? +mobileSlideCount : +desktopSlideCount, [isMobile])
  const listCopy = useMemo(() => ([...slots]), []);
  const list = useMemo(() => chunkArray(listCopy, slideCount), [listCopy, slideCount])
  const mappedSlots = useMemo(() => (list ?? []).map((slide, index) => (
    <CarouselItem className={`flex overflow-hidden relative pt-0 pl-0 ${orientationClass} ${gapClass}`} key={index}>
      {slide.map((slot, index) => {
        return (
          <Slot key={`slot${index}`} data={{
            ...slot,
            index: index + 1,
            isMobile,
            orientation,
            maxHeight
          }} />
        )
      })}
    </CarouselItem>
  )), [gapClass, isMobile, list, maxHeight, orientation, orientationClass])

  const dots = useMemo(() => {
    const marginClass = dotOrientation === 'vertical' ? 'mx-auto' : 'ml-2'
    if (sliderDots) return <CarouselDots className={`${marginClass} md:max-w-7xl 2xl:max-w-[100rem]`} orientation={dotOrientation} />
    if (isMobile) return null
  }, [isMobile, dotOrientation])
  const strMaxHeight = isVertical ? `calc(8rem + ${maxHeight}px)`: `${maxHeight}px`

  return (
    <Carousel className='w-full h-min flex overflow-hidden lg:h-auto' orientation={orientation} style={{ height: isVertical ? `${maxHeight}px` : 'auto' }}>
      <CarouselPrevious className={`img-carousel-prev my-2 cursor-pointer disabled:cursor-not-allowed absolute size-8 z-1 disabled:pointer-events-auto border-none border-black ${sliderPrevClass}`} />
      <CarouselContent className={`carousel-content flex relative h-min mt-0 mx-auto ${gapClass}`} style={{ maxHeight: strMaxHeight, height: isVertical ? strMaxHeight : 'auto' }}>
        {mappedSlots}
      </CarouselContent>
      <CarouselNext className={`img-carousel-next my-2 cursor-pointer disabled:cursor-not-allowed absolute size-8 z-1 disabled:pointer-events-auto border-none border-black ${sliderNextClass}`} />
      {dots}
    </Carousel>
  )
}

const FullwidthImageSlider = (props) => {
    if (typeof window === 'undefined') return
    const mediaWatcher = useMemo(() => window?.matchMedia("(max-width: 767px)"), []);
    const id = typeof props?.id === 'string' ? props.id : generateId()
    const [isMobile, setIsMobile] = useState(mediaWatcher.matches);

    useEffect(() => {
      const updateIsMobile = (e) => {
        setIsMobile(e.matches)
      }

      updateIsMobile(mediaWatcher)

      mediaWatcher.addEventListener('change', updateIsMobile)
      return () => {
        mediaWatcher.removeEventListener('change', updateIsMobile)
      }
    }, [mediaWatcher])

    const mobileBottomMargin = +mobileBottomHorizontalGutterSize / 4
    const desktopBottomMargin = +desktopBottomHorizontalGutterSize / 4
    const marginClass = `mb-${Math.ceil(Math.min(8, mobileBottomMargin))} md:mb-${Math.ceil(Math.min(8, desktopBottomMargin))}`
    const mainBg = buildS7Image(mainBackgroundImageSlug, mainBackgroundImagePreset)
    const overrideSlideHeight = sliderHeight && !Number.isNaN(+sliderHeight) && +sliderHeight > 0
    let maxHeight = overrideSlideHeight ? `${sliderHeight}px` : 'none'
    const containerClass = mainBannerWidth === 'full' ? 'w-full' : 'max-w-m lg:max-w-7xl 2xl:max-w-[100rem]'
    if (isMobile) {
      maxHeight = String(mobileSliderHeight)
    }

    return (
      <>
        <StyleTag id={id} />
        <div
          id={id}
          className={`img-carousel bg-no-repeat bg-center bg-cover ${containerClass} ${marginClass}`}
          style={{
            background: mainBg
              ? `url(${mainBg}) center center / cover no-repeat`
              : mainBackground,
            maxHeight,
          }}
        >
          <section className='mx-auto section carousel max-w-m lg:max-w-7xl 2xl:max-w-[100rem]'>
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

export default FullwidthImageSlider;