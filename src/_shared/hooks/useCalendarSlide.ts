import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import useCalendarStore from "../store/calendar";
import useIsIgnoreClick from "../store/isIgnoreClick";
import { isPWA } from "../utils/isPWA";
import { useIsMobile } from "./useIsMobile";

const SLIDE_DURATION = 300;

const useCalendarSlide = (setSlideList: Dispatch<SetStateAction<number[]>>) => {
  const isMobile = useIsMobile();

  const { month, setMonth, setYear } = useCalendarStore();

  const [translateX, setTranslateX] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const screenRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const dragging = useRef(false);

  const { isIgnoreClick, setIsIgnoreClick } = useIsIgnoreClick();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isPWA()) return;
    e.preventDefault();

    dragging.current = true;
    setIsAnimating(false);
    startX.current = e.clientX - translateX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPWA()) return;
    e.preventDefault();

    if (!dragging.current) return;

    if (!isIgnoreClick) {
      setIsIgnoreClick(true);
    }

    const diff = e.clientX - startX.current;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (isPWA()) return;

    dragging.current = false;
    setIsAnimating(true);

    if (isIgnoreClick) {
      setTimeout(() => setIsIgnoreClick(false), SLIDE_DURATION);
    }

    if (Math.abs(translateX) < screenWidth / 4) {
      setTranslateX(0);

      setTimeout(() => setIsAnimating(false), SLIDE_DURATION);
      return;
    }

    if (translateX < 0) {
      setTranslateX(-screenWidth);
      setTimeout(() => {
        setSlideList(prev => [...prev.slice(0, 2), prev[prev.length - 1]]);
        setMonth(prev => (prev === 12 ? 1 : prev + 1));
        setYear(prev => (month === 12 ? prev + 1 : prev));
        setTranslateX(0);
        setIsAnimating(false);
      }, SLIDE_DURATION);
    }

    if (translateX > 0) {
      setTranslateX(screenWidth);
      setTimeout(() => {
        setSlideList(prev => [prev[0], ...prev.slice(1, 3)]);
        setMonth(prev => (prev === 1 ? 12 : prev - 1));
        setYear(prev => (month === 1 ? prev - 1 : prev));
        setTranslateX(0);
        setIsAnimating(false);
      }, SLIDE_DURATION);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();

    dragging.current = true;
    setIsAnimating(false);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();

    if (!dragging.current) return;

    if (!isIgnoreClick) {
      setIsIgnoreClick(true);
    }

    const diff = e.touches[0].clientX - startX.current;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    setIsAnimating(true);

    if (isIgnoreClick) {
      setTimeout(() => setIsIgnoreClick(false), SLIDE_DURATION);
    }

    if (Math.abs(translateX) < screenWidth / 4) {
      setTranslateX(0);
      setTimeout(() => setIsAnimating(false), SLIDE_DURATION);
      return;
    }

    if (translateX < 0) {
      setTranslateX(-screenWidth);
      setTimeout(() => {
        setSlideList(prev => [...prev.slice(0, 2), prev[prev.length - 1]]);
        setMonth(prev => (prev === 12 ? 1 : prev + 1));
        setYear(prev => (month === 12 ? prev + 1 : prev));
        setTranslateX(0);
        setIsAnimating(false);
      }, SLIDE_DURATION);
    }

    if (translateX > 0) {
      setTranslateX(screenWidth);
      setTimeout(() => {
        setSlideList(prev => [prev[0], ...prev.slice(1, 3)]);
        setMonth(prev => (prev === 1 ? 12 : prev - 1));
        setYear(prev => (month === 1 ? prev - 1 : prev));
        setTranslateX(0);
        setIsAnimating(false);
      }, SLIDE_DURATION);
    }
  };

  useEffect(() => {
    const EMPTY_SPACE = isPWA() || isMobile ? 0.942 : 0.96;
    setScreenWidth((screenRef.current?.clientWidth || 0) / EMPTY_SPACE);
  }, [screenRef, isMobile]);

  return {
    translateX,
    screenWidth,
    isAnimating,
    screenRef,
    slideDuration: SLIDE_DURATION,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useCalendarSlide;
