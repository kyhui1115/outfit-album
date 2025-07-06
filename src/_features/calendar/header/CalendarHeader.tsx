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
      className={`bg-beige-100 relative flex w-full shrink-0 flex-col items-center justify-center ${isMobile ? "h-[80px]" : "h-[110px]"}`}
    >
      <MonthText slide={slide} />
      <YearText slide={slide} />
      <WeekDayList />
    </div>
  );
}
