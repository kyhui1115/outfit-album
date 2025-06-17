"use client";

import { useRef, useState } from "react";

import Calendar from "@/_features/calendar/Calendar";

export default function Page() {
  const [translateX, setTranslateX] = useState(0);

  const startX = useRef(0);
  const dragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const diff = e.clientX - startX.current;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    const diff = e.touches[0].clientX - startX.current;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    setTranslateX(0);
  };

  return (
    <div
      className="flex h-full w-full justify-center"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <Calendar />
    </div>
  );
}
