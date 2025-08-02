"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";

import useCalendarSlide from "@/_shared/hooks/useCalendarSlide";

interface Props {
  children: ReactNode;
  setSlideList: Dispatch<SetStateAction<number[]>>;
}

export default function CalendarSlideContainer({
  children,
  setSlideList,
}: Props) {
  const {
    translateX,
    screenRef,
    isAnimating,
    slideDuration,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useCalendarSlide(setSlideList);

  return (
    <div
      ref={screenRef}
      className={`flex h-full w-full shrink-0 justify-center`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateX(${translateX}px)`,
        transition: isAnimating ? `transform ${slideDuration}ms` : "none",
      }}
    >
      {children}
    </div>
  );
}
