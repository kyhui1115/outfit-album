"use client";

import useCalendarStore from "@/_shared/store/calendar";
import { isMobile } from "@/_shared/utils/isMobile";

export default function HeaderDayText() {
  const { day } = useCalendarStore();

  return (
    <span className={`font-semibold ${isMobile() ? "text-xs" : "text-sm"}`}>
      {day}
    </span>
  );
}
