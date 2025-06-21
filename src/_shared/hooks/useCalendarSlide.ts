import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import useCalendarStore from "../store/calendar";

const useCalendarSlide = (setSlideList: Dispatch<SetStateAction<number[]>>) => {
  const { month, year, setMonth, setYear } = useCalendarStore();

  const [translateX, setTranslateX] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const screenRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const dragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    setIsAnimating(false);
    startX.current = e.clientX - translateX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const diff = e.clientX - startX.current;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    setIsAnimating(true);

    if (Math.abs(translateX) < screenWidth / 2) {
      setTranslateX(0);

      setTimeout(() => setIsAnimating(false), 100);
      return;
    }

    if (translateX < 0) {
      setTranslateX(-screenWidth);
      setTimeout(() => {
        setSlideList(prev => [...prev.slice(0, 2), prev[prev.length - 1]]);
        setMonth(prevMonth => {
          if (prevMonth === 12) {
            setYear(prevYear => prevYear + 1);
            return 1;
          }
          return prevMonth + 1;
        });
        setTranslateX(0);
        setIsAnimating(false);
      }, 100);
    }

    if (translateX > 0) {
      setTranslateX(screenWidth);
      setTimeout(() => {
        setSlideList(prev => [prev[0], ...prev.slice(1, 3)]);
        setMonth(prevMonth => {
          if (prevMonth === 1) {
            setYear(prevYear => prevYear - 1);
            return 12;
          }
          return prevMonth - 1;
        });
        setTranslateX(0);
        setIsAnimating(false);
      }, 100);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    setIsAnimating(false);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    setIsAnimating(true);

    if (Math.abs(translateX) < screenWidth / 2) {
      setTranslateX(0);
      setTimeout(() => setIsAnimating(false), 100);
      return;
    }

    if (translateX < 0) {
      setTranslateX(-screenWidth);
      setTimeout(() => {
        setSlideList(prev => [...prev.slice(0, 2), prev[prev.length - 1]]);
        setMonth(month === 12 ? 1 : month + 1);
        setTranslateX(0);
        setIsAnimating(false);
      }, 100);
    }

    if (translateX > 0) {
      setTranslateX(screenWidth);
      setTimeout(() => {
        setSlideList(prev => [prev[0], ...prev.slice(1, 3)]);
        setMonth(month === 1 ? 12 : month - 1);
        setTranslateX(0);
        setIsAnimating(false);
      }, 100);
    }
  };

  useEffect(() => {
    setScreenWidth((screenRef.current?.clientWidth || 0) / 0.96);
  }, [screenRef]);

  return {
    translateX,
    screenWidth,
    isAnimating,
    screenRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useCalendarSlide;
