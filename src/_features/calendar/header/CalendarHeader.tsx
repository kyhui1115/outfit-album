import { useIsMobile } from "@/_shared/hooks/useIsMobile";

import MonthText from "./MonthText";
import WeekDayList from "./WeekDayList";
import YearText from "./YearText";

interface Props {
  slide: number;
}

export default function CalendarHeader({ slide }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`bg-beige-normal relative flex w-full flex-col items-center justify-center border-b ${isMobile ? "h-[90px]" : "h-[120px]"}`}
    >
      <MonthText slide={slide} />
      <YearText slide={slide} />
      <WeekDayList />
    </div>
  );
}
