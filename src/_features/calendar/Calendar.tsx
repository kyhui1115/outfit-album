import CalendarBody from "./body/CalendarBody";
import CalendarHeader from "./header/CalendarHeader";

export default function Calendar() {
  return (
    <div className="border-darkgray flex h-full w-[96%] shrink-0 flex-col border-x border-t">
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}
