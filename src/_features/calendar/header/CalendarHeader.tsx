import MonthText from "./MonthText";
import WeekDayList from "./WeekDayList";
import YearText from "./YearText";

export default function CalendarHeader() {
  return (
    <div className="bg-beige-normal relative flex h-[90px] w-full flex-col items-center justify-center border-b">
      <MonthText />
      <YearText />
      <WeekDayList />
    </div>
  );
}
