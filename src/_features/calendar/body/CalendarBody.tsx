"use client";

import dayjs from "dayjs";

import useCalendarStore from "@/_shared/store/calendar";

import CalendarDayItem from "./CalendarDayItem";
import CalendarEmptyDayItem from "./CalendarEmptyDayItem";

export default function CalendarBody() {
  const { year, month } = useCalendarStore();
  const firstDate = dayjs(`${year}-${month}-1`).day();
  const daysInMonth = dayjs(`${year}-${month}-1`).daysInMonth();

  const calendarDateList = Array.from({ length: 42 }, (_, idx) => {
    return {
      date: idx - firstDate + 1,
      isDay: idx >= firstDate && idx < firstDate + daysInMonth,
    };
  });

  return (
    <div className="grid w-full grid-cols-7">
      {calendarDateList.map((day, idx) =>
        day?.isDay ? (
          <CalendarDayItem key={idx} idx={idx} date={day?.date} />
        ) : (
          <CalendarEmptyDayItem key={idx} idx={idx} />
        ),
      )}
    </div>
  );
}
