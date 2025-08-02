import dayjs from "dayjs";

import DIC from "@/_shared/dictionary";
import useCalendarStore from "@/_shared/store/calendar";

import CalendarDayItem from "./CalendarDayItem";
import CalendarEmptyDayItem from "./CalendarEmptyDayItem";

interface Props {
  slide: number;
}

export default function CalendarBody({ slide }: Props) {
  const { year, month } = useCalendarStore();

  const adjustedMonth = () => {
    const currentMonth = month + slide;

    if (currentMonth === 0) {
      return 12;
    }

    if (currentMonth === 13) {
      return 1;
    }

    return currentMonth;
  };

  const adjustedYear = () => {
    const currentMonth = month + slide;

    if (currentMonth === 0) {
      return year - 1;
    }

    if (currentMonth === 13) {
      return year + 1;
    }

    return year;
  };

  const firstDate = dayjs(`${adjustedYear()}-${adjustedMonth()}-1`).day();
  const daysInMonth = dayjs(
    `${adjustedYear()}-${adjustedMonth()}-1`,
  ).daysInMonth();
  const calendarDateList = Array.from({ length: 42 }, (_, idx) => {
    return {
      date: idx - firstDate + 1,
      isDay: idx >= firstDate && idx < firstDate + daysInMonth,
    };
  });

  // 420px

  return (
    <div className="grid h-full w-full grid-cols-7">
      {calendarDateList.map((day, idx) =>
        day?.isDay ? (
          <CalendarDayItem
            key={idx}
            idx={idx}
            date={day?.date}
            imageUrl={
              DIC.calendarData.find(d => d.date === day.date)?.image ?? null
            }
            id={DIC.calendarData.find(d => d.date === day.date)?.id || ""}
          />
        ) : (
          <CalendarEmptyDayItem key={idx} idx={idx} />
        ),
      )}
    </div>
  );
}
