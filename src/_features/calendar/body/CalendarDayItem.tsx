import { useIsMobile } from "@/_shared/hooks/useIsMobile";

import CalendarDayItemBodyButton from "./CalendarDayItemBodyButton";
import CalendarDayItemHeader from "./CalendarDayItemHeader";

interface Props {
  idx: number;
  date: number;
}

export default function CalendarDayItem({ idx, date }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`w-full border-b ${isMobile ? "h-[80px]" : "h-[115px]"} ${(idx + 1) % 7 === 0 ? "" : "border-r"}`}
    >
      <CalendarDayItemHeader date={date} />
      <CalendarDayItemBodyButton date={date} />
    </div>
  );
}
