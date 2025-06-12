import MonthText from "./MonthText";
import WeekDayList from "./WeekDayList";
import YearText from "./YearText";

export default function CalendarHeader() {
  return (
    <div className="bg-beige-normal relative flex h-[18%] w-full flex-col items-center justify-end">
      <YearText year={2025} />
      <MonthText month={6} />
      <WeekDayList />
    </div>
  );
}
