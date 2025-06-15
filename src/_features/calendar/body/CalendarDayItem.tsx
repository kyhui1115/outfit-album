import CalendarDayItemBodyButton from "./CalendarDayItemBodyButton";
import CalendarDayItemHeader from "./CalendarDayItemHeader";

interface Props {
  idx: number;
  date: number;
}

export default function CalendarDayItem({ idx, date }: Props) {
  return (
    <div
      className={`h-[80px] w-full border-b ${(idx + 1) % 7 === 0 ? "" : "border-r"}`}
    >
      <CalendarDayItemHeader date={date} />
      <CalendarDayItemBodyButton date={date} />
    </div>
  );
}
