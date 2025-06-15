import CalendarBody from "./body/CalendarBody";
import CalendarHeader from "./header/CalendarHeader";

export default function Calendar() {
  return (
    <div className="border-darkgray flex h-[540px] w-[90%] flex-col border-x border-t">
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}
