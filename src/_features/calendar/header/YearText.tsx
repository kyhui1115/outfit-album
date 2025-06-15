"use client";

import useCalendarStore from "@/_shared/store/calendar";

export default function YearText() {
  const { year } = useCalendarStore();

  return <span className="absolute top-1 right-2 text-[10px]">{year}</span>;
}
