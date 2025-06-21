import MonthText from "./MonthText";
import WeekDayList from "./WeekDayList";
import YearText from "./YearText";

interface Props {
  slide: number;
}

export default function CalendarHeader({ slide }: Props) {
  return (
    <div className="bg-beige-normal relative flex h-[90px] w-full flex-col items-center justify-center border-b">
      <MonthText slide={slide} />
      <YearText slide={slide} />
      <WeekDayList />
    </div>
  );
}
