import CalendarBody from "./body/CalendarBody";
import CalendarHeader from "./header/CalendarHeader";

interface Props {
  slide: number;
}

export default function Calendar({ slide }: Props) {
  return (
    <div className="border-darkgray mx-3 flex h-[570px] w-full shrink-0 flex-col border-x border-t bg-white">
      <CalendarHeader slide={slide} />
      <CalendarBody slide={slide} />
    </div>
  );
}
