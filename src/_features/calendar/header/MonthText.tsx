"use client";

import useCalendarStore from "@/_shared/store/calendar";

export default function MonthText() {
  const { month } = useCalendarStore();

  return <span className="mb-4 font-semibold">{month}</span>;
}
