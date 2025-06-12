import CalendarBody from "./body/CalendarBody";
import CalendarHeader from "./header/CalendarHeader";

export default function Calendar() {
  return (
    <div className="border-darkgray flex h-[60%] w-[98%] flex-col border">
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}
