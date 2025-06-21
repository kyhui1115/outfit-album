"use client";

import useCalendarStore from "@/_shared/store/calendar";

export default function HeaderDayText() {
  const { day } = useCalendarStore();

  return <span className="text-sm font-semibold">{day}</span>;
}
