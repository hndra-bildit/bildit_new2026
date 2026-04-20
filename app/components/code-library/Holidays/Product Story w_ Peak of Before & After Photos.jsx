"use client"
// @version v1
import React, { useState, useRef, useEffect, useCallback, useLayoutEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// group: { 1. Section Layout }
const topMargin = $(topMargin:Dropdown[None|mt-0,Tiny|mt-px,Atomic|mt-1,Micro|mt-2,Little|mt-4,Regular|mt-8,Big|mt-12,Huge|mt-16,Mega|mt-20]="mt-0");
const bottomMargin = $(bottomMargin:Dropdown[None|mb-0,Tiny|mb-px,Atomic|mb-1,Micro|mb-2,Little|mb-4,Regular|mb-8,Big|mb-12,Huge|mb-16,Mega|mb-20]="mb-8");
// endgroup

// group: { 2. Slide Layout }
const desktopSlideAspectRatioWidth = $(desktopSlideAspectRatioWidth:String="16");
const desktopSlideAspectRatioHeight = $(desktopSlideAspectRatioHeight:String="9");
const tabletSlideAspectRatioWidth = $(tabletSlideAspectRatioWidth:String="16");
const tabletSlideAspectRatioHeight = $(tabletSlideAspectRatioHeight:String="9");
const mobileSlideAspectRatioWidth = $(mobileSlideAspectRatioWidth:String="16");
const mobileSlideAspectRatioHeight = $(mobileSlideAspectRatioHeight:String="9");
// endgroup

// group: { 3.1 Slide 1 }
const firstSlideBackgroundImage = $(firstSlideBackgroundImage:String="wk27_080425_newcmshomepage_bts_slide_1");
const firstSlideBackgroundImageAltText = $(firstSlideBackgroundImageAltText:String="Slide 1");
const firstSlideBackgroundImagePreset = $(firstSlideBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const firstSlideCtaUrl = $(firstSlideCtaUrl:String="/";required=true);
const firstSlideCtaAdobeTag = $(firstSlideCtaAdobeTag:String="slide-1-cta";required=true);
const firstSlideTextBelow = $(firstSlideTextBelow:RichText="Back to School");
// endgroup

// group: { 3.2 Slide 2 }
const secondSlideBackgroundImage = $(secondSlideBackgroundImage:String="wk27_080425_newcmshomepage_bts_slide_2");
const secondSlideBackgroundImageAltText = $(secondSlideBackgroundImageAltText:String="Slide 2");
const secondSlideBackgroundImagePreset = $(secondSlideBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const secondSlideCtaUrl = $(secondSlideCtaUrl:String="/";required=true);
const secondSlideCtaAdobeTag = $(secondSlideCtaAdobeTag:String="slide-2-cta";required=true);
const secondSlideTextBelow = $(secondSlideTextBelow:RichText="");
// endgroup

// group: { 3.3 Slide 3 }
const thirdSlideBackgroundImage = $(thirdSlideBackgroundImage:String="wk27_080425_newcmshomepage_bts_slide_3");
const thirdSlideBackgroundImageAltText = $(thirdSlideBackgroundImageAltText:String="Slide 3");
const thirdSlideBackgroundImagePreset = $(thirdSlideBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const thirdSlideCtaUrl = $(thirdSlideCtaUrl:String="/";required=true);
const thirdSlideCtaAdobeTag = $(thirdSlideCtaAdobeTag:String="slide-3-cta";required=true);
const thirdSlideTextBelow = $(thirdSlideTextBelow:RichText="");
// endgroup

// group: { 3.4 Slide 4 }
const fourthSlideBackgroundImage = $(fourthSlideBackgroundImage:String="wk27_080425_newcmshomepage_bts_slide_4");
const fourthSlideBackgroundImageAltText = $(fourthSlideBackgroundImageAltText:String="Slide 4");
const fourthSlideBackgroundImagePreset = $(fourthSlideBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fourthSlideCtaUrl = $(fourthSlideCtaUrl:String="/";required=true);
const fourthSlideCtaAdobeTag = $(fourthSlideCtaAdobeTag:String="slide-4-cta";required=true);
const fourthSlideTextBelow = $(fourthSlideTextBelow:RichText="");
// endgroup

// group: { 3.5 Slide 5 }
const fifthSlideBackgroundImage = $(fifthSlideBackgroundImage:String="wk27_080425_newcmshomepage_bts_slide_4");
const fifthSlideBackgroundImageAltText = $(fifthSlideBackgroundImageAltText:String="Slide 5");
const fifthSlideBackgroundImagePreset = $(fifthSlideBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const fifthSlideCtaUrl = $(fifthSlideCtaUrl:String="/";required=true);
const fifthSlideCtaAdobeTag = $(fifthSlideCtaAdobeTag:String="slide-5-cta";required=true);
const fifthSlideTextBelow = $(fifthSlideTextBelow:RichText="");
// endgroup

// group: { 3.6 Slide 6 }
const sixthSlideBackgroundImage = $(sixthSlideBackgroundImage:String="wk27_080425_newcmshomepage_bts_slide_2");
const sixthSlideBackgroundImageAltText = $(sixthSlideBackgroundImageAltText:String="Slide 6");
const sixthSlideBackgroundImagePreset = $(sixthSlideBackgroundImagePreset:Dropdown[Image|$DWP_PHOTO$,Gif|$DWP_RAW$]="$DWP_PHOTO$");
const sixthSlideCtaUrl = $(sixthSlideCtaUrl:String="/";required=true);
const sixthSlideCtaAdobeTag = $(sixthSlideCtaAdobeTag:String="slide-6-cta";required=true);
const sixthSlideTextBelow = $(sixthSlideTextBelow:RichText="");
// endgroup

// group {4. Carousel Settings}
const interval = $(interval:String="2.5");
const autoplay = $(autoplay:Boolean="true");
const navigation = $(navigation:Boolean="false");
const pagination = $(pagination:Boolean="true");
const loop = $(loop:Boolean="true");
const navigationColor = $(navigationColor:String="#ffffff");
// endgroup

/**
 * Builds a Scene7 image URL with the specified slug and preset
 * @param {string} slug - The image slug/filename
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

/**
 * A fully-featured carousel component with support for infinite looping, autoplay,
 * drag/swipe interactions, keyboard navigation, and responsive configuration.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Slide elements to display in the carousel.
 * @param {boolean} [props.loop=false] - Enable infinite looping.
 * @param {number|Object} [props.perPage=1] - Number of slides visible per page. Supports responsive breakpoints: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5, 2xl: 6 }.
 * @param {number} [props.perMove=1] - Number of slides to move on navigation.
 * @param {number|string} [props.gap=0] - Gap between slides (CSS value: number for px, or string like '1rem').
 * @param {number|string|Object} [props.padding=0] - Padding around slides. Can be a number/string for uniform padding, { left, right } for asymmetric, or responsive object.
 * @param {number} [props.clones] - Number of clones per side for infinite loop (auto-calculated if not provided).
 * @param {number|string} [props.fixedWidth] - Fixed width for each slide (CSS value).
 * @param {boolean} [props.autoWidth=false] - Allow slides to have auto width.
 * @param {boolean|string} [props.autoplay=false] - Enable autoplay (use 'pause' to pause).
 * @param {number} [props.interval=3000] - Autoplay interval in milliseconds.
 * @param {boolean} [props.pauseOnHover=true] - Pause autoplay on hover.
 * @param {boolean} [props.pauseOnFocus=true] - Pause autoplay on focus.
 * @param {boolean} [props.drag=true] - Enable drag/swipe interactions. Automatically detects vertical swipes for page scrolling.
 * @param {number} [props.swipeAngle=45] - Maximum angle (in degrees) for horizontal swipe detection. Lower values require more horizontal movement.
 * @param {Object} [props.dragMinThreshold] - Minimum drag distance (in pixels) to trigger slide change.
 * @param {number} [props.dragMinThreshold.mouse=10] - Threshold for mouse drag.
 * @param {number} [props.dragMinThreshold.touch=10] - Threshold for touch drag.
 * @param {number} [props.flickVelocityThreshold=0.1] - Minimum velocity (px/ms) for flick detection.
 * @param {string} [props.className=''] - Additional class names for the carousel container.
 * @param {number} [props.transitionMs=400] - Transition duration in milliseconds.
 * @param {string} [props.ariaLabel='Carousel'] - ARIA label for accessibility.
 * @param {boolean|Object} [props.navigation=true] - Show navigation arrows. Supports responsive breakpoints: navigation={false} or navigation={{ xs: false, lg: true }}.
 * @param {Function} [props.renderPrevArrow] - Custom render function for previous arrow. Receives { onClick, onPointerDown }.
 * @param {Function} [props.renderNextArrow] - Custom render function for next arrow. Receives { onClick, onPointerDown }.
 * @param {string} [props.navigationClassName=''] - Additional class names for the default navigation buttons (not applied when using custom render functions).
 * @param {boolean} [props.pagination=false] - Show pagination dots.
 * @returns {JSX.Element} Rendered carousel component.
 *
 * @example
 * // Basic usage
 * <Carousel perPage={3} gap={16}>
 *   <div>Slide 1</div>
 *   <div>Slide 2</div>
 * </Carousel>
 *
 * @example
 * // Responsive with custom navigation
 * <Carousel
 *   perPage={{ xs: 1, md: 2, lg: 4 }}
 *   navigation={{ xs: false, lg: true }}
 *   padding={{ xs: 16, lg: 40 }}
 *   loop={true}
 * >
 *   {slides}
 * </Carousel>
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
  pagination = false,
  navigationClassName
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
      { key: 'sm', min: 640 },
      { key: 'md', min: 768 },
      { key: 'lg', min: 1024 },
      { key: 'xl', min: 1280 },
      { key: '2xl', min: 1536 },
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

  const responsivePadding = useMemo(() => getResponsiveValue(padding, windowWidth), [padding, windowWidth, getResponsiveValue]);
  const paddingValues = normalizePadding(responsivePadding);

  const responsivePerPage = useMemo(() => {
    const value = getResponsiveValue(perPage, windowWidth);
    return Math.max(1, Number(value) || 1);
  }, [perPage, windowWidth, getResponsiveValue]);

  const responsiveNavigation = useMemo(() => {
    const value = getResponsiveValue(navigation, windowWidth);
    return value !== false;
  }, [navigation, windowWidth, getResponsiveValue]);

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
    capturedPointerId: null,
    hasPointerCapture: false,
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
    const gapSize = px(gap, rootRef.current);
    if (fixedWidth != null) {
      const fixedWidthValue = px(fixedWidth, rootRef.current);
      const fixedSize = fixedWidthValue + gapSize;
      const fixedCount = fixedSize > 0 ? Math.ceil(trackWidth / fixedSize) : 0;
      if (fixedCount) return fixedCount;
    }
    if (autoWidth) return slideCount;
    return responsivePerPage * MULTIPLIER;
  }, [autoWidth, fixedWidth, clonesOption, loop, responsivePerPage, slideCount, gap, isNum, px]);

  const [clonesPerSide, setClonesPerSide] = useState(0);

  const measure = useCallback(() => {
    const root = rootRef.current;
    const list = listRef.current;
    if (!root || !list) return;
    const gapSize = px(gap, root);
    setGapInPixels(gapSize);
    const firstRealSlide = list.querySelector('li[data-role="real"]') || list.children[0];
    if (firstRealSlide) {
      const rect = firstRealSlide.getBoundingClientRect();
      setSlideSizeInPixels(rect.width + gapSize);
    }
    setClonesPerSide(computeCloneCount());
  }, [gap, computeCloneCount, px]);

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
    const list = listRef.current;
    if (!list || typeof ResizeObserver === 'undefined') return;
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(list);
    const firstRealSlide = list.querySelector('li[data-role="real"]');
    if (firstRealSlide) resizeObserver.observe(firstRealSlide);
    return () => resizeObserver.disconnect();
  }, [measure]);

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
   * - Uses recursive setTimeout instead of setInterval for better control
   * - Pauses when user hovers, focuses, or drags the carousel
   * - Supports per-slide custom intervals via data-splide-interval attribute
   * - Uses indexRef to avoid stale closures (dependencies don't include currentIndex)
   * - Cleanup ensures timer is cancelled when dependencies change or component unmounts
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
   * - When transition reaches a clone slide, instantly jump to corresponding real slide
   * - Example: If user slides past last real slide into tail clones, jump back to first real slide
   * - jumpSilently() disables animation temporarily to make the jump invisible
   * - isNormalizing flag prevents recursive transition events during the jump
   * - This creates the illusion of infinite content without actually duplicating everything
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

    const state = dragStateRef.current;
    setIsDragging(true);
    setDragLockedAxis(null);
    state.pointerId = event.pointerId != null ? event.pointerId : 'mouse';
    state.capturedPointerId = event.pointerId ?? null;
    state.hasPointerCapture = false;
    state.startX = event.clientX;
    state.startY = event.clientY;
    state.lastX = event.clientX;
    state.lastTimestamp = performance.now();
    state.startTranslate = -(currentIndex * slideSizeInPixels);
    state.moved = false;
    state.suppressClick = false;

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
      const lockedAxis = angle <= swipeAngle ? 'x' : 'y';
      setDragLockedAxis(lockedAxis);

      // If locked to vertical axis, stop dragging and allow normal scroll
      if (lockedAxis === 'y') {
        setIsDragging(false);
        state.pointerId = null;
        state.capturedPointerId = null;
      }
      return;
    }

    if (dragLockedAxis === 'x') {
      const threshold = getThreshold(event.pointerType);
      if (Math.abs(deltaX) > threshold) {
        state.moved = true;
        state.suppressClick = true;
        if (!state.hasPointerCapture && state.capturedPointerId != null) {
          try {
            event.currentTarget.setPointerCapture?.(state.capturedPointerId);
            state.hasPointerCapture = true;
          } catch (_) {}
        }
        event.preventDefault();
        setDragOffset(deltaX);
      }
      const now = performance.now();
      if (now - state.lastTimestamp > 16) {
        state.lastX = event.clientX;
        state.lastTimestamp = now;
      }
    }
  };

  const handlePointerUp = (event) => {
    const state = dragStateRef.current;
    if (!isDragging || (state.pointerId !== (event.pointerId != null ? event.pointerId : 'mouse'))) return;

    if (state.hasPointerCapture && state.capturedPointerId != null) {
      try {
        event.currentTarget.releasePointerCapture?.(state.capturedPointerId);
      } catch (_) {}
      state.hasPointerCapture = false;
    }

    const deltaX = event.clientX - state.startX;
    const deltaTime = Math.max(1, performance.now() - state.lastTimestamp);
    const velocityX = (event.clientX - state.lastX) / deltaTime;

    const wasDragged = state.suppressClick;

    setIsDragging(false);
    state.pointerId = null;
    state.capturedPointerId = null;

    const absoluteDeltaX = Math.abs(deltaX);
    const direction = deltaX < 0 ? 1 : -1;

    const threshold = getThreshold(event.pointerType);
    const isFlick = Math.abs(velocityX) > flickVelocityThreshold;

    let shouldMove = false;
    if (absoluteDeltaX > threshold || isFlick) {
      shouldMove = true;
    }

    setHasAnimation(true);
    setDragOffset(0);

    // If there was no drag movement, allow clicks to work normally
    if (!wasDragged) {
      state.suppressClick = false;
    }

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

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const handleClickCapture = (event) => {
      const shouldSuppress = dragStateRef.current.suppressClick;
      if (shouldSuppress) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        dragStateRef.current.suppressClick = false;
      }
    };
    list.addEventListener('click', handleClickCapture, true);
    return () => list.removeEventListener('click', handleClickCapture, true);
  }, []);

  const screenReaderOnlyStyles = {
    position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0,
  };

  const realSlideIndex = loop
    ? (slideCount ? ((currentIndex - clonesPerSide) % slideCount + slideCount) % slideCount : 0)
    : currentIndex;

  let baseTranslate = -(currentIndex * slideSizeInPixels);

  if (!loop && isAtEnd) {
    const paddingRightPx = px(paddingValues.right, rootRef.current);
    baseTranslate += paddingRightPx - gapInPixels;
  }

  const currentTranslate = isDragging && dragLockedAxis === 'x'
    ? baseTranslate + dragOffset
    : baseTranslate;

  const gapCSS = unit(gap) || '0px';
  const paddingLeftCSS = unit(paddingValues.left) || '0px';
  const paddingRightCSS = unit(paddingValues.right) || '0px';

  const slideWidthStyle = fixedWidth != null
    ? unit(fixedWidth)
    : `calc((100% - (var(--gap) * (${responsivePerPage} - 1))) / ${responsivePerPage})`;

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
    >
      <div aria-live="polite" style={screenReaderOnlyStyles}>Slide {realSlideIndex + 1} of {slideCount}</div>

      <div ref={trackRef} className="overflow-hidden" style={{ paddingLeft: paddingLeftCSS, paddingRight: paddingRightCSS }}>
        <ul
          ref={listRef}
          className="flex items-stretch"
          style={{
            gap: gapCSS,
            '--gap': gapCSS,
            transform: `translate3d(${currentTranslate}px,0,0)`,
            transition: hasAnimation && !(isDragging && dragLockedAxis === 'x') ? `transform ${transitionMs}ms ease` : 'none',
            willChange: 'transform',
            touchAction: 'pan-y',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {headClones.map((node, i) => (
            <li key={node.key || `h-${i}`} className="shrink-0" style={{ width: slideWidthStyle }} aria-hidden>
              <div className="h-full w-full">{node}</div>
            </li>
          ))}

          {slides.map((node, i) => (
            <li key={node.key || `r-${i}`} id={`slide-real-${i}`} data-role="real" role="group" aria-roledescription="slide" aria-label={`Slide ${i + 1} of ${slideCount}`} className="shrink-0" style={{ width: slideWidthStyle }}>
              <div className="h-full w-full" onDragStart={(e) => e.preventDefault()}>{asElement(node)}</div>
            </li>
          ))}

          {tailClones.map((node, i) => (
            <li key={node.key || `t-${i}`} className="shrink-0" style={{ width: slideWidthStyle }} aria-hidden>
              <div className="h-full w-full">{node}</div>
            </li>
          ))}
        </ul>
      </div>

      {responsiveNavigation && canSlide && !isAtStart && (
        renderPrevArrow ? (
          renderPrevArrow({ onClick: goToPrevious, onPointerDown: (e) => e.stopPropagation() })
        ) : (
          <button
            onClick={goToPrevious}
            onPointerDown={(e) => e.stopPropagation()}
            className={`flex absolute left-0 top-1/2 -translate-y-1/2 text-black border-none rounded-full w-12 h-12 items-center justify-center cursor-pointer z-10 transition-all ${navigationClassName}`}
            aria-label="Previous items"
          >
            <svg className="w-2 xl:w-4" viewBox="0 0 17 34" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6625 0.670328C15.2077 0.669263 15.736 0.85914 16.1558 1.20699L16.1558 1.20699C17.1479 2.02947 17.2854 3.50045 16.4629 4.49252C16.4617 4.49401 16.4604 4.49551 16.4592 4.497L6.00583 17.0037L16.0858 29.5337L16.0858 29.5337C16.8982 30.534 16.7458 32.0035 15.7455 32.8159C15.7423 32.8185 15.739 32.8211 15.7358 32.8237L15.7358 32.8237C14.7684 33.6749 13.294 33.5807 12.4427 32.6132C12.4031 32.5682 12.3652 32.5217 12.3292 32.4737L1.05917 18.4737C0.351436 17.6127 0.351436 16.3713 1.05918 15.5103L12.7258 1.51034L12.7258 1.51034C13.2006 0.937627 13.92 0.625612 14.6625 0.670335L14.6625 0.670328Z" fill="currentColor"/>
            </svg>
          </button>
        )
      )}

      {responsiveNavigation && canSlide && !isAtEnd && (
        renderNextArrow ? (
          renderNextArrow({ onClick: goToNext, onPointerDown: (e) => e.stopPropagation() })
        ) : (
          <button
            onClick={goToNext}
            onPointerDown={(e) => e.stopPropagation()}
            className={`flex absolute right-0 top-1/2 -translate-y-1/2 border-none rounded-full w-12 h-12 items-center justify-center cursor-pointer z-10 transition-all ${navigationClassName}`}
            aria-label="Next items"
          >
            <svg className="w-2 xl:w-4" viewBox="0 0 17 34" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.3375 33.3297C1.79232 33.3307 1.26396 33.1409 0.84417 32.793H0.84417C-0.147894 31.9705 -0.285369 30.4996 0.537107 29.5075C0.538348 29.506 0.539591 29.5045 0.540836 29.503L10.9942 16.9963L0.91417 4.46631L0.914169 4.46631C0.101801 3.46596 0.254193 1.99646 1.25455 1.18408C1.25775 1.18148 1.26096 1.17889 1.26417 1.17631V1.17631C2.23165 0.325055 3.70603 0.419272 4.55727 1.38675C4.5969 1.4318 4.63478 1.47835 4.67083 1.52631L15.9408 15.5263C16.6486 16.3873 16.6486 17.6287 15.9408 18.4897L4.27416 32.4897H4.27416C3.79941 33.0624 3.08004 33.3744 2.33749 33.3297L2.3375 33.3297Z" fill="currentColor"/>
            </svg>
          </button>
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

const isValidImageUrl = (v) => typeof v === 'string' && v.length > 0;

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
  const { mobile, tablet, desktop, largeDesktop } = images || {}

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image sources`);
      setHasError(true);
    }
  };

  const fallbackSrc = mobile || tablet || desktop || largeDesktop;
  const shouldRenderImage = fallbackSrc && isValidImageUrl(fallbackSrc);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {shouldRenderImage && (
        <picture>
          {isValidImageUrl(mobile) && <source media="(max-width: 767px)" srcSet={mobile} />}
          {isValidImageUrl(tablet) && <source media="(min-width: 768px) and (max-width: 1279px)" srcSet={tablet} />}
          {isValidImageUrl(desktop) && <source media="(min-width: 1280px) and (max-width: 1919px)" srcSet={desktop} />}
          {isValidImageUrl(largeDesktop) && <source media="(min-width: 1920px)" srcSet={largeDesktop} />}
          <Image
            className={`${imageClassName}`}
            src={fallbackSrc}
            alt={alt ?? ''}
            fill
            onError={handleError}
          />
        </picture>
      )}
      {children}
    </div>
  );
}

/**
 *
 * @param {id} It is used as a unique namespace for the CSS custom properties (CSS variables) created by this component. By scoping variable names with this id you avoid collisions when multiple banner instances are rendered on the same page (for example, two carousels each get their own set of CSS variables).
 *
 * Use cases and notes:
 * - Type: string (unique identifier per banner instance).
 * - Purpose: prefixes generated CSS custom property names (e.g. --{id}-container-background-color) so styles are isolated to that banner instance.
 * - Typical source: the id is normally provided by the rendering platform or server-side integration (see: https://www.npmjs.com/package/@bildit-platform/nextjs).
 *
 * The component returns a JSX fragment containing <style> tags that define these scoped CSS variables and related helper classes for the banner instance.
 * @returns
 */
const ProductStoryPeakStyleVars = ({ id }) => (
  <style global jsx>{`
    @layer template {
      :host, :root {
        @layer ${id} {
          @layer slides {
            --${id}-slide-horizontal-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
            --${id}-slide-vertical-padding: clamp(var(--spacing) * 3, 3vw, calc(var(--spacing) * 8));
            --${id}-mobile-slide-aspect-ratio: ${mobileSlideAspectRatioWidth} / ${mobileSlideAspectRatioHeight};
            --${id}-tablet-slide-aspect-ratio: ${tabletSlideAspectRatioWidth} / ${tabletSlideAspectRatioHeight};
            --${id}-desktop-slide-aspect-ratio: ${desktopSlideAspectRatioWidth} / ${desktopSlideAspectRatioHeight};
          }
          @layer navigation {
            --${id}-carousel-navigation-color: ${navigationColor};
          }
        }
      }
    }
  `}</style>
)

const SectionLayoutStyles = ({ id }) => (
  <style>{`
    .mx-\\[max\\(36px\\,\\(100vw-1560px\\)\\/2\\)\\] {
      margin-left: max(36px, (100vw - 1560px) / 2);
      margin-right: max(36px, (100vw - 1560px) / 2);
    }

    /* Child selector utilities for container behavior */
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

    /* Responsive child selector utilities */
    @media (min-width: 40rem) {
      .\\[\\&\\>div\\]\\:sm\\:mx-8 > div {
        margin-left: calc(var(--spacing) * 8);
        margin-right: calc(var(--spacing) * 8);
      }
    }

    @media (min-width: 48rem) {
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
    }
  `}</style>
);

const CarouselStyles = ({ id }) => (
  <style>{`
    .${id}-carousel-navigation-color {
      color: var(--${id}-carousel-navigation-color);
    }
  `}</style>
);

const SlideStyles = ({ id }) => (
  <style>{`
    .${id}-aspect-\\[mobile-slide\\] {
      aspect-ratio: var(--${id}-mobile-slide-aspect-ratio);
    }

    @media (width >= 48rem) {
      .md\\:${id}-aspect-\\[tablet-slide\\] {
        aspect-ratio: var(--${id}-tablet-slide-aspect-ratio);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[desktop-slide\\] {
        aspect-ratio: var(--${id}-desktop-slide-aspect-ratio);
      }
    }
  `}</style>
)

const UtilityStyles = () => (
  <style>{`
    /* Whitespace utilities */
    .whitespace-pre {
      white-space: pre;
    }

    /* Layout utilities */
    .w-min {
      width: min-content;
    }
    .w-12 {
      width: 3rem;
    }
    .w-6 {
      width: 1.5rem;
    }
    .h-6 {
      height: 1.5rem;
    }
    .h-min {
      height: min-content;
    }
    .h-0\\.5 {
      height: 0.125rem;
    }

    /* Max width utilities */
    .max-w-inset {
      max-width: var(--breakpoint-3xl);
    }
    // .max-w-fit {
    //   max-width: fit-content;
    // }
    // .max-w-none {
    //   max-width: none;
    // }

    /* Border utilities */
    .border-px {
      border-width: 1px;
    }

    /* Border radius */
    .rounded-full {
      border-radius: 9999px;
    }
    .rounded-t-lg {
      border-top-left-radius: var(--radius-lg);
      border-top-right-radius: var(--radius-lg);
    }
    .rounded-b-lg {
      border-bottom-left-radius: var(--radius-lg);
      border-bottom-right-radius: var(--radius-lg);
    }

    /* Flex utilities */
    .flex-1 {
      flex: 1 1 0%;
    }
    .flex-2 {
      flex: 2 1 0%;
    }

    /* Position utilities */
    .top-1\\/2 {
      top: 50%;
    }

    .-translate-y-1\\/2 {
      transform: translateY(-50%);
    }

    /* Spacing utilities */
    .pl-4 {
      padding-left: 1rem;
    }

    /* Object fit */
    .object-cover {
      object-fit: cover;
    }
    .object-center {
      object-position: center;
    }

    /* Overflow utilities */
    .overflow-visible {
      overflow: visible;
    }
    .overflow-x-auto {
      overflow-x: auto;
    }
    .overflow-y-visible {
      overflow-y: visible;
    }

    /* Scroll utilities */
    .scroll-smooth {
      scroll-behavior: smooth;
    }
    .snap-x {
      scroll-snap-type: x mandatory;
    }
    .snap-mandatory {
      scroll-snap-type: x mandatory;
    }
    .snap-start {
      scroll-snap-align: start;
    }

    /* Z-index utilities */
    .z-100 {
      z-index: 100;
    }

    /* Shadow utilities */
    .shadow-md {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .shadow-lg {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    .shadow {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    /* Hover utilities */
    .hover\\:bg-white\\:hover {
      background-color: #ffffff;
    }
    .hover\\:shadow-lg\\:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    /* Active utilities */
    .active\\:shadow\\:active {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    /* Transition utilities */
    .transition-all {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    /* Responsive utilities for md breakpoint */
    @media (width >= 48rem) {
      .md\\:flex-row {
        flex-direction: row;
      }
      .md\\:mb-0 {
        margin-bottom: 0;
      }
      .md\\:rounded-t-2xl {
        border-top-left-radius: var(--radius-2xl);
        border-top-right-radius: var(--radius-2xl);
      }
      .md\\:rounded-b-2xl {
        border-bottom-left-radius: var(--radius-2xl);
        border-bottom-right-radius: var(--radius-2xl);
      }
    }

    /* Responsive utilities for xl breakpoint */
    @media (width >= 80rem) {
      .xl\\:flex {
        display: flex;
      }
      .xl\\:pl-8 {
        padding-left: calc(var(--spacing) * 8);
      }
      .xl\\:rounded-2xl {
        border-radius: var(--radius-2xl);
      }
    }
  `}</style>
);

const AspectRatioStyles = ({ id }) => (
  <style>{`
    .${id}-aspect-\\[desktop-slide\\] {
      aspect-ratio: var(--${id}-desktop-slide-aspect-ratio);
    }
    .${id}-aspect-\\[tablet-slide\\] {
      aspect-ratio: var(--${id}-tablet-slide-aspect-ratio);
    }
    .${id}-aspect-\\[mobile-slide\\] {
      aspect-ratio: var(--${id}-mobile-slide-aspect-ratio);
    }
  `}</style>
);

const ResponsiveUtilityStyles = () => (
  <style>{`
    /* Responsive spacing utilities */
    @media (width >= 48rem) {
      .md\\:px-8 {
        padding-left: calc(var(--spacing) * 8);
        padding-right: calc(var(--spacing) * 8);
      }
      .md\\:py-8 {
        padding-top: calc(var(--spacing) * 8);
        padding-bottom: calc(var(--spacing) * 8);
      }
      .md\\:my-2 {
        margin-top: calc(var(--spacing) * 2);
        margin-bottom: calc(var(--spacing) * 2);
      }
      .md\\:my-4 {
        margin-top: calc(var(--spacing) * 4);
        margin-bottom: calc(var(--spacing) * 4);
      }
      .md\\:my-8 {
        margin-top: calc(var(--spacing) * 8);
        margin-bottom: calc(var(--spacing) * 8);
      }
      .md\\:rounded-2xl {
        border-radius: var(--radius-2xl);
      }
    }
  `}</style>
);

const ResponsiveAspectRatioStyles = ({ id }) => (
  <style>{`
    /* Responsive aspect ratios - uses variables, scoped to prevent conflicts */
    @media (width >= 48rem) {
      .md\\:${id}-aspect-\\[tablet-container\\] {
        aspect-ratio: var(--${id}-tablet-container-aspect-ratio);
      }
      .md\\:${id}-aspect-\\[tablet-slide\\] {
        aspect-ratio: var(--${id}-tablet-slide-aspect-ratio);
      }
    }

    @media (width >= 80rem) {
      .xl\\:${id}-aspect-\\[desktop-container\\] {
        aspect-ratio: var(--${id}-desktop-container-aspect-ratio);
      }
      .xl\\:${id}-aspect-\\[desktop-slide\\] {
        aspect-ratio: var(--${id}-desktop-slide-aspect-ratio);
      }
    }
  `}</style>
)

const WrapperComponent = ({ href, children, ...props }) => (
  href ? <Link {...props} href={href}>{children}</Link> : <>{children}</>
)

const ResponsiveContainer = ({
  containerBehavior,
  className = "",
  children
}) => {
  // Standardized container behavior logic
  const containerClasses = (() => {
    switch (containerBehavior) {
      case 'max-w-full':
        return '[&>div]:md:max-w-full [&>div]:w-full';
      case 'max-w-inset':
        return 'px-4 md:px-8 [&>div]:md:max-w-[var(--breakpoint-3xl)] [&>div]:md:px-8 [&>div]:w-full';
      case 'max-w-centered':
        return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem]';
      default:
        return '[&>div]:mx-4 [&>div]:sm:mx-8 [&>div]:md:mx-[max(36px,(100vw-1560px)/2)] [&>div]:max-w-[100rem]'; // Default to centered
    }
  })();

  return (
    <div className={`${containerClasses} ${className}`}>
      {children}
    </div>
  );
};

/** Renders slide text-below when content is string or React element. Skips function/slot to avoid invalid hook call from CMS NestedSlotRenderer. */
const SlideTextBelow = ({ content, varPrefix }) => {
  if (content == null || content === '') return null;
  const c = content;
  const isString = typeof c === 'string';
  const htmlString = isString && c.trim().startsWith('<');
  const divProps = {
    className: 'absolute bottom-0 left-0 right-0 p-4 z-10 text-white',
    'data-bildit-var-name': `${varPrefix}SlideTextBelow`,
    'data-bildit-var-type': 'RichText',
  };
  if (typeof c === 'function') {
    return null;
  }
  if (React.isValidElement(c)) {
    return <div {...divProps}>{c}</div>;
  }
  if (htmlString) {
    return <div {...divProps} dangerouslySetInnerHTML={{ __html: c }} />;
  }
  if (isString) {
    return <div {...divProps}>{c}</div>;
  }
  return null;
};

const ProductStoryPeak = ({ id }) => {
  const SLIDE_VAR_PREFIXES = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

  const slideData = [
    [firstSlideBackgroundImage, firstSlideBackgroundImageAltText, firstSlideBackgroundImagePreset, firstSlideCtaUrl, firstSlideCtaAdobeTag, firstSlideTextBelow],
    [secondSlideBackgroundImage, secondSlideBackgroundImageAltText, secondSlideBackgroundImagePreset, secondSlideCtaUrl, secondSlideCtaAdobeTag, secondSlideTextBelow],
    [thirdSlideBackgroundImage, thirdSlideBackgroundImageAltText, thirdSlideBackgroundImagePreset, thirdSlideCtaUrl, thirdSlideCtaAdobeTag, thirdSlideTextBelow],
    [fourthSlideBackgroundImage, fourthSlideBackgroundImageAltText, fourthSlideBackgroundImagePreset, fourthSlideCtaUrl, fourthSlideCtaAdobeTag, fourthSlideTextBelow],
    [fifthSlideBackgroundImage, fifthSlideBackgroundImageAltText, fifthSlideBackgroundImagePreset, fifthSlideCtaUrl, fifthSlideCtaAdobeTag, fifthSlideTextBelow],
    [sixthSlideBackgroundImage, sixthSlideBackgroundImageAltText, sixthSlideBackgroundImagePreset, sixthSlideCtaUrl, sixthSlideCtaAdobeTag, sixthSlideTextBelow]
  ];

  const slides = slideData
    .map((row, originalIndex) => [row, originalIndex])
    .filter(([[slug, , preset]]) => {
      const u = buildImageUrl(slug, 'm', preset);
      return slug && String(slug).trim() !== 'no-image' && isValidImageUrl(u);
    })
    .map(([[slug, altText, preset, url, adobeTag, textBelow], originalIndex]) => ({
      image: { slug, altText, preset },
      cta: { url, adobeTag },
      textBelow: { content: textBelow },
      varPrefix: SLIDE_VAR_PREFIXES[originalIndex],
    }));

  return (
    <>
      <ProductStoryPeakStyleVars id={id} />
      <UtilityStyles />
      <SectionLayoutStyles id={id} />
      <CarouselStyles id={id} />
      <AspectRatioStyles id={id} />
      <SlideStyles id={id} />
      <ResponsiveUtilityStyles />
      <ResponsiveAspectRatioStyles id={id} />
      <ResponsiveContainer
        containerBehavior="max-w-full"
        className={`w-full relative justify-center mx-auto ${topMargin} ${bottomMargin}`}
      >
        <div className="relative w-full overflow-visible">
          <Carousel 
            pagination={Boolean(pagination)} 
            navigation={!Boolean(navigation)} 
            loop={Boolean(loop)} 
            perPage={1} 
            perMove={1} 
            gap={16} 
            padding={{ xs: 0, md: 0, lg: 48 }} 
            autoplay={Boolean(autoplay)} 
            interval={interval * 1000} 
            className={`${id}-container-text-color ${id}-container-font-family`}
            navigationClassName={`${id}-carousel-navigation-color`}>
            {slides.map(({ image, cta, textBelow, varPrefix }, index) => (
              <WrapperComponent
                key={index}
                className="flex-none cursor-pointer"
                href={cta.url}
                data-aali={cta.adobeTag}
                data-bildit-var-name={`${varPrefix}SlideCtaUrl`}
                data-bildit-var-type="String"
              >
                <span
                  data-bildit-var-name={`${varPrefix}SlideCtaAdobeTag`}
                  data-bildit-var-type="String"
                  style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', borderWidth: 0 }}
                  aria-hidden
                />
                <div
                  className={`flex w-full relative ${id}-aspect-[mobile-slide] md:${id}-aspect-[tablet-slide] xl:${id}-aspect-[desktop-slide]`}
                  data-bildit-var-name={`${varPrefix}SlideBackgroundImage`}
                  data-bildit-var-type="String"
                >
                  <PictureResponsiveImage
                    images={{
                      mobile: buildImageUrl(image.slug, 'm', image.preset),
                      tablet: buildImageUrl(image.slug, 't', image.preset),
                      desktop: buildImageUrl(image.slug, 'd', image.preset),
                      largeDesktop: buildImageUrl(image.slug, 'l', image.preset),
                    }}
                    alt={image.altText}
                    imageClassName="z-10 object-cover object-center"
                    className="flex w-full h-full absolute inset-0"
                  />
                </div>
                <SlideTextBelow content={textBelow?.content} varPrefix={varPrefix} />
              </WrapperComponent>
            ))}
          </Carousel>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default ProductStoryPeak;