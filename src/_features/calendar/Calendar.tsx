import CalendarBody from "./body/CalendarBody";
import CalendarHeader from "./header/CalendarHeader";

interface Props {
  slide: number;
}

export default function Calendar({ slide }: Props) {
  return (
    <div
      className={`border-beige-300 z-0 mx-3 flex h-full w-full shrink-0 flex-col border bg-white`}
    >
      <CalendarHeader slide={slide} />
      <CalendarBody slide={slide} />
    </div>
  );
}
