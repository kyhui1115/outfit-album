"use client";

import { useEffect } from "react";

export default function PreventSwipeBackWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const preventSwipeBack = (e: TouchEvent) => {
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
