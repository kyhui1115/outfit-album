"use client";

import dayjs from "dayjs";

import useCalendarStore from "@/_shared/store/calendar";

import CalendarDayItem from "./CalendarDayItem";
import CalendarEmptyDayItem from "./CalendarEmptyDayItem";

export default function CalendarBody() {
  const { year, month } = useCalendarStore();
  const firstDay = dayjs(`${year}-${month}-1`).day();
  const daysInMonth = dayjs(`${year}-${month}-1`).daysInMonth();

  const isCalendarDayList = defaultDayList.map((day, idx) => {
    if (firstDay <= idx && idx < daysInMonth) {
      return true;
    } else {
      return day;
    }
  });

  return (
    <div className="grid w-full grid-cols-7">
      {isCalendarDayList.map((isDay, idx) =>
        isDay ? (
          <CalendarDayItem key={idx} idx={idx} />
        ) : (
          <CalendarEmptyDayItem key={idx} idx={idx} />
        ),
      )}
    </div>
  );
}

const defaultDayList = Array(35).fill(false);
