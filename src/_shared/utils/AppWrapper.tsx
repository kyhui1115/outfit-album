"use client";

import { useEffect } from "react";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const preventSwipeBack = (e: TouchEvent) => {
      // 화면의 왼쪽 끝에서 스와이프 시작 시
      if (e.touches[0].clientX < 30) {
        e.preventDefault();
      }
    };
    document.body.addEventListener("touchstart", preventSwipeBack, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("touchstart", preventSwipeBack);
    };
  }, []);

  return <>{children}</>;
}
