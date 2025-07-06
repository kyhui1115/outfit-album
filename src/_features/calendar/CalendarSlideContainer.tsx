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
      className={`flex h-full w-full shrink-0 justify-center ${isAnimating ? "duration-100" : "duration-0"} px-2 pb-8`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `translateX(${translateX}px)` }}
    >
      {children}
    </div>
  );
}
