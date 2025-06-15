import CalendarDayItemBodyButton from "./CalendarDayItemBodyButton";
import CalendarDayItemHeader from "./CalendarDayItemHeader";

interface Props {
  idx: number;
}

export default function CalendarDayItem({ idx }: Props) {
  return (
    <div
      className={`h-[80px] w-full border-b ${(idx + 1) % 7 === 0 ? "" : "border-r"}`}
    >
      <CalendarDayItemHeader idx={idx} />
      <CalendarDayItemBodyButton idx={idx} />
    </div>
  );
}
