"use client";

import { useIsMobile } from "@/_shared/hooks/useIsMobile";
import useCalendarStore from "@/_shared/store/calendar";

export default function HeaderDayText() {
  const isMobile = useIsMobile();

  const { day } = useCalendarStore();

  return (
    <span className={`font-semibold ${isMobile ? "text-xs" : "text-sm"}`}>
      {day}
    </span>
  );
}
