"use client";

import useCalendarStore from "@/_shared/store/calendar";

import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

export default function MonthText() {
  const { month } = useCalendarStore();

  return (
    <div className="mb-4 flex w-full items-center justify-center">
      <LeftButton />
      <span className="font-semibold">{month}</span>
      <RightButton />
    </div>
  );
}
